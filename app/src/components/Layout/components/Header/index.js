import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import SearchBox from '../../../SearchBox';
import './styles.scss';

const Header = ({ searchText }) =>  (
    <header className='header'>
        <div className='header__search-wrapper'>
            <Logo />
            <SearchBox searchText={searchText} />
        </div>
    </header>
);

Header.displayName = 'Header';

Header.propTypes = {
    searchText: PropTypes.string,
}

export default Header;