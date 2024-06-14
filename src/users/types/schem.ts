import {z} from 'zod';
import { patterns } from '../../constants';

export const schema = z.object({
    name:z.string().min(1,{message:'Required'}),
    email: z
    .string()
    .min(1, {message:'email is required'})
    .refine((text)=> patterns.email.test(text), {message:'Email invalid'}),
})