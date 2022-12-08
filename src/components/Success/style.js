import styled from "styled-components"

const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 70px;
    margin-left: 20px;
`

const SucessTitle = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #247A6B;
    margin: 20px;
    text-align: center;
`

const Subtitle = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 18px;
    color: #293845;
    margin-top: 25px;
`

const Button = styled.button`
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    color: #FFFFFF;
    border: none;
    margin-left: 40px;
    margin-top: 20px;
    font-size: 18px;
`

const InfoContainer = styled.div`
    margin: 8px 0 8px 0;
    font-size: 20px;
`

export {Container, SucessTitle, Subtitle, Button, InfoContainer}