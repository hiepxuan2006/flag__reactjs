import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Search(props) {
    const [valueInput, setValueInput] = useState('');
    const navigate = useNavigate()
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            (valueInput !== '') ? navigate(`/search/${valueInput}`) : navigate('/')
        }
    }
    return (
        <div className="search">
            <h3>Search Country:</h3>
            <div
                className="search__input">
                <input type="text"
                    onChange={e => setValueInput(e.target.value)}
                    value={valueInput}
                    onKeyDown={handleKeyDown}
                    placeholder='In put the and enter to search ...'
                />
                <Link to={valueInput !== '' ? `/search/${valueInput}` : '/'}>
                    <div className='search__icon'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Search;