import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function getPetByIdController(_: Request, { params }: FindPetByIdDto) {
    const foundPet = await prisma.pet.findUnique({ where: { id: params.petId } })

    return NextResponse.json(foundPet);
}
