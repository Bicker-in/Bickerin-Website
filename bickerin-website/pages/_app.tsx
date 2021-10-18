import '../styles/globals.css'
import '../styles/extraColors.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="bg-gradient-to-b from-matte-black via-gradient-mid to-green-600 overflow-scroll h-screen">
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp
