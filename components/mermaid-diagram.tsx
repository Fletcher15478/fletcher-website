"use client";

import { useEffect, useId, useRef, useState } from "react";

type MermaidDiagramProps = {
  chart: string;
  title?: string;
};

export function MermaidDiagram({ chart, title }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const uniqueId = useId().replace(/:/g, "");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      if (!containerRef.current) return;
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: "neutral",
          securityLevel: "strict",
          fontFamily: "var(--font-sans), system-ui, sans-serif",
        });
        const { svg } = await mermaid.render(`mermaid-${uniqueId}`, chart.trim());
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
          setError(null);
        }
      } catch {
        if (!cancelled) {
          setError("Diagram could not be rendered.");
        }
      }
    }

    render();
    return () => {
      cancelled = true;
    };
  }, [chart, uniqueId]);

  return (
    <figure className="overflow-hidden rounded-xl border border-edge bg-white">
      {title ? (
        <figcaption className="border-b border-edge bg-canvas-subtle px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink-muted">
          {title}
        </figcaption>
      ) : null}
      <div className="overflow-x-auto p-4">
        {error ? (
          <pre className="text-xs text-ink-muted">{error}</pre>
        ) : (
          <div ref={containerRef} className="mermaid flex min-h-[120px] justify-center [&_svg]:max-w-full" />
        )}
      </div>
    </figure>
  );
}
