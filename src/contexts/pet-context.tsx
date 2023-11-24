'use client'

import { PetType } from "@/lib/schemas";
import { useSearchParams } from "next/navigation";
import { ReactNode, createContext, useState } from "react";

type UserContextProps = {
    children: ReactNode;
}

type UserContextType = {
    isOpenModal: boolean;
    setIsOpenModal:  (newState: boolean) => void;
    actionMethod: string;
    setActionMethod: (method: "create" | "update" | "remove") => void;
    selectedPet: string | number;
    setSelectedPet: (newState: string | number) => void;
    pets: PetType[];
    setPets: (newState: PetType[]) => void;
    page: number;
    setPage: (newState: number) => void;
    totalPages: number;
    setTotalPages: (newState: number) => void;
    isFetchingPets: boolean;
    setIsFetchingPets: (newState: boolean) => void;
}

const initialValue = {
    isOpenModal: false,
    setIsOpenModal: () => {},
    actionMethod: "create",
    setActionMethod: () => {},
    isFetchingPets: true,
    setIsFetchingPets: () => {},
    pets: [],
    setPets: () => {},
    selectedPet: -1,
    setSelectedPet: () => {},
    page: 1,
    setPage: () => {},
    totalPages: 1,
    setTotalPages: () => {},
}

export const PetContext = createContext<UserContextType>(initialValue);

export const PetContextProvider = ({ children }: UserContextProps) => {
    const searchParams = useSearchParams();

    const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal);
    const [actionMethod, setActionMethod] = useState(initialValue.actionMethod);
    const [pets, setPets] = useState<PetType[]>([]);
    const [selectedPet, setSelectedPet] = useState<string | number>(initialValue.selectedPet);
    const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
    const [totalPages, setTotalPages] = useState(initialValue.totalPages);
    const [isFetchingPets, setIsFetchingPets] = useState(initialValue.isFetchingPets);

    return (
        <PetContext.Provider
            value={{
                isOpenModal, setIsOpenModal,
                actionMethod, setActionMethod,
                pets, setPets,
                selectedPet, setSelectedPet,
                page, setPage,
                totalPages, setTotalPages,
                isFetchingPets, setIsFetchingPets
            }
        }>
            {children}
        </PetContext.Provider>
    )
}
