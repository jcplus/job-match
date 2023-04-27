import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="stylesheet" href="/css/colours.css"/>
					<link rel="stylesheet" href="/css/ub.css"/>
					<link rel="stylesheet" href="/css/base.css"/>
					<meta charSet="utf-8"/>
					<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
				</Head>
				<body className="u-scrollbar">
				<Main/>
				<NextScript/>
				</body>
			</Html>
		);
	}
}