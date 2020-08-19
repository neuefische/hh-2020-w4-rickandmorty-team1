import React, { useState, useEffect } from 'react'
import Location from './Location'
import PagesNav from '../../PagesNav'

export default function LocationPage() {
  const [location, setlocation] = useState([])
  const [pages, setPages] = useState()

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/location/')
      .then((res) => res.json())
      .then((data) => {
        setlocation(data.results)
        setPages(data.info.pages)
      })
  }, [])
  function fetchPageData(page) {
    fetch('https://rickandmortyapi.com/api/location/?page=' + page)
      .then((res) => res.json())
      .then((data) => {
        setlocation(data.results)
      })
  }
  return (
    <div>
      {location.map((location, index) => (
        <Location
          key={index}
          name={location.name}
          type={location.type}
          dimension={location.dimension}
          residents={location.residents.length}
        />
      ))}
      <PagesNav pages={pages} onClick={fetchPageData} />
    </div>
  )
}
