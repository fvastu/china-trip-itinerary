import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const cities = [
  { label: "Pechino", id: "pechino" },
  { label: "Luoyang", id: "luoyang" },
  { label: "Xi'An", id: "xian" },
  { label: "Chengdu", id: "chengdu" },
  { label: "Zhangjiajie", id: "zhangjiajie" },
  { label: "Guilin", id: "guilin" },
  { label: "Shanghai", id: "shanghai" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-14">
          <button onClick={() => scrollTo("top")} className="font-display text-lg font-bold text-foreground hover:text-primary transition-colors">
            🇨🇳 Cina 2026
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {cities.map(c => (
              <button
                key={c.id}
                onClick={() => scrollTo(c.id)}
                className="font-body text-xs tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-background/98 backdrop-blur-lg pt-16"
          >
            <div className="flex flex-col items-center gap-6 px-6 pb-12 pt-12">
              {cities.map(c => (
                <button
                  key={c.id}
                  onClick={() => scrollTo(c.id)}
                  className="font-display text-2xl text-foreground hover:text-primary transition-colors"
                >
                  {c.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
