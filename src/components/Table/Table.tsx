"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "app/a/components/ui/table";
import { CardComponents } from "app/components/Card";

export function TableComponent({ characters, episodes }: TableComponentProps) {
  if (characters) {
    return (
      <>
        <Table className="mt-4">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center text-white text-lg">
                Lista de Personajes
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow
              className={
                characters.length < 3
                  ? "h-screen flex flex-wrap justify-center"
                  : "flex flex-wrap justify-center"
              }
            >
              {characters?.map((item, index) => (
                <TableCell key={index}>
                  <CardComponents charactersValues={item} />
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </>
    );
  } else if (episodes) {
    return (
      <>
        <Table className="mt-4">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center text-white text-lg">
                Lista de Episodios
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className={"flex flex-wrap justify-center"}>
              {episodes?.map((item, index) => (
                <TableCell key={index}>
                  <CardComponents episodesValues={item} />
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </>
    );
  }
}
