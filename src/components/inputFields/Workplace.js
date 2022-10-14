import React, { Component } from 'react'
import TextAreaField from './TextAreaField'
import TextField from './TextField'
import styles from '../../styles/Card.module.css'
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
      <div className={styles.card}>
        <TextField
          isEditing={isEditing}
          className={styles.title}
          hint='Company name:'
          placeholder='Unnamed Burger Company inc.'
        />
        <TextField
          isEditing={isEditing}
          className={styles.subTitle}
          hint='Your job role:'
          placeholder='Senior Burgermaker'
        />
        <DatePicker
          isEditing={isEditing}
          className={styles.date}
          hint='Period of work. Leave "to" field empty if you are still working there'
        />
        <TextAreaField
          isEditing={isEditing}
          className={styles.content}
          hint='Write your role responsibilities and accomplishments there'
          placeholder='I invented best selling burger of 2018!'
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

export default Workplace
