import Link from "next/link";
import { Button } from "./ui/button";
import { User2 } from "lucide-react";
import { ThemeToggler } from "./theme-toggler";
import { cookies } from "next/headers";

export default function Navbar() {
  const isLogin = cookies().get("user_id")?.value;
  return (
    <header className="p-5 flex items-center justify-between border-b-2">
      <Link href="/">
        <div className="text-3xl font-bold">Post It</div>
      </Link>
      <nav className="flex gap-3 items-center">
        {isLogin && (
          <Link href="/create">
            <Button variant="outline">Create</Button>
          </Link>
        )}
        <Link href="/profile">
          <Button size="icon" variant="ghost">
            <User2 />
          </Button>
        </Link>
        <ThemeToggler />
      </nav>
    </header>
  );
}
