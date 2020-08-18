import React, { useState, useEffect } from 'react'
import Card from './EpisodeCard'
import PagesNav from '../../PagesNav'
import styled from 'styled-components'

function EpisodesPage() {
  const [episodes, setEpisodes] = useState([])
  const [pages, setPages] = useState()

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data.results)
        setPages(data.info.pages)
      })
  }, [])

  function fetchPageData (page) {
    fetch('https://rickandmortyapi.com/api/episode?page=' + page)
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data.results)
      })
  }

  return (
    <CardsList>
    {episodes.map((card) => (
      <Card
        key={card.episode}
        title={card.name}
        date={card.air_date}
        episode={card.episode}
      />
    ))}

    <PagesNav pages={pages} onClick={fetchPageData}/>
   </CardsList>
  )
    
}

export default EpisodesPage

const CardsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
