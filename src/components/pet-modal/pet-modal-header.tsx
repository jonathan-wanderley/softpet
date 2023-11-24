import { ElementType, ReactNode, useContext } from "react";
import { PlusWithCircleIcon, SketchingPencilIcon, TrashIcon } from "../icons";
import { PetContext } from "@/contexts/pet-context";

export default function PetModalHeader() {
    const { actionMethod: method } = useContext(PetContext);

    let Icon: ElementType = PlusWithCircleIcon;
    let text = "Cadastrar";
    
    switch (method) {
        case "create":
            Icon = PlusWithCircleIcon;
            text = "Cadastrar";

            break;
        case "update":
            Icon = SketchingPencilIcon;
            text = "Editar";

            break;
        case "remove":
            Icon = TrashIcon;
            text = "Remover";

            break;
        default:
            break;
    }
    
    return (
        <div className="flex items-center justify-between">
            <div className="flex gap-[24px] items-center">
                <div className="h-[72px] w-[72px] p-[20px] rounded-full bg-gradient-to-r from-[#00CAFC] from-15% to-[#0056E2] to-87% flex justify-center items-center">
                    <Icon className="w-full h-full" color="#ffffff" />
                </div>

                <span className="font-bold text-[30px] text-[#ffffff]">
                    {text}
                </span>
            </div>
        </div>
    )
}
