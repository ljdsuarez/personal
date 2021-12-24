import "../styles/globals.css";
import Head from "next/head";



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
