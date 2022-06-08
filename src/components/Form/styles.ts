import styled from 'styled-components'

export const Container = styled.form`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 2rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;
  }

  button[type='submit'] {
    max-width: 100px;
    width: 100%;
    height: 2rem;
    background-color: yellow;
    border-radius: 5rem;
    border: 0;
    font-size: 1rem;
    margin-top:  1rem;
  }
`