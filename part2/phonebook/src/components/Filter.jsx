import {useState} from 'react'

const Filter = ({persons, setShowPersons}) => {
    const [newFilter, setNewFilter] = useState('')

    const handleFilterChange = (event) => {
        const filter = event.target.value
        setNewFilter(filter)

        if (filter === '') {
            setShowPersons([...persons])
            return
        }

        setShowPersons(persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())))
    }
    

    return (
        <div>
            filter shown with<input value={newFilter} onChange={handleFilterChange} />
        </div>
    )
}

export default Filter