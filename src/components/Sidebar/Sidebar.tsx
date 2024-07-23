import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "app/a/components/ui/drawer";
import { IoMenu } from "react-icons/io5";

export function Sidebar() {
  return (
    <>
      <Drawer direction="left">
        <DrawerTrigger>
          <IoMenu className="h-[30px] w-[30px] text-white" />
        </DrawerTrigger>
        <DrawerContent className="h-screen w-1/3 rounded-tl-none">
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
                  <DrawerTitle>Rick And Morty Project</DrawerTitle>
                </div>
                <DrawerClose>X</DrawerClose>
              </div>
            </DrawerHeader>
            <div>
              <ul>
                <li>Personajes</li>
                <li>Episodios</li>
                <li>Location</li>
              </ul>
            </div>
            <DrawerFooter>Logout</DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
