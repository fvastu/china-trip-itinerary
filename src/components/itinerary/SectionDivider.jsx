export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-12 md:py-16">
      <div className="flex items-center gap-4">
        <div className="w-12 h-[1px] bg-border" />
        <span className="text-muted-foreground/30 text-lg">✦</span>
        <div className="w-12 h-[1px] bg-border" />
      </div>
    </div>
  );
}