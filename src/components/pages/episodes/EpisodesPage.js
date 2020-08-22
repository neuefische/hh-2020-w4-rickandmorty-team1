import React, { useState, useEffect } from 'react'
import Card from './EpisodeCard'
import PagesNav from '../../PagesNav'
import styled from 'styled-components'
import Navigation from '../../Navigation'

function EpisodesPage({ setHeadline }) {
  const [episodes, setEpisodes] = useState([])
  const [pages, setPages] = useState()

  useEffect(() => {
    fetchData(1)
  }, [])

  function fetchData(page) {
    fetch('https://rickandmortyapi.com/api/episode?page=' + page)
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data.results)
        setPages(data.info.pages)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  const episodesCards = []
  episodesCards.push(
    episodes.map((card) => (
      <Card
        key={card.episode}
        title={card.name}
        date={card.air_date}
        episode={card.episode}
      />
    ))
  )

  return (
    <CardsList>
      {episodesCards}
      <PagesNav pages={pages} onClick={fetchData} />
      <Navigation />
    </CardsList>
  )
}

export default EpisodesPage

const CardsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
