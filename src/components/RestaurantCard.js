import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const RestaurantCard = props => {
    const {id, name, website, city, street, zip, phone, longitude, latitude, coordinates, photo } = props

    return (
        <>
            <Container>
            <Header size='large'>
            <a href={website} target="_blank" rel="noopener noreferrer">
                <div class='restaurant_name'>{name}</div>
            </a>
            </Header>
            </Container>
        </>
    )
}

export default RestaurantCard