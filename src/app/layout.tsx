import Navbar from '../components/layout/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Strivon | Risk Management Excellence',
  description: 'Leading risk management solutions for businesses worldwide',
  keywords: 'risk management, insurance, reinsurance, public sector, business solutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

