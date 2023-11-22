import { petSchema } from "@/lib/schemas";

export function createPetValidator(body: any) {
    const validationResult = petSchema.safeParse(body);
    
    if(!validationResult.success) {
        const { errors } = validationResult.error;

        return {
            success: false,
            error: {
                field: errors[0].path[0],
                message: errors[0].message,
            },
        };
    }

    return {
        success: true,
        data: validationResult.data,
    }
}
