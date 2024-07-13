import Navbar from "@/components/Navbar";
import HeroSec from "@/components/sections/HeroSec";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="bg-secondary/20 min-h-screen">
      <div className="widthContainer  ">
        <div className="py-5 ">
          <Navbar user={user} />
          <HeroSec />
        </div>
        <h1>Holstate</h1>
      </div>
    </div>
  );
}
