import React from 'react';
import { useState } from 'react';
import Header from './Header';
import styled from 'styled-components';
import Lista from './Lista';
import Tela1 from './Tela1';
import Tela2 from './Tela2';
import Tela3 from './Tela3';
import Tela4 from './Tela4';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App(){
    
    const [Idfilme, setIdfilme] = useState(0)
    const [Reserva, setReserva] = useState([])
    const [Final, setFinal] = useState()
    const [NameCadeiras, setCadeiras] = useState([])
    const [Sessao, setSessao] = useState("Enola Holmes")
    const [Data, setData] = useState("24/06/2021")
    const [Hora, setHora] = useState("13:00")
    const [Nome, setNome] =useState("Joao da Silva")    
    const [CPF, setCPF] = useState("999999999")
    const [AssentosReservados, setReservado] = useState([])

    return(
        <BrowserRouter>
        <ScreenConteiner>
            <Routes>
            <Route path='/' element={<Tela1 idfilme={Idfilme} setIdfilme={setIdfilme} />}/>
            <Route path="/sessoes/:filmeId" element={<Tela2 idfilme={Idfilme} setIdfilme={setIdfilme} />}/>
            <Route path="/assentos/:sessaoId" element={<Tela3 setReservado={setReservado} AssentosReservados={AssentosReservados} final={Final}  setFinal={setFinal} res={Reserva} nc={setCadeiras} ncs={NameCadeiras} s={setSessao} d={setData} h={setHora} n={setNome} c={setCPF} setReserva={setReserva}/>} />
            <Route path="/sucesso" element={<Tela4 final={Final} nc={setCadeiras} ncs={NameCadeiras} s={Sessao} d={Data} h={Hora} n={Nome} c={CPF} />}/>
            </Routes>
        </ScreenConteiner>
        </BrowserRouter>
    )
}

const ScreenConteiner = styled.main`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

`