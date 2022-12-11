import { Link } from "react-router-dom"
import {Container, SucessTitle, Subtitle, Button, InfoContainer} from "./style"
import Header from "../Header/Header"

export default function Success({buyerInfo}){

    return(
        <>
            <Header />
            <Container>
                <SucessTitle>Pedido feito com sucesso!</SucessTitle>
                <div>
                    <div data-test="movie-info">
                        <Subtitle>Filme e sessão</Subtitle>
                        <InfoContainer>{buyerInfo.movie}</InfoContainer>
                        <InfoContainer>{buyerInfo.date} - {buyerInfo.hour}</InfoContainer>
                    </div>
                    <div data-test="seats-info">
                        <Subtitle>Ingressos</Subtitle>
                        {buyerInfo.seats.map((a, index) => 
                            <InfoContainer key={index}>Poltrona {a}</InfoContainer>
                        )}
                        

                    </div>
                    <div data-test="client-info">
                        <Subtitle>Comprador</Subtitle>
                        <InfoContainer>Nome: {buyerInfo.buyerName}</InfoContainer>
                        <InfoContainer> CPF: {buyerInfo.cpf}</InfoContainer>
                    </div>
                </div>
                <Link to="/">
                    <Button data-test="go-home-btn">Voltar para Home</Button>
                </Link> 
            </Container>
        </>
    )
}