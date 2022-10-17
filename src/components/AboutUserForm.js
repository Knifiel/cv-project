import styles from '../styles/AboutUserForm.css'
import React, { useState } from 'react'

export const AboutUserForm = () => {
  const [formData, setFormData] = useState({})
  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setFormData({ ...formData, [name]: value })
  }
  return (
    <div>
      <form>
        <h3>Contact info:</h3>
        <label>
          Full Name:
          <input
            type='text'
            name='name'
            value={formData.name ? formData.name : ''}
            placeholder='John Smith'
            onChange={handleChange}
          />
        </label>

        <label>
          Job:
          <input
            type='text'
            name='job'
            value={formData.job ? formData.job : ''}
            placeholder='Spymaster'
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type='email'
            name='email'
            value={formData.email ? formData.email : ''}
            placeholder='JohnSmith@example.com'
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type='numeric'
            name='phone'
            value={formData.phone ? formData.phone : ''}
            placeholder='1-(234)-567-89-99'
            onChange={handleChange}
          />
        </label>

        <label>
          linkedIn profile name:
          <input
            type='text'
            name='linkedIn'
            value={formData.linkedIn ? formData.linkedIn : ''}
            placeholder='john.smith'
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            type='text'
            name='location'
            value={formData.location ? formData.location : ''}
            placeholder='NYC'
            onChange={handleChange}
          />
        </label>

        <label>
          Personal statement:
          <textarea
            name='statement'
            value={formData.statement ? formData.statement : ''}
            placeholder='I have worked as a spy for governments of 18 different countries!'
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  )
}
