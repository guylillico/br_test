import styled from 'styled-components/macro'

export const CategoryStyled = styled.div`
  table {
    border-collapse: collapse;
    //border-spacing: 0;
    width: 100%;
    margin-top: 0;
    overflow-x: auto;
  }

  td,
  th {
    border: 1px solid #ccc;
    text-align: left;
    padding: 8px;
    // vertical-align: middle;
  }

  tr.key-row {
    th {
      padding: 12px 8px;
    }
  }

  tr.value-row {
    vertical-align: baseline;
    &:nth-child(odd) {
      background-color: #fdfdfd;
    }
  }
`
