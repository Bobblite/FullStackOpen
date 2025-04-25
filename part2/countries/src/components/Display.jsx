import CountryItem from './CountryItem'
import Country from './Country'

const Display = ({showCountries}) => {

    let renderComponent = null

    if (showCountries.length == 1) {
        renderComponent = <Country country={showCountries[0]} />
    }
    else if (showCountries.length > 1) {
        renderComponent = showCountries.map(current => <CountryItem key={current.area} country={current} />)
    }
    else { 
        renderComponent = <p>Too many matches, specify another filter</p>
    }

    return (
        <div>
            {renderComponent}
        </div>
    )
}

export default Display