import Link from "next/link"
import Image from "next/image"

const Footer: React.FC = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p className="text-center text-sm">&copy; {new Date().getFullYear()} Evently. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer