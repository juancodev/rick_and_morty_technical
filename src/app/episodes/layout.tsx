import { Banner } from "app/components/Banner";
import { Header } from "app/components/Header";

export default function EpisodesLayout({ children }: ChildrenProps) {
  return (
    <>
      <Header />
      <Banner />
      {children}
    </>
  );
}
