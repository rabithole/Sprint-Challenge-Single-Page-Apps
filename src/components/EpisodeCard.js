import React from "react";

export default function EpisodeCard(props) {
  return (
  	<div key={props.id} className='locContainer'>
		<p><strong>Episode:</strong> {props.episode}</p>
		<p><strong>Name:</strong> {props.name}</p>
		<p><strong>Air Date:</strong> {props.air_date} </p>
	</div>
  )
}
