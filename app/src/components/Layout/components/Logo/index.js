import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import './styles.scss';

const Logo = () => (
    <div className='logo'>
        <Link href='/'>
            <a><div className='logo__image'/></a>
        </Link>
    </div>
);

Logo.displayName = 'Logo';

export default Logo;