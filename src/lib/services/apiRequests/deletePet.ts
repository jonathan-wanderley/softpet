import { IPetForm } from "@/lib/interfaces/IPetForm";
import api from "../api";
import toast from "react-hot-toast";

export async function deletePet(data: IPetForm) {
  async function deletePet(data: IPetForm) {
    return await api.delete(`/pets/${data.id}`);
  }

  toast.promise(
    deletePet(data),
    {
      loading: 'Removendo pet...',
      success: () => {
        window.location.href = "/";
        return 'Pet removido com sucesso!'
      },
      error: () => {
        window.location.href = "/";
        return 'Algo saiu errado durante a remoção.'
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
