import React, { useEffect, useState } from 'react'
import styles from '../styles/AddCardForm.module.css'

function AddCardForm({ formData, headings, handleChange, handleSubmit }) {
  const [selectedYear, setselectedYear] = useState(new Date().getFullYear())
  const [dateListTo, setdateListTo] = useState([
    <option
      key='0'
      value={new Date().getFullYear()}>
      {new Date().getFullYear()}
    </option>,
  ])
  const [dateListFrom, setdateListFrom] = useState([
    <option
      key='0'
      value={new Date().getFullYear()}>
      {new Date().getFullYear()}
    </option>,
  ])
  useEffect(() => {
    const initialDateListFrom = []
    for (let i = 0; i < 60; i++) {
      initialDateListFrom.push(
        <option
          key={i}
          value={new Date().getFullYear() - i}>
          {new Date().getFullYear() - i}
        </option>
      )
    }
    setdateListFrom(initialDateListFrom)
  }, [])
  useEffect(() => {
    const years = new Date().getFullYear() - selectedYear
    const newDateListTo = []
    for (let i = 0; i <= years; i++) {
      newDateListTo.push(
        <option
          key={i}
          value={new Date().getFullYear() - i}>
          {new Date().getFullYear() - i}
        </option>
      )
      setdateListTo(newDateListTo)
    }
  }, [selectedYear])

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
          <select
            className={styles.date}
            name='dateFrom'
            defaultValue={formData.dateFrom}
            value={formData.dateFrom}
            onChange={(e) => {
              handleChange(e)
              setselectedYear(e.target.value)
            }}
            required>
            {dateListFrom}
          </select>
          {` to `}
          <select
            className={styles.date}
            type='number'
            name='dateTo'
            defaultValue={formData.dateTo}
            value={formData.dateTo}
            onChange={handleChange}
            required>
            {dateListTo}
          </select>
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
