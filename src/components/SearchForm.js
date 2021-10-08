import React, { useState } from "react";
// import { Field, reduxForm } from "redux-form";
import { Form, Dropdown, Divider } from "semantic-ui-react";
import _ from 'lodash';
import RestResults from "./RestResults";
import axios from "axios";
import MenuItemResults from "./ItemResults";

const getOptions = (number, prefix = 'Choice ') =>
    _.times(number, (index) => ({
        key: index,
        text: `${prefix}${index}`,
        value: index,
}))


const dayOptions=[
    { key: 'a', text: 'All Days', value: 'allDays' },
    { key: 'weekends', text: 'Weekends', value: 'weekends' },
    { key: 'weekdays', text: 'Weekdays', value: 'weekdays' },
    { key: 'm', text: 'Monday', value: 'monday' },
    { key: 'tu', text: 'Tuesday', value: 'tuesday' },
    { key: 'w', text: 'Wednesday', value: 'wednesday' },
    { key: 'th', text: 'Thursday', value: 'thursday' },
    { key: 'f', text: 'Friday', value: 'friday' },
    { key: 'sa', text: 'Saturday', value: 'saturday' },
    { key: 'su', text: 'Sunday', value: 'sunday' }
]


const dietaryOptions=[
    { key: 'all', text: 'No Restrictions', value: 'all' },
    { key: 'vegetarian', text: 'vegetarian', value: 'vegetarian' },
    { key: 'vegan', text: 'vegan', value: 'vegan' },
    { key: 'glueten-free', text: 'glueten-free', value: 'glueten-free' },
    { key: 'vegetarian_and_gluten-free', text: 'vegetarian and gluten-free', value: 'vegetarian_and_luten-free' },
    { key: 'vegan_and_gluten-free', text: 'vegan and gluten-free', value: 'vegan_and_gluten-free' }
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
  // const [result, setResult] = useState()
  // const [count, setCount] = useState(0)
    const [priceLow, setPriceLow] = useState(1)
    const [priceHigh, setPriceHigh] = useState(49)
    const [day, setDay] = useState('all')
    const [time, setTime] = useState('all')
    const [dietary, setDietary] = useState('none')

    const handleSubmit = async (e) => {
      try {
        e.preventDefault()
        const result = await axios
          .get(`/api/menuitems&priceLow=${priceLow}&priceHigh=${priceHigh}&day=${day}&time=${time}&dietary=${dietary}`)
      } catch (error) {
        console.error(error.message)
      }
    }

// console.log(priceLow, priceHigh, day, time, dietary)

// Using Semantic UI for forms and dropdown menus
    return (
      <>
        <Form onSubmit={handleSubmit}>
          <strong>Price Low $</strong>
            <Dropdown
              placeholder='1'
              // value={priceLow}
              // component={renderSelect}
              fluid search selection
              options={getOptions(50, '')}
              onChange={e => setPriceLow(e.target.value)}
            />
          <br />
          <strong>Price High $</strong>
            <Dropdown
              label='Price High'
              placeholder='49'
              // value={priceHigh}
              // component={renderSelect}
              fluid search selection
              options={getOptions(50, '')}
              onChange={e => setPriceHigh(e.target.value)}
            />
          <br />
          <strong>Day</strong>
            <Dropdown
              label='Day'
              // value={day}
              // component={renderSelect}
              fluid search selection
              fluid multiple selection
              options={dayOptions}
              placeholder="All Days"
              onChange={e => setDay(e.target.value)}
            />
          <br />
          <strong>Time</strong>
            <Dropdown
              label='Time'
              // value={time}
              // component={renderSelect}
              fluid search selection
              options={timeOptions}
              placeholder="Time"
              onChange={e => setTime(e.target.value)}
            />
          <br />
          <strong>Dietary Restrictions</strong>
            <Dropdown
              label='Dietary Restrictions'
              // value={dietary}
              // component={renderSelect}
              placeholder='No Restrictions'
              fluid search selection
              fluid multiple selection
              options={dietaryOptions}
              onChange={e => setDietary(e.target.value)}
            />
            <br />
          
          
          <Form.Button primary>GO</Form.Button>

          <Divider hidden />
        </Form>
        
        {/* <MenuItemResults data={result} count={count} /> */}

      </>
    )
  }



export default SearchForm

// export default reduxForm({
//   form: "profile"
// })(SearchForm);