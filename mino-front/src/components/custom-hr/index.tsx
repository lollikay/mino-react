import { FC } from "react";

type Props = {
  className?: string;
}

export const CustomHr: FC<Props> = ({ className = "" }) => (
  <hr className={`border-taupe-700 ${className}`} />
);