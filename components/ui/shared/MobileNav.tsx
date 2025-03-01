import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import NavItems from "./NavItems"
import Link from "next/link"

export const MobileNav: React.FC = () => {
  return (
    <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle" aria-label="Open menu">
            <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={24}
                height={24}
                className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
            <Link href="/" className="flex-1">
              <Image
                  src="/assets/images/logo.svg"
                  alt="logo"
                  width={128}
                  height={38}
              />
            </Link>
            <NavItems />
          </SheetContent>
        </Sheet>
    </nav>
  )
}

export default MobileNav