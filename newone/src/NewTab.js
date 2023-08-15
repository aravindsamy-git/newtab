import React, { useState } from 'react';
import './NewTab.css';


import GoogleLogo from './img/icons8-google-30.png';
import DuckduckGoLogo from './img/icons8-duckduckgo-50.png';
import BingLogo from "./img/icons8-bing-50.png";
import YahooLogo from "./img/icons8-yahoo-50.png";

function NewTab() {
    const [selectedSearchEngine, setSelectedSearchEngine] = useState("Google");
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const searchEngines = {
        'Google': 'https://www.google.com/search?q=',
        'DuckduckGo': 'https://duckduckgo.com/?q=',
        'Yahoo': 'https://search.yahoo.com/search?p=',
        'Bing': 'https://www.bing.com/search?q='
    };

    const handleSearchEngineChange = (engine) => {
        setSelectedSearchEngine(engine);
        setIsDropdownActive(false);
    };

    const performSearch = () => {
        if (searchQuery && selectedSearchEngine) {
            const searchUrl = searchEngines[selectedSearchEngine] + encodeURIComponent(searchQuery);
            console.log("Search URL:", searchUrl);
            window.location.href = searchUrl;
        }
    };

    return (
        <div className="search">
            <i className="fa fa-search"></i>

            <div className={`search-container`}>
                <input
                    type="text"
                    className="single-line-input"
                    id="searchInput"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && performSearch()} />

                <div className={`select-menu ${isDropdownActive ? 'active' : ''}`}>
                    <div className="select-btn" onClick={() => setIsDropdownActive(!isDropdownActive)}>

                        <div className="select-btn" onClick={() => setIsDropdownActive(!isDropdownActive)}>
                            {selectedSearchEngine === 'Google' && <img className="engine-logo" src={GoogleLogo} alt="Google" />}
                            {selectedSearchEngine === 'DuckduckGo' && <img className="engine-logo" src={DuckduckGoLogo} alt="DuckDuckGo" />}
                            {selectedSearchEngine === 'Bing' && <img className="engine-logo" src={BingLogo} alt='Bing' />}
                            {selectedSearchEngine === "Yahoo" && <img className="engine-logo" src={YahooLogo} alt='Yahoo' />}
                            <i className="bx bx-chevron-down"></i>
                        </div>

                    </div>
                    <ul className='options'>
                        {Object.keys(searchEngines).map((engine) => (
                            <li
                                key={engine}
                                className={`option ${engine === selectedSearchEngine ? 'selected' : ''}`}
                                onClick={() => handleSearchEngineChange(engine)}
                            >
                                {engine}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NewTab;