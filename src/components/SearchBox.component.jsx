import React from 'react';

const SearchBox = ({searchfield,searchChange})=> {
    return (
        <div className="pa2">
            <input type="search" placeholder="Search robot" className="pa3 ba b--green bg-lightest-blue" value={searchfield} onChange={searchChange}/>
        </div>
    );
};

export default SearchBox;
