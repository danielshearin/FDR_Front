import React, { useState } from "react";
import { Segment, Container, Button, Header, Icon, Divider } from "semantic-ui-react";
import SavedList from "./SavedList";


const savedItemArray = []

const SaveButton = props => {
    const [savedItems, setSavedItems] = useState()
    const { id, item, price, description, dietary, restaurant, tags } = props
    const [favorite, setFavorite] = useState('not_fav')

    const handleAdd = () => {
        savedItemArray.push([{id, item, restaurant}])
        setSavedItems(savedItemArray)
        setFavorite('fav')
        console.log(favorite)
    }
    
    console.log(savedItems)
    // <SavedList keptItems={savedItems} />
    
    return (
        <>
            <div class='fav'>
            {/* <div class='cart_button'> */}

            <Button animated='vertical' floated='right' onClick={handleAdd}>
            <Button.Content hidden>Fav</Button.Content>
            <Button.Content visible>
                {/* <Icon name='plus' /> */}
                <Icon name='shop' />
            </Button.Content>
            </Button>
            
            </div>
        </>
    )
}

// const savedItemArray = []

// const SaveButton = props => {
//     const [savedItems, setSavedItems] = useState()
//     const { id, item, price, description, dietary, restaurant, tags } = props
    
//     const [favorite, setFavorite] = useState('not_fav')

//     const handleAdd = () => {
//         setSavedItems(savedItemArray)
//         if (favorite === 'not_fav') {
//             savedItemArray.push([{id, item, restaurant}])
//             setFavorite('fav')
//         } else {
//             savedItemArray.splice([{id, item, restaurant}])
//             setFavorite('not_fav')
//         }

//         // setFavorite(prevFavorite => !prevFavorite)
//         console.log(favorite)
//     }
    
//     console.log(savedItems)
//     // <SavedList keptItems={savedItems} />
    
//     return (
//         <>
//             <div class='cart_button'>
//             {/* <div class ={favorite}> */}
//                 <Button toggle active={favorite} animated='vertical' floated='right' onClick={handleAdd}>
//                 <Button.Content hidden>Save</Button.Content>
//                 <Button.Content visible>
//                     <Icon name='star' />
//                     {/* <Icon name='shop' /> */}
//                 </Button.Content>
//                 </Button>
//                 {/* </div> */}
//             </div>
//         </>
//     )
// }




export default SaveButton