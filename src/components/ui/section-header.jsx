import { cn } from '../../lib/utils';

export function SectionHeader({ title, subtitle, centered = true, className }) {
  return (
    <div className={cn('mb-12 space-y-4', centered && 'text-center', className)}>
      <div
        className={cn(
          'flex items-center gap-3 text-primary font-medium uppercase tracking-wider text-sm',
          centered && 'justify-center'
        )}
      >
        <span className="h-px w-8 bg-primary/50" />
        {subtitle}
        <span className="h-px w-8 bg-primary/50" />
      </div>
      <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">{title}</h2>
      <div className={cn('w-24 h-1 bg-primary rounded-full mt-4', centered && 'mx-auto')} />
    </div>
  );
}
