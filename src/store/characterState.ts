import { create } from "zustand";
import { getCharactersByQuery } from "app/services/rick_morty/characters";

export const useCharacterState = create<CharacterState>((set) => ({
  characters: [],
  filteredCharacters: [],
  currentPage: 1,
  totalPages: 1,
  getCharacters: async (filter) => {
    try {
      const result = await getCharactersByQuery(
        filter.name,
        filter.status,
        filter.species,
        filter.gender
      );
      set({
        characters: result?.results,
        filteredCharacters: result?.results,
        totalPages: result?.info.page
      })
    } catch (err) {
      console.error(err);
    }
  },
  filterCharacters: (filter) => {
    set((state) => ({
      filteredCharacters: state.characters?.filter((character) => {
        const matchesName = character.name.toLowerCase().includes(filter.name?.toLowerCase());
        const matchesStatus = filter.status ? character.status === filter.status : true;
        const matchesSpecies = filter.species ? character.species === filter.species : true;
        const matchesGender = filter.gender ? character.gender === filter.gender : true;
        return matchesName && matchesStatus && matchesSpecies && matchesGender;
      }),
    }))
  },
  setInitialCharacters: async (page = 1) => {
    try {
      const result = await getCharactersByQuery("", "", "", "");
      set({
        characters: result?.results,
        filteredCharacters: result?.results,
        currentPage: page,
        totalPages: result?.info.pages,
      });
    } catch (err) {
      console.error(err);
    }
  },
  setPage: (page) => set(({ currentPage: page }))
}))