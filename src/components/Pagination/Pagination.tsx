"use client";

import { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "app/a/components/ui/pagination";
import { getPagination } from "app/services/rick_morty/characters";

export function PaginationComponent({
  setCharactersPagination,
}: PaginationComponentProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState<InfoProps>({});

  useEffect(() => {
    getPagination(String(currentPage))
      .then((response) => {
        setCharactersPagination(response?.results);
        setPaginationInfo(response?.info);
      })
      .catch((err) => console.log(err));
  }, [currentPage, setCharactersPagination]);

  const handleClickNextPage = () => {
    if (paginationInfo.next) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleClickPreviousPage = () => {
    if (paginationInfo?.prev) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickPreviousPage();
              }}
            />
          </PaginationItem>
          <PaginationItem>{currentPage}</PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationItem>{paginationInfo.pages}</PaginationItem>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickNextPage();
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
