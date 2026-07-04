import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProgramCardButtonProps {
  href?: string;
  label?: string;
}

export function ProgramCardButton({
  href = '/admissions',
  label = 'New Admissions',
}: ProgramCardButtonProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="
        group/btn
        relative inline-flex items-center
        h-10 w-10 rounded-full overflow-hidden
        border-2 border-accent
        hover:w-40 hover:bg-primary hover:border-primary
        group-hover/card:w-40 group-hover/card:bg-primary group-hover/card:border-primary
        transition-[width,background-color,border-color]
        duration-300 ease-out
      "
    >
      <span
        className="
          absolute left-4
          text-xs font-bold whitespace-nowrap text-white
          opacity-0 -translate-x-2
          group-hover/btn:opacity-100 group-hover/btn:translate-x-0
          group-hover/card:opacity-100 group-hover/card:translate-x-0
          transition-all duration-200 ease-out delay-100
        "
      >
        {label}
      </span>

      <span
        className="
          absolute right-3 top-1/2 z-10 -translate-y-1/2 shrink-0
          text-accent
          group-hover/btn:text-white group-hover/card:text-white
          transition-colors duration-200
        "
      >
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  );
}
