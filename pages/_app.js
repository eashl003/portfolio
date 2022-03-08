import App from "next/app"
import Head from "next/head"
import Layout from "../components/Layout"
import { getCategories, getBlogs, getHome } from "../utils/api"
import "../styles/index.css"
import "../styles/font.css"
import "../styles/menuButtons.scss"

const MyApp = ({ Component, pageProps }) => (
  <Layout categories={pageProps.categories} blogs={pageProps.blogs}>
    <Head>
      <link rel="preconnect" href="https://app.snipcart.com" />
      <link rel="preconnect" href="https://cdn.snipcart.com" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
        crossOrigin="anonymous"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css"
      />
      <script
        async
        src="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js"
      />
    </Head>
    <Component {...pageProps} />
  </Layout>
)

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx)
  const categories = await getCategories()
  const blogs = await getBlogs()
  const home = await getHome()
  return {
    ...appProps,
    pageProps: { categories, blogs, home, path: ctx.pathname },
  }
}

export default MyApp
