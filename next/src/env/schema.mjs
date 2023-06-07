import { z } from "zod";

const requiredForProduction = () =>
  process.env.NODE_ENV === "production"
    ? z.string().min(1).trim()
    : z.string().min(1).trim().optional();

function stringToBoolean() {
  return z.preprocess((str) => str === "true", z.boolean());
}

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "test", "production"]),
  PLATFORM_URL: z.string().url().optional(),
});

/**
 * You can't destruct `process.env` as a regular object in the Next.js
 * middleware, so you have to do it manually here.
 * @type {{ [k in keyof z.input<typeof serverSchema>]: string | undefined }}
 */
export const serverEnv = {
  DATABASE_URL: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV,
  PLATFORM_URL: process.env.PLATFORM_URL,
};

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
  NEXT_PUBLIC_VERCEL_ENV: z.enum(["production", "preview", "development"]),
  NEXT_PUBLIC_FORCE_AUTH: stringToBoolean(),
  NEXT_PUBLIC_FF_MOCK_MODE_ENABLED: stringToBoolean(),
  NEXT_PUBLIC_VERCEL_URL: z.string().optional(),
  NEXT_PUBLIC_BACKEND_URL: z.string().url()
});

/**
 * You can't destruct `process.env` as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.input<typeof clientSchema>]: string | undefined }}
 */
export const clientEnv = {
  NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV ?? "development",
  NEXT_PUBLIC_FORCE_AUTH: process.env.NEXT_PUBLIC_FORCE_AUTH,
  NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL ?? "http://localhost:8080",
  NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  NEXT_PUBLIC_FF_MOCK_MODE_ENABLED: process.env.NEXT_PUBLIC_FF_MOCK_MODE_ENABLED
};
