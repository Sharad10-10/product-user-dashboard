import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";


const authHandler = NextAuth({  
    providers : [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username : {label: "Username", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials) {
                console.log(credentials)
                try{
                   const response = await fetch(`http://localhost:3000/api/login `|| `${process.env.AUTH_URL}/api/login`, {
                    method : "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify({
                        username: credentials?.username,
                        password: credentials?.password
                    })
                   })

                   const data = await response.json()
                   console.log(data)

                   if(response.status === 200) {
                    return {
                      // id: data.result._id?.toString(),
                      username: data?.result?.username,
                      email: data?.result?.email,
                      img: data?.result?.img || "/noavatar.png",
                      isAdmin: data?.result?.isAdmin,
                    };
                   }
                   else {
                    return null
                   }



                }
                catch(error) {
                    // throw new Error(error)
                    console.log(error)
                }
            }
        })
    ],

    callbacks: {
      
        async jwt({ token, user }) {
          if (user) {
            token.id = user.id;
            token.username = user.username;
            token.email = user.email;
            token.img = user.img;
            token.isAdmin = user.isAdmin;
            
          }
          return token;
        },
       
        async session({ session, token, user }) {
          if (token) {
            session.user.id = token.id;
            session.user.username = token.username;
            session.user.email = token.email;
            session.user.img = token.img;
            session.user.isAdmin = token.isAdmin;
            
          }
          return session;
        }
      },

    pages : {
        signIn : '/login'
    },
    session: {
        strategy: "jwt"
      },
      secret: process.env.AUTH_SECRET_KEY
    

})

export {authHandler as GET, authHandler as POST}
