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
}

interface CardComponentProps {
  charactersValues: CharactersData;
}

interface TableComponentProps {
  characters: CharactersData[];
}

interface FilterData {
  name: string;
  status?: string;
  species?: string;
  gender?: string;
}

interface FilterComponentsProps {
  data: FilterData;
  setData: (data: FilterData) => void;
}