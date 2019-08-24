import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const PageHead = ({ titlePrefix }) => (
    <Head>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap" rel="stylesheet"/>
        <title>{titlePrefix ? `${titlePrefix} - ${titlePrefix} en Mercado Libre` : 'Mercado Libre' }</title>
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
    </Head>
);

PageHead.displayName = 'PageHead';

PageHead.propTypes = {
    titlePrefix: PropTypes.string,
}

PageHead.defaulProps = {
    titlePrefix: '',
}

export default PageHead;