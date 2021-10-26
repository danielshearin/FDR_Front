import React, { useState } from "react";
import MenuItemCard from "./MenuItemCard";
import { Header, Divider, Container } from "semantic-ui-react";
import RestaurantCard from "./RestaurantCard";



function ItemResults ( {data, restaurants} ) {
    console.log(data)
    console.log(restaurants)
    
    return (
        <>
        {restaurants && (
            <div>
            {restaurants.map((restName) => {
                return (
                    <div class='rest_item_result'>
                    <>                 
                        <RestaurantCard 
                            name={restName.name}
                            website={restName.website}
                            />
                        {data.map((item) => {
                            return (
                                <>
                                <Container>
                                <div class="item_result_group">
                                {item.restaurant.name === restName.name ?
                                <MenuItemCard
                                    item={item.item}
                                    price={item.price}
                                    description={item.description}
                                    dietary={item.dietary}
                                    restaurant={item.restaurant}
                                    website={item.restaurant.website}
                                    id={item.id} />
                                : null}
                                </div>
                                </Container>
                                </>
                            )
                        })}
                    </>
                    </div>
                )
            })}
            </div>
        )}
        </>
    )
}


export default ItemResults