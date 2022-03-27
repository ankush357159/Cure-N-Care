import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import InfoHeader from "../src/components/layout/InfoHeader";
import SubHeader from "../src/components/layout/SubHeader";
import MainHeader from "../src/components/layout/MainHeader";
import Footer from "../src/components/layout/Footer";
// import SubFooter from "../src/components/layout/SubFooter";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  if (Component.getLayout) {
    // return Component.getLayout(<Component {...pageProps} />);
    // Custom components to be rendered in special cases
    return (
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {Component.getLayout(<Component {...pageProps} />)}

          <Footer />
          {/* <Component {...pageProps} /> */}
          {/* <SubFooter /> */}
        </ThemeProvider>
      </CacheProvider>
    );
  }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <InfoHeader />
        <SubHeader />
        <MainHeader />
        <Component {...pageProps} />
        {/* <SubFooter /> */}
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
