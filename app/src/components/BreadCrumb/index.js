import React from 'react';
import PropTypes from 'prop-types';

const BreadCrumb = ({ categories }) => (
    categories && categories.length > 0 
    ? (
    <div className='bread-crumb'>
    
    </div>
    ) : false
);

export default BreadCrumb;