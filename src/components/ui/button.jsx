// import { Button as ButtonPrimitive } from "@base-ui/react/button"
// import { cva } from "class-variance-authority";

// import { cn } from "@/lib/utils"

// const buttonVariants = cva(
//   "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary/80",
//         outline:
//           "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
//         secondary:
//           "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
//         ghost:
//           "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
//         destructive:
//           "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default:
//           "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
//         xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
//         sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
//         lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
//         icon: "size-8",
//         "icon-xs":
//           "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
//         "icon-sm":
//           "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
//         "icon-lg": "size-9",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// )

// function Button({
//   className,
//   variant = "default",
//   size = "default",
//   ...props
// }) {
//   return (
//     <ButtonPrimitive
//       data-slot="button"
//       className={cn(buttonVariants({ variant, size, className }))}
//       {...props} />
//   );
// }

// export { Button, buttonVariants }















// import { Button as ButtonPrimitive } from "@base-ui/react/button";
// import { cva } from "class-variance-authority";

// import { cn } from "@/lib/utils";

// const buttonVariants = cva(
//   "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
//   {
//     variants: {
//       variant: {
//         default: "bg-red-500 hover:bg-red-600 text-white",

//         outline: "border border-red-500 bg-white text-red-500 hover:bg-red-50",

//         secondary: "bg-green-500 hover:bg-green-600 text-white",

//         ghost: "bg-transparent hover:bg-gray-100 text-gray-900",

//         destructive: "bg-red-800 hover:bg-red-900 text-white",

//         link: "text-blue-600 underline hover:text-blue-700",
//       },

//       size: {
//         default: "h-10 px-4 py-2",
//         xs: "h-7 px-2 text-xs",
//         sm: "h-8 px-3 text-sm",
//         lg: "h-11 px-6 text-base",
//         icon: "h-10 w-10",
//         "icon-xs": "h-7 w-7",
//         "icon-sm": "h-8 w-8",
//         "icon-lg": "h-11 w-11",
//       },
//     },

//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   },
// );

// function Button({
//   className,
//   variant = "default",
//   size = "default",
//   ...props
// }) {
//   return (
//     <ButtonPrimitive
//       data-slot="button"
//       className={cn(buttonVariants({ variant, size, className }))}
//       {...props}
//     />
//   );
// }

// export { Button, buttonVariants };






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
