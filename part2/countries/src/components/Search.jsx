const Search = ({search, handleSearchChange}) => {
    return (
        <div>
            <p>
                {'find countries '}
                <input value={search} onChange={handleSearchChange} />
            </p>
        </div>
    )
}

export default Search