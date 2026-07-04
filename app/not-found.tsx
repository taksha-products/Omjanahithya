import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-bold text-text-main md:text-3xl">
        Page Not Found
      </h1>
      <p className="mt-2 max-w-md text-text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        <Home className="h-5 w-5" />
        Back to Home
      </Link>
    </div>
  );
}
