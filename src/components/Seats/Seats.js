import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import Seat from "./Seat"
import { Container, Title, Body, Caption, SeatButton, InputContainer, Input, Button } from "./style"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

export default function Seats({ setBuyerInfo, setDia, setHora, dia, hora, filme, poster }) {
    const [seats, setSeats] = useState([])
    const [session, setSession] = useState({})
    const [selected, setSelected] = useState([])
    const [form, setForm] = useState({name: "", cpf: ""})
    const navigate = useNavigate()

    const { showtimeId } = useParams()

    // function selecionarAssento(seat) {
    //         setClicked([...clicked, seat])
    //         setIds([...ids, seat.id])
    //     } else {
    //         alert("Esse assento não está disponível");
    //     }

    //     if(seat.isSelected){
    //         setAssentos([...assentos, seat.name])
    //     }
        
    // }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${showtimeId}/seats`)
        promise.then((res) => {
            setSession(res.data)
            setSeats(res.data.seats)
            setDia(res.data.day.date)
            setHora(res.data.name)
        })
    }, [])

    function handleSeats(seat){
        if (seat.isAvailable === false){
            alert("Este assento não está disponível")
        } else {
            const isSelected = selected.some(s => seat.id === s.id)
            if (isSelected){
                const newArray = selected.filter(s => seat.id !== s.id)
                setSelected(newArray)
            } else {
                setSelected([...selected, seat])
            }  
        }  
    }

    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    function sendForm(e) {
        e.preventDefault()

        const body = { 
            ids: selected.map(s => s.id),
            ...form
        }

        const info = {
            movie: session.movie.title,
            date: session.day.date,
            hour: session.name,
            buyerName: form.name,
            cpf: form.cpf,
            seats: selected.map(s => s.name)
        }

        const promise = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", body)

        promise.then(() => {
            navigate("/sucesso")
            setBuyerInfo(info)
        })

        promise.catch((err) => {
            console.log(err.response.data.message)
        })
    }

    return (
        <Container>
            <Header />
            <Title>Selecione o(s) assento(s):</Title>
            <Body>
                {seats.map((seat) =>
                    <Seat
                        key={seat.id}
                        seatId={seat.id}
                        seatName={seat.name}
                        seat={seat}
                        isAvailable={seat.isAvailable}
                        isSelected={selected.some(s => seat.id === s.id)}
                        handleSeats={handleSeats} />
                )}

                <Caption>
                    <div>
                        <SeatButton isSelected={true} isAvailable={true} />
                        <p>Selecionado</p>
                    </div>
                    <div>
                        <SeatButton isAvailable={true} />
                        <p>Disponível</p>
                    </div>
                    <div>
                        <SeatButton isAvailable={false} />
                        <p>Indisponível</p>
                    </div>
                </Caption>
                <form onSubmit={sendForm}>
                    <InputContainer>
                        <p>Nome do comprador:</p>
                        <Input data-test="client-name" 
                            name="name" 
                            type='text' 
                            value={form.name} 
                            onChange={handleForm} 
                            placeholder='Digite seu nome' 
                            required></Input>
                    </InputContainer>
                    <InputContainer>
                        <p>CPF do comprador:</p>
                        <Input data-test="client-cpf" 
                            name="cpf" 
                            type='text' 
                            // pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
                            value={form.cpf} 
                            onChange={handleForm} 
                            placeholder='Digite seu CPF' 
                            required></Input>
                    </InputContainer>

                    <Button data-test="book-seat-btn" type='submit'>Reservar assentos</Button>

                </form>
            </Body>

            <Footer
            miniPoster={poster}
            title={filme}
            >
                {dia} - {hora}
            </Footer>
        </Container>
    )
}