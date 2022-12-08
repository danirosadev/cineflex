import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 117px;
    background-color: #DFE6ED;
    border-top: 1px solid #9EADBA;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    margin-top: 20px;
`

const Frame = styled.div`
    width: 64px;
    height: 89px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MiniPoster = styled.img`
    width: 48px;
    height: 72px;
`

const InfoContainer = styled.div`
    margin: 8px 0 8px 0;
    font-size: 18px;
    text-align: center;
`

export {Container, Frame, MiniPoster, InfoContainer}