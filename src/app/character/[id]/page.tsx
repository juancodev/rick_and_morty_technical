import { CardDetailComponent } from "app/components/CardDetail";
import { getCharactersAPI } from "app/app/api/route";

export default async function CharacterComponent({ params }: ParamsProps) {
  const id = Number(params.id);

  const response = await getCharactersAPI(id);

  return (
    <>
      <main className="flex justify-center items-center">
        <CardDetailComponent character={response} />
      </main>
    </>
  );
}
