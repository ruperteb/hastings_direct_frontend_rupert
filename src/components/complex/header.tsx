'use server';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './mobileMenu';

const Header = () => {
  const links = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'New',
      url: '/new',
    },
    {
      name: 'Popular',
      url: '/popular',
    },
    {
      name: 'Trending',
      url: '/trending',
    },
    {
      name: 'Categories',
      url: '/categories',
    },
  ];
  return (
    <header className="flex w-full">
      <div className="flex w-full justify-between">
        <Image src="/images/logo.svg" alt="Logo" width={65} height={40} />
        <nav className="gap-12 hidden md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="self-center text-base text-neutral-dark-grayish-blue duration-75 hover:text-primary-soft-red"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
