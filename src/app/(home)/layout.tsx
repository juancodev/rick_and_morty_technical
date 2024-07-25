import React from "react";
import { GetCookies } from "app/utils/auth/getCookie";
import { Header } from "app/components/Header";
import { Banner } from "app/components/Banner";

export default function HomeLayout({ children }: ChildrenProps) {
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
