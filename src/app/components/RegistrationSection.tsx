import { Info, CalendarDays, MapPin, ArrowRight, Mail } from "lucide-react";
import { NeuralCanvas } from "./NeuralCanvas";

export function RegistrationSection() {
  return (
    <section
      id="info"
      className="relative overflow-hidden py-24"
      style={{
        background: "linear-gradient(180deg, #050714 0%, #0d0520 50%, #050714 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-25">
        <NeuralCanvas nodeCount={35} dark />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-12 rounded-full"
          style={{ background: "radial-gradient(ellipse, #a855f7, transparent 65%)", filter: "blur(80px)" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(168,85,247,0.1)",
              border: "1px solid rgba(168,85,247,0.28)",
            }}
          >
            <Info size={13} style={{ color: "#a855f7" }} />
            <span
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.7rem",
                color: "#a855f7",
                letterSpacing: "0.12em",
              }}
            >
              INFORMACIÓN
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
            Próximamente{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #e879f9, #a855f7, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              más detalles
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.02rem",
              color: "rgba(148,163,184,0.8)",
              lineHeight: 1.75,
            }}
          >
            Esta página presenta la información académica confirmada del taller. Los detalles
            adicionales de participación, registro y actualización del programa podrán integrarse
            posteriormente.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {[
            {
              icon: CalendarDays,
              label: "Fechas",
              value: "20 y 21 de abril de 2026",
              sub: "2º edición del taller",
              color: "#e879f9",
            },
            {
              icon: MapPin,
              label: "Sede",
              value: "Cinvestav – IPN · CIC - IPN",
              sub: "Lunes 20: Auditorio Jorge Suárez Díaz, Dept. de Computación",
              color: "#38bdf8",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="p-6 rounded-2xl"
                style={{
                  background: `${item.color}08`,
                  border: `1px solid ${item.color}22`,
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}35`,
                  }}
                >
                  <Icon size={18} style={{ color: item.color }} />
                </div>
                <p
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "0.68rem",
                    color: item.color,
                    letterSpacing: "0.1em",
                    marginBottom: "6px",
                  }}
                >
                  {item.label.toUpperCase()}
                </p>
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#e2e8f0",
                    lineHeight: 1.35,
                    marginBottom: "6px",
                  }}
                >
                  {item.value}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.8rem",
                    color: "#475569",
                    lineHeight: 1.6,
                  }}
                >
                  {item.sub}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#program"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-white transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "0.97rem",
              background: "linear-gradient(135deg, #e879f9 0%, #a855f7 50%, #38bdf8 100%)",
              boxShadow: "0 0 25px rgba(168,85,247,0.4)",
            }}
          >
            Ver programa
            <ArrowRight size={17} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "0.97rem",
              color: "#e2e8f0",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Mail size={16} style={{ color: "#e879f9" }} />
            Contactar coordinación
          </a>
        </div>
      </div>
    </section>
  );
}
