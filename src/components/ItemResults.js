import React, { useState } from "react";
import MenuItemCard from "./MenuItemCard";
import { Header, Divider, Container } from "semantic-ui-react";
import RestaurantCard from "./RestaurantCard";
import axios from "axios";



// let defaultRestaurants
// const handleSubmit = () => {
//     // try {
//         //     e.preventDefault()
//         const result = axios.get('api/restaurants')
//         .then(response => {
//             defaultRestaurants = []
//             const restDefault = response.data
//             restDefault.map((restaurant) => {
//                 defaultRestaurants.push(restaurant.name)
//             })
//             // console.log('axios')
//             // console.log(defaultRestaurants)
//             return (defaultRestaurants)
//         })
//         console.log('after axios')
//         console.log(defaultRestaurants)
//         return defaultRestaurants
//         // } catch (error) {
//             //     console.error(error.message)
//             //     }
// }


function ItemResults ({ data }) {

    // const [restaurant, setRestaurant] = useState()

    const defaultRestaurants = []

    const handleSubmit = () => {
        axios.get('api/restaurants')
        .then(response => {
            const restDefault = response.data
            restDefault.map((restaurant) => {
                defaultRestaurants.push(restaurant)
            })
            // console.log('axios')
        })
        // setRestaurant(defaultRestaurants)
        // console.log('after axios')
        // console.log(defaultRestaurants)
        return defaultRestaurants
}

// console.log(data)

return (
    <>
        {!data 
        ? (         
            <p>NO DATA</p>
        )
            : (
                handleSubmit(),
                console.log('data passed in return'),
                // console.log(defaultRestaurants),
                defaultRestaurants.map((name) => {
                    console.log(name.name)
                }),
            // console.log( {data} ),
            <Container>
            <br />hi
            {defaultRestaurants.map((restaurant) => {
                console.log('yes restaurant')
                return (
                    <>                  
                    <RestaurantCard 
                        name={restaurant.name}
                        />
                    </>
                )
            }            
            )}
            </Container>
        )}
        </>
    )
}

export default ItemResults