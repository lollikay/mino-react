import { FC } from "react";
import { IconProps } from "@/types/icon-props";

export const EmailIcon: FC<IconProps> = ({ className, width, height }) => (
  <svg
    className={className}
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width={width}
    height={height}
  >
    <g>
      <path
        fill="currentColor"
        d="M32,34.934L63.617,10.34C62.984,8.965,61.613,8,60,8H4c-1.613,0-2.984,0.965-3.617,2.34L32,34.934z"
      />
      <path
        fill="currentColor"
        d="M34.457,43.156C33.734,43.719,32.867,44,32,44s-1.734-0.281-2.457-0.844L0,20.18V52c0,2.211,1.789,4,4,4h56
          c2.211,0,4-1.789,4-4V20.18L34.457,43.156z"
      />
    </g>
  </svg>
);