import { useContext, useEffect } from "react";
import { CloseIcon } from "../icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { PetType, petSchema } from "@/lib/schemas";
import { FormProvider, useForm } from "react-hook-form";
import PetModalHeader from "./ModalHeader";
import PetModalInputs from "./PetModalInputs";
import PetModalButtons from "./PetModalButtons";
import { PetContext } from "@/contexts/PetContext";
import { registerPet, updatePet } from "@/lib/services/apiRequests";
import { deletePet } from "@/lib/services/apiRequests/deletePet";
import { IPetForm } from "@/lib/interfaces/IPetForm";
import { toast } from "react-toastify";

export default function PetModal() {
    const { setIsOpenModal, actionMethod, selectedPet, pets } = useContext(PetContext);

    const handleCloseModal = () => setIsOpenModal(false);
    
    const formMethods = useForm<PetType>({
        resolver: zodResolver(petSchema),
        mode: "onChange"
    });

    useEffect(() => {
        if(selectedPet==-1) {
            formMethods.reset();
            return;
        }

        const petData = pets.find((pet) => pet.id==selectedPet);
        if(!petData) return;

        formMethods.setValue("id", petData?.id);
        formMethods.setValue("name", petData?.name);
        formMethods.setValue("owner", petData?.owner);
        formMethods.setValue("type", petData?.type);
        formMethods.setValue("breed", petData?.breed);
        formMethods.setValue("phone", petData?.phone);
        formMethods.setValue("birthdate", petData?.birthdate);
        
    }, [selectedPet]);

    const getActionSubmit = async (data: IPetForm) => {
        if(actionMethod=="create") {
            await registerPet(data);
            setIsOpenModal(false);
            return;
        }
        if(actionMethod=="update") {
            await updatePet(data);
            setIsOpenModal(false);
            return;
        }
        if(actionMethod=="remove") {
            await deletePet(data);
            setIsOpenModal(false);
            return;
        }

        await registerPet(data);
        setIsOpenModal(false);
    }

    return (<>
        <div className={`absolute top-0 bottom-0 left-0 right-0 bg-[#00060FCC] flex justify-center items-center z-20`}>
            <div className="h-[618px] w-[618px] p-[3px] rounded-[10px] bg-gradient-to-r from-[#00CAFC] from-15% to-[#0056E2] to-87% shadow-[0_0_15px_10px_rgba(0,86,226,0.20)]">
                <div
                    className="relative h-full w-full rounded-[8px] bg-[#525252] p-[55px] flex flex-col gap-[60px]"
                    style={{ background: "linear-gradient(316deg, #000814 15.31%, #001E4D 86.58%)" }}
                >
                    <div className="hover:opacity-70 cursor-pointer absolute h-[76px] flex items-center right-[55px]">
                        <div onClick={handleCloseModal}>
                            <CloseIcon />
                        </div>
                    </div>

                    <PetModalHeader />

                    <FormProvider {...formMethods} >
                        <form className="flex flex-col gap-[60px]" onSubmit={formMethods.handleSubmit(getActionSubmit)}>
                            <PetModalInputs />

                            <PetModalButtons />
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    </>)
}