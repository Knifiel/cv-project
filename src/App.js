import { Component } from 'react'
import './App.css'
import ContactInformation from './components/ContactInformation'
import Education from './components/Education'
import PersonalStatement from './components/PersonalStatement'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hideAllEdit: false,
      editingContacts: true,
      editingStatement: true,
      editingWorkExp: true,
      editingEducation: true,
      editingSkills: true,
    }
    this.handleEditChange.bind(this)
  }

  handleClick = () => {
    this.setState((prevState) => ({
      hideAllEdit: !prevState.hideAllEdit,
    }))
  }

  handleEditChange = (stat) => {
    console.log(stat)
    this.setState((prevState) => ({
      [stat]: !prevState[stat],
    }))
  }

  render() {
    const {
      hideAllEdit,
      editingContacts,
      editingEducation,
      editingSkills,
      editingStatement,
      editingWorkExp,
    } = this.state
    let inEdit = true
    if (
      editingContacts ||
      editingEducation ||
      editingSkills ||
      editingStatement ||
      editingWorkExp
    ) {
      inEdit = true
    } else {
      inEdit = false
    }
    return (
      <div className='App'>
        <button
          disabled={inEdit}
          className='hideEdit'
          type='button'
          onClick={this.handleClick}>
          {!hideAllEdit ? 'Hide all edit buttons' : 'Show all edit buttons'}
        </button>
        <ContactInformation
          hideEdit={hideAllEdit}
          handleEditChange={this.handleEditChange}>
          <PersonalStatement
            hideEdit={hideAllEdit}
            handleEditChange={this.handleEditChange}
          />
        </ContactInformation>

        <WorkExperience
          hideEdit={hideAllEdit}
          handleEditChange={this.handleEditChange}
        />
        <Education
          hideEdit={hideAllEdit}
          handleEditChange={this.handleEditChange}
        />
        <Skills
          hideEdit={hideAllEdit}
          handleEditChange={this.handleEditChange}
        />
      </div>
    )
  }
}

export default App
