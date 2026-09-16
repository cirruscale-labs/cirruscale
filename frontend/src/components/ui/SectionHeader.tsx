interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
  tag?: string;
}

export default function SectionHeader({ title, subtitle, centered = false, tag }: Props) {
  const align = centered ? "text-center" : "text-left";
  const maxW = centered ? "max-w-2xl mx-auto" : "";

  return (
    <div className={align}>
      {tag && (
        <p className="text-brand-accent text-sm font-semibold uppercase tracking-wider mb-3">
          {tag}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold text-brand-primary leading-tight ${maxW}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-brand-muted text-lg leading-relaxed ${maxW} ${centered ? "" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
