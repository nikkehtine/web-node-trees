import Renderer from "./Renderer";

const CytoscapeMap = () => {
  const elements = [
    { data: { id: "a" } },
    { data: { id: "b" } },
    { data: { id: "ab", source: "a", target: "b" } },
  ];
  return <Renderer elements={elements} />;
};

export default CytoscapeMap;
