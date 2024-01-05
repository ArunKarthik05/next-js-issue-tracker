import Link from "next/link";
import React from "react";
import { IoBug } from "react-icons/io5";

export default function NavBar() {
  const links = [
    { label: "Deashboard", href: "/" },
    { label: "Issues", href: "/" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <IoBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
