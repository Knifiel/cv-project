import React from 'react'
import styles from '../styles/AddCardForm.module.css'

function AddCardForm({ formData, headings, handleChange, handleSubmit }) {
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}>
      <label>
        <span className={styles.labelText}>{headings.titleLabel}</span>
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
        <span className={styles.labelText}>{headings.subtitleLabel}</span>
        <input
          className={styles.input}
          type='text'
          name='subtitle'
          value={formData.subtitle ? formData.subtitle : ''}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <span className={styles.labelText}>{headings.datePickerLabel}</span>
        <div className={styles.dateField}>
          {` From `}
          <input
            className={styles.date}
            type='number'
            name='dateFrom'
            min='1900'
            max='2100'
            step='1'
            value={formData.dateFrom ? formData.dateFrom : ''}
            onChange={handleChange}
            required
          />
          {` to `}
          <input
            className={styles.date}
            type='number'
            name='dateTo'
            min='1900'
            max='2100'
            step='1'
            value={formData.dateTo ? formData.dateTo : ''}
            onChange={handleChange}
            required
          />
        </div>
      </label>

      <label>
        <span className={styles.labelText}>{headings.descLabel}</span>
        <textarea
          className={styles.textarea}
          name='desc'
          value={formData.desc ? formData.desc : ''}
          onChange={handleChange}
          required
        />
      </label>
      <button
        className={styles.button}
        type='submit'>
        Confirm
      </button>
    </form>
  )
}

export default AddCardForm
