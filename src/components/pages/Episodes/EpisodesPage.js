import React, { useState, useEffect } from 'react'
import Card from './EpisodeCard'

function EpisodesPage() {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data.results)
        console.log(data.results)
      })
  }, [])

  return episodes.map((card) => (
    <Card
      key={card.episode}
      title={card.name}
      date={card.air_date}
      episode={card.episode}
    />
  ))
}

export default EpisodesPage
