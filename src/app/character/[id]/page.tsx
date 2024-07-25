import { rickMortyAPIUrls } from "app/services/rick_morty/url";
import { CardDetailComponent } from "app/components/CardDetail";

async function getCharacter(id: number) {
  const res = await fetch(`${rickMortyAPIUrls.characters.single(id)}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function CharacterComponent({ params }: ParamsProps) {
  const id = Number(params.id);

  const response = await getCharacter(id);

  return (
    <>
      <main className="flex justify-center items-center">
        <CardDetailComponent character={response} />
      </main>
    </>
  );
}
