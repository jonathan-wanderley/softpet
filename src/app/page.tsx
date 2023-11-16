'use client'

import Nav from '@/components/partials/Nav';
import PetModal from '@/components/PetModal';
import { getPetList } from '@/lib/services/apiRequests';
import { useContext, useEffect } from 'react';
import Header from '@/components/partials/Header';
import List from '@/components/partials/List';
import { PetContext } from '@/contexts/PetContext';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams()
  const { isOpenModal, setPets, page, setTotalPages } = useContext(PetContext);

  useEffect(() => {
    async function fetchPets() {
      try {
        const petList = await getPetList(searchParams.get("search") || undefined, Number(page));
        setTotalPages(petList.pagination.totalPages)
        setPets(petList.data)
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchPets();
  }, []);

  return (
    <main
      className='min-h-screen bg-[#00060F] pt-[50px] px-[55px]'
      style={{ background: "linear-gradient(-45deg, #000d22 0%, #000b1c 8%, #00060F 50%, #000b1c 92%, #000d22 100%)" }}
    >
      <Header />
      <Nav />
      <List />

      {isOpenModal && <PetModal />}
    </main>
  )
}
