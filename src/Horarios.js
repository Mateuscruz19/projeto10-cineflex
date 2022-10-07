import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Horario from './Horario';
import filmeteste from './filmeteste';

export default function Horarios(props){

    const [filme, setFilme] = useState({})
    const [dias, setDias] = useState([])
    const [error, setError] = useState(false)

    const { filmeId } = useParams();

    useEffect(() => { 
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`
		const promise = axios.get(URL)
	
		promise.then((res) => {
		  console.log(res.data.days)
          setDias(res.data.days)
		  setFilme(res.data) // se o array de imagens chega, guardo no estado
		})
	
		promise.catch((err) => {
		  console.log(err.response.data)
		  setError(true)
		})
    },[])


    return(
        <>
        <HorariosFilmes>
           {dias.map((d,index) =>  <Horario dias={d} filme={props.filme}>
                </Horario>)}
        </HorariosFilmes>
        </>
    )
}

const HorariosFilmes = styled.ul`
margin-top:30px;
display:grid;
justify-content:center;
align-items:center;
width:100%;

`
