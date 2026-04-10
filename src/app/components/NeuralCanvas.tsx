import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
}

interface NeuralCanvasProps {
  className?: string;
  nodeCount?: number;
  dark?: boolean;
}

export function NeuralCanvas({ className = "", nodeCount = 60, dark = true }: NeuralCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initNodes();
    };

    const colors = dark
      ? ["#e879f9", "#a855f7", "#38bdf8", "#06b6d4", "#f472b6", "#818cf8", "#22d3ee"]
      : ["#c026d3", "#7c3aed", "#0ea5e9", "#06b6d4", "#ec4899", "#6366f1", "#0284c7"];

    const initNodes = () => {
      nodesRef.current = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      }));
    };

    const drawNode = (node: Node) => {
      const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 4);
      const alpha = 0.4 + 0.3 * Math.sin(node.pulse);
      glow.addColorStop(0, node.color + "ff");
      glow.addColorStop(0.5, node.color + "88");
      glow.addColorStop(1, node.color + "00");

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = node.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const drawConnection = (a: Node, b: Node, dist: number, maxDist: number) => {
      const alpha = (1 - dist / maxDist) * 0.35;
      const midX = (a.x + b.x) / 2;
      const midY = (a.y + b.y) / 2;
      const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
      grad.addColorStop(0, a.color + Math.floor(alpha * 255).toString(16).padStart(2, "0"));
      grad.addColorStop(0.5, "#ffffff" + Math.floor(alpha * 80).toString(16).padStart(2, "0"));
      grad.addColorStop(1, b.color + Math.floor(alpha * 255).toString(16).padStart(2, "0"));
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.quadraticCurveTo(midX + (Math.random() - 0.5) * 20, midY + (Math.random() - 0.5) * 20, b.x, b.y);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const nodes = nodesRef.current;
      const maxDist = 130;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            drawConnection(nodes[i], nodes[j], dist, maxDist);
          }
        }
      }

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        drawNode(node);
      }

      animRef.current = requestAnimationFrame(animate);
    };

    resize();
    animate();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, [nodeCount, dark]);

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />;
}
