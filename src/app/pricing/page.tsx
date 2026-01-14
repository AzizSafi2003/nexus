import { currentUser } from "@clerk/nextjs/server";
import PricingClient from "./PricingClient";

async function PricingPage() {
  const user = await currentUser();

  return <PricingClient userId={user?.id ?? null} />;
}

export default PricingPage;
