import React from 'react';
// import { useState } from 'react';
import Header from './Header';
import styled from 'styled-components';
import Lista from './Lista';

export default function Tela1(){

    
    return(
        <>
        <Header/>
        <Titulo>Selecione o filme</Titulo>
        <Lista/>
        </>
    )
}

const Titulo = styled.p`
margin-top:35px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
color: #293845;

`