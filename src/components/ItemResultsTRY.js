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


function ItemResults ( {data} ) {

    // const [restaurant, setRestaurant] = useState()


    const defaultRestaurants = []
    const defRests = () => {
        axios.get('api/restaurants')
        .then(response => {
            const restDefault = response.data
            restDefault.map((restaurant) => {
                defaultRestaurants.push(restaurant)
            })
        })
        return defaultRestaurants
        }
    
    return (
        <>
        {!data 
        ? ( <p>hi</p>,
            <Container>
            {
            defRests(),
            defaultRestaurants.map((restaurant) => {
                return (
                    <>                  
                    <RestaurantCard 
                        name={restaurant.name}
                        />
                    </>
                )
            }            
            )}
        </ Container>
        )
        : (
            <Container>
            <br />
            {data.map((item) => {
                return (
                    <>                   
                    <RestaurantCard 
                        name={item.restaurant.name}
                        />
                    <MenuItemCard
                        item={item.item}
                        price={item.price}
                        description={item.description}
                        dietary={item.dietary}/>
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