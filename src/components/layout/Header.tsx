import { ModeToggle } from "@/components/layout/mode-toggle";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="mx-auto mt-4 mb-2 flex w-full max-w-7xl flex-col items-center justify-between gap-6 p-0.5 md:flex-row">
      <div className="w-2/3">
        <h1>Tag</h1>
      </div>
      <div className="flex w-1/3 items-center justify-end gap-20">
        <div className="flex gap-4">
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
        <div className="flex gap-4">
          <ModeToggle />
          <Button>Download CV</Button>
        </div>
      </div>
    </header>
  );
}
