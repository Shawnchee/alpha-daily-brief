window.CRUCIX_DATA = {
  generated: "Fri, 12 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on rebound as Trump touts Iran peace deal lifting stocks, crypto and silver while gold drifts.",

  macro: {
    dxy:      { value: "98.45", change: "-0.15%", signal: "Dollar slips on peace hopes, risk-on" },
    gold:     { value: "$4,210.55", change: "-0.05%", signal: "Consolidating near highs, peace eases bid" },
    oil:      { value: "$67.20", change: "-2.10%", signal: "Sharp drop on Iran peace headlines" },
    silver:   { value: "$36.40", change: "+0.80%", signal: "Tracks gold but industrial demand firm" },
    yield10y: { value: "4.47%", change: "-10bps", signal: "Yields drop hard on peace rally" },
    vix:      { value: "19.44", change: "-3.50%", signal: "Fear easing, volatility compresses" },
    usdmyr:   { value: "4.06", change: "-0.24%", signal: "Ringgit firms on softer dollar" },
    sp500:    { value: "7,394.30", change: "+1.75%", signal: "Strong breakout led by mega-cap tech" },
    verdict: "Dollar lower, yields down 10bps and VIX cracking sub-20 sets a clean risk-on tape. Crypto and US tech catch the bid hardest while gold consolidates rather than breaks. KLSE imports tailwind via softer USDMYR and a calmer regional yield backdrop."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leads but alts catching bid" },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$63,359.71", marketCap: "$1.25T",  change1h: "N/A", change24h: "+1.65%", change7d: "N/A", insight: "BTC rebounded toward $63.5k as Trump's Iran peace claim and softer CPI lifted risk. Key level is $64k reclaim; loss of $62k reopens $60k retest." },
      { name: "Ethereum", symbol: "ETH", price: "$1,667.16", marketCap: "$201B",   change1h: "N/A", change24h: "+2.10%", change7d: "N/A", insight: "ETH lagging BTC but holding above $1,650 support. A push through $1,725 unlocks rotation into majors and L2s." },
      { name: "Solana",   symbol: "SOL", price: "$65.08",    marketCap: "$37.7B",  change1h: "N/A", change24h: "+1.80%", change7d: "N/A", insight: "SOL grinding sideways near $65 with weak relative strength. Memecoin volume on Solana stays the swing factor for upside." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.094",      change24h: "+1.20%", note: "Stuck near range support." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000088",  change24h: "+2.40%", note: "Liquidity thin, retail quiet." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000462", change24h: "+0.90%", note: "Range-bound, burn rate weak." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on bid is back but altcoins still lag BTC, which is the classic late-cycle pattern not a fresh altseason. BTC reclaim of $64k is the gate; below $62k the rally fails. Memecoins remain a casino tape until BTC dominance rolls over."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,394.30", change: "+1.75%" },
      { name: "Nasdaq",       value: "24,820",   change: "+3.29%" },
      { name: "Dow",          value: "45,210",   change: "+1.86%" },
      { name: "VIX",          value: "19.44",    change: "-3.50%" },
      { name: "Russell 2000", value: "N/A",      change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$682.64", change: "+1.75%", insight: "Tracking S&P high with mega-cap leadership intact." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$716.31", change: "+3.29%", insight: "Tech-led ripper as yields drop and AI bid returns." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "—",      insight: "Mirror of VOO; flows still favor passive S&P exposure." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Broad tape participation lifting small/mid alongside large." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",      insight: "High-beta growth catches sharp bid when VIX cracks." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "—",      insight: "Chips rallying with NVDA basket on AI capex pull-through." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$35.20",  change: "+1.65%", insight: "Direct BTC beta; flows track spot price tightly." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Sector ETF capturing the same mega-cap thrust as QQQ." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$393.51", change: "-0.05%", insight: "Consolidating near highs as peace headlines cool safe-haven bid." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$564.46", change: "-0.70%", notable: false, insight: "Mega-cap profit-taking after week's run; AI ad story intact." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$205.20", change: "-0.49%", notable: false, insight: "Slight cool-off near $207 high; semis still drive the tape." },
      { ticker: "TSLA",  name: "Tesla",         price: "$396.99", change: "-0.54%", notable: false, insight: "Sideways near $400 as robotaxi narrative cools." },
      { ticker: "AAPL",  name: "Apple",         price: "$291.63", change: "-0.30%", notable: false, insight: "Holding $290 base; iPhone cycle and services keep premium intact." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$387.71", change: "+0.45%", notable: false, insight: "Range trade $382-394; Azure AI growth remains the swing factor." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "—",      notable: false, insight: "Search durable, Gemini and Cloud the upside levers." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "—",      notable: false, insight: "AWS reaccel and retail margin the story drivers." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",       change: "—",      notable: false, insight: "Ad tier and live sports keep subscriber engine humming." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "—",      notable: false, insight: "MI accelerator ramp the only AI counter to NVDA." },
      { ticker: "PLTR",  name: "Palantir",      price: "$131.87", change: "-3.40%", notable: true,  insight: "Sharp pullback from highs on profit-taking; AIP pipeline strong." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",      notable: false, insight: "Cyber spend resilient; ARR growth the key metric." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "—",      notable: false, insight: "Direct beta to crypto volumes and BTC price action." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "—",      notable: false, insight: "Leveraged BTC proxy; NAV premium swings with funding markets." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",      notable: false, insight: "AXON ad engine still the growth driver vs mobile peers." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$30.16",  change: "+1.10%", notable: false, insight: "AI server demand intact but margin pressure caps re-rating." }
    ],
    trending: [
      { ticker: "QQQ",  change: "+3.29%" },
      { ticker: "PLTR", change: "-3.40%" },
      { ticker: "VOO",  change: "+1.75%" },
      { ticker: "IBIT", change: "+1.65%" },
      { ticker: "SMCI", change: "+1.10%" }
    ],
    verdict: "AI trade is the engine again with Nasdaq +3.29% as yields fall and VIX cracks. Rotation favors mega-cap quality and chips over high-beta names like PLTR which are taking profits. Own QQQ, NVDA basket and selective AI infra; trim crowded retail momentum trades into strength."
  },

  malaysia: {
    klci:   { value: "1,720.23", change: "+0.45%", context: "KLCI held the 1,720 zone with banks and Inari leading. Softer USDMYR and AI tailwind set up a constructive Monday tape." },
    usdmyr: { value: "4.06", change: "-0.24%", signal: "Ringgit firms as dollar slips on peace" },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "—", change: "—", insight: "Defensive yield anchor; OPR stability supports NIM trajectory." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "—", change: "—", insight: "Regional ASEAN exposure provides earnings diversification." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—", change: "—", insight: "Defensive mortgage book; cleanest asset quality among peers." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—", change: "—", insight: "Highest dividend yield among big banks; capital position robust." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—", change: "—", insight: "Data centre power demand is the structural growth driver." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—", change: "—", insight: "NVDA-led semi cycle plus AI packaging exposure remains the bull case." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—", change: "—", insight: "Telco consolidation thesis depends on XL Smart synergies." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—", change: "—", insight: "Defensive healthcare with regional medical tourism upside." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—", change: "—", insight: "Digital concession renewals and JPJ pipeline drive cash flow." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—", change: "—", insight: "5G wholesale model keeps recurring revenue stable." }
    ],
    ipos: [
      { name: "No major listing today", sector: "—", price: "—", listingDate: "—", status: "Watch", note: "Pipeline thin into mid-June. Watch for ACE-market tech listings later in the month." }
    ],
    verdict: "Ringgit at 4.06 is the cleanest macro signal — softer dollar plus calmer yields helps importers and tech. Inari is the asymmetric play if NVDA momentum continues into next week. Monday Bursa sets up firm but tight ranges given thin volumes."
  },

  news: [
    { headline: "Trump claims Iran war has ended, peace deal possible this weekend",     source: "Yahoo Finance",     time: "2h ago", sentiment: "BULLISH", meaning: "Geopolitical risk premium collapses across assets" },
    { headline: "Bitcoin rebounds to $63,400 as CPI cools and risk appetite returns",     source: "Fortune",           time: "3h ago", sentiment: "BULLISH", meaning: "BTC reclaiming key level keeps trend intact" },
    { headline: "Nasdaq 100 surges 3.29% led by mega-cap tech and semis",                  source: "CNBC",              time: "5h ago", sentiment: "BULLISH", meaning: "AI trade reasserts leadership as yields fall" },
    { headline: "10-year Treasury yield drops 10bps on peace headlines",                    source: "Trading Economics", time: "4h ago", sentiment: "BULLISH", meaning: "Lower yields support duration and growth multiples" },
    { headline: "Gold consolidates at $4,210 as safe-haven bid eases",                      source: "Trading Economics", time: "2h ago", sentiment: "NEUTRAL", meaning: "Gold pause looks healthy not topping" },
    { headline: "Crude oil tumbles on Iran peace progress",                                  source: "Reuters",           time: "3h ago", sentiment: "BEARISH", meaning: "Lower energy eases inflation but hits oil names" },
    { headline: "USD/MYR slips to 4.06 as dollar weakens broadly",                            source: "Trading Economics", time: "1h ago", sentiment: "BULLISH", meaning: "Ringgit strength supports Bursa risk appetite" },
    { headline: "Palantir slides 3.4% as momentum names take profits",                      source: "Yahoo Finance",     time: "6h ago", sentiment: "WATCH",   meaning: "Crowded longs vulnerable to sharp unwinds" }
  ],

  goldSummary: {
    "Price":  { value: "$4,210.55", change: "-0.05%", note: "Consolidating near record territory" },
    "Open":   { value: "$4,205.00", change: "", note: "" },
    "High":   { value: "$4,216.42", change: "", note: "Day high" },
    "Low":    { value: "$4,195.00", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,241.06" },
      { label: "R2",    value: "$4,228.74" },
      { label: "R1",    value: "$4,219.64" },
      { label: "Pivot", value: "$4,207.32" },
      { label: "S1",    value: "$4,198.22" },
      { label: "S2",    value: "$4,185.90" },
      { label: "S3",    value: "$4,176.80" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,228.74" },
      { label: "R2",    value: "$4,220.56" },
      { label: "R1",    value: "$4,215.50" },
      { label: "Pivot", value: "$4,207.32" },
      { label: "S1",    value: "$4,199.14" },
      { label: "S2",    value: "$4,194.08" },
      { label: "S3",    value: "$4,185.90" }
    ],
    camarilla: [
      { label: "R4", value: "$4,222.33" },
      { label: "R3", value: "$4,216.44" },
      { label: "R2", value: "$4,214.48" },
      { label: "R1", value: "$4,212.51" },
      { label: "S1", value: "$4,208.59" },
      { label: "S2", value: "$4,206.62" },
      { label: "S3", value: "$4,204.66" },
      { label: "S4", value: "$4,198.77" }
    ],
    note: "Gold at $4,210 sits just above the $4,207 classic pivot — mildly bullish bias as long as $4,198 S1 holds."
  }
};
