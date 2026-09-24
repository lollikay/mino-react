"use client"

import { usePathname } from "next/navigation";
import { CustomLink } from "@/src/components/custom-link";
import { MenuItem } from "@/types/menu-item";
import { FC } from "react";
import { MenuIcon } from "@/src/icons/menu";
import { Container } from "@/src/layout/container";

type Props = {
  menu: MenuItem[];
}

export const TopNavigation: FC<Props> = ({ menu }) => {
  const pathname = usePathname();

  return (
    <nav className="bg-taupe-900 text-taupe-400 relative">
      <Container className="flex flex-col">
        <label
          className="peer self-end relative z-1 md:hidden has-checked:text-red-400 transition-colors cursor-pointer py-2"
        >
          <input
            className="hidden"
            type="checkbox"
          />
          <MenuIcon width={32} height={32} className="" />
        </label>
        <div className="fixed md:static top-0 right-0 bottom-0 w-full hidden peer-has-checked:block md:block p-5 md:p-0 bg-taupe-900">
          <ul className="flex flex-col md:flex-row gap-3 md:gap-7">
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
        </div>
      </Container>
    </nav>
  );
}
