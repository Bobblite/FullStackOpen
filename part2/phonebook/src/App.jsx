import { useState, useEffect } from 'react'
import axios from 'axios'

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
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        setShowPersons(response.data)
      })
  }, [])
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} persons={persons} filterAndSet={filterAndSet} />
      <Add persons={persons} setPersons={setPersons} filterAndSet={filterAndSet} />
      <Display showPersons={showPersons} />
    </div>
  )
}

export default App