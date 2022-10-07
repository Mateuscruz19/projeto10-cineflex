import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import styled from 'styled-components';
import Lista from './Lista';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Botao(props){


    return(
        <Sessao><p>{props.horario}</p></Sessao>
    )
}

const Sessao = styled.button`
width: 83px;
height: 43px;
margin-top:5px;
border:none;
outline:none;
margin-left:5px;
left: 114px;
top: 227px;
background: #E8833A;
border-radius: 3px;

p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.02em;
color: #FFFFFF;
}
`