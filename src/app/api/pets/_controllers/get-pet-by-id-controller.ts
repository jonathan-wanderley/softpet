import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function getPetByIdController(_: Request, { params }: FindPetByIdDto) {
    const foundPet = await prisma.pet.findUnique({ where: { id: params.petId } })

    if(!foundPet) {
      return NextResponse.json({ message: "Pet not found. Check pet id" }, { status: 404 })
    }
    
    return NextResponse.json(foundPet);
}
