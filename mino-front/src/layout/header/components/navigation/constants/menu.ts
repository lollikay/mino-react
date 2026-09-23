import { Dictionary } from "@/src/dictionaries";
import { KeyedMenuItem } from "@/types/menu-item";

export const MENU: KeyedMenuItem<keyof Dictionary["header"]["nav"]>[] = [
  {
    url: '/about',
    titleKey: 'about',
  },
  {
    url: '/news',
    titleKey: 'news',
  },
  {
    url: '/category',
    titleKey: 'catalog',
  },
  {
    url: '/dostavka-i-oplata',
    titleKey: 'delivery',
  },
  {
    url: '/contact',
    titleKey: 'contact',
  },
]
