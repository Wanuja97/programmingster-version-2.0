import "../styles/globals.css";
import MainLayout from "../layouts/MainLayout";
import Head from "next/head";
import Script from 'next/script'
import { SSRProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <MainLayout>
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
    <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
      <Component {...pageProps} />
    </MainLayout>
    </SSRProvider>
    
  );
}

export default MyApp;
