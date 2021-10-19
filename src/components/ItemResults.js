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
            <div>
            {restaurants.map((restName) => {
                return (
                    <div class='rest_item_result'>
                    <>                 
                    <RestaurantCard 
                        name={restName}
                        />
                    {data.map((item) => {
                        return (
                            <>
                            <Container>
                            <div class="item_result_group">
                            {item.restaurant.name === restName ?
                            <MenuItemCard
                                item={item.item}
                                price={item.price}
                                description={item.description}
                                dietary={item.dietary} />
                            : null}
                            </div>
                            </Container>
                            </>
                        )
                    })}
                    </>
                    {/* <Divider hidden /> */}
                    </div>
                )
            })}
            </div>
        )}
        </>
    )
}


export default ItemResults