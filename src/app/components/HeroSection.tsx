import { NeuralCanvas } from "./NeuralCanvas";
import { ArrowRight, ChevronDown } from "lucide-react";
import cinvestavLogo from "../../../Ponentes/cinvestavipn_logo-Photoroom.png";

const scienceChips = [
  { label: "Medicina de Precisión", color: "#e879f9" },
  { label: "scRNA-seq", color: "#a855f7" },
  { label: "Inmunoterapia", color: "#38bdf8" },
  { label: "Biología Computacional", color: "#06b6d4" },
  { label: "Modelado Estructural", color: "#f472b6" },
  { label: "Infección Viral", color: "#818cf8" },
  { label: "Aprendizaje Automático", color: "#e879f9" },
];

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{
        background: "linear-gradient(135deg, #050714 0%, #0a0f2e 40%, #130722 70%, #0d0a1e 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-55">
        <NeuralCanvas nodeCount={65} dark />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full opacity-18"
          style={{ background: "radial-gradient(circle, #e879f9 0%, transparent 70%)", filter: "blur(70px)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[650px] h-[650px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)", filter: "blur(70px)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)", filter: "blur(90px)" }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,121,249,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-28 right-12 opacity-25 hidden lg:block pointer-events-none">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: `${280 - i * 52}px`,
              height: `${280 - i * 52}px`,
              top: `${i * 26}px`,
              left: `${i * 26}px`,
              borderColor: i % 2 === 0 ? "rgba(232,121,249,0.35)" : "rgba(56,189,248,0.3)",
              animation: `spin ${14 + i * 4}s linear infinite ${i % 2 === 0 ? "" : "reverse"}`,
            }}
          />
        ))}
        <div
          className="absolute rounded-full"
          style={{
            width: "12px",
            height: "12px",
            top: "52px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#e879f9",
            boxShadow: "0 0 14px #e879f9",
          }}
        />
      </div>

      <div className="absolute bottom-36 left-10 opacity-20 hidden lg:block pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <polygon
            points="50,4 96,28 96,72 50,96 4,72 4,28"
            fill="none"
            stroke="url(#hexGrad)"
            strokeWidth="1.2"
          />
          <polygon
            points="50,18 82,35 82,65 50,82 18,65 18,35"
            fill="none"
            stroke="url(#hexGrad2)"
            strokeWidth="0.8"
          />
          <defs>
            <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e879f9" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <linearGradient id="hexGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(20, 184, 166, 0.08)",
              border: "1px solid rgba(20, 184, 166, 0.25)",
              backdropFilter: "blur(10px)",
            }}
          >
            <img
              src={cinvestavLogo}
              alt="CINVESTAV"
              style={{ width: "16px", height: "16px", objectFit: "contain", opacity: 0.9 }}
            />
            <span
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.72rem",
                color: "#14b8a6",
                letterSpacing: "0.1em",
              }}
            >
              CINVESTAV · ABRIL 2026
            </span>
          </div>

          <h1
            className="mb-7 max-w-5xl"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.65rem, 3.4vw, 2.85rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            <span className="block">2º Taller de</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #e879f9 0%, #a855f7 45%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Inteligencia Artificial
            </span>
            <span className="block">y Aprendizaje Automático</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #c084fc 0%, #60a5fa 55%, #22d3ee 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              para la Medicina de Precisión y de Sistemas
            </span>
          </h1>

          <p
            className="mb-9 max-w-xl"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "rgba(148, 163, 184, 0.75)",
            }}
          >
            Un espacio académico para explorar aplicaciones reales de inteligencia artificial y
            aprendizaje automático en medicina de precisión, biología computacional e
            investigación de sistemas.
          </p>

          <div className="flex flex-wrap gap-3 mb-4">
            {[
              { text: "20 y 21 de abril de 2026", accent: "#e879f9" },
              { text: "Cinvestav – IPN, CIC - IPN", accent: "#38bdf8" },
            ].map((chip) => (
              <span
                key={chip.text}
                className="px-4 py-1.5 rounded-full"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  background: "rgba(255,255,255,0.06)",
                  border: `1px solid ${chip.accent}35`,
                  color: "#cbd5e1",
                  backdropFilter: "blur(8px)",
                }}
              >
                {chip.text}
              </span>
            ))}
          </div>

          <p
            className="mb-10 pl-1"
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.72rem",
              color: "#475569",
              letterSpacing: "0.04em",
              lineHeight: 1.6,
            }}
          >
            Programa confirmado del lunes 20 de abril · Auditorio Jorge Suárez Díaz,
            <br />
            Departamento de Computación, Cinvestav
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#program"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                background: "linear-gradient(135deg, #e879f9 0%, #a855f7 50%, #38bdf8 100%)",
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.45), 0 4px 15px rgba(0,0,0,0.3)",
              }}
            >
              Ver programa
              <ArrowRight size={17} />
            </a>
            <a
              href="#talks"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                color: "#e2e8f0",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(10px)",
              }}
            >
              Conocer ponencias
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center relative">
          <div className="relative flex items-center justify-center">
            <div
              className="absolute rounded-full"
              style={{
                width: "420px",
                height: "420px",
                top: "-12px",
                left: "-12px",
                background: "conic-gradient(from 0deg, #e879f9, #a855f7, #38bdf8, #06b6d4, #e879f9)",
                padding: "1.5px",
                borderRadius: "50%",
                animation: "spin 14s linear infinite",
              }}
            >
              <div className="w-full h-full rounded-full" style={{ background: "#050714" }} />
            </div>

            <div
              className="w-96 h-96 rounded-full flex items-center justify-center relative z-10"
              style={{
                background:
                  "radial-gradient(ellipse at 35% 35%, rgba(232,121,249,0.2), rgba(168,85,247,0.12), rgba(6,182,212,0.08), transparent 72%)",
                border: "1px solid rgba(232,121,249,0.18)",
                boxShadow: "0 0 80px rgba(232,121,249,0.12), 0 0 160px rgba(56,189,248,0.08)",
              }}
            >
              <div className="text-center px-6">
                <div
                  className="mx-auto w-20 h-20 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: "linear-gradient(135deg, rgba(232,121,249,0.2), rgba(56,189,248,0.1))",
                    border: "1px solid rgba(232,121,249,0.3)",
                    boxShadow: "0 0 30px rgba(232,121,249,0.15)",
                  }}
                >
                  <svg viewBox="0 0 48 48" width="44" height="44" fill="none">
                    <path
                      d="M12 6 C16 14, 32 14, 36 22 C32 30, 16 30, 12 38"
                      stroke="#e879f9"
                      strokeWidth="1.8"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M36 6 C32 14, 16 14, 12 22 C16 30, 32 30, 36 38"
                      stroke="#38bdf8"
                      strokeWidth="1.8"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <line x1="14" y1="10" x2="34" y2="10" stroke="#a855f7" strokeWidth="1" opacity="0.7" />
                    <line x1="12.5" y1="18" x2="35.5" y2="18" stroke="#a855f7" strokeWidth="1" opacity="0.7" />
                    <line x1="12.5" y1="26" x2="35.5" y2="26" stroke="#a855f7" strokeWidth="1" opacity="0.7" />
                    <line x1="14" y1="34" x2="34" y2="34" stroke="#a855f7" strokeWidth="1" opacity="0.7" />
                    <circle cx="14" cy="10" r="2" fill="#e879f9" opacity="0.9" />
                    <circle cx="34" cy="10" r="2" fill="#38bdf8" opacity="0.9" />
                    <circle cx="12.5" cy="26" r="2" fill="#e879f9" opacity="0.9" />
                    <circle cx="35.5" cy="26" r="2" fill="#38bdf8" opacity="0.9" />
                  </svg>
                </div>
                <div
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "0.65rem",
                    color: "#e879f9",
                    letterSpacing: "0.18em",
                    opacity: 0.85,
                  }}
                >
                  MEDICINA · IA · SISTEMAS
                </div>
              </div>

              {scienceChips.slice(0, 5).map((chip, i) => {
                const positions = [
                  { top: "6%", left: "50%" },
                  { top: "28%", left: "94%" },
                  { top: "70%", left: "88%" },
                  { top: "88%", left: "40%" },
                  { top: "22%", left: "4%" },
                ];
                const pos = positions[i];
                return (
                  <div
                    key={chip.label}
                    className="absolute px-3 py-1.5 rounded-full whitespace-nowrap"
                    style={{
                      top: pos.top,
                      left: pos.left,
                      transform: "translate(-50%, -50%)",
                      background: "rgba(5,7,20,0.88)",
                      border: `1px solid ${chip.color}50`,
                      backdropFilter: "blur(10px)",
                      boxShadow: `0 0 12px ${chip.color}28`,
                      fontFamily: "Space Mono, monospace",
                      fontSize: "0.6rem",
                      color: chip.color,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {chip.label}
                  </div>
                );
              })}
            </div>

            <div
              className="absolute -bottom-6 -left-10 px-5 py-3 rounded-2xl"
              style={{
                background: "rgba(5,7,20,0.88)",
                border: "1px solid rgba(232,121,249,0.22)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <div
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  color: "#e879f9",
                }}
              >
                20–21 Abr
              </div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", color: "#64748b" }}>
                Abril de 2026
              </div>
            </div>

            <div
              className="absolute -top-4 -right-6 px-5 py-3 rounded-2xl"
              style={{
                background: "rgba(5,7,20,0.88)",
                border: "1px solid rgba(56,189,248,0.22)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <div
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  color: "#38bdf8",
                }}
              >
                2ª Ed.
              </div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", color: "#64748b" }}>
                Cinvestav – IPN
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.68rem",
            color: "#94a3b8",
            letterSpacing: "0.15em",
          }}
        >
          EXPLORAR
        </span>
        <ChevronDown size={16} style={{ color: "#94a3b8" }} />
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
