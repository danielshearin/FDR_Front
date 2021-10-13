import React from "react";
import { Segment, Container, Header } from "semantic-ui-react";

const MenuItemCard = props => {
    const { id, item, price, description, dietary } = props

    return (
        <>
        <Container id={id}>
            <Segment>
                <h3>{item} ${price}</h3>
                <p>{description}</p>
                <p>{dietary}</p>
            </Segment>
        </Container>
        </>
    )
}

export default MenuItemCard