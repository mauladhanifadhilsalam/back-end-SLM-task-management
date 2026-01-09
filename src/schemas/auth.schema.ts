import { RoleType } from "@prisma/client";
import { z } from "zod";
import { registerSchema } from "../openapi/registry";

const loginSchema = registerSchema(
  "AuthLoginInput",
  z
    .object({
      email: z.email(),
      password: z.string(),
    })
    .openapi({ description: "Credentials required to obtain an access token." }),
);

const authTokenResponseSchema = registerSchema(
  "AuthTokenResponse",
  z
    .object({
      token: z.string().openapi({ description: "JWT access token." }),
      token_type: z.literal("Bearer").default("Bearer"),
      expires_in: z.number(),
      role: z.nativeEnum(RoleType),
    })
    .openapi({ description: "Access token payload returned after a successful login." }),
);

const refreshTokenRequestSchema = registerSchema(
  "AuthRefreshTokenRequest",
  z
    .object({
      refreshToken: z.string().optional().openapi({
        description: "Optional refresh token when not provided via cookie or header.",
      }),
    })
    .openapi({
      description: "Optional body if the refresh token is not sent via cookie or header.",
    }),
);

const authProfileResponseSchema = registerSchema(
  "AuthProfileResponse",
  z
    .object({
      id: z.number().int().positive(),
      fullName: z.string(),
      email: z.email(),
      role: z.nativeEnum(RoleType),
      projectRole: z.string().nullable(),
      isActive: z.boolean(),
    })
    .openapi({ description: "Authenticated user's basic profile details." }),
);

export {
  loginSchema,
  authTokenResponseSchema,
  refreshTokenRequestSchema,
  authProfileResponseSchema,
};
