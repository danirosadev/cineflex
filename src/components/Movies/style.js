import styled from "styled-components";

const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 70px;
`

const Title = styled.p`
    width: 100%;
    text-align: center;
    margin: 10px;
    font-size: 20px;
    color: #293845;
`


const PosterContainer = styled.div`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin: 10px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PosterImg = styled.img`
    width: 129px;
    height: 193px;
    cursor: pointer;
`

export {Container, Title, PosterContainer, PosterImg}