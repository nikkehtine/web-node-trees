import { SidebarNode, TechChooser } from "@/components";

export const Sidebar = () => (
  <div className="bg-side flex w-0 flex-col px-4 py-2 md:w-1/4">
    <TechChooser />
    <SidebarNode />
    <SidebarNode />
    <SidebarNode />
  </div>
);
