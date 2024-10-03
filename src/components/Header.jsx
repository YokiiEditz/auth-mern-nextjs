import Link from "next/link";
import React from "react";

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
            <Link href="/sign-in">Sign in</Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
