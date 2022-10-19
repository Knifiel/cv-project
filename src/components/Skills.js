import React, { useEffect, useState } from 'react'
import styles from '../styles/Skills.module.css'

function Skills() {
  const [skills, setSkills] = useState('')
  const [skillList, setSkillList] = useState([])
  const [isEditing, setIsEditing] = useState(true)
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
    const skillListArray = skills.split('\n').filter((str) => str !== '')
    setSkillList(skillListArray)
  }
  useEffect(() => {
    setSkills(skillList.join('\n'))
  }, [skillList])

  return (
    <>
      {isEditing ? (
        <form
          className={styles.form}
          onSubmit={handleSubmit}>
          <h3>Skills:</h3>
          <label
            htmlFor='skills'
            className={styles.label}>
            List your skills:
          </label>
          <textarea
            className={styles.textarea}
            name='skills'
            value={skills}
            onChange={(e) => {
              setSkills(e.target.value)
            }}
          />
          <button
            className={styles.button}
            type='submit'>
            Confirm
          </button>
        </form>
      ) : (
        <div className={styles.main}>
          <h3>Skills:</h3>
          <ul>
            {skillList.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <button
            className={styles.button}
            type='button'
            onClick={() => {
              setIsEditing(true)
            }}>
            Edit
          </button>
        </div>
      )}
    </>
  )
}

export default Skills
