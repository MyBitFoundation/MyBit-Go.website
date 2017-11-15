import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    return { html, head, errorHtml, chunks }
  }

  render() {
    return (
      <html>
        <Head>
          <title>MyBit</title>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/static/favicons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/static/favicons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/static/favicons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/favicons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/favicons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/favicons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/favicons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/favicons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/favicons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/favicons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <meta charSet="utf-8" />
          <link rel="manifest" href="/static/favicons/manifest.json" />
          <meta
            name="description"
            content="MyBit is a peer to peer investing application which unlocks billions of dollars in IoT revenue."
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/static/favicons/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@MyBit_DApp" />
          <meta name="twitter:title" content="MyBit" />
          <meta
            name="twitter:description"
            content="MyBit is a peer to peer investing application which unlocks billions of dollars in IoT revenue."
          />
          <meta name="twitter:creator" content="@MyBit_DApp" />
          <meta
            name="twitter:image"
            content="https://mybit.io/static/social/mybit_twitter_cover.png"
          />

          <meta property="og:title" content="MyBit" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://mybit.io/" />
          <meta
            property="og:image"
            content="https://mybit.io/static/social/mybit_facebook_cover.png"
          />
          <meta
            property="og:description"
            content="MyBit is a peer to peer investing application which unlocks billions of dollars in IoT revenue."
          />
          <meta property="og:site_name" content="MyBit" />
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
