import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ImageContact from '../images/contact.jpg';

const StyledContact = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 30px;
  margin: 2em auto;
  @media (max-width: 580px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`
const ImageContainer = styled.figure`
  display: block;
  height: 320px;
  margin: 1em 0;
  overflow: hidden;
  img {
    height: 100%;
    object-fit: cover;
  }
`

const Contact = () => {
  return (
    <StyledContact id="contact">
      <ImageContainer>
        <img src={ImageContact} alt="contact us" />
      </ImageContainer>
      <ContactForm />
    </StyledContact>
  )
}

export default Contact
