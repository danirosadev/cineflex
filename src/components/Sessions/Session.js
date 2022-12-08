import { DateText, HourButton, DateContainer } from "./style"
import { Link } from "react-router-dom"

export default function Session({date, weekday, showtimes}) {
    return (
        <DateContainer data-test="movie-day">
            <DateText>{weekday} - {date}</DateText>
            <div>
                <Link to={`/assentos/${showtimes[0].id}`}>
                    <HourButton data-test="showtime">{showtimes[0].name}</HourButton>
                </Link>
                <Link to={`/assentos/${showtimes[1].id}`}>
                    <HourButton data-test="showtime">{showtimes[1].name}</HourButton>
                </Link>
            </div>
        </DateContainer>
    )
}