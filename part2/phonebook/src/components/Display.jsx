import Person from './Person'

const Display = ({showPersons}) => {
    return (
        <div>
            <h2>Numbers</h2>
            {showPersons.map(person => <Person key={person.id} person={person} />)}
        </div>
    )
}

export default Display