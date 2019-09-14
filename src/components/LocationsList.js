import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
	const [char, setChar] = useState( [] );
  	useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/location/')
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
		          <LocationCard 
		            key={char.id}
		            name={char.name}
		           	type={char.type}
		           	dimension={char.dimension}
		          />
		        )
      	})};
        
    </section>
  );
}
