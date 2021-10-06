import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Dropdown } from 'semantic-ui-react'


const options = [
  { key: 'all', text: 'ALL', value: 'all' },
  { key: 'weekends', text: 'Weekends', value: 'weekends' },
  { key: 'weekdays', text: 'Weekdays', value: 'weekdays' },
  { key: 'monday', text: 'Monday', value: 'monday' },
  { key: 'tuesday', text: 'Tuesday', value: 'tuesday' },
  { key: 'wednesday', text: 'Wednesday', value: 'wednesday' },
  { key: 'thursday', text: 'Thursday', value: 'thursday' },
  { key: 'friday', text: 'Friday', value: 'friday' },
  { key: 'saturday', text: 'Saturday', value: 'saturday' },
  { key: 'sunday', text: 'Sunday', value: 'sunday' },
]

const Day = () => (
  <Dropdown placeholder='Day' fluid multiple selection options={options}/>
)

export default Day;