import { SeatButton } from "./style"

export default function Seat({ seatName, isAvailable, selecionarAssento, isSelected }) {

    return (
        <SeatButton data-test="seat" onClick={selecionarAssento} isSelected={isSelected} isAvailable={isAvailable}>{seatName}</SeatButton>
    )
}