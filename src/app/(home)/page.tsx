"use client";

import { useState, useEffect } from "react";
import { TableComponent } from "app/components/Table";
import { FilterComponents } from "app/components/Filter";
import { getCharactersAPIWithQuery } from "app/app/api/route";
import { PaginationComponent } from "app/components/Pagination";

export default function Home() {
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [filterData, setFilterData] = useState<FilterCharactersData>({
    name: "",
    status: "",
    species: "",
    gender: "",
  });

  useEffect(() => {
    getCharactersAPIWithQuery(
      filterData.name,
      filterData.status,
      filterData.species,
      filterData.gender
    )
      .then((result) => setFilteredCharacters(result?.results))
      .catch((err) => console.log(err));
  }, [filterData]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <FilterComponents
          title="Buscar un personaje por nombre"
          place="character"
          characterData={filterData}
          setCharacterData={setFilterData}
        />
        <TableComponent characters={filteredCharacters} />
        <PaginationComponent setCharactersPagination={setFilteredCharacters} />
      </main>
    </>
  );
}
