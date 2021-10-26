import React from "react";
import { Segment, Container, Button, Header, Icon, Divider } from "semantic-ui-react";
import SaveButton from "./SaveButton";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const MenuItemCard = props => {
    const { id, item, price, description, dietary, restaurant, website, tags } = props

    return (
        <>
        <Container>
            <Segment>
                <a href={website} target="_blank"  rel="noopener noreferrer">
                <h3 class='item'>{item}<div class='price'>${price}</div></h3>
                <SaveButton id={id} item={item} restaurant={restaurant}/>
                <p class='description'>{description}</p>
                <p class='dietary'>
                {!dietary ? null : `${dietary}`}   
                </p>
                </a>
            </Segment>
                <Divider hidden />
        </Container>
        </>
    )
}

export default MenuItemCard