import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Container, Title, Body } from "./style"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Session from "./Session"

export default function Sessions({ setFilme, setPoster, filme, poster }) {
    const [sessoes, setSessoes] = useState([])
    const { filmId } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmId}/showtimes`)
        promise.then((res) => {
            setSessoes(res.data.days)
            setFilme(res.data.title)
            setPoster(res.data.posterURL)
        })

    }, [])

    return (
        <Container>
            <Header />
            <Title>Selecione o horário:</Title>
            <Body>
                {sessoes.map((s) =>
                    <Session
                        key={s.id}
                        sessaoId={s.id}
                        date={s.date}
                        weekday={s.weekday}
                        showtimes={s.showtimes}
                        showtimeId={s.showtimes.id} />
                )}
            </Body>
            <Footer
                miniPoster={poster}
                title={filme}
            />
        </Container>
    )
}