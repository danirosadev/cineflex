import GlobalStyle from "../../GlobalStyle"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Movies from "../Movies/Movies"


export default function App(){

    return(
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Movies />} />
            </Routes>
        </BrowserRouter>
    )
}