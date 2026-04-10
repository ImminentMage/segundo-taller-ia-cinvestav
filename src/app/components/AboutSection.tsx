import { FlaskConical, BrainCircuit, Network, Activity } from "lucide-react";

const pillars = [
  {
    icon: FlaskConical,
    title: "Investigación de frontera",
    desc: "Ponencias que integran bioinformática, modelado computacional y datos clínicos reales.",
    color: "#e879f9",
    bg: "rgba(232,121,249,0.07)",
    border: "rgba(232,121,249,0.18)",
  },
  {
    icon: BrainCircuit,
    title: "Aprendizaje automático aplicado",
    desc: "Modelos de ML para predicción terapéutica, clasificación molecular y análisis de señales.",
    color: "#a855f7",
    bg: "rgba(168,85,247,0.07)",
    border: "rgba(168,85,247,0.18)",
  },
  {
    icon: Network,
    title: "Biología de sistemas",
    desc: "Redes de señalización, dinámica tumoral y modelado de la respuesta inmune antitumoral.",
    color: "#38bdf8",
    bg: "rgba(56,189,248,0.07)",
    border: "rgba(56,189,248,0.18)",
  },
  {
    icon: Activity,
    title: "Medicina de precisión",
    desc: "Desde scRNA-seq y transcriptómica hasta predicción de respuesta a inmunoterapia.",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.07)",
    border: "rgba(6,182,212,0.18)",
  },
];

const stats = [
  { value: "2 días", label: "20 y 21 de abril", color: "#e879f9" },
  { value: "2026", label: "Edición actual", color: "#a855f7" },
  { value: "Cinvestav – IPN", label: "Sede principal", color: "#38bdf8" },
  { value: "Med. de Precisión", label: "Enfoque temático", color: "#06b6d4" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="biomed-bg-section relative overflow-hidden py-28"
      style={{
        background: "linear-gradient(180deg, #050714 0%, #0d0a1e 50%, #050714 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10 rounded-full"
          style={{ background: "radial-gradient(circle, #e879f9, transparent 70%)", filter: "blur(65px)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-8 rounded-full"
          style={{ background: "radial-gradient(circle, #38bdf8, transparent 70%)", filter: "blur(65px)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{
                background: "rgba(56,189,248,0.1)",
                border: "1px solid rgba(56,189,248,0.25)",
              }}
            >
              <span
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "0.7rem",
                  color: "#38bdf8",
                  letterSpacing: "0.12em",
                }}
              >
                SOBRE EL TALLER
              </span>
            </div>

            <div className="relative mb-6">
              <div
                className="absolute -top-3 right-[8%] h-4 w-24 rounded-full hidden md:block"
                style={{
                  background: "linear-gradient(135deg, rgba(232,121,249,0.95), rgba(168,85,247,0.85))",
                  opacity: 0.22,
                  filter: "blur(0.5px)",
                  zIndex: 0,
                }}
              />
              <div
                className="absolute top-[62%] left-[6%] h-3 w-20 rounded-full hidden md:block"
                style={{
                  background: "linear-gradient(135deg, rgba(56,189,248,0.95), rgba(6,182,212,0.9))",
                  opacity: 0.18,
                  filter: "blur(0.5px)",
                  zIndex: 0,
                }}
              />
              <h2
                className="relative z-10 max-w-3xl"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: "#ffffff",
                }}
              >
                Inteligencia artificial aplicada a problemas reales en biomedicina
              </h2>
            </div>

            <p
              className="mb-5"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.02rem",
                lineHeight: 1.78,
                color: "rgba(203, 213, 225, 0.8)",
              }}
            >
              El{" "}
              <strong style={{ color: "#e879f9" }}>
                2º Taller de Inteligencia Artificial y Aprendizaje Automático para la Medicina de
                Precisión y de Sistemas
              </strong>{" "}
              reunirá investigadores, académicos y especialistas para discutir aplicaciones
              contemporáneas de IA en cáncer, biología molecular, predicción de respuesta
              terapéutica, modelado estructural y análisis de datos biológicos.
            </p>
            <p
              className="mb-10"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.02rem",
                lineHeight: 1.78,
                color: "rgba(203, 213, 225, 0.7)",
              }}
            >
              El enfoque del taller combina investigación, análisis computacional y discusión
              científica en torno a problemas de alto impacto en salud y sistemas biológicos.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: `1px solid ${stat.color}20`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      color: stat.color,
                      lineHeight: 1.2,
                      marginBottom: "4px",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.75rem",
                      color: "#64748b",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    background: p.bg,
                    border: `1px solid ${p.border}`,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `${p.color}20`,
                      border: `1px solid ${p.color}40`,
                    }}
                  >
                    <Icon size={18} style={{ color: p.color }} />
                  </div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.92rem",
                      color: "#e2e8f0",
                      lineHeight: 1.35,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.8rem",
                      lineHeight: 1.65,
                      color: "#64748b",
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
