import React from 'react';
import PropTypes from 'prop-types';

import Price from '../../../Price';
import './styles.scss';

const productCondition = {
    new: 'Nuevo',
    used: 'Usado',
    not_specified: 'No especificado',
};

const SellInfo = ({ price, condition, soldQuantity, title }) => {
    
    return (
        <div className='sell-info'>
            <div className='sell-info__condition'>{`${productCondition[condition]} - ${soldQuantity} vendidos`}</div>
            <div className='sell-info__title'>{title}</div>
            <Price price={price} />
            <button className='sell-info__cta'>Comprar</button>
        </div>
    )
};

SellInfo.displayName = 'SellInfo';

SellInfo.propTypes = {
    'price': PropTypes.object,
    'condition': PropTypes.string,
    'soldQuantity': PropTypes.number,
    'title': PropTypes.string,
}

export default SellInfo;