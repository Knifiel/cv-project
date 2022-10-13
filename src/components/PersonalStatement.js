import React, { Component } from 'react'
import TextAreaField from './inputFields/TextAreaField'

export class PersonalStatement extends Component {
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
      <div className='statement'>
        <TextAreaField
          isEditing={isEditing}
          className='personalStatement'
          hint='Write your personal statement'
          placeholder='I want a better job!'
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

export default PersonalStatement
