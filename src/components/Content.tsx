import { useContentMapStore } from "@/lib/store";
import { CytoscapeMap, KonvaMap } from "@/content-map";

const Content = () => {
  const renderer = useContentMapStore((state) => state.renderer);

  return (
    <div className="flex grow bg-map text-map-foreground md:border-r">
      {(() => {
        switch (renderer) {
          case "Cytoscape":
            return <CytoscapeMap />;
          case "Konva":
            return <KonvaMap />;
          default:
            return (
              <p className="h-full w-full select-none content-center items-center text-center text-xl text-tokyo-yellow">
                Choose a renderer
              </p>
            );
        }
      })()}
    </div>
  );
};

export default Content;
