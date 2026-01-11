import { currentUser } from "@clerk/nextjs/server";
import HeaderClient from "./HeaderClient";

async function Header() {
  const user = await currentUser();

  return <HeaderClient userId={user?.id} />;
}

export default Header;
