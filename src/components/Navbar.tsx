import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "À propos", id: "a-propos" },
  { label: "Recettes", id: "recettes" },
  { label: "Tarifs", id: "tarifs" },
  { label: "Contact", id: "contact" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-xl font-bold text-primary-foreground"
        >
          Poivre & Sel
        </button>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="font-body text-sm tracking-widest uppercase text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-foreground/90 backdrop-blur-md px-6 pb-6 space-y-4">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => { scrollTo(l.id); setOpen(false); }}
              className="block font-body text-sm tracking-widest uppercase text-primary-foreground/80 hover:text-primary-foreground"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;