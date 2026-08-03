"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { authClient } from "@/lib/auth-client";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">
        {/* Left */}

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-6" />
          </Button>

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo2.png"
              width={50}
              height={50}
              alt="SMART TUTOR"
              priority
            />

            <div className="hidden sm:block">
              <h2 className="text-lg font-bold tracking-wide">SMART TUTOR</h2>

              <p className="text-xs text-muted-foreground">
                Learn • Grow • Succeed
              </p>
            </div>
          </Link>
        </div>

        {/* Center */}

        <nav className="hidden items-center gap-7 lg:flex">
          <NavLinks user={user} />
        </nav>

        {/* Right */}

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {user ? (
            <>
              <UserMenu user={session?.user} />
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>

              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>

      <MobileMenu open={open} setOpen={setOpen} user={user} />
    </header>
  );
};

export default Navbar;
