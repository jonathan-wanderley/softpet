import { IPetForm } from "@/lib/interfaces/IPetForm";
import { toast } from 'react-toastify';
import api from "../api";

export async function registerPet(data: IPetForm) {
    try {
        await api.post('/pets', data);
    
        toast.info("Pet cadastrado com sucesso!", {
            theme: "dark",
            onClose: () => window.location.reload(),
        });
    } catch (error) {
        toast.error("Algo saiu errado, tente novamente!", {
            theme: "dark",
            onClose: () => window.location.reload(),
        });
    }
}
