import React, { useState, useEffect } from 'react'
import CharactersCard from './CharactersCard'
import Navigation from '../../../components/Navigation'
export default function CharactersPage({ setHeadline }) {
  const [character, setCharacter] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((res) => res.json())
      .then((data) =>
        setCharacter(
          data.results.map((character) => (
            <CharactersCard
              profilePic={character.image}
              name={character.name}
              species={character.species}
              status={character.status}
              gender={character.gender}
              episodeCount={character.episode.length}
              origin={character.origin.name}
              key={character.name}
            />
          ))
        )
      )
  }, [])
  return (
    <div>
      {character}
      <Navigation />
    </div>
  )
}
