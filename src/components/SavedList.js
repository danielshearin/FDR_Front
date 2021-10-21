import React from "react";
import savedItems from "./SaveButton";

function SavedList () {
    console.log(savedItems)
    
    return ( 
        <>
        {!!savedItems &&
        (null)
        }
        </>
    )
}

export default SavedList