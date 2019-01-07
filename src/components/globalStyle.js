import styled from 'styled-components'

export const SectionTitle = styled.h1`
  position: relative;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-size: calc(5vw + 5vh + 0.5vmin);
  color: white;
  margin: 0 auto 100px;
  z-index: 4;
  padding-top: 100px;

  @media screen and (max-width: 750px) {
    margin: 0 auto 50px;
  }
`
