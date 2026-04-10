import { Dna, Microscope } from "lucide-react";
import anaLorenaPhoto from "../../../Ponentes/AnaLorenaGutierrez.jpg";
import irvingPhoto from "../../../Ponentes/Irving-Ulises-Martinez-Vargas-320x240.jpg";
import { SectionGapParticles } from "./SectionGapParticles";

const confirmed = [
  "Dr. A. Pérez Lorenzana",
  "Cuauhtémoc Mancillas L.",
  "Alfonso Rojas Domínguez",
  "José Vázquez Prado",
  "Leopoldo Altamirano Robles",
  "Irving Martínez Vargas",
  "Matías Alvarado",
];

const featuredTalks = [
  {
    title:
      "Computación al rescate: predicción de complejos proteicos en infección viral, el caso FUT8–LC–VP1 en calicivirus felino",
    speaker: "Ana Lorena Gutiérrez Escolano",
    photo: anaLorenaPhoto,
    bio: "Licenciada y Maestra en Biología por la UNAM y Doctora en Ciencias en Patología Experimental por el CINVESTAV-IPN. Su investigación se ha centrado en virus de RNA como VIH, Dengue y Poliovirus. Desde 1997 estudia la relación de los calicivirus con su célula hospedera, con énfasis en apoptosis, replicación viral y posibles blancos antivirales. Ha participado activamente en investigación, formación de estudiantes y divulgación científica.",
    summary:
      "Esta charla aborda el uso de modelado estructural, docking proteína–proteína y dinámica molecular para predecir interacciones clave entre proteínas virales y celulares. Como caso de estudio, analiza la posible formación de complejos entre LC, VP1 y la fucosiltransferasa celular FUT8 durante la infección por calicivirus felino, integrando predicción computacional con evidencia experimental para proponer mecanismos funcionales y posibles estrategias antivirales.",
    tags: ["Modelado estructural", "Docking proteico", "Calicivirus felino", "FUT8"],
    accent: "#38bdf8",
    accentSecondary: "#06b6d4",
    icon: Microscope,
  },
  {
    title: "Predicción de respuesta a la inmunoterapia en cáncer de mama con scRNA-seq y aprendizaje automático",
    speaker: "Irving Ulises Martínez Vargas",
    photo: irvingPhoto,
    bio: "Doctor en Ciencia en Infectómica y Patogénesis Molecular por el CINVESTAV. Su investigación se enfoca en inmunología de mucosas en inflamación y cáncer. Se ha acercado al aprendizaje automático en aplicaciones para búsqueda de biomarcadores en cáncer y modelado de la respuesta inmune antitumoral. Realizó estancias en la Universidad de Johns Hopkins y en la Escuela de Medicina Icahn del Hospital Mount Sinai. Actualmente adscrito al Centro de Investigación Especializada en Microbiología de la UAG y vicepresidente de la Junta Directiva Junior de ALACI.",
    summary:
      "Usando datos de scRNA-seq pretratamiento en pacientes con TNBC, este trabajo deriva matrices de expresión a nivel paciente para células T, B y mieloides y construye modelos de aprendizaje automático para predecir respuesta a ICI. Mediante selección de variables con Random Forest y clasificación con LR, FFNN y SVM, identifica firmas multigénicas predictivas con relevancia funcional, señal pronóstica ortogonal y portabilidad en una cohorte externa.",
    tags: ["scRNA-seq", "TNBC", "Random Forest", "Inmunoterapia", "ICI"],
    accent: "#e879f9",
    accentSecondary: "#a855f7",
    icon: Dna,
  },
];

export function SpeakersSection() {
  return (
    <>
      <section
        id="speakers"
        className="relative overflow-hidden py-16"
        style={{
          background: "linear-gradient(180deg, #070b20 0%, #0a0518 100%)",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <SectionGapParticles className="inset-x-0 top-0 h-[34%]" nodeCount={14} opacity={0.14} />
        <SectionGapParticles className="inset-x-0 bottom-0 h-[36%]" nodeCount={18} opacity={0.18} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
              style={{
                background: "rgba(168,85,247,0.1)",
                border: "1px solid rgba(168,85,247,0.22)",
              }}
            >
              <span
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "0.7rem",
                  color: "#a855f7",
                  letterSpacing: "0.12em",
                }}
              >
                PARTICIPACIÓN CONFIRMADA
              </span>
            </div>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              Investigadores y ponentes
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {confirmed.map((name) => (
              <div
                key={name}
                className="px-5 py-3 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(232,121,249,0.15)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    color: "#cbd5e1",
                  }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="talks"
        className="biomed-bg-section relative overflow-hidden py-24"
        style={{
          background: "linear-gradient(180deg, #0a0518 0%, #0f0520 50%, #070b20 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/3 w-[500px] h-[300px] opacity-10"
            style={{ background: "radial-gradient(ellipse, #a855f7, transparent 70%)", filter: "blur(80px)" }}
          />
          <div
            className="absolute bottom-0 right-1/3 w-[500px] h-[300px] opacity-10"
            style={{ background: "radial-gradient(ellipse, #38bdf8, transparent 70%)", filter: "blur(80px)" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{
                background: "rgba(232,121,249,0.08)",
                border: "1px solid rgba(232,121,249,0.22)",
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
                PONENCIAS DESTACADAS
              </span>
            </div>
            <h2
              className="mb-4"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                letterSpacing: "-0.02em",
                color: "#ffffff",
              }}
            >
              Dos trabajos que conectan{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #e879f9, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                IA, biología
              </span>{" "}
              y medicina
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                color: "rgba(148,163,184,0.82)",
                lineHeight: 1.75,
              }}
            >
              Estas ponencias muestran cómo el aprendizaje automático y las herramientas
              computacionales se integran con problemas biomédicos complejos, desde infección viral
              hasta respuesta a inmunoterapia.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredTalks.map((talk, i) => {
              const Icon = talk.icon;
              return (
                <div
                  key={i}
                  className="group rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: `1px solid ${talk.accent}25`,
                    boxShadow: "0 4px 40px rgba(0,0,0,0.3)",
                  }}
                >
                  <div className="relative overflow-hidden" style={{ height: "200px" }}>
                    <img
                      src={talk.photo}
                      alt={`Foto de referencia para ${talk.speaker}`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(180deg, rgba(5,7,20,0.2) 0%, rgba(5,7,20,0.97) 100%)",
                      }}
                    />
                    <div
                      className="absolute bottom-5 left-6 w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${talk.accent}30, ${talk.accentSecondary}15)`,
                        border: `1px solid ${talk.accent}45`,
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <Icon size={22} style={{ color: talk.accent }} />
                    </div>
                    <div className="absolute bottom-5 left-24 right-5">
                      <p
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontWeight: 700,
                          fontSize: "1.05rem",
                          color: "#f1f5f9",
                          lineHeight: 1.3,
                        }}
                      >
                        {talk.speaker}
                      </p>
                      <p
                        style={{
                          fontFamily: "Space Mono, monospace",
                          fontSize: "0.62rem",
                          color: talk.accent,
                          letterSpacing: "0.06em",
                        }}
                      >
                        PONENTE CONFIRMADO
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {talk.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full"
                          style={{
                            background: `${talk.accent}14`,
                            border: `1px solid ${talk.accent}28`,
                            fontFamily: "Space Mono, monospace",
                            fontSize: "0.58rem",
                            color: talk.accent,
                            letterSpacing: "0.05em",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3
                      className="mb-4"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.98rem",
                        color: "#f1f5f9",
                        lineHeight: 1.45,
                      }}
                    >
                      {talk.title}
                    </h3>

                    <div
                      className="p-4 rounded-xl mb-4"
                      style={{
                        background: `${talk.accent}08`,
                        border: `1px solid ${talk.accent}18`,
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.83rem",
                          lineHeight: 1.72,
                          color: "#64748b",
                        }}
                      >
                        <strong style={{ color: "#94a3b8" }}>Resumen: </strong>
                        {talk.summary}
                      </p>
                    </div>

                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.8rem",
                        lineHeight: 1.68,
                        color: "#475569",
                      }}
                    >
                      <strong style={{ color: "#64748b" }}>Semblanza: </strong>
                      {talk.bio}
                    </p>
                  </div>

                  <div
                    className="h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${talk.accent}, ${talk.accentSecondary}, transparent)`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
