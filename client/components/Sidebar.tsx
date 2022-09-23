import { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
type Props = {};

const Sidebar = (props: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <div className="" role="button" onClick={() => setTheme('light')}>
          set light mode{' '}
        </div>
      );
    } else {
      return (
        <div
          className="dark:text-dark-secondary "
          role="button"
          onClick={() => setTheme('dark')}
        >
          Set dark mode
        </div>
      );
    }
  };
  return (
    <nav className="h-full border-0 border-x border-solid py-5 dark:border-zinc-800 dark:bg-dark-nav w-1/6">
      <ul className="h-1/4 space-y-5 p-10">
        {/*<Image
          src={theme === 'dark' ? darkLogo.src : logo.src}
          alt="logo"
          width={50}
          height={50}
  />*/}
        <li className="font-semibold">
          <Link href="/">Solanify logo</Link>
        </li>
        <div className=" h-full flex flex-col justify-between dark:text-dark-secondary ">
          <li className="list-none dark:hover:text-dark-primary">
            <Link href="/paths">All Paths</Link>
          </li>
          <li className="list-none dark:hover:text-dark-primary">
            <Link href="/about">About</Link>
          </li>
          {renderThemeChanger()}
        </div>
      </ul>
    </nav>
  );
};
export default Sidebar;
