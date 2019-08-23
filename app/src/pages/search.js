import React from 'react';
import Head from 'next/head';

import { getSearch } from '../services/bff';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Results from '../components/Results';


export default class Search extends React.Component {

	static displayName='Search';
	
	static async getInitialProps({ query: { q = '' } }) {
		const { categories, items } = await getSearch(q);
		return { categories, items, searchText: q };
	}
	render() {
		return(
			<>
				<Head>
					<title>Search</title>
				</Head>
				<Layout text={this.props.searchText}>
					<Container>
						<Results categories={this.props.categories} items={this.props.items} />
					</Container>
				</Layout>
			</>
		);
	}
}
