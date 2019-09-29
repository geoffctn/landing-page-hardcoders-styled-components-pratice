import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const BGFooter = styled.footer`
  background: #191257;
`
const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  margin: 1em auto;
  color: white;
  a {
    color: #ffffff;
    padding-right: 1em;
    transition-property: all;
    transition-duration: 0.5s;
    opacity: .5;
    &:hover, &:focus {
      transition-property: all;
      transition-duration: 0.5s;
      opacity: 1;
    }
  }
`
const Footer = () => {
  return (
    <BGFooter>
      <Container>
        <StyledFooter>
          <article>
            <h4>Find us</h4>
            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a href="https://twitter.com/home"><FontAwesomeIcon icon={faTwitterSquare} /></a>
            <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
            <p>Keas 69 Str.<br />
            15234, Chalandri<br />
            Athens, Greece</p>
          </article>
          <article>
            <h4>Copyright</h4>
            <p>2019 All rights reserved.</p>
          </article>
        </StyledFooter>
      </Container>
    </BGFooter>
  )
}

export default Footer
