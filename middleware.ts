// TODO: Re-enable after Design Mode changes
// import { clerkMiddleware } from "@clerk/nextjs/server";

// All routes are public on the marketing site.
// Clerk is only used to detect if the user is signed in (for hero redirect).
// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//   ],
// };

export default function middleware() {
  // Disabled for Design Mode
}

export const config = {
  matcher: [],
};
