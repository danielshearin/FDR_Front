import React, { useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
// import { Nav, Title } from './styled.js'

const options = [
  { key: 'all', text: 'ALL', value: 'all' },
  { key: 'breakfast', text: 'breakfast', value: 'breakfast' },
  { key: 'lunch', text: 'lunch', value: 'lunch' },
  { key: 'dinner', text: 'dinner', value: 'dinner' },
  { key: 'late-night', text: 'late-night', value: 'late-night' },
  { key: 'brunch', text: 'brunch', value: 'brunch' },
]

const Time = () => (
  <Dropdown placeholder='Time' 
  fluid multiple selection options={options} />
)

export default Time;