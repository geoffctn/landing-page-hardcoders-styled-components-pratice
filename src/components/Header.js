import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import Particles from 'react-particles-js';

import Illustration from '../images/illustration.svg';
import Container from './Container';
import Nav from './Nav';

const ContainerHeader = styled.header`
  position: relative;
  overflow: hidden;
`
const StyledHeader = styled.div`
  padding: 1em;
`
const Introduction = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 30px;
  color: white;
  overflow: hidden;
  @media (max-width: 960px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  figure {
    max-width: 250px;
    margin: 0;
    padding: 0;
    img {
      width: 100%;
    }
  }
`
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 3.5em;
  color: white;
`
const StyledButton = styled.button`
  margin: 1.5em auto;
  padding: 1em;
  border: 2px solid white;
  background: #ffffff;
  color: #FF1180;
  font-weight: bold;
  cursor: pointer;
  &:hover, &:focus {
    background: none;
    border: 2px solid #ffffff;
    color: #ffffff;
  }
`

const Header = () => {

  return (
    <ContainerHeader>
      <Particles
        style={{ position: "absolute", height: "100%", zIndex: "-1", background: "#FF1180" }}
        params={{
          particles: {
            number: {
              value: 50
            },
            size: {
              value: 3
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
      <StyledHeader>
        <Nav />
        <Container>
          <Introduction>
            <Zoom>
              <figure>
                <img src={Illustration} alt="illustration mobile" />
              </figure>
            </Zoom>
            <div>
              <Title>Simple Phone</Title>
              <p>
                Lorem ipsum dolor amet food truck fashion axe street art af
                lumbersexual. Selvage pour-over umami unicorn, retro tumeric
                pabst tilde quinoa celiac shaman. Whatever pinterest iPhone
                poke. Tumeric twee neutra fam crucifix waistcoat DIY. Cloud
                bread taiyaki truffaut shaman put a bird on it.
              </p>
              <StyledButton>Get the offer</StyledButton>
            </div>
          </Introduction>
        </Container>
      </StyledHeader>
    </ContainerHeader>
  );
}

export default Header





