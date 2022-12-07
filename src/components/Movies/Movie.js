import { Link } from "react-router-dom"
import { PosterContainer, PosterImg } from "./style"

export default function Movie({poster}) {
    return (
        <PosterContainer>
            <Link to="">
                <PosterImg data-identifier="movie-outdoor" src={poster} alt="cartaz" />
            </Link>
        </PosterContainer>
    )
}