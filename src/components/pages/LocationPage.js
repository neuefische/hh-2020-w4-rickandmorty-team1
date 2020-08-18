import React, { useState, useEffect } from 'react'
import Location from '../Location'

export default function LocationPage() {
  const [location, setlocation] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/location/')
      .then((res) => res.json())
      .then((data) =>
        setlocation(
          data.results.map((location, index) => (
            <Location
              key={index}
              name={location.name}
              type={location.type}
              dimension={location.dimension}
              residents={location.residents.length}
            />
          ))
        )
      )
  }, [])
  return <div>{location}</div>
}
