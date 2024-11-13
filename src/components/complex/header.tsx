'use server';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './mobileMenu';
import { getData } from '@/lib/functions/data';

const Header = async () => {
  const data = await getData();

  return (
    <header className="flex w-full">
      <div className="flex w-full justify-between">
        <Link href={'/'}>
          <Image src="/images/logo.svg" alt="Logo" width={65} height={40} />
        </Link>
        <nav className="hidden gap-12 md:flex">
          {data.navItems.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="self-center text-base text-neutral-dark-grayish-blue duration-75 hover:text-primary-soft-red"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <MobileMenu navItems={data.navItems} />
      </div>
    </header>
  );
};

export default Header;
