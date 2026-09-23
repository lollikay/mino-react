import { Dictionary } from "@/src/dictionaries";
import { EmailIcon } from "@/src/icons/email";
import { HouseIcon } from "@/src/icons/house";
import { PhoneIcon } from "@/src/icons/phone";
import { IconProps } from "@/types/icon-props";
import { KeyedMenuItem } from "@/types/menu-item";
import { FC } from "react";

export const CATALOG_MENU: KeyedMenuItem<keyof Dictionary["footer"]["catalog"]>[] = [
  { url: "/category", titleKey: "title" },
  { url: "/category/gitary-i-gitarnoe-oborudovanie", titleKey: "guitars" },
  { url: "/category/udarnye", titleKey: "drums" },
  { url: "/category/zvukovoe-oborudovanie", titleKey: "sound" },
  { url: "/category/svetovoe-oborudovanie", titleKey: "light" },
  { url: "/category/v-podarok-muzykantu", titleKey: "gifts" },
  { url: "/category/muzykalnye-instrumenty-i-oborudovanie-dlya-muzykalnyh-shkol", titleKey: "schools" },
];

export const ORDER_MENU: KeyedMenuItem<keyof Dictionary["footer"]["order"]>[] = [
  { url: "/order", titleKey: "title" },
  { url: "/dostavka-i-oplata", titleKey: "payment" },
  { url: "/dostavka-i-oplata#delivery", titleKey: "delivery" },
];

export const ABOUT_MENU: KeyedMenuItem<keyof Dictionary["footer"]["about"]>[] = [
  { url: "/about", titleKey: "title" },
  { url: "/news", titleKey: "news" },
  { url: "/contact", titleKey: "contact" },
];

export const ABOUT_CONTACTS: {
  icon: FC<IconProps>;
  textKey: keyof Dictionary["footer"]["contacts"];
}[] = [
  { icon: HouseIcon, textKey: "address" },
  { icon: PhoneIcon, textKey: "phone" },
  { icon: EmailIcon, textKey: "email" },
];
