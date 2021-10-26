import React from 'react'
// import { connect } from "react-redux";
import { Container, Divider, Header } from "semantic-ui-react";
// import SearchForm from './SearchForm.js';

const NavBar = props => (
  <Container>
    <div class="page_header">
      <Divider hidden />
      <Header as="h1">
        <strong>5 DOLLAR LUNCH</strong>
      </Header>
      <Divider hidden />
    </div>
  </Container>
);

export default NavBar