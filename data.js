window.CRUCIX_DATA = {
  generated: "Fri, 22 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on into Memorial Day weekend — Dow at record, BTC wobbles below $77K, gold cools as yields hold near 4.57%.",

  macro: {
    dxy:      { value: "—",      change: "—",       signal: "DXY data not in feed today." },
    gold:     { value: "$4,524.05", change: "-0.42%", signal: "Mild cool-off, still elevated zone." },
    oil:      { value: "—",      change: "—",       signal: "Off highs on US-Iran talks optimism." },
    silver:   { value: "—",      change: "—",       signal: "Tracks gold; data not refreshed." },
    yield10y: { value: "4.57%",  change: "flat",    signal: "Steady; restrictive bias persists." },
    vix:      { value: "16.76",  change: "-3.90%",  signal: "Complacent; long-vol cheap here." },
    usdmyr:   { value: "4.0250", change: "+0.05%",  signal: "Ringgit anchored; BNM stable stance." },
    sp500:    { value: "7,473.47", change: "+0.37%", signal: "Record territory; breadth still narrow." },
    verdict: "Soft DXY backdrop with 4.57% yields and a 16-handle VIX keeps risk bid — gold's pullback is healthy, not a top. Crypto and US tech can melt up further as the holiday weekend thins liquidity. KLSE benefits from a calmer ringgit, but watch Tuesday's reopen for sentiment swings."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady near 58% area." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$76,800", marketCap: "$1.52T", change1h: "N/A", change24h: "-1.80%", change7d: "N/A", insight: "BTC slipped below $77K after Kevin Warsh was sworn in as Fed Chair, raising hawkish-pivot fears. Consolidation between $75K–$80K continues; reclaim of $80K opens path to $85K." },
      { name: "Ethereum", symbol: "ETH", price: "$2,140.10", marketCap: "$258B", change1h: "N/A", change24h: "-1.20%", change7d: "N/A", insight: "ETH stuck near $2,140 with sticky inflation and EF departures weighing. Needs reclaim of $2,250 to unlock $2,500." },
      { name: "Solana",   symbol: "SOL", price: "$86.96",  marketCap: "$41B",  change1h: "N/A", change24h: "-2.10%", change7d: "N/A", insight: "SOL holding $85 support after ecosystem rotation. Break of $92 needed to re-engage memecoin bid." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.105",       change24h: "+1.40%", note: "Rebound off support holds." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.000003801", change24h: "+0.80%", note: "Coiling near breakout zone." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00005586",  change24h: "+1.70%", note: "Stabilizing after weekly loss." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-off undertone in crypto despite green stocks — Warsh Fed pivot and smart-money selling cap upside. $75K is the line in the sand for BTC bulls; lose it and $70K opens fast. Altseason on hold until ETH reclaims $2,250."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,473.47",  change: "+0.37%" },
      { name: "Nasdaq",       value: "26,343.97", change: "+0.19%" },
      { name: "Dow",          value: "50,579.70", change: "+0.58%" },
      { name: "VIX",          value: "16.76",     change: "-3.90%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$684.14", change: "+0.37%", insight: "Tracking SPX into record close ahead of holiday." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—",       change: "—",      insight: "Mega-cap tech leadership keeps QQQ near highs." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "—",      insight: "Mirrors SPX gain; expect $745 vicinity." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Broad-market proxy lifted with large-caps." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",      insight: "High-beta names mixed as BTC slips." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "—",      insight: "NVDA range-bound; chip leadership cooling." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$42.67",  change: "-1.80%", insight: "Tracks BTC; consolidation phase continues." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Tech bid intact on AI capex tailwinds." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$422.81", change: "-0.42%", insight: "Mild profit-taking after extended rally." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$610.25", change: "+0.47%", notable: false, insight: "Holds bid on ad-spend resilience and AI monetization." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$218.13", change: "+0.20%", notable: false, insight: "Range-bound near $220 with sell-signal forming." },
      { ticker: "TSLA",  name: "Tesla",         price: "$428.71", change: "+2.60%", notable: true,  insight: "Top mover on robotaxi/FSD optimism heading into weekend." },
      { ticker: "AAPL",  name: "Apple",         price: "$310.90", change: "+1.94%", notable: true,  insight: "New all-time high — services and Vision Pro 2 narrative working." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$420.30", change: "-0.80%", notable: false, insight: "Cooled after Copilot beat; still core AI infra holding." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$388.36", change: "+0.10%", notable: false, insight: "Gemini momentum offsets antitrust overhang." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "—",      notable: false, insight: "AWS demand strong; near recent ATH zone." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",       change: "—",      notable: false, insight: "Ad-tier scaling; engagement metrics support premium." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "—",      notable: false, insight: "MI400 ramp narrative key into next earnings." },
      { ticker: "PLTR",  name: "Palantir",      price: "$136.87", change: "+0.50%", notable: false, insight: "Defense + commercial AIP backlog underpins premium." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",      notable: false, insight: "Cyber spend resilient; platform consolidation favors leader." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "—",      notable: false, insight: "Volume sensitive to BTC; pressured below $77K." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "—",      notable: false, insight: "BTC proxy; leveraged to $80K reclaim." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",      notable: false, insight: "Ad-tech leader; AXON engine driving share." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$33.48",  change: "-0.30%", notable: false, insight: "Liquid-cool AI servers; margin recovery in focus." }
    ],
    trending: [
      { ticker: "TSLA", change: "+2.60%" },
      { ticker: "AAPL", change: "+1.94%" },
      { ticker: "META", change: "+0.47%" },
      { ticker: "VOO",  change: "+0.37%" },
      { ticker: "MSFT", change: "-0.80%" }
    ],
    verdict: "AI trade still bid but rotation favoring consumer mega-caps (AAPL, TSLA) over chips this session. Own quality compounders; trim semis into strength. Holiday-thinned tape Tuesday could amplify Iran-deal headlines."
  },

  malaysia: {
    klci:   { value: "—",      change: "—", context: "KLCI close not captured pre-open. Friday open should track Thursday's calm US tone and steady ringgit." },
    usdmyr: { value: "4.0250", change: "+0.05%", signal: "Ringgit anchored; export sentiment supportive." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM 11.02", change: "-0.18%", insight: "Largest Malaysian bank; defensive yield play with stable NIMs under unchanged OPR." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "—",        change: "—",      insight: "Regional ASEAN exposure benefits from Indonesia/Thailand growth." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",        change: "—",      insight: "Defensive consumer bank with low NPL ratios and steady dividend." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",        change: "—",      insight: "Mid-tier bank with attractive valuation versus larger peers." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",        change: "—",      insight: "Utility benefiting from data-center power demand thesis." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—",        change: "—",      insight: "Semiconductor OSAT proxy; correlated to NVDA cycle and RF demand." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",        change: "—",      insight: "Regional telco restructuring story still in motion." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",        change: "—",      insight: "Regional hospital network with steady volume recovery." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",        change: "—",      insight: "Government digital services concessionaire; recurring revenue stream." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",        change: "—",      insight: "5G monetization and dividend visibility anchor the name." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No fresh IPO catalysts surfaced in this morning's feed; Bursa pipeline remains tech and consumer skewed." }
    ],
    verdict: "Ringgit firmness at 4.02 keeps imported inflation contained — supports defensives. Inari is the best risk/reward if NVDA holds $215 and chip cycle re-accelerates. Friday Bursa likely opens flat with regional flows quiet ahead of US Memorial Day."
  },

  news: [
    { headline: "Dow rises 294 points to record high before Memorial Day weekend",  source: "TheStreet",        time: "8h ago",  sentiment: "BULLISH", meaning: "Risk-on into long weekend; breadth narrow but bid persists." },
    { headline: "Bitcoin crashes below $76K as Kevin Warsh sworn in as Fed Chair",  source: "CryptoPotato",     time: "6h ago",  sentiment: "BEARISH", meaning: "Hawkish Fed pivot fears pressure crypto risk." },
    { headline: "Gold cools to $4,524 amid US-Iran de-escalation optimism",         source: "TradingEconomics", time: "5h ago",  sentiment: "NEUTRAL", meaning: "Safe-haven bid fades; rally healthy, structure intact." },
    { headline: "10-year Treasury yield steady at 4.57% on Friday",                 source: "TradingEconomics", time: "9h ago",  sentiment: "NEUTRAL", meaning: "Restrictive policy bias holds; equity bid resilient." },
    { headline: "Apple hits new all-time high; Nvidia faces technical sell signal", source: "Investing.com",    time: "7h ago",  sentiment: "WATCH",   meaning: "Mega-cap rotation: consumer tech in, semis cooling." },
    { headline: "Oil retreats as US-Iran agreement chances rise",                   source: "Reuters",          time: "10h ago", sentiment: "BEARISH", meaning: "Lower oil eases inflation print risk into next CPI." },
    { headline: "Ethereum weighed by EF departures and sticky inflation",           source: "FXStreet",         time: "4h ago",  sentiment: "BEARISH", meaning: "ETH leadership crisis; capital rotating to BTC and stocks." },
    { headline: "USDMYR holds 4.02 as ringgit anchors on stable BNM stance",        source: "Investing.com",    time: "11h ago", sentiment: "NEUTRAL", meaning: "Ringgit stability supports KLSE foreign portfolio flows." }
  ],

  goldSummary: {
    "Price":    { value: "$4,524.05", change: "-0.42%", note: "Mild pullback after extended rally." },
    "Open":     { value: "$4,540.00", change: "", note: "Opened near recent highs." },
    "High":     { value: "$4,545.50", change: "", note: "Day high" },
    "Low":      { value: "$4,510.20", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,578.27" },
      { label: "R2",    value: "$4,561.88" },
      { label: "R1",    value: "$4,542.97" },
      { label: "Pivot", value: "$4,526.58" },
      { label: "S1",    value: "$4,507.67" },
      { label: "S2",    value: "$4,491.28" },
      { label: "S3",    value: "$4,472.37" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,561.88" },
      { label: "R2",    value: "$4,548.40" },
      { label: "R1",    value: "$4,540.07" },
      { label: "Pivot", value: "$4,526.58" },
      { label: "S1",    value: "$4,513.10" },
      { label: "S2",    value: "$4,504.77" },
      { label: "S3",    value: "$4,491.28" }
    ],
    camarilla: [
      { label: "R4", value: "$4,543.47" },
      { label: "R3", value: "$4,533.76" },
      { label: "R2", value: "$4,530.52" },
      { label: "R1", value: "$4,527.29" },
      { label: "S1", value: "$4,520.81" },
      { label: "S2", value: "$4,517.58" },
      { label: "S3", value: "$4,514.34" },
      { label: "S4", value: "$4,504.64" }
    ],
    note: "Gold trading just below classic pivot $4,526.58 — short-term bias slightly bearish; reclaim flips bullish toward R1 $4,542."
  }
};
