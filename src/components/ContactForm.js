import React, { Component } from 'react';
import styled from 'styled-components';

const StyledContactForm = styled.form`
  input, textarea {
    width: 100%;
    margin: 1em auto;
    padding: .75em;
    border: 1px solid #FF1180;
    box-sizing: border-box;
    color: #333333;
    font-family: sans-serif;
    &:hover, &:focus {
      outline: 0;
      border: 1px solid #191257;
    }
  }
  input[type="submit"] {
    width: 100px;
    color: white;
    background: #FF1180;
    cursor: pointer;
    &:hover, &:focus {
      background: none;
      border: 2px solid #FF1180;
      color: #FF1180;
    }
  }
`

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert(`Test réponse formulaire : ${this.state.name} ${this.state.email} ${this.state.message}`);
    event.preventDefault();
  }

  render() { 
    return (
      <StyledContactForm onSubmit={this.handleSubmit}>
        <h2><span role="img" aria-label="Question">❓</span> Feel free to ask us anything</h2>
        <input
          name="name"
          type="text"
          placeholder="Your name"
          onChange={this.handleChange}
        /><br />
        <input
          name="email"
          type="email"
          placeholder="Your e-mail"
          onChange={this.handleChange}
        /><br />
        <textarea
          name="message"
          placeholder="Your message"
          value={this.state.message}
          onChange={this.handleChange}
        /><br />
        <input type="submit" value="Submit" />
      </StyledContactForm>
    );
  }
}
 
export default ContactForm;
