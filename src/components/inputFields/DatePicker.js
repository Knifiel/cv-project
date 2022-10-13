import React, { Component } from 'react'
// import '../../styles/TextField.css'

export class DatePicker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      from: null,
      to: null,
    }
  }

  handleChange = (e) => {
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }))
  }
  render() {
    const { isEditing, className, hint } = this.props
    return (
      <>
        {isEditing ? (
          <label className='inputField'>
            <span className='hint'>{hint}</span>
            <span>
              From
              <input
                type='date'
                className={`dateInput${className}`}
                name='from'
                value={this.from}
                onChange={this.handleChange}
                placeholder='example@email'
              />
              to
              <input
                type='date'
                className={`dateInput${className}`}
                name='to'
                value={this.state.to}
                onChange={this.handleChange}
                placeholder='example@email'
              />
            </span>
          </label>
        ) : (
          this.state.from && (
            <span className={className}>
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
