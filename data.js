window.CRUCIX_DATA = {
  generated: "Sun, 31 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on stocks at records while crypto wobbles below $74K; gold near all-time highs.",

  macro: {
    dxy:      { value: "98.94",   change: "+0.03%", signal: "Dollar steady near three-week range." },
    gold:     { value: "$4,539",  change: "+0.97%", signal: "Gold surges; safe-haven flows persist." },
    oil:      { value: "$91.12",  change: "-1.70%", signal: "Brent slips on Iran peace talk." },
    silver:   { value: "$74.95",  change: "-2.54%", signal: "Silver pulls back; gold ratio widens." },
    yield10y: { value: "4.45%",   change: "-2bps",  signal: "Yields near three-week lows; duration bid." },
    vix:      { value: "15.32",   change: "-2.67%", signal: "Volatility compressed; complacency creeping in." },
    usdmyr:   { value: "4.02",    change: "-0.10%", signal: "Ringgit firm vs softer dollar." },
    sp500:    { value: "7,580.06", change: "+0.22%", signal: "Index at fresh record close." },
    verdict: "Soft DXY plus falling yields and a sub-16 VIX is textbook risk-on, even as gold rips alongside equities. Crypto is the one asset class not participating — institutional ETF outflows are the swing factor next week. KLSE benefits from a stronger ringgit; semis like Inari ride the NVDA tailwind."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC weakness suggests altcoins under pressure." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$73,413", marketCap: "$1.47T", change1h: "N/A", change24h: "-1.00%", change7d: "N/A", insight: "BTC slipped below $74K with $71K support in focus as $2.9B left ETFs this week. A reclaim of $79K is needed to flip momentum bullish again." },
      { name: "Ethereum", symbol: "ETH", price: "$2,060", marketCap: "$248B",  change1h: "N/A", change24h: "-1.50%", change7d: "N/A", insight: "ETH consolidates near $2,060 as the ETH/BTC ratio compresses further. Staking demand remains the structural bid amid weak spot flows." },
      { name: "Solana",   symbol: "SOL", price: "$82.66",  marketCap: "$39B",   change1h: "N/A", change24h: "-2.00%", change7d: "N/A", insight: "SOL holds the low $80s as memecoin volume slows on-chain. DePIN and Firedancer remain the 2026 narratives to watch." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",     change24h: "-1.20%", note: "Holding key support; bearish bias." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000040",  change24h: "-2.10%", note: "Coiled near resistance; flat tape." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000064",  change24h: "-1.80%", note: "Range-bound between key EMAs." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-OFF for crypto specifically — $2.9B in BTC ETF outflows and a Strategy buying pause are real warnings. $71K is the line in the sand for BTC; a break opens $68K. Altseason is on hold until BTC reclaims $79K with conviction."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,580.06",  change: "+0.22%" },
      { name: "Nasdaq",       value: "26,972.62", change: "+0.20%" },
      { name: "Dow",          value: "51,032.46", change: "+0.72%" },
      { name: "VIX",          value: "15.32",     change: "-2.67%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—",      change: "Fri close", insight: "Tracks S&P which closed at fresh records Friday." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—",      change: "Fri close", insight: "Mega-cap tech leadership keeps QQQ in record territory." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",      change: "Fri close", insight: "Equivalent S&P exposure; positive flows continue." },
      { ticker: "VTI",  name: "Total Market",      price: "—",      change: "Fri close", insight: "Broad market participation narrowing back to mega-caps." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",      change: "Fri close", insight: "High-beta innovation lags broad index gains." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",      change: "Fri close", insight: "Semis remain the AI proxy; NVDA dominates weighting." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$40.78", change: "-1.00%",    insight: "Estimated from BTC; $2.9B in weekly ETF outflows is concerning." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",      change: "Fri close", insight: "Tech sector at records; MSFT/NVDA carrying the weight." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$424.21", change: "+0.97%",   insight: "GLD tracks gold's break to new highs on safe-haven demand." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$607.38", change: "+0.38%",     notable: false, insight: "Reels monetization and AI capex story keep META in favor." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$212.49", change: "Fri close",  notable: true,  insight: "Still the AI bellwether; hyperscaler capex remains the key catalyst." },
      { ticker: "TSLA",  name: "Tesla",         price: "$417.85", change: "+0.14%",     notable: false, insight: "Robotaxi narrative supports the premium; deliveries are the swing factor." },
      { ticker: "AAPL",  name: "Apple",         price: "$310.85", change: "+0.82%",     notable: false, insight: "Apple Intelligence cycle driving services growth and a hardware refresh." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",       change: "+5.29%",     notable: true,  insight: "Microsoft popped Friday on Azure AI revenue acceleration commentary." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "+2.50%",     notable: false, insight: "Gemini adoption and search resilience driving the bid in Alphabet." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "+1.22%",     notable: false, insight: "AWS reaccelerating; retail margin story supports the valuation." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",       change: "+0.39%",     notable: false, insight: "Ad tier and live sports continue to drive subscriber additions." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "Fri close",  notable: false, insight: "MI300X ramp is the key catalyst; trails NVDA in AI share." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "Fri close",  notable: false, insight: "AIP commercial traction is the bull case at a premium multiple." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "Fri close",  notable: false, insight: "Cybersecurity leadership intact; Falcon platform consolidation continues." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "Fri close",  notable: false, insight: "Crypto ETF outflows are a headwind for trading volume revenue." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "+5.03%",     notable: false, insight: "MSTR up Friday even as Strategy paused its weekly BTC buying." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "Fri close",  notable: false, insight: "AXON ad-tech engine continues to compound revenue at scale." },
      { ticker: "SMCI",  name: "Super Micro",   price: "—",       change: "+11.00%",    notable: true,  insight: "SMCI surged 11% Friday on the Verda European AI cloud partnership." }
    ],
    trending: [
      { ticker: "SMCI",  change: "+11.00%" },
      { ticker: "MSFT",  change: "+5.29%" },
      { ticker: "MSTR",  change: "+5.03%" },
      { ticker: "GOOGL", change: "+2.50%" },
      { ticker: "AMZN",  change: "+1.22%" }
    ],
    verdict: "AI trade is back in full force — MSFT, SMCI, and NVDA are leading while breadth narrows again. Own mega-cap quality and AI infrastructure; avoid high-beta innovation that needs broad participation. Crypto-linked equities are a hedge-against-yourself trade until BTC reclaims $79K."
  },

  malaysia: {
    klci:   { value: "1,699.02", change: "-0.40%", context: "KLCI eased into the weekend at 1,699 after opening at 1,707. Monday outlook hinges on regional risk appetite and a softer USD/MYR helping flows." },
    usdmyr: { value: "4.02",     change: "-0.10%", signal: "Ringgit firmer; supportive for foreign inflows." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM10.64", change: "+1.30%",    insight: "Maybank firm on OPR stability and resilient regional NIM." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "RM7.48",  change: "-0.10%",    insight: "CIMB flat as regional banking offsets domestic margin pressure." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",       change: "Fri close", insight: "Defensive bank with mortgage book strength; index anchor." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",       change: "Fri close", insight: "Dividend yield play within the local banking trio." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",       change: "Fri close", insight: "Utility with data center capex story remains a 2026 favorite." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "RM2.34",  change: "-0.40%",    insight: "Inari soft despite NVDA strength; awaiting semi cycle reacceleration." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",       change: "Fri close", insight: "Regional telco consolidation theme remains the medium-term driver." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",       change: "Fri close", insight: "Healthcare defensive with cross-border medical tourism tailwind." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",       change: "Fri close", insight: "Digital government services with steady recurring revenue stream." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",       change: "Fri close", insight: "5G monetization and enterprise pivot remain key catalysts." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No fresh Bursa IPO news in this batch. Watch for tech and consumer listings as the 2026 pipeline rebuilds." }
    ],
    verdict: "Ringgit firmer at 4.02 is a quiet tailwind for foreign flows into KLSE. Maybank is the best risk-adjusted name with banks leading the index. Monday Bursa could see a modest bounce if US futures hold gains and Inari catches up to semi strength."
  },

  news: [
    { headline: "Bitcoin slides below $74K as $2.9B exits BTC ETFs",            source: "OpenPR",        time: "6h ago", sentiment: "BEARISH", meaning: "Institutional outflows pressure crypto; $71K support critical." },
    { headline: "S&P 500 and Nasdaq close at new records on tech rally",        source: "CNBC",          time: "2d ago", sentiment: "BULLISH", meaning: "Risk-on intact; mega-cap tech leadership continues." },
    { headline: "Super Micro jumps 11% on Verda AI cloud partnership deal",     source: "TipRanks",      time: "1d ago", sentiment: "BULLISH", meaning: "AI infrastructure demand remains a powerful tailwind." },
    { headline: "Gold rebounds hard from key support toward new highs",         source: "Forex.com",     time: "1d ago", sentiment: "BULLISH", meaning: "Safe-haven bid intact; gold pivot resolves higher." },
    { headline: "10-year Treasury yield hovers near three-week lows at 4.45%",  source: "TradingEcon",   time: "2d ago", sentiment: "BULLISH", meaning: "Lower yields support both equity and gold bids." },
    { headline: "Brent crude falls on US-Iran temporary peace pause talks",     source: "CoinGape",      time: "1d ago", sentiment: "NEUTRAL", meaning: "Geopolitical premium easing; oil supply fears reduced." },
    { headline: "Strategy pauses weekly Bitcoin buying as accumulation slows",  source: "StreetInsider", time: "1d ago", sentiment: "BEARISH", meaning: "Key institutional bid removed; sentiment turns cautious." },
    { headline: "KLCI eases to 1,699 as regional markets consolidate",          source: "Investing.com", time: "2d ago", sentiment: "NEUTRAL", meaning: "Bursa flat into Monday; ringgit firm supports flows." }
  ],

  goldSummary: {
    "Price":  { value: "$4,539",    change: "+0.97%", note: "Gold rebounds toward record high." },
    "Open":   { value: "$4,494.94", change: "",       note: "" },
    "High":   { value: "$4,595.31", change: "",       note: "Day high" },
    "Low":    { value: "$4,488.68", change: "",       note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,671.17" },
      { label: "R2",    value: "$4,633.24" },
      { label: "R1",    value: "$4,564.54" },
      { label: "Pivot", value: "$4,526.61" },
      { label: "S1",    value: "$4,457.91" },
      { label: "S2",    value: "$4,419.98" },
      { label: "S3",    value: "$4,351.28" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,633.24" },
      { label: "R2",    value: "$4,592.51" },
      { label: "R1",    value: "$4,567.34" },
      { label: "Pivot", value: "$4,526.61" },
      { label: "S1",    value: "$4,485.88" },
      { label: "S2",    value: "$4,460.71" },
      { label: "S3",    value: "$4,419.98" }
    ],
    camarilla: [
      { label: "R4", value: "$4,554.48" },
      { label: "R3", value: "$4,525.15" },
      { label: "R2", value: "$4,515.38" },
      { label: "R1", value: "$4,505.60" },
      { label: "S1", value: "$4,486.06" },
      { label: "S2", value: "$4,476.28" },
      { label: "S3", value: "$4,466.51" },
      { label: "S4", value: "$4,437.18" }
    ],
    note: "Gold at $4,539 sits above the $4,526 classic pivot — bullish bias intact while above R1 zone."
  }
};
