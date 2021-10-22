import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
          <meta name="description" content="Combine all your dev tools into one chatroom." />
          <meta name="keywords" content="Chatroom, GitHub, Jira, Dev, Slack, Discord" />
          <meta name="author" content="Christopher Gunter" />
          <link
            href="https://fonts.googleapis.com/css2?family=Prompt:wght@500&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Prompt:wght@200&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
            rel="stylesheet"
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap" 
            rel="stylesheet"
          />
        </Head>
        <body className="bg-gradient-mid">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument