import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import { PetContextProvider } from '@/contexts/PetContext';
import { Toaster } from 'react-hot-toast';

const ubuntu = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SoftPet',
  description: 'A pet center by SoftMakers BR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${ubuntu.className} bg-[#00060F]`}>
        <PetContextProvider>
          {children}
        </PetContextProvider>

        <div><Toaster/></div>
      </body>
    </html>
  )
}
