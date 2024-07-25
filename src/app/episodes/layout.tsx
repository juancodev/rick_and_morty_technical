import { GetCookies } from "app/utils/auth/getCookie";
import { Banner } from "app/components/Banner";
import { Header } from "app/components/Header";

export default function EpisodesLayout({ children }: ChildrenProps) {
  return (
    <>
      <GetCookies>
        <Header />
        <Banner />
        {children}
      </GetCookies>
    </>
  );
}
