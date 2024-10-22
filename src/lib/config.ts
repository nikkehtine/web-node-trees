export const RenderersList = ["Cytoscape", "Konva"] as const;

export type Renderers = typeof RenderersList;

export type RendererEngine = Renderers[number];
