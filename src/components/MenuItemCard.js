import React from "react";
import { Segment, Container, Button, Header, Icon } from "semantic-ui-react";
import RestaurantCard from "./RestaurantCard";

const MenuItemCard = props => {
    const { id, item, price, description, dietary, restaurant } = props

    return (
        <>
        <Container>
            <Segment>
                <h3>{item} ${price}</h3><Button animated='vertical' floated='right'>
                <Button.Content hidden>Save</Button.Content>
                <Button.Content visible>
                    {/* <Icon name='plus' /> */}
                    <Icon name='shop' />
                </Button.Content>
                </Button>
                <p>{description}</p>
                <p>{dietary}
                </p>
            </Segment>
        </Container>
        </>
    )
}

export default MenuItemCard