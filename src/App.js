import React from "react";
import TopBar from './components/TopBar.js';
import Map from './components/Map.js';
import MenuItemResults from "./components/ItemResults.js";


function App () {
  return (
    <div>
      <TopBar />
      <Map />
      <MenuItemResults />
    </div>
  )
}

export default App;
