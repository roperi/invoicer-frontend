import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Invoicer | Manage Your Invoices Effortlessly',
  description: 'Invoicer provides a simple and efficient way to manage all your invoices. Save time, stay organized, and get paid faster.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-vBfCLuCiDXF4QpYY6VzCEnt/jMNkspeN5x2cw46UCiBwETrwJSvFP9Tg86vGCr+Q6JNthdR8y5KnB/2J3C2Jpw==" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
