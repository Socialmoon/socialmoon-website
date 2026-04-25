const DEFAULT_SITE_URL = process.env.NODE_ENV === 'production'
  ? 'https://socialmoon.in'
  : 'http://localhost:3000';

const normalizeSiteUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
};

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL
);
