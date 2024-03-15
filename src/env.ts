import { z } from 'zod'

const envSchema = z.object({
  VITE_PAI_URL: z.string().url(),
})

export const env = envSchema.parse(import.meta.env)