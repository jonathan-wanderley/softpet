import { CalendarIcon, DnaIcon, PhoneIcon, SketchingPencilGradientIcon, SketchingPencilIcon, TrashIcon } from "../icons";
import ButtonShape from "../ButtonShape";
import { format } from "date-fns";
import { PetType } from "@/lib/schemas";
import { useContext } from "react";
import { PetContext } from "@/contexts/PetContext";

type PetDropdown = {
  className?: string;
  petInfo: PetType;
}

export default function PetDropdown({ className = "", petInfo }: PetDropdown) {
  const { setIsOpenModal, setActionMethod } = useContext(PetContext);

  const handleEdit = () => {
    setActionMethod("update");
    setIsOpenModal(true);
  }

  const handleRemove = () => {
    setActionMethod("remove");
    setIsOpenModal(true);
  }

  return (
    <div
      className={`w-[300px] p-[3px] rounded-[10px] bg-gradient-to-r from-[#00CAFC] from-15% to-[#0056E2] to-87% shadow-[0_0_15px_10px_rgba(0,86,226,0.20)] ${className}`}
    >
      <div
        className="w-full rounded-[8px] p-[12px] flex flex-col gap-[20px] items-center"
        style={{ background: "linear-gradient(316deg, #000814 15.31%, #001E4D 86.58%)" }}
      >
        <div className="px-[12px] w-full">
          <div className="flex gap-[7px] items-center">
            <DnaIcon size={16} />

            <span className="text-[16px] font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">Raça: {petInfo.breed}</span>
          </div>

          <div className="flex gap-[7px] items-center">
            <PhoneIcon size={16} />

            <span className="text-[16px] font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">Telefone: {petInfo.phone}</span>
          </div>

          <div className="flex gap-[7px] items-center">
            <CalendarIcon size={16} />

            <span className="text-[16px] font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">Idade: {format(new Date(`${petInfo.birthdate}T00:00`), "dd/MM/yyyy")}</span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-[12px]">
          <ButtonShape
            className="w-full flex items-center justify-center gap-[7px]"
            bg="white"
            onClick={handleEdit}
          >
            <SketchingPencilGradientIcon color="blueGradient" />

            <span
              className="bg-gradient-to-r from-[#00CAFC] from-0% to-[#0056E2] to-100% bg-clip-text font-bold inline-block text-transparent"
            >
              Editar
            </span>
          </ ButtonShape>

          <ButtonShape
            className="w-full flex items-center justify-center gap-[7px]"
            bg="blueGradient"
            onClick={handleRemove}
          >
            <TrashIcon size={16} />

            <span className="text-[#ffffff]">
              Remover
            </span>
          </ButtonShape>
        </div>
      </div>
    </div>
  )
}
