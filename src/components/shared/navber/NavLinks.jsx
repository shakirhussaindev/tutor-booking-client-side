"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Home",
    href: "/",
    private: false,
  },
  {
    title: "Tutors",
    href: "/tutors",
    private: false,
  },
  {
    title: "Add Tutor",
    href: "/add-tutor",
    private: true,
  },
  {
    title: "My Tutors",
    href: "/my-tutors",
    private: true,
  },
  {
    title: "Booked Sessions",
    href: "/my-bookings",
    private: true,
  },
];

const NavLinks = ({ user, mobile = false, onClick }) => {
  const pathname = usePathname();

  const visibleLinks = links.filter((link) => (link.private ? !!user : true));

  return (
    <>
      {visibleLinks.map(({ title, href }) => {
        const active =
          href === "/" ? pathname === "/" : pathname.startsWith(href);

        return (
          <Link
            key={href}
            href={href}
            onClick={onClick}
            className={
              mobile
                ? `
                    block rounded-xl px-4 py-3
                    font-medium
                    transition-all duration-200
                    ${
                      active
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }
                  `
                : `
                    relative px-1 py-2
                    font-medium
                    transition-colors duration-300
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
