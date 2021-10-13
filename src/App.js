import React from "react";
import NavBar from './components/NavBar.js';
import Map from './components/Map.js';
import MenuItemResults from "./components/ItemResults.js";
import SearchForm from "./components/SearchForm.js";


function App () {
  return (
    <div>
      <NavBar />
      <SearchForm />
      <Map />
      <MenuItemResults />
    </div>
  )
}

export default App;
