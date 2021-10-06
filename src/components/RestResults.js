import React from "react";
import RestaurantCard from './RestaurantCard';

function RestResults ({ data, count }) {
    return (
        <>
            {!data
            ? (
                <div>
                    <h1>RESULTS</h1>
                </div>)
                : (
                    <div>
                        <h1>{count} results in your area</h1>
                        {}
                        {data.map((item) => {
                            return (
                                <RestaurantCard
                                id={item.id}
                                item={item.item}
                                restaurant={item.restaurant}
                                price={item.price}
                                description={item.description}
                                day={item.day}
                                dietary={item.dietary}
                                open_time={item.open_time}
                                close_time={item.close_time}
                                />
                            )
                        }
                        )}
                    </div>
                )}
        </>
    )
}

export default RestResults