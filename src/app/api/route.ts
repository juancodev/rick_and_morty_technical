import { getCharacters } from "app/services/rick_morty/Characters";

export async function getCharactersAPI() {
  const characters = await getCharacters();

  return characters
}