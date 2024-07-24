import { getCharacters, getCharactersByQuery } from "app/services/rick_morty/characters";
import { getEpisodesByQuery } from "app/services/rick_morty/episodes"

export async function getCharactersAPI(id: number) {
  if (!id) {
    const characters = await getCharacters();
    return characters

  } else {
    const character = await getCharacters(id);
    return character;
  }
}

export async function getCharactersAPIWithQuery(name: string = "", status: string = "", species: string = "", gender: string = "") {
  const data = await getCharactersByQuery(name, status, species, gender);

  return data;
}

export async function getEpisodesAPIWithQuery(name: string = "", episode: string[] | string = "") {
  const data = await getEpisodesByQuery(name, episode);

  return data;
}