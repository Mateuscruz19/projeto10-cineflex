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

export default function Tela3(props){

    const [AssentosReservados, setReservado] = useState([])



    return(
        <>
        <Header></Header>
        <Titulo>Selecione o(s) assento(s)</Titulo>
        <AssentosLista>
         {filmeteste.seats.map((p) => <Cadeira cadeiras={p} reservados={AssentosReservados} setReservados={setReservado} setReserva={props.setReserva}/>)}   
        </AssentosLista>
        <Legenda>
            <Selecionado/>
            <Disponivel/>
            <Indisponivel/>
            <p>Selecionado</p>
            <p>Disponivel</p>
            <p>Indisponivel</p>
        </Legenda>
        <Dados>
            <p>Nome do comprador:</p>
            <input placeholder='Digite seu nome...'></input>
            <p>CPF do comprador:</p>
            <input placeholder='Digite seu CPF'></input>
        </Dados>
        <Finalizar>Reservar assento(s)</Finalizar>

        <Footer>
        <Imagem>
            <img src="https://external-preview.redd.it/ObVX0Y57PNuWshGNDSCFvJMKyNjsDPbII2erz8WEO0U.jpg?auto=webp&s=d692a86c84d80c5e7149a63947cf8e9fa78ac075"/>
            </Imagem>
            <p>BATMAN<br/>Quinta Feira - 16:30</p>
            
        </Footer>
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


const Footer = styled.div`
width:100%;
height: 117px;
display:flex;
flex-direction:row;
background: #DFE6ED;
border: 1px solid #9EADBA;
bottom: 0;
left:0;
position:fixed;

p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
display: flex;
align-items: center;
margin-left:20px;
color: #293845;

}
`

const Imagem = styled.div`
width: 64px;
height: 89px;
left: 10px;
bottom: 14px;
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
display:flex;
justify-content:center;
align-items:center;
margin-left:20px;
margin-top:10px;

img{
width: 48px;
height: 72px;
left: 18px;
bottom: 23px;

}

`

const AssentosLista = styled.ul`
margin-top:25px;
margin-left:10px;
display: grid;
grid-template-columns: repeat(10, 1fr);
width:100%;
height:200px;
`

const Legenda = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
margin-top:20px;
width:70%;
height:50px;

p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;
    color: #4E5A65;
    margin-top:20px;
}
`

const Selecionado = styled.div`
box-sizing: border-box;
position: absolute;
width: 25px;
height: 25px;
left: 78px;
top: 377px;
background: #1AAE9E;
border: 1px solid #0E7D71;
border-radius: 17px;
`
const Disponivel = styled.div`
box-sizing: border-box;
position: absolute;
width: 24px;
height: 24px;
left: 178px;
top: 377px;
background: #C3CFD9;
border: 1px solid #7B8B99;
border-radius: 17px;
`
const Indisponivel = styled.div`

box-sizing: border-box;
position: absolute;
width: 24px;
height: 24px;
left: 271px;
top: 377px;
background: #FBE192;
border: 1px solid #F7C52B;
border-radius: 17px;
`

const Dados = styled.div`
margin-top:10px;
margin-bottom:10px;
width:85%;
height:140px;

p{
    font-family: 'Roboto';
    margin-top:10px;
    margin-bottom:10px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #293845;
}

input{
    width: 327px;
    height: 51px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #AFAFAF;
}

`

const Finalizar = styled.button`
margin-top:70px;
width: 225px;
height: 42px;
left: 72px;
top: 688px;
background: #E8833A;
border-radius: 3px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
justify-content:center;
text-align: center;
letter-spacing: 0.04em;
color: #FFFFFF;
border:none;
outline:none;
`

