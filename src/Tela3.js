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
import { useNavigate } from 'react-router-dom';

export default function Tela3(props){

    const [Cadeiraserver, setServer] = useState([])
    const [Assento, setAssento] = useState([])
    const [titulo, setTitulo] = useState("")
    const [imagem, setImagem] = useState("")
    const [Dia, setDia] = useState("")
    const [Hora, setHora] = useState("")
    
    const [Nome, setNome] = useState("");
    const [CPF, setCPF] = useState("");
    const [error, setError] = useState(false) 

    const { sessaoId } = useParams();
   
    let navigate = useNavigate();

    function Reservar(event){
        event.preventDefault();
        props.s(titulo)
        props.d(Dia)
        props.h(Hora)
        props.n(Nome)
        props.c(CPF)
        
        const obj = {
            ids: props.AssentosReservados, name:Nome, cpf: CPF
        }

        props.setFinal(obj)

        console.log(props.res)

        if(props.AssentosReservados.length>0){
            const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",obj)
            promise.then((res) => navigate("/sucesso"))
            promise.catch((err) => console.log(err.response))
        }
        
    }
    
  useEffect(() => {

    const URL =  `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`
    const promise = axios.get(URL)

    promise.then((res) => {
        setServer(res.data)
        setTitulo(res.data.movie.title)
        setImagem(res.data.movie.posterURL)
        setDia(res.data.day.weekday)
        setHora(res.data.name)
        setAssento(res.data.seats)
        console.log(res.data)
    })
    
    promise.catch((err) => {
        console.log(err.response.data)
        setError(true)
    })

    if (error === true) {
		return <div>Erro na requisi????o! Tente de novo</div>
	  }
	  if (!error && Cadeiraserver === undefined) {
		return <img alt='carregando' src='https://skyciv.com/wp-content/uploads/2020/10/Spinner.gif'/>
	  }

  },[])


    return(
        <>
        <Header></Header>
        <Titulo>Selecione o(s) assento(s)</Titulo>
        <AssentosLista>
         {Assento.map((p) => <Cadeira data-identifier="seat" nc={props.nc} ncs={props.ncs} assento={Assento} cadeiras={p} reservados={props.AssentosReservados} setReservados={props.setReservado} setReserva={props.setReserva}/>)}   
        </AssentosLista>
        <Legenda>
            <Selecionado data-identifier="seat-selected-subtitle"/>
            <Disponivel data-identifier="seat-available-subtitle"/>
            <Indisponivel data-identifier="seat-unavailable-subtitle"/>
            <p>Selecionado</p>
            <p>Disponivel</p>
            <p>Indisponivel</p>
        </Legenda>
        <Dados>
            <p>Nome do comprador:</p>
            <input data-identifier="buyer-name-input" placeholder='Digite seu nome...' onChange={(n) => setNome(n.target.value)}></input>
            <p>CPF do comprador:</p>
            <input data-identifier="buyer-cpf-input" placeholder='Digite seu CPF' onChange={(c) => setCPF(c.target.value)}></input>
        </Dados>
        <Finalizar data-identifier="reservation-btn" onClick={Reservar}>Reservar assento(s)</Finalizar>

        <Footer>
        <Imagem data-identifier="movie-img-preview">
            <img  src={imagem}/>
            </Imagem>
            <p data-identifier="movie-and-session-infos-preview">{titulo}<br/>{Dia} - {Hora}</p>
            
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

