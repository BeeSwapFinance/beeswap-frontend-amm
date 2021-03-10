import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.beeswaps.com/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.beeswaps.com/farms'
  },
  {
    label: 'Hives',
    icon: 'PoolIcon',
    href: 'https://www.beeswaps.com/nests'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xf60011fF21F44E1faf249E084CCE26FeA88a08F7',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/goose-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/goose-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0xf60011fF21F44E1faf249E084CCE26FeA88a08F7',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/BeeSwapFinance/",
      },
      {
        label: "Docs",
        href: "https://beeswapfinance.gitbook.io/beeswap-finance/",
      },
      {
        label: "Blog",
        href: "https://beeswapfinance.medium.com/",
      },
    ],
  },
]

export default config
