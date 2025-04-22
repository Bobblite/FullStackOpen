import {useState} from 'react'
import phonebookService from '../services/phonebook'

const Add = ({persons, handleCreate, handleUpdate}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()

        const found = persons.find(x => x.name === newName)
        if (found) {
            if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                console.log(found.id, found.name)
                handleUpdate(found.id, {...found, number: newNumber})
                setNewName('')
                setNewNumber('')
            }
            return
        }

        const personObject = {
        name: newName,
        number: newNumber
        }

        handleCreate(personObject)
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