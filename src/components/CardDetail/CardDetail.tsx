"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "app/a/components/ui/card";

export function CardDetailComponent({ character }: CardDetailComponentProps) {
  const [colors, setColor] = useState({
    bgColor: `bg-cyan-400`,
    colorText: `text-black`,
  });

  useEffect(() => {
    switch (character?.species) {
      case "Human":
        setColor({
          bgColor: `bg-cyan-400`,
          colorText: `text-black`,
        });
        break;
      case "Alien":
        setColor({
          bgColor: `bg-lime-500`,
          colorText: `text-white`,
        });
        break;
      default:
        `bg-cyan-400`;
    }
  }, [character?.species]);
  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <Image
            src={character?.image || ""}
            alt={character?.name || ""}
            width={350}
            height={350}
            className="relative"
          />
          <CardTitle className="text-center">{character?.name}</CardTitle>
          <CardDescription
            className={`border absolute py-1 px-2 ${colors.bgColor} text-center font-semibold text-lg ${colors.colorText}`}
          >
            {character?.species}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{character?.location.name}</p>
          <p>{character?.gender}</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
}
