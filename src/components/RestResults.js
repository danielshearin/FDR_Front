import React from "react";
import RestaurantCard from './RestaurantCard';

function RestResults ({ data }) {
    return (
        <>
            {!data
            ? (
                <div>
                    <h1>RESULTS</h1>
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