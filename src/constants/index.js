import { TbLayoutDashboard } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { GrTree } from "react-icons/gr";

export const sidebarLinks = [
  {
    icon: <TbLayoutDashboard />,
    label: "Overview",
    route: "/overview",
  },
  {
    icon: <GrTree />,
    label: "Agent Tree",
    route: "/agent-tree",
  },
  {
    icon: <BsPeople />,
    label: "Players",
    sublinks: [
      {
        label: "Active Players",
        route: "/players/active",
      },
      {
        label: "Blocked Players",
        route: "/players/blocked",
      },
    ],
  },
  {
    icon: <HiOutlineDocumentReport />,
    label: "Reports",
    sublinks: [
      {
        label: "General",
        route: "/reports/",
      },
      {
        label: "Transactions",
        route: "/reports/transactions",
      },
      {
        label: "Bets",
        route: "/reports/bets",
      },
    ],
  },
];
