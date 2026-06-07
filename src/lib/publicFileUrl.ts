const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function resolvePublicFileUrl(inputUrl: string): string {
  if (/^https?:\/\//i.test(inputUrl)) {
    return inputUrl;
  }

  const normalizedPath = inputUrl
    .replace(/^\.+\//, "/")
    .replace(/^\/+/, "/")
    .replace(/\/\/{2,}/g, "/");

  const basePath = BASE_PATH.replace(/\/$/, "");
  return `${basePath}${normalizedPath}`;
}