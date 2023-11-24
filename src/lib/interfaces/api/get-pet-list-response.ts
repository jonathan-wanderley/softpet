export type PetItemResponse = {
    id: string;
    name: string;
    owner: string;
    type: "gato" | "cachorro"
    breed: string;
    phone: string;
    birthdate: string;
    created_at: Date;
    updated_at: Date;
}

export type GetPetListResponse = {
    data: PetItemResponse[],
    pagination: {
        currentPage: number,
        totalItems: number,
        totalPages: number,
    }
}

