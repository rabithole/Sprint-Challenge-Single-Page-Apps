import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
	const [char, setChar] = useState( [] );
  	useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(res => {
          const char = res.data;
          console.log('Response data from R&M API:', char.results);
          setChar(char.results);
      })
        .catch(error => {
          console.log('data was not returned', error);
        })
  	},[]); // This is a dependency array. 

  	return (
    	<section className="character-list grid-view">
      		{char.map(char => {
		        return (
		          <EpisodeCard 
		            key={char.id}
		            episode={char.episode}
		           	name={char.name}
		           	air_date={char.air_date}
		          />
		        )
      	})};
        
    </section>
  );
}
