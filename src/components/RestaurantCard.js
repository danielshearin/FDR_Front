import React from 'react';

const RestaurantCard = props => {
    const {id, name, city, street, zip, phone } = props

    return (
        <>
            <div>
                <p>{id}
                {name}
                {city}
                {street}
                {zip}
                {phone}</p>
            </div>
        </>
    )
}

export default RestaurantCard