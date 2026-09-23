"use client"

import { usePathname } from "next/navigation";
import { CustomLink } from "@/src/components/custom-link";
import { MenuItem } from "@/types/menu-item";
import { FC } from "react";

type Props = {
  menu: MenuItem[];
}

export const TopNavigation: FC<Props> = ({ menu }) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-7 text-taupe-400">
        {menu.map(item => (
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
