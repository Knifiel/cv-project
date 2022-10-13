import React, { Component } from 'react'
import TextAreaField from './TextAreaField'
import TextField from './TextField'
import '../../styles/Workplace.css'
import DatePicker from './DatePicker'

export class Workplace extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.id,
    }
  }
  render() {
    const { isEditing, handleDelete } = this.props
    return (
      <div className='workplace'>
        <TextField
          isEditing={isEditing}
          className='companyTitle'
          hint='Company name:'
          placeholder='Unnamed Burger Company inc.'
        />
        <TextField
          isEditing={isEditing}
          className='jobRole'
          hint='Your job role:'
          placeholder='Senior Burgermaker'
        />
        <DatePicker
          isEditing={isEditing}
          className='date'
          hint='Period of work. Leave "to" field empty if you are still working there'
        />
        <TextAreaField
          isEditing={isEditing}
          className='accomplishments'
          hint='Write your role responsibilities and accomplishments there'
          placeholder='I invented best selling burger of 2018!'
        />
        {isEditing && (
          <button
            type='button'
            onClick={() => handleDelete(this.state.id)}>
            Delete workplace
          </button>
        )}
      </div>
    )
  }
}

export default Workplace
