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

const Price = ({ price }) => (
    <div className='price'>
        <div className='price__amount'>{`$ ${getFormattedPrice(price.amount)}`}</div>
        <span className='price__decimal'>{getDecimal(price.amount)}</span>
    </div>
);

export default Price;