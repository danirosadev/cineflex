import {Container, Frame, MiniPoster, InfoContainer} from "./style"

export default function Footer({miniPoster, title, children}){

    return(
        <Container data-test="footer">
            <Frame>
                <MiniPoster src={miniPoster} alt=""/>
            </Frame>
            <div>
                <InfoContainer>{title}</InfoContainer>
                <InfoContainer>{children}</InfoContainer>
            </div>
        </Container>
    );
}