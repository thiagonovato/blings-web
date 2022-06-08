import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 10px 0;
`
export const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  `
export const Title = styled.h1`
  font-size: xx-large;
  color: ${props => props.color};
  text-shadow: 2px 2px 5px black;
  padding: 10px;
`
