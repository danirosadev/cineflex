import styled from "styled-components"

function returnColor(isAvailable, isSelected) {
    if (isAvailable === true && isSelected === true) {
        return "#1AAE9E"
    }
    if (isAvailable === true) {
        return "#C3CFD9"
    }
    if (isAvailable === false) {
        return "#FBE192"
    }
}

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
    margin: 10px;
    font-size: 20px;
    color: #293845;
`

const Body = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 125px;
`

const SeatButton = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    background-color: ${(props) =>
        returnColor(props.isAvailable, props.isSelected)};
    border: none;
`

const Caption = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 380px;
    margin-bottom: 25px;
    div{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`

const Input = styled.input`
    width: 327px;
    height: 51px;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
`

const InputContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin: 15px 0;
`

const Button = styled.button`
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    color: #FFFFFF;
    border: none;
    margin-left: 40px;
    font-size: 18px;
`

export {returnColor, Container, Title, Body, SeatButton, Caption, Input, InputContainer, Button}