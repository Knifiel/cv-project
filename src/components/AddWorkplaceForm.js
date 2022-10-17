import React from 'react'
import styles from '../styles/AddWorkplaceForm.module.css'

function AddWorkplaceForm({ formData, handleChange, handleSubmit }) {
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}>
      <label>
        Company title:
        <input
          className={styles.input}
          type='text'
          name='title'
          value={formData.title ? formData.title : ''}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Role:
        <input
          className={styles.input}
          type='text'
          name='role'
          value={formData.role ? formData.role : ''}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Work period:
        <div className={styles.dateField}>
          <input
            className={styles.date}
            type='date'
            name='dateFrom'
            value={formData.dateFrom ? formData.dateFrom : ''}
            onChange={handleChange}
            required
          />
          {` - `}
          <input
            className={styles.date}
            type='date'
            name='dateTo'
            value={formData.dateTo ? formData.dateTo : ''}
            onChange={handleChange}
            required
          />
        </div>
      </label>

      <label>
        Responsibilities and/or achievements:
        <textarea
          className={styles.textarea}
          name='jobDesc'
          value={formData.jobDesc ? formData.jobDesc : ''}
          onChange={handleChange}
          required
        />
      </label>
      <button type='submit'>Confirm</button>
    </form>
  )
}

export default AddWorkplaceForm
