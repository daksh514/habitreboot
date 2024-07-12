import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import React from "react";
import NavBarBtn from "./utils/NavBarBtn";
import { NavBarLinks } from "@/lib/constants";
import Link from "next/link";
import { Button } from "./ui/button";

function Navbar({ user }: { user: KindeUser | null }) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-mukta font-semibold">Habit Reboot</h1>
      <div className="flex gap-2 items-center">
        <ul className="flex gap-2 items-center">
          {NavBarLinks.map((link) => (
            <li key={link.title}>
              <Button variant={"ghost"}>
                <Link href={link.href}>{link.title}</Link>
              </Button>
            </li>
          ))}
        </ul>
        <NavBarBtn user={user} />
      </div>
    </div>
  );
}

export default Navbar;
