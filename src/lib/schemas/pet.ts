import { z } from "zod";

const filterSpecialCharsRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;
const dateStringRegex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
const phoneRegex = /^[1-9]{2}(?:[2-8]|9[0-9])[0-9]{3}[0-9]{4}$/;

export const petSchema = z.object({
  id: z
    .string()
    .optional(),
  name: z
    .string()
    .min(2).max(30)
    .regex(filterSpecialCharsRegex)
    .refine(s => s.trim().length != 0, 'Nome inválido'),
  owner: z
    .string()
    .min(2).max(30)
    .regex(filterSpecialCharsRegex)
    .refine(s => s.trim().length != 0, 'Nome inválido'),
  type: z
    .enum(["gato", "cachorro"]),
  breed: z
    .string()
    .min(2).max(30)
    .regex(filterSpecialCharsRegex)
    .refine(s => s.trim().length != 0, 'Nome inválido'),
  phone: z
    .string()
    .min(11).max(11)
    .regex(phoneRegex),
  birthdate: z
    .string()
    .min(10)
    .regex(dateStringRegex, "Invalid date string format, the correct format is yyyy-mm-dd"),
});

export type PetType = z.infer<typeof petSchema> & { id: string }
