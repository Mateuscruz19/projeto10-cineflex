import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// https://mock-api.driven.com.br/api/v5/cineflex/movies
// posterURL

export default function Filmes() {

	const [items, setItems] = useState(undefined)
	const [error, setError] = useState(false) 

	const { sessaoid } = useParams();
	

	useEffect(() => {
		const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
		const promise = axios.get(URL)
	
		promise.then((res) => {
		  console.log(res.data)
		  setItems(res.data) // se o array de imagens chega, guardo no estado
		})
	
		promise.catch((err) => {
		  console.log(err.response.data)
		  setError(true)
		})
	  }, [])

	  if (error === true) {
		return <div>Erro na requisição! Tente de novo</div>
	  }
	  if (!error && items === undefined) {
		return <img alt='carregando' src='https://skyciv.com/wp-content/uploads/2020/10/Spinner.gif'/>
	  }
	return (
		<>
		{items.map(t => 
			<Link to={`/sessoes/${t.id}`}>
			<Filme><img alt='teste' src={t.posterURL}/></Filme>
			</Link>
			)}
		</>	
	);
}

const Filme = styled.li`
background: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
width: 145px;
height: 209px;
display:flex;
justify-content:center;
align-items:center;

img{
	width: 129px;
	height: 193px;
}
`

