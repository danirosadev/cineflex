import { Link } from "react-router-dom"
import { PosterContainer, PosterImg } from "./style"

export default function Movie({poster, filmId}) {
    return (
        <PosterContainer data-test="movie">
            <Link to={`/sessoes/${filmId}`}>
                <PosterImg src={poster} alt="cartaz" />
            </Link>
        </PosterContainer>
    )
}