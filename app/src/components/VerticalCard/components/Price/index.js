import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

import './styles.scss';

const Price = ({ price, condition, soldQuantity, title }) => {
    const formattedPrice = price && typeof(price.amount) === 'number' 
        ? getFormattedPrice(price.amount)
        : false;
    return ( 
        <div className='price'>
            <div className='price__sell-info'>{`${productCondition[condition]} - ${soldQuantity} vendidos`}</div>
            <div className='price__title'>{title}</div>
            <div className='price__amount'>{`$ ${formattedPrice}`}</div>
            <button className='price__cta'>Comprar</button>
        </div>
    )
};

const productCondition = {
    new: 'Nuevo',
    used: 'Usado',
    not_specified: 'No especificado',
}

const getFormattedPrice = (price) => price.toLocaleString('de-DE');

Price.displayName = 'Price';

Price.propTypes = {
    'price': PropTypes.object,
    'condition': PropTypes.string,
    'soldQuantity': PropTypes.number,
    'title': PropTypes.string,
}

export default Price;