'use client'

import Nav from '@/components/partials/nav';
import PetModal from '@/components/pet-modal';
import { getPetList } from '@/lib/services/api-requests';
import { useContext, useEffect } from 'react';
import Header from '@/components/partials/header';
import List from '@/components/partials/list';
import { PetContext } from '@/contexts/pet-context';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams()
  const { isOpenModal, setPets, page, setTotalPages, setIsFetchingPets } = useContext(PetContext);

  useEffect(() => {
    async function fetchPets() {
      setIsFetchingPets(true);
      
      try {
        const petList = await getPetList(searchParams.get("search") || undefined, Number(page));
        setTotalPages(petList.pagination.totalPages)
        setPets(petList.data)
      } catch (error) {
        console.error(error);
      } finally {
        setIsFetchingPets(false);
      }
    }
    
    fetchPets();
  }, []);

  return (
    <main
      className='min-h-screen bg-[#00060F] pt-[50px] pb-[20px] px-[55px]'
      style={{ background: "linear-gradient(-45deg, #000d22 0%, #000b1c 8%, #00060F 50%, #000b1c 92%, #000d22 100%)" }}
    >
      <Header />
      <Nav />
      <List />

      {isOpenModal && <PetModal />}
    </main>
  )
}
