import React from "react";
import MenuItemCard from "./MenuItemCard";
import { Container, Header } from "semantic-ui-react";
import RestaurantCard from "./RestaurantCard";


// uses both the single-instance restaurant array as well as the full set of data from search result
function ItemResults ( {data, restaurants} ) {
    console.log(data)
    console.log(restaurants)
    
    return (
        <>
        {(restaurants.length === 0) ?
            <Container>
                <div class='no_result'>
                    <Header size='large'>
                        <div class='no_results'>No Results</div>
                    </Header>
                    <p class='dietary'>Try broadening your search</p>
                </div>
            </Container>
            : (
            <div>
            {/* map over single-instance restaurant object to group items by restaurant*/}
            {restaurants.map((restName) => {
                return (
                    <div class='rest_item_result'>
                    <>                 
                        <RestaurantCard 
                            name={restName.name}
                            website={restName.website}
                            />
                        {/* map over full data set to display each item under corresponding restaurant */}
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