import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Dropdown } from "semantic-ui-react";
import _ from 'lodash';



    
const renderSelect = (field) => (
    <Form.Select
        label={field.label}
        name={field.input.name}
        onChange={(e, { value }) => field.input.onChange(value)}
        options={field.options}
        placeholder={field.placeholder}
        value={field.input.value}
    />
  );

const getOptions = (number, prefix = 'Choice ') =>
    _.times(number, (index) => ({
        key: index,
        text: `${prefix}${index}`,
        value: index,
}))
    
const dayOptions=[
    { key: 'a', text: 'ALL DAYS', value: 'allDays' },
    { key: 'weekends', text: 'Weekends', value: 'weekends' },
    { key: 'weekdays', text: 'Weekdays', value: 'weekdays' },
    { key: 'm', text: 'Monday', value: 'monday' },
    { key: 'tu', text: 'Tuesday', value: 'tuesday' },
    { key: 'w', text: 'Wednesday', value: 'wednesday' },
    { key: 'th', text: 'Thursday', value: 'thursday' },
    { key: 'f', text: 'Friday', value: 'friday' },
    { key: 'sa', text: 'Saturday', value: 'saturday' },
    { key: 'su', text: 'Sunday', value: 'sunday' }
]

const mealOptions=[
    { key: 'all', text: 'ALL TIMES', value: 'allTimes' },
    { key: 'breakfast', text: 'breakfast', value: 'breakfast' },
    { key: 'lunch', text: 'lunch', value: 'lunch' },
    { key: 'dinner', text: 'dinner', value: 'dinner' },
    { key: 'late-night', text: 'late-night', value: 'late-night' },
    { key: 'brunch', text: 'brunch', value: 'brunch' }
]

const timeOptions=[
    { key: '5 am', text: '5 am', value: '5' },
    { key: '6 am', text: '6 am', value: '6' },
    { key: '7 am', text: '7 am', value: '7' },
    { key: '8 am', text: '8 am', value: '8' },
    { key: '9 am', text: '9 am', value: '9' },
    { key: '10', text: '10 am', value: '10' },
    { key: '11', text: '11 am', value: '11' },
    { key: '12', text: 'Noon', value: '12' },
    { key: '1', text: '1 pm', value: '13' },
    { key: '2', text: '2 pm', value: '14' },
    { key: '3', text: '3 pm', value: '15' },
    { key: '4', text: '4 pm', value: '16' },
    { key: '5', text: '5 pm', value: '17' },
    { key: '6', text: '6 pm', value: '18' },
    { key: '7', text: '7 pm', value: '19' },
    { key: '8', text: '8 pm', value: '20' },
    { key: '9', text: '9 pm', value: '21' },
    { key: '10 p', text: '10 pm', value: '22' },
    { key: '11 p', text: '11 pm', value: '23' },
    { key: '12 p', text: 'Midnight', value: '24' },
    { key: '1 am', text: '1 am', value: '25' },
    { key: '2 am', text: '2 am', value: '26' },
    { key: '3 am', text: '3 am', value: '27' },
    { key: '4 am', text: '4 am', value: '28' },
]

    
const SearchForm = props => {
    const { handleSubmit, reset } = props;

    return (
        <Fragment>
            <Form onSubmit={handleSubmit}>
                <Form.Group inline widths="equal">
                    <Field
                        label="Price Low"
                        component={renderSelect}
                        name="priceLow"
                        selection
                        options={getOptions(50, '')}
                        placeholder="Price Low"
                    />
                    <Field
                        label="Price High"
                        component={renderSelect}
                        name="priceHigh"
                        selection
                        options={getOptions(50, '')}
                        placeholder="Price High"
                    />
                    <Field
                        label="Day"
                        component={renderSelect}
                        name="day"                    
                        fluid multiple selection options={dayOptions}
                        placeholder="Day"
                    />
                    <Field
                        label="Meal"
                        component={renderSelect}
                        name="meal"                    
                        fluid multiple selection options={mealOptions}
                        placeholder="Meal"
                    />
                    <Field
                        label="Time"
                        component={renderSelect}
                        name="time"                    
                        options={timeOptions}
                        placeholder="Time"
                    />

                    <Form.Button primary>GO</Form.Button>
                    <Form.Button onClick={reset}>Reset</Form.Button>
                </Form.Group>
            </Form>
        </Fragment>
    );
};

export default reduxForm({
    form: "profile"
})(SearchForm);