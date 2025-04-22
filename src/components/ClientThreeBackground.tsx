import { lazy } from 'react';

const ThreeBackground = lazy(() => import('./ThreeBackground'));

export default function ClientThreeBackground() {
  return <ThreeBackground />;
} 