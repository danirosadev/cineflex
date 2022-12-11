import { SeatButton } from "./style"

export default function Seat({ seatName, isAvailable, handleSeats, isSelected, seat }) {

    return (
        <SeatButton data-test="seat" onClick={() => handleSeats(seat)} isSelected={isSelected} isAvailable={isAvailable}>{seatName}</SeatButton>
    )
}