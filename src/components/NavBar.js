import React from 'react'
// import { connect } from "react-redux";
import { Container, Divider, Header, Message } from "semantic-ui-react";
import SearchForm from './SearchForm.js';

const NavBar = props => (
  <Container>
    <Divider hidden />

    <Header as="h1" dividing>
      5 DOLLAR LUNCH
    </Header>
    <SearchForm onSubmit={() => console.log("SeachForm was submitted")} />

    <Divider hidden />
  </Container>
);

export default NavBar