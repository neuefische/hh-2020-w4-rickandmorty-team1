import React, {useState, useEffect} from 'react' 
import styled from 'styled-components'

export default function GamePage () {
  const [characters, setCharacters] = useState([])
  const [currentCharacter, setcurrentCharacter] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results)
        setcurrentCharacter(data.results[1])
        console.log(data.results)
      })
  }, [])
}