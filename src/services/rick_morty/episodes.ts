import { rickMortyAPIUrls } from "./url";

export async function getEpisodesByQuery(name: string = "", episode: string[] | string = "") {
  try {
    const apiUrlWithQuery = `${rickMortyAPIUrls.episode.filter(name, episode)}`;
    const response = await fetch(apiUrlWithQuery)
    const { results, info } = await response.json();
    return { results, info }
  } catch (error) {
    console.log(error);
  }
}