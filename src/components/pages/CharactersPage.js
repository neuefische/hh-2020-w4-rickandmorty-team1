import React, { useState, useEffect } from 'react'
import ShortBio from '../ShortBio'
import Navigation from '../Navigation'
export default function CharactersPage() {
  const [character, setCharacter] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((res) => res.json())
      .then((data) =>
        setCharacter(
          data.results.map((character) => (
            <ShortBio
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
  return (
    <div>
      {character}
      <Navigation />
    </div>
  )
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
