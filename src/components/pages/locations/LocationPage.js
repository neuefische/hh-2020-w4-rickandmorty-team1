import React, { useState, useEffect } from 'react'
import Location from './LocationCard'
import PagesNav from '../../PagesNav'
import styled from 'styled-components'
import Form from './Form'

export default function LocationPage({ setHeadline }) {
  const [locations, setlocations] = useState([])
  const [pages, setPages] = useState()

  useEffect(() => {
    setHeadline('Locations')
  })

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/location/')
      .then((res) => res.json())
      .then((data) => {
        setlocations(data.results)
        setPages(data.info.pages)
      })
  }, [])
  function fetchPageData(page) {
    fetch('https://rickandmortyapi.com/api/location/?page=' + page)
      .then((res) => res.json())
      .then((data) => {
        setlocations(data.results)
        setPages(data.info.pages)
      })
    fetchPageData(1)
  }

  const LocationsCards = []

  locations.forEach((location, index) =>
    LocationsCards.push(
      <Location
        key={index}
        name={location.name}
        type={location.type}
        dimension={location.dimension}
        residents={location.residents.length}
      />
    )
  )

  return (
    <CardsList>
      <Form />
      {LocationsCards}
      <PagesNav pages={pages} onClick={fetchPageData} />
    </CardsList>
  )
}

const CardsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
