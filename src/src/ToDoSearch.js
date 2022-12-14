import React from 'react';
import './TodoSearch.css';

const TodoSearch = ({searchValue, setSearchValue}) => {
        const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return(
        <input 
        className="TodoSearch" 
        placeholder="Correr 2 km"
        value={searchValue}
        onChange={onSearchValueChange}
        />
    )
};

export { TodoSearch };