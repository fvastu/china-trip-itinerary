export default function Footer() {
  return (
    <footer className="py-16 md:py-24 text-center">
      <div className="max-w-md mx-auto px-6">
        <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          一路平安
        </p>
        <p className="font-body text-sm text-muted-foreground italic mb-8">
          Buon viaggio
        </p>
        <div className="w-12 h-[1px] bg-border mx-auto mb-8" />
        <p className="font-body text-xs text-muted-foreground/50">
          🇨🇳 Cina 2026 · 19 Aprile – 2 Maggio
        </p>
      </div>
    </footer>
  );
}