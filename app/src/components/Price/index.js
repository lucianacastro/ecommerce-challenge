import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

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

const Price = ({ price, withDecimals, className }) => (
    <div className={cn('price', className)}>
        <div className='price__amount'>{`$ ${getFormattedPrice(price.amount)}`}</div>
        {withDecimals 
            ? <span className='price__decimal'>{getDecimal(price.amount)}</span>
            : false
        }
        
    </div>
);

Price.displayName = '';

Price.propTypes = {
    price: PropTypes.object,
    withDecimals: PropTypes.bool,
    className: PropTypes.string,
}

Price.defaultProps = {
    withDecimals: true,
}

export default Price;