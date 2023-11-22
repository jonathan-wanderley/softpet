import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

export async function getAllPetsController(request: NextRequest) {
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
