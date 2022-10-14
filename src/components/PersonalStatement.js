import React, { Component } from 'react'
import TextAreaField from './inputFields/TextAreaField'
import styles from '../styles/PersonalStatement.module.css'

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
    const { hideEdit } = this.props
    return (
      <div className={`${styles.card} personalStatementCard`}>
        <TextAreaField
          isEditing={isEditing}
          className='personalStatement'
          hint='Write your personal statement'
          placeholder='I want a better job!'
        />
        {!hideEdit && (
          <button
            type='button'
            className={styles.edit}
            onClick={() => {
              this.toggleEdit()
              this.props.handleEditChange('editingStatement')
            }}>
            {isEditing ? 'Complete' : 'Edit'}
          </button>
        )}
      </div>
    )
  }
}

export default PersonalStatement
