import React, { Component } from 'react'
import styles from '../../styles/TextAreaField.module.css'

export class TextAreaField extends Component {
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
            <textarea
              className={styles.textarea}
              value={this.state.value}
              onChange={this.handleChange}
              placeholder={this.props.placeholder}
              rows='5'
              cols='50'
            />
          </label>
        ) : (
          this.state.value && <p className={className}>{this.state.value}</p>
        )}
      </>
    )
  }
}

export default TextAreaField
