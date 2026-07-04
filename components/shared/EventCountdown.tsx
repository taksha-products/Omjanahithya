'use client';

import { useEffect, useState } from 'react';

export default function EventCountdown({ targetDate }: { targetDate: string }) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const target = new Date(targetDate);
    const diff = Math.ceil((target.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    setDays(Math.max(0, diff));
  }, [targetDate]);

  return (
    <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
      {days} days left
    </span>
  );
}
