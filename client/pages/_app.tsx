import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import WalletContextProvider from '../context/WalletContextProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletContextProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </WalletContextProvider>
  );
}

export default MyApp;
