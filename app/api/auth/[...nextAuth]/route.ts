import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
  providers: [
    CredentialsProvider({

      name: "email",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "azmi@gmail.com" },
        password: { label: "Password", type: "password", placeholder: "password" }
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;
        console.log(username)
        console.log(password)

        const user = {
          name: "azmi",
          id: "1",
          username: "azmi@gmail.com"
        }

        if (user) {
          console.log(user)
          return user;
        }
        else {
          console.log(user)
          return null;
        }
      }

      //   db connect 

    })
  ]
})

export { handler as GET, handler as POST }