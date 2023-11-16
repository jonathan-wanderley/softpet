import { IPetForm } from "@/lib/interfaces/IPetForm";
import api from "../api";
import { toast } from "react-toastify";

export async function deletePet(data: IPetForm) {
    try {
        await api.delete(`/pets/${data.id}`);
    
        toast.info("Pet removido com sucesso!", {
            theme: "dark",
        });
        toast.onChange(() => window.location.reload());
    } catch (error) {
        console.error(error);
        toast.error("Algo saiu errado, tente novamente!", {
            theme: "dark",
        });
        toast.onChange(() => window.location.reload());
    }
}