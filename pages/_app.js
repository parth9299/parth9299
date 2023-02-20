import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.scss";
import Layout from "./components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
