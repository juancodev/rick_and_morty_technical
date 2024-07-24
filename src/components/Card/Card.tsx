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

export function CardComponents({
  charactersValues,
  episodesValues,
}: CardComponentProps) {
  const [colors, setColor] = useState({
    bgColor: `bg-cyan-400`,
    colorText: `text-black`,
  });

  useEffect(() => {
    switch (charactersValues?.species) {
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
  }, [charactersValues?.species]);

  if (charactersValues) {
    return (
      <>
        <Card className="w-[350px]">
          <CardHeader>
            <Image
              src={charactersValues?.image || ""}
              alt={charactersValues?.name || ""}
              width={350}
              height={350}
              className="relative"
            />
            <CardTitle className="text-center">
              {charactersValues?.name || episodesValues?.name}
            </CardTitle>
            <CardDescription
              className={`border absolute py-1 px-2 ${colors.bgColor} text-center font-semibold text-lg ${colors.colorText}`}
            >
              {charactersValues?.species || episodesValues?.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{charactersValues?.location.name}</p>
            <p>{charactersValues?.gender}</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </>
    );
  } else if (episodesValues) {
    return (
      <>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-center">
              {episodesValues?.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p
              className={`border py-1 px-2 ${colors.bgColor} text-center font-semibold text-lg ${colors.colorText}`}
            >
              {episodesValues?.air_date}
            </p>
            <p>{episodesValues?.episode}</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </>
    );
  }
}
