import { useState, useEffect } from 'react'
import phonebookService from './services/phonebook'

import Filter from './components/Filter'
import Add from './components/Add'
import Display from './components/Display'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [showPersons, setShowPersons] = useState([...persons])
  const [newFilter, setNewFilter] = useState('')
  const [isError, setError] = useState(false)
  const [message, setMessage] = useState(null)

  // Helper function to set display whenever filter/add
  const filterAndSet = (persons, filter=newFilter) => {
    if (filter === '') {
      setShowPersons([...persons])
      return
    }

    setShowPersons(persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())))
  }

  // GET data and use as initial data
  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setShowPersons(initialPersons)
      })
  }, [])

  // Helper function to create new person
  const handleCreate = (personObject) => {
    phonebookService
      .create(personObject)
      .then(returnedPerson => {
        const newPersons = persons.concat(returnedPerson)
        setPersons(newPersons)
        filterAndSet(newPersons)
        setError(false)
        setMessage(`Added ${personObject.name}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
  }

  const handleUpdate = (id, personObject) => {
    phonebookService
      .update(id, personObject)
      .then(returnedPerson => {
        const newPersons = persons.map(person => person.id === id ? returnedPerson : person)
        setPersons(newPersons)
        filterAndSet(newPersons)
        setError(false)
        setMessage(`Updated ${personObject.name}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification isError={isError} message={message} />
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} persons={persons} filterAndSet={filterAndSet} />
      <Add persons={persons} handleCreate={handleCreate} handleUpdate={handleUpdate} />
      <Display showPersons={showPersons} persons={persons} setPersons={setPersons} filterAndSet={filterAndSet} setError={setError} setMessage={setMessage} />
    </div>
  )
}

export default App