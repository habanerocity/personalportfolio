import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Head from 'next/head';

import ScrollManager from '../components/utils/ScrollManager';


function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="viewport-fit=cover" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<ScrollManager />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
