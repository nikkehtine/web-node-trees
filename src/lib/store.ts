import { create } from "zustand";
import type { NodesList } from "@/lib/types";
import type { RendererEngine } from "./config";

type ContentMapStore = {
  renderer: RendererEngine | null;
  nodes: NodesList;
  setNodes: (nodesList: NodesList) => void;
  setRenderer: (target: RendererEngine) => void;
};

export const useContentMapStore = create<ContentMapStore>()((set) => ({
  renderer: null,
  nodes: [],
  setNodes: (nodesList) => set(() => ({ nodes: nodesList })),
  setRenderer: (target) => set(() => ({ renderer: target })),
}));
