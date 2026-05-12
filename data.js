window.CRUCIX_DATA = {
  generated: "Tue, 12 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk wobble — hot CPI lifts yields, gold corrects, BTC defends $80K.",

  macro: {
    dxy:      { value: "100.85", change: "+0.18%", signal: "Firmer dollar on sticky US inflation print." },
    gold:     { value: "$4678.10", change: "-1.22%", signal: "Profit-taking after record run; trend intact." },
    oil:      { value: "$72.40", change: "+0.45%", signal: "Hormuz tension keeps crude bid steady." },
    silver:   { value: "$48.20", change: "-1.05%", signal: "Tracks gold; industrial demand supportive." },
    yield10y: { value: "4.42%", change: "+5bps", signal: "Yields pop after hot April CPI 3.8%." },
    vix:      { value: "18.38", change: "+1.50%", signal: "Vol creeping up but still complacent." },
    usdmyr:   { value: "4.05", change: "+0.10%", signal: "Ringgit soft on firmer DXY tone." },
    sp500:    { value: "7412.84", change: "+0.19%", signal: "Fresh record close despite Iran setback." },
    verdict: "Hot CPI nudged yields to 4.42% and lifted DXY, pressuring gold and softening risk at the margin. VIX still subdued so equities held record territory, but rate-sensitive growth and BTC need yields to cap soon. KLSE faces a soft ringgit headwind; importers watch USDMYR drift."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC consolidating; alts showing relative strength." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$81,224", marketCap: "$1.60T", change1h: "N/A", change24h: "-0.85%", change7d: "N/A", insight: "BTC holding $80K floor with golden cross nearing for first time since 2023. Compression between $79.5K-$82K signals coiled breakout potential." },
      { name: "Ethereum", symbol: "ETH", price: "$2,282.84", marketCap: "$275B", change1h: "N/A", change24h: "+1.20%", change7d: "N/A", insight: "ETH defending $2,300 with quiet accumulation pattern. Outperforming BTC modestly — early altseason whisper." },
      { name: "Solana",   symbol: "SOL", price: "$94.84",  marketCap: "$45B",  change1h: "N/A", change24h: "+2.10%", change7d: "N/A", insight: "SOL leading L1s as SUI jumps 20% in sympathy. Memecoin and DePIN flows keep ecosystem hot." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1111",     change24h: "+1.04%", note: "Leading meme pack again." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000421", change24h: "+0.80%", note: "Consolidating; awaits BTC breakout." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000645", change24h: "+0.50%", note: "Tight range; volume drying up." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on tone in crypto as BTC defends $80K and ETH/SOL outperform, despite hot CPI. Key BTC level: $82K reclaim opens path to $90K; loss of $79K invites retest of $75K. Altseason signal flickering but not confirmed — watch BTC dominance break."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7412.84",  change: "+0.19%" },
      { name: "Nasdaq",       value: "26274.13", change: "+0.10%" },
      { name: "Dow",          value: "49704.47", change: "+0.19%" },
      { name: "VIX",          value: "18.38",    change: "+1.50%" },
      { name: "Russell 2000", value: "N/A",      change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$678.63", change: "-0.57%", insight: "Tracks S&P record; quiet pullback day on yield pop." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$707.16", change: "-0.40%", insight: "Mega-cap tech digesting; range $696-$712 today." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "—",      insight: "Mirrors VOO; expect mild red on yield uptick." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Broad market proxy; small-caps lag mega-caps." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",      insight: "High-duration growth vulnerable to rising 10Y yield." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "—",      insight: "NVDA-led; AI capex theme intact, valuation stretched." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$45.12",  change: "-0.85%", insight: "Tracks BTC spot; ETF flows steady at $80K support." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Tech leadership intact but breadth narrowing again." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$437.21", change: "-1.22%", insight: "Profit-taking after fresh highs; long-term bull intact." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$720.00", change: "+0.30%", notable: false, insight: "AI ad-monetization story intact; Reels engagement compounding." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$216.07", change: "-1.20%", notable: true,  insight: "Range $214-$223 today; Blackwell ramp and sovereign AI orders underpin." },
      { ticker: "TSLA",  name: "Tesla",         price: "$355.00", change: "+0.50%", notable: false, insight: "Robotaxi narrative carrying valuation; auto margins still soft." },
      { ticker: "AAPL",  name: "Apple",         price: "$292.50", change: "+0.40%", notable: false, insight: "Closed near day-high; services and AI iPhone cycle supportive." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$408.66", change: "-0.97%", notable: false, insight: "Azure AI growth steady; capex digestion weighing near-term." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$215.00", change: "+0.20%", notable: false, insight: "Search resilience plus Gemini momentum balances antitrust noise." },
      { ticker: "AMZN",  name: "Amazon",        price: "$264.70", change: "-1.59%", notable: false, insight: "AWS deceleration concerns; retail margin story still in play." },
      { ticker: "NFLX",  name: "Netflix",       price: "$88.18",  change: "+3.20%", notable: true,  insight: "Outperformer today; ad-tier and live sports thesis paying off." },
      { ticker: "AMD",   name: "AMD",           price: "$165.00", change: "-0.80%", notable: false, insight: "MI400 ramp anticipated; trails NVDA on data-center share." },
      { ticker: "PLTR",  name: "Palantir",      price: "$165.00", change: "+1.10%", notable: false, insight: "Government AIP wins continuing; commercial pipeline expanding." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "$430.00", change: "+0.50%", notable: false, insight: "Cyber demand resilient; Falcon platform expansion ongoing." },
      { ticker: "COIN",  name: "Coinbase",      price: "$245.00", change: "-0.60%", notable: false, insight: "Volumes correlate with BTC; staking and custody flywheel intact." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$187.59", change: "+4.20%", notable: true,  insight: "Saylor adds 535 BTC; 'Bitcoin per share' yardstick reaffirmed." },
      { ticker: "APP",   name: "AppLovin",      price: "$420.00", change: "+1.50%", notable: false, insight: "AXON ad-engine compounding; e-commerce vertical scaling." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$48.00",  change: "-2.10%", notable: false, insight: "AI server cycle intact but margin and disclosure overhang lingers." }
    ],
    trending: [
      { ticker: "MSTR", change: "+4.20%" },
      { ticker: "NFLX", change: "+3.20%" },
      { ticker: "SMCI", change: "-2.10%" },
      { ticker: "AMZN", change: "-1.59%" },
      { ticker: "NVDA", change: "-1.20%" }
    ],
    verdict: "AI trade still leads but breadth narrowing as yields climb — MSTR and NFLX outperformed while semis cooled. Rotate selectively into cash-rich mega-caps (META, GOOGL) and trim high-multiple speculative names if 10Y holds above 4.4%. Own quality compounders, avoid unprofitable growth into next CPI."
  },

  malaysia: {
    klci:   { value: "1612.50", change: "-0.20%", context: "Bursa edged lower Monday on regional caution. Watch for ringgit-driven flows and US tech read-through into Tuesday open." },
    usdmyr: { value: "4.05", change: "+0.10%", signal: "Ringgit soft; firmer DXY caps upside." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM11.22", change: "-0.71%", insight: "OPR steady at 3.00%; NIM resilient and dividend yield ~5.8% anchors defensive demand." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "RM7.98",  change: "+0.60%", insight: "ASEAN diversification and Niaga earnings keep ROE expansion thesis intact." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",       change: "—",      insight: "Highest-quality SME and mortgage book; conservative provisioning supports re-rating." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",       change: "—",      insight: "Capital ratios sector-best; dividend payout uplift remains a key catalyst." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",       change: "—",      insight: "Data-centre power demand and grid capex underpin multi-year earnings visibility." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "RM1.90",  change: "-0.50%", insight: "RF and AI-package volumes tied to NVDA/AAPL cycle; soft tape into US semis pullback." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",       change: "—",      insight: "CelcomDigi synergy and edotco monetisation are the principal valuation unlocks." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",       change: "—",      insight: "Medical tourism rebound and India PLB ramp drive defensive earnings growth." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",       change: "—",      insight: "Concession renewals and Zetrix blockchain optionality remain catalysts to watch." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",       change: "—",      insight: "5G wholesale DNB single-network model preserves cash flow and high dividend payout." }
    ],
    ipos: [
      { name: "Watch Bursa pipeline", sector: "Tech / Consumer", price: "TBA", listingDate: "TBA", status: "Upcoming", note: "Bursa pipeline remains active with mid-cap tech and consumer names through Q2. Subscribe selectively based on valuation discipline." }
    ],
    verdict: "Ringgit at 4.05 stays the swing factor — softer MYR helps exporters (INARI, glove names) and pressures importers. Best risk-reward is CIMB on regional ROE expansion; Maybank a safe yield anchor. Tuesday Bursa likely opens flat to mildly soft on Wall Street's mixed handover and hot US CPI."
  },

  news: [
    { headline: "US April CPI hits 3.8%, highest since May 2023", source: "Trading Economics", time: "1h ago", sentiment: "BEARISH", meaning: "Hot inflation pushes 10Y yields up, pressuring growth and gold." },
    { headline: "S&P 500 closes above 7,400 for first time", source: "CNBC", time: "16h ago", sentiment: "BULLISH", meaning: "Record close signals risk appetite intact despite Iran setback." },
    { headline: "Bitcoin golden cross nears, first since 2023", source: "TradingView", time: "4h ago", sentiment: "BULLISH", meaning: "Technical setup hints at sustained breakout above $82K resistance." },
    { headline: "Strategy adds 535 BTC for $43M, Saylor doubles down", source: "CoinPaper", time: "8h ago", sentiment: "BULLISH", meaning: "MSTR treasury accumulation continues, reinforcing institutional BTC demand." },
    { headline: "Gold pulls back 1.2% from record on yield spike", source: "Trading Economics", time: "3h ago", sentiment: "NEUTRAL", meaning: "Healthy correction; structural bull intact above $4,500 support." },
    { headline: "Strait of Hormuz tensions keep oil prices elevated", source: "CNBC", time: "12h ago", sentiment: "WATCH", meaning: "Energy risk premium adds to inflation worries near-term." },
    { headline: "Ringgit eases as DXY firms on CPI surprise", source: "Maybank FX", time: "2h ago", sentiment: "BEARISH", meaning: "MYR softness helps Malaysian exporters but pressures importers." },
    { headline: "Netflix jumps 3.2% on ad-tier and live sports momentum", source: "CNBC", time: "16h ago", sentiment: "BULLISH", meaning: "Streaming leader still finding new monetisation levers and viewers." }
  ],

  goldSummary: {
    "Price":  { value: "$4678.10", change: "-1.22%", note: "Profit-taking after record run." },
    "Open":   { value: "$4736.00", change: "", note: "Yesterday close anchor" },
    "High":   { value: "$4755.00", change: "", note: "Day high" },
    "Low":    { value: "$4710.00", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4802.34" },
      { label: "R2",    value: "$4778.67" },
      { label: "R1",    value: "$4757.33" },
      { label: "Pivot", value: "$4733.67" },
      { label: "S1",    value: "$4712.33" },
      { label: "S2",    value: "$4688.67" },
      { label: "S3",    value: "$4667.34" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4778.67" },
      { label: "R2",    value: "$4761.48" },
      { label: "R1",    value: "$4750.86" },
      { label: "Pivot", value: "$4733.67" },
      { label: "S1",    value: "$4716.48" },
      { label: "S2",    value: "$4705.86" },
      { label: "S3",    value: "$4688.67" }
    ],
    camarilla: [
      { label: "R4", value: "$4760.75" },
      { label: "R3", value: "$4748.38" },
      { label: "R2", value: "$4744.25" },
      { label: "R1", value: "$4740.13" },
      { label: "S1", value: "$4731.88" },
      { label: "S2", value: "$4727.75" },
      { label: "S3", value: "$4723.63" },
      { label: "S4", value: "$4711.25" }
    ],
    note: "Gold at $4678 — below classic pivot $4734, bearish near-term bias until reclaim."
  }
};
