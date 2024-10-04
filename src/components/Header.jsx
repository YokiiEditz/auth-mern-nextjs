import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <>
      <div className="p-3 bg-gradient-to-r bg-gray-500 text-green-300 flex justify-between items-center">
        <Link href="/" className="text-2xl">
          <span>AuthApp</span>
        </Link>

        <nav>
          <ul className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
