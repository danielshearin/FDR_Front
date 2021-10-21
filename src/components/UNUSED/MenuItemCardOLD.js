import React from "react";
import { Segment, Container, Button, Header, Icon, Divider } from "semantic-ui-react";


const savedItems = []

const MenuItemCard = props => {
    const { id, item, price, description, dietary, restaurant, tags } = props

    const handleAdd = () => {
        savedItems.push([{id, item, restaurant}])
        console.log(savedItems)
    }

    return (
        <>
        <Container>
            <Segment>
                <h3 class='item'>{item}<div class='price'>${price}</div></h3>
                <div class='cart_button'>
                <Button animated='vertical' floated='right' onClick={handleAdd}>
                <Button.Content hidden>Save</Button.Content>
                <Button.Content visible>
                    {/* <Icon name='plus' /> */}
                    <Icon name='shop' />
                </Button.Content>
                </Button></div>
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