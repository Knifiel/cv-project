import React, { Component } from 'react'
import styles from '../../styles/TextField.module.css'
export class DatePicker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      from: '',
      to: '',
    }
  }

  handleChange = (e) => {
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }))
  }
  render() {
    const { isEditing, hint } = this.props
    return (
      <>
        {isEditing ? (
          <label className={styles.inputField}>
            <span className='hint'>{hint}</span>
            <span>
              {`From `}
              <input
                type='date'
                name='from'
                value={this.from}
                onChange={this.handleChange}
                placeholder='example@email'
              />
              {` to `}
              <input
                type='date'
                name='to'
                value={this.state.to}
                onChange={this.handleChange}
                placeholder='example@email'
              />
            </span>
          </label>
        ) : (
          this.state.from && (
            <span className='date'>
              from {this.state.from} to{' '}
              {this.state.to ? this.state.to : 'present'}
            </span>
          )
        )}
      </>
    )
  }
}

export default DatePicker
