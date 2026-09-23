import { Container } from "../container";
import { TopNavigation } from "./components/navigation";
import { MENU } from "./components/navigation/constants/menu";
import { getDictionary } from "@/src/dictionaries";
import { resolveMenu } from "@/src/utils/resolve-menu";

export const Header = async () => {
  const { header } = await getDictionary();

  return (
    <div>
      <Container>
        <TopNavigation menu={resolveMenu(MENU, header.nav)} />
      </Container>
    </div>
  );
};
