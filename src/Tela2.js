import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import styled from 'styled-components';
import Lista from './Lista';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Horarios from './Horarios';

export default function Tela2(props){

    const [titulo, setTitulo] = useState()
    const [imagem, setImagem] = useState()
    const [filme, setFilme] = useState(undefined)

    const { filmeId } = useParams();


    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`)

        promise.then((res) => {
            setTitulo(res.data.title)
            setImagem(res.data.posterURL)
            setFilme(res.data)
        })

        promise.catch((err) => {
            console.log(err.response.data)
        })
    },[])

        


    return(
        <>
        <Header/>
        <Titulo>Selecione o horário</Titulo>
        <Horarios filme={filme}/>
        <Footer>
        <Imagem>
            <img src={imagem}/>
            </Imagem>
            <p>{titulo}</p>
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