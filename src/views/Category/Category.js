import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { filteredObject } from 'utils/data'
import { CategoryStyled } from './Category.styled'

const Category = () => {
  const [loading, setLoading] = useState(true)
  const [races, setRaces] = useState([])
  let params = useParams()

  useEffect(() => {
    axios
      .get(`https://www.betright.com.au/api/racing/todaysracing`)
      .then((result) => {
        let allRaces = result.data
        let filteredRaces = filteredObject(allRaces, params.category)
        // console.log('filteredRaces', filteredRaces)
        setRaces(filteredRaces)
        setLoading(false)
      })
      .catch((err) => {
        // console.log(err)
        setLoading(false)
      })
  }, [params])

  const getStartTime = (val) => {
    let timestamp = val.replace(/[^0-9]/g, '')
    var date = new Date(timestamp * 1000)
    // Hours part from the timestamp
    var hours = date.getHours()
    // Minutes part from the timestamp
    var minutes = '0' + date.getMinutes()
    // Seconds part from the timestamp
    var seconds = '0' + date.getSeconds()
    var formattedTime =
      hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
    return formattedTime
  }

  return (
    <CategoryStyled>
      {loading ? (
        <p>Fetching category item {params.category}</p>
      ) : (
        <>
          <h3>Category: {params.category}</h3>
          <div>
            {races && (
              <table>
                <thead>
                  <tr className="key-row">
                    <th>Venue</th>
                    <th>Race No.</th>
                    <th>Advertised Start Time</th>
                  </tr>
                </thead>
                <tbody>
                  {races.slice(0, 5).map((race, i) => {
                    return (
                      <tr key={i} className="value-row">
                        <td>{race.Venue}</td>
                        <td>
                          {race.Race1 && race.Race1.RaceNumber
                            ? race.Race1.RaceNumber
                            : '-'}
                        </td>
                        <td>
                          {race.Race1 && race.Race1.AdvertisedStartTime
                            ? getStartTime(race.Race1.AdvertisedStartTime)
                            : '-'}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}
    </CategoryStyled>
  )
}

export default Category
