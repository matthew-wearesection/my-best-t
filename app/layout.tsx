import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My best "T"',
  description: 'choose my best T',
  icons: {
    icon: '/my-best-t/uniqlo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          overflow: 'hidden',
          width: '100vw',
          height: '100vh',
          backgroundColor: '#FF0006',
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
