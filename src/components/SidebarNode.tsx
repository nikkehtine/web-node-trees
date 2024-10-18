import { TextProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const SidebarNode = () => {
  return (
    <div className="select-text rounded-md border bg-card px-3 py-2 text-xs">
      <Title>Node title</Title>
    </div>
  );
};

const Title = ({ children, className: passedClasses }: TextProps) => (
  <p className={cn("text-sm", passedClasses)}>{children}</p>
);

export default SidebarNode;
