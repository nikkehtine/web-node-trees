import { create } from "zustand";
import type { NodesList } from "@/lib/types";

type ContentMapStore = {
  renderer: string | null;
  nodes: NodesList;
  setNodes: (nodesList: NodesList) => void;
  setRenderer: (target: string) => void;
};

export const useContentMapStore = create<ContentMapStore>()((set) => ({
  renderer: null,
  nodes: [],
  setNodes: (nodesList) => set(() => ({ nodes: nodesList })),
  setRenderer: (target) => set(() => ({ renderer: target })),
}));
