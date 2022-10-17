import React from 'react'

function AddWorkplaceForm({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Company title:
        <input
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
          type='text'
          name='role'
          value={formData.role ? formData.role : ''}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Work period:
        <input
          type='date'
          name='dateFrom'
          value={formData.dateFrom ? formData.dateFrom : ''}
          onChange={handleChange}
          required
        />
        {` - `}
        <input
          type='date'
          name='dateTo'
          value={formData.dateTo ? formData.dateTo : ''}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Responsibilities and/or achievements:
        <textarea
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
