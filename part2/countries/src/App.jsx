import { useState, useEffect } from "react"

import countriesServices from './services/countries'
import Search from "./components/Search"
import Display from "./components/Display"

const App = () => {
  // States
  const [countries, setCountries] = useState([])
  const [showCountries, setShowCountries] = useState([])
  const [search, setSearch] = useState('')

  // Populate initial countries array
  useEffect(() => {
    countriesServices
      .getAll()
      .then(data => {
        setCountries(data)
        console.log("loaded")
      })
      .catch(error => console.log(error.message))
  }, [])

  // Handler for search
  const handleSearchChange = (event) => {
    const value = event.target.value // immediate value for async. states
    setSearch(value) // set state

    // search countries for match with early escape (>10 countries)
    const newShowCountries = []
    for (let i=0; i<countries.length; i++) {
      if (newShowCountries.length > 10) {
        setShowCountries([])
        return
      }
      
      if (countries[i].name.common.toLowerCase().includes(value.toLowerCase())) {
        newShowCountries.push({
          name: countries[i].name.common,
          capital: countries[i].capital[0],
          area: countries[i].area,
          languages: countries[i].languages,
          flag: countries[i].flags.png,
          alt: countries[i].flags.alt,
          latlng: countries[i].latlng
        })
      }
    }

    setShowCountries(newShowCountries) // set state
  }

  return (
    <div>
      <Search search={search} handleSearchChange={handleSearchChange} />
      <Display showCountries={showCountries} />
    </div>
  )

}

export default App