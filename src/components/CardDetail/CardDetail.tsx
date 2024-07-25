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
import { MapPin } from "lucide-react";

export function CardDetailComponent({ character }: CardDetailComponentProps) {
  const [colors, setColor] = useState({
    bgColor: `bg-cyan-400`,
    colorText: `text-black`,
  });

  const [genderColor, setGenderColor] = useState({
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

  useEffect(() => {
    switch (character?.gender) {
      case "Male":
        setGenderColor({
          colorText: `text-blue-600`,
        });
        break;
      case "Female":
        setGenderColor({
          colorText: `text-pink-700`,
        });
        break;
      case "Unknown":
        setGenderColor({
          colorText: `text-sky-900`,
        });
        break;
      case "Genderless":
        setGenderColor({
          colorText: `text-yellow-600`,
        });
      default:
        `text-black`;
    }
  }, [character?.gender]);
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
          <CardTitle className="text-center pt-2">{character?.name}</CardTitle>
          <CardDescription
            className={`border absolute py-1 px-2 ${colors.bgColor} text-center font-semibold text-lg ${colors.colorText}`}
          >
            {character?.species}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-3 flex">
            <MapPin />
            <p className="text-lg pl-2">{character?.location.name}</p>
          </div>
          <p className={`${genderColor.colorText} font-bold`}>
            {character?.gender}
          </p>
        </CardContent>
        <CardFooter>
          <p>Editar</p>
        </CardFooter>
      </Card>
    </>
  );
}
