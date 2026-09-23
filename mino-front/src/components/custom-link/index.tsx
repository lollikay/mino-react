import Link from "next/link";
import { FC, PropsWithChildren } from "react";

type Props = {
  className?: string;
  href: string;
};

export const CustomLink: FC<PropsWithChildren<Props>> = ({ className = "", href, children }) => {
  return (
    <Link
      href={href}
      className={`hover:text-red-400 hover:underline underline-offset-3 transition-colors ${className}`}
    >
      {children}
    </Link>
  )
}