import React from 'react';
import styled from 'styled-components';

import Container from './Container';

const BgPricing = styled.section`
  background: #333333;
`
const StyledPricing = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 2em auto;
  @media (max-width: 960px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  article {
    padding: 1.5em;
    color: #ffffff;
    border: 2px solid white;
    text-align: center;
    h5 {
      display: inline-block;
      margin: 0 auto 1.5em auto;
      font-size: 1.2rem;
      line-height: 0;
    }
    strong {
      font-size: 3em;
    }
  }
`
const CheckoutButton = styled.button`
  padding: 1em;
  border: 2px solid white;
  background: #ffffff;
  color: #333333;
  font-weight: bold;
  cursor: pointer;
  &:hover, &:focus {
    background: none;
    border: 2px solid #ffffff;
    color: #ffffff;
  }
`

const Pricing = () => {
  return (
    <BgPricing>
      <Container>
        <StyledPricing id="pricing">
          <article>
            <h5>Offer 1</h5><br />
            <strong>49.99$</strong>
            <p>The phone, clean and simple</p>
            <CheckoutButton>Checkout</CheckoutButton>
          </article>
          <article>
            <h5>Offer 2</h5><br />
            <strong>69.99$</strong>
            <p>The phone, clean and simple + 1 module of your choice</p>
            <CheckoutButton>Checkout</CheckoutButton>
          </article>
          <article>
            <h5>Offer 3</h5><br />
            <strong>119.99$</strong>
            <p>The phone, clean and simple + 3 modules of your choice + 1 case</p>
            <CheckoutButton>Checkout</CheckoutButton>
          </article>
        </StyledPricing>
      </Container>
    </BgPricing>
  )
}

export default Pricing
