import React, { useState, useEffect } from "react";
import { Form, Dropdown, Divider, Button, Container } from "semantic-ui-react";
import _ from 'lodash';
import axios from "axios";
import ItemResults from "./ItemResults";
import Map from "./Map";
import RestaurantCard from "./RestaurantCard";
import ResultBar from "./ResultBar";
import { appendToMemberExpression } from "@babel/types";


const getOptions = (number, prefix = 'Choice ') =>
    _.times(number, (index) => ({
        key: index,
        text: `${prefix}${index}`,
        value: index,
}))


const dayOptions=[
    { key: 'd', text: "No Day Selected", value: 'none'},
    // { key: 'a', text: 'Available Everyday', value: 'all_days' },
    { key: 'weekends', text: 'Weekends', value: "weekends"},
    { key: 'weekdays', text: 'Weekdays', value: "weekdays"},
    { key: 'm', text: 'Monday', value: 'monday' },
    { key: 'tu', text: 'Tuesday', value: 'tuesday' },
    { key: 'w', text: 'Wednesday', value: 'wednesday' },
    { key: 'th', text: 'Thursday', value: 'thursday' },
    { key: 'f', text: 'Friday', value: 'friday' },
    { key: 'sa', text: 'Saturday', value: 'saturday' },
    { key: 'su', text: 'Sunday', value: 'sunday' },
]


const dietaryOptions=[
    { key: 'all', text: 'No Restrictions', value: 'none' },
    { key: 'veggie', text: 'Vegetarian', value: 'vegetarian'},
    { key: 'vega', text: 'Vegan', value: 'vegan'},
    { key: 'gluten_free', text: 'Gluten-free', value: 'gluten_free'},
    // { key: 'vegetarian_and_gf', text: 'Vegetarian and Gluten-free', value: 'vegetarian_and_gf'},
    // { key: 'vegan_and_gf', text: 'Vegan and Gluten-free', value: 'vegan_and_gf' }
]


const timeOptions=[
    { key: '5 am', text: '5 am', value: '5' },
    { key: '6 am', text: '6 am', value: '6' },
    { key: '7 am', text: '7 am', value: '7' },
    { key: '8 am', text: '8 am', value: '8' },
    { key: '9 am', text: '9 am', value: '9' },
    { key: '10', text: '10 am', value: '10' },
    { key: '11', text: '11 am', value: '11' },
    { key: '12', text: 'Noon', value: '12' },
    { key: '1', text: '1 pm', value: '13' },
    { key: '2', text: '2 pm', value: '14' },
    { key: '3', text: '3 pm', value: '15' },
    { key: '4', text: '4 pm', value: '16' },
    { key: '5', text: '5 pm', value: '17' },
    { key: '6', text: '6 pm', value: '18' },
    { key: '7', text: '7 pm', value: '19' },
    { key: '8', text: '8 pm', value: '20' },
    { key: '9', text: '9 pm', value: '21' },
    { key: '10 p', text: '10 pm', value: '22' },
    { key: '11 p', text: '11 pm', value: '23' },
    { key: '12 p', text: 'Midnight', value: '24' },
    { key: '1 am', text: '1 am', value: '25' },
    { key: '2 am', text: '2 am', value: '26' },
    { key: '3 am', text: '3 am', value: '27' },
    { key: '4 am', text: '4 am', value: '28' },
]




const SearchForm = () => {

  //TRY 1
  const [restaurant, setRestaurant] = useState(null)

  useEffect(() => {
    axios.get("https://five-dollar-lunch.herokuapp.com/api/restaurants")
    .then(response => {
      const restaurants = response.data
      setRestaurant(restaurants)
    });

  }, [])

  const [restaurantNames, setRestaurantNames] = useState()
  const [itemResult, setItemResult] = useState()
  const [priceLow, setPriceLow] = useState(1)
  const [priceHigh, setPriceHigh] = useState(49)
  const [time, setTime] = useState('12')
  const [day, setDay] = useState(['none'])
  const [dietary, setDietary] = useState(['none'])


  const handleSubmit = async (e) => {
    try {
      e.preventDefault()

      const data = {
        "price_low":priceLow,
        "price_high":priceHigh,
        "time":time,
        "day":day,
        "dietary":dietary 
      }
      
      
      const searchResult = await axios.post("https://five-dollar-lunch.herokuapp.com/api/searchitems", data)
      console.log(data)
      
      
      const array = []
      const restArray = []
      searchResult.data.map((item) => {
        const restaurantObject = (item.restaurant)
        array.push(restaurantObject)
        const restaurantNames = (item.restaurant.name)
        restArray.push(restaurantNames)
      })
      setRestaurant(array)
      console.log(array)
      const uniqueRestaurants = [...new Set(restArray)];
      setItemResult(searchResult.data)

      const uniqRestObjects = new Set(array.map(e => JSON.stringify(e)));
      const uniqRestObjArray = Array.from(uniqRestObjects).map(e => JSON.parse(e));
      console.log(uniqRestObjArray)
      setRestaurantNames(uniqRestObjArray)



      // OLD CODE for reference
          /*.get(`/api/menuitems&priceLow=${priceLow}&priceHigh=${priceHigh}&day=${day}&time=${time}&dietary=${dietary}`)*/
          
        } catch (error) {
          console.error(error.message)
        }
      }



  return (
    <>
    <Container>
      <Form class="form" onSubmit={handleSubmit}>

        <div class='label'><strong>Price Low $</strong></div>
          <Dropdown
            placeholder='1'
            fluid search selection
            options={getOptions(50, '')}
            onChange={(e, {value}) => {setPriceLow(value)}}
          />
        <br />

        <div class='label'><strong>Price High $</strong></div>
          <Dropdown
            label='Price High'
            placeholder='49'
            fluid search selection
            options={getOptions(50, '')}
            onChange={(e, {value}) => {setPriceHigh(value)}}
          />
        <br />

        <div class='label'><strong>Time</strong></div>
          <Dropdown
            fluid search selection
            options={timeOptions}
            placeholder="Noon"
            onChange={(e, {value}) => {setTime(value)}}
          />
        <br />

        <div class='label'><strong>Day</strong></div>
          <Dropdown
            fluid search selection
            fluid multiple selection
            options={dayOptions}
            placeholder="No Day Selected"
            onChange={(e, {value}) => {setDay(value)}}
          />
        <br />

        <div class='label'><strong>Dietary Needs</strong></div>
          <Dropdown
            label='Dietary Restrictions'
            placeholder='No Restrictions'
            fluid search selection
            fluid multiple selection
            options={dietaryOptions}
            onChange={(e, {value}) => {setDietary(value)}}
          />
          <br />
        
        <Divider hidden />
        <Button type='submit' class='button'>GO</Button>

        <Divider hidden />
      </Form>
      <Divider hidden />
      
{/* CHECKS SEARCH DATA */}
      {/* <strong>onChange:</strong>
      <pre>{JSON.stringify({ priceLow, priceHigh, time, day, dietary }, null, 2)}</pre> */}

    </Container>
    {restaurant ? <Map data={restaurant} /> : ''}
    <ResultBar />
    <Divider hidden />
    <ItemResults data={itemResult} restaurants={restaurantNames} />
    </>
  )
}

export default SearchForm