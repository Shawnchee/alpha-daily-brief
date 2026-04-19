window.CRUCIX_DATA = {
  generated: "Sun, 19 Apr 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on rebound as Strait of Hormuz reopens; gold and equities both rip while oil collapses.",

  macro: {
    dxy:      { value: "98.23",   change: "+0.13%", signal: "Dollar firm, gives back war-premium gains." },
    gold:     { value: "$4,879.60", change: "+1.48%", signal: "Real yields fall, bid stays relentless." },
    oil:      { value: "$82.59",  change: "-9.41%", signal: "Hormuz reopens, energy-stagflation premium unwinds." },
    silver:   { value: "—",       change: "—",      signal: "Tracks gold; testing prior breakout pivot." },
    yield10y: { value: "4.31%",   change: "-3bps",  signal: "Yields slip on Mideast de-escalation." },
    vix:      { value: "17.48",   change: "-2.56%", signal: "Fear bid unwinds; risk appetite returning." },
    usdmyr:   { value: "4.0260",  change: "+0.05%", signal: "Ringgit steady near multi-month strength zone." },
    sp500:    { value: "7,126.06", change: "+1.20%", signal: "New record close on geopolitical relief." },
    verdict: "DXY soft, yields easing, VIX collapsing — textbook risk-on with gold defying tradition. Equities and crypto both have green light into next week. KLSE imports the bullish tape; ringgit-strength tailwind for Bursa importers and consumer names."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leadership intact above $75k support." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$77,000",  marketCap: "$1.52T", change1h: "N/A", change24h: "+2.7%", change7d: "N/A", insight: "BTC rebounded from $74k lows to $77k as Hormuz reopened and ETFs took $1B inflows last week. $75k is the key support; reclaim of $78k opens path to $82k." },
      { name: "Ethereum", symbol: "ETH", price: "$2,409.01", marketCap: "$290B",  change1h: "N/A", change24h: "+3.6%", change7d: "N/A", insight: "ETH lagging BTC ratio but reclaiming $2,400 with risk-on flows. Watch $2,500 reclaim for momentum into staking/L2 narrative refresh." },
      { name: "Solana",   symbol: "SOL", price: "$88.43",   marketCap: "$42B",   change1h: "N/A", change24h: "+0.80%", change7d: "+4.90%", insight: "SOL outperforming on weekly basis as memecoin volume returns. $90 reclaim flips bias bullish toward $100." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.0939",     change24h: "+5.0%", note: "Leads memes on BTC rebound." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000365", change24h: "+10%",  note: "Sharp bounce; momentum returning." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000615", change24h: "+6.32%", note: "Volume thin; tracks BTC tape." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",   note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",   note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on confirmed: BTC reclaimed $77k from Iran-shock lows with $1B weekly ETF inflows. Key level: $75k must hold or $70k re-tests. Altseason still pending — rotation into ETH/SOL valid only after BTC tags $82k cleanly."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,126.06",  change: "+1.20%" },
      { name: "Nasdaq",       value: "24,468.48", change: "+1.52%" },
      { name: "Dow",          value: "49,447",    change: "+1.79%" },
      { name: "VIX",          value: "17.48",     change: "-2.56%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—",       change: "Fri close", insight: "Tracks SPX +1.2% Friday session highs." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—",       change: "Fri close", insight: "Mega-cap tech led Friday rally on AI bid." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "Fri close", insight: "Mirrors SPX record close at 7,126." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "Fri close", insight: "Broad participation Friday including small caps." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "Fri close", insight: "Speculative growth bid back as VIX collapses." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "Fri close", insight: "NVDA/AMD strength powered chips Friday." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$42.78",  change: "+2.7%",     insight: "Tracks BTC reclaim of $77k post-Hormuz news." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "Fri close", insight: "Tech sector led Nasdaq's +1.52% Friday." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$456.04", change: "+1.48%",    insight: "Tracks gold's relentless bid above $4,800." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "—",        change: "Fri close", notable: false, insight: "Mega-cap participated in Friday tech rally." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$201.68",  change: "+1.68%",    notable: true,  insight: "Reclaimed $200; AI capex thesis intact for Q2." },
      { ticker: "TSLA",  name: "Tesla",         price: "$400.62",  change: "+3.01%",    notable: true,  insight: "Best-in-class bounce; risk-on growth proxy leading." },
      { ticker: "AAPL",  name: "Apple",         price: "$270.23",  change: "+2.59%",    notable: false, insight: "Reclaimed $270 on broad mega-cap bid." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$422.79",  change: "Fri close", notable: false, insight: "Steady AI-monetisation leader; Copilot tailwind." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",        change: "Fri close", notable: false, insight: "Tracks mega-cap basket; ad-tech remains resilient." },
      { ticker: "AMZN",  name: "Amazon",        price: "$250.56",  change: "Fri close", notable: false, insight: "AWS demand and retail margins both expanding." },
      { ticker: "NFLX",  name: "Netflix",       price: "$97.31",   change: "Fri close", notable: false, insight: "Ad-tier subscriber growth still the catalyst." },
      { ticker: "AMD",   name: "AMD",           price: "—",        change: "Fri close", notable: false, insight: "MI300 ramp aiding share-of-wallet vs NVDA." },
      { ticker: "PLTR",  name: "Palantir",      price: "$146.26",  change: "Fri close", notable: true,  insight: "Government AIP wins keep premium valuation supported." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",        change: "Fri close", notable: false, insight: "Cybersecurity bid as enterprise budgets stabilise." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",        change: "Fri close", notable: false, insight: "Tracks BTC rebound; volumes recover post-shock." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",        change: "+12%",      notable: true,  insight: "Exploded +12% Friday as BTC reclaimed $77k." },
      { ticker: "APP",   name: "AppLovin",      price: "—",        change: "Fri close", notable: false, insight: "Ad-tech AI engine remains category leader." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$23.50",   change: "Fri close", notable: false, insight: "Bouncing from cycle lows; AI-server demand intact." }
    ],
    trending: [
      { ticker: "MSTR", change: "+12.0%" },
      { ticker: "PEPE", change: "+10.0%" },
      { ticker: "TSLA", change: "+3.01%" },
      { ticker: "AAPL", change: "+2.59%" },
      { ticker: "NVDA", change: "+1.68%" }
    ],
    verdict: "AI trade reasserted leadership Friday: NVDA/TSLA/MSTR drove the tape. Rotation favours growth/semis/crypto-proxies as VIX collapses and yields ease. Avoid energy and defensives this week — momentum firmly with risk."
  },

  malaysia: {
    klci:   { value: "1,612", change: "Fri close", context: "KLCI held above 1,600 into Friday close as ringgit firmed. Monday opens to a strong external tape; banks and semis lead." },
    usdmyr: { value: "4.0260", change: "+0.05%", signal: "Ringgit steady; importer margins benefit." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "11.10",  change: "Fri close", insight: "OPR steady; regional banking leader trades at fair multiple." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "—",      change: "Fri close", insight: "ASEAN footprint diversifies away from MY rate cycle." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",      change: "Fri close", insight: "Defensive bank; stable deposit franchise and asset quality." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",      change: "Fri close", insight: "Highest dividend-yield bank in the KLCI complex." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",      change: "Fri close", insight: "Data-centre power demand the structural growth story." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—",      change: "Fri close", insight: "Semis cycle bid as NVDA reclaims $200 — RF beneficiary." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",      change: "Fri close", insight: "Restructuring-driven telco; Indonesia exit thesis intact." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",      change: "Fri close", insight: "Defensive healthcare with regional patient-volume tailwind." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",      change: "Fri close", insight: "Concession-heavy digital services; policy-cycle sensitive." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",      change: "Fri close", insight: "5G dual-network beneficiary; dividend yield support." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No fresh IPO catalysts in this morning's news scrape." }
    ],
    verdict: "Ringgit firm at 4.03 keeps imported-cost pressure low. Inari is the cleanest Monday play — direct beneficiary of NVDA's strength. Bursa should open higher Monday on the global risk-on tape; rotate into semis and banks."
  },

  news: [
    { headline: "Iran reopens Strait of Hormuz to non-Iranian commercial vessels", source: "Bloomberg",   time: "1d ago", sentiment: "BULLISH",  meaning: "De-escalation removes oil-shock fear; risk assets rally." },
    { headline: "S&P 500 closes at record 7,126 on Mideast relief",                source: "Reuters",     time: "1d ago", sentiment: "BULLISH",  meaning: "New highs validate the V-shape risk-on rebound." },
    { headline: "Bitcoin ETFs absorb $1B in weekly inflows; biggest since January", source: "CoinDesk",    time: "1d ago", sentiment: "BULLISH",  meaning: "Institutional bid returning despite recent volatility." },
    { headline: "Crude oil collapses 9% as Hormuz reopens",                         source: "FT",          time: "1d ago", sentiment: "BEARISH",  meaning: "Energy-shock premium fully unwinds; helps inflation path." },
    { headline: "MSTR jumps 12% Friday as BTC reclaims $77,000",                    source: "CNBC",        time: "1d ago", sentiment: "BULLISH",  meaning: "Crypto-equity proxies leading the risk-on tape." },
    { headline: "10-year Treasury yield slips to 4.31% on Mideast de-escalation",   source: "WSJ",         time: "1d ago", sentiment: "NEUTRAL",  meaning: "Yields ease, supporting risk-asset multiple expansion." },
    { headline: "Gold extends rally above $4,879 as real yields fall",              source: "Kitco",       time: "1d ago", sentiment: "BULLISH",  meaning: "Gold defying risk-on; structural debasement bid intact." },
    { headline: "Ringgit holds 4.03 vs USD into weekend close",                     source: "The Edge",    time: "1d ago", sentiment: "NEUTRAL",  meaning: "Stable ringgit supports importer and consumer margins." }
  ],

  goldSummary: {
    "Price":  { value: "$4,879.60", change: "+1.48%", note: "Relentless bid; real-yield tailwind." },
    "Open":   { value: "$4,810",    change: "", note: "" },
    "High":   { value: "$4,890",    change: "", note: "Day high" },
    "Low":    { value: "$4,805",    change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,996.40" },
      { label: "R2",    value: "$4,943.20" },
      { label: "R1",    value: "$4,911.40" },
      { label: "Pivot", value: "$4,858.20" },
      { label: "S1",    value: "$4,826.40" },
      { label: "S2",    value: "$4,773.20" },
      { label: "S3",    value: "$4,741.40" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,943.20" },
      { label: "R2",    value: "$4,910.73" },
      { label: "R1",    value: "$4,890.67" },
      { label: "Pivot", value: "$4,858.20" },
      { label: "S1",    value: "$4,825.73" },
      { label: "S2",    value: "$4,805.67" },
      { label: "S3",    value: "$4,773.20" }
    ],
    camarilla: [
      { label: "R4", value: "$4,926.35" },
      { label: "R3", value: "$4,902.98" },
      { label: "R2", value: "$4,895.18" },
      { label: "R1", value: "$4,887.39" },
      { label: "S1", value: "$4,871.81" },
      { label: "S2", value: "$4,864.02" },
      { label: "S3", value: "$4,856.23" },
      { label: "S4", value: "$4,832.85" }
    ],
    note: "Gold trading above $4,858 classic pivot — bullish bias intact toward R1 $4,911."
  }
};
