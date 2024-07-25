import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function GetCookies({ children }: ChildrenProps) {
  const cookie = cookies();

  if (!cookie.get("accessToken")?.value) {
    redirect("/login");
  }

  return <>{children}</>;
}
