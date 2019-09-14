import React from "react";
// import axios from 'axios';

export default function CharacterCard(props) {

  	return (
  		<div key={props.id}>
  			<p>Name: {props.name}</p>
  			<img src={props.image} alt={props.name} />
  			<p>Location: </p>
  			<p>Origin: </p>
  		</div>
  	);

}
