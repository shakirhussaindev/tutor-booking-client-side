"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Tutors",
    href: "/tutors",
  },
  {
    title: "Add Tutor",
    href: "/add-tutor",
  },
  {
    title: "My Tutors",
    href: "/my-tutors",
  },
  {
    title: "Booked Sessions",
    href: "/my-booked-sessions",
  },
];

const NavLinks = ({ mobile = false, onClick }) => {
  const pathname = usePathname();

  return (
    <>
      {links.map(({ title, href }) => {
        const active = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            onClick={onClick}
            className={
              mobile
                ? `
                    block rounded-xl px-4 py-3
                    transition-all duration-200
                    ${
                      active
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }
                  `
                : `
                    relative px-1 py-2
                    font-medium transition-colors duration-300
                    ${
                      active
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:rounded-full
                    after:bg-primary
                    after:transition-all
                    after:duration-300
                    ${active ? "after:w-full" : "after:w-0 hover:after:w-full"}
                  `
            }
          >
            {title}
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
