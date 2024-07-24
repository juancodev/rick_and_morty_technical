import React from "react";
import { Header } from "app/components/Header";
import { Banner } from "app/components/Banner";

export default function HomeLayout({ children }: ChildrenProps) {
  return (
    <>
      <Header />
      <Banner />
      {children}
    </>
  );
}
