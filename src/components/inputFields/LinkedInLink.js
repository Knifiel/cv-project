import React, { Component } from 'react'
import '../../styles/TextField.css'

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
          <label className='inputField'>
            <span className='hint'>{hint}</span>
            <input
              type='text'
              className={`textInput ${className}`}
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
