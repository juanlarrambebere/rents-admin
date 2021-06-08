import Apollo from "../graphql/apollo";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Apollo>
      <Component {...pageProps} />
    </Apollo>
  );
}

export default MyApp;
