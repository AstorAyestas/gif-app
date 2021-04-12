import React, { useState } from 'react';
import PropTypes from 'prop-types';
const Search = ({ setCategories }) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        setCategories(categories => [value, ...categories])
        setValue((value => ''))
    }
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label className="flex flex-col mx-4" htmlFor="search">
                <span className="text-gray-700">Search:</span>
                <input className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="Search in gift app" onChange={handleChange} value={value} type="search" name="search" required />
            </label>
        </form>
    );
}
Search.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default Search;