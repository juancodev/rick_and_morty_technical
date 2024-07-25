"use client";

import { useState, useEffect } from "react";
import { FilterComponents } from "app/components/Filter";
import { TableComponent } from "app/components/Table";
import { getEpisodesByQuery } from "app/services/rick_morty/episodes";

export default function Episodes() {
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  const [filterData, setFilterData] = useState<FilterEpisodesData>({
    name: "",
    episode: "",
  });

  useEffect(() => {
    getEpisodesByQuery(filterData.name, filterData.episode)
      .then((response) => {
        console.log(response);
        setFilteredEpisodes(response?.results);
      })
      .catch((err) => console.log(err));
  }, [filterData]);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <FilterComponents
          title="Buscar un episodio por nombre"
          place="episode"
          resultFetch={filteredEpisodes}
          episodeData={filterData}
          setEpisodeData={setFilterData}
        />
        <TableComponent episodes={filteredEpisodes} />
      </main>
    </>
  );
}
