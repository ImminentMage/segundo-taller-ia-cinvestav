import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import cinvestavLogo from "../../../Ponentes/cinvestavipn_logo-Photoroom.png";

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Sobre el taller", href: "#about" },
  { label: "Programa", href: "#program" },
  { label: "Ponencias", href: "#talks" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(5, 7, 20, 0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-3.5 group shrink-0">
          <img
            src={cinvestavLogo}
            alt="CINVESTAV"
            style={{
              width: "36px",
              height: "36px",
              objectFit: "contain",
              filter: "drop-shadow(0 0 6px rgba(0, 188, 188, 0.35))",
              transition: "filter 0.3s ease",
            }}
            className="group-hover:[filter:drop-shadow(0_0_10px_rgba(0,188,188,0.55))]"
          />

          <div
            className="self-stretch w-px opacity-25"
            style={{ background: "linear-gradient(180deg, transparent, #38bdf8, transparent)" }}
          />

          <div className="flex flex-col justify-center" style={{ lineHeight: 1 }}>
            <span
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "0.97rem",
                color: "#f1f5f9",
                letterSpacing: "-0.01em",
              }}
            >
              2º TIAAA–MPS
            </span>
            <span
              style={{
                fontFamily: "Space Mono, monospace",
                fontWeight: 400,
                fontSize: "0.62rem",
                color: "#14b8a6",
                letterSpacing: "0.12em",
                marginTop: "3px",
              }}
            >
              CINVESTAV
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-all duration-300 hover:opacity-100 opacity-60"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "0.85rem",
                color: "#e2e8f0",
                letterSpacing: "0.01em",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block shrink-0">
          <a
            href="#program"
            className="px-5 py-2.5 rounded-full text-white transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "0.85rem",
              background: "linear-gradient(135deg, #0d9488, #0891b2, #6366f1)",
              boxShadow: "0 0 18px rgba(13, 148, 136, 0.35)",
            }}
          >
            Ver programa
          </a>
        </div>

        <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{
            background: "rgba(5, 7, 20, 0.97)",
            borderBottom: "1px solid rgba(20, 184, 166, 0.15)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 hover:text-white transition-colors py-1"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#program"
            className="px-5 py-2.5 rounded-full text-white text-center mt-2"
            style={{ background: "linear-gradient(135deg, #0d9488, #0891b2, #6366f1)" }}
            onClick={() => setOpen(false)}
          >
            Ver programa
          </a>
        </div>
      )}
    </nav>
  );
}
