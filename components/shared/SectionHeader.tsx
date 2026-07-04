import SectionLabel from '@/components/shared/SectionLabel';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  labelVariant?: 'accent' | 'primary' | 'glass';
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
  labelVariant = 'accent',
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <SectionLabel
        variant={labelVariant}
        className={centered ? 'mx-auto' : ''}
      >
        {label}
      </SectionLabel>
      <h2 className={light ? 'text-white' : ''}>{title}</h2>
      {subtitle && (
        <p
          className={`body-lg mt-4 ${light ? 'text-white/80' : ''} ${
            centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
