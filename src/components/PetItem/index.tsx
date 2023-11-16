'use client'

import { ChevronDownIcon, ProfileIcon, RingAndBoneICon, RoundedCatIcon, RoundedDogIcon } from "@/components/icons";
import { useContext } from "react";
import PetDropdown from "../PetDropdown";
import { PetType } from "@/lib/schemas";
import { PetContext } from "@/contexts/PetContext";

type PetItemProps = {
    petInfo: PetType;
}

export default function PetItem({ petInfo }: PetItemProps) {
    const { selectedPet, setSelectedPet } = useContext(PetContext);

    const handleClick = () => {
        if(selectedPet===petInfo.id) {
            setSelectedPet(-1);
            return;
        }
        
        setSelectedPet(petInfo.id);
    }

    return (
        <div
            className={`
                relative w-[300px] h-[95px] p-[3px] rounded-[10px] hover:bg-gradient-to-r hover:from-[#00CAFC] hover:from-15% hover:to-[#0056E2] hover:to-87%
                ${petInfo.id===selectedPet ? "bg-gradient-to-r from-[#00CAFC] from-15% to-[#0056E2] to-87%" : null}
            `}
        >
            <div
                className="w-full h-full flex items-center justify-between gap-[17px] rounded-[8px] pl-[12px] pr-[20px] cursor-pointer"
                style={{ background: "linear-gradient(316deg, #000814 15.31%, #001E4D 86.58%)" }}
                onClick={handleClick}
            >
                {petInfo.type === "gato" ? (<RoundedCatIcon />) : <RoundedDogIcon />}

                <div className="w-full flex flex-col items-start">
                    <div className="flex items-center gap-[9px] w-full">
                        <RingAndBoneICon size={17} />
                        <span className="text-[15px] text-white font-normal w-full">{petInfo.name}</span>
                    </div>

                    <div className="flex items-center gap-[9px] w-full">
                        <ProfileIcon size={17} />
                        <span className="text-[15px] text-white font-normal w-full">{petInfo.owner}</span>
                    </div>
                </div>

                <ChevronDownIcon />
            </div>

            {petInfo.id===selectedPet && (
                <PetDropdown
                    className="absolute mt-[10px] ml-[-3px] z-10"
                    petInfo={petInfo}
                />
            )}
        </div>
    )
}