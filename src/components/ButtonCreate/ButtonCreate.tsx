import React from "react";
import { Button } from "app/a/components/ui/button";
import { Input } from "app/a/components/ui/input";
import { Label } from "app/a/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "app/a/components/ui/popover";
import { PlusCircleIcon, UserPlus2Icon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "app/a/components/ui/select";

export const ButtonCreate = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <PlusCircleIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">
                Datos del nuevo personaje
              </h4>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  defaultValue="Rick"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="status">Estatus</Label>
                <Select>
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
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="species">Especie</Label>
                <Select>
                  <SelectTrigger className="w-[190px]">
                    <SelectValue placeholder="Especie del personaje" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Especie</SelectLabel>
                      <SelectItem value="Human">Human</SelectItem>
                      <SelectItem value="Alien">Alien</SelectItem>
                      <SelectItem value="Humanoid">Humanoid</SelectItem>
                      <SelectItem value="Poopybutthole">
                        Poopybutthole
                      </SelectItem>
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
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="gender">Género</Label>
                <Select>
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
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="location">Localidad</Label>
                <Input
                  id="location"
                  defaultValue="Earth"
                  className="col-span-2 h-8"
                />
              </div>
            </div>
            <Button>
              <UserPlus2Icon />
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};
