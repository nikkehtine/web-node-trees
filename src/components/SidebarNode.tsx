import { SidebarNodeTextProps, SidebarNodeKeyValueProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import type { ContentNode, NodeType } from "@/lib/types";

const colorVariants: { [name: string]: string } = {
  parent: "text-tokyo-blue",
  child: "text-tokyo-green",
  popup: "text-tokyo-yellow",
  untitled: "opacity-70",
  base: "text-tokyo-3",
};

const SidebarNode = ({
  name,
  nodeType,
  id,
  references,
  childrenNodes,
}: ContentNode) => {
  return (
    <div
      key={id}
      className="cursor-default select-text rounded-md border bg-card px-3 py-2 text-xs"
    >
      <Title name={name} id={id} nodeType={nodeType} />
      <Type nodeType={nodeType} />
      <References refs={references} />
      <Children childrenRefs={childrenNodes} />
    </div>
  );
};

const Title = ({
  name,
  id,
  nodeType,
}: {
  name?: string;
  id: number;
  nodeType: NodeType;
}) => (
  <div className="my-1 flex place-items-center gap-2 text-base font-bold">
    <div
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-md bg-tokyo-7 px-1",
        colorVariants[nodeType],
      )}
    >
      {id + 1}.
    </div>
    <div
      className={cn(
        colorVariants[nodeType],
        cn(!name && colorVariants["untitled"]),
      )}
    >
      {name || "untitled"}
    </div>
  </div>
);

const KeyValue = ({
  title,
  children,
  className: passedClasses,
}: SidebarNodeKeyValueProps) => (
  <p className="my-1 flex gap-1">
    <span className={cn(passedClasses)}>{title}:</span>
    {children}
  </p>
);

const Type = ({ nodeType }: { nodeType: NodeType }) => (
  <KeyValue title="type" className="text-tokyo-cyan">
    {nodeType}
  </KeyValue>
);

const Numbers = ({ children }: SidebarNodeTextProps) => {
  return children.length > 0 ? (
    children.map((v: number, i: number) => (
      <span key={i} className={colorVariants["base"]}>
        {v + 1}
      </span>
    ))
  ) : (
    <span className={colorVariants["untitled"]}>none</span>
  );
};

const References = ({ refs }: { refs: number[] }) => (
  <KeyValue title="refs" className="text-tokyo-yellow">
    <Numbers>{refs}</Numbers>
  </KeyValue>
);

const Children = ({ childrenRefs }: { childrenRefs: number[] | undefined }) =>
  childrenRefs && (
    <KeyValue title="children" className="text-tokyo-green">
      <Numbers>{childrenRefs}</Numbers>
    </KeyValue>
  );

export default SidebarNode;
