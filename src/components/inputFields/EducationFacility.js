import React, { Component } from 'react'
import TextAreaField from './TextAreaField'
import TextField from './TextField'
import '../../styles/EducationFacility.css'
import DatePicker from './DatePicker'

export class EducationFacility extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.id,
    }
  }
  render() {
    const { isEditing, handleDelete } = this.props
    return (
      <div className='facility'>
        <TextField
          isEditing={isEditing}
          className='eduFacilityTitle'
          hint='Education Facility title:'
          placeholder='Burger Engineering college'
        />
        <DatePicker
          isEditing={isEditing}
          className='date'
          hint='Period of education. Leave "to" field empty if you are still in education'
        />
        <TextAreaField
          isEditing={isEditing}
          className='degreeAndModules'
          hint='Write your degree and any relevant modules here:'
          placeholder='Burger engineering'
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

export default EducationFacility
