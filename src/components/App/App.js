import GlobalStyle from "../../GlobalStyle"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Movies from "../Movies/Movies"
import Sessions from "../Sessions/Sessions"
import Seats from "../Seats/Seats"

export default function App() {
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [ids, setIds] = useState([])
  const [assentos, setAssentos] = useState([])
  const [filme, setFilme] = useState('')
  const [dia, setDia] = useState('')
  const [hora, setHora] = useState('')
  const [poster, setPoster] = useState('')

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
            name={name} setName={setName}
            cpf={cpf} setCpf={setCpf}
            ids={ids} setIds={setIds}
            assentos={assentos} setAssentos={setAssentos}
            dia={dia} hora={hora}
            setDia={setDia} setHora={setHora}
            filme={filme} poster={poster}
          />} />
      </Routes>
    </BrowserRouter>
  )
}