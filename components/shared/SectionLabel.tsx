type SectionLabelVariant = 'accent' | 'primary' | 'glass';

interface SectionLabelProps {
  children: string;
  variant?: SectionLabelVariant;
  className?: string;
}

const variantClasses: Record<SectionLabelVariant, string> = {
  accent: 'bg-accent/10 text-accent border-accent/30',
  primary: 'bg-primary/10 text-primary border-primary/30',
  glass: 'glass-card border-white/10 text-dark-muted',
};

export default function SectionLabel({
  children,
  variant = 'accent',
  className = '',
}: SectionLabelProps) {
  return (
    <span
      className={`section-label inline-block rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
