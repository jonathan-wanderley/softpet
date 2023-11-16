import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { createPetValidator } from "./_validators";
import { Prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
    const searchString = request.nextUrl.searchParams.get("search") || undefined;
    const page = request.nextUrl.searchParams.get("page") || 1;
    const limit = 12;

    const queryFilter: Prisma.PetWhereInput = {
            OR: [
                { name: { contains: searchString, mode: "insensitive" } },
                { owner: { contains: searchString, mode: "insensitive" } },
                { phone: { contains: searchString, mode: "insensitive" } },
            ]
        }

    const petList = await prisma.pet.findMany({
        where: searchString ? queryFilter : undefined,
        skip: (Number(page) - 1) * Number(limit),
        take: Number(limit),
    });

    const petListCount = await prisma.pet.count({
        where: searchString ? queryFilter : undefined,
    })

    return NextResponse.json({
        data: petList,
        pagination: {
            currentPage: page,
            totalItems: petListCount,
            totalPages: petListCount<limit ? 1 : Math.ceil(petListCount/limit),
        }
    });
}

export async function POST(req: Request) {
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
