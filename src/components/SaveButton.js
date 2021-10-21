import React, { useState } from "react";
import { Segment, Container, Button, Header, Icon, Divider } from "semantic-ui-react";
import SavedList from "./SavedList";


const savedItemArray = []

const SaveButton = props => {
    const [savedItems, setSavedItems] = useState()
    const { id, item, price, description, dietary, restaurant, tags } = props

    const handleAdd = () => {
        savedItemArray.push([{id, item, restaurant}])
        setSavedItems(savedItemArray)
    }
    
    console.log(savedItems)
    // <SavedList keptItems={savedItems} />
    
    return (
        <>
            <div class='cart_button'>
            <Button animated='vertical' floated='right' onClick={handleAdd}>
            <Button.Content hidden>Save</Button.Content>
            <Button.Content visible>
                {/* <Icon name='plus' /> */}
                <Icon name='shop' />
            </Button.Content>
            </Button></div>
        </>
    )
}




export default SaveButton