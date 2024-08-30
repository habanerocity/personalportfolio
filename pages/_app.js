import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Head from 'next/head';

import ScrollToTop from '../components/utils/ScrollToTop';


function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="viewport-fit=cover" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<ScrollToTop />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
