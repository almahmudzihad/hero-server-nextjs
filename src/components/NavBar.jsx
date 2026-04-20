import { Link } from "@heroui/react";
import ThemesToggle from "./ThemesToggle";

function NavBar() {
  return (
    <div className="container mx-auto">
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          
          <p className="font-bold">ACME</p>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/tasks">Tasks</Link>
          </li>
          <li>
            <Link href="/hero">Hero</Link>
          </li>
        </ul>
        <div>
            <ThemesToggle />
        </div>
      </header>
    </nav>
    </div>
  );
}

export default NavBar;
