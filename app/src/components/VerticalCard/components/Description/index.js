import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Description = ({ descriptionText }) => (
    <div className='description'>
        <div className='description__title'>Descripción del producto</div>
        <div className='description__text'>{descriptionText}</div>
    </div>
);

Description.displayName = 'Description';

Description.propTypes = {
    descriptionText: PropTypes.string,
}

export default Description;