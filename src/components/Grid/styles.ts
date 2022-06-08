import styled from 'styled-components'

export const Container = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`

export const ContainerGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`
export const TextResult = styled.text`
    font-size: 12px
`
