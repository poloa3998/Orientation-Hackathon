import { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  BsFillMoonStarsFill,
  BsFillPlayCircleFill,
  BsFillSunFill,
  BsSpotify,
} from 'react-icons/bs';
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
        <div
          className="flex space-x-2"
          role="button"
          onClick={() => setTheme('light')}
        >
          <BsFillSunFill className="w-6 h-6" />
          <p>Light Mode</p>
        </div>
      );
    } else {
      return (
        <div
          className="flex space-x-2"
          role="button"
          onClick={() => setTheme('dark')}
        >
          <BsFillMoonStarsFill className="w-6 h-6" />
          <p>Dark Mode</p>
        </div>
      );
    }
  };
  return (
    <nav className="h-full border-0 border-x border-solid py-5 dark:border-zinc-800 dark:bg-dark-nav w-1/6">
      <ul className="h-1/3 space-y-5 p-10">
        <div className=" flex flex-col justify-between dark:text-dark-secondary ">
          <li className="list-none dark:hover:text-dark-primary"></li>
          {renderThemeChanger()}
        </div>
      </ul>
    </nav>
  );
};
export default Sidebar;
