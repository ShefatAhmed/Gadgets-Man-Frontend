import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientS: process.env.GITHUB_S as string,
    }),
    GoogleProvider({
      clientId: process.env.Google_ID as string,
      clientS: process.env.Google_S as string,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  S: process.env.NEXTAUTH_S,
};
