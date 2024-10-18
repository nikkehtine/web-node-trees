import TechChooser from "@/components/TechChooser";
import SidebarNode from "@/components/SidebarNode";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <div className="hidden select-none gap-2 bg-side px-4 py-2 md:flex md:min-w-[226px] md:max-w-[360px] md:flex-col">
      <TechChooser />
      <Separator className="my-1" />
      <SidebarNode />
      <SidebarNode />
      <SidebarNode />
      <Separator />
      <Button>Button</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}
