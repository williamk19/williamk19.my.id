import { SpeedInsights } from '@vercel/speed-insights/react';
import { useRouter } from 'next/router';

export default function Layout() {
  const router = useRouter();

  return <SpeedInsights route={router.pathname} />;
}
