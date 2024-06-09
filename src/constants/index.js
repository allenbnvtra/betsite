import { TbLayoutDashboard } from 'react-icons/tb';
import { BsPeople } from 'react-icons/bs';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { GrTree } from 'react-icons/gr';
import { IoMdNotificationsOutline } from 'react-icons/io';

export const sidebarLinks = [
  {
    icon: <TbLayoutDashboard />,
    label: 'Overview',
    route: '/overview',
  },
  {
    icon: <GrTree />,
    label: 'Agent Tree',
    route: '/agent-tree',
  },
  {
    icon: <BsPeople />,
    label: 'Players',
    sublinks: [
      {
        label: 'Active Players',
        route: '/players',
      },
      {
        label: 'Blocked Players',
        route: '/players/blocked',
      },
    ],
  },
  {
    icon: <HiOutlineDocumentReport />,
    label: 'Reports',
    sublinks: [
      {
        label: 'General',
        route: '/reports/',
      },
      {
        label: 'Transactions',
        route: '/reports/transactions',
      },
      {
        label: 'Bets',
        route: '/reports/bets',
      },
    ],
  },
];

export const mobileNav = [
  {
    icon: <TbLayoutDashboard />,
    label: 'Overview',
    route: '/overview',
  },
  {
    icon: <GrTree />,
    label: 'Agent Tree',
    route: '/agent-tree',
  },
  {
    icon: <BsPeople />,
    label: 'Players',
    sublinks: [
      {
        label: 'Active Players',
        route: '/players',
      },
      {
        label: 'Blocked Players',
        route: '/players/blocked',
      },
    ],
  },
  {
    icon: <IoMdNotificationsOutline />,
    label: 'Notification',
    notificationCount: 0,
  },
  {
    icon: <HiOutlineDocumentReport />,
    label: 'Reports',
    sublinks: [
      {
        label: 'General',
        route: '/reports/',
      },
      {
        label: 'Transactions',
        route: '/reports/transactions',
      },
      {
        label: 'Bets',
        route: '/reports/bets',
      },
    ],
  },
];

export const totalSummary = [
  {
    category: 'Commission',
    items: [
      {
        title: 'Agent Commission',
        amount: '₱9,490.67',
      },
      {
        title: 'Your Commission',
        amount: '₱19,038.22',
      },
      {
        title: 'Claimable Commission',
        amount: '₱28,528.89',
      },
    ],
  },
  {
    category: 'Player Bets',
    items: [
      {
        title: 'Total Bets',
        amount: '₱30,490.67',
      },
      {
        title: 'Total Wins',
        amount: '₱29,038.22',
      },
      {
        title: 'Pending Bets',
        amount: '₱5,528.89',
      },
    ],
  },
  {
    category: 'Agent Balance',
    items: [
      {
        title: 'Deposit',
        amount: '₱19,000.67',
      },
      {
        title: 'Withdrawal',
        amount: '₱18,050.22',
      },
      {
        title: 'Remaining Balance',
        amount: '₱12,548.48',
      },
    ],
  },
];

export const walletBalance = [
  {
    label: 'Credit',
    amount: '₱0',
  },
  {
    label: 'Balance',
    amount: '₱19,980.00',
  },
  {
    label: 'Total Amount',
    amount: '₱19,980.00',
  },
];
