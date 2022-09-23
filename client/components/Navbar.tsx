import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="dark:bg-[rgb(30,30,30)] border border-solid dark:border-zinc-700 max-w-sm rounded-md py-2 px-5">
      <input className="bg-transparent  w-full" placeholder="Arists, songs" />
    </nav>
  );
};

export default Navbar;
