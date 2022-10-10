import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import styled from 'styled-components';
import Lista from './Lista';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Horarios from './Horarios';
import Cadeira from './Cadeira';
import filmeteste from './filmeteste';
import { Link } from 'react-router-dom';

export default function Tela3(props){


    console.log(props.final)

    return(
        <>
        <Header></Header>
        <Titulo>Pedido feito com sucesso!</Titulo>
        <ContainerDados>
        <Resultado>
            <DadosComprador>Filme e sessão</DadosComprador>
            <p>{props.s} <br/> {props.d}- {props.h}</p>
        </Resultado>
        <Resultado>
            <DadosComprador>Ingressos</DadosComprador>
           {props.ncs.map((a) => <p>Assento {a}</p>)}     
            
        </Resultado>
        <Resultado>
            <DadosComprador>Comprador</DadosComprador>
            <p>Nome:{props.n}</p>
            <p>CPF:{props.c}</p>
        </Resultado>
        </ContainerDados>
        <Link to={`/`}>
            <Home>Voltar pra Home</Home>
            </Link>
        
        </>
    )
}

const Titulo = styled.p`

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
margin-top:30px;
color: #247A6B;
`

const DadosComprador = styled.h1`
font-family: 'Roboto';
font-style:normal;
font-weight: 700;
font-size: 30px;
line-height: 28px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
font-weight: bold;
color: #293845;
`

const ContainerDados = styled.div`
margin-top:30px;
width:350px;
height:400px;
`
const Resultado = styled.div`
margin-top:20px;
padding:10px;
width:250px;

p{
  margin-top:10px;
 font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
color: #293845;
}
`


const Home = styled.button`

margin-top:40px;
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
border:none;
outline:none;
justify-content:center;
color: #FFFFFF;
`