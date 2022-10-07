import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import styled from 'styled-components';
import Lista from './Lista';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Horario(props){

    return(
       <Sessoes>
            <p>{props.dias.weekday}</p>
        </Sessoes>
    )
}

const Sessoes = styled.li`
width:100vw;
height:130px;
background-color:orange;
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
`