import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const BreadCrumb = ({ categories }) => (
    categories && categories.length > 0 
    ? (
    <div className='bread-crumb'>
        {categories.map((category, idx) => (
            <span className='bread-crumb__category' key={`category-${idx}`}>{category}</span>
        ))}
    </div>
    ) : false
);

export default BreadCrumb;