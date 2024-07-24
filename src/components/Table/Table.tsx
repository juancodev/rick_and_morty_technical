"use client";

import {
  Table,
  TableBody,
  TableCaption,
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
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Lista de Personajes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="flex flex-wrap justify-center">
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
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Lista de Episodios</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="flex flex-wrap justify-center">
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
