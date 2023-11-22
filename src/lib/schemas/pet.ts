import { z } from "zod";

export const petSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2).max(30).regex(/^[^*|\":<>[\]{}`\\()';@!#%*?&$]+$/),
  owner: z.string().min(2).max(30).regex(/^[^*|\":<>[\]{}`\\()';@!#%*?&$]+$/),
  type: z.enum(["gato", "cachorro"]),
  breed: z.string().min(2).max(30).regex(/^[^*|\":<>[\]{}`\\()';@!#%*?&$]+$/),
  phone: z.string().min(11).max(11),
  birthdate: z.string().min(10),
});

export type PetType = z.infer<typeof petSchema> & { id: string }
