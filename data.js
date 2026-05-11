window.CRUCIX_DATA = {
  generated: "Mon, 11 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk indices grind to records while gold cracks and oil spikes on Iran tension.",

  macro: {
    dxy:      { value: "97.89",   change: "+0.10%", signal: "Dollar firms; mild headwind for risk." },
    gold:     { value: "$4,667.50", change: "-1.34%", signal: "Profit-taking after run; pivot watch." },
    oil:      { value: "$97.72",  change: "+2.41%", signal: "Iran tension keeps crude bid hot." },
    silver:   { value: "$80.86",  change: "-0.01%", signal: "Flat; lagging gold reversal modestly." },
    yield10y: { value: "4.39%",   change: "+2bps",  signal: "Yields creep up on inflation risk." },
    vix:      { value: "18.38",   change: "+6.92%", signal: "Vol bid despite index record close." },
    usdmyr:   { value: "4.05",    change: "+0.05%", signal: "Ringgit soft against firmer dollar." },
    sp500:    { value: "7,412.84", change: "+0.19%", signal: "Records hold; breadth narrowing risk." },
    verdict: "DXY firmer with 10Y near 4.39% pressures duration but indices keep grinding higher. Gold's -1.34% pullback plus rising VIX hints positioning unwind, not full risk-off. Crypto and AI mega-caps still ride momentum; KLSE faces a soft ringgit but stable export tone."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance elevated; alts still lag." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$80,805", marketCap: "$1.60T", change1h: "N/A", change24h: "+0.30%", change7d: "N/A", insight: "BTC consolidates in a $2,200 range near $80K with ETF inflows for a sixth straight week. Bulls eye an $88K break; loss of $78K opens $74K." },
      { name: "Ethereum", symbol: "ETH", price: "$2,283",  marketCap: "$275B",  change1h: "N/A", change24h: "-0.80%", change7d: "N/A", insight: "ETH lags BTC as BitMine slows accumulation despite Tom Lee's crypto-spring call. Needs to reclaim $2,400 to revive trend; CLARITY Act vote Thursday is the catalyst." },
      { name: "Solana",   symbol: "SOL", price: "$96.62",  marketCap: "$46B",   change1h: "N/A", change24h: "+1.20%", change7d: "N/A", insight: "SOL holds above $94 with healthy on-chain volume. A daily close over $100 reopens $115 target; failure invites $88." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.113",     change24h: "+1.50%", note: "Above 100-day EMA; trend up." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000043", change24h: "+2.10%", note: "Buyers test resistance again." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000064", change24h: "+0.40%", note: "Capped at upper consolidation band." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",        change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",        change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on but cautious — BTC stuck in tight range, dominance high, alts only twitching. $82K is the swing level into Thursday's CLARITY Act vote. Altseason still gated on ETH reclaiming $2,400 with conviction."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,412.84",  change: "+0.19%" },
      { name: "Nasdaq",       value: "26,274.13", change: "+0.10%" },
      { name: "Dow",          value: "49,704.47", change: "+0.19%" },
      { name: "VIX",          value: "18.38",     change: "+6.92%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—",       change: "—",       insight: "Tracks the +0.19% S&P record close; broad-market core hold." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$711.23", change: "+0.10%",  insight: "Tech mega-cap leadership intact; chip strength a tailwind." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "—",       insight: "Mirrors S&P record but VIX spike warns of hedging beneath the surface." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",       insight: "Broad US tilt benefits from large-cap melt-up but lags pure-tech QQQ." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",       insight: "High-beta names sensitive to the 4.39% 10Y; needs yields to ease." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "—",       insight: "Chip stocks extended gains again with NVDA at $221; cycle still tight." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$44.89",  change: "+0.30%",  insight: "Tracks BTC near $80.8K; sixth straight weekly inflow streak." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",       insight: "Sector leadership unchanged with AI capex theme intact." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$436.21", change: "-1.34%",  insight: "Mirrors spot gold's pullback from highs; pivot watch near $4,684." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "—",       change: "—",       notable: false, insight: "Ad-revenue moat intact; capex on AI infra remains the swing factor." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$221.98", change: "+0.10%",  notable: true,  insight: "Daily range $213-$222; $5.46T cap leads the AI complex." },
      { ticker: "TSLA",  name: "Tesla",         price: "—",       change: "—",       notable: false, insight: "Delivery cadence and robotaxi narrative drive sentiment more than fundamentals." },
      { ticker: "AAPL",  name: "Apple",         price: "—",       change: "—",       notable: false, insight: "Services growth and India production diversification cushion macro drag." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",       change: "—",       notable: false, insight: "Azure AI consumption remains the lynchpin of multiple expansion." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "—",       notable: false, insight: "Search resilience plus Gemini monetization keep the bull case alive." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "—",       notable: false, insight: "AWS reacceleration and retail margin lift are the twin levers." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",       change: "—",       notable: false, insight: "Stock sits ~35% off highs; ad-tier and password sharing tailwinds fading." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "—",       notable: false, insight: "MI-series ramp the key debate vs NVDA's installed lead." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "—",       notable: false, insight: "Government AI wins remain the multiple anchor; valuation rich." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",       notable: false, insight: "Cyber spend resilient; identity and cloud workloads still expanding." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "—",       notable: false, insight: "Beta to BTC range trade; CLARITY Act vote Thursday is the catalyst." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "—",       notable: false, insight: "Q1 net loss $12.5B as BTC slide hits mark-to-market; financing risk in focus." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",       notable: false, insight: "AXON ad engine still printing; momentum trade tied to ad-tech cycle." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$34.35",  change: "+5.00%",  notable: true,  insight: "Margin beat and strong guide reignite short-squeeze debate; $20B cap." }
    ],
    trending: [
      { ticker: "SMCI", change: "+5.00%" },
      { ticker: "VIX",  change: "+6.92%" },
      { ticker: "NVDA", change: "+0.10%" },
      { ticker: "N/A",  change: "N/A" },
      { ticker: "N/A",  change: "N/A" }
    ],
    verdict: "AI trade still leads with NVDA at $222 and SMCI re-rating on guidance. VIX +6.92% under a record S&P is the tell — own quality mega-cap AI, fade junior high-beta. Crypto-equity proxies (COIN, MSTR) require BTC to break $82K before re-engagement."
  },

  malaysia: {
    klci:   { value: "1,575", change: "-0.20%", context: "KLCI churns under firmer DXY and softer ringgit. Monday tape leans cautious; export-tech tracks NVDA strength." },
    usdmyr: { value: "4.05",  change: "+0.05%", signal: "Ringgit soft as DXY firms; mild drag." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM11.22", change: "-0.71%", insight: "Defensive bank with OPR stable; dividend yield anchors valuation." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "—",       change: "—",      insight: "Regional banking exposure to Indonesia and Thailand offers FX-linked upside." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",   price: "—",       change: "—",      insight: "Lowest-cost-of-funds franchise; the defensive choice in volatile tape." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",      price: "—",       change: "—",      insight: "Capital strong; high dividend payout supports re-rating thesis." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",        price: "—",       change: "—",      insight: "Data-centre power demand the structural story; regulated returns anchor floor." },
      { ticker: "INARI",  name: "Inari (0138.KL)",         price: "RM1.97",  change: "-3.90%", insight: "Semi cycle wobble despite NVDA strength; entry-level option on AI packaging." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",        price: "—",       change: "—",      insight: "Restructuring and tower monetisation drive re-rating optionality." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",       change: "—",      insight: "Medical tourism and regional bed expansion keep earnings compounding." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",          price: "—",       change: "—",      insight: "Government digital services concession defensible despite cyclical churn." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",         price: "—",       change: "—",      insight: "5G monetisation slow; dividend the main return driver." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No fresh Bursa IPO flow flagged in today's tape." }
    ],
    verdict: "Ringgit at 4.05 stays soft into a firmer dollar week. Maybank the cleanest bank exposure; Inari's -3.90% offers tactical entry if NVDA strength persists. Monday Bursa likely range-bound with bias to mild profit-taking."
  },

  news: [
    { headline: "Bitcoin reclaims $80K as ETFs log sixth weekly inflow streak", source: "Blockchain.News", time: "4h ago",  sentiment: "BULLISH",  meaning: "Institutional demand floor holds; $88K breakout setup intact." },
    { headline: "S&P 500 closes above 7,400 for first time despite Iran setback",   source: "CNBC",           time: "10h ago", sentiment: "BULLISH",  meaning: "Record close shows dip-buyers defend trend through geopolitical noise." },
    { headline: "Chip stocks extend gains as Nasdaq inches to fresh record",         source: "Yahoo Finance",  time: "8h ago",  sentiment: "BULLISH",  meaning: "Semi leadership broadens; AI capex narrative still intact for 2026." },
    { headline: "Strategy reports $12.5B Q1 loss as BTC weakness hits balance sheet", source: "ZyCrypto",       time: "6h ago",  sentiment: "BEARISH",  meaning: "MSTR financing risk back in play; watch for forced BTC sales." },
    { headline: "Trump rejects Iran response to peace proposal as 'unacceptable'",    source: "Yahoo Finance",  time: "5h ago",  sentiment: "WATCH",    meaning: "Oil bid persists; risk-off pockets if rhetoric escalates further." },
    { headline: "VIX jumps 6.9% even as US indices print new highs",                 source: "CNBC",           time: "9h ago",  sentiment: "WATCH",    meaning: "Hedging demand growing under the surface; positioning crowded." },
    { headline: "Super Micro guidance reignites short-squeeze debate",                source: "24/7 Wall St",   time: "1d ago",  sentiment: "BULLISH",  meaning: "AI server demand still pricing power positive for SMCI ecosystem." },
    { headline: "10Y Treasury yield climbs to 4.39% on inflation risk concerns",      source: "TradingEconomics", time: "7h ago", sentiment: "BEARISH",  meaning: "Duration pressure resumes; long-duration tech and EM sensitive." }
  ],

  goldSummary: {
    "Price":    { value: "$4,667.50", change: "-1.34%", note: "Profit-taking after run-up." },
    "Open":     { value: "$4,720.00", change: "", note: "" },
    "High":     { value: "$4,735.00", change: "", note: "Day high" },
    "Low":      { value: "$4,650.00", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,803.33" },
      { label: "R2",    value: "$4,769.17" },
      { label: "R1",    value: "$4,718.33" },
      { label: "Pivot", value: "$4,684.17" },
      { label: "S1",    value: "$4,633.33" },
      { label: "S2",    value: "$4,599.17" },
      { label: "S3",    value: "$4,548.33" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,769.17" },
      { label: "R2",    value: "$4,736.70" },
      { label: "R1",    value: "$4,716.64" },
      { label: "Pivot", value: "$4,684.17" },
      { label: "S1",    value: "$4,651.70" },
      { label: "S2",    value: "$4,631.64" },
      { label: "S3",    value: "$4,599.17" }
    ],
    camarilla: [
      { label: "R4", value: "$4,714.25" },
      { label: "R3", value: "$4,690.88" },
      { label: "R2", value: "$4,683.08" },
      { label: "R1", value: "$4,675.29" },
      { label: "S1", value: "$4,659.71" },
      { label: "S2", value: "$4,651.92" },
      { label: "S3", value: "$4,644.12" },
      { label: "S4", value: "$4,620.75" }
    ],
    note: "Gold $4,667.50 sits below the $4,684 classic pivot — short-term bearish unless reclaimed."
  }
};
