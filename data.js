window.CRUCIX_DATA = {
  generated: "Mon, 04 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on crypto rally as BTC reclaims $80K, but US equities slip on renewed Iran tensions and surging oil.",

  macro: {
    dxy:      { value: "98.18",   change: "+0.03%", signal: "Dollar flat; weak USD aids gold/crypto." },
    gold:     { value: "$4,560",  change: "-1.18%", signal: "Pulls back from highs on Iran de-escalation." },
    oil:      { value: "$101.90", change: "-3.04%", signal: "WTI drops on Iran peace proposal." },
    silver:   { value: "—",       change: "—",      signal: "Tracking gold's pullback move." },
    yield10y: { value: "4.378%",  change: "-7bps",  signal: "Yields ease as risk sentiment wobbles." },
    vix:      { value: "17.76",   change: "+0.47%", signal: "Modest fear bid on geopolitical worry." },
    usdmyr:   { value: "3.9555",  change: "-0.29%", signal: "Ringgit firmer on softer dollar." },
    sp500:    { value: "7,200.75", change: "-0.41%", signal: "Index slips below key support zone." },
    verdict: "DXY flat with falling yields and benign VIX paint a soft-dollar backdrop, while gold's pullback signals a brief de-risking. Crypto remains the cleanest risk-on expression as ETF flows accelerate. US equities face oil-driven headwinds; KLSE benefits from the firmer ringgit narrative."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leadership intact above $80K." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$80,263", marketCap: "$1.59T", change1h: "N/A", change24h: "+2.10%", change7d: "N/A", insight: "BTC reclaimed the $80K psychological level on $630M ETF inflows and easing Iran tensions. The breakout flips $80K from resistance to support, opening a path toward $85-88K." },
      { name: "Ethereum", symbol: "ETH", price: "$2,053",  marketCap: "$246B",  change1h: "N/A", change24h: "+1.80%", change7d: "N/A", insight: "ETH lags BTC's leadership but is grinding higher with the broader risk bid. ETH/BTC ratio remains weak; rotation back to ETH still pending." },
      { name: "Solana",   symbol: "SOL", price: "$85.64",  marketCap: "$40B",   change1h: "N/A", change24h: "+2.00%", change7d: "N/A", insight: "SOL up 2% as Polymarket prices a $90 break at 70% odds. Ethereum-to-Solana rotation flows remain a tailwind for the L1." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.0939",     change24h: "+1.20%", note: "Tracks BTC; 20% pump setup." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000040",  change24h: "+0.50%", note: "Holds 100-day EMA support." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000063",  change24h: "+0.80%", note: "Coiling near range top." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",     note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",     note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on tone confirmed by BTC reclaiming $80K with strong ETF inflows. Key level is $80K — hold means $85-88K next; lose it and $76K retest. Altseason still gated; majors lead, memes follow."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,200.75",  change: "-0.41%" },
      { name: "Nasdaq",       value: "25,067.80", change: "-0.19%" },
      { name: "Dow",          value: "48,941.90", change: "-1.13%" },
      { name: "VIX",          value: "17.76",     change: "+0.47%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—",       change: "—",      insight: "Tracks S&P 500's modest pullback on Iran headlines." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$674.15", change: "-0.19%", insight: "Megacap tech mixed; AI names lead, semis lag." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "—",      insight: "Mirrors S&P slip below 7,200 area." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Broad-market drag from Dow's 1.1% drop." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "$76.92",  change: "+0.50%", insight: "High-beta innovation rises with crypto bid." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "—",      insight: "NVDA softness weighs; AMD strength offsets." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$44.59",  change: "+2.10%", insight: "Tracks BTC's reclaim of $80K psychological level." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Sector flat as AI leaders consolidate gains." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$426.20", change: "-1.18%", insight: "Mirrors gold's pullback from $4,600 highs." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$608.75", change: "-0.52%", notable: false, insight: "Modest fade after recent earnings strength; AI capex narrative intact." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$198.45", change: "-0.56%", notable: false, insight: "Pause near $200 as semis digest gains; AI demand cycle robust." },
      { ticker: "TSLA",  name: "Tesla",         price: "$390.82", change: "+2.41%", notable: true,  insight: "Top megacap mover; robotaxi narrative driving renewed flows." },
      { ticker: "AAPL",  name: "Apple",         price: "$276.83", change: "-1.18%", notable: false, insight: "Underperforms on services growth concerns and tariff overhang." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$413.49", change: "-0.30%", notable: false, insight: "Azure cloud growth supports premium multiple." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$382.37", change: "+0.20%", notable: false, insight: "Q1 revenue +22% YoY; AI/Cloud thesis remains intact." },
      { ticker: "AMZN",  name: "Amazon",        price: "$267.55", change: "-0.40%", notable: false, insight: "AWS reacceleration is the key swing factor here." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",       change: "—",      notable: false, insight: "Ad-tier growth and live sports keep streaming leadership." },
      { ticker: "AMD",   name: "AMD",           price: "$341.91", change: "+1.80%", notable: true,  insight: "Up 68% YTD on AI/data-center demand; earnings May 5." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "—",      notable: false, insight: "Government and commercial AI deals continue to compound." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",      notable: false, insight: "Cyber leader benefiting from AI-security spend." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "—",      notable: false, insight: "High-beta to BTC reclaim of $80K and ETF flows." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "—",      notable: false, insight: "Holds 818K BTC; Saylor pauses buys ahead of Q1 earnings May 5." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",      notable: false, insight: "AI-ad engine continues to drive operating leverage." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$27.18",  change: "-2.10%", notable: false, insight: "Volatile ahead of Q3 earnings; AI-server demand the swing." }
    ],
    trending: [
      { ticker: "TSLA", change: "+2.41%" },
      { ticker: "AMD",  change: "+1.80%" },
      { ticker: "SMCI", change: "-2.10%" },
      { ticker: "AAPL", change: "-1.18%" },
      { ticker: "META", change: "-0.52%" }
    ],
    verdict: "AI trade is bifurcating: hyperscaler beneficiaries (AMD, GOOGL) bid while AAPL/megacap consumers fade. Rotation favors crypto-linked (COIN, MSTR, IBIT) and AI-infrastructure over consumer tech. Avoid Dow cyclicals while oil/Iran risk lingers."
  },

  malaysia: {
    klci:   { value: "1,720.34", change: "-0.17%", context: "KLCI opened 1,723.25 and slipped to 1,720 area. Monday outlook supported by softer USD/MYR but capped by Wall Street weakness." },
    usdmyr: { value: "3.9555",   change: "-0.29%", signal: "Ringgit firmer; below 4.00 holds key." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM11.14", change: "+0.54% (Fri close)", insight: "Largest cap holds steady on stable OPR backdrop and dividend yield support." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",            price: "RM7.66",  change: "-0.40% (Fri close)", insight: "Regional banking pure-play; Indonesia/Thailand exposure remains the swing factor." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",     price: "—",       change: "(Fri close)",        insight: "Defensive bank with consistent ROE; mortgage growth steady." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",        price: "—",       change: "(Fri close)",        insight: "Attractive valuations versus peers; capital adequacy strong." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",          price: "—",       change: "(Fri close)",        insight: "Data-center power demand thesis remains the multi-year driver." },
      { ticker: "INARI",  name: "Inari (0138.KL)",           price: "RM1.97",  change: "-3.90% (Fri close)", insight: "Sold off with global semi softness; Broadcom RF orders the recovery catalyst." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",          price: "—",       change: "(Fri close)",        insight: "Telco consolidation story still lingering across regional ops." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)",  price: "—",       change: "(Fri close)",        insight: "Defensive healthcare proxy; medical-tourism volumes recovering." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",            price: "—",       change: "(Fri close)",        insight: "E-government concession renewals remain the key earnings anchor." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",           price: "—",       change: "(Fri close)",        insight: "5G wholesale model still the structural overhang on margins." }
    ],
    ipos: [
      { name: "Watch list", sector: "Various", price: "—", listingDate: "TBA", status: "Upcoming", note: "Bursa pipeline quiet this week; monitor mainboard tech listings as KLCI consolidates near 1,720." }
    ],
    verdict: "Ringgit's break below 3.96 is the Monday tailwind for KLCI. Maybank remains the safest carry; Inari is the rebound trade if NVDA/SOXX firm up. Bursa likely range-bound 1,710–1,735 ahead of Wall Street direction."
  },

  news: [
    { headline: "Bitcoin reclaims $80,000 at Consensus 2026 on $630M ETF inflows",        source: "Bitcoin Magazine", time: "4h ago",  sentiment: "BULLISH",  meaning: "Institutional bid intact; flips key level to support." },
    { headline: "Dow tumbles 550 pts as Iran conflict reignites and oil surges",          source: "CNBC",             time: "8h ago",  sentiment: "BEARISH",  meaning: "Geopolitical risk pressures cyclicals and energy users." },
    { headline: "Trump announces 'Project Freedom' boosting crypto sentiment",            source: "Cryptonews",       time: "6h ago",  sentiment: "BULLISH",  meaning: "Policy tailwind extends rally beyond technical breakout." },
    { headline: "AMD rallies 74% in April on AI/data-center demand; earnings May 5",       source: "Motley Fool",      time: "1d ago",  sentiment: "BULLISH",  meaning: "Confirms AI infrastructure cycle still has legs." },
    { headline: "Bank Negara launches stablecoin and tokenised deposit pilots",           source: "Fintech News MY",  time: "1d ago",  sentiment: "BULLISH",  meaning: "Malaysia positions as regional digital-asset fintech hub." },
    { headline: "Iran sends updated peace proposal; WTI down 3% on de-escalation",         source: "Reuters",          time: "10h ago", sentiment: "BULLISH",  meaning: "Energy relief boosts risk assets and consumer names." },
    { headline: "Strategy (MSTR) pauses BTC purchases ahead of Q1 earnings May 5",         source: "TipRanks",         time: "12h ago", sentiment: "NEUTRAL",  meaning: "Treasury strategy update awaited; 818K BTC held." },
    { headline: "Bybit removed from Malaysia's investor alert list",                       source: "crypto.news",      time: "2d ago",  sentiment: "BULLISH",  meaning: "Regulatory normalization lifts local crypto adoption story." }
  ],

  goldSummary: {
    "Price":    { value: "$4,560.37", change: "-1.18%", note: "Pullback from $4,600 on Iran de-escalation." },
    "Open":     { value: "$4,614.95", change: "",       note: "Prior close" },
    "High":     { value: "$4,637.90", change: "",       note: "Day high" },
    "Low":      { value: "$4,526.34", change: "",       note: "Day low" },
    "52W High": { value: "N/A",       change: "",       note: "" },
    "52W Low":  { value: "N/A",       change: "",       note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,771.34" },
      { label: "R2",    value: "$4,704.62" },
      { label: "R1",    value: "$4,659.78" },
      { label: "Pivot", value: "$4,593.06" },
      { label: "S1",    value: "$4,548.22" },
      { label: "S2",    value: "$4,481.50" },
      { label: "S3",    value: "$4,436.66" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,704.62" },
      { label: "R2",    value: "$4,662.00" },
      { label: "R1",    value: "$4,635.68" },
      { label: "Pivot", value: "$4,593.06" },
      { label: "S1",    value: "$4,550.44" },
      { label: "S2",    value: "$4,524.12" },
      { label: "S3",    value: "$4,481.50" }
    ],
    camarilla: [
      { label: "R4", value: "$4,676.31" },
      { label: "R3", value: "$4,645.63" },
      { label: "R2", value: "$4,635.40" },
      { label: "R1", value: "$4,625.18" },
      { label: "S1", value: "$4,604.72" },
      { label: "S2", value: "$4,594.50" },
      { label: "S3", value: "$4,584.27" },
      { label: "S4", value: "$4,553.59" }
    ],
    note: "Gold trading below the $4,593 classic pivot leans bearish near-term; reclaim flips bias bullish toward R1 $4,660."
  }
};
