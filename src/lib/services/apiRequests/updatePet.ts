import { IPetForm } from "@/lib/interfaces/IPetForm";
import { toast } from "react-toastify";
import api from "../api";

export async function updatePet(data: Partial<IPetForm>) {
    try {
        await api.put(`/pets/${data.id}`, data);
    
        toast.info("Pet atualizado com sucesso!", {
            theme: "dark",
            onClose: () => window.location.reload(),
        });
    } catch (error) {
        console.error(error);
        
        toast.error("Algo saiu errado, tente novamente!", {
            theme: "dark",
            onClose: () => window.location.reload(),
        });
    }
}
