import React, { Component } from 'react'
import Workplace from './inputFields/Workplace'
import uniqid from 'uniqid'
import styles from '../styles/Card.module.css'

export class WorkExperience extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: true,
      workplaces: [],
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
    const workplace = {
      element: (isEditing, deleteHandler, hideEdit) => (
        <Workplace
          isEditing={isEditing}
          handleDelete={deleteHandler}
          hideEdit={hideEdit}
          id={id}
        />
      ),
      id: id,
    }
    this.setState((prevState) => ({
      workplaces: prevState.workplaces.concat(workplace),
    }))
  }
  handleDelete = (id) => {
    const newWorkplaces = this.state.workplaces.filter((n) => n.id !== id)
    this.setState(() => ({
      workplaces: newWorkplaces,
    }))
  }
  render() {
    const { workplaces, isEditing } = this.state
    const { hideEdit } = this.props
    return (
      <div className={styles.card}>
        {isEditing && workplaces.length === 0 ? <h3>Work Experience</h3> : null}
        {workplaces.length !== 0 ? (
          <h3>Work Experience</h3>
        ) : (
          'Has no experience working'
        )}
        {workplaces.map((workplace) => {
          return (
            <React.Fragment key={workplace.id}>
              {workplace.element(isEditing, this.handleDelete, hideEdit)}
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
            className={styles.edit}
            onClick={() => {
              this.toggleEdit()
              this.props.handleEditChange('editingWorkExp')
            }}>
            {isEditing ? 'Complete' : 'Edit'}
          </button>
        )}
      </div>
    )
  }
}

export default WorkExperience
