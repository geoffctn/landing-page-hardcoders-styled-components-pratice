import React from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 1em 2em;
`

const Container = ({ children }) => {
  return (
    <StyledContainer>
      { children }
    </StyledContainer>
  )
}

export default Container
