import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function CharacterCard() {
	const [char, setChar] = useState('');
	useEffect(() => {
		axios
		.get('https://rickandmortyapi.com/api/character/')
		.then(res => setChar(res.data))
		.catch(err => console.log(err));
	}, []);


  	return (
  		<div>
  			<p>Something here</p>
  			<img src={char} alt='character'/>
  		</div>
  	);

}
