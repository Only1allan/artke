import { prisma } from "@/_db/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { envValidate } from "@/_lib/envValidate";

export const authOptions : NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GoogleProvider({
            clientId: envValidate.GOOGLE_CLIENT_ID,
            clientSecret: envValidate.GOOGLE_CLIENT_SECRET
        })

    ]
}

const handler = NextAuth(authOptions);

export { handler }
