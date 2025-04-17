import { useState } from 'react'
import Filter from './components/Filter'
import Add from './components/Add'
import Display from './components/Display'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [showPersons, setShowPersons] = useState([...persons])
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setShowPersons={setShowPersons} />
      <Add persons={persons} setPersons={setPersons} setShowPersons={setShowPersons} />
      <Display showPersons={showPersons} />
    </div>
  )
}

export default App