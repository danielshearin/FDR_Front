import React, { useState } from "react";
import axios from 'axios';
import RestResults from "./RestResults";

const FindRestaurant = () => {
    const [userInput, setUserInput] = useState('')
    const [result, setResult] = useState()


    const handleSubmit= async (e) => {
        try {
            e.preventDefault()
            const result = await axios
            .get("/api/restaurants/")
            setResult(result.data.results)
        } catch (error) {
            console.error(error.message)
        }
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
            <input value={userInput}
            onChange={e => setUserInput(e.target.value)} />
        </form>
            <button type="submit">Submit</button>
        <RestResults data={result} />
        </>
    )
}


export default FindRestaurant;
