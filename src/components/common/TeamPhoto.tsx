'use client';

import { useMemo, useState } from 'react';

type TeamPhotoProps = {
  name: string;
  sources?: Array<string | undefined>;
  className?: string;
};

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export default function TeamPhoto({ name, sources = [], className = '' }: TeamPhotoProps) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const slug = toSlug(name);

  const photoSources = useMemo(
    () =>
      Array.from(
        new Set(
          [
            ...sources,
            `/images/team/${slug}.jpg`,
            `/images/team/${slug}.png`,
            `/images/portfolio/${slug}.jpg`,
            `/images/portfolio/${slug}.png`,
          ].filter(Boolean) as string[],
        ),
      ),
    [slug, sources],
  );

  const currentSource = photoSources[sourceIndex];

  return (
    <div className={`relative overflow-hidden bg-slate-950 text-white ${className}`}>
      {currentSource ? (
        <img
          src={currentSource}
          alt={name}
          className="h-full w-full object-cover object-top"
          onError={() => setSourceIndex((current) => current + 1)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-lg font-black">{getInitials(name)}</div>
      )}
    </div>
  );
}
