import { petSchema } from "@/lib/schemas";

export function updatePetValidator(body: any) {
    const validationResult = petSchema.partial().safeParse(body);
    
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