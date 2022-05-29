import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'
import { AppStyled, Header, Container, Row, Col } from './App.styled'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [races, setRaces] = useState([])

  useEffect(() => {
    axios.get(`https://www.betright.com.au/api/racing/todaysracing`)
      .then((result) => {
        setRaces(result.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  return (
    <AppStyled>
      <Header>
        <h1>Races</h1>
      </Header>
      <Container>
        <Row>
          <Col className="sidebar">
            <div className="inner">
              <nav>
                <ul>
                  {Object.entries(races).map(([k, v], i) => (
                    <li key={i}>
                      <Link to={`/races/${k}`} data-testid={k}>{k}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </Col>
          <Col className="main">
            <div className="inner">
              {loading && <p>Fetching data</p>}
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>
    </AppStyled>
  )
}

export default App
