import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Invoicer',
  description: 'Clever invoicing',
  image: 'https://mlmx.s3.us-west-1.amazonaws.com/invoicer/invoicer.png',
}

export default function RootLayout({
  children,
  pageMetadata, // Additional metadata for the specific page
}: {
  children: React.ReactNode;
  pageMetadata?: Metadata; // Additional metadata for the specific page
}) {
  const mergedMetadata = { ...metadata, ...pageMetadata };

  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-vBfCLuCiDXF4QpYY6VzCEnt/jMNkspeN5x2cw46UCiBwETrwJSvFP9Tg86vGCr+Q6JNthdR8y5KnB/2J3C2Jpw==" crossOrigin="anonymous" />

        <meta property="og:title" content={mergedMetadata.title} />
        <meta property="og:description" content={mergedMetadata.description} />
        <meta property="og:image" content={mergedMetadata.image} />

        {/* Add more Open Graph tags if needed */}
      </Head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
