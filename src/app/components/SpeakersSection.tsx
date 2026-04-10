import { Dna, Microscope } from "lucide-react";
import anaLorenaPhoto from "../../../Ponentes/Lorena.jpg.jpeg";
import irvingPhoto from "../../../Ponentes/6b316440-3db2-df4f-df85-5013fa2ac5c5-310x165.jpg";
import matiasPhoto from "../../../Ponentes/MATIASALVARADO-600-600-p-L-97.jpg";
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
      "Computación al rescate:predicción de complejos proteicos en infección viral, el caso FUT8–LC–VP1 en calicivirus felino.",
    speaker: "Dra. Ana Lorena Gutiérrez Escolano",
    photo: anaLorenaPhoto,
    summary:
      "En esta charla se presentará cómo herramientas computacionales como el modelado estructural, el docking proteína–proteína y la dinámica molecular pueden utilizarse para predecir interacciones clave entre proteínas virales y celulares. Como caso de estudio, se analizará la posible formación de complejos entre dos proteínas virales: la lider de la cápside (LC) y la mayoritaria de la cápside (VP1) con la fucosiltransferasa celular (FUT8) durante la infección por calicivirus felino. Finalmente, se discutirá cómo estas predicciones se integran con evidencia experimental para proponer mecanismos funcionales relevantes en la replicación viral y estrategias antivirales.",
    bio:
      "Licenciatura y Maestría en Biología, UNAM, y Doctorado en Ciencias,  Patología Experimental del CINVESTAV-IPN, México. Su trabajo se ha basado en el estudio de la biología molecular de virus de RNA como VIH, Dengue, Poliovirus. Desde 1997 su grupo de investigación estudia la relación de los calicivirus con su célula hospedera; particularmente  la regulación de la apoptosis durante infecciones virales y el papel de proteínas virales y celulares que participan en la replicación y que pudieran ser utilizadas como blancos para el diseño de compuestos antivirales. Ha formado estudiantes de Maestría y Doctorado de Cinvestav y de Licenciatura de diversos Institutos y del IPN, la UAM y la UNAM. Ha escrito artículos científicos en revistas de investigación internacionales y presentado su investigación en congresos Nacionales e Internacionales. Es muy activa en la divulgación de la ciencia en diversos foros. Es coordinadora de asesores de la Secretaría Académica de Cinvestav, desde marzo del 2024. Es Miembro de la Academia Mexicana de Ciencias, de la Sociedad Mexicana de Bioquímica y de la Sociedad Americana de Microbiología y miembro fundador de la Sociedad Mexicana de Virología. Forma parte del comité editorial de revistas Científicas y de divulgación.",
    tags: ["Modelado estructural", "Docking proteína–proteína", "Calicivirus felino", "FUT8–LC–VP1"],
    accent: "#38bdf8",
    accentSecondary: "#06b6d4",
    icon: Microscope,
    imageBg: "linear-gradient(180deg, rgba(8,32,43,0.92), rgba(7,11,32,0.9))",
  },
  {
    title: "Predicción de respuesta a la inmunoterapia en cáncer de mama con scRNA-seq y aprendizaje automático",
    speaker: "Dr. Irving Ulises Martínez Vargas",
    photo: irvingPhoto,
    summary:
      "Usando datos de scRNA-seq pretratamiento en pacientes con TNBC, derivamos matrices de expresión a nivel paciente para células T, B y mieloides y construimos modelos de aprendizaje automático para predecir respuesta a ICI. Mediante selección de variables con Random Forest y clasificación (LR, FFNN, SVM), identificamos firmas multigénicas predictivas, incluyendo genes no sobre expresados individualmente. Las firmas muestran relevancia funcional (DAVID/GO), señal pronóstica ortogonal y portabilidad en una cohorte externa.",
    bio:
      "Irving Ulises Martínez Vargas es Doctor en Ciencia en Infectómica y Patogénesis Molecular en el CINVESTAV. Su área de investigación es la inmunología de mucosas en inflamación y cáncer. Su acercamiento al área de aprendizaje automático inicio durante una estancia posdoctoral con el Dr. Matías Alvarado donde ha participado en aplicación de nuevos métodos para búsqueda de biomarcadores en cáncer y el modelado de la respuesta inmune anti-tumoral. Hizo estancia doctoral en la Universidad de Johns Hopkins y como posdoctorado en la Escuela de Medicina Icahn del Hospital Mount Sinai. Actualmente está adscrito al Centro de Investigación Especializada en Microbiología de la UAG, y es vicepresidente de la Junta Directiva Junior de la Asociación de Inmunología de Latinoamérica y del Caribe (ALACI).",
    tags: ["scRNA-seq", "TNBC", "Random Forest", "ICI", "Biomarcadores"],
    accent: "#e879f9",
    accentSecondary: "#a855f7",
    icon: Dna,
    imageBg: "linear-gradient(180deg, rgba(34,10,43,0.92), rgba(7,11,32,0.9))",
  },
  {
    title:
      "La respuesta inmune de la Tierra y el calentamiento global. Modelación con hamiltoniano de Ising y uso de aprendizaje automático",
    speaker: "Dr. Matías Alvarado Mentado",
    photo: matiasPhoto,
    summary:
      "Nuestro planeta Tierra ha dado origen y evolución a la vida con la alta diversidad y complejidad actual. Sugiere ser un ser vivo tal que su sistema inmune la protege de los agentes que pueden enfermarla. Actualmente la fiebre o calentamiento global terrestre alerta sobre posibles daños irreversibles. En medicina se sabe que la fiebre es parte del proceso curativo de una enfermedad. Pero, no debe superar el umbral que dañaría órganos y funciones vitales de manera irreversible. Lo cual aplica para el calentamiento global terrestre. En esta conferencia trazaré una propuesta para la modelación y simulación de la respuesta inmune de la Tierra y medidas de mitigación del cambio climático. La herramienta formal es el Modelo de Ising y los métodos de aprendizaje automático para el procesamiento de la información real. Evitar que suba la fiebre terrestre es esencial para evitarle daños irreversibles.",
    bio:
      "MAM es doctor en Matemáticas con especialidad en Artifical Intelligence. Su trabajo de investigación es interdisciplinario. En los últimos 10 años ha aplicado el Modelo de Ising, clásico de la termodinámica física, para la modelación y el diseño de algoritmos de la respuesta inmune al cáncer. Asimismo, el Equilibrio de Nash para diseñar estrategias de cooperación para mitigar el calentamiento global. En ambas líneas de trabajo con la aplicación del aprendizaje automático inteligente para procesar datos reales y obtener información útil a la toma de decisiones.",
    tags: ["Modelo de Ising", "Cambio climático", "Aprendizaje automático", "Respuesta inmune"],
    accent: "#22d3ee",
    accentSecondary: "#38bdf8",
    icon: Microscope,
    imageBg: "linear-gradient(180deg, rgba(7,32,39,0.92), rgba(7,11,32,0.9))",
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
              Tres trabajos que conectan{" "}
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
                color: "rgba(203,213,225,0.84)",
                lineHeight: 1.75,
              }}
            >
              Estas ponencias muestran cómo el aprendizaje automático y las herramientas
              computacionales se integran con problemas complejos, desde infección viral y respuesta
              a inmunoterapia hasta modelación del cambio climático.
            </p>
          </div>

          <div className="grid gap-10">
            {featuredTalks.map((talk) => {
              const Icon = talk.icon;
              return (
                <article
                  key={talk.speaker}
                  className="overflow-hidden rounded-[2rem]"
                  style={{
                    background: "rgba(9,14,28,0.88)",
                    border: `1px solid ${talk.accent}26`,
                    boxShadow: "0 18px 70px rgba(0,0,0,0.34)",
                  }}
                >
                  <div className="grid lg:grid-cols-[320px_minmax(0,1fr)]">
                    <div
                      className="relative flex min-h-[340px] items-center justify-center p-5"
                      style={{
                        background: talk.imageBg,
                        borderRight: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-35"
                        style={{
                          background:
                            "radial-gradient(circle at top left, rgba(255,255,255,0.14), transparent 42%), radial-gradient(circle at bottom right, rgba(255,255,255,0.08), transparent 36%)",
                        }}
                      />

                      <div
                        className="relative w-full overflow-hidden rounded-[1.6rem] p-3"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          boxShadow: "0 12px 40px rgba(0,0,0,0.22)",
                        }}
                      >
                        <img
                          src={talk.photo}
                          alt={`Fotografía de ${talk.speaker}`}
                          className="block h-[280px] w-full rounded-[1.15rem]"
                          style={{ objectFit: "contain", background: "rgba(255,255,255,0.03)" }}
                        />
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-2xl"
                          style={{
                            background: `linear-gradient(135deg, ${talk.accent}26, ${talk.accentSecondary}16)`,
                            border: `1px solid ${talk.accent}45`,
                          }}
                        >
                          <Icon size={22} style={{ color: talk.accent }} />
                        </div>

                        <div>
                          <p
                            style={{
                              fontFamily: "Space Grotesk, sans-serif",
                              fontWeight: 700,
                              fontSize: "1.15rem",
                              color: "#f8fafc",
                              lineHeight: 1.25,
                            }}
                          >
                            {talk.speaker}
                          </p>
                          <p
                            style={{
                              fontFamily: "Space Mono, monospace",
                              fontSize: "0.68rem",
                              color: talk.accent,
                              letterSpacing: "0.08em",
                            }}
                          >
                            PONENTE CONFIRMADO
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {talk.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full px-3 py-1"
                            style={{
                              background: `${talk.accent}14`,
                              border: `1px solid ${talk.accent}28`,
                              fontFamily: "Space Mono, monospace",
                              fontSize: "0.62rem",
                              color: talk.accent,
                              letterSpacing: "0.05em",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3
                        className="mb-6"
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontWeight: 700,
                          fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
                          color: "#f8fafc",
                          lineHeight: 1.38,
                        }}
                      >
                        {talk.title}
                      </h3>

                      <div
                        className="mb-5 rounded-[1.5rem] p-5"
                        style={{
                          background: "rgba(255,255,255,0.045)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <p
                          className="mb-2"
                          style={{
                            fontFamily: "Space Mono, monospace",
                            fontSize: "0.7rem",
                            color: talk.accent,
                            letterSpacing: "0.1em",
                          }}
                        >
                          RESUMEN
                        </p>
                        <p
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.96rem",
                            lineHeight: 1.8,
                            color: "#dbe4f0",
                          }}
                        >
                          {talk.summary}
                        </p>
                      </div>

                      <div
                        className="rounded-[1.5rem] p-5"
                        style={{
                          background: "rgba(7,12,24,0.62)",
                          border: `1px solid ${talk.accent}18`,
                        }}
                      >
                        <p
                          className="mb-2"
                          style={{
                            fontFamily: "Space Mono, monospace",
                            fontSize: "0.7rem",
                            color: talk.accentSecondary,
                            letterSpacing: "0.1em",
                          }}
                        >
                          SEMBLANZA
                        </p>
                        <p
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.95rem",
                            lineHeight: 1.8,
                            color: "#cbd5e1",
                          }}
                        >
                          {talk.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
