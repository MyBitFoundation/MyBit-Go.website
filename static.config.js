import fetch from 'node-fetch'
import path from 'path'
import React from 'react'

export default {
  plugins: [
    'react-static-plugin-styled-components',
    ['react-static-plugin-typescript', { typeCheck: false }]
  ],
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getSiteData: () => ({
    title: 'MyBit'
  }),
  paths: {
    public: 'public'
  },
  getRoutes: async ({ dev }) => [
    {
      path: '/',
      component: 'src/pages/index'
    },
    {
      path: 'howitworks',
      component: 'src/pages/howitworks'
    },
    {
      path: 'about',
      component: 'src/pages/about'
    },
    {
      path: 'dao',
      component: 'src/pages/dao'
    },
    {
      path: 'participate',
      component: 'src/pages/participate'
    },
    {
      path: '404',
      component: 'src/pages/404'
    }
  ],
  Document: class CustomHtml extends React.Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html itemScope itemType="http://schema.org/Article">
          <Head>
            <title>MyBit</title>
            <meta charSet="UTF-8" />
            <link rel="icon" type="image/png" href="/favicon.png" />
            {renderMeta.styleTags}
            {renderMeta.helmet && renderMeta.helmet.title.toComponent()}
            {renderMeta.helmet && renderMeta.helmet.meta.toComponent()}
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta httpEquiv="content-language" content="en" />
            <meta itemProp="name" content="MyBit" />
            <meta
              itemProp="description"
              content="MyBit designs products that open up the world, creating tools that enable freedom and wealth generation for everyone."
            />
            <meta name="robots" content="index,follow" />
            <meta name="theme-color" content="#1890ff" />
            <meta
              name="Description"
              content="MyBit designs products that open up the world, creating tools that enable freedom and wealth generation for everyone."
            />
            <meta itemProp="image" content="https://mybit.io/og-preview.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@MyBit_DApp" />
            <meta name="twitter:creator" content="@MyBit_DApp" />
            <meta
              name="twitter:image:src"
              content="https://mybit.io/og-preview.png"
            />
            <meta name="language" content="English" />
            <meta property="og:url" content="https://mybit.io/" />
            <meta property="og:title" content="MyBit" />
            <meta
              property="og:description"
              content="Powering safe, solvent and trustless trading of any asset."
            />
            <meta
              property="og:image"
              content="https://mybit.io/og-preview.jpg"
            />
            <meta name="robots" content="index,follow" />
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  }
}
