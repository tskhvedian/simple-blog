import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = nextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
});

export {handler as GET, handler as POST}