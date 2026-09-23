import { EmailIcon } from "@/src/icons/email";
import { HouseIcon } from "@/src/icons/house";
import { PhoneIcon } from "@/src/icons/phone";
import { MenuItem } from "@/types/menu-item";

export const CATALOG_MENU: MenuItem[] = [
  { url: "/category", title: "Каталог" },
  { url: "/category/gitary-i-gitarnoe-oborudovanie", title: "Гитары" },
  { url: "/category/udarnye", title: "Ударные" },
  { url: "/category/zvukovoe-oborudovanie", title: "Звуковое оборудование" },
  { url: "/category/svetovoe-oborudovanie", title: "Световое оборудование" },
  { url: "/category/v-podarok-muzykantu", title: "В подарок музыканту" },
  { url: "/category/muzykalnye-instrumenty-i-oborudovanie-dlya-muzykalnyh-shkol", title: "Инструменты и аксессуары для музыкальных школ" },
];

export const ORDER_MENU: MenuItem[] = [
  { url: "/order", title: "Как сделать заказ?" },
  { url: "/dostavka-i-oplata", title: "Оплата" },
  { url: "/dostavka-i-oplata#delivery", title: "Доставка" },
];

export const ABOUT_MENU: MenuItem[] = [
  { url: "/about", title: "Об интернет-магазине Минотавр" },
  { url: "/news", title: "Новости" },
  { url: "/contact", title: "Контакты" },
];

export const ABOUT_CONTACTS = [
  { icon: HouseIcon, text: "г. Челябинск, ул. Энгельса, 39 (позвоните перед посещением)" },
  { icon: PhoneIcon, text: "+7 902 861 49 21" },
  { icon: EmailIcon, text: "mntavr@mail.ru" },
];