import React, { useState } from 'react'
import uniqid from 'uniqid'
import AddWorkplaceForm from './AddWorkplaceForm'
import Workplace from './Workplace'

function WorkExperienceForm() {
  const [workplaces, setWorkplaces] = useState([])
  const [addingWorkplace, setaddingWorkplace] = useState(false)
  const [formData, setformData] = useState({})

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setformData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const workplace = { ...formData, id: uniqid() }
    setWorkplaces((prev) => [...prev, workplace])
    setaddingWorkplace(false)
    setformData({})
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
  return (
    <div>
      {workplaces.map((workplace) => (
        <Workplace
          workplace={workplace}
          key={workplace.id}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}

      <button onClick={() => setaddingWorkplace((prev) => !prev)}>
        {!addingWorkplace ? 'Add workplace' : 'Cancel'}
      </button>
      {addingWorkplace && (
        <AddWorkplaceForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  )
}

export default WorkExperienceForm
