window.CRUCIX_DATA = {
  generated: "Wed, 10 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off Wednesday: Iran strike headlines crush equities, lift VIX, pressure gold and crypto.",

  macro: {
    dxy:      { value: "104.20", change: "+0.35%", signal: "Dollar bid on geopolitical haven flows." },
    gold:     { value: "$4,200", change: "-1.40%", signal: "Pullback from peak; dollar strength weighs." },
    oil:      { value: "$82.50", change: "+3.20%", signal: "Iran strikes spike crude supply fears." },
    silver:   { value: "$48.20", change: "-1.10%", signal: "Tracking gold lower despite haven demand." },
    yield10y: { value: "4.52%",  change: "+2bps",  signal: "Inflation worries lift yields modestly." },
    vix:      { value: "22.22",  change: "+12.00%", signal: "Volatility surges; fear gauge breaks 22." },
    usdmyr:   { value: "3.98",   change: "+0.20%", signal: "Ringgit weaker on dollar haven flows." },
    sp500:    { value: "7,266.99", change: "-1.62%", signal: "Broad-based selloff led by tech." },
    verdict: "DXY higher with yields creeping up and VIX punching through 22 is a classic risk-off cocktail. Gold's pullback shows positioning unwind rather than haven failure. Crypto and KLSE both face headwinds; US tech rotation likely continues into Thursday."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance holding around 54-55% range." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$96,262", marketCap: "$1.90T", change1h: "N/A", change24h: "-1.04%", change7d: "N/A", insight: "BTC slipping near realized price with ETF demand turning negative. Iran headlines amplify risk-off; $95K is key support." },
      { name: "Ethereum", symbol: "ETH", price: "$1,581", marketCap: "$190B", change1h: "N/A", change24h: "-2.10%", change7d: "N/A", insight: "Network activity elevated but price languishes below $1,600. ETH/BTC ratio remains weak, signaling persistent altcoin underperformance." },
      { name: "Solana",   symbol: "SOL", price: "$65.12", marketCap: "$31B", change1h: "N/A", change24h: "+1.80%", change7d: "N/A", insight: "Lone green among majors with mild bounce despite 12% weekly drop. Ecosystem activity steady but needs BTC stability to extend." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",     change24h: "-2.50%", note: "Bearish flip; momentum fading fast." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000271", change24h: "-3.10%", note: "Consolidating after recent breakdown." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000466", change24h: "-2.80%", note: "Weak volume; awaiting BTC direction." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-off bleeding into crypto with BTC near realized price and ETF outflows turning negative. $95K is the line in the sand for BTC — breach opens $90K. Altseason signal absent; SOL relative strength is the only bright spot."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,266.99",  change: "-1.62%" },
      { name: "Nasdaq",       value: "25,169.50", change: "-1.98%" },
      { name: "Dow",          value: "49,918.78", change: "-1.87%" },
      { name: "VIX",          value: "22.22",     change: "+12.00%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—", change: "—", insight: "Tracks SPX; expect -1.6% mirror move on the session." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—", change: "—", insight: "Tech-heavy ETF should reflect Nasdaq's -1.98% drop." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—", change: "—", insight: "Most-traded ETF; mirrors S&P weakness." },
      { ticker: "VTI",  name: "Total Market",      price: "—", change: "—", insight: "Broad market exposure feels the same risk-off pressure." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—", change: "—", insight: "High-beta growth names amplify Nasdaq weakness." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—", change: "—", insight: "Chip names mixed; NVDA only -0.22% provides relative cushion." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$53.48", change: "-1.04%", insight: "Tracks BTC; outflows turning negative is a warning." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—", change: "—", insight: "Mega-cap tech weakness drags sector lower." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$392.52", change: "-1.40%", insight: "Mirrors spot gold's pullback toward $4,200." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$584.59", change: "-0.14%", notable: false, insight: "Megacap holds up best on the day; ad market resilience." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$208.19", change: "-0.22%", notable: false, insight: "Relative strength vs broader chip selloff; AI bid remains." },
      { ticker: "TSLA",  name: "Tesla",         price: "$396.68", change: "-3.00%", notable: true,  insight: "Worst megacap performer; cyclical exposure punished." },
      { ticker: "AAPL",  name: "Apple",         price: "—",       change: "-1.50%", notable: false, insight: "Hardware names drift with broader risk-off tape." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$402.25", change: "-0.30%", notable: false, insight: "Cloud and AI exposure provides relative cushion." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "-1.20%", notable: false, insight: "Search resilience but caught in broad mega-cap selloff." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "-1.80%", notable: false, insight: "Consumer cyclical drag plus AWS sentiment weighing." },
      { ticker: "NFLX",  name: "Netflix",       price: "$82.00",  change: "-2.50%", notable: true,  insight: "Down 38% from June 2025 peak; bearish momentum near oversold." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "-2.20%", notable: false, insight: "Chip cycle worries dominate after last week's semi slide." },
      { ticker: "PLTR",  name: "Palantir",      price: "$130.53", change: "-1.30%", notable: false, insight: "Government AI thesis intact but high-multiple names sold." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "-1.50%", notable: false, insight: "Cyber spending narrative steady through risk-off bouts." },
      { ticker: "COIN",  name: "Coinbase",      price: "$202.29", change: "-4.58%", notable: true,  insight: "Crypto beta hit hard as BTC drifts to realized price." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$127.00", change: "-5.20%", notable: true,  insight: "BTC treasury trade under real stress test; CFO insider sale noted." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "-2.50%", notable: false, insight: "Adtech beta vulnerable in risk-off rotation." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$30.22",  change: "-1.80%", notable: true,  insight: "Off 17% from recent highs; AI server narrative fading near term." }
    ],
    trending: [
      { ticker: "MSTR", change: "-5.20%" },
      { ticker: "COIN", change: "-4.58%" },
      { ticker: "TSLA", change: "-3.00%" },
      { ticker: "NFLX", change: "-2.50%" },
      { ticker: "SMCI", change: "-1.80%" }
    ],
    verdict: "AI trade narrowing — NVDA holds (-0.22%) while peers crack, classic late-cycle rotation. Crypto-equity proxies (COIN, MSTR) lead losers as risk-off compounds BTC weakness. Own quality mega-cap balance sheets (MSFT, META); avoid high-beta cyclicals and crypto-leveraged names until VIX breaks back below 20."
  },

  malaysia: {
    klci:   { value: "1,580", change: "-0.40%", context: "KLCI defensive vs US selloff but tracking weak. Wednesday opens with bias to defensive names amid global risk-off." },
    usdmyr: { value: "3.98", change: "+0.20%", signal: "Ringgit weaker as dollar haven bid intensifies." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "11.08", change: "-0.18%", insight: "Defensive bank anchor; OPR stable supports NIM outlook." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "—",     change: "—",      insight: "Regional ASEAN banking exposure cushions domestic risk." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",     change: "—",      insight: "Defensive bank with stable retail deposit franchise." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",     change: "—",      insight: "Mid-cap bank trades at discount to peers on book value." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",     change: "—",      insight: "Utility defensive; data centre power demand structural tailwind." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "2.36",  change: "+0.85%", insight: "Semi cycle bottoming; NVDA orderflow benefits OSAT players." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",     change: "—",      insight: "Telco consolidation thesis intact but capex headwinds persist." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",     change: "—",      insight: "Defensive healthcare with regional expansion optionality." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",     change: "—",      insight: "Government services digitalisation provides steady recurring revenue." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",     change: "—",      insight: "5G monetisation and DNB structure debate weighs on sentiment." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No notable upcoming Bursa IPOs flagged in today's news flow." }
    ],
    verdict: "Ringgit at 3.98 holding the 3.90-4.10 range despite dollar strength — relative resilience. Best risk-reward today is Inari, leveraged to bottoming semi cycle and Nvidia orderflow. Wednesday Bursa likely defensive bid into banks and utilities while exporters face FX-mixed headwinds."
  },

  news: [
    { headline: "Dow dips 900 points as US signals more strikes in Iran", source: "TheStreet", time: "2h ago", sentiment: "BEARISH", meaning: "Geopolitical escalation drives broad risk-off equity selloff today." },
    { headline: "Gold drops toward $4,200 to lowest since March", source: "TradingEconomics", time: "3h ago", sentiment: "BEARISH", meaning: "Dollar strength overrides haven bid despite Iran headlines." },
    { headline: "Bitcoin near realized price as ETF demand turns negative", source: "Blockonomi", time: "4h ago", sentiment: "BEARISH", meaning: "Spot ETF outflows signal institutional positioning unwind underway." },
    { headline: "MicroStrategy sell-off signals first real stress test", source: "CNBC", time: "1d ago", sentiment: "BEARISH", meaning: "BTC treasury proxy trade cracks as MSTR breaks key support." },
    { headline: "Trump says Iran will have to 'pay the price'", source: "CryptoNews", time: "5h ago", sentiment: "BEARISH", meaning: "Headline risk persists; crude jumps, equities slide further." },
    { headline: "Nasdaq logs worst day since April 2025 last week", source: "CNBC", time: "5d ago", sentiment: "BEARISH", meaning: "Semiconductor slide wipes one trillion from market cap." },
    { headline: "US 10-year yield steady at 4.52% amid risk-off", source: "TradingEconomics", time: "1h ago", sentiment: "NEUTRAL", meaning: "Yield curve flattening despite haven flow into Treasuries." },
    { headline: "Pending BOJ rate decision could ripple to Bitcoin", source: "TradingView", time: "6h ago", sentiment: "WATCH", meaning: "Carry-trade unwind risk if Japan tightens further this week." }
  ],

  goldSummary: {
    "Price":  { value: "$4,200", change: "-1.40%", note: "Lowest level since March 23 today." },
    "Open":   { value: "$4,260", change: "", note: "Yesterday close before pullback today" },
    "High":   { value: "$4,280", change: "", note: "Day high" },
    "Low":    { value: "$4,195", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,373.33" },
      { label: "R2",    value: "$4,326.67" },
      { label: "R1",    value: "$4,288.33" },
      { label: "Pivot", value: "$4,241.67" },
      { label: "S1",    value: "$4,203.33" },
      { label: "S2",    value: "$4,156.67" },
      { label: "S3",    value: "$4,118.33" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,326.67" },
      { label: "R2",    value: "$4,294.20" },
      { label: "R1",    value: "$4,274.14" },
      { label: "Pivot", value: "$4,241.67" },
      { label: "S1",    value: "$4,209.20" },
      { label: "S2",    value: "$4,189.14" },
      { label: "S3",    value: "$4,156.67" }
    ],
    camarilla: [
      { label: "R4", value: "$4,296.75" },
      { label: "R3", value: "$4,273.38" },
      { label: "R2", value: "$4,265.58" },
      { label: "R1", value: "$4,257.79" },
      { label: "S1", value: "$4,242.21" },
      { label: "S2", value: "$4,234.42" },
      { label: "S3", value: "$4,226.63" },
      { label: "S4", value: "$4,203.25" }
    ],
    note: "Gold at $4,200 trades below the classic pivot of $4,241 — bearish bias intact below this level."
  }
};
