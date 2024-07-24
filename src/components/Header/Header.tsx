import Link from "next/link";
import Image from "next/image";
import { Sidebar } from "app/components/Sidebar/";
import { Button } from "app/a/components/ui/button";

export function Header() {
  return (
    <>
      <header className="w-full h-16 bg-slate-700">
        <nav>
          <ul className="flex justify-between items-center">
            <div className="flex items-center">
              <li>
                <Sidebar />
              </li>
              <li>
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={75}
                  height={75}
                />
              </li>
            </div>
            <li className="mr-5">
              <Button asChild className="secondary">
                <Link href="/login">Logout</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
