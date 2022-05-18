import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { AuthProvider } from "@/lib/auth";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../styles/theme";
import createEmotionCache from "../styles/createEmotionCache";
import { SnackbarProvider } from "notistack";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Router } from "next/router";
import NProgress from "nprogress";

// Client-side cache shared for the whole session
// of the user in the browser.
Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());


const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <SnackbarProvider maxSnack={3} preventDuplicate>
        <Head>
          {/* Import CSS for nprogress */}
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant,
				consistent, and simple baseline to
				build upon. */}
            <CssBaseline />
            <Navigation />
            <Component {...pageProps} />

            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </SnackbarProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
