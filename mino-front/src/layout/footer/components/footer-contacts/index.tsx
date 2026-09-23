import { IconProps } from "@/types/icon-props";
import { FC } from "react";

type Props = {
  contacts: {
    icon: FC<IconProps>;
    text: string;
  }[];
}

export const FooterContacts: FC<Props> = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact, index) => {
        const Component = contact.icon;
        return (
        <li key={index} className="flex gap-1 items-center mb-1">
          <span>
              <Component width={16} height={16} />
          </span>
          {contact.text}
        </li>
      )})}
    </ul>
  );
};