// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/global.css'; // Your custom global styles

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
