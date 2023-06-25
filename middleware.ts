import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: ["/", "/about", "/keystone-runs"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
