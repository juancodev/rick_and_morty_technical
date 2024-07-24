
//endpoints

export const rickMortyAPIUrls = {
  characters: {
    all: `https://rickandmortyapi.com/api/character`,
    single: (id: number) => `ttps://rickandmortyapi.com/api/character/${id}`,
    multiple: (ids: number[]) => `https://rickandmortyapi.com/api/character/${ids}`
  },
  location: {
    all: `https://rickandmortyapi.com/api/location`,
    single: (id: number) => `https://rickandmortyapi.com/api/location/${id}`,
    multiple: (ids: number[]) => `https://rickandmortyapi.com/api/location/${ids}`
  },
  episode: {
    all: `https://rickandmortyapi.com/api/episode`,
    single: (id: number) => `https://rickandmortyapi.com/api/episode/${id}`,
    multiple: (ids: number[]) => `https://rickandmortyapi.com/api/episode/${ids}`
  }
}