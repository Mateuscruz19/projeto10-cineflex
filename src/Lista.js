import React from 'react';
import styled from 'styled-components';
import Filmes from './Filmes';


export default function Lista(){
    return(
        <>
        <Listafilmes><Filmes/></Listafilmes>
        </>

    )
}


const Listafilmes = styled.ul`
    width:100vw;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 30px;
    justify-content:center;
    align-items:center;
    margin-left:30px;
    margin-top:35px;
    margin-bottom:50px;
`

