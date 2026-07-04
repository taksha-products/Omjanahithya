import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

export default function Breadcrumb({ items, light = false }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={light ? 'mb-0' : 'mb-6'}>
      <ol
        className={`flex flex-wrap items-center gap-1 text-sm ${
          light ? 'text-white/50' : 'text-text-muted'
        }`}
      >
        <li>
          <Link
            href="/"
            className={`flex items-center gap-1 transition-colors ${
              light ? 'text-white/50 hover:text-white' : 'hover:text-primary'
            }`}
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <ChevronRight
              className={`h-4 w-4 ${light ? 'text-white/30' : ''}`}
              aria-hidden="true"
            />
            {item.href ? (
              <Link
                href={item.href}
                className={`transition-colors ${
                  light ? 'text-white/50 hover:text-white' : 'hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`font-medium ${light ? 'text-white' : 'text-text-main'}`}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
