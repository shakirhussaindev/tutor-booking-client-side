// "use client";

// import { useEffect } from "react";
// import { X } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import NavLinks from "./NavLinks";
// import ThemeToggle from "./ThemeToggle";
// import Link from "next/link";
// import { authClient } from "@/lib/auth-client";

// const MobileMenu = ({
//   open,
//   setOpen,
//   user,
//   handleLogout,
// }) => {
//   // Prevent body scroll
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [open]);

//   const handleLogout = async () => {
//     await authClient.signOut();

//     setOpen(false);
//   };

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         onClick={() => setOpen(false)}
//         className={`
//           fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
//           transition-all duration-300
//           ${open ? "opacity-100 visible" : "opacity-0 invisible"}
//         `}
//       />

//       {/* Menu */}
//       <aside
//         className={`
//           fixed
//           top-0
//           left-0
//           z-50
//           h-screen
//           w-[290px]
//           border-r
//           border-border
//           bg-background
//           shadow-2xl
//           transition-transform
//           duration-300
//           ${open ? "translate-x-0" : "-translate-x-full"}
//         `}
//       >
//         <div className="flex items-center justify-between border-b p-5">
//           <h2 className="text-lg font-bold">SMART TUTOR</h2>

//           <Button size="icon" variant="ghost" onClick={() => setOpen(false)}>
//             <X className="size-5" />
//           </Button>
//         </div>

//         <div className="space-y-2 p-5">
//           <NavLinks user={user} mobile onClick={() => setOpen(false)} />
//         </div>

//         <div className="border-t p-5 space-y-4">
//           <ThemeToggle />

//           {user ? (
//             <>
//               <Button asChild className="w-full">
//                 <Link href="/profile" onClick={() => setOpen(false)}>
//                   Profile
//                 </Link>
//               </Button>

//               {user && (
//                 <div className="rounded-xl border p-4">
//                   <p className="font-semibold">{user.name}</p>

//                   <p className="text-sm text-muted-foreground truncate">
//                     {user.email}
//                   </p>
//                 </div>
//               )}

//               <Button
//                 variant="destructive"
//                 className="w-full"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button asChild className="w-full">
//                 <Link href="/login" onClick={() => setOpen(false)}>
//                   Login
//                 </Link>
//               </Button>

//               <Button asChild variant="outline" className="w-full">
//                 <Link href="/signup" onClick={() => setOpen(false)}>
//                   Sign Up
//                 </Link>
//               </Button>
//             </>
//           )}
//         </div>
//       </aside>
//     </>
//   );
// };

// export default MobileMenu;

"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

import { authClient } from "@/lib/auth-client";

const MobileMenu = ({ open, setOpen, user }) => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleLogout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error(error.message || "Logout failed");
      return;
    }

    toast.success("Logged out successfully");

    setOpen(false);
    router.refresh();
    router.push("/");
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
          transition-all duration-300
          ${open ? "visible opacity-100" : "invisible opacity-0"}
        `}
      />

      {/* Drawer */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          h-screen w-[300px]
          overflow-y-auto
          border-r border-border
          bg-background/95
          backdrop-blur-xl
          shadow-2xl
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-lg font-bold">SMART TUTOR</h2>

          <Button size="icon" variant="ghost" onClick={() => setOpen(false)}>
            <X className="size-5" />
          </Button>
        </div>

        {/* User */}
        {user && (
          <div className="border-b p-5">
            <p className="font-semibold">{user.name}</p>

            <p className="truncate text-sm text-muted-foreground">
              {user.email}
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="space-y-2 p-5">
          <NavLinks user={user} mobile onClick={() => setOpen(false)} />
        </div>

        {/* Footer */}
        <div className="border-t p-5 space-y-4">
          <div className="flex items-center justify-between rounded-xl border p-3">
            <span className="text-sm font-medium">Theme</span>

            <ThemeToggle />
          </div>

          {user ? (
            <>
              <Button asChild className="w-full">
                <Link href="/profile" onClick={() => setOpen(false)}>
                  My Profile
                </Link>
              </Button>

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
              <Button asChild className="w-full">
                <Link href="/login" onClick={() => setOpen(false)}>
                  Login
                </Link>
              </Button>

              <Button asChild variant="outline" className="w-full">
                <Link href="/signup" onClick={() => setOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;