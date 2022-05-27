import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AppStyled, Header, Container, Row, Col } from './App.styled'

// Services
import API from 'services/api'

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [races, setRaces] = useState([])

  useEffect(() => {
    API.get(`/racing/todaysracing`)
      .then((result) => {
        console.log(result.data)
        setRaces(result.data)
        setIsLoaded(true)
      })
      .catch((err) => {
        console.log(err)
        setIsLoaded(true)
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
                    <Link to={`/races/${k}`}>{k}</Link>
                  </li>
                ))}
                </ul>
              </nav>
            </div>
          </Col>
          <Col className="main">
            <div className="inner">
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>
    </AppStyled>
  )
}

export default App
