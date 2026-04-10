import { NeuralCanvas } from "./NeuralCanvas";

interface SectionGapParticlesProps {
  className?: string;
  nodeCount?: number;
  opacity?: number;
}

export function SectionGapParticles({
  className = "",
  nodeCount = 18,
  opacity = 0.16,
}: SectionGapParticlesProps) {
  return (
    <div
      className={`absolute pointer-events-none overflow-hidden ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <NeuralCanvas nodeCount={nodeCount} dark />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,7,20,0.82) 0%, rgba(5,7,20,0.58) 35%, rgba(5,7,20,0.58) 65%, rgba(5,7,20,0.82) 100%)",
        }}
      />
    </div>
  );
}
