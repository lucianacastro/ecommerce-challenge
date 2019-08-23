import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'

import { getItem } from '../../services/bff';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import Detail from '../../components/Detail';

export default class Product extends React.Component {

	static displayName='Detail';
	
	static async getInitialProps({ query }) {
		const { productId } = query;

		const [ itemId, description ] = productId.split('-');
		const { item } = await getItem( itemId );
		return { item };
	}

	render() {
		return(
			<>
				<Head>
					<title>Mercado Libre</title>
				</Head>
				<Layout >
					<Container>
						<Detail item={this.props.item} />
					</Container>
				</Layout>
			</>
		);
	}
}
