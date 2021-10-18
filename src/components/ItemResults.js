import React, { useState, useEffect } from "react";
import MenuItemCard from "./MenuItemCard";
import { Header, Divider, Container } from "semantic-ui-react";
import RestaurantCard from "./RestaurantCard";
import axios from "axios";



function ItemResults ( {data, restaurants} ) {
    console.log(data)
    console.log(restaurants)
    
    return (
        <>
        {!!restaurants && (
            
            <Container>
            <br />
            {restaurants.map((restName) => {
                return (
                    <>                 
                    <RestaurantCard 
                        name={restName}
                        />
                    {data.map((item) => {
                        return (
                            <>
                            {
                            item.restaurant.name === restName ?
                            <MenuItemCard
                                item={item.item}
                                price={item.price}
                                description={item.description}
                                dietary={item.dietary} />
                            : null}
                            </>
                        )
                    })
                    
                    }
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