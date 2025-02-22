import { ModeToggle } from "@/components/layout/mode-toggle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Header() {
  return (
    <header className="border-primary bg-secondary mx-auto mb-2 flex w-full flex-col items-center justify-between gap-6 border-b p-0.5 pt-4 md:flex-row md:px-20 md:pb-4">
      <div className="">
        <a href="#about" className="flex gap-4 md:flex-row">
          <Avatar>
            <AvatarImage src="/ai-profile-corporate.jpg" alt="Heath Babb" />
            <AvatarFallback>HB</AvatarFallback>
          </Avatar>
          <h1 className="text-sm md:text-lg md:font-bold">Heath Babb</h1>
        </a>
      </div>
      <div className="flex items-center justify-end gap-20">
        <div className="flex gap-4 text-sm font-bold md:text-2xl">
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="flex gap-4">
        <ModeToggle />
        <a href="/resume" target="_blank">
          <Button
            variant="outline"
            className="text-lg font-bold text-yellow-600 dark:bg-slate-300 dark:text-blue-600"
          >
            Resume
          </Button>
        </a>
      </div>
    </header>
  );
}
