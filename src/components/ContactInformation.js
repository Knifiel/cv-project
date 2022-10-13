import React, { Component } from 'react'
import TextField from './inputFields/TextField'
import EmailField from './inputFields/EmailField'
import LinkedInLink from './inputFields/LinkedInLink'
import NumberField from './inputFields/NumberField'

export class ContactInformation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: true,
    }
  }
  toggleEdit = () => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
    }))
  }
  render() {
    const { isEditing } = this.state
    return (
      <div className='contactInfo'>
        <h3>Contact Information</h3>
        <TextField
          isEditing={isEditing}
          className='name'
          hint='Enter your full name:'
          placeholder='John Smith'
        />
        <TextField
          isEditing={isEditing}
          className='title'
          hint='Enter your job title.'
          placeholder='Burger Turner'
        />

        <EmailField
          isEditing={isEditing}
          className='email'
          hint='Enter your e-mail.'
        />

        <NumberField
          isEditing={isEditing}
          className='phone'
          hint='Enter your phone number.'
        />

        <LinkedInLink
          isEditing={isEditing}
          className='linkedIn'
          hint='Enter your linkedIn profile.'
        />

        <TextField
          isEditing={isEditing}
          className='location'
          hint='Enter your location.'
          placeholder='New York, New York City'
        />

        <button
          className='editButton'
          onClick={this.toggleEdit}>
          {isEditing ? 'Complete' : 'Edit'}
        </button>
      </div>
    )
  }
}

export default ContactInformation
