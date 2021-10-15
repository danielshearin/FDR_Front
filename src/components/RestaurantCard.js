import React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';

const RestaurantCard = props => {
    const {id, name, city, street, zip, phone, longitude, latitude, coordinates, photo } = props

    return (
        <>
            <Container>
            <Header size='large'>
            <div class='restaurant_name'>{name}</div></Header>
            {/* <p>
            {id}
            {item}
            {restaurant}
            {price}
            {description}
            {day}
            {dietary}
            {open_time}
            {close_time}
            </p> */}
            </Container>
        </>
    )
}

export default RestaurantCard