import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
}

export const Container: FC<Props> = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto px-3 container ${className}`}
    >
      {children}
    </div>
  );
};
