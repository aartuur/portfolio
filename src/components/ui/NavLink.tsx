import * as React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
    >
      {children}
    </a>
  );
}