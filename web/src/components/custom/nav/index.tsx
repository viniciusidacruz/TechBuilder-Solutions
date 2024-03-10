"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { NAVIGATION } from "./constants";

export const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <ul className="w-full flex xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {NAVIGATION.map((nav) => (
          <li key={nav.path}>
            <Link
              className={`${
                nav.path === pathname && "text-red-500"
              } relative flex items-center group hover:text-red-500 transition-all duration-500`}
              href={nav.path}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-black/40 relative flex text-white items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {nav.name}
                  </div>

                  <div className="border-solid border-l-black/40 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2" />
                </div>
              </div>
              <div>{nav.icon}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
