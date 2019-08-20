import React from 'react';
import Head from 'next/head';

import { getSearch } from '../services/bff';
import Layout from '../components/Layout';
import Results from '../components/Results';


export default class Search extends React.Component {
	static displayName='Search';
	static async getInitialProps({ query: { q = 'plancha' } }) {
		const { categories, items } = await getSearch(q);
		console.log('categories', categories);
		console.log('items', items);
		return { categories, items };
	}
	render() {
		return(
			<>
				<Head>
					<title>Search</title>
				</Head>
				<Layout>
					<Results categories={this.props.categories} items={this.props.items} />
				</Layout>
			</>
		);
	}
}