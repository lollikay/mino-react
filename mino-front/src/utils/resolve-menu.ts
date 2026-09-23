import { KeyedMenuItem, MenuItem } from "@/types/menu-item";

export const resolveMenu = <TKey extends string>(
  menu: KeyedMenuItem<TKey>[],
  labels: Record<TKey, string>,
): MenuItem[] => menu.map(({ url, titleKey }) => ({ url, title: labels[titleKey] }));
