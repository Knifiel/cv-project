import React, { Fragment, useEffect, useState } from 'react'
import AddWorkplaceForm from './AddWorkplaceForm'

const Workplace = ({ workplace, handleDelete, handleEdit }) => {
  const [isEditing, setisEditing] = useState(false)
  const [formData, setformData] = useState({})

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setformData({ ...formData, [name]: value })
  }

  useEffect(() => {
    setformData(workplace)
  }, [workplace])

  const handleSubmit = (e) => {
    e.preventDefault()
    setisEditing(false)
    handleEdit(formData)
  }
  return (
    <div>
      {isEditing ? (
        <AddWorkplaceForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <>
          <h3>{workplace.title}</h3>
          <h4>{workplace.role}</h4>
          <p>
            From {workplace.dateFrom} to {workplace.dateTo}
          </p>
          <p>{workplace.jobDesc}</p>
        </>
      )}
      <div>
        <button onClick={() => handleDelete(workplace.id)}>Delete</button>
        <button onClick={() => setisEditing((prev) => !prev)}>
          {!isEditing ? 'Edit' : 'Cancel'}
        </button>
      </div>
    </div>
  )
}

export default Workplace
