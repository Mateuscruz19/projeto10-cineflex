import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Horarios from './Horarios';
import filmeteste from './filmeteste';

export default function Cadeira(props){

    const [Clicou, setClicou] = useState(false)

    function AdcionarAssento(){
        console.log("Voceclicou")
        props.setReservados([...props.reservados,props.cadeiras.id])
        console.log(props.reservados)
        if(Clicou === false){
            setClicou(true)
        }else if(Clicou === true){
            setClicou(false)
        }
    }

    function AssentoOcupado(){
            alert("Assento ocupado preste atenção na legenda,tente novamente!")
    }

    return(
    <>
    <Assento cor={Clicou ? "#1AAE9E" : props.cadeiras.isAvailable ? "#C3CFD9" : "#FBE192"} ocupado={props.cadeiras.isAvailable} onClick={props.cadeiras.isAvailable ? AdcionarAssento : AssentoOcupado}>{props.cadeiras.id}</Assento>
    </>
    )
}

const Assento = styled.li`
width: 26px;
height: 26px;
background: ${props => props.cor};
border: 1px solid #808F9D;
border-radius: 12px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
display: grid;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
color: #000000;
justify-content:center;
cursor: ${props => !props.ocupado ? "default" : "pointer"}

`