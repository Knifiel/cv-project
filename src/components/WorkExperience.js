import React, { useState } from 'react'
import uniqid from 'uniqid'
import styles from '../styles/WorkExpAndEducation.module.css'
import AddCardForm from './AddCardForm'
import Card from './Card'

function WorkExperience() {
  const [workplaces, setWorkplaces] = useState([])
  const [addingWorkplace, setAddingWorkplace] = useState(false)
  const [formData, setFormData] = useState({
    dateFrom: new Date().getFullYear(),
    dateTo: new Date().getFullYear(),
  })

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const workplace = { ...formData, id: uniqid() }
    setWorkplaces((prev) => [...prev, workplace])
    setAddingWorkplace(false)
    setFormData({})
  }

  const handleDelete = (id) => {
    const newWorkplaces = workplaces.filter((w) => w.id !== id)
    setWorkplaces(newWorkplaces)
  }

  const handleEdit = (data) => {
    const newWorkplaces = workplaces.map((w) => {
      if (w.id === data.id) {
        return data
      }
      return w
    })
    setWorkplaces(newWorkplaces)
  }
  const headings = {
    titleLabel: 'Company title:',
    subtitleLabel: 'Role:',
    datePickerLabel: 'Work period:',
    descLabel: 'Responsibilities and achievements:',
  }
  return (
    <div className={styles.main}>
      <h3> Work Experience: </h3>
      {workplaces.map((workplace) => (
        <Card
          card={workplace}
          key={workplace.id}
          id={workplace.id}
          headings={headings}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}

      <button
        className={styles.button}
        onClick={() => setAddingWorkplace((prev) => !prev)}>
        {!addingWorkplace ? 'Add workplace' : 'Cancel'}
      </button>
      {addingWorkplace && (
        <AddCardForm
          formData={formData}
          headings={headings}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          id='workExp'
        />
      )}
    </div>
  )
}

export default WorkExperience
