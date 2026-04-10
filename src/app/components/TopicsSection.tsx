import { Clock, Coffee, Users, Mic2, MessageCircle } from "lucide-react";

const agenda = [
  {
    time: "09:00",
    title: "Inauguración",
    detail: "Dr. A. Pérez Lorenzana – Cuauhtémoc Mancillas L.",
    note: "Coordina: Matías Alvarado y Alfonso Rojas Domínguez",
    type: "ceremonia",
    color: "#a855f7",
  },
  {
    time: "09:15",
    title: "Ponencia",
    detail: "Alfonso Rojas Domínguez",
    note: null,
    type: "ponencia",
    color: "#e879f9",
  },
  {
    time: "10:00",
    title: "Redes de señalización oncogénica en la migración de células cancerosas",
    detail: "José Vázquez Prado",
    note: null,
    type: "ponencia",
    color: "#e879f9",
  },
  {
    time: "10:45",
    title: "Café y sesión de posters",
    detail: null,
    note: null,
    type: "descanso",
    color: "#fb923c",
  },
  {
    time: "11:15",
    title: "Impact of Altered Oxygen Level on the Growth Dynamics of Hanging Tumor",
    detail: "Leopoldo Altamirano Robles",
    note: null,
    type: "ponencia",
    color: "#e879f9",
  },
  {
    time: "12:00",
    title: "Predicción de respuesta a la inmunoterapia en cáncer de mama con scRNA-seq y aprendizaje automático",
    detail: "Irving Martínez Vargas",
    note: null,
    type: "ponencia",
    color: "#e879f9",
  },
  {
    time: "13:00",
    title: "Mesa redonda",
    detail: "Coordina: Matías Alvarado",
    note: null,
    type: "mesa",
    color: "#38bdf8",
  },
];

const typeConfig: Record<string, { icon: typeof Mic2; label: string; bg: string; text: string }> = {
  ceremonia: { icon: Users, label: "Inauguración", bg: "rgba(168,85,247,0.12)", text: "#a855f7" },
  ponencia: { icon: Mic2, label: "Ponencia", bg: "rgba(232,121,249,0.10)", text: "#e879f9" },
  descanso: { icon: Coffee, label: "Pausa", bg: "rgba(251,146,60,0.10)", text: "#fb923c" },
  mesa: { icon: MessageCircle, label: "Mesa redonda", bg: "rgba(56,189,248,0.10)", text: "#38bdf8" },
};

export function TopicsSection() {
  return (
    <section
      id="program"
      className="biomed-bg-section relative overflow-hidden py-28"
      style={{
        background: "linear-gradient(180deg, #050714 0%, #070b20 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.028]"
        style={{
          backgroundImage: "radial-gradient(rgba(232,121,249,0.9) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(232,121,249,0.1)",
              border: "1px solid rgba(232,121,249,0.25)",
            }}
          >
            <span
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.7rem",
                color: "#e879f9",
                letterSpacing: "0.12em",
              }}
            >
              PROGRAMA
            </span>
          </div>
          <h2
            className="mb-3"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            Programa confirmado ·{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #e879f9, #a855f7, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Lunes 20 de abril
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.97rem",
              color: "rgba(148,163,184,0.8)",
              lineHeight: 1.7,
            }}
          >
            El siguiente programa corresponde a la jornada confirmada del lunes 20 de abril de 2026.
          </p>
          <p
            className="mt-2"
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.7rem",
              color: "#475569",
              letterSpacing: "0.05em",
            }}
          >
            Auditorio Jorge Suárez Díaz · Departamento de Computación, Cinvestav
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-[88px] top-0 bottom-0 w-px hidden sm:block"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(232,121,249,0.3) 10%, rgba(56,189,248,0.3) 80%, transparent)",
            }}
          />

          <div className="space-y-4">
            {agenda.map((item, i) => {
              const cfg = typeConfig[item.type];
              const Icon = cfg.icon;
              return (
                <div key={i} className="flex gap-4 sm:gap-6 items-start group">
                  <div className="shrink-0 text-right hidden sm:block" style={{ width: "76px" }}>
                    <span
                      style={{
                        fontFamily: "Space Mono, monospace",
                        fontSize: "0.82rem",
                        color: item.color,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {item.time}
                    </span>
                  </div>

                  <div
                    className="shrink-0 hidden sm:flex items-center justify-center w-6 h-6 rounded-full mt-1"
                    style={{
                      background: `${item.color}22`,
                      border: `1.5px solid ${item.color}60`,
                      boxShadow: `0 0 10px ${item.color}30`,
                      zIndex: 1,
                    }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                  </div>

                  <div
                    className="flex-1 p-5 rounded-2xl transition-all duration-300 group-hover:-translate-y-0.5"
                    style={{
                      background:
                        item.type === "descanso" ? "rgba(251,146,60,0.05)" : "rgba(255,255,255,0.025)",
                      border: `1px solid ${item.color}22`,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2 sm:hidden">
                      <Clock size={12} style={{ color: item.color }} />
                      <span
                        style={{
                          fontFamily: "Space Mono, monospace",
                          fontSize: "0.75rem",
                          color: item.color,
                        }}
                      >
                        {item.time}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-start gap-3">
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full shrink-0"
                        style={{
                          background: cfg.bg,
                          fontFamily: "Space Mono, monospace",
                          fontSize: "0.62rem",
                          color: cfg.text,
                          letterSpacing: "0.07em",
                        }}
                      >
                        <Icon size={11} />
                        {cfg.label}
                      </span>

                      <div className="flex-1">
                        <p
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            fontWeight: item.type === "descanso" ? 500 : 600,
                            fontSize: item.type === "descanso" ? "0.92rem" : "0.98rem",
                            color: item.type === "descanso" ? "#fb923c" : "#e2e8f0",
                            lineHeight: 1.4,
                          }}
                        >
                          {item.title}
                        </p>

                        {item.detail && (
                          <p
                            className="mt-1"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "0.82rem",
                              color: "#64748b",
                            }}
                          >
                            {item.detail}
                          </p>
                        )}

                        {item.note && (
                          <p
                            className="mt-1"
                            style={{
                              fontFamily: "Space Mono, monospace",
                              fontSize: "0.68rem",
                              color: "#475569",
                              letterSpacing: "0.03em",
                            }}
                          >
                            {item.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="mt-10 px-6 py-4 rounded-2xl flex items-center gap-3"
          style={{
            background: "rgba(56,189,248,0.05)",
            border: "1px solid rgba(56,189,248,0.15)",
          }}
        >
          <Clock size={15} style={{ color: "#38bdf8", flexShrink: 0 }} />
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.85rem",
              color: "#475569",
              lineHeight: 1.6,
            }}
          >
            El programa del <strong style={{ color: "#38bdf8" }}>21 de abril</strong> podrá integrarse
            después, cuando se confirme el material correspondiente.
          </p>
        </div>
      </div>
    </section>
  );
}
