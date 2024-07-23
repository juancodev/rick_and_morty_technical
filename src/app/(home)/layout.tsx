import React from "react";
import { Header } from "app/components/Header";

export default function HomeLayout({ children }: ChildrenProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
