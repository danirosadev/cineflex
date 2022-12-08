import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import Seat from "./Seat"
import { Container, Title, Body, Caption, SeatButton, InputContainer, Input, Button } from "./style"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

export default function Seats({ setCpf, setName, setIds, assentos, setAssentos, name, cpf, ids, setDia, setHora, dia, hora, filme, poster }) {
    const [seats, setSeats] = useState([])
    const [selected, setSelected] = useState(true)
    const [clicked, setClicked] = useState([])
    const navigate = useNavigate()

    const { showtimeId } = useParams()

    function selecionarAssento(seat) {
        
        if (seat.isAvailable) {
            seat["isSelected"] = selected
            setSelected(!selected)
            setClicked([...clicked, seat])
            setIds([...ids, seat.id])
        } else {
            alert("Esse assento não está disponível");
        }

        if(seat.isSelected){
            setAssentos([...assentos, seat.name])
        }
        
    }

    function sendForm(e) {
        e.preventDefault()

        const body = { ids, name, cpf,}
        console.log(body)

        const promise = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", body)

        promise.then(() => {
            console.log("pedido feito")
            navigate("/sucesso")
        })

        promise.catch((err) => {
            console.log(err.response.data.message)
        })
    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${showtimeId}/seats`)
        promise.then((res) => {
            setSeats(res.data.seats)
            setDia(res.data.day.date)
            setHora(res.data.name)
        })
    }, [])

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
                        isAvailable={seat.isAvailable}
                        isSelected={seat.isSelected}
                        selecionarAssento={() => selecionarAssento(seat)} />
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
                        <Input data-test="client-name" type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Digite seu nome' required></Input>
                    </InputContainer>
                    <InputContainer>
                        <p>CPF do comprador:</p>
                        <Input data-test="client-cpf" type='text' pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" value={cpf} onChange={e => setCpf(e.target.value)} placeholder='Digite seu nome' required></Input>
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