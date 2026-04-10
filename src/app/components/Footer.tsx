import { MapPin, ExternalLink } from "lucide-react";
import cinvestavLogo from "../../../Ponentes/cinvestavipn_logo-Photoroom.png";
import { SectionGapParticles } from "./SectionGapParticles";

const footerLinks = [
  {
    title: "Evento",
    links: [
      { label: "Sobre el taller", href: "#about" },
      { label: "Programa", href: "#program" },
      { label: "Ponencias destacadas", href: "#talks" },
      { label: "Preguntas frecuentes", href: "#faq" },
    ],
  },
  {
    title: "Instituciones",
    links: [
      { label: "Cinvestav – IPN", href: "https://www.cinvestav.mx", external: true },
      { label: "CIC - IPN", href: "https://www.cic.ipn.mx", external: true },
      { label: "Departamento de Computación", href: "https://cs.cinvestav.mx", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #070b1a 0%, #030610 100%)",
        borderTop: "1px solid rgba(232,121,249,0.08)",
      }}
    >
      <SectionGapParticles className="inset-x-0 bottom-0 h-[22%]" nodeCount={16} opacity={0.16} />
      <SectionGapParticles className="right-0 top-[18%] h-[42%] w-[26%] hidden xl:block" nodeCount={14} opacity={0.12} />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3.5 mb-5">
              <img
                src={cinvestavLogo}
                alt="CINVESTAV"
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 8px rgba(20, 184, 166, 0.3))",
                  flexShrink: 0,
                }}
              />
              <div
                className="self-stretch w-px opacity-20"
                style={{ background: "linear-gradient(180deg, transparent, #14b8a6, transparent)" }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#f1f5f9",
                    lineHeight: 1.3,
                  }}
                >
                  2º Taller de IA y AA para la Medicina de Precisión y de Sistemas
                </div>
                <div
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "0.62rem",
                    color: "#14b8a6",
                    letterSpacing: "0.1em",
                    marginTop: "3px",
                  }}
                >
                  CINVESTAV – IPN · ABRIL 2026
                </div>
              </div>
            </div>

            <p
              className="mb-6"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.86rem",
                lineHeight: 1.78,
                color: "#475569",
              }}
            >
              Organizado por el Centro de Investigación y de Estudios Avanzados del Instituto
              Politécnico Nacional (Cinvestav – IPN) y el Centro de Investigación en Computación
              (CIC - IPN).
            </p>

            <div
              className="p-5 rounded-2xl mb-6"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(232,121,249,0.12)",
              }}
            >
              <p
                className="mb-1"
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "0.65rem",
                  color: "#e879f9",
                  letterSpacing: "0.1em",
                }}
              >
                COORDINACIÓN DEL TALLER
              </p>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 500,
                  fontSize: "0.88rem",
                  color: "#94a3b8",
                  lineHeight: 1.6,
                }}
              >
                Cinvestav – IPN
                <br />
                Departamento de Computación
                <br />
                Av. Instituto Politécnico Nacional 2508, CDMX
              </p>
              <p
                className="mt-3"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.78rem",
                  color: "#334155",
                  fontStyle: "italic",
                }}
              >
                Información de contacto detallada: pendiente de confirmación.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <MapPin size={14} style={{ color: "#e879f9", flexShrink: 0, marginTop: "2px" }} />
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.82rem",
                  color: "#475569",
                  lineHeight: 1.6,
                }}
              >
                Lunes 20 de abril · Auditorio Jorge Suárez Díaz,
                <br />
                Departamento de Computación, Cinvestav
              </span>
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4
                className="mb-4"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  color: "#94a3b8",
                  letterSpacing: "0.08em",
                }}
              >
                {col.title.toUpperCase()}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-1.5 transition-colors duration-200"
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.875rem",
                        color: "#475569",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#e879f9";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#475569";
                      }}
                    >
                      {link.label}
                      {"external" in link && link.external && <ExternalLink size={11} style={{ opacity: 0.5 }} />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className="w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(232,121,249,0.18), rgba(56,189,248,0.18), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.75rem",
            color: "#1e293b",
          }}
        >
          © 2026 Cinvestav – IPN · Instituto Politécnico Nacional. Sitio en actualización con base
          en información académica confirmada del taller 2026.
        </p>

        <div className="flex items-center gap-2">
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "#22c55e",
              boxShadow: "0 0 6px #22c55e",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.65rem",
              color: "#1e293b",
              letterSpacing: "0.08em",
            }}
          >
            INFORMACIÓN ACADÉMICA CONFIRMADA · 2026
          </span>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>
    </footer>
  );
}
