export type MenuItem = {
  url: string;
  title: string;
}

export type KeyedMenuItem<TKey extends string = string> = {
  url: string;
  titleKey: TKey;
}
