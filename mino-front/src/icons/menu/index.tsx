import { FC } from "react";
import { IconProps } from "@/types/icon-props";

export const MenuIcon: FC<IconProps> = ({ className, width, height }) => (
  <svg
    className={className}
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width={width}
    height={height}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
    />
  </svg>
);
