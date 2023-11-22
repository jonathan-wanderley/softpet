import { NextResponse } from "next/server";
import { createPetValidator } from "../_validators";
import prisma from "@/lib/prisma";

export async function createPetController(req: Request) {
    const body = await req.json();

    const validationResult = createPetValidator(body);
    if(!validationResult.success || !validationResult.data) return NextResponse.json(validationResult.error, { status: 400 });

    const { name, owner, type, breed, phone, birthdate } = validationResult.data;

    const newPet = await prisma.pet.create({
        data: {
            name,
            owner,
            type,
            breed,
            phone,
            birthdate,
        }
    });

    return NextResponse.json(newPet, { status: 201 });
}
