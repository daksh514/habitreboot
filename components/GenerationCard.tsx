import React from "react";
import { Separator } from "./ui/separator";
import { SquareArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

function GenerationCard({
  title,
  createdAt,
  id
}: {
  title: string;
  createdAt: Date;
  id: string;
}) {
  return (
    <Link href={'/habit/'+id} className="bg-secondary px-2 py-3 rounded-md shadow-sm">
      <div>
        <h1 className="font-semibold">{title}</h1>
        
      </div>
    </Link>
  );
}

export default GenerationCard;
