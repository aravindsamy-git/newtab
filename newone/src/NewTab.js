import './NewTab.css'

function NewTab() {
    return (
        <div className="search">
            <i className="fa fa-search" id="searchIcon"></i>

            <div className="search-container">
                <input type="text" className="single-line-input" id="searchInput" />
                <div className="select-menu">
                    <div className="select-btn" >
                        <i className="selected-icon"></i>
                        <i className="bx bx-chevron-down"></i>
                    </div>
                    <ul className='options'>
                        <li className="option"><img src="./img/icons8-whatsapp-24.png"alt="whatsapp"/></li>
                    </ul>
                </div>
            </div>
        </div>
);
}

export default NewTab;
