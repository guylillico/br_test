import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { filteredObject } from 'utils/data'

// Services
import API from 'services/api'

const Category = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [races, setRaces] = useState([])
  let params = useParams()

  useEffect(() => {
    API.get(`/racing/todaysracing`)
      .then((result) => {
        console.log(result.data)
        let allRaces = result.data
        let filteredRaces = filteredObject(allRaces, params.category)
        console.log('filteredRaces', filteredRaces)
        setRaces(filteredRaces)
        setIsLoaded(true)
      })
      .catch((err) => {
        console.log(err)
        setIsLoaded(true)
      })
  }, [params])

  return (
    <div>
      <h3>Category: {params.category}</h3>
      {races &&
        races.map((race, i) => {
          return <div key={i}>{race.Venue}</div>
        })}
    </div>
  )
}

export default Category
