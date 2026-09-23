import { FC } from "react";
import { ABOUT_CONTACTS, ABOUT_MENU, CATALOG_MENU, ORDER_MENU } from "./constants/menus";
import { Container } from "../container";
import { CustomHr } from "@/src/components/custom-hr";
import { FooterMenu } from "./components/footer-menu";
import { FooterContacts } from "./components/footer-contacts";

const MENUS = [
  CATALOG_MENU,
  ORDER_MENU,
];

export const Footer: FC = () => {
  return (
    <>
      <CustomHr className="my-5" />
      <Container>
        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm mb-5">
          {MENUS.map((menu, index) => (
            <FooterMenu
              key={index}
              menu={menu}
            />
          ))}
          <div>
            <FooterMenu
              menu={ABOUT_MENU}
              className="mb-2"
            />
            <FooterContacts
              contacts={ABOUT_CONTACTS}
            />
          </div>
        </nav>
      </Container>
    </>
  );
};