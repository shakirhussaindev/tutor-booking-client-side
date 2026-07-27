"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

const MobileMenu = ({ open, setOpen, user, handleLogout }) => {
  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
          transition-all duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Menu */}
      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          h-screen
          w-[290px]
          border-r
          border-border
          bg-background
          shadow-2xl
          transition-transform
          duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-lg font-bold">SMART TUTOR</h2>

          <Button size="icon" variant="ghost" onClick={() => setOpen(false)}>
            <X className="size-5" />
          </Button>
        </div>

        <div className="space-y-2 p-5">
          <NavLinks mobile onClick={() => setOpen(false)} />
        </div>

        <div className="border-t p-5 space-y-4">
          <ThemeToggle />

          {user ? (
            <>
              <Button className="w-full">Profile</Button>

              <Button
                variant="destructive"
                className="w-full"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button className="w-full" onClick={() => setOpen(false)}>
                Login
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;
