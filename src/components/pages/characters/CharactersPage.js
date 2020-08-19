import React, { useState, useEffect } from 'react'
import CharactersCard from './CharactersCard'

export default function CharactersPage({ setHeadline }) {
  const [character, setCharacter] = useState([])

  setHeadline('Characters')

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
            />
          ))
        )
      )
  }, [])
  return <div>{character}</div>
}

// function fetchCharacter() {
//   return () => {
//     fetch('https://rickandmortyapi.com/api/character/')
//       .then((res) => res.json())
//       .then((data) =>
//         data.results.map((character) => (
//           <ShortBio
//             profilePic={character.image}
//             name={character.name}
//             species={character.species}
//             status={character.status}
//             gender={character.gender}
//             episodeCount={character.episode.length}
//             origin={character.origin.name}
//           />
//         ))
//       )
//   }
// }
