export type ContentNode = {
  name?: string;
  nodeType: NodeType;
  id: number;
  references: Reference[];
  children?: Reference[];
};

export type NodeType = "parent" | "child" | "popup";

export type Reference = number;

export type TextProps = {
  children: any;
  className?: string;
};
