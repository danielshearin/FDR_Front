import React, { useState, Component } from "react";
import { Segment, Container, Button, Header, Icon, Divider } from "semantic-ui-react";



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

const savedItemArray = []

class SaveButton extends Component {
    state = {}
    handleAdd = () =>
      this.setState((prevState) => ({ active: !prevState.active }))
  
    render() {
      const { active } = this.state
  
      return (
        <>
        <div class='cart_button'>
        <Button toggle active={active} onClick={this.handleAdd}animated='vertical' floated='right'>
        <Button.Content hidden>Fav</Button.Content>
        <Button.Content visible>
        <Icon name='star' />
        </Button.Content>
        </Button>
        </div>
        </>
      )
    }
  }



export default SaveButton