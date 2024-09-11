import React from 'react'
import Logo from "../Logo/Logo";
import ThemeSwicher from "../ThemeSwicher/ThemeSwicher";

export default function Header() {
  return (
    <header className="mb-6 bg-white shadow dark:bg-gray-800 md:mb-12">
      <div className="container mx-auto px-5 md:px-10">
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <ThemeSwicher />
        </div>
      </div>
    </header>
  );
};




