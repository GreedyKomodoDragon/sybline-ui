import { sendRedirect, createMiddleware } from "@solidjs/start/server";
import { isLogin } from "./rest";
const unProtectedPaths = ["/login"];

export function getCookieValue(cookieString: string, cookieName: string): string | null {
    const cookies = cookieString.split(';').map(cookie => cookie.trim());
    
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }
  
    return null;
  }

export default createMiddleware({
  onRequest: [
    async (event) => {
      const { pathname } = new URL(event.request.url);
      const isProtected = !unProtectedPaths.some((protectedPath) =>
        pathname.endsWith(protectedPath)
      );

      if (!isProtected) {
        return;
      }

      const cookies = event.request.headers.get("cookie")
      if (!cookies) {
        console.log("no cookies:", cookies)
        return sendRedirect(event, "/login");
      }

      const token = getCookieValue(cookies, "syb-token");
      if (!token) {
        console.log("no syb-token")
        return sendRedirect(event, "/login");
      }

      const username = getCookieValue(cookies, "syb-username");
      if (!username) {
        console.log("no username")
        return sendRedirect(event, "/login");
      }

      if (await isLogin(username, token)) {
        return;
      }

      console.log("cannot login")
      return sendRedirect(event, "/login");
    },
  ],
});
