import { PropsWithChildren } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="min-h-screen flex flex-col gap-16">
      <main className="mb-auto pt-24">
        <div>
          <div className="flex">
            <Sidebar />
            <Navbar />
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
