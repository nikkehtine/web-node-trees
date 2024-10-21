import Content from "@/components/Content";
import Sidebar from "@/components/Sidebar";
import { sampleNodes } from "@/assets/sampleData";
import { useContentMapStore } from "@/lib/store";

export default function App() {
  const updateNodes = useContentMapStore((state) => state.setNodes);
  updateNodes(sampleNodes);
  return (
    <>
      <Content />
      <Sidebar />
    </>
  );
}
