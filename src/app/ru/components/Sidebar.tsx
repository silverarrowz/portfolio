"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface SidebarProps {
  color?: string;
  navLink?: {
    href: string;
    label: string;
  };
}

const Sidebar = ({ color, navLink }: SidebarProps) => {
  const currentYear = new Date().getFullYear();

  const underlineAnimation = ` group relative after:absolute after:w-full after:h-0.5 after:bg-black  
             after:-bottom-1 after:left-0 after:scale-x-0 
             after:transition-transform after:duration-300 after:ease-in-out 
             after:origin-bottom-right
             hover:after:scale-x-100 hover:after:origin-bottom-left`;

  return (
    <aside
      className={cn(
        `absolute top-0 z-50 flex h-10 w-screen items-center justify-between p-10 md:fixed md:h-full md:w-10 md:flex-col box-border`,
        color ? `text-${color}` : ""
      )}
    >
      <div className="flex items-center space-x-5 text-sm md:mt-32 md:-rotate-90 md:space-x-10">
        <hr
          className={cn(
            `w-10 md:w-20 border-[1.5px] `,
            color ? `border-${color}` : ""
          )}
        />
        {navLink === undefined ? (
          <>
            <a href="/ru/" className={underlineAnimation}>
              Русский
            </a>
            <a href="/en/" className={underlineAnimation}>
              English
            </a>
          </>
        ) : (
          <Link
            className={cn(`w-max`, underlineAnimation)}
            href={navLink!.href}
          >
            {navLink!.label}
          </Link>
        )}
      </div>
      <div className=" text-xs md:-rotate-90 md:mb-16 w-max">
        &copy; {currentYear}{" "}
        <span className="hidden md:inline">Д. Кармадонова</span>
      </div>
    </aside>
  );
};

export default Sidebar;
