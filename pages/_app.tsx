import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/extraColors.css';
import '../styles/text.css';
import '../styles/hamburger.css';
import '../styles/blogPost.css';
import '../styles/blogPostList.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';

/**
 * Website's root component
 * @param {AppProps} props MyApp's component
 * @param {NextComponentType} props.Component Next's Component
 * @param {any} props.pageProps The props for props.Component
 * @return {NextComponentType} Returns the Website's root component.
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bicker!n</title>
      </Head>
      <div
        // eslint-disable-next-line max-len
        className="bg-gradient-to-b from-matte-black via-gradient-mid to-green-600"
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
