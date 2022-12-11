import GlobalStyle from "../../GlobalStyle"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Movies from "../Movies/Movies"
import Sessions from "../Sessions/Sessions"
import Seats from "../Seats/Seats"
import Success from "../Success/Success"

export default function App() {
  const [filme, setFilme] = useState('')
  const [dia, setDia] = useState('')
  const [hora, setHora] = useState('')
  const [poster, setPoster] = useState('')
  const [buyerInfo, setBuyerInfo] = useState({})

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/sessoes/:filmId"
          element={<Sessions
            filme={filme} setFilme={setFilme}
            poster={poster} setPoster={setPoster}
          />} />
        <Route path="/assentos/:showtimeId"
          element={<Seats
            setBuyerInfo={setBuyerInfo}
            dia={dia} hora={hora}
            setDia={setDia} setHora={setHora}
            filme={filme} poster={poster}
          />} />
        <Route path="/sucesso"
          element={<Success
            buyerInfo={buyerInfo}
          />} />
      </Routes>
    </BrowserRouter>
  )
}