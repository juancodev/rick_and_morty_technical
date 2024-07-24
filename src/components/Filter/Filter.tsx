"use client";

import { ChangeEvent } from "react";
import { Input } from "app/a/components/ui/input";
import { Button } from "app/a/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "app/a/components/ui/select";
import { Label } from "app/a/components/ui/label";

export function FilterComponents({
  title,
  place,
  resultFetch,
  characterData,
  setCharacterData,
  episodeData,
  setEpisodeData,
}: FilterComponentsProps) {
  if (place === "character") {
    const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
      setCharacterData!({
        ...characterData,
        name: event.target.value,
      });
    };

    const handleSelectStatusFilter = (value: string) => {
      setCharacterData!({
        ...characterData!,
        status: value,
      });
    };

    const handleSelectSpeciesFilter = (value: string) => {
      setCharacterData!({
        ...characterData!,
        species: value,
      });
    };

    const handleSelectGenderFilter = (value: string) => {
      setCharacterData!({
        ...characterData!,
        gender: value,
      });
    };

    const handleButtonRemoveFilters = () => {
      setCharacterData!({
        name: "",
        status: "",
        species: "",
        gender: "",
      });
    };
    return (
      <>
        <div className="h-32 w-full flex flex-wrap justify-between items-center gap-3 my-5 px-10">
          <div className="flex gap-3 text-center items-center max-w-sm space-x-2">
            <div className="w-80 flex flex-col gap-3 items-center">
              <Label className="text-white">{title || "Buscar..."}</Label>
              <Input
                className="border-t-0 border-x-0 rounded-none bg-slate-300/15"
                placeholder="Rick Sanchez"
                onChange={handleInputSearch}
                value={characterData?.name}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Select onValueChange={handleSelectStatusFilter}>
              <SelectTrigger className="w-[190px]">
                <SelectValue placeholder="Estatus del personaje" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Estatus</SelectLabel>
                  <SelectItem value="Alive">Alive</SelectItem>
                  <SelectItem value="Dead">Dead</SelectItem>
                  <SelectItem value="Unknown">Unknown</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select onValueChange={handleSelectSpeciesFilter}>
              <SelectTrigger className="w-[190px]">
                <SelectValue placeholder="Especie del personaje" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Especie</SelectLabel>
                  <SelectItem value="Human">Human</SelectItem>
                  <SelectItem value="Alien">Alien</SelectItem>
                  <SelectItem value="Humanoid">Humanoid</SelectItem>
                  <SelectItem value="Poopybutthole">Poopybutthole</SelectItem>
                  <SelectItem value="Mythological">Mythological</SelectItem>
                  <SelectItem value="Unknown">Unknown</SelectItem>
                  <SelectItem value="Animal">Animal</SelectItem>
                  <SelectItem value="Disease">Disease</SelectItem>
                  <SelectItem value="Robot">Robot</SelectItem>
                  <SelectItem value="Cronenberg">Cronenberg</SelectItem>
                  <SelectItem value="Planet">Planet</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select onValueChange={handleSelectGenderFilter}>
              <SelectTrigger className="w-[190px]">
                <SelectValue placeholder="Género del personaje" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Género</SelectLabel>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Genderless">Genderless</SelectItem>
                  <SelectItem value="Unknown">Unknown</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button onClick={handleButtonRemoveFilters}>Remover filtro</Button>
          </div>
        </div>
      </>
    );
  } else if (place === "episode") {
    const handleEpisodeInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
      setEpisodeData!({
        ...episodeData,
        name: event.target.value,
      });
    };

    const handleSelectEpisodeFilter = (value: string | string[]) => {
      setEpisodeData!({
        ...episodeData!,
        episode: value,
      });
    };

    const handleButtonEpisodeRemoveFilters = () => {
      setEpisodeData!({
        name: "",
        episode: "",
      });
    };

    return (
      <>
        <div className="h-32 w-full flex flex-wrap justify-between items-center gap-3 my-5 px-10">
          <div className="flex gap-3 text-center items-center max-w-sm space-x-2">
            <div className="w-80 flex flex-col gap-3 items-center">
              <Label className="text-white">{title || "Buscar..."}</Label>
              <Input
                className="border-t-0 border-x-0 rounded-none bg-slate-300/15"
                placeholder="Pilot"
                onChange={handleEpisodeInputSearch}
                value={episodeData?.name}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Select onValueChange={handleSelectEpisodeFilter}>
              <SelectTrigger className="w-[250px]">
                <SelectValue placeholder="Lista de episodios" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Episodios</SelectLabel>
                  {resultFetch?.map(({ episode }, index) => (
                    <SelectItem key={index} value={episode as string}>
                      {episode}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button onClick={handleButtonEpisodeRemoveFilters}>
              Remover filtro
            </Button>
          </div>
        </div>
      </>
    );
  }
}
