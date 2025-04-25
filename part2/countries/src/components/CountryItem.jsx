import Country from './Country'
import { useState } from 'react'

const CountryItem = ({country}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOnClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <p>{country.name} <button onClick={handleOnClick}>{isOpen ? 'hide' : 'show'}</button></p>
            {isOpen ? <Country country={country} /> : null}
        </div>
    )
}

export default CountryItem