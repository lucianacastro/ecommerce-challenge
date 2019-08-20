import React from 'react';
import Head from 'next/head';

import Layout from '../shared/components/Layout';
import Card from '../shared/components/Card';

const Items = () => (
	<div>
		<Head>
			<title>Items</title>
		</Head>
		<Layout />
        <Card/>

	</div>
);

export default Items;