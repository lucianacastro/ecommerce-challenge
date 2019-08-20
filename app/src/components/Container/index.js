import React from 'react';
import './styles.scss';

const Container = props => (
    <div className='container'>
        {props.children}
    </div>
);

Container.displayName = 'Container';

export default Container;