import React, { useState, useEffect } from "react";
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


function ItemResults ( {data} ) {
    console.log(data)
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        axios.get('api/restaurants')
        .then(response => {
            const restDefault = response.data
            const restNames = restDefault.map((item) => (
                item.name
            )
            )
            setRestaurants(restNames)
        })
    }, [])
    

    return (
        <>
        {!!data && ( 
            <Container>
            {
                restaurants.map(restaurant => (
                    <div>REST {restaurant}</div>
                ))
                // data.map(item => (
                //     <div>DATA{item.restaurant.name}</div>
                // ))
            }
        </ Container>
        )}
            <div>
            {
                data.map(item => (
                <div>DATA{item.restaurant.name}</div>
                ))
            }
            </div>
        </>
    )
}


export default ItemResults