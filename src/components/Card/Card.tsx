"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "app/a/components/ui/card";
import { MapPin, Tv } from "lucide-react";

export function CardComponents({
  charactersValues,
  episodesValues,
}: CardComponentProps) {
  const [colors, setColor] = useState({
    bgColor: `bg-cyan-400`,
    colorText: `text-black`,
  });

  const [genderColor, setGenderColor] = useState({
    colorText: `text-black`,
  });

  const router = useRouter();

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

  useEffect(() => {
    switch (charactersValues?.gender) {
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
  }, [charactersValues?.gender]);

  const handleClick = () => {
    if (charactersValues?.id) {
      router.push(`/character/${charactersValues.id}`);
    }
  };

  if (charactersValues) {
    return (
      <>
        <Card
          className="w-[350px] max-md:w-[300px] cursor-pointer"
          onClick={handleClick}
        >
          <CardHeader>
            <Image
              src={charactersValues?.image || ""}
              alt={charactersValues?.name || ""}
              width={350}
              height={350}
              className="relative"
            />
            <CardTitle className="text-center pt-2">
              {charactersValues?.name || episodesValues?.name}
            </CardTitle>
            <CardDescription
              className={`border absolute py-1 px-2 ${colors.bgColor} text-center font-semibold text-lg ${colors.colorText}`}
            >
              {charactersValues?.species || episodesValues?.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-3 flex">
              <MapPin />
              <p className="text-lg pl-2">{charactersValues?.location.name}</p>
            </div>
            <p className={`${genderColor.colorText} font-bold`}>
              {charactersValues?.gender}
            </p>
          </CardContent>
          <CardFooter>
            <p>Editar</p>
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
              className={`border py-1 px-2 bg-sky-600 text-center font-semibold text-lg text-white mb-6`}
            >
              {episodesValues?.air_date}
            </p>
            <div className="flex justify-center">
              <Tv />
              <p className="pt-1 pl-1">{episodesValues?.episode}</p>
            </div>
          </CardContent>
          <CardFooter>
            <p>Editar</p>
          </CardFooter>
        </Card>
      </>
    );
  }
}
