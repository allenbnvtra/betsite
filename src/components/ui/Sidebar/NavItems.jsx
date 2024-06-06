import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const NavItems = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className="flex w-full flex-col gap-1">
      {sidebarLinks.map(({ icon, label, route, sublinks }) => {
        const isActive =
          route && (pathname === route || pathname.startsWith(`${route}/`));
        const hasSublinks = sublinks && sublinks.length > 0;

        return (
          <div key={label} className="relative w-full">
            {route ? (
              <Link
                href={route}
                onClick={() => hasSublinks && handleToggle(label)}
                className={cn(
                  "flex w-full cursor-pointer items-center gap-2 rounded-md px-4 py-3 text-slate-800 transition-all hover:bg-indigo-100",
                  {
                    "bg-indigo-100 text-indigo-700": isActive,
                  },
                )}
              >
                <div className="text-lg">{icon}</div>
                <p className="flex-1 text-sm font-medium">{label}</p>
                {hasSublinks && (
                  <FaChevronDown
                    className={cn("text-xs transition-transform", {
                      "rotate-180": openDropdown === label,
                    })}
                  />
                )}
              </Link>
            ) : (
              <div
                onClick={() => hasSublinks && handleToggle(label)}
                className={cn(
                  "flex w-full cursor-pointer items-center gap-2 rounded-md px-4 py-3 text-slate-800 transition-all hover:bg-indigo-100",
                  {
                    "bg-indigo-100 text-indigo-700": isActive,
                  },
                )}
              >
                <div className="text-lg">{icon}</div>
                <p className="flex-1 text-sm font-medium">{label}</p>
                {hasSublinks && (
                  <FaChevronDown
                    className={cn("text-xs transition-transform", {
                      "rotate-180": openDropdown === label,
                    })}
                  />
                )}
              </div>
            )}
            {hasSublinks && openDropdown === label && (
              <div className="relative ml-4">
                <div className="absolute bottom-0 left-0 top-0 border-l border-slate-700"></div>
                <div className="ml-4 mt-1 flex flex-col gap-1">
                  {sublinks.map(({ label, route }) => {
                    const isSubLinkActive = route && pathname === route;
                    return (
                      <div key={label} className="relative flex items-center">
                        <div className="absolute left-1 top-1/2 h-3 w-6 -translate-x-[80%] -translate-y-[90%] border-b border-slate-700"></div>
                        <Link
                          href={route}
                          className={cn(
                            "flex w-full items-center gap-2 rounded-md px-4 py-2 text-slate-800 transition-all hover:bg-indigo-100",
                            {
                              "bg-indigo-100 text-indigo-700": isSubLinkActive,
                            },
                          )}
                        >
                          <p className="text-sm font-medium">{label}</p>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NavItems;
