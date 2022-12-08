import styled from "styled-components"

const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
`

const Title = styled.p`
    width: 100%;
    text-align: center;
    margin-top: 20px;
    font-size: 20px;
    color: #293845;
`

const Body = styled.div`
    margin-bottom: 120px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const DateText = styled.p`
    width: 100%;
    text-align: center;
    margin: 10px;
    font-size: 15px;
    color: #293845;
`

const HourButton = styled.button`
    width: 75px;
    height: 35px;
    background: #E8833A;
    border: none;
    border-radius: 3px;
    color: #ffffff;
    margin: 10px;
    font-size: 12px;
    cursor: pointer;
`

export { Container, Title, Body, DateContainer, DateText, HourButton}