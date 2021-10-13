import React from "react";
import MenuItemCard from "./MenuItemCard";
import { Header, List, Divider, Container } from "semantic-ui-react";

function MenuItemResults ({ data, count }) {
    return (
        <>
        {!data 
        ? (
            <Container>
            <div class="results">
            {/* <Divider hidden /> */}
        
            <Header as="h1">
                Results
            </Header>
            {/* <Divider hidden /> */}
            </div>
            </Container>)
        : (
            <List>
                <Header>{count} Results Found</Header>
            <br />
            {data.map((item) => {
                return (
                    <MenuItemCard
                        id={item.id}
                        item={item.item}
                        price={item.price}
                        description={item.description}
                        dietary={item.dietary}
                    />
                )
            }            
            )}
            </List>
        )}
        </>
    )
}

export default MenuItemResults