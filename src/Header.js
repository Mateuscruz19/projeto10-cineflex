import React from 'react';
import styled from 'styled-components';


export default function Header(){

    return(<Topo><p>CINEFLIX</p></Topo>)
}

const Topo = styled.header`
    width:100%;
    height: 67px;
    background-color:#C3CFD9;
    font-family: 'Roboto';
    color:#E8833A;
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content:center;
    margin:0 auto;

`