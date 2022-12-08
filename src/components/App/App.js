import GlobalStyle from "../../GlobalStyle"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Movies from "../Movies/Movies"
import Sessions from "../Sessions/Sessions"

export default function App(){
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [ids, setIds] = useState([])
  const [assentos, setAssentos] = useState([])
  const [filme, setFilme] = useState('')
  const [dia, setDia] = useState('')
  const [hora, setHora] = useState('')
  const [poster, setPoster] = useState('')

    return(
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/sessoes/:filmId" 
                    element={<Sessions 
                    filme={filme} setFilme={setFilme} 
                    poster={poster} setPoster={setPoster}
                    />} />
            </Routes>
        </BrowserRouter>
    )
}