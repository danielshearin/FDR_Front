import React from 'react';

const RestaurantCard = props => {
    const {id, item, restaurant, price, description, day, dietary, open_time, close_time } = props

    return (
        <>
            <div>
                <p>{id}
                {item}
                {restaurant}
                {price}
                {description}
                {day}
                {dietary}
                {open_time}
                {close_time}</p>
            </div>
        </>
    )
}

export default RestaurantCard