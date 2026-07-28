"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import { FiUser, FiLogOut, FiChevronDown } from "react-icons/fi";

import { authClient } from "@/lib/auth-client";

const UserMenu = ({ user }) => {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error(error.message || "Logout failed");
      return;
    }

    toast.success("Logged out successfully");

    router.refresh();
    router.push("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="ghost"
          className="h-auto rounded-full p-1 hover:bg-muted"
        >
          <div className="flex items-center gap-2">
            {user?.image ? (
              <Image
                src={user.image}
                alt={user.name}
                width={20}
                height={20}
                className="h-8 w-8 rounded-full border object-cover"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {user?.name?.charAt(0).toUpperCase()|| "U"}
              </div>
            )}

            <FiChevronDown className="hidden text-muted-foreground md:block" />
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64 rounded-xl">
        <div className="px-3 py-2">
          <p className="font-semibold">{user?.name}</p>

          <p className="truncate text-sm text-muted-foreground">
            {user?.email}
          </p>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link href="/profile" className="cursor-pointer flex">
            <FiUser className="mr-2" />
            My Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer text-red-600 focus:text-red-600 flex"
        >
          <FiLogOut className="mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
