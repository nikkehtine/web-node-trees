import TechChooser from "@/components/TechChooser";
import SidebarNode from "@/components/SidebarNode";
import { Separator } from "@/components/ui/separator";

const Sidebar = () => (
  <div className="flex w-0 flex-col gap-2 bg-side px-4 py-2 md:w-1/4">
    <TechChooser />
    <Separator />
    <SidebarNode />
    <SidebarNode />
    <SidebarNode />
  </div>
);

export default Sidebar;
