import { useState, useEffect } from "react"
import axios from "axios"
import { Container, Title } from "./style"
import Movie from "./Movie"
import Header from "../Header/Header"

export default function Movies(){
    const [listaFilmes, setListaFilmes] = useState([])

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        promise.then((res) => {
            setListaFilmes(res.data)
        })
    }, [])

    return(
        <Container>
            <Header />
            <Title>Selecione o filme:</Title>
            {listaFilmes ? (
                listaFilmes.map((f) => 
                <Movie 
                key={f.id} 
                poster={f.posterURL}
                filmId={f.id}
                title={f.title}
                />)
                ) : (
                    "...carregando"
                )
            }
        </Container>
    )
}