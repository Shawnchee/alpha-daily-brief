window.CRUCIX_DATA = {
  generated: "Tue, 28 Apr 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off morning: BTC under $77K, gold tumbles -1.8%, yields climb on Iran-tension reflation fears.",

  macro: {
    dxy:      { value: "98.47",   change: "-0.03%", signal: "Soft dollar despite higher US yields." },
    gold:     { value: "$4,605",  change: "-1.80%", signal: "Sharp pullback ahead of FOMC meeting." },
    oil:      { value: "$96.77",  change: "+0.42%", signal: "Iran talks stalled; supply premium rising." },
    silver:   { value: "$73.22",  change: "-3.54%", signal: "Industrial metals follow gold lower hard." },
    yield10y: { value: "4.34%",   change: "+3bps",  signal: "Highest in a month on inflation fears." },
    vix:      { value: "18.60",   change: "+3.22%", signal: "Volatility ticking up but contained." },
    usdmyr:   { value: "4.0250",  change: "+0.05%", signal: "Ringgit stable in tight 4.02 range." },
    sp500:    { value: "7,130",   change: "-0.60%", signal: "Chip sell-off drags index off record." },
    verdict: "Yields rising while DXY soft is unusual—a pure inflation-premium move tied to oil and Iran. Gold's brutal -1.8% drop signals positioning unwind, not flight to safety, opening tactical entry. Crypto vulnerable near-term; KLSE neutral with stable ringgit cushioning external chop."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady mid-50s zone." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$76,800",  marketCap: "$1.51T", change1h: "N/A", change24h: "-2.40%", change7d: "N/A", insight: "BTC slipped below $77K as US-Iran peace talks stalled and risk appetite faded. Holding $75K is critical; loss invites $70K retest before any rebound." },
      { name: "Ethereum", symbol: "ETH", price: "$2,053",   marketCap: "$247B",  change1h: "N/A", change24h: "-2.10%", change7d: "N/A", insight: "ETH faltering at resistance with strong retail selling per FXStreet flow data. Needs to reclaim $2,150 to flip momentum positive again." },
      { name: "Solana",   symbol: "SOL", price: "$83.04",   marketCap: "$40B",   change1h: "N/A", change24h: "-1.80%", change7d: "N/A", insight: "SOL lagging majors as memecoin liquidity dries up and DeFi flows normalize. Watching $80 as decisive support level for trend." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.0980",     change24h: "-1.42%", note: "Range-bound, volume bleeding lower." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000382", change24h: "-2.10%", note: "Testing resistance, breakout pending." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000063",  change24h: "+0.50%", note: "Approaching upper consolidation boundary." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",    note: "SOL-linked; tracks ecosystem flow." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",    note: "Speculative SOL memecoin trade." }
    ],
    verdict: "Risk-off across crypto with BTC failing the $79K breakout and dragging alts lower. Key BTC level is $75K—lose it and $70K opens fast on stalled Iran diplomacy. No altseason signal yet; SOL/ETH ratios versus BTC are deteriorating."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,130.53",  change: "-0.60%" },
      { name: "Nasdaq",       value: "24,650.38", change: "-0.95%" },
      { name: "Dow",          value: "49,108.15", change: "-0.12%" },
      { name: "VIX",          value: "18.60",     change: "+3.22%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$657.50", change: "+0.79%", insight: "Tracking index lower today as mega-cap tech gives back gains." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$654.09", change: "-0.95%", insight: "Tech-heavy ETF leading downside on chip sector weakness." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "—",      insight: "Mirroring S&P 500 weakness; flow watch for FOMC positioning." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Broad market exposure dragged by AI-related sell pressure." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",      insight: "High-beta innovation basket sensitive to yield uptick today." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$460.94", change: "-2.10%", insight: "Chips dumped on OpenAI capex-cooling report; near-term overhang." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$42.67",  change: "-2.40%", insight: "Spot BTC ETF tracks coin lower; flows decisive for retest." },
      { ticker: "XLK",  name: "Tech Sector",       price: "$159.74", change: "+2.81%", insight: "Tech sector held in despite chip drag; software resilient." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$430.42", change: "-1.80%", insight: "Bullion ETF reflects spot tumble before FOMC two-day meeting." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$675.03", change: "+2.41%", notable: true,  insight: "Meta strong ahead of Apr 29 earnings—AI ad-targeting tailwind." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$208.27", change: "+4.32%", notable: true,  insight: "NVDA bid as AI capex narrative reasserts; flow leadership." },
      { ticker: "TSLA",  name: "Tesla",         price: "$372.70", change: "-0.50%", notable: false, insight: "TSLA flat as robotaxi rollout updates fail to spark new bid." },
      { ticker: "AAPL",  name: "Apple",         price: "$267.61", change: "-1.27%", notable: false, insight: "Apple soft on services growth concerns into the print." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$424.62", change: "+2.13%", notable: false, insight: "MSFT firm on Azure AI momentum; reports Apr 29 after close." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$344.40", change: "+1.63%", notable: false, insight: "GOOGL near 52-week high; search and cloud both accelerating." },
      { ticker: "AMZN",  name: "Amazon",        price: "$263.99", change: "+3.49%", notable: true,  insight: "AMZN best in mega-caps; AWS demand and ad take-rate strong." },
      { ticker: "NFLX",  name: "Netflix",       price: "$90.46",  change: "-0.99%", notable: false, insight: "NFLX consolidating post-split; subscriber growth slowing." },
      { ticker: "AMD",   name: "AMD",           price: "$334.63", change: "-3.79%", notable: true,  insight: "AMD downgraded by Northland to Market Perform after decade bull." },
      { ticker: "PLTR",  name: "Palantir",      price: "$143.20", change: "-1.10%", notable: false, insight: "PLTR cooling into earnings; consensus sees 35% upside still." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "$452.70", change: "+0.40%", notable: false, insight: "CRWD steady; cybersecurity bid as breach headlines persist." },
      { ticker: "COIN",  name: "Coinbase",      price: "$240.41", change: "-1.55%", notable: false, insight: "COIN tracking BTC lower; sensitive to retest of $75K." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$171.02", change: "-0.84%", notable: false, insight: "MSTR drifting with BTC; preferred-stock issuance ongoing." },
      { ticker: "APP",   name: "AppLovin",      price: "$508.56", change: "+5.30%", notable: true,  insight: "APP surges 5.3%; ad-tech AI flywheel continues to compound." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$28.50",  change: "+1.20%", notable: false, insight: "SMCI riding liquid-cooled AI server demand wave higher." }
    ],
    trending: [
      { ticker: "APP",  change: "+5.30%" },
      { ticker: "NVDA", change: "+4.32%" },
      { ticker: "AMD",  change: "-3.79%" },
      { ticker: "AMZN", change: "+3.49%" },
      { ticker: "MSFT", change: "+2.13%" }
    ],
    verdict: "AI trade bifurcating: NVDA/AMZN/META leadership while AMD downgrade signals analyst caution after a decade of bullish coverage. Own software (MSFT, GOOGL, APP) over hardware until OpenAI capex narrative resolves. Avoid SMCI/SOXX laggards into FOMC."
  },

  malaysia: {
    klci:   { value: "1,612.40", change: "+0.15%", context: "KLCI grinding sideways as foreign flows neutral. Watching banks and tech for Tuesday lead from US session." },
    usdmyr: { value: "4.0250",   change: "+0.05%", signal: "Ringgit anchored despite global dollar softness." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM10.42", change: "+0.10%", insight: "Maybank steady on stable OPR backdrop and resilient NIM trajectory." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "RM7.58",  change: "+0.20%", insight: "CIMB benefits from regional banking exposure across ASEAN." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",       change: "—",      insight: "Defensive bank with conservative loan book and steady dividend." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",       change: "—",      insight: "RHB attractive on dividend yield versus regional peers in cycle." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",       change: "—",      insight: "Utility set to benefit from data center electricity demand." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "RM2.84",  change: "-0.30%", insight: "Inari soft as NVDA chip cycle catches OpenAI capex-pause headlines." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",       change: "—",      insight: "Telco consolidation theme remains supportive medium-term." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",       change: "—",      insight: "Defensive healthcare with regional growth in private hospitals." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",       change: "—",      insight: "Digital services concession provider with steady cashflow." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",       change: "—",      insight: "5G rollout continuing; ARPU stabilizing across postpaid base." }
    ],
    ipos: [
      { name: "TBA pipeline", sector: "Tech/Industrial", price: "—", listingDate: "—", status: "Upcoming", note: "Bursa pipeline quiet pending FOMC and macro clarity. Watch May for new listings if KLCI holds above 1,600." }
    ],
    verdict: "Ringgit's stability around 4.02 cushions Bursa from external chop—a key advantage versus other EM Asian peers. Best tactical name remains CIMB on regional banking exposure and yield. Tuesday outlook: neutral KLCI open with downside risk if US chip weakness deepens."
  },

  news: [
    { headline: "Bitcoin slips below $77K as US-Iran peace talks stall",            source: "CryptoNews",     time: "2h ago", sentiment: "BEARISH", meaning: "Geopolitics drives crypto risk-off; $75K BTC support critical." },
    { headline: "Chip stocks sell off on OpenAI capex-pause report",                 source: "CNBC",           time: "4h ago", sentiment: "BEARISH", meaning: "AI hardware narrative cracks; software remains relatively resilient." },
    { headline: "AMD downgraded by Northland to Market Perform after decade bull",   source: "Investing.com", time: "6h ago", sentiment: "BEARISH", meaning: "Long-time bull capitulates; price target cut to $260 firm." },
    { headline: "Gold tumbles 1.8% as positioning unwinds before two-day FOMC",      source: "Yahoo Finance", time: "3h ago", sentiment: "WATCH",   meaning: "Tactical entry zone if Fed dovish; $4,500 support tested." },
    { headline: "10-year Treasury yield jumps to 4.35%, highest in a month",         source: "Trading Econ",  time: "5h ago", sentiment: "BEARISH", meaning: "Inflation premium rising on oil; weighs on long-duration assets." },
    { headline: "Mega-cap earnings parade Apr 29: META, GOOGL, AMZN, MSFT",          source: "Motley Fool",   time: "8h ago", sentiment: "WATCH",   meaning: "Big four print will set tape direction into May." },
    { headline: "AppLovin jumps 5.3% as ad-tech AI flywheel compounds",              source: "MarketBeat",    time: "5h ago", sentiment: "BULLISH", meaning: "AI ad-targeting tailwind benefits APP and META directly." },
    { headline: "Crude oil holds near $97 on stalled Middle East diplomacy",         source: "Reuters",       time: "7h ago", sentiment: "WATCH",   meaning: "Oil-driven inflation pressure could force hawkish Fed pivot." }
  ],

  goldSummary: {
    "Price":    { value: "$4,605.49", change: "-1.80%", note: "Sharp drop ahead of FOMC two-day." },
    "Open":     { value: "$4,697.50", change: "",       note: "Today open" },
    "High":     { value: "$4,712.00", change: "",       note: "Day high" },
    "Low":      { value: "$4,596.49", change: "",       note: "Day low" },
    "52W High": { value: "N/A",       change: "",       note: "" },
    "52W Low":  { value: "N/A",       change: "",       note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,820.99" },
      { label: "R2",    value: "$4,782.16" },
      { label: "R1",    value: "$4,728.07" },
      { label: "Pivot", value: "$4,667.16" },
      { label: "S1",    value: "$4,613.07" },
      { label: "S2",    value: "$4,552.16" },
      { label: "S3",    value: "$4,498.07" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,782.67" },
      { label: "R2",    value: "$4,738.45" },
      { label: "R1",    value: "$4,711.36" },
      { label: "Pivot", value: "$4,667.16" },
      { label: "S1",    value: "$4,622.96" },
      { label: "S2",    value: "$4,595.87" },
      { label: "S3",    value: "$4,551.65" }
    ],
    camarilla: [
      { label: "R4", value: "$4,753.49" },
      { label: "R3", value: "$4,721.62" },
      { label: "R2", value: "$4,711.00" },
      { label: "R1", value: "$4,700.37" },
      { label: "S1", value: "$4,679.11" },
      { label: "S2", value: "$4,668.49" },
      { label: "S3", value: "$4,657.86" },
      { label: "S4", value: "$4,625.99" }
    ],
    note: "Gold trading below classic pivot $4,667—bias bearish until reclaim; tactical buy zone near S2 $4,552."
  }
};
