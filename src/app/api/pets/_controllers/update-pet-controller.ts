import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { updatePetValidator } from "../_validators";

export async function updatePetController(req: Request, { params }: FindPetByIdDto) {
    const petId = params.petId;
    const body = await req.json();

    const foundPet = await prisma.pet.count({ where: { id: petId } });
    if(foundPet == 0) return NextResponse. json({ statusCode: 404, message: "Pet não encontrado" }, { status: 404 });

    const validationResult = updatePetValidator(body);
    if(!validationResult.success || !validationResult.data) return NextResponse.json(validationResult.error, { status: 400 });

    const { name, owner, type, breed, phone, birthdate } = validationResult.data;

    const updatedPet = await prisma.pet.update({
        where: { id: petId },
        data: {
            name,
            owner,
            type,
            breed,
            phone,
            birthdate,
        }
    });
    if(!updatedPet) return NextResponse.json({ statusCode: 404, message: "Erro ao atualizar seu pet" }, { status: 400 });

    return NextResponse.json(updatedPet);
}
