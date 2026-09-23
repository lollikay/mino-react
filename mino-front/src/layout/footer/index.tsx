import { ABOUT_CONTACTS, ABOUT_MENU, CATALOG_MENU, ORDER_MENU } from "./constants/menus";
import { Container } from "../container";
import { CustomHr } from "@/src/components/custom-hr";
import { FooterMenu } from "./components/footer-menu";
import { FooterContacts } from "./components/footer-contacts";
import { getDictionary } from "@/src/dictionaries";
import { resolveMenu } from "@/src/utils/resolve-menu";

export const Footer = async () => {
  const { footer } = await getDictionary();

  const menus = [
    resolveMenu(CATALOG_MENU, footer.catalog),
    resolveMenu(ORDER_MENU, footer.order),
  ];
  const aboutMenu = resolveMenu(ABOUT_MENU, footer.about);
  const contacts = ABOUT_CONTACTS.map(({ icon, textKey }) => ({
    icon,
    text: footer.contacts[textKey],
  }));

  return (
    <>
      <CustomHr className="my-5" />
      <Container>
        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm mb-5">
          {menus.map((menu, index) => (
            <FooterMenu
              key={index}
              menu={menu}
            />
          ))}
          <div>
            <FooterMenu
              menu={aboutMenu}
              className="mb-2"
            />
            <FooterContacts
              contacts={contacts}
            />
          </div>
        </nav>
      </Container>
    </>
  );
};
