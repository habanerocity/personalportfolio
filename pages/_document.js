import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			</Head>
			<body>
				<Main />
				<NextScript />
				{/* <style jsx global>{`
					#__next {
						height: 100%;
					}
				`}</style> */}
			</body>
		</Html>
	);
}
