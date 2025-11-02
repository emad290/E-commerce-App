import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { data } = await axios.post(
            "https://ecommerce.routemisr.com/api/v1/auth/signin",
            {
              email: credentials.email,
              password: credentials.password,
            }
          );

          if (data?.message === "success") {
            return {
              id: data.user._id,
              name: data.user.name,
              email: data.user.email,
              token: data.token, // ✅ حفظ التوكن
            };
          }
          return null;
        } catch (error) {
          console.log("Login error: ", error.response?.data);
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
secret: process.env.AUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.accessToken = user.token; 
      return token;
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      return session;
    },
  },

  pages: {
    signIn: "/login", // ✅ يستخدم صفحة Login بتاعتك
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
