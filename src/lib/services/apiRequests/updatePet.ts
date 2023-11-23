import { IPetForm } from "@/lib/interfaces/IPetForm";
import api from "../api";
import toast from "react-hot-toast";

export async function updatePet(data: Partial<IPetForm>) {
  async function updatePet(data: Partial<IPetForm>) {
    return await api.put(`/pets/${data.id}`, data);
  }

  toast.promise(
    updatePet(data),
    {
      loading: 'Atualizando pet...',
      success: () => {
        window.location.href = "/";
        return 'Pet atualizado com sucesso!'
      },
      error: () => {
        window.location.href = "/";
        return 'Algo saiu errado durante a atualização.'
      },
    },
    {
      style: {
        borderRadius: '10px',
        background: '#00173B',
        color: '#fff',
      }
    }
  );
}
