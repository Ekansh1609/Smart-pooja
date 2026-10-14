import { cn } from '../lib/utils';

export function SectionHeader({ title, subtitle, centered = true, className, light = false }) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      {subtitle && (
        <span
          className={cn(
            'block font-sans text-sm font-bold tracking-widest uppercase mb-3',
            light ? 'text-secondary' : 'text-primary/80'
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-5xl font-serif font-bold relative inline-block pb-4',
          light ? 'text-white' : 'text-foreground'
        )}
      >
        {title}
        <span
          className={cn(
            'absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full',
            light ? 'bg-secondary' : 'bg-primary'
          )}
        />
      </h2>
    </div>
  );
}
