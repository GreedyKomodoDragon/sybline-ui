export function removeCookie(cookieName: string): void {
  // Check if the document object is defined (to avoid issues in non-browser environments)
  if (typeof document !== "undefined") {
    // Set the expiration date in the past to remove the cookie
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}

export function getCookie(name: string): string {
  const decodedName = encodeURIComponent(name) + "=";
  const cookiesArray = document.cookie.split(';');

  for (let i = 0; i < cookiesArray.length; i++) {
    let cookie = cookiesArray[i].trim();

    if (cookie.indexOf(decodedName) === 0) {
      return decodeURIComponent(cookie.substring(decodedName.length, cookie.length));
    }
  }

  return "";
}

export function setCookie(name: string, value: string, days: number = 365) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  const cookieValue = encodeURIComponent(value) + "; expires=" + expirationDate.toUTCString() + "; path=/";

  document.cookie = name + "=" + cookieValue;
}
