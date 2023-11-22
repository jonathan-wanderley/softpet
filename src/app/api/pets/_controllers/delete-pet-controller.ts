import prisma from "@/lib/prisma";

export async function deletePetController(_: Request, { params }: FindPetByIdDto) {
    await prisma.pet.delete({ where: { id: params.petId } });

    return new Response(null, { status: 204 })
}
