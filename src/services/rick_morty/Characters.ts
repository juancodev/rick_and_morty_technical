import { rickMortyAPIUrls } from "./url";

export async function getCharacters(id?: number): Promise<CharacterData[] | undefined> {
  try {
    const apiUrl = id ? `${rickMortyAPIUrls.characters.single(id)}` : `${rickMortyAPIUrls.characters.all}`;

    const response = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json"
      }
    })

    const { results } = await response.json();

    return results;
  } catch (error) {

  }
}