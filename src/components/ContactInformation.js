import React, { Component } from 'react'
import TextField from './inputFields/TextField'
import EmailField from './inputFields/EmailField'
import LinkedInLink from './inputFields/LinkedInLink'
import NumberField from './inputFields/NumberField'
import styles from '../styles/ContactInformation.module.css'
import cardStyles from '../styles/Card.module.css'

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
    const { hideEdit } = this.props
    return (
      <div className={isEditing ? cardStyles.card : styles.cardGrid}>
        <h3 className={styles.heading}>Contact Information</h3>
        <TextField
          isEditing={isEditing}
          className={styles.title}
          hint='Enter your full name:'
          placeholder='John Smith'
        />
        <TextField
          isEditing={isEditing}
          className={styles.subtitle}
          hint='Enter your job title:'
          placeholder='Burger Turner'
        />

        <EmailField
          isEditing={isEditing}
          className={styles.email}
          hint='Enter your e-mail:'
        />

        <NumberField
          isEditing={isEditing}
          className={styles.phone}
          hint='Enter your phone number:'
        />

        <LinkedInLink
          isEditing={isEditing}
          className={styles.linkedIn}
          hint='Enter your linkedIn profile:'
        />

        <TextField
          isEditing={isEditing}
          className={styles.location}
          hint='Enter your location:'
          placeholder='New York, New York City'
        />
        {!hideEdit && (
          <button
            type='button'
            className='edit'
            onClick={() => {
              this.toggleEdit()
              this.props.handleEditChange('editingContacts')
            }}>
            {isEditing ? 'Complete' : 'Edit'}
          </button>
        )}
        {this.props.children}
      </div>
    )
  }
}

export default ContactInformation
