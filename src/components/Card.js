import React, { useEffect, useState } from 'react'
import styles from '../styles/Card.module.css'
import AddCardForm from './AddCardForm'

const Card = ({ card, headings, handleDelete, handleEdit, id }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setFormData({ ...formData, [name]: value })
  }

  useEffect(() => {
    setFormData(card)
  }, [card])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
    handleEdit(formData)
  }

  return (
    <div>
      {isEditing ? (
        <AddCardForm
          formData={formData}
          headings={headings}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          id={id}
        />
      ) : (
        <div className={styles.card}>
          <h3 className={styles.title}>{card.title}</h3>
          <h4 className={styles.subtitle}>{card.subtitle}</h4>
          <p className={styles.timePeriod}>
            From {card.dateFrom} to {card.dateTo}
          </p>
          <p className={styles.desc}>{card.desc}</p>
        </div>
      )}
      <div className={styles.buttons}>
        <button onClick={() => handleDelete(card.id)}>Delete</button>
        <button onClick={() => setIsEditing((prev) => !prev)}>
          {!isEditing ? 'Edit' : 'Cancel'}
        </button>
      </div>
    </div>
  )
}

export default Card
