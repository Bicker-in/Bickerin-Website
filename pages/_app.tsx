import Head from "next/head";
import "../styles/globals.css";
import "../styles/extraColors.css";
import "../styles/text.css";
import "../styles/hamburger.css";
import "../styles/blogPost.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bicker!n</title>
      </Head>
      <div className="overflow-scroll h-screen bg-gradient-to-b from-matte-black via-gradient-mid to-green-600">
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
