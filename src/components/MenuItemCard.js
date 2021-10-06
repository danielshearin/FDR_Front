import React from "react";
import { Segment, Container, Header } from "semantic-ui-react";

const MenuItemCard = props => {
    const { id, item, price, description, dietary } = props

    return (
        <>
        <Container id={id}>
            <Segment>
                <Header>{item}{price}</Header>
                <p>{description}{dietary}</p>
            </Segment>
        </Container>
        </>
    )
}

export default MenuItemCard