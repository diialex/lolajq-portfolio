export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function asset(path: string): string {
  if (path.startsWith('http')) return path;
  if (basePath && path.startsWith(basePath)) return path;
  return `${basePath}${path}`;
}