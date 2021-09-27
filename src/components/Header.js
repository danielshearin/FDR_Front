import React from 'react'
// import { Nav, Title } from './styled.js'
import Price from './Price.js';
import Time from './Time.js';
import Day from './Day.js';

function Header () {
  return (

    <div><h2>FIVE DOLLAR LUNCH</h2>
    <p><Price /><Price /><Time /><Day /></p>
    </div>
  )
}

export default Header;