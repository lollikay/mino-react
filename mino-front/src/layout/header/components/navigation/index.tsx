"use client"

import { MENU } from "./constants/menu";
import { usePathname } from "next/navigation";
import { CustomLink } from "@/src/components/custom-link";

export const TopNavigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-7 text-taupe-400">
        {MENU.map(item => (
          <li
            key={item.url}
          >
            <CustomLink
              href={item.url}
              className={`${pathname === item.url ? "text-taupe-200" : ""} block py-2`}
            >
              {item.title}
            </CustomLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}