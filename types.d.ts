interface ChildrenProps {
  children: React.ReactNode
}

interface AuthenticateValues {
  username: string
  password: string
}

interface CharactersData {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string,
    url: string,
  }
  location: {
    name: string,
    url: string,
  }
  image: string
  episode: string[]
  url: string
  created: string
}[]

interface EpisodesData {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string
}

interface CardComponentProps {
  charactersValues?: CharactersData;
  episodesValues?: EpisodesData;
}

interface CardDetailComponentProps {
  character: CharactersData
}

interface TableComponentProps {
  characters?: CharactersData[];
  episodes?: EpisodesData[];
}

interface FilterCharactersData {
  name: string;
  status?: string;
  species?: string;
  gender?: string;
}

interface FilterEpisodesData {
  name: string;
  episode?: string | string[];
}

interface FilterComponentsProps {
  title?: string;
  place: string;
  resultFetch?: EpisodesData[] | CharactersData[]
  characterData?: FilterCharactersData;
  setCharacterData?: (characterData: FilterCharactersData) => void;
  episodeData?: FilterEpisodesData;
  setEpisodeData?: (EpisodeData: FilterEpisodesData) => void;
}

interface ParamsProps {
  params: {
    id: string | number
  }
}

interface PaginationComponentProps {
  setCharactersPagination: (characterData) => void;
}

interface InfoProps {
  count?: number;
  pages?: string;
  next?: string;
  prev?: string;
}

interface CharacterState {
  characters: CharactersData[];
  filteredCharacters: CharactersData[];
  currentPage: number;
  totalPages: number;
  getCharacters: (query: FilterCharactersData) => Promise<void>;
  filterCharacters: (filter: FilterCharactersData) => void;
  setInitialCharacters: (page: number) => Promise<void>;
  setPage: (page: number) => void;
}