window.CRUCIX_DATA = {
  generated: "Tue, 19 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off tone as bond yields surge to 16-month highs and BTC slips below $77K.",

  macro: {
    dxy:      { value: "98.90",   change: "-0.32%", signal: "Dollar softens despite yield surge." },
    gold:     { value: "$4570.70", change: "+0.19%", signal: "Holds near record on safe-haven bid." },
    oil:      { value: "$102.51", change: "+1.47%", signal: "Iran standoff keeps energy elevated." },
    silver:   { value: "$78.10",  change: "+0.72%", signal: "Tracks gold; industrial demand steady." },
    yield10y: { value: "4.62%",   change: "+3bps",  signal: "Sixteen-month high pressures duration assets." },
    vix:      { value: "17.99",   change: "+0.95%", signal: "Fear creeping but not panic yet." },
    usdmyr:   { value: "4.05",    change: "+0.10%", signal: "Ringgit steady; oil tailwind partial." },
    sp500:    { value: "7347.05", change: "-0.76%", signal: "Pullback as yields squeeze multiples." },
    verdict: "DXY soft yet 10Y at 4.62% with VIX edging up signals a confused tape: cash rates compete with risk while gold prints record highs. Crypto faces gravitational pull from yields; mega-cap tech faces multiple compression ahead of NVDA earnings. KLSE benefits from Ringgit stability but oil at $102 cuts both ways for consumer names."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance elevated on alt weakness." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$76,500",   marketCap: "$1.52T", change1h: "N/A", change24h: "-1.04%", change7d: "N/A", insight: "BTC slides below $77K as ETFs see $1B+ outflows and yields surge. $75K is critical support; loss opens path to $70K retest." },
      { name: "Ethereum", symbol: "ETH", price: "$2,138.11", marketCap: "$258B",  change1h: "N/A", change24h: "-1.50%", change7d: "N/A", insight: "ETH/BTC ratio compressed as Bitcoin dominance grips the cycle. Needs reclaim of $2,300 to flip momentum." },
      { name: "Solana",   symbol: "SOL", price: "$85.71",    marketCap: "$50B",   change1h: "N/A", change24h: "-2.10%", change7d: "N/A", insight: "SOL underperforming with risk-off backdrop and memecoin fatigue. $80 is the line; bulls need broader risk recovery." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",    change24h: "-2.30%", note: "Neutral-bearish; awaiting BTC stabilization." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000040", change24h: "-1.80%", note: "Hugging 100-day EMA support." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000061", change24h: "+0.50%", note: "Bouncing off 50-day EMA." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-off as BTC loses $77K with $1B ETF outflows and 4.62% yields competing for capital. Hold $75K and the structure survives; lose it and $70K becomes the magnet. No altseason signal — dominance high, memes range-bound."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7347.05",  change: "-0.76%" },
      { name: "Nasdaq",       value: "25771.84", change: "-1.22%" },
      { name: "Dow",          value: "49466.23", change: "-0.44%" },
      { name: "VIX",          value: "17.99",    change: "+0.95%" },
      { name: "Russell 2000", value: "N/A",      change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$673.12", change: "-0.08%", insight: "Core S&P holding flat ahead of NVDA earnings." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$711.23", change: "-1.20%", insight: "Tech-heavy ETF leads decline as yields bite." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "-0.76%", insight: "Tracks SPX; same -0.76% read as index." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "N/A",    insight: "Broad market exposure; mirrors SPX/Nasdaq weakness." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "N/A",    insight: "High-beta names vulnerable to yield surge." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "N/A",    insight: "Chip ETF pivots on NVDA print this week." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$42.50",  change: "-1.04%", insight: "Reflects BTC weakness; $1B+ outflows reported." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "N/A",    insight: "Tech sector under pressure from rates." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$427.17", change: "+0.19%", insight: "Gold proxy near records on safe-haven demand." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$611.21", change: "-0.50%", notable: false, insight: "Megacap holds up best amid tech selloff." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$222.21", change: "-1.40%", notable: true,  insight: "Earnings this week — the swing factor for AI trade." },
      { ticker: "TSLA",  name: "Tesla",         price: "$410.03", change: "-2.90%", notable: true,  insight: "Hit hardest as rates and risk-off compound." },
      { ticker: "AAPL",  name: "Apple",         price: "$297.69", change: "-0.80%", notable: false, insight: "Defensive megacap; modest pullback only." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$364.34", change: "+1.50%", notable: false, insight: "Bucks tech weakness on Azure/AI strength." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "N/A",    notable: false, insight: "Search/cloud durable; tracks broader tech tape." },
      { ticker: "AMZN",  name: "Amazon",        price: "$206.16", change: "+2.59%", notable: false, insight: "Outperforms on retail-AWS resilience read." },
      { ticker: "NFLX",  name: "Netflix",       price: "$95.12",  change: "+2.31%", notable: false, insight: "Ad-tier viewers hit 250M — bullish catalyst." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "N/A",    notable: false, insight: "Tracks NVDA print and SOXX cycle." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "N/A",    notable: false, insight: "Govt/AI narrative intact; high-beta in selloff." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "N/A",    notable: false, insight: "Cybersecurity defensive but rate-sensitive." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "N/A",    notable: false, insight: "Tracks BTC weakness; ETF outflows headwind." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "N/A",    notable: false, insight: "TD Cowen raised target $400 on BTC accumulation." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "N/A",    notable: false, insight: "Adtech momentum cooled with broader risk-off." },
      { ticker: "SMCI",  name: "Super Micro",   price: "—",       change: "-5.80%", notable: true,  insight: "Plunged on macro headwinds — oil/yields cocktail." }
    ],
    trending: [
      { ticker: "SMCI", change: "-5.80%" },
      { ticker: "TSLA", change: "-2.90%" },
      { ticker: "AMZN", change: "+2.59%" },
      { ticker: "NFLX", change: "+2.31%" },
      { ticker: "MSFT", change: "+1.50%" }
    ],
    verdict: "AI trade pauses ahead of NVDA print; rotation favors defensive megacaps (MSFT, AMZN) over high-beta (TSLA, SMCI). Own cash-flow durable names; avoid speculative momentum until yields stabilize. NVDA earnings is the macro pivot this week."
  },

  malaysia: {
    klci:   { value: "1612.50", change: "-0.15%", context: "KLCI holds 1610 support amid global risk-off. Tuesday open will track regional response to US yield surge." },
    usdmyr: { value: "4.05",    change: "+0.10%", signal: "Ringgit stable; oil cushion offsets DXY noise." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "11.08", change: "-0.18%", insight: "Largest bank; OPR steady supports NIM outlook." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "7.80",  change: "-0.25%", insight: "Regional banking exposure; Indonesia growth tailwind." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",      change: "N/A",     insight: "Defensive bank with strong mortgage book." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",      change: "N/A",     insight: "Mid-tier bank; dividend yield support." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",      change: "N/A",     insight: "Utility play; data center capex story intact." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "1.91",  change: "-0.52%", insight: "Semi cycle tied to NVDA/Apple — earnings risk." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",      change: "N/A",     insight: "Telco consolidation story; CelcomDigi synergies." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",      change: "N/A",     insight: "Pan-Asian hospitals; defensive growth compounder." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",      change: "N/A",     insight: "Digital services moat; concession renewals key." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",      change: "N/A",     insight: "5G monetization slow; dividend anchor remains." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No major IPO catalysts surfaced in search." }
    ],
    verdict: "Ringgit at 4.05 is constructive — DXY softness offsets oil headwind. Inari is the cleanest NVDA-print proxy on Bursa. Tuesday open likely defensive; watch banks for OPR commentary."
  },

  news: [
    { headline: "Bitcoin slides below $77K as ETF outflows top $1 billion",         source: "Bitcoin Magazine",   time: "2h ago",  sentiment: "BEARISH", meaning: "ETF selling pressure threatens key $75K technical support level." },
    { headline: "US 10-year yield hits 16-month high at 4.7% on inflation worries", source: "Yahoo Finance",      time: "4h ago",  sentiment: "BEARISH", meaning: "Higher rates squeeze stock multiples and pressure risk assets broadly." },
    { headline: "Gold futures hold near record at $4,570 on safe-haven demand",     source: "Investing.com",      time: "3h ago",  sentiment: "BULLISH", meaning: "Investors hedge rate volatility and geopolitical risk via gold allocation." },
    { headline: "Crude oil climbs to $102 as Iran standoff prevents supply return", source: "Reuters",            time: "5h ago",  sentiment: "WATCH",   meaning: "Energy-driven inflation could force Fed to delay rate cuts." },
    { headline: "TD Cowen raises MSTR target to $400 on Bitcoin accumulation",      source: "Bitcoin Magazine",   time: "6h ago",  sentiment: "BULLISH", meaning: "Wall Street validates Strategy's BTC treasury model despite drawdown." },
    { headline: "Super Micro plunges 5.8% on macro headwinds and inventory worry",  source: "Yahoo Finance",      time: "1h ago",  sentiment: "BEARISH", meaning: "AI server names vulnerable as capex digestion concerns resurface." },
    { headline: "Netflix advertising tier reaches 250 million monthly viewers",     source: "Foreign Policy",     time: "8h ago",  sentiment: "BULLISH", meaning: "Ad-tier scale validates streaming monetization shift; bullish NFLX." },
    { headline: "Supermicro reports fiscal Q3 2026 results amid governance shadow", source: "StorageNewsletter", time: "12h ago", sentiment: "NEUTRAL", meaning: "Mixed print keeps SMCI in penalty box despite AI tailwinds." }
  ],

  goldSummary: {
    "Price":  { value: "$4570.70", change: "+0.19%", note: "Near record; safe-haven bid dominant." },
    "Open":   { value: "$4560.00", change: "", note: "Estimated session open." },
    "High":   { value: "$4585.00", change: "", note: "Day high" },
    "Low":    { value: "$4550.00", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4622.14" },
      { label: "R2",    value: "$4603.57" },
      { label: "R1",    value: "$4587.14" },
      { label: "Pivot", value: "$4568.57" },
      { label: "S1",    value: "$4552.14" },
      { label: "S2",    value: "$4533.57" },
      { label: "S3",    value: "$4517.14" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4603.57" },
      { label: "R2",    value: "$4590.20" },
      { label: "R1",    value: "$4581.94" },
      { label: "Pivot", value: "$4568.57" },
      { label: "S1",    value: "$4555.20" },
      { label: "S2",    value: "$4546.94" },
      { label: "S3",    value: "$4533.57" }
    ],
    camarilla: [
      { label: "R4", value: "$4589.95" },
      { label: "R3", value: "$4580.33" },
      { label: "R2", value: "$4577.12" },
      { label: "R1", value: "$4573.91" },
      { label: "S1", value: "$4567.49" },
      { label: "S2", value: "$4564.28" },
      { label: "S3", value: "$4561.07" },
      { label: "S4", value: "$4551.45" }
    ],
    note: "Gold above $4568 classic pivot — bullish bias holds toward R1/R2 retest."
  }
};
