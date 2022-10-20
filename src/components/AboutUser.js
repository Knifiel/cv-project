import styles from '../styles/AboutUser.module.css'
import React, { useState, useEffect, useContext } from 'react'
import emailLogo from '../resources/email.svg'
import phoneLogo from '../resources/phone.svg'
import mapLogo from '../resources/map-marker.svg'
import linkedinLogo from '../resources/linkedin.svg'
import { CanPrintContext } from './CanPrintProvider'

export const AboutUser = () => {
  const [formData, setFormData] = useState({})
  const [isEditing, setIsEditing] = useState(false)
  const [canPrint, setCanPrint] = useContext(CanPrintContext)

  useEffect(() => {
    if (isEditing) {
      if (!canPrint.includes('about')) {
        const newList = [...canPrint, 'about']
        setCanPrint(newList)
      }
    } else {
      if (canPrint.includes('about')) {
        const newList = canPrint.filter((n) => n !== 'about')
        setCanPrint(newList)
      }
    }
  }, [canPrint, isEditing, setCanPrint])

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
  }

  useEffect(() => {
    if (isEmpty(formData)) {
      setIsEditing(true)
    }
  }, [formData])

  const isEmpty = (obj) => {
    for (let i in obj) return false
    return true
  }

  return (
    <>
      {isEditing ? (
        <form
          className={styles.form}
          onSubmit={handleSubmit}>
          <h3>Contact info:</h3>
          <label>
            Full Name:
            <input
              className={styles.input}
              type='text'
              name='name'
              value={formData.name ? formData.name : ''}
              placeholder='John Smith'
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Job:
            <input
              className={styles.input}
              type='text'
              name='job'
              value={formData.job ? formData.job : ''}
              placeholder='Spymaster'
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              className={styles.input}
              type='email'
              name='email'
              value={formData.email ? formData.email : ''}
              placeholder='JohnSmith@example.com'
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone:
            <input
              className={styles.input}
              type='numeric'
              name='phone'
              value={formData.phone ? formData.phone : ''}
              placeholder='1-(234)-567-89-99'
              onChange={handleChange}
              required
            />
          </label>
          <label>
            linkedIn profile name:
            <input
              className={styles.input}
              type='text'
              name='linkedIn'
              value={formData.linkedIn ? formData.linkedIn : ''}
              placeholder='john.smith'
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Location:
            <input
              className={styles.input}
              type='text'
              name='location'
              value={formData.location ? formData.location : ''}
              placeholder='NYC'
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Personal statement:
            <textarea
              className={styles.textarea}
              name='statement'
              value={formData.statement ? formData.statement : ''}
              placeholder='I have worked as a spy for governments of 18 different countries!'
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
      ) : (
        <div className={styles.main}>
          <span className={styles.name}>
            <h3>{formData.name ? formData.name : ''}</h3>
          </span>
          <span className={styles.job}>
            <h3>{formData.name ? formData.job : ''}</h3>
          </span>
          <span className={styles.email}>
            <img
              src={emailLogo}
              alt=''></img>
            <p>{formData.email ? formData.email : ''}</p>
          </span>

          <span className={styles.phone}>
            <img
              src={phoneLogo}
              alt=''></img>
            <p>{formData.phone ? formData.phone : ''}</p>
          </span>

          <span className={styles.linkedIn}>
            <img
              src={linkedinLogo}
              alt=''></img>
            <p>
              <a href={`https://www.linkedin.com/in${formData.linkedIn}`}>
                {formData.linkedIn
                  ? `www.linkedin.com/in/${formData.linkedIn}`
                  : ''}
              </a>
            </p>
          </span>

          <span className={styles.location}>
            <img
              src={mapLogo}
              alt=''></img>
            <p>{formData.location ? formData.location : ''}</p>
          </span>

          <span className={styles.statement}>
            <p>{formData.statement ? formData.statement : ''}</p>
          </span>

          <button
            className={styles.button}
            onClick={() => {
              setIsEditing(true)
            }}
            type='button'>
            Edit
          </button>
        </div>
      )}
    </>
  )
}
