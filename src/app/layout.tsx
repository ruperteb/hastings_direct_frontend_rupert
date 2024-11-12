import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/complex/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hastings-Direct-News-Website',
  description: 'Technical Assignment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-off-white antialiased`}>
        <div className="container mx-auto px-4 pb-5 pt-10 md:pt-20 lg:px-10 xl:px-20">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
