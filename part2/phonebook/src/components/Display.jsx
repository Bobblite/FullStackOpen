import Person from './Person'
import phonebookService from '../services/phonebook'

const Display = ({showPersons, persons, setPersons, filterAndSet}) => {
    const handleDelete = (id, name) => {
        if (window.confirm(`Delete ${name}?`)) {
            phonebookService
                .remove(id)
                .then(removedPerson => {
                const newPersons = persons.filter(person => person.id !== removedPerson.id)
                setPersons(newPersons)
                filterAndSet(newPersons)
                })
            }
        }

    return (
        <div>
            <h2>Numbers</h2>
            {showPersons.map(person => <Person key={person.id} person={person} handleDelete={() => handleDelete(person.id, person.name)}/>)}
        </div>
    )
}

export default Display