import React from 'react'
// import axios from 'axios'
import {
  render,
  screen,
  //waitForElementToBeRemoved,
} from '@testing-library/react'
import App from './App'
// import userEvent from '@testing-library/user-event'
// import { races } from './mockData'

// jest.mock('axios')

/*jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
}))
*/
// use describe, it pattern
describe('<App />', () => {
  it('Renders <App /> component correctly', () => {
    render(<App />)
    expect(screen.getByText(/Races/i)).toBeInTheDocument()
  })

  /*
  it('Renders categories, and I can click to view a category item', async () => {
    axios.get.mockImplementation((url) => {
      switch (url) {
        case 'https://www.betright.com.au/api/racing/todaysracing':
          return Promise.resolve({
            data: races,
          })
        default:
          throw new Error(`UNMATCHED URL: ${url}`)
      }
    })
    render(<App />)
    await waitForElementToBeRemoved(() => screen.queryByText(/Fetching data/i))

    //expect(screen.getByText(/Throughbred/)).toBeInTheDocument();
    //expect(screen.getByText('Harness')).toBeInTheDocument();
    //expect(screen.getByText('Greyhound')).toBeInTheDocument();

    // click on a category item and test the result
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: races[0],
      })
    )
    userEvent.click(screen.getByTestId('Throughbred'))
    await waitForElementToBeRemoved(() =>
      screen.queryByText(`Fetching category item Throughbred`)
    )
    expect(screen.getByText(`Category: Throughbred`)).toBeInTheDocument();
  })
  */
})
