import {useState} from 'react'

const Filter = ({newFilter, setNewFilter, persons, filterAndSet}) => {
    const handleFilterChange = (event) => {
        setNewFilter(event.target.value)
        filterAndSet(persons, event.target.value )
    }
    

    return (
        <div>
            filter shown with<input value={newFilter} onChange={handleFilterChange} />
        </div>
    )
}

export default Filter