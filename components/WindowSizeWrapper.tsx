// components/WindowSizeWrapper.jsx
'use client';

import dynamic from 'next/dynamic';

const WindowSize = dynamic(() => import('@/components/WindowSize'), {
  ssr: false,
});

export default function WindowSizeWrapper() {
  return process.env.NODE_ENV === 'development' ? <WindowSize /> : null;
}