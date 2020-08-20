import React, { useState, useEffect } from 'react'
import Question from './Question'
import Navigation from '../../../components/Navigation'

export default function GamePage() {
  const [currentCharacter, setcurrentCharacter] = useState({})
  const [charactersLength, setCharactersLength] = useState()

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        setCharactersLength(data.info.count)
        loadNextCharacter(data.info.count)
      })
  }, [])

  function loadNextCharacter(ids = charactersLength) {
    const randomCharacterId = Math.round(Math.random() * ids)
    fetch('https://rickandmortyapi.com/api/character/' + randomCharacterId)
      .then((res) => res.json())
      .then((data) => setcurrentCharacter(data))
  }

  return (
    <>
      <Question
        character={currentCharacter}
        loadNextCharacter={loadNextCharacter}
      />
      <Navigation />
    </>
  )
}
