import React from "react";
import MenuItemCard from "./MenuItemCard";
import { Header, Divider, Container } from "semantic-ui-react";
import RestaurantCard from "./RestaurantCard";

function ItemResults ({ data }) {
    return (
        <>
        {!!data && (
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