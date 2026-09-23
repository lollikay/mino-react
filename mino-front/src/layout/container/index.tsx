import { FC, PropsWithChildren } from "react";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className="mx-auto px-3 container"
    >
      {children}
    </div>
  );
};