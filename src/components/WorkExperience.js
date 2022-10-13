import React, { Component } from 'react'
import Workplace from './inputFields/Workplace'
import uniqid from 'uniqid'

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
  handleAddWorkplace = () => {
    const id = uniqid()
    const workplace = {
      element: (isEditing, deleteHandler) => (
        <Workplace
          isEditing={isEditing}
          handleDelete={deleteHandler}
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
    return (
      <div className='workExp'>
        <h3>Work Experience</h3>
        {workplaces.map((workplace) => {
          return (
            <React.Fragment key={workplace.id}>
              {workplace.element(isEditing, this.handleDelete)}
            </React.Fragment>
          )
        })}
        {this.state.isEditing && (
          <button
            className='addNewWorkplace'
            onClick={this.handleAddWorkplace}>
            Add new Workplace
          </button>
        )}

        <button
          className='editButton'
          onClick={this.toggleEdit}>
          {isEditing ? 'Complete' : 'Edit'}
        </button>
      </div>
    )
  }
}

export default WorkExperience
