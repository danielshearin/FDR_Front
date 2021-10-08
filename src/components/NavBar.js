import React from 'react'
// import { connect } from "react-redux";
import { Container, Divider, Header, Message } from "semantic-ui-react";
import SearchForm from './SearchFormNEW.js';
// import SearchForm from './SearchForm.js';

const NavBar = props => (
  <Container>
    <Divider hidden />

    <Header as="h1" dividing>
      5 DOLLAR LUNCH
    </Header>
    <SearchForm onSubmit={() => console.log("SeachForm was submitted")} />

    {/* <Message>
      <Message.Header>Form data:</Message.Header>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </Message> */}
    <Divider hidden />
  </Container>
);

// const mapStateToProps = state => {
//   return state.form.profile
//   ? {
//       values: state.form.profile.values,
//       submitSucceeded: state.form.profile.submitSucceeded
//     }
//   : {};
// };


// export default connect(mapStateToProps)(NavBar);
export default NavBar