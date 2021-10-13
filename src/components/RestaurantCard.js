import React from 'react';
import { Container, Divider } from 'semantic-ui-react';

const RestaurantCard = props => {
    const {id, name, city, street, zip, phone, longitude, latitude, coordinates } = props

    return (
        <>
            <div>
                <Container>
                <h3>{name}</h3>
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
            </div>
        </>
    )
}

export default RestaurantCard