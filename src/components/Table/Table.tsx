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
import { getCharactersAPI } from "app/app/api/route";

export async function TableComponent() {
  const characters = await getCharactersAPI();

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
}
