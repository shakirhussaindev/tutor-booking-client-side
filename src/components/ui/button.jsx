
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-sky-600 text-white shadow-md hover:bg-sky-700 hover:shadow-lg",

        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",

        outline:
          "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800",

        ghost:
          "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",

        destructive: "bg-red-600 text-white hover:bg-red-700 shadow-md",

        success: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md",

        warning: "bg-amber-500 text-white hover:bg-amber-600 shadow-md",

        link: "text-sky-600 underline-offset-4 hover:underline dark:text-sky-400",
      },

      size: {
        xs: "h-8 px-3 text-xs",

        sm: "h-9 px-4 text-sm",

        default: "h-10 px-5 text-sm",

        lg: "h-11 px-6 text-base",

        xl: "h-12 px-8 text-lg",

        icon: "h-10 w-10 p-0",

        "icon-sm": "h-9 w-9 p-0",

        "icon-lg": "h-12 w-12 p-0",
      },

      fullWidth: {
        true: "w-full",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({ className, variant, size, fullWidth, ...props }) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          size,
          fullWidth,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
