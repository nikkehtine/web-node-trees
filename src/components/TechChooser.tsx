import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const TechChooser = () => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Choose a renderer" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
      </SelectContent>
    </Select>
  );
};
