import React from 'react'
import { Container, Divider, Header } from "semantic-ui-react";

const ResultBar = () => (
    <Container>
        <div class="results">
            <Header as="h1">Results</Header>
        </div>
        <Divider hidden />
    </Container>
);

export default ResultBar