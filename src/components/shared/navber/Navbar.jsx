"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Better Auth
  const user = null;

  const handleLogout = () => {
    console.log("logout");
  };

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

          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" width={42} height={42} alt="SMART TUTOR" />

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
          <NavLinks />
        </nav>

        {/* Right */}

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {user ? (
            <>
              <Button variant="ghost">Profile</Button>

              <Button variant="destructive" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>

              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>

      <MobileMenu
        open={open}
        setOpen={setOpen}
        user={user}
        handleLogout={handleLogout}
      />
    </header>
  );
};

export default Navbar;
