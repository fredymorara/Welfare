export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4100";

// WelfareClient — the group portal members sign in to.
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3100";

export const SIGN_IN_URL = `${APP_URL}/auth/login`;
export const SIGN_UP_URL = `${APP_URL}/auth/register`;
