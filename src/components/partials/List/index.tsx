import DotsLoader from "@/components/DotsLoader";
import Pagination from "@/components/Pagination";
import PetItem from "@/components/PetItem";
import { PetContext } from "@/contexts/PetContext";
import { useContext } from "react";

export default function List() {
    const { pets, isFetchingPets } = useContext(PetContext);

    if((!pets || pets?.length==0) && isFetchingPets==true) {
        return (
            <div className="w-full flex justify-center mt-16">
                <DotsLoader />;
            </div>
        )
    }

    if((!pets || pets?.length==0) && isFetchingPets==false) {
        return (
            <div className="w-full flex justify-center mt-16">
                <p className="text-[#ffffffc5]">Não há pets cadastrados...</p>
            </div>
        )
    }

    return (
        <div>
            <section className='flex flex-wrap gap-[18px] mt-[45px]'>
                {pets && pets.map((pet, index) => (
                    <PetItem
                        key={index}
                        petInfo={pet}
                    />
                ))}
            </section>

            <section>
                <Pagination className='mt-[45px]'/>
            </section>
        </div>
    )
}