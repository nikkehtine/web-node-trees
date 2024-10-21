export type ContentNode = {
  name: string;
  id: string;
  nodeType: NodeType;
  order: number;
  references: Reference[];
};

export type NodeType = "parent" | "child" | "popup";

export type Reference = string;

export type TextProps = {
  children: any;
  className?: string;
};
