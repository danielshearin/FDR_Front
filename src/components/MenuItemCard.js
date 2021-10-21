import React from "react";
import { Segment, Container, Button, Header, Icon, Divider } from "semantic-ui-react";
import SaveButton from "./SaveButton";


const MenuItemCard = props => {
    const { id, item, price, description, dietary, restaurant, tags } = props

    return (
        <>
        <Container>
            <Segment>
                <h3 class='item'>{item}<div class='price'>${price}</div></h3>
                <SaveButton id={id} item={item} restaurant={restaurant}/>
                <p class='description'>{description}</p>
                <p class='dietary'>
                {!dietary ? null : `${dietary}`}   
                </p>
            </Segment>
                <Divider hidden />
        </Container>
        </>
    )
}

export default MenuItemCard