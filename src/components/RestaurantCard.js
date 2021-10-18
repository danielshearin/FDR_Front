import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const RestaurantCard = props => {
    const {id, name, city, street, zip, phone, longitude, latitude, coordinates, photo } = props

    return (
        <>
            <Container>
            <Header size='large'>
            <div class='restaurant_name'>{name}</div></Header>
            </Container>
        </>
    )
}

export default RestaurantCard