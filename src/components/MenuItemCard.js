import React from "react";
import { Segment, Container, Divider } from "semantic-ui-react";
import SaveButton from "./SaveButton";


const MenuItemCard = props => {
    const { id, item, price, description, dietary, restaurant, website} = props

    return (
        <>
        <Container>
            <Segment>
                <a href={website}  target="_blank" rel="noopener noreferrer">
                    <h3 class='item'>{item}<div class='price'>${price}</div></h3>
                </a>
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