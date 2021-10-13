import React from "react";
import { Segment, Container, Header } from "semantic-ui-react";
import RestaurantCard from "./RestaurantCard";

const MenuItemCard = props => {
    const { id, item, price, description, dietary, restaurant } = props

    return (
        <>
        <Container>
            <Segment>
                <h3>{item} ${price}</h3>
                <p>{description}</p>
                <p>{dietary}</p>
            </Segment>
            <RestaurantCard data={restaurant}/>
        </Container>
        </>
    )
}

export default MenuItemCard