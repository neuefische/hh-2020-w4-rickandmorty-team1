import React from 'react'

export default function FindRick() {
  return <button onClick={handleSubmit}>Find Rick</button>

  function handleSubmit() {
    const rickUrl = 'https://rickandmortyapi.com/api/character/1'
    fetch('https://rickandmortyapi.com/api/location/')
      .then((res) => res.json())
      .then((data) => {
        const first = data.results.filter((location) => {
          return location.residents.includes(rickUrl)
        })
        console.log(first)
      })
  }
}
