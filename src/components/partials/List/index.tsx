import DotsLoader from "@/components/DotsLoader";
import Pagination from "@/components/Pagination";
import PetItem from "@/components/PetItem";
import { PetContext } from "@/contexts/PetContext";
import { useContext } from "react";

export default function List() {
    const { pets } = useContext(PetContext);

    if(!pets || pets?.length==0) {
        return (
            <div className="w-full flex justify-center mt-16">
                <DotsLoader />;
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