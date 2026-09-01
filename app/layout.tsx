import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist', subsets: ['latin', 'cyrillic'] });
export const metadata: Metadata = { title: 'Курсометр — валютный калькулятор', description: 'Быстрый калькулятор для конвертации популярных валют.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ru"><body className={`${geist.variable} antialiased`}>{children}</body></html>; }
