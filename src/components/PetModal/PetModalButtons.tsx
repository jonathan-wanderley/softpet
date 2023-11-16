import { useContext, useEffect } from "react"
import ButtonShape from "../ButtonShape";
import { LeftArrowWithCircleIcon, PlusWithCircleIcon, SketchingPencilIcon, TrashIcon } from "../icons";
import { PetContext } from "@/contexts/PetContext";
import { useFormContext } from "react-hook-form";
import DotsLoader from "../DotsLoader";

export default function PetModalButtons() {
    const { actionMethod, setIsOpenModal } = useContext(PetContext)
    const { reset, setValue, formState: { isSubmitting, errors } } = useFormContext()

    const handleCloseModal = () => {
        reset();
        setIsOpenModal(false);
    }

    return (
        <div className="grid grid-cols-2 gap-[33px]">
            <ButtonShape
                className="flex items-center justify-center gap-[7px]"
                onClick={handleCloseModal}
            >
                <LeftArrowWithCircleIcon color="#008be2" />
                <span className="text-[#008be2]">Voltar</span>
            </ButtonShape>

            {isSubmitting ? (
                <div className="min-h-[40px] flex items-center w-full justify-center">
                    <DotsLoader />
                </div>
            ) : (
                <ButtonShape
                    bg={actionMethod=="remove" ? "danger" : "blueGradient"}
                    className="flex items-center justify-center gap-[7px]"
                    type="submit"
                    disabled={actionMethod==="remove" ? false : !!errors.root?.type}
                >
                    {actionMethod==="create" && (<>
                        <PlusWithCircleIcon />
                        <span className='text-[#ffffff]'>Cadastrar</span>
                    </>)}

                    {actionMethod==="update" && (<>
                        <SketchingPencilIcon color="white" />
                        <span className='text-[#ffffff]'>Salvar</span>
                    </>)}

                    {actionMethod==="remove" && (<>
                        <TrashIcon />
                        <span className='text-[#ffffff]'>Remover</span>
                    </>)}
                </ButtonShape>
            )}
        </div>
    )
}