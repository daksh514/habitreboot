"use client";
import React from "react";
import { Button } from "../ui/button";
import {
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

function UserBtn({ user }: { user: KindeUser | null }) {
  return (
    <div>
      
    </div>
  );
}

export default UserBtn;
