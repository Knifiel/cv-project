import React, { Component } from 'react'
import styles from '../../styles/TextField.module.css'

export class NumberField extends Component {
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
              type='tel'
              inputMode='tel'
              value={this.state.value}
              onChange={this.handleChange}
              placeholder='0-123-34-56'
            />
          </label>
        ) : (
          this.state.value && (
            <span className={className}>{this.state.value}</span>
          )
        )}
      </>
    )
  }
}

export default NumberField
