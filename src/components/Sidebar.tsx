import TechChooser from "@/components/TechChooser";
import SidebarNode from "@/components/SidebarNode";
import { Separator } from "@/components/ui/separator";
import { sampleNodes } from "@/assets/sampleData";

const Sidebar = () => {
  return (
    <div className="bg-side hidden max-h-screen select-none gap-2 px-4 py-2 md:flex md:w-1/4 md:min-w-[226px] md:max-w-[360px] md:flex-col">
      <TechChooser />
      <Separator className="my-1" />
      {sampleNodes.map((nodeProps) => (
        <SidebarNode key={nodeProps.id} {...nodeProps} />
      ))}
    </div>
  );
};

export default Sidebar;
