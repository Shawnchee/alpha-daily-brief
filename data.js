window.CRUCIX_DATA = {
  generated: "Sat, 02 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk markets digesting Apple earnings beat as BTC holds $78K range and 10Y yield slips below 4.40%.",

  macro: {
    dxy:      { value: "98.21",   change: "+0.06%", signal: "Dollar steady; range-bound below 99 resistance." },
    gold:     { value: "—",       change: "—",      signal: "Gold print unavailable; bias remains constructive." },
    oil:      { value: "$101.94", change: "-2.98%", signal: "Crude slumps on Iran-talks hopes." },
    silver:   { value: "—",       change: "—",      signal: "Silver follows gold; industrial demand firm." },
    yield10y: { value: "4.378%",  change: "-1bps",  signal: "Yields ease; supports duration and growth." },
    vix:      { value: "16.99",   change: "+0.59%", signal: "Vol benign; complacency near risk." },
    usdmyr:   { value: "3.9700",  change: "+0.08%", signal: "Ringgit firm sub-4.00; BNM tailwind." },
    sp500:    { value: "7,230.12",change: "+0.29%", signal: "Index nudges fresh record high." },
    verdict: "DXY pinned near 98 with 10Y easing and VIX sub-17 forms a goldilocks setup for risk assets. Crypto stays bid but range-bound; megacap tech leads US equities on Apple's blowout. KLSE opens Monday with Ringgit tailwind, but global sentiment will set the direction."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance elevated; alts lag rotation." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$78,434", marketCap: "$1.57T", change1h: "N/A", change24h: "+1.36%", change7d: "N/A", insight: "BTC trapped between $75K–$80K since April 19 with $14.76M ETF inflows on April 30. Holding $78K signals derivatives caution but institutional bid intact." },
      { name: "Ethereum", symbol: "ETH", price: "$2,053",  marketCap: "$248B",  change1h: "N/A", change24h: "+1.10%", change7d: "N/A", insight: "ETH grinds higher with BTC above $2,050 reclaim. Needs $2,200 break to confirm trend reversal versus BTC." },
      { name: "Solana",   symbol: "SOL", price: "$143.80", marketCap: "$70B",   change1h: "N/A", change24h: "+4.73%", change7d: "N/A", insight: "SOL outperforms majors with ecosystem activity rebounding. Memecoin and DeFi flow keeps it the top L1 beta play." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.106",      change24h: "+2.40%", note: "Above $0.10; momentum holds." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000400", change24h: "+0.50%", note: "Range-bound between EMAs." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000063",  change24h: "+0.80%", note: "Testing consolidation upper bound." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on tilt as BTC defends $75K and ETF flows turn positive again. $80K BTC is the breakout pivot; failure reopens $72K. Altseason absent — SOL leadership is the only credible rotation signal."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,230.12",  change: "+0.29%" },
      { name: "Nasdaq",       value: "25,114.44", change: "+0.89%" },
      { name: "Dow",          value: "49,499.27", change: "-0.31%" },
      { name: "VIX",          value: "16.99",     change: "+0.59%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$662.52", change: "Fri close", insight: "Tracks S&P record close; core holding remains intact." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$674.78", change: "Fri close", insight: "Megacap tech leadership keeps QQQ at fresh highs." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "Fri close", insight: "Mirrors VOO; broad index exposure with deepest liquidity." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "Fri close", insight: "Total-market wrapper benefits from breadth in mid-caps." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "Fri close", insight: "Speculative growth basket needs lower yields to re-rate." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$460.94", change: "Fri close", insight: "Semis steady as NVDA consolidates near $200." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$43.89",  change: "+1.36%",    insight: "BTC ETF flows positive again; tracks $78K spot." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "Fri close", insight: "Tech sector ETF lifted by Apple, Microsoft strength." },
      { ticker: "GLD",  name: "Gold ETF",          price: "—",       change: "—",         insight: "Gold ETF awaits clearer DXY direction next week." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$608.75", change: "-0.52%",    notable: false, insight: "Slight pullback after rally; ad spend still firm into Q2." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$198.45", change: "-0.56%",    notable: false, insight: "Consolidating near $200 ahead of next AI capex cycle update." },
      { ticker: "TSLA",  name: "Tesla",         price: "$390.82", change: "+2.41%",    notable: true,  insight: "Tesla rallies on robotaxi optimism and Musk catalyst." },
      { ticker: "AAPL",  name: "Apple",         price: "$280.14", change: "+3.24%",    notable: true,  insight: "Apple jumps on record Q2 iPhone sales and $100B buyback." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",       change: "Fri close", notable: false, insight: "Cloud and Copilot keep MSFT a core large-cap holding." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "Fri close", notable: false, insight: "Search resilience and Gemini progress underpin valuation." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "Fri close", notable: false, insight: "AWS reacceleration is the swing factor for next quarter." },
      { ticker: "NFLX",  name: "Netflix",       price: "$92.37",  change: "Fri close", notable: false, insight: "Recent 1.7% dip seen as a buyable consolidation." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "Fri close", notable: false, insight: "AMD lags NVDA but AI accelerator pipeline is widening." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "Fri close", notable: false, insight: "Government AI contracts remain Palantir's core growth driver." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "Fri close", notable: false, insight: "Cybersecurity demand steady amid rising threat backdrop." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "Fri close", notable: false, insight: "Coinbase tracks BTC range; $80K break needed to re-rate." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "Fri close", notable: false, insight: "BTC proxy levered to $78K range; volatility compressed." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "Fri close", notable: false, insight: "Ad-tech momentum continues with strong AXON 2 monetization." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$27.40",  change: "+4.10%",    notable: true,  insight: "SMCI bounces 4.1% pre-Q3 earnings; AI server demand intact." }
    ],
    trending: [
      { ticker: "SMCI", change: "+4.10%" },
      { ticker: "AAPL", change: "+3.24%" },
      { ticker: "TSLA", change: "+2.41%" },
      { ticker: "DOW",  change: "-0.31%" },
      { ticker: "META", change: "-0.52%" }
    ],
    verdict: "AI trade still works but leadership is broadening from semis to applications (Apple, AppLovin, SMCI). Rotation favors megacap quality and select speculative AI; avoid expensive non-AI growth here. Own VOO/QQQ core, add SMCI/AAPL on dips; trim NVDA chasers near $200."
  },

  malaysia: {
    klci:   { value: "1,707.68", change: "Fri close", context: "KLCI closed near 1,707 after opening at 1,732, signaling intraday softness. Monday opens with Ringgit strength but global risk-on as the swing factor." },
    usdmyr: { value: "3.9700",   change: "+0.08%",    signal: "Ringgit holds sub-4.00; BNM credibility firm." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "—", change: "Fri close", insight: "OPR steady at 3.00% supports NIM; dividend yield anchor." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "—", change: "Fri close", insight: "Regional ASEAN exposure benefits from Indonesia banking recovery." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",   price: "—", change: "Fri close", insight: "Defensive bank with low NPL; consistent dividend payer." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",      price: "—", change: "Fri close", insight: "Trades at discount to peers with attractive yield." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",        price: "—", change: "Fri close", insight: "Data center capex driving long-term electricity demand growth." },
      { ticker: "INARI",  name: "Inari (0138.KL)",         price: "—", change: "Fri close", insight: "Semi cycle stable as NVDA consolidates; RF orders steady." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",        price: "—", change: "Fri close", insight: "Telco consolidation thesis in play with DiGi merger synergies." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)",price: "—", change: "Fri close", insight: "Healthcare defensive; medical tourism rebound underway." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",          price: "—", change: "Fri close", insight: "Digital services moat intact; new contract wins drive growth." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",         price: "—", change: "Fri close", insight: "5G monetization and stable ARPU support dividend visibility." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "Watch", note: "No notable Bursa IPO catalysts in the immediate pipeline this week. Monitor SC Malaysia announcements for new prospectus filings." }
    ],
    verdict: "Ringgit strength sub-4.00 is the bullish anchor for foreign flow returning to Bursa. Best risk-reward sits in Inari (semi cycle) and Tenaga (data center). Monday Bursa likely opens flat-to-positive tracking US strength."
  },

  news: [
    { headline: "Apple posts record Q2 with $100B buyback announced",   source: "Yahoo Finance", time: "10h ago", sentiment: "BULLISH", meaning: "AAPL leadership extends megacap tech rally near record highs." },
    { headline: "Bitcoin spot ETFs net inflow $14.76M on April 30",     source: "CoinDesk",      time: "16h ago", sentiment: "BULLISH", meaning: "Institutional demand returning supports BTC $75K floor defense." },
    { headline: "S&P 500 and Nasdaq close at fresh records",            source: "CNBC",          time: "12h ago", sentiment: "BULLISH", meaning: "Risk-on breadth strengthens as VIX stays sub-17 level." },
    { headline: "Crude oil drops 3% on US-Iran talks restart hope",     source: "Reuters",       time: "14h ago", sentiment: "BULLISH", meaning: "Lower oil eases inflation pressure helping Fed easing path." },
    { headline: "10Y Treasury yield slips below 4.40%",                 source: "Investing.com", time: "13h ago", sentiment: "BULLISH", meaning: "Lower yields support duration, growth, gold positioning." },
    { headline: "SMCI rallies 4.1% ahead of Q3 earnings release",       source: "GuruFocus",     time: "20h ago", sentiment: "WATCH",   meaning: "AI server bellwether print is key tape catalyst next week." },
    { headline: "Ark Invest sees BTC market cap hitting $16T by 2030",  source: "CoinDesk",      time: "8h ago",  sentiment: "BULLISH", meaning: "Institutional thesis re-anchors long-duration crypto allocators." },
    { headline: "Ringgit holds firm at 3.97 versus US dollar",          source: "Bloomberg",     time: "18h ago", sentiment: "BULLISH", meaning: "MYR strength signals capital inflows ahead of next BNM meet." }
  ],

  goldSummary: {
    "Price":  { value: "—", change: "—", note: "Spot gold print unavailable today" },
    "Open":   { value: "—", change: "", note: "" },
    "High":   { value: "—", change: "", note: "Day high" },
    "Low":    { value: "—", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "—" },
      { label: "R2",    value: "—" },
      { label: "R1",    value: "—" },
      { label: "Pivot", value: "—" },
      { label: "S1",    value: "—" },
      { label: "S2",    value: "—" },
      { label: "S3",    value: "—" }
    ],
    fibonacci: [
      { label: "R3",    value: "—" },
      { label: "R2",    value: "—" },
      { label: "R1",    value: "—" },
      { label: "Pivot", value: "—" },
      { label: "S1",    value: "—" },
      { label: "S2",    value: "—" },
      { label: "S3",    value: "—" }
    ],
    camarilla: [
      { label: "R4", value: "—" },
      { label: "R3", value: "—" },
      { label: "R2", value: "—" },
      { label: "R1", value: "—" },
      { label: "S1", value: "—" },
      { label: "S2", value: "—" },
      { label: "S3", value: "—" },
      { label: "S4", value: "—" }
    ],
    note: "Gold OHLC unavailable today; pivots will refresh Monday with cash session data."
  }
};
