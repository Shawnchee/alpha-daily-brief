window.CRUCIX_DATA = {
  generated: "Wed, 20 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Stocks rally into Nvidia earnings; gold and oil correct sharply as Iran tensions ease.",

  macro: {
    dxy:      { value: "99.28",     change: "+0.17%", signal: "Dollar firm; yields still high." },
    gold:     { value: "$4,495.80", change: "-1.36%", signal: "Profit-taking after geopolitical de-escalation." },
    oil:      { value: "$100.98",   change: "-3.26%", signal: "WTI slides as Trump pauses Iran strikes." },
    silver:   { value: "$75.90",    change: "-1.99%", signal: "Tracks gold lower on risk-on tape." },
    yield10y: { value: "4.65%",     change: "-5bps",  signal: "Off 16-month highs but still elevated." },
    vix:      { value: "17.51",     change: "-3.05%", signal: "Fear fades; equities push records." },
    usdmyr:   { value: "3.9700",    change: "-0.13%", signal: "Ringgit firm below 4.00 handle." },
    sp500:    { value: "7,418.87",  change: "+0.89%", signal: "New highs ahead of NVDA print." },
    verdict: "Dollar steady and VIX cooling create a risk-on window, but a 4.65% 10Y yield still caps duration trades and pressures gold. Crypto and AI equities benefit from the geopolitical pause; gold's pullback is technical, not trend-broken. KLSE imports a stronger ringgit and softer oil — net mixed for Bursa heavyweights."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leadership intact despite slip." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$77,369.07", marketCap: "$1.55T", change1h: "N/A", change24h: "+1.15%", change7d: "N/A", insight: "BTC stalled under $80K after rejection but holding $77K support. ETF outflows and a 4.65% 10Y yield remain the binary — break $76.5K opens downside, reclaim $80K invalidates bear case." },
      { name: "Ethereum", symbol: "ETH", price: "$2,282.84",  marketCap: "$275B",  change1h: "N/A", change24h: "-1.20%", change7d: "N/A", insight: "ETH stuck in the $2,080-$2,140 range with no catalyst until a BTC breakout. Underperforming SOL on flow rotation; needs $2,400 reclaim to flip bullish." },
      { name: "Solana",   symbol: "SOL", price: "$84.88",     marketCap: "$40B",   change1h: "N/A", change24h: "-0.40%", change7d: "N/A", insight: "SOL coiling tightly between $83-$85 with memecoin volume thinning. Break above $90 confirms altseason rotation; below $80 risks cascade." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",     change24h: "-1.80%", note: "Neutral-bearish; needs BTC bid." },
      { name: "Pepe",      symbol: "PEPE", price: "—",            change24h: "N/A",    note: "Consolidating above 100-day EMA." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000629", change24h: "-1.50%", note: "Wedged between 50/100-day EMA." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Crypto is on a knife's edge — risk-off bias dominates with ETF outflows and Coinbase Premium slipping. BTC's $76.5K-$80K range is binary; loss of $76.5K opens a flush to $70K, reclaim of $80K reignites the rally. No altseason signal yet — SOL and ETH need their own breakouts first."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,418.87",  change: "+0.89%" },
      { name: "Nasdaq",       value: "26,201.68", change: "+1.28%" },
      { name: "Dow",          value: "49,923.34", change: "+1.13%" },
      { name: "VIX",          value: "17.51",     change: "-3.05%" },
      { name: "Russell 2000", value: "N/A",        change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$677.15", change: "+0.85%", insight: "Tracks SPX higher into NVDA print and easing Mideast risk." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$711.23", change: "+1.28%", insight: "Tech leadership intact; semis and AI names doing the heavy lifting." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$733.73", change: "-0.67%", insight: "Mixed reading vs VOO suggests intraday rotation; record highs intact." },
      { ticker: "VTI",  name: "Total Market",      price: "$360.06", change: "-0.63%", insight: "Broad market slightly soft despite large-cap strength; small caps lagging." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "$74.46",  change: "+0.84%", insight: "High-beta names firming as VIX drops; still well off 2021 highs." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$512.72", change: "+3.22%", insight: "Semis leading the tape as NVDA earnings approach; AI capex story alive." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$42.98",  change: "+1.15%", insight: "Tracks spot BTC; ETF flows turning negative is the risk to monitor." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",        change: "N/A",   insight: "Tech sector benefits from the NVDA-led semi bid and falling VIX." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$420.17", change: "-1.36%", insight: "Geopolitical pause triggers profit-taking; longer-term uptrend not broken." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$604.64", change: "+0.30%", notable: false, insight: "AI ad-stack monetization steady; reaccelerating into 2026." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$224.59", change: "+1.80%", notable: true,  insight: "All eyes on Q1 print after close — the binary catalyst for the AI trade." },
      { ticker: "TSLA",  name: "Tesla",         price: "$413.04", change: "+2.20%", notable: true,  insight: "Strong session; robotaxi narrative and easing macro tailwind." },
      { ticker: "AAPL",  name: "Apple",         price: "$300.63", change: "+0.60%", notable: false, insight: "Steady bid; services and India growth offsetting hardware drag." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$417.42", change: "+0.10%", notable: false, insight: "Lagging mega-cap peers; Copilot monetization needs to inflect." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$402.42", change: "+1.57%", notable: true,  insight: "New 52-week high on Cloud and AI Overviews momentum." },
      { ticker: "AMZN",  name: "Amazon",        price: "$259.34", change: "-2.08%", notable: false, insight: "Outlier weakness — AWS growth questions weighing on tape." },
      { ticker: "NFLX",  name: "Netflix",       price: "$88.36",  change: "-1.08%", notable: false, insight: "Post-split consolidation; ad-tier and live sports the next catalyst." },
      { ticker: "AMD",   name: "AMD",           price: "$435.43", change: "+1.50%", notable: false, insight: "Tracks SOXX higher; MI400 ramp the bull case." },
      { ticker: "PLTR",  name: "Palantir",      price: "$134.00", change: "+1.20%", notable: false, insight: "AI gov-tech bid extending; valuation increasingly demanding." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "$505.72", change: "+8.04%", notable: true,  insight: "Sharp move on raised price targets and partner ecosystem milestones." },
      { ticker: "COIN",  name: "Coinbase",      price: "$193.45", change: "+2.12%", notable: false, insight: "Outperforming BTC; benefits from any spot-trading volume recovery." },
      { ticker: "MSTR",  name: "Strategy",      price: "$179.84", change: "-1.20%", notable: false, insight: "Soft tape despite latest 24,869 BTC purchase; mNAV premium compressing." },
      { ticker: "APP",   name: "AppLovin",      price: "$481.43", change: "+0.50%", notable: false, insight: "Ad-tech leader; AXON platform driving operating leverage." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$33.69",  change: "-2.00%", notable: false, insight: "Still under pressure post-2025 issues; binary on AI server share." }
    ],
    trending: [
      { ticker: "CRWD", change: "+8.04%" },
      { ticker: "SOXX", change: "+3.22%" },
      { ticker: "TSLA", change: "+2.20%" },
      { ticker: "AMZN", change: "-2.08%" },
      { ticker: "SMCI", change: "-2.00%" }
    ],
    verdict: "AI trade is the only trade — semis (SOXX +3.22%), CRWD blowout, NVDA bid into print. Rotation favors mega-cap quality and security; avoid AMZN until AWS clarity and SMCI until governance binary resolves. Position long semis and security software; trim if NVDA guides soft."
  },

  malaysia: {
    klci:   { value: "1,726.45", change: "-0.07%", context: "Mid-week consolidation near 1,725 support. With JP Morgan eyeing 1,800 by year-end and a softer DXY, upside skew remains intact." },
    usdmyr: { value: "3.9700",   change: "-0.13%", signal: "Ringgit holds sub-4.00; positive for importers." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM11.08", change: "0.00%",  insight: "Flat day; defensive yield play with OPR steady." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "RM7.81",  change: "-0.38%", insight: "Regional banking exposure; ASEAN growth tailwind intact." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "RM4.78",  change: "-0.21%", insight: "Defensive bank with strongest asset quality in Malaysia." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",        change: "—",      insight: "Mid-cap bank levered to SME credit demand." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",        change: "—",      insight: "Utility with data center capex story — long-term grid winner." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "RM1.91",  change: "-0.52%", insight: "Slipping despite SOXX +3.22%; NVDA print will set tone." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",        change: "—",      insight: "Restructuring complete; telco yield play with regional reach." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",        change: "—",      insight: "Defensive healthcare with pan-Asia hospital network." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",        change: "—",      insight: "Digital services; concession renewals are the key risk." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",        change: "—",      insight: "5G and enterprise the growth lever; dividend stable." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No major Bursa IPO catalyst flagged in today's news cycle." }
    ],
    verdict: "Ringgit firming below 4.00 is the bullish underpinning for KLCI. Best risk/reward is Inari into NVDA print — semi cycle and FX wind both at its back. Outlook: mildly constructive Bursa session, with banks defensive and tech-linked names the high-beta lever."
  },

  news: [
    { headline: "S&P 500 and Nasdaq hit records ahead of Nvidia Q1 earnings", source: "TheStreet",         time: "2h ago", sentiment: "BULLISH", meaning: "AI trade binary; NVDA guidance sets Q3 tone." },
    { headline: "Bitcoin slides below $78K as ETF outflows accelerate",       source: "TradingView",       time: "3h ago", sentiment: "BEARISH", meaning: "Crypto demand softening; $76.5K is the line." },
    { headline: "Trump pauses Iran strikes; oil and gold tumble",             source: "Yahoo Finance",     time: "4h ago", sentiment: "BULLISH", meaning: "Geopolitical risk premium unwinds across complex." },
    { headline: "10-year Treasury yield retreats from 16-month high of 4.7%", source: "Trading Economics", time: "5h ago", sentiment: "NEUTRAL", meaning: "Rates relief is shallow; duration still under pressure." },
    { headline: "CrowdStrike surges 8% on raised price targets and partner wins", source: "MarketBeat",    time: "2h ago", sentiment: "BULLISH", meaning: "Cybersecurity demand robust into earnings season." },
    { headline: "Strategy buys 24,869 more bitcoin but MSTR stock drops",     source: "Motley Fool",       time: "6h ago", sentiment: "BEARISH", meaning: "Premium-to-NAV compression signals waning proxy demand." },
    { headline: "JP Morgan keeps FBM KLCI year-end target at 1,800",           source: "Bursa Malaysia",   time: "8h ago", sentiment: "BULLISH", meaning: "Constructive Malaysia view despite slow start to 2026." },
    { headline: "Alphabet hits new 52-week high on Cloud and AI momentum",     source: "TradersUnion",     time: "3h ago", sentiment: "BULLISH", meaning: "Mega-cap AI leadership broadens beyond Nvidia." }
  ],

  goldSummary: {
    "Price":    { value: "$4,495.80", change: "-1.36%", note: "Profit-taking on Iran pause." },
    "Open":     { value: "$4,558.00", change: "", note: "" },
    "High":     { value: "$4,565.00", change: "", note: "Day high" },
    "Low":      { value: "$4,485.00", change: "", note: "Day low" },
    "52W High": { value: "N/A",        change: "", note: "" },
    "52W Low":  { value: "N/A",        change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,625.54" },
      { label: "R2",    value: "$4,595.27" },
      { label: "R1",    value: "$4,545.54" },
      { label: "Pivot", value: "$4,515.27" },
      { label: "S1",    value: "$4,465.54" },
      { label: "S2",    value: "$4,435.27" },
      { label: "S3",    value: "$4,385.54" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,595.27" },
      { label: "R2",    value: "$4,564.71" },
      { label: "R1",    value: "$4,545.83" },
      { label: "Pivot", value: "$4,515.27" },
      { label: "S1",    value: "$4,484.71" },
      { label: "S2",    value: "$4,465.83" },
      { label: "S3",    value: "$4,435.27" }
    ],
    camarilla: [
      { label: "R4", value: "$4,539.80" },
      { label: "R3", value: "$4,517.80" },
      { label: "R2", value: "$4,510.47" },
      { label: "R1", value: "$4,503.13" },
      { label: "S1", value: "$4,488.47" },
      { label: "S2", value: "$4,481.13" },
      { label: "S3", value: "$4,473.80" },
      { label: "S4", value: "$4,451.80" }
    ],
    note: "Gold trades below the $4,515 classic pivot — short-term bias bearish unless reclaimed."
  }
};
