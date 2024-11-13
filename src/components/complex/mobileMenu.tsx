'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { NavItem } from '@/lib/definitions/dataTypes';

interface MobileMenuProps {
  navItems: NavItem[];
}

const MobileMenu = ({ navItems }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);

  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  // For adjusting button position when overlay / menu is open
  useEffect(() => {
    const width = window.innerWidth - document.body.clientWidth;
    if (width) {
      setScrollbarWidth(width);
    }
  }, []);

  // Disable scrolling when overlay / menu is open
  useEffect(() => {
    if (open) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  const topLineVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };
  const centerLineVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
      transition: { duration: 0.1 },
    },
  };

  const bottomLineVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };

  const listVariants = {
    closed: {
      x: '100vw',
    },
    opened: {
      x: '30vw',
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="self-center md:hidden">
      {/* Menu Button */}
      <button
        className={clsx(
          'relative z-50 flex h-8 w-10 flex-col justify-between',
          open && scrollbarWidth && `translate-x-[-${scrollbarWidth}px]`
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        <motion.div
          variants={topLineVariants}
          animate={open ? 'opened' : 'closed'}
          className="h-1 w-10 origin-left rounded bg-neutral-very-dark-blue"
        ></motion.div>
        <motion.div
          variants={centerLineVariants}
          animate={open ? 'opened' : 'closed'}
          className="h-1 w-10 rounded bg-neutral-very-dark-blue"
        ></motion.div>
        <motion.div
          variants={bottomLineVariants}
          animate={open ? 'opened' : 'closed'}
          className="h-1 w-10 origin-left rounded bg-neutral-very-dark-blue"
        ></motion.div>
      </button>
      {/* Menu List */}
      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="justify-top absolute left-0 top-0 z-40 flex h-screen w-[80vw] flex-col items-center gap-8 bg-neutral-off-white pl-8 pt-48 text-2xl text-neutral-very-dark-blue"
        >
          {navItems.map((link) => (
            <motion.div
              variants={listItemVariants}
              className="self-start"
              key={link.name}
            >
              <Link className="hover:text-primary-soft-red" href={link.url}>
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
      {/* Overlay */}
      {open && (
        <motion.div className="absolute left-0 top-0 z-20 h-screen w-screen bg-gray-900/45 bg-blend-overlay backdrop-blur-sm"></motion.div>
      )}
    </div>
  );
};

export default MobileMenu;
