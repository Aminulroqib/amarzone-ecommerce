import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import { ShoppingBasket } from '@material-ui/icons';

const Header = () => {
    return (
        <div className="header">
            <img className="header-logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="" />
            <div className="header-search">
                <input className="header-searchInput" type="text" />
                <SearchIcon className="header-searchIcon"/>
                
            </div>
            <div className="header-nav">
                <div className="header-option">
                    <span className="header-optionLineOne">
                        Hello, Guest!
                    </span>
                    <span className="header-optionLineTwo">
                        Sign In
                    </span>
                </div>
                <div className="header-option">
                <span className="header-optionLineOne">
                        Returns
                    </span>
                    <span className="header-optionLineTwo">
                        & Orders
                    </span>
                
                </div>
                <div className="header-option">
                <span className="header-optionLineOne">
                       Your
                    </span>
                    <span className="header-optionLineTwo">
                        Prime
                    </span>   
                </div>
                <div className="header-optionBasket">
                    <ShoppingBasket/>
                    <span className="header-optionLineTwo 
                    header-basketCount">0</span>

                </div>
            </div>
        </div>
    );
};

export default Header;