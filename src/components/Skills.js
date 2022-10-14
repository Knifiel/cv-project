import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import skillStyles from '../styles/Skills.module.css'
import styles from '../styles/Card.module.css'

export class Skills extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: true,
      skills: '',
    }
  }
  toggleEdit = () => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
    }))
  }
  handleChange = (e) => {
    this.setState(() => ({
      skills: e.target.value,
    }))
  }
  render() {
    const { skills, isEditing } = this.state
    const { hideEdit } = this.props
    if (isEditing) {
      return (
        <div className={styles.card}>
          <h3>Skills</h3>
          <textarea
            className={styles.textarea}
            onChange={(e) => this.handleChange(e)}
            value={skills}></textarea>
          {!hideEdit && (
            <button
              type='button'
              className={styles.edit}
              onClick={() => {
                this.toggleEdit()
                this.props.handleEditChange('editingSkills')
              }}>
              {isEditing ? 'Complete' : 'Edit'}
            </button>
          )}
        </div>
      )
    } else {
      let list = skills
        .split('\n')
        .map((string, index) => string && <li key={index}>{string}</li>)
        .filter((n) => n !== '')
      return (
        <div className={styles.card}>
          {skills.length ? <h3>Skills</h3> : <p>Has no skills</p>}
          {skills.length ? <ul>{list}</ul> : null}
          {!hideEdit && (
            <button
              type='button'
              className={styles.edit}
              onClick={() => {
                this.toggleEdit()
                this.props.handleEditChange('editingSkills')
              }}>
              {isEditing ? 'Complete' : 'Edit'}
            </button>
          )}
        </div>
      )
    }
  }
}

export default Skills
