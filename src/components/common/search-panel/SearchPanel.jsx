import React from 'react';

function SearchPanel({handleSearch}) {
    return (
        <nav className="uk-navbar-container" uk-navbar='true'>
            <div className="uk-navbar-left">

                <div className="uk-navbar-item">
                    <form className="uk-search uk-search-navbar">
                        <span uk-search-icon='true'/>
                        <input onChange={handleSearch} className="uk-search-input" type="search" placeholder="Search..." />
                    </form>
                </div>

            </div>
        </nav>
    );
}

export default SearchPanel;
