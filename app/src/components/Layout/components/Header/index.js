import React from 'react';

import Logo from '../Logo';
import SearchBox from '../../../SearchBox';
import './styles.scss';

const Header = () =>  (
    <header className='header'>
        <div className='header__search-wrapper'>
            <Logo />
            <SearchBox />
        </div>
    </header>
);

Header.displayName = 'Header';

export default Header;