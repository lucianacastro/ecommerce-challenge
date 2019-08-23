import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

import './styles.scss';

const getFormattedPrice = (price) => Math.trunc(price).toLocaleString('de-DE');

const rightPad = (value, max) => {
    const str = value.toString();
    return str.length < max ? rightPad(str + '0', max) : str;
};

const getDecimal = (number) => {
    const num = number.toString().split('.');
    if(parseInt(num[1]) > 0) {
        return rightPad(num[1], 2);
    }
    return '00';
};

const productCondition = {
    new: 'Nuevo',
    used: 'Usado',
    not_specified: 'No especificado',
};

const Price = ({ price, condition, soldQuantity, title }) => {
    
    return (
        <div className='price'>
            <div className='price__sell-info'>{`${productCondition[condition]} - ${soldQuantity} vendidos`}</div>
            <div className='price__title'>{title}</div>
            <div className='price__amount'>{`$ ${getFormattedPrice(price.amount)}`}</div><span>{getDecimal(price.amount)}</span>
            <button className='price__cta'>Comprar</button>
        </div>
    )
};

Price.displayName = 'Price';

Price.propTypes = {
    'price': PropTypes.object,
    'condition': PropTypes.string,
    'soldQuantity': PropTypes.number,
    'title': PropTypes.string,
}

export default Price;