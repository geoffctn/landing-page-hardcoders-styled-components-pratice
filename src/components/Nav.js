import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../images/logo.svg';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-18deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
  padding: 1em;
  .logo {
    max-width: 20px;
    animation: ${rotate} 2s ease-in-out infinite;
  }
  .menu {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
      margin: 0;
      list-style: none;
      li {
        margin: 0 1em;
        a {
          font-size: .8em;
          color: white;
          text-decoration: none;
          letter-spacing: .1em;
          font-weight: bold;
          &:after {
            content: "";
            display: block;
            position: relative;
            height: 2px;
            margin: 5px 0 0;
            transition: all 0.2s ease-in-out;
            transition-duration: 0.5s;
            width: 0;
            opacity: 1;
            left: 0;
            background-color: white;
          }
          &:hover {
            
            &:after {
              content: "";
              display: block;
              position: relative;
              height: 2px;
              margin: 5px 0 0;
              transition: all 0.2s ease-in-out;
              transition-duration: 0.5s;
              width: 100%;
              opacity: 1;
              left: 0;
              background-color: white;
            }
          }
        }
      }
    }
  }
`

const Nav = () => {
  return (
    <StyledNav>
      <img src={logo} className="logo" alt="logo" />
      <div className="menu">
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#aboutus">About us</a></li>
        </ul>
      </div>
    </StyledNav>
  )
}

export default Nav
