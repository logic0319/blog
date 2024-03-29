import { Html, Head, Main, NextScript } from 'next/document'

export const siteTitle = 'Yongpil blog'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="평범한 일을 평범하지 않게 하자" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 min-h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
