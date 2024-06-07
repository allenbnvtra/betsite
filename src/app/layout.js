import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Minibets',
  description:
    'Minibets is an online platform where you can play casino games, sports bettings, slots, and many more. We offer a high quality service for Online Casino Players in The Philippines',
  icons: {
    icon: '/images/king.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
