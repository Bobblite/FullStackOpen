import {useState} from 'react'

const Add = ({persons, setPersons, setShowPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()

        const found = persons.find(x => x.name === newName)
        if (found) {
        alert(`${newName} is already added to phonebook`)
        return
        }

        const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
        }
        const newPersons = persons.concat(personObject)
        setPersons(newPersons)
        setShowPersons(newPersons)
        setNewName('')
        setNewNumber('')
    }
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }


    return (
        <div>
            <h2>add a new</h2>
            <form>
                <div>name: <input value={newName} onChange={handleNameChange} /></div>
                <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
                <div><button type="submit" onClick={addPerson}>add</button></div>
            </form>
        </div>
    )
}

export default Add