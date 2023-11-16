import { useFormContext } from "react-hook-form";
import { CalendarIcon, DnaIcon, PhoneIcon, ProfileIcon, RingAndBoneICon } from "../icons";
import ThemeInput from "../Input";
import { useContext } from "react";
import { PetContext } from "@/contexts/PetContext";
import { IPetForm } from "@/lib/interfaces/IPetForm";

export default function PetModalInputs() {
    const { actionMethod: method } = useContext(PetContext);
    const { register, formState: { errors } } = useFormContext<IPetForm>();

    return (
        <div className="grid grid-cols-2 gap-x-[33px] gap-y-[15px]">
            <div className="flex flex-col gap-[2px]">
                <div className="flex text-white items-center gap-[8px]">
                    <RingAndBoneICon />
                    <span>Nome</span>
                    
                </div>
                
                <ThemeInput
                    disabled={method==="remove"}
                    {...register("name")}
                />
                {errors.name?.type && <span className="text-[11px] text-[#ae1717]">nome inválido*</span>}
            </div>

            <div className="flex flex-col gap-[2px]">
                <div className="flex text-white items-center gap-[8px]">
                    <DnaIcon />
                    <span>Animal</span>
                </div>
                
                <div className="flex gap-[10px]">
                    <div className={`flex gap-[5px]`}>
                        <ThemeInput
                            type="radio"
                            id="animalChoice1"
                            value="gato"
                            {...register("type")}
                            disabled={method==="remove"}
                        />
                        <label
                            htmlFor="animalChoice1"
                            className="h-[40px] leading-[34px] border-[#404A5C] text-white text-[16px] border-[3px] bg-transparent rounded-[10px] outline-0 px-[12px]"
                        >
                            Gato
                        </label>
                    </div>

                    <div className="flex gap-[5px]">
                        <ThemeInput
                            type="radio"
                            id="animalChoice2"
                            value="cachorro"
                            {...register("type")}
                            disabled={method==="remove"}
                        />
                        <label
                            htmlFor="animalChoice2"
                            className="h-[40px] leading-[34px] border-[#404A5C] text-white text-[16px] border-[3px] bg-transparent rounded-[10px] outline-0 px-[12px]"
                        >
                            Cachorro
                        </label>
                    </div>
                </div>
                
                {errors.type?.message && <span className="text-[11px] text-[#ae1717]">tipo inválido*</span>}
            </div>

            <div className="flex flex-col gap-[2px]">
                <div className="flex text-white items-center gap-[8px]">
                    <ProfileIcon />
                    <span>Dono</span>
                </div>
                
                <ThemeInput
                    disabled={method==="remove"}
                    {...register("owner")}
                />

                {errors.owner?.message && <span className="text-[11px] text-[#ae1717]">nome inválido*</span>}
            </div>

            <div className="flex flex-col gap-[2px]">
                <div className="flex text-white items-center gap-[8px]">
                    <DnaIcon />
                    <span>Raça</span>
                </div>
                
                <ThemeInput {...register("breed")} disabled={method==="remove"} />

                {errors.breed?.message && <span className="text-[11px] text-[#ae1717]">raça inválida*</span>}
            </div>

            <div className="flex flex-col gap-[2px]">
                <div className="flex text-white items-center gap-[8px]">
                    <PhoneIcon />
                    <span>Telefone</span>
                </div>
                
                <ThemeInput {...register("phone")} maxLength={11} disabled={method==="remove"} />

                {errors.phone?.message && <span className="text-[11px] text-[#ae1717]">telefone inválido*</span>}
            </div>

            <div className="flex flex-col gap-[2px]">
                <div className="flex text-white items-center gap-[8px]">
                    <CalendarIcon />
                    <span>Nascimento</span>
                    <span className="text-[#404A5C] text-[16px] font-normal leading-[18.38px]">(Aproximado)</span>
                </div>
                
                <ThemeInput type="date" lang="pt-br" {...register("birthdate")} disabled={method==="remove"} />

                {errors.birthdate?.message && <span className="text-[11px] text-[#ae1717]">nascimento inválido*</span>}
            </div>
        </div>
    )
}