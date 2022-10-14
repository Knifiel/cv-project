import React, { Component } from 'react'
import styles from '../../styles/TextField.module.css'

export class LinkedInLink extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }
  }

  handleChange = (e) => {
    this.setState(() => ({
      value: e.target.value,
    }))
  }
  render() {
    const { isEditing, className, hint } = this.props
    return (
      <>
        {isEditing ? (
          <label className={styles.inputField}>
            <span className={styles.hint}>{hint}</span>
            <input
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
              placeholder='John.Smith'
            />
          </label>
        ) : (
          this.state.value && (
            <a
              className={className}
              href={`https://linkedin.com/in/${this.state.value}`}>
              linkedin.com/in/{this.state.value}
            </a>
          )
        )}
      </>
    )
  }
}

export default LinkedInLink
