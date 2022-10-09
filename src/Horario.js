import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import styled from 'styled-components';
import Lista from './Lista';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Botao from './botaosessao';
import { Link } from 'react-router-dom';

export default function Horario(props){


    return(
       <Sessoes>
            <p>{props.dias.weekday} - {props.dias.date}</p>
            <ul>
                {props.dias.showtimes.map( (s) => <Link to={`/tela3/${s.id}`}><Botao horario={s.name}></Botao></Link>)}
               
            </ul>
        </Sessoes>
    )
}

const Sessoes = styled.li`
width:100vw;
height:130px;
margin-top:20px;
margin-bottom:20px;

p{
 padding:10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;
letter-spacing: 0.02em;

color: #293845;
}

ul{
    padding:10px;
}
`