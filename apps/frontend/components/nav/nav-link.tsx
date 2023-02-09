import Link from 'next/link';

type NavLinkProps = {
  children: string;
  href: string;
};

export const NavLink = ({ href, children }: NavLinkProps) => (
  <Link
    href={href}
    className="hover:underline active:underline inline-block py-2 px-4 text-black font-bold no-underline"
  >
    {children}
  </Link>
);
