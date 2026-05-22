export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const prefixPath = (path) => {
  if (path.startsWith('http')) return path;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${p}`;
};
