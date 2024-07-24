
//endpoints

export const rickMortyAPIUrls = {
  characters: {
    all: `https://rickandmortyapi.com/api/character`,
    single: (id: number) => `https://rickandmortyapi.com/api/character/${id}`,
    multiple: (ids: number[]) => `https://rickandmortyapi.com/api/character/${ids}`,
    filter: (name: string, status: string, species: string, gender: string) => `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&gender=${gender}`
  },
  location: {
    all: `https://rickandmortyapi.com/api/location`,
    single: (id: number) => `https://rickandmortyapi.com/api/location/${id}`,
    multiple: (ids: number[]) => `https://rickandmortyapi.com/api/location/${ids}`
  },
  episode: {
    all: `https://rickandmortyapi.com/api/episode`,
    single: (id: number) => `https://rickandmortyapi.com/api/episode/${id}`,
    multiple: (ids: number[]) => `https://rickandmortyapi.com/api/episode/${ids}`,
    filter: (name: string, episode: string[] | string) => `https://rickandmortyapi.com/api/episode/?name=${name}&episode=${episode}`
  }
}