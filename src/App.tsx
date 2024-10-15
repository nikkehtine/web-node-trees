import { Content, Sidebar } from "@/components";

export default function App() {
  return (
    <div className="text-foreground bg-background flex min-h-dvh font-mono">
      <Content />
      <Sidebar />
    </div>
  );
}
