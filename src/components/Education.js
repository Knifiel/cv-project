import React, { useState } from 'react'
import uniqid from 'uniqid'
import styles from '../styles/WorkExpAndEducation.module.css'
import AddCardForm from './AddCardForm'
import Card from './Card'

function Education() {
  const [unis, setUnis] = useState([])
  const [addingUni, setAddingUni] = useState(false)
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const uni = { ...formData, id: uniqid() }
    setUnis((prev) => [...prev, uni])
    setAddingUni(false)
    setFormData({})
  }

  const handleDelete = (id) => {
    const newUnis = unis.filter((w) => w.id !== id)
    setUnis(newUnis)
  }

  const handleEdit = (data) => {
    const newUnis = unis.map((u) => {
      if (u.id === data.id) {
        return data
      }
      return u
    })
    setUnis(newUnis)
  }
  const headings = {
    titleLabel: 'University or college:',
    subtitleLabel: 'Degree:',
    datePickerLabel: 'Education period:',
    descLabel: 'Modules, additional information:',
  }
  return (
    <div className={styles.main}>
      <h3> Education: </h3>
      {unis.map((uni) => (
        <Card
          card={uni}
          key={uni.id}
          headings={headings}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}

      <button
        className={styles.button}
        onClick={() => setAddingUni((prev) => !prev)}>
        {!addingUni ? 'Add university' : 'Cancel'}
      </button>
      {addingUni && (
        <AddCardForm
          formData={formData}
          headings={headings}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  )
}

export default Education
