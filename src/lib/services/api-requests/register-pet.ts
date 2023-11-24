import { IPetForm } from "@/lib/interfaces/pet-form";
import api from "../api";
import toast from "react-hot-toast";

export async function registerPet(data: IPetForm) {
  async function registerPet(data: IPetForm) {
    return await api.post('/pets', data);
  }

  toast.promise(
    registerPet(data),
    {
      loading: 'Cadastrando pet...',
      success: () => {
        window.location.href = "/";
        return 'Pet cadastrado com sucesso!'
      },
      error: () => {
        window.location.href = "/";
        return 'Algo saiu errado durante o cadastro.'
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
