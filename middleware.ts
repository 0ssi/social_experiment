import { withAuth } from "next-auth/middleware"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token)
  },
  {
    pages: {
        signIn: '/login',
        newUser: '/register'
    }
  }
)
export const config = { matcher: ["/", '/profile/:path*'] }