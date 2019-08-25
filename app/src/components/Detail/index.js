import React from 'react';
import PropTypes from 'prop-types';
import nl2br from 'react-newline-to-break';

import BreadCrumb from '../BreadCrumb';
import VerticalCard from '../VerticalCard';

import './styles.scss';

const Detail = ({ item }) => (
    <div className='detail'>
        <BreadCrumb />
        <VerticalCard
            title={item.title}
            imageUrl={item.picture}
            price={item.price}
            condition={item.condition}
            soldQuantity={item.sold_quantity}
            description={nl2br(item.description)}
        />
    </div>
)

Detail.displayName = 'Detail';

Detail.propTypes = {
    item: PropTypes.object,
}

export default Detail;