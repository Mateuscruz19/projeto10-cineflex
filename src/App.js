import React from 'react';
// import { useState } from 'react';
import Header from './Header';
import styled from 'styled-components';
import Lista from './Lista';
import Tela1 from './Tela1';
import Tela2 from './Tela2';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App(){
    
    return(
        <BrowserRouter>
        <ScreenConteiner>
            <Routes>
            <Route path='/' element={<Tela1/>}/>
            <Route path="/tela2/:filmeId" element={<Tela2/>}/>
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