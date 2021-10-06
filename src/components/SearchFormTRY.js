import React, { Fragment, useState } from "react";
// import { Field, reduxForm } from "redux-form";
import { Form, Input, Button } from "semantic-ui-react";
// import _ from 'lodash';
import RestResults from "./RestResults";
import axios from "axios";



    
const SearchBar = () => {
    const [userInput, setUserInput] = useState('')
    const [result, setResult] = useState()
    const [count, setCount] = useState(0)
  
    // styled components
  
    const handleSubmit = async (e) => {
      try {
        e.preventDefault()
        const result = await axios
          .get(`/api/menuitems`)
        setResult(result.data.results)
        setCount(result.data.total_results)
      } catch (error) {
        console.error(error.message)
      }
    }
  
    return (
      <>
        <Form onSubmit={handleSubmit}>
          <Input
            label='Search' value={userInput}
            onChange={e => setUserInput(e.target.value)}
          />
          <Form.Button primary>GO</Form.Button>
        </Form>
        <RestResults data={result} count={count} />
      </>
    )
  }

export default SearchBar