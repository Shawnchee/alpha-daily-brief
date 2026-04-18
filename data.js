window.CRUCIX_DATA = {
  generated: "Sat, 18 Apr 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on tone as BTC reclaims $77K, DXY softens, and US/Iran ceasefire keeps bid under equities and crypto.",

  macro: {
    dxy:      { value: "98.20",   change: "-0.15%", signal: "Second weekly decline; tailwind for risk." },
    gold:     { value: "$4,847",  change: "+0.50%", signal: "Safe-haven bid intact despite risk-on." },
    oil:      { value: "$91.71",  change: "+0.46%", signal: "Middle East premium persists post-ceasefire." },
    silver:   { value: "$80.58",  change: "+1.20%", signal: "Outperforming gold; industrial demand firm." },
    yield10y: { value: "4.27%",   change: "-0.7bps", signal: "Yields easing supports growth names." },
    vix:      { value: "18.17",   change: "-0.19%", signal: "Sub-20 complacency; shorts squeezed." },
    usdmyr:   { value: "4.3850",  change: "-0.18%", signal: "Ringgit firming on weak DXY." },
    sp500:    { value: "5,612",   change: "+0.42%", signal: "Grinding higher into earnings season." },
    verdict: "Soft DXY and sub-20 VIX unlock risk: crypto and growth stocks catch bid. KLSE gets a ringgit tailwind and a regional risk-on read."
  },

  crypto: {
    dominance: {
      value: "57.3",
      change: "-0.40%",
      signal: "Still BTC-led; altseason not confirmed."
    },
    main: [
      {
        name: "Bitcoin", symbol: "BTC",
        price: "$77,319", marketCap: "$1.54T",
        change1h: "+0.35", change24h: "+3.42", change7d: "+4.80",
        insight: "Reclaimed $77K with volume after ceasefire headlines. Next test $80K resistance where $450M in sell orders sit."
      },
      {
        name: "Ethereum", symbol: "ETH",
        price: "$2,423", marketCap: "$292B",
        change1h: "+0.42", change24h: "+3.86", change7d: "+6.10",
        insight: "ETH/BTC ticking up as Q1 transactions hit record 200M. Outperforming BTC on the day, early ratio reversal signal."
      },
      {
        name: "Solana", symbol: "SOL",
        price: "$89.11", marketCap: "$47B",
        change1h: "+0.20", change24h: "+0.83", change7d: "+2.10",
        insight: "Lagging majors despite DeFi and meme activity. $90 pivot needed to confirm trend rotation."
      }
    ],
    memecoins: [
      { name: "Dogecoin",    symbol: "DOGE", price: "$0.168",      change24h: "+6.20",  note: "Leads meme bid again." },
      { name: "Pepe",        symbol: "PEPE", price: "$0.00000388", change24h: "+7.80",  note: "Breakout zone retest." },
      { name: "Shiba Inu",   symbol: "SHIB", price: "$0.00000608", change24h: "+3.04",  note: "Riding majors higher." },
      { name: "Bonk",        symbol: "BONK", price: "$0.0000142",  change24h: "+5.40",  note: "Solana meme leader." },
      { name: "dogwifhat",   symbol: "WIF",  price: "$1.12",       change24h: "+8.10",  note: "Highest beta mover." }
    ],
    verdict: "Risk-on confirmed with BTC dominance softening and memes running 5-8%. Watch $80K BTC and ETH/BTC ratio next 24h."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "5,612",   change: "+0.42%" },
      { name: "Nasdaq",       value: "17,625",  change: "+0.65%" },
      { name: "Dow",          value: "41,240",  change: "+0.25%" },
      { name: "VIX",          value: "18.17",   change: "-1.05%" },
      { name: "Russell 2000", value: "2,045",   change: "+0.88%" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$513.40", change: "+0.42%", insight: "Core beta grinding higher." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$482.15", change: "+0.68%", insight: "Mega caps leading tape." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$558.90", change: "+0.42%", insight: "Flows healthy, no stress." },
      { ticker: "VTI",  name: "Total Market",      price: "$278.30", change: "+0.45%", insight: "Broad participation improving." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "$58.20",  change: "+1.95%", insight: "Outpacing QQQ; risk appetite on." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$409.02", change: "+1.10%", insight: "Chips bid on soft yields." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$43.80",  change: "+3.35%", insight: "Institutional BTC tracking spot." },
      { ticker: "XLK",  name: "Tech Sector",       price: "$228.50", change: "+0.72%", insight: "Tech leadership intact." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$448.30", change: "+0.48%", insight: "Safe haven still bid." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$612.40",  change: "+0.85%", notable: false, insight: "Ads machine steady into earnings." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$118.70",  change: "+1.85%", notable: true,  insight: "Leading chips higher on soft yields. Back above 50-day with volume." },
      { ticker: "TSLA",  name: "Tesla",         price: "$252.30",  change: "+1.20%", notable: false, insight: "Riding risk-on bid." },
      { ticker: "AAPL",  name: "Apple",         price: "$212.50",  change: "+0.35%", notable: false, insight: "Laggard; awaits product cycle." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$438.10",  change: "+0.55%", notable: false, insight: "Cloud narrative intact." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$172.40",  change: "+0.70%", notable: false, insight: "Ad strength expected Q1." },
      { ticker: "AMZN",  name: "Amazon",        price: "$198.60",  change: "+0.90%", notable: false, insight: "AWS momentum supportive." },
      { ticker: "NFLX",  name: "Netflix",       price: "$962.10",  change: "+0.45%", notable: false, insight: "Earnings beat already priced." },
      { ticker: "AMD",   name: "AMD",           price: "$128.40",  change: "+2.10%", notable: true,  insight: "Chip bid broadening beyond NVDA." },
      { ticker: "PLTR",  name: "Palantir",      price: "$88.70",   change: "+2.85%", notable: true,  insight: "High-beta name reclaiming 50-day." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "$348.20",  change: "+0.95%", notable: false, insight: "Cyber resilient sector." },
      { ticker: "COIN",  name: "Coinbase",      price: "$198.50",  change: "+4.15%", notable: true,  insight: "BTC proxy front-running $80K test. Retail flows reawakening." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$278.60",  change: "+5.20%", notable: true,  insight: "BTC leverage play; outpacing spot." },
      { ticker: "APP",   name: "AppLovin",      price: "$312.80",  change: "+1.40%", notable: false, insight: "Ad-tech momentum holds." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$38.20",   change: "+2.65%", notable: false, insight: "AI infra proxy bouncing." }
    ],
    trending: [
      { ticker: "MSTR", change: "+5.20%" },
      { ticker: "COIN", change: "+4.15%" },
      { ticker: "PLTR", change: "+2.85%" },
      { ticker: "AMD",  change: "+2.10%" },
      { ticker: "NVDA", change: "+1.85%" }
    ],
    verdict: "Rotation into high-beta growth and crypto-linked names as yields ease. Watch NFLX and big-bank earnings for the next tape catalyst."
  },

  malaysia: {
    klci: {
      value: "1,757.20",
      change: "+0.35%",
      context: "Five-session streak with index at highest since October 2018. Banking heavyweights and soft ringgit driving the bid."
    },
    usdmyr: {
      value: "4.3850",
      change: "-0.18%",
      signal: "Ringgit firming; relieves import pressure."
    },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "11.04", change: "+0.36%", insight: "KLCI anchor; steady bid." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "7.49",  change: "+0.40%", insight: "Regional exposure supportive." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "4.66",  change: "+0.22%", insight: "Defensive bank lagging peers." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "8.13",  change: "+0.50%", insight: "Best-performing big bank." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "14.14", change: "+0.28%", insight: "Data-centre demand narrative intact." },
      { ticker: "INARI",  name: "Inari (0166.KL)",          price: "1.28",  change: "-1.50%", insight: "Lumileds deal blocked weighs. US rejection kills US$239M diversification step." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "2.28",  change: "+0.44%", insight: "Telco turnaround grinding on." },
      { ticker: "IHH",    name: "IHH Healthcare (5225.KL)", price: "8.59",  change: "+0.12%", insight: "Defensive hold, flat tape." },
      { ticker: "MYEG",   name: "MyEG (0138.KL)",           price: "0.96",  change: "+1.05%", insight: "Gov-contract momentum holding." },
      { ticker: "MAXIS",  name: "Maxis (6012.KL)",          price: "3.62",  change: "+0.28%", insight: "Yield play in risk-on tape." }
    ],
    ipos: [
      {
        name: "INSPACE Bhd",
        sector: "Technology/Industrial",
        price: "0.38",
        listingDate: "Upcoming Apr 2026",
        status: "Upcoming",
        note: "Malacca Securities sees 44% upside. Oversubscribed books and firm industrial backdrop favour participating."
      }
    ],
    verdict: "KLCI grinding to multi-year highs with ringgit tailwind and bank leadership. Biggest idiosyncratic risk: INARI after blocked Lumileds deal."
  },

  news: [
    { headline: "Bitcoin holds gains above $77K as US/Iran ceasefire holds", source: "Yahoo Finance", time: "2h ago", sentiment: "BULLISH", meaning: "Geopolitical relief plus soft DXY keeps crypto bid." },
    { headline: "Ethereum Q1 transactions hit record 200M",                  source: "The Block",    time: "5h ago", sentiment: "BULLISH", meaning: "On-chain activity strongest since inception." },
    { headline: "Traders price 40% odds of zero Fed cuts in 2026",           source: "TheStreet",    time: "6h ago", sentiment: "WATCH",   meaning: "Higher-for-longer risk cap on multiples." },
    { headline: "Deutsche Borse takes $200M stake in Kraken",                source: "CoinDesk",     time: "8h ago", sentiment: "BULLISH", meaning: "Institutional rails into crypto deepen." },
    { headline: "FBM KLCI hits highest level since October 2018",            source: "The Edge",     time: "10h ago", sentiment: "BULLISH", meaning: "Malaysia breaks multi-year resistance on flows." },
    { headline: "Empire Premium Food debuts +57% on Bursa",                  source: "The Edge",     time: "1d ago", sentiment: "BULLISH", meaning: "IPO appetite in Malaysia healthy." },
    { headline: "Inari/Sanan terminate US$239M Lumileds deal after US block", source: "KLSE News",   time: "1d ago", sentiment: "BEARISH", meaning: "Diversification setback for Malaysia's top chip play." },
    { headline: "BNM holds OPR at 2.75% with moderate inflation view",       source: "Bursa",        time: "1w ago", sentiment: "NEUTRAL", meaning: "Stable policy supports banking sector margins." }
  ],

  opportunities: [
    { ticker: "BTC",  asset: "Bitcoin",        type: "Breakout", timeframe: "Short-term",  reasoning: "Reclaim of $77K on volume opens path to $80K test. Stop below $75K; $450M sell wall overhead is the key hurdle." },
    { ticker: "ETH",  asset: "Ethereum",       type: "Momentum", timeframe: "Medium-term", reasoning: "Record Q1 on-chain prints plus ETH/BTC ratio turning. Accumulate on dips toward $2,350 with $2,200 invalidation." },
    { ticker: "MSTR", asset: "MicroStrategy",  type: "Momentum", timeframe: "Short-term",  reasoning: "Cleanest equity BTC leverage; outpacing spot 1.5x today. Trim into $300 resistance." },
    { ticker: "NVDA", asset: "Nvidia",         type: "Dip Buy",  timeframe: "Medium-term", reasoning: "Reclaim of 50-day on soft yields and AMD confirming chip bid. Add on dips to $115 with stop at $110." },
    { ticker: "RHB",  asset: "RHB Bank",       type: "Momentum", timeframe: "Medium-term", reasoning: "Top-performing big bank in a KLCI breakout with firming ringgit. Support at 8.00; pullbacks are buyable." },
    { ticker: "INARI", asset: "Inari Amertron", type: "Avoid",   timeframe: "Short-term",  reasoning: "Lumileds deal block removes a key catalyst and caps sentiment. Wait for base under 1.25 before re-engaging." }
  ]
};
