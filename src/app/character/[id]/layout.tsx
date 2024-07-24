import { Header } from "app/components/Header";
import { Banner } from "app/components/Banner";

export default function CharacterLayout({ children }: ChildrenProps) {
  return (
    <>
      <Header />
      <Banner />
      {children}
    </>
  );
}
