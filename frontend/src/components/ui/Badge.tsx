interface Props {
  label: string;
}

export default function Badge({ label }: Props) {
  return (
    <span className="inline-block bg-brand-accent/10 text-brand-accent text-xs font-medium px-2.5 py-0.5 rounded-full">
      {label}
    </span>
  );
}
