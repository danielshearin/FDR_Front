import React from 'react'
// import { connect } from "react-redux";
import { Container, Divider, Header, Message } from "semantic-ui-react";
// import SearchForm from './SearchForm.js';

const NavBar = props => (
  <Container>
    <div class="page_header">
    <Divider hidden />

    {/* <Header as="h1"  dividing> */}
    <Header as="h1">
      <strong>5 DOLLAR LUNCH</strong>
    </Header>
    <Divider hidden />
  </div>
    {/* <SearchForm onSubmit={() => console.log("SeachForm was submitted")} />

    <Divider hidden /> */}
  </Container>
);

export default NavBar