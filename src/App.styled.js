import styled from 'styled-components/macro'
import device from 'utils/media'

export const AppStyled = styled.div`
  background-color: #fdfdfd;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`

export const Header = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  font-weight: bold;
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  h1 {
    margin: 10px;
  }
  height: 60px;
`
export const Container = styled.div`
  padding: 0 30px;
  margin: 110px auto 0 auto;
  width: 100%;
  max-width: 1200px;
`

export const Row = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  // flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`

export const Col = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
  max-width: 100%;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  &.sidebar {
    @media ${device.md} {
      flex-basis: 25%;
      max-width: 25%;
    }
    ul {
      margin-left: 0;
      padding-left: 20px;
      line-height: 2rem;
    }
  }
  &.main {
    @media ${device.md} {
      flex-basis: 75%;
      max-width: 75%;
    }
  }
  .inner {
    background-color: #ffffff;
    padding: 15px;
  }
`
