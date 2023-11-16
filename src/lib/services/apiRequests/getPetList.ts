import { GetPetListResponse } from "@/lib/interfaces/api/GetPetListResponse";
import api from "../api";

type FilterString = string;

export async function getPetList(search?: FilterString, page?: number): Promise<GetPetListResponse> {
    const { data } = await api.get<GetPetListResponse>("/pets", { params: { search, page } });

    return data;
}
