import { useEffect, useRef } from "react";
import cytoscape from "cytoscape";

const Renderer = ({ elements }: any) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cy = cytoscape({
      container: containerRef.current,
      elements: elements,
    });

    return () => {
      cy.destroy();
    };
  });

  return <div ref={containerRef} className="h-full w-full" />;
};

export default Renderer;
