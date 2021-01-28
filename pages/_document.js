import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    };

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="UTF-8"/>
                    <meta name="msapplication-TileColor" content="#b91d47"/>
                    <meta name="theme-color" content="#ffffff"/>
                    <meta property="og:image" content="https://www.liam-reilly.info/static/liam-reilly-info.png"/>
                    <meta property="og:image:alt" content="Liam Reilly"/>
                    <meta property="og:image:width" content="256"/>
                    <meta property="og:image:height" content="256"/>
                    <meta property="og:image:type" content="image/png"/>
                    <meta property="og:description" content="Liam Reilly"/>
                    <meta property="og:url" content="https://www.liam-reilly.info/"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png?v=A0ewQ6BO4j"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png?v=A0ewQ6BO4j"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png?v=A0ewQ6BO4j"/>
                    <link rel="manifest" href="/static/site.webmanifest?v=A0ewQ6BO4j"/>
                    <link rel="mask-icon" href="/static/safari-pinned-tab.svg?v=A0ewQ6BO4j" color="#e93d00"/>
                    <link rel="shortcut icon" href="/static/favicon.ico?v=A0ewQ6BO4j"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu" media="all"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument