import { petSchema } from "@/lib/schemas";

export function createPetValidator(body: any) {
    const validationResult = petSchema.safeParse(body);
    
    if(!validationResult.success) {
        const { errors } = validationResult.error;

        return {
            success: false,
            error: {
                message: "Dados inválidos",
                errors,
            },
        };
    }

    return {
        success: true,
        data: validationResult.data,
    }
}