import { rickMortyAPIUrls } from "./url";

export async function getCharacters(id?: number): Promise<CharactersData | any> {
  try {
    const apiUrl = id ? `${rickMortyAPIUrls.characters.single(id)}` : `${rickMortyAPIUrls.characters.all}`;

    const response = await fetch(apiUrl)

    if (response.ok) {

      const resultData = await response.json();
      return resultData
    }

  } catch (error) {
    throw (error);
  }
}

export async function getCharactersByQuery(name: string = "", status: string = "", species: string = "", gender: string = "") {
  try {
    const apiUrlWithQuery = `${rickMortyAPIUrls.characters.filter(name, status, species, gender)}`;
    const response = await fetch(apiUrlWithQuery)
    const { results, info } = await response.json();
    return { results, info }
  } catch (error) {
    console.log(error);
  }
}