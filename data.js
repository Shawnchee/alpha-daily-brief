window.CRUCIX_DATA = {
  generated: "Thu, 18 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Hawkish Fed signal dragged risk; gold strong, BTC near $62.5K, dollar firm.",

  macro: {
    dxy:      { value: "100.30", change: "+0.21%", signal: "Dollar firmer; pressures EM, gold, risk." },
    gold:     { value: "$4,331", change: "+0.50%", signal: "Safe-haven bid; yields and oil softer." },
    oil:      { value: "$73.68", change: "-3.07%", signal: "Brent under $80; demand fears dominate." },
    silver:   { value: "$69.99", change: "-0.01%", signal: "Flat with gold steady; industrial weak." },
    yield10y: { value: "4.46%",  change: "-4bps",  signal: "Yield ease helps duration, hurts banks." },
    vix:      { value: "17.38",  change: "+2.10%", signal: "Volatility climbing post-Fed hawkish tilt." },
    usdmyr:   { value: "4.0625", change: "+0.36%", signal: "Ringgit soft on dollar strength." },
    sp500:    { value: "7,410",  change: "+0.23%", signal: "Marginally green; AI names rotate." },
    verdict: "Hawkish Fed shift plus firm dollar caps risk despite a small index green print. Gold's bid alongside softer yields signals investors hedging duration and policy risk. KLSE faces ringgit pressure; US tech is choppy; crypto remains sentiment-driven below $65K BTC."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady as alts underperform." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$62,547", marketCap: "$1.28T", change1h: "N/A", change24h: "-0.89%", change7d: "N/A", insight: "BTC slipped to $62K after Fed hawkish signal; key support at $60K. ATH of $126K from Oct 2025 means market is mid-cycle correction." },
      { name: "Ethereum", symbol: "ETH", price: "$1,689",  marketCap: "$203B",  change1h: "N/A", change24h: "-2.86%", change7d: "N/A", insight: "ETH lagging BTC with weak ETH/BTC ratio at multi-year lows. Layer-2 dilution and ETF outflows still weigh on relative performance." },
      { name: "Solana",   symbol: "SOL", price: "$68.29",  marketCap: "$40B",   change1h: "N/A", change24h: "-1.43%", change7d: "N/A", insight: "SOL down 19% vs ETH over past month; memecoin volume cooling. Holding $65 critical for ecosystem confidence." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",     change24h: "-1.10%", note: "Tracking BTC; lacks fresh catalyst." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000044",  change24h: "-2.94%", note: "Consolidating; meme sentiment fading." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000065",  change24h: "-1.32%", note: "Range-bound; burn rate insufficient." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Crypto is risk-off after hawkish Fed; BTC defending $62K with $60K as line in sand. ETH/BTC weakness and meme-coin fade say no altseason yet. A break above $66K BTC needed before chasing alts."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,410",  change: "+0.23%" },
      { name: "Nasdaq",       value: "24,050", change: "+0.74%" },
      { name: "Dow",          value: "47,200", change: "+0.26%" },
      { name: "VIX",          value: "17.38",  change: "+2.10%" },
      { name: "Russell 2000", value: "N/A",    change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$681.41", change: "-1.21%", insight: "Core S&P proxy slipping with broader market on Fed hawkishness." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—",       change: "—",      insight: "Tech-heavy ETF tracks AI sentiment and rate path." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$740.96", change: "-1.25%", insight: "Distribution day signals institutions trimming risk." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Broad-market exposure; mirrors S&P drift lower." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",      insight: "High-beta innovation names vulnerable to hawkish surprises." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$599.73", change: "+1.44%", insight: "Chips bucked the tape; NVDA softer but sector breadth firm." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$34.75",  change: "-0.89%", insight: "Tracks spot BTC; flows have moderated this week." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Tech rotation underway favoring profitable mega-caps." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$404.77", change: "+0.50%", insight: "Gold ETF bid as macro hedges grow into Fed uncertainty." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$567.58", change: "-5.44%", notable: true,  insight: "Sharp drop on ad-spend caution and AI capex worries." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$204.65", change: "-1.33%", notable: false, insight: "Profit-taking after recent run; AI demand thesis intact." },
      { ticker: "TSLA",  name: "Tesla",         price: "—",       change: "—",      notable: false, insight: "EV demand softness and robotaxi rollout drive narrative." },
      { ticker: "AAPL",  name: "Apple",         price: "$299.24", change: "+0.20%", notable: false, insight: "Holding above $295 support; services growth offsetting iPhone." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$380.81", change: "-0.40%", notable: false, insight: "Azure AI growth keeps the multiple defensible." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "—",      notable: false, insight: "Search ad share contested; Gemini and YouTube key levers." },
      { ticker: "AMZN",  name: "Amazon",        price: "$271.85", change: "+2.47%", notable: true,  insight: "AWS reacceleration and ads margin pulled name higher." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",       change: "—",      notable: false, insight: "Ad-tier monetization and password-sharing crackdown still tailwinds." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "—",      notable: false, insight: "MI accelerator ramp watched for share-gain evidence vs NVDA." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "—",      notable: false, insight: "AIP enterprise pipeline driving the bull case." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",      notable: false, insight: "Cybersecurity demand resilient; ARR growth key metric." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "—",      notable: false, insight: "Trading volumes track BTC; staking revenue diversifies." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "—",      notable: false, insight: "Levered BTC proxy; NAV premium compresses on weakness." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",      notable: false, insight: "AXON ad-tech engine the multiple driver." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$28.37",  change: "-2.10%", notable: true,  insight: "Hit hard amid AI-server margin compression and audit overhang." }
    ],
    trending: [
      { ticker: "META", change: "-5.44%" },
      { ticker: "AMZN", change: "+2.47%" },
      { ticker: "SMCI", change: "-2.10%" },
      { ticker: "NVDA", change: "-1.33%" },
      { ticker: "SOXX", change: "+1.44%" }
    ],
    verdict: "AI trade is bifurcating: chips holding (SOXX +1.4%) while mega-cap apps wobble (META -5.4%). Rotation favors profitable hyperscalers and selective semis over high-beta growth. Avoid stretched names into Fed uncertainty; own AAPL, AMZN, NVDA on dips."
  },

  malaysia: {
    klci:   { value: "1,532", change: "-0.15%", context: "KLCI drifted lower on US Fed hawkish read. Friday's session likely range-bound pending ringgit stability." },
    usdmyr: { value: "4.0625", change: "+0.36%", signal: "Ringgit soft; BNM tone watched closely." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM 11.20", change: "+0.40%", insight: "OPR steady supports NIM; dividend yield anchors defensive bid." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "RM 7.82",  change: "+0.50%", insight: "Regional ASEAN exposure benefits from Indonesia loan growth." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",        change: "—",      insight: "Most defensive Malaysian bank; mortgage book steady." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",        change: "—",      insight: "Cheapest big-cap bank on book multiple." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",        change: "—",      insight: "Data-center load growth a structural EBITDA tailwind." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "RM 2.26",  change: "0.00%",  insight: "Outsourced semi packaging proxy; tracks NVDA cycle, currently flat." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",        change: "—",      insight: "Regional telco consolidation thesis still in play." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",        change: "—",      insight: "Medical tourism and bed expansion sustain growth." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",        change: "—",      insight: "Digital ID and concession renewals key catalysts." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",        change: "—",      insight: "5G rollout costs cap near-term FCF upside." }
    ],
    ipos: [
      { name: "Watch this space", sector: "Various", price: "—", listingDate: "—", status: "Upcoming", note: "No major Bursa IPO pricings in today's news flow. Pipeline monitored for tech and consumer names through Q3 2026." }
    ],
    verdict: "Ringgit at 4.06 sets a soft backdrop; defensives (MAY, PBBANK) preferred over exporters. Inari is the cleanest semi proxy if NVDA stabilizes. Friday Bursa likely choppy with US Fed echo dominating."
  },

  news: [
    { headline: "Bitcoin slides to $62K after hawkish Fed shift", source: "Bitcoin Magazine", time: "6h ago", sentiment: "BEARISH", meaning: "Crypto risk-off; deeper pullback to $60K possible if dollar firms." },
    { headline: "Brent crude falls below $80 first time since March", source: "Kitco", time: "8h ago", sentiment: "BEARISH", meaning: "Demand fears trump Mideast risk; supports lower CPI." },
    { headline: "Spot gold firm near $4,331 as yields ease", source: "Kitco", time: "5h ago", sentiment: "BULLISH", meaning: "Macro hedges bid; signals investors fading Fed credibility." },
    { headline: "Nasdaq logs worst day since April 2025 earlier this month", source: "CNBC", time: "2w ago", sentiment: "WATCH", meaning: "Chip-led volatility lingers; positioning still elevated in AI names." },
    { headline: "Dow clears 47K on record closes", source: "Finviz", time: "1w ago", sentiment: "BULLISH", meaning: "Cyclicals and value leadership broadens out of mega-cap tech." },
    { headline: "CIMB Securities positive on Malaysia equities 2026", source: "The Edge", time: "1d ago", sentiment: "BULLISH", meaning: "Brokerage upgrades KLCI on earnings recovery and FDI inflows." },
    { headline: "US-Iran temporary pause supports risk sentiment", source: "CoinGape", time: "1d ago", sentiment: "NEUTRAL", meaning: "Geopolitical de-escalation caps oil but lifts equities marginally." },
    { headline: "Meta drops 5.4% on ad-spend caution", source: "Yahoo Finance", time: "10h ago", sentiment: "BEARISH", meaning: "AI capex worries spread across megacap advertising names." }
  ],

  goldSummary: {
    "Price":    { value: "$4,331", change: "+0.50%", note: "Safe-haven bid into Fed uncertainty." },
    "Open":     { value: "$4,300", change: "", note: "" },
    "High":     { value: "$4,335", change: "", note: "Day high" },
    "Low":      { value: "$4,275", change: "", note: "Day low" },
    "52W High": { value: "N/A",    change: "", note: "" },
    "52W Low":  { value: "N/A",    change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,353" },
      { label: "R2",    value: "$4,332" },
      { label: "R1",    value: "$4,303" },
      { label: "Pivot", value: "$4,282" },
      { label: "S1",    value: "$4,253" },
      { label: "S2",    value: "$4,232" },
      { label: "S3",    value: "$4,203" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,332" },
      { label: "R2",    value: "$4,313" },
      { label: "R1",    value: "$4,301" },
      { label: "Pivot", value: "$4,282" },
      { label: "S1",    value: "$4,263" },
      { label: "S2",    value: "$4,251" },
      { label: "S3",    value: "$4,232" }
    ],
    camarilla: [
      { label: "R4", value: "$4,303" },
      { label: "R3", value: "$4,289" },
      { label: "R2", value: "$4,284" },
      { label: "R1", value: "$4,280" },
      { label: "S1", value: "$4,270" },
      { label: "S2", value: "$4,266" },
      { label: "S3", value: "$4,261" },
      { label: "S4", value: "$4,248" }
    ],
    note: "Gold above classic pivot $4,282 = bullish bias; sustained close over R1 $4,303 opens path to R2 $4,332."
  }
};
