import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Cuál es la temática principal del taller?",
    a: "El taller se enfoca en aplicaciones de inteligencia artificial y aprendizaje automático en medicina de precisión y biología de sistemas. Los temas incluyen predicción de respuesta terapéutica, modelado estructural de proteínas, redes de señalización oncogénica, dinámica tumoral y análisis de datos de secuenciación de RNA de célula única (scRNA-seq).",
  },
  {
    q: "¿Qué actividades están confirmadas para el 20 de abril?",
    a: "El programa del lunes 20 de abril incluye la inauguración a las 9:00 h, una ponencia de Alfonso Rojas Domínguez a las 9:15 h, la conferencia 'Redes de señalización oncogénica en la migración de células cancerosas' de José Vázquez Prado a las 10:00 h, una sesión de café y posters a las 10:45 h, la ponencia 'Impact of Altered Oxygen Level on the Growth Dynamics of Hanging Tumor' de Leopoldo Altamirano Robles a las 11:15 h, la ponencia de Irving Martínez Vargas sobre predicción de respuesta a inmunoterapia a las 12:00 h, y una mesa redonda coordinada por Matías Alvarado a las 13:00 h. Todas las actividades se realizarán en el Auditorio Jorge Suárez Díaz, Departamento de Computación, Cinvestav.",
  },
  {
    q: "¿El programa del 21 de abril ya está disponible?",
    a: "El programa del martes 21 de abril podrá integrarse una vez que sea confirmado por los organizadores. La información de esta página corresponde únicamente al programa académico confirmado hasta la fecha.",
  },
  {
    q: "¿Quiénes participan en las ponencias destacadas?",
    a: "Las dos ponencias destacadas corresponden a la Dra. Ana Lorena Gutiérrez Escolano, con una charla sobre modelado estructural y predicción de complejos proteicos en infección viral por calicivirus felino; y al Dr. Irving Ulises Martínez Vargas, con una ponencia sobre predicción de respuesta a inmunoterapia en cáncer de mama utilizando scRNA-seq y modelos de aprendizaje automático.",
  },
  {
    q: "¿Dónde se realizará la jornada del lunes 20 de abril?",
    a: "La jornada del lunes 20 de abril se llevará a cabo en el Auditorio Jorge Suárez Díaz, Departamento de Computación, Cinvestav – IPN. La segunda jornada (21 de abril) se realizará en instalaciones del CIC - IPN. La información de sede por jornada se comunicará mediante los canales oficiales de la organización.",
  },
  {
    q: "¿Se publicarán más detalles posteriormente?",
    a: "Sí. Esta página se encuentra en actualización continua con base en la información académica confirmada del taller. Los detalles adicionales sobre participación, modalidades de acceso y el programa completo del 21 de abril podrán integrarse una vez que sean confirmados por los organizadores.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="biomed-bg-section relative overflow-hidden py-28"
      style={{
        background: "linear-gradient(180deg, #050714 0%, #070b1a 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-8"
          style={{ background: "radial-gradient(ellipse, #e879f9, transparent 70%)", filter: "blur(80px)" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
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
              PREGUNTAS FRECUENTES
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
            Todo lo que{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #e879f9, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              necesitas saber
            </span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: openIndex === i ? "rgba(232,121,249,0.05)" : "rgba(255,255,255,0.022)",
                border:
                  openIndex === i ? "1px solid rgba(232,121,249,0.28)" : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <button
                className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 500,
                    fontSize: "1rem",
                    color: openIndex === i ? "#f1f5f9" : "#94a3b8",
                    lineHeight: 1.45,
                  }}
                >
                  {faq.q}
                </span>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    background:
                      openIndex === i ? "linear-gradient(135deg, #e879f9, #a855f7)" : "rgba(255,255,255,0.05)",
                    border: openIndex === i ? "none" : "1px solid rgba(255,255,255,0.1)",
                    boxShadow: openIndex === i ? "0 0 14px rgba(232,121,249,0.4)" : "none",
                  }}
                >
                  {openIndex === i ? (
                    <Minus size={14} className="text-white" />
                  ) : (
                    <Plus size={14} style={{ color: "#64748b" }} />
                  )}
                </div>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-6" style={{ borderTop: "1px solid rgba(232,121,249,0.1)" }}>
                  <p
                    className="pt-4"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.92rem",
                      lineHeight: 1.78,
                      color: "#64748b",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className="mt-12 p-8 rounded-3xl text-center"
          style={{
            background: "linear-gradient(135deg, rgba(232,121,249,0.05), rgba(56,189,248,0.05))",
            border: "1px solid rgba(232,121,249,0.12)",
          }}
        >
          <p
            className="mb-2"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 600,
              fontSize: "1.1rem",
              color: "#e2e8f0",
            }}
          >
            ¿Tienes más preguntas?
          </p>
          <p
            className="mb-5"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.88rem",
              color: "#475569",
              lineHeight: 1.65,
            }}
          >
            Puedes contactar directamente a la coordinación del taller para obtener información
            adicional pendiente de confirmación.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #e879f9, #a855f7)",
              color: "#ffffff",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              boxShadow: "0 0 20px rgba(168,85,247,0.32)",
            }}
          >
            Contactar coordinación
          </a>
        </div>
      </div>
    </section>
  );
}
