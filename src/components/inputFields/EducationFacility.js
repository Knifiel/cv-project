import React, { Component } from 'react'
import TextAreaField from './TextAreaField'
import TextField from './TextField'
import styles from '../../styles/Card.module.css'
import DatePicker from './DatePicker'

export class EducationFacility extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.id,
      isEmpty: true,
    }
  }

  render() {
    const { isEditing, handleDelete } = this.props
    return (
      <div className={styles.card}>
        <TextField
          isEditing={isEditing}
          className='title'
          hint='Education Facility title:'
          placeholder='Burger Engineering college'
        />
        <DatePicker
          isEditing={isEditing}
          className='date'
          hint='Period of education. Leave "to" field empty if you are still in education:'
        />
        <TextAreaField
          isEditing={isEditing}
          className='content'
          hint='Write your degree and any relevant modules here:'
          placeholder='Burger engineering'
        />
        {isEditing && (
          <button
            type='button'
            onClick={() => handleDelete(this.state.id)}>
            Delete
          </button>
        )}
      </div>
    )
  }
}

export default EducationFacility
