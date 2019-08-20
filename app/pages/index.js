import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../shared/components/Layout';

const Home = () => (
	<div>
		<Head>
			<title>Mercado Libre</title>
			<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap" rel="stylesheet"/>
		</Head>
		<Layout />
	</div>
);

export default Home;
