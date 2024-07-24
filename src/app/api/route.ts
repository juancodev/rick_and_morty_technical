import { getCharacters, getCharactersByQuery } from "app/services/rick_morty/Characters";

export async function getCharactersAPI() {
  const characters = await getCharacters();

  return characters
}

export async function getCharactersAPIWithQuery(name: string = "", status: string = "", species: string = "", gender: string = "") {
  const data = await getCharactersByQuery(name, status, species, gender);

  return data;
}