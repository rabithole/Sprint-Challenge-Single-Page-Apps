import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState( [] );
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

      axios
        .get('https://rickandmortyapi.com/api/character/')
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
          <CharacterCard 
            key={char.id}
            name={char.name}
            image={char.image}
            location={char.location}
            origin={char.origin}
            species={char.species}
            status={char.status}
          />
        )
      })};
        
    </section>
  );
}
