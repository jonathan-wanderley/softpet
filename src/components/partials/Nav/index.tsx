import SearchBar from "@/components/SearchBar";
import { PlusWithCircleIcon } from "@/components/icons";
import { PetContext } from "@/contexts/PetContext";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";

export default function Nav() {
    const searchParams = useSearchParams()
    
    const { setIsOpenModal, setActionMethod, setSelectedPet } = useContext(PetContext);

    const handleRegisterClick = () => {
        setSelectedPet(-1);
        setActionMethod("create");
        setIsOpenModal(true);
    }

    const handleSearch = async (searchText: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("search", searchText);
        
        window.location.href = `/?${params.toString()}`;
    }

    return (
        <section className='mt-[53px]'>
            <div className='flex gap-[22px]'>
                <SearchBar onSearch={handleSearch} />

                <button
                    className='flex items-center px-[27px] rounded-[10px] text-white gap-[8px] hover:opacity-80'
                    style={{ background: "linear-gradient(90deg, #00CAFC 0%, #0056E2 100%)" }}
                    onClick={handleRegisterClick}
                >
                    <PlusWithCircleIcon size={20} />
                    <span className='text-[16px] font-[700]'>Cadastrar</span>
                </button>
            </div>
        </section>
    )
}
