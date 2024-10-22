import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContentMapStore } from "@/lib/store";
import { RenderersList } from "@/lib/config";

export default function TechChooser() {
  const changeRenderer = useContentMapStore((state) => state.setRenderer);

  return (
    <Select onValueChange={changeRenderer}>
      <SelectTrigger>
        <SelectValue placeholder="Choose a renderer" />
      </SelectTrigger>
      <SelectContent>
        {RenderersList.map((item, i) => (
          <SelectItem key={i} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
