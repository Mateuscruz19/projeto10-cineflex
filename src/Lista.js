import React from 'react';
import styled from 'styled-components';
import Filmes from './Filmes';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Lista(props){

    

    return(
        <>
        <Listafilmes>    
                <Filmes idfilme={props.idfilme}/>
        </Listafilmes>
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

