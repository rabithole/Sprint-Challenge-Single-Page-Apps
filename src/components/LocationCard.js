import React from "react";

export default function LocationCard(props) {
  return (
  	<div key={props.id} className='locContainer'>
		<p><strong>Planet:</strong> {props.name}</p>
		<p><strong>Type:</strong> {props.type}</p>
		<p><strong>Dimension:</strong> {props.dimension} </p>
	</div>
  )
}
