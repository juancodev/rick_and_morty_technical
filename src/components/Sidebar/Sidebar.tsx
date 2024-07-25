import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "app/a/components/ui/drawer";
import { IoMenu } from "react-icons/io5";
import { X, User2, Tv, LogOut } from "lucide-react";

export function Sidebar() {
  return (
    <>
      <Drawer direction="left">
        <DrawerTrigger>
          <IoMenu className="h-[30px] w-[30px] text-white" />
        </DrawerTrigger>
        <DrawerContent className="h-screen w-1/3 rounded-tl-none max-sm:w-full">
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader className="pl-0.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/images/logo_black.png"
                    alt="Test"
                    width={80}
                    height={80}
                    objectFit="cover"
                  />
                  <DrawerTitle className="text-2xl pl-10">
                    Rick And Morty
                  </DrawerTitle>
                </div>
                <DrawerClose className="text-bold text-lg">
                  <X className="h-5 w-5 ml-2" />
                </DrawerClose>
              </div>
            </DrawerHeader>
            <div className="h-screen">
              <ul className="h-[inherit] flex flex-col justify-evenly items-center">
                <li>
                  <Link href="/">
                    <div className="flex gap-3 text-xl cursor-pointer">
                      <User2 />
                      Personajes
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/episodes">
                    <div className="flex gap-3 text-xl cursor-pointer">
                      <Tv />
                      Episodios
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <div className="flex gap-3 text-xl cursor-pointer">
                      <LogOut />
                      Logout
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
