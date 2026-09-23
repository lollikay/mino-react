import { CustomLink } from "@/src/components/custom-link";
import { MenuItem } from "@/types/menu-item";
import { FC } from "react";

type Props = {
  menu: MenuItem[];
  className?: string;
}

export const FooterMenu: FC<Props> = ({ menu, className = "" }) => {
  return (
    <ul className={`text-taupe-300 ${className}`}>
      {menu.map((item) => (
        <li key={item.url} className="first:text-lg first:mb-2 mb-1">
          <CustomLink
            href={item.url}
          >
            {item.title}
          </CustomLink>
        </li>
      ))}
    </ul>
  );
};