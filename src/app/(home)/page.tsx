import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { TableComponent } from "app/components/Table";

export default async function Home() {
  const cookie = cookies();

  if (!cookie.get("accessToken")?.value) {
    redirect("/login");
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <TableComponent />
      </main>
    </>
  );
}
