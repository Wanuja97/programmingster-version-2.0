import "../styles/globals.css";
import MainLayout from "../layouts/MainLayout";
import Head from "next/head";
import { SSRProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }) {
  return (
    // <SSRProvider>
      <MainLayout>
      
      <Component {...pageProps} />
    </MainLayout>
    // </SSRProvider>
    
  );
}

export default MyApp;
