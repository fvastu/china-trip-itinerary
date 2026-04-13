import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const cities = [
  { label: "Pechino", slug: "pechino" },
  { label: "Luoyang", slug: "luoyang" },
  { label: "Xi'An", slug: "xian" },
  { label: "Chengdu", slug: "chengdu" },
  { label: "Zhangjiajie", slug: "zhangjiajie" },
  { label: "Guilin", slug: "guilin" },
  { label: "Shanghai", slug: "shanghai" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
          {/* Left: back button or logo */}
          {!isHome ? (
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors -ml-1 p-1"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-body text-sm">Indietro</span>
            </button>
          ) : (
            <Link to="/" className="font-display text-base font-bold text-foreground hover:text-primary transition-colors">
              🇨🇳 Cina 2026
            </Link>
          )}

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {cities.map(c => (
              <Link
                key={c.slug}
                to={`/${c.slug}`}
                className="font-body text-xs tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {c.label}
              </Link>
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
                <Link
                  key={c.slug}
                  to={`/${c.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-2xl text-foreground hover:text-primary transition-colors"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
