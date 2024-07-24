import { getCharacters, getCharactersByQuery } from "app/services/rick_morty/characters";
import { getEpisodesByQuery } from "app/services/rick_morty/episodes"

export async function getCharactersAPI() {
  const characters = await getCharacters();

  return characters
}

export async function getCharactersAPIWithQuery(name: string = "", status: string = "", species: string = "", gender: string = "") {
  const data = await getCharactersByQuery(name, status, species, gender);

  return data;
}

export async function getEpisodesAPIWithQuery(name: string = "", episode: string[] | string = "") {
  const data = await getEpisodesByQuery(name, episode);

  return data;
}