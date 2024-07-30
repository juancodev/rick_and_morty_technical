"use client";

import { useState, useEffect } from "react";
import { TableComponent } from "app/components/Table";
import { FilterComponents } from "app/components/Filter";
import { PaginationComponent } from "app/components/Pagination";
import { useCharacterState } from "app/store/characterState";

export default function Home() {
  const {
    filteredCharacters,
    getCharacters,
    filterCharacters,
    setInitialCharacters,
    currentPage,
    totalPages,
  } = useCharacterState();

  // const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [filterData, setFilterData] = useState<FilterCharactersData>({
    name: "",
    status: "",
    species: "",
    gender: "",
  });

  useEffect(() => {
    setInitialCharacters(currentPage);
  }, [setInitialCharacters, currentPage]);

  useEffect(() => {
    getCharacters(filterData);
  }, [filterData, getCharacters]);

  useEffect(() => {
    filterCharacters(filterData);
  }, [filterData, filterCharacters]);

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
        <PaginationComponent setCharactersPagination={setFilterData} />
      </main>
    </>
  );
}
