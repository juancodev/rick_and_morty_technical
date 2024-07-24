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

export function FilterComponents({ data, setData }: FilterComponentsProps) {
  const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      name: event.target.value,
    });
  };

  const handleSelectStatusFilter = (value: string) => {
    setData({
      ...data,
      status: value,
    });
  };

  const handleSelectSpeciesFilter = (value: string) => {
    setData({
      ...data,
      species: value,
    });
  };

  const handleSelectGenderFilter = (value: string) => {
    setData({
      ...data,
      gender: value,
    });
  };

  const handleButtonRemoveFilters = () => {
    setData({
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
            <Label>Buscar un personaje</Label>
            <Input
              className="border-t-0 border-x-0 rounded-none bg-slate-300/15"
              placeholder="Rick Sanchez"
              onChange={handleInputSearch}
              value={data.name}
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
}
