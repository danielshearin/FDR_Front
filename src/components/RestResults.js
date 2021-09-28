import React from "react";
import RestaurantCard from './RestaurantCard';

function RestResults ({ data }) {
    return (
        <>
            {!data
            ? (
                <div>
                    <p>Please enter Restaurant</p>
                </div>)
                : (
                    <div>
                        {data.map((item) => {
                            return (
                                <RestaurantCard
                                id={item.id}
                                name={item.name}
                                city={item.city}
                                street={item.street}
                                zip={item.zip}
                                phone={item.phone}
                                />
                            )
                        })}
                    </div>
                )
        
        }
        </>
    )
}

export default RestResults