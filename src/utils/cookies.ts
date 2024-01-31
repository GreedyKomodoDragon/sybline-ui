export function removeCookie(cookieName: string): void {
  // Check if the document object is defined (to avoid issues in non-browser environments)
  if (typeof document !== "undefined") {
    // Set the expiration date in the past to remove the cookie
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
