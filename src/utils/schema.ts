import {z} from 'zod';

export const GifSchema = z.object({
    id: z.string(),
    title: z.string(),
    url: z.string().url(),
});