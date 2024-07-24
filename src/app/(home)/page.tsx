"use client";

import { useState, useEffect } from "react";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
import { TableComponent } from "app/components/Table";
import { FilterComponents } from "app/components/Filter";
import { getCharactersAPIWithQuery } from "app/app/api/route";

export default function Home() {
  // const cookie = cookies();
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

  // if (!cookie.get("accessToken")?.value) {
  //   redirect("/login");
  // }

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
      </main>
    </>
  );
}
