'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

function parseValue(value: string) {
  const match = value.match(/(\d+)/);
  if (!match) return { numeric: null, prefix: value, suffix: '' };
  const numeric = parseInt(match[1], 10);
  const [prefix, suffix] = value.split(match[1]);
  return { numeric, prefix, suffix };
}

export default function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { numeric, prefix, suffix } = parseValue(value);
  const [display, setDisplay] = useState(value);

  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const rounded = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (numeric === null) return;
    if (isInView) spring.set(numeric);
  }, [isInView, numeric, spring]);

  useEffect(() => {
    if (numeric === null) return;
    const unsub = rounded.on('change', (v) => {
      setDisplay(`${prefix}${v}${suffix}`);
    });
    return unsub;
  }, [numeric, prefix, suffix, rounded]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
