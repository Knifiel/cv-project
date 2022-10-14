import React, { Component } from 'react'
import EducationFacility from './inputFields/EducationFacility'
import uniqid from 'uniqid'
import styles from '../styles/Card.module.css'

export class Education extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: true,
      facilities: [],
    }
    this.handleDelete.bind(this)
  }
  toggleEdit = () => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
    }))
  }
  handleAdd = () => {
    const id = uniqid()
    const facility = {
      element: (isEditing, deleteHandler) => (
        <EducationFacility
          isEditing={isEditing}
          handleDelete={deleteHandler}
          id={id}
        />
      ),
      id: id,
    }
    this.setState((prevState) => ({
      facilities: prevState.facilities.concat(facility),
    }))
  }
  handleDelete = (id) => {
    const newFacilities = this.state.facilities.filter((n) => n.id !== id)
    this.setState(() => ({
      facilities: newFacilities,
    }))
  }
  render() {
    const { facilities, isEditing } = this.state
    const { hideEdit } = this.props
    return (
      <div className={styles.card}>
        {isEditing && facilities.length === 0 ? <h3>Education</h3> : null}
        {facilities.length !== 0 ? <h3>Education</h3> : 'Has no education'}
        {facilities.map((facility) => {
          return (
            <React.Fragment key={facility.id}>
              {facility.element(isEditing, this.handleDelete)}
            </React.Fragment>
          )
        })}
        {isEditing && !hideEdit && (
          <button
            type='button'
            onClick={this.handleAdd}>
            Add
          </button>
        )}

        {!hideEdit && (
          <button
            type='button'
            className='edit'
            onClick={() => {
              this.toggleEdit()
              this.props.handleEditChange('editingEducation')
            }}>
            {isEditing ? 'Complete' : 'Edit'}
          </button>
        )}
      </div>
    )
  }
}

export default Education
