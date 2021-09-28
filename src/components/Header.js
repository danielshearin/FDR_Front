import React from 'react'
// import { Nav, Title } from './styled.js'
// import Price from './Price.js';
// import Time from './Time.js';
// import Day from './Day.js';
import FindRestaurant from './FindRestaurant.js';
import HighPrice from './HighPrice.js';
import LowPrice from './LowPrice.js';
import Time from './Time.js';
import Day from './Day.js';

function Header () {
  return (

    <div><h2>FIVE DOLLAR LUNCH</h2>

    <ul><li><LowPrice /></li><li><HighPrice /></li><li><Time /></li><li><Day /></li>
    </ul>
    </div>
  )
}

export default Header;