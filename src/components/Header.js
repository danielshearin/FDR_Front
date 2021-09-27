import React from 'react'
// import { Nav, Title } from './styled.js'
import Price from './Price.js';
import Location from './Location.js';
import Time from './Time.js';
import Day from './Day.js';

function Header () {
  return (

    <div><h2>FIVE DOLLAR LUNCH</h2><Price /><Price /><Location /><Time /><Day />
    </div>
  )
}

export default Header;