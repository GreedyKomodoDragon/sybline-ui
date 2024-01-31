import { sendRedirect, createMiddleware } from "@solidjs/start/server";
import { isLogged } from "./rest";
const unProtectedPaths = ["/login"];

export function getCookieValue(
  cookieString: string,
  cookieName: string
): string | null {
  const cookies = cookieString.split(";").map((cookie) => cookie.trim());

  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
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

      const cookies = event.request.headers.get("cookie");
      if (!cookies) {
        return sendRedirect(event, "/login");
      }

      const token = getCookieValue(cookies, "syb-token");
      if (!token) {
        return sendRedirect(event, "/login");
      }

      const username = getCookieValue(cookies, "syb-username");
      if (!username) {
        return sendRedirect(event, "/login");
      }

      try {
        if (await isLogged(username, token)) {
          return;
        }
      } catch (error) {
        return sendRedirect(event, "/login");
      }

      return sendRedirect(event, "/login");
    },
  ],
});
