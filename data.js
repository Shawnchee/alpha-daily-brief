window.CRUCIX_DATA = {
  generated: "Sat, 06 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off shock: Nasdaq -4.18%, BTC cracks $60K, gold -3.1% on yield surge.",

  macro: {
    dxy:      { value: "100.05", change: "+0.67%",  signal: "Dollar bid as yields spike higher." },
    gold:     { value: "$4365.30", change: "-3.10%", signal: "Profit-taking on hot jobs print." },
    oil:      { value: "$90.54", change: "-2.69%", signal: "Demand fears amid risk-off rotation." },
    silver:   { value: "$69.10", change: "-6.58%", signal: "Silver leads metals selloff sharply." },
    yield10y: { value: "4.536%", change: "+5.9bps", signal: "Yields surge on payrolls strength." },
    vix:      { value: "21.51", change: "+18.40%", signal: "Fear gauge spikes above 21 handle." },
    usdmyr:   { value: "4.0280", change: "+0.08%", signal: "Ringgit soft as DXY firms up." },
    sp500:    { value: "7383.74", change: "-2.64%", signal: "Worst session since April 2025 rout." },
    verdict: "DXY firm, 10Y at 4.54%, and VIX 21.5 form a classic risk-off cocktail — gold's drop confirms forced liquidation, not safe-haven bid. Crypto and high-beta tech bleed first under this regime; BTC sub-$60K is the tell. KLSE held up Friday but ringgit faces fresh dollar pressure into Monday open."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady amid alt weakness." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$61094.93", marketCap: "$1.21T",  change1h: "N/A", change24h: "-1.04%", change7d: "N/A", insight: "BTC cracks $60K — lowest level since October 2024 pre-election. Next major support sits at $56K; reclaim of $65K needed to flip structure bullish." },
      { name: "Ethereum", symbol: "ETH", price: "$1581.66", marketCap: "$190B",  change1h: "N/A", change24h: "-3.20%", change7d: "N/A", insight: "ETH leaks below $1,600 with ETH/BTC ratio at multi-year lows. Holder base still 3x BTC's, but price action remains brutal absent a Fed pivot." },
      { name: "Solana",   symbol: "SOL", price: "$78.97", marketCap: "$38B",  change1h: "N/A", change24h: "-1.43%", change7d: "N/A", insight: "SOL holds $78 better than majors as memecoin volume props up network fees. Loss of $75 opens path to $68." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065", change24h: "-2.10%", note: "Neutral-bearish; BTC-correlated." },
      { name: "Pepe",      symbol: "PEPE", price: "—", change24h: "N/A", note: "Above 50/100 EMAs; mild bullish." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000063", change24h: "-1.80%", note: "Consolidating between EMA bands." },
      { name: "Bonk",      symbol: "BONK", price: "N/A", change24h: "N/A", note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A", change24h: "N/A", note: "Speculative SOL memecoin." }
    ],
    verdict: "Hard risk-off — BTC below $60K invalidates the bull structure that held since November 2024. Defend $56K or expect a flush to $52K wick. Altseason signal: dead until BTC reclaims $65K with conviction."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7383.74", change: "-2.64%" },
      { name: "Nasdaq",       value: "25709.43", change: "-4.18%" },
      { name: "Dow",          value: "50866.78", change: "-1.35%" },
      { name: "VIX",          value: "21.51", change: "+18.40%" },
      { name: "Russell 2000", value: "N/A",  change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—", change: "—", insight: "Tracks SPX -2.64% — broad-market index drawdown." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—", change: "—", insight: "Worst day since April 2025 as chip stocks crater." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—", change: "—", insight: "Mirror of VOO — same -2.64% bath." },
      { ticker: "VTI",  name: "Total Market",      price: "—", change: "—", insight: "Total-market exposure took the SPX hit plus small-cap drag." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—", change: "—", insight: "High-beta growth basket gets crushed in VIX spike." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—", change: "—", insight: "Chip ETF leads losses — SMCI -11%, sector wide rout." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "~$33.94", change: "-1.04%", insight: "Tracks BTC sub-$60K break; outflows likely accelerating." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—", change: "—", insight: "Tech leadership cracks alongside Nasdaq -4.18%." },
      { ticker: "GLD",  name: "Gold ETF",          price: "~$407.97", change: "-3.10%", insight: "Tracks gold's 3.1% drop — yield-driven profit taking." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$627.57", change: "+0.74%", notable: true,  insight: "Lone megacap green print — defensive AI ad bid." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$218.66", change: "+1.94%", notable: true,  insight: "Stunning relative strength despite SOXX rout — buyers defended $215." },
      { ticker: "TSLA",  name: "Tesla",         price: "$418.45", change: "-1.24%", notable: false, insight: "Held up better than peers; key $400 support intact." },
      { ticker: "AAPL",  name: "Apple",         price: "—",       change: "—",      notable: false, insight: "Megacap defensive — historically less volatile in VIX spikes." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$416.67", change: "-2.66%", notable: false, insight: "Tracked SPX losses; AI capex narrative under fresh scrutiny." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "—",      notable: false, insight: "Ad/AI dual exposure — watch for relative outperformance bid." },
      { ticker: "AMZN",  name: "Amazon",        price: "$246.03", change: "-2.10%", notable: false, insight: "AWS narrative key — cloud demand offsets retail risk-off." },
      { ticker: "NFLX",  name: "Netflix",       price: "$82.18",  change: "-3.40%", notable: false, insight: "Worst losing streak in four years — testing major support." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "—",      notable: false, insight: "Semis bloodbath — AMD likely sympathy victim to SMCI rout." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "—",      notable: false, insight: "AI/defense premium tested in broad risk-off de-rating." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",      notable: false, insight: "Cybersecurity defensives — should outperform in tech rout." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "—",      notable: false, insight: "High-beta to BTC — sub-$60K break pressures volumes." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "Sharp -",notable: true,  insight: "Shorts targeting MSTR as BTC bloodbath exposes $11.2B paper loss." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",      notable: false, insight: "Ad-tech high-flyer vulnerable in growth de-rating." },
      { ticker: "SMCI",  name: "Super Micro",   price: "—",       change: "-11.22%",notable: true,  insight: "Crushed -11% on yields surge + jobs print — AI capex jitters." }
    ],
    trending: [
      { ticker: "SMCI", change: "-11.22%" },
      { ticker: "NFLX", change: "-8.70%" },
      { ticker: "MSTR", change: "Sharp drop" },
      { ticker: "NVDA", change: "+1.94%" },
      { ticker: "META", change: "+0.74%" }
    ],
    verdict: "AI trade fractures from within — SMCI -11% and Nasdaq -4.18% mean the GPU capex narrative is being repriced. Rotation favors defensive megacaps (META, MSFT-grade), cash, and short-duration Treasuries; avoid leveraged AI plays and BTC-proxies (MSTR, COIN). Buyable dip needs VIX cooling below 18 and 10Y back under 4.40%."
  },

  malaysia: {
    klci:   { value: "1693.43", change: "+0.60%", context: "KLCI held near 1,700 Friday on bargain-hunting despite regional weakness. Monday faces US risk-off spillover — watch 1,680 support." },
    usdmyr: { value: "4.0280", change: "+0.08%", signal: "Ringgit pressured by DXY strength move." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "10.80", change: "Fri close +1.9%", insight: "Strongest bank Friday on stable OPR + dividend yield bid." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "7.39",  change: "Fri close +0.5%", insight: "Regional banking exposure; ASEAN cycle still supportive." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",   price: "—",     change: "Fri close",      insight: "Defensive retail bank — likely outperformer in risk-off Monday." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",      price: "—",     change: "Fri close",      insight: "Mid-cap bank with rate-sensitive earnings profile." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",        price: "—",     change: "Fri close",      insight: "Utility — data-center power demand remains structural tailwind." },
      { ticker: "INARI",  name: "Inari (0138.KL)",         price: "2.25",  change: "Fri close -3.0%", insight: "Sold off Friday — semi cycle wobble; NVDA strength not enough to offset SOXX rout." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",        price: "—",     change: "Fri close",      insight: "Regional telco — defensive cash flow into uncertain Monday." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)",price: "—",     change: "Fri close",      insight: "Healthcare defensive — typical haven during VIX spikes." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",          price: "—",     change: "Fri close",      insight: "Digital-services concession — government contract moat." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",         price: "—",     change: "Fri close",      insight: "5G monetization story — yield support in defensive rotation." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No major IPO catalysts surfaced in Friday's Bursa news flow." }
    ],
    verdict: "Ringgit at 4.03 stays inside the comfort zone but DXY firmness caps upside. Maybank was Friday's standout — defensive yield play that should remain bid on Monday. Bursa likely opens soft on US spillover; banks and utilities outperform, tech-linked names (Inari) face more downside."
  },

  news: [
    { headline: "Bitcoin cracks $60,000, sinking to lowest level since October 2024",         source: "CNBC",            time: "8h ago",  sentiment: "BEARISH", meaning: "BTC bull structure broken; crypto risk-off into weekend." },
    { headline: "Nasdaq falls 4% — worst day since April 2025 as traders flee chip stocks",   source: "CNBC",            time: "10h ago", sentiment: "BEARISH", meaning: "AI/semi capex narrative repriced; SOXX leads broad selloff." },
    { headline: "Strategy (MSTR) plummets as Bitcoin sinks below $60K, shorts pile in",       source: "Barchart",        time: "9h ago",  sentiment: "BEARISH", meaning: "BTC-proxy unwind; $11.2B paper loss exposes treasury risk." },
    { headline: "Gold sinks 3.1% on strong US jobs print, weekly decline locked in",          source: "FXStreet",        time: "7h ago",  sentiment: "BEARISH", meaning: "Yield surge triggers profit-taking; not safe-haven bid." },
    { headline: "FBM KLCI up 0.6% to 1,693.43 on Friday bargain-hunting",                     source: "The Edge",        time: "14h ago", sentiment: "BULLISH", meaning: "Local resilience; banks led continued bargain hunting." },
    { headline: "Bank Negara launches Digital Asset Innovation Hub for ringgit stablecoins",   source: "Cointelegraph",   time: "12h ago", sentiment: "BULLISH", meaning: "MYR-stablecoin pilots open new cross-border settlement rails." },
    { headline: "10Y Treasury yield surges to 4.54% on hot payrolls, dollar firms",            source: "TradingEconomics",time: "8h ago",  sentiment: "BEARISH", meaning: "Rate cut hopes pushed out; risk assets repriced lower." },
    { headline: "Bursa Malaysia ends higher on bargain-hunting despite regional weakness",    source: "FMT",             time: "13h ago", sentiment: "BULLISH", meaning: "KLSE decoupled Friday but Monday open faces US spillover." }
  ],

  goldSummary: {
    "Price":  { value: "$4365.30", change: "-3.10%", note: "Sharp drop on hot US jobs print." },
    "Open":   { value: "$4480.79", change: "", note: "Prior session close as today's open." },
    "High":   { value: "$4481.51", change: "", note: "Day high" },
    "Low":    { value: "$4313.84", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4704.59" },
      { label: "R2",    value: "$4593.05" },
      { label: "R1",    value: "$4536.92" },
      { label: "Pivot", value: "$4425.38" },
      { label: "S1",    value: "$4369.25" },
      { label: "S2",    value: "$4257.71" },
      { label: "S3",    value: "$4201.58" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4593.05" },
      { label: "R2",    value: "$4529.00" },
      { label: "R1",    value: "$4489.43" },
      { label: "Pivot", value: "$4425.38" },
      { label: "S1",    value: "$4361.33" },
      { label: "S2",    value: "$4321.76" },
      { label: "S3",    value: "$4257.71" }
    ],
    camarilla: [
      { label: "R4", value: "$4573.01" },
      { label: "R3", value: "$4526.90" },
      { label: "R2", value: "$4511.53" },
      { label: "R1", value: "$4496.16" },
      { label: "S1", value: "$4465.42" },
      { label: "S2", value: "$4450.05" },
      { label: "S3", value: "$4434.68" },
      { label: "S4", value: "$4388.57" }
    ],
    note: "Gold at $4,365 trades below classic pivot $4,425 — bearish bias; reclaim $4,425 needed for upside continuation."
  }
};
