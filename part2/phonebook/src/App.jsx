import { useState, useEffect } from 'react'
import phonebookService from './services/phonebook'

import Filter from './components/Filter'
import Add from './components/Add'
import Display from './components/Display'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [showPersons, setShowPersons] = useState([...persons])
  const [newFilter, setNewFilter] = useState('')

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
      })
  }

  const handleUpdate = (id, personObject) => {
    phonebookService
      .update(id, personObject)
      .then(returnedPerson => {
        const newPersons = persons.map(person => person.id === id ? returnedPerson : person)
        setPersons(newPersons)
        filterAndSet(newPersons)
      })
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} persons={persons} filterAndSet={filterAndSet} />
      <Add persons={persons} handleCreate={handleCreate} handleUpdate={handleUpdate} />
      <Display showPersons={showPersons} persons={persons} setPersons={setPersons} filterAndSet={filterAndSet} />
    </div>
  )
}

export default App