window.CRUCIX_DATA = {
  generated: "Sat, 18 Apr 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on tone as US indices notch third record close on Iran de-escalation.",

  macro: {
    dxy:      { value: "98.10",    change: "-0.18%", signal: "Dollar soft; supports gold and EM FX." },
    gold:     { value: "$4,831.98", change: "+0.50%", signal: "Gold firm near all-time high zone." },
    oil:      { value: "$91.71",   change: "+0.46%", signal: "Crude steady on Hormuz reopening." },
    silver:   { value: "$80.59",   change: "+1.20%", signal: "Silver outperforming; industrial demand strong." },
    yield10y: { value: "4.27%",    change: "-1bps",  signal: "Yields easing; tailwind for equities." },
    vix:      { value: "17.48",    change: "-2.56%", signal: "Volatility compressing; risk appetite returns." },
    usdmyr:   { value: "4.02", change: "-0.10%", signal: "Ringgit firm on weak dollar bias." },
    sp500:    { value: "7,126.06", change: "+1.20%", signal: "Third straight record close; breadth strong." },
    verdict: "Soft DXY, easing yields, and sub-18 VIX form a clean risk-on backdrop. Gold at record levels confirms debasement trade still live alongside equities. Crypto and KLSE both benefit — Monday open for Bursa leans constructive."
  },

  crypto: {
    dominance: { value: "57.4%", change: "+0.20%", signal: "BTC dominance elevated; alts lagging still." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$76,081.80", marketCap: "$1.51T", change1h: "N/A", change24h: "+1.80%", change7d: "N/A", insight: "BTC reclaimed $75K on Iran ceasefire tailwind. $78K breakout opens path toward $85K resistance." },
      { name: "Ethereum", symbol: "ETH", price: "$2,409.01", marketCap: "$290B", change1h: "N/A", change24h: "+2.10%", change7d: "N/A", insight: "ETH targeting $2,400 reclaim; ETH/BTC ratio still depressed near 0.032. Break $2,500 needed for rotation." },
      { name: "Solana",   symbol: "SOL", price: "$88.43",    marketCap: "$50.9B", change1h: "N/A", change24h: "+0.80%", change7d: "N/A", insight: "SOL stalling below $90 resistance. Ecosystem activity healthy but needs BTC strength to break out." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.09387", change24h: "-1.14%", note: "Consolidating with BTC strength." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000365", change24h: "+10.00%", note: "Leading memecoin rally higher." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000615", change24h: "+6.32%", note: "Burn rate sharply up." },
      { name: "Bonk",      symbol: "BONK", price: "N/A", change24h: "N/A", note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A", change24h: "N/A", note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on across crypto with BTC reclaiming $75K and memecoins leading late. Hold $74K to keep uptrend intact; lose it and $70K retests. Altseason signal not yet confirmed — dominance must crack."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,126.06",  change: "+1.20%" },
      { name: "Nasdaq",       value: "24,468.48", change: "+1.52%" },
      { name: "Dow",          value: "49,447.43", change: "+1.79%" },
      { name: "VIX",          value: "17.48",     change: "-2.56%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$~712 est.", change: "+1.20%", insight: "Tracks S&P record close; trend intact." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$~489 est.", change: "+1.52%", insight: "Megacap tech powering Nasdaq highs." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$~712 est.", change: "+1.20%", insight: "Liquid proxy for risk-on equity bid." },
      { ticker: "VTI",  name: "Total Market",      price: "N/A",        change: "N/A",    insight: "Broad market breadth improving with cyclicals." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "N/A",        change: "N/A",    insight: "Risk appetite returning with sub-18 VIX." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "N/A",        change: "N/A",    insight: "Chips likely firm on AI capex narrative." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$~42 est.",  change: "+1.80%", insight: "Tracks BTC reclaim of $75K level." },
      { ticker: "XLK",  name: "Tech Sector",       price: "N/A",        change: "N/A",    insight: "Tech leadership intact; low-vol regime." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$~451 est.", change: "+0.50%", insight: "Gold at records; debasement trade live." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "N/A", change: "N/A", notable: false, insight: "Ad spend resilient; AI infra narrative intact." },
      { ticker: "NVDA",  name: "Nvidia",        price: "N/A", change: "N/A", notable: false, insight: "AI leader; riding Nasdaq record close." },
      { ticker: "TSLA",  name: "Tesla",         price: "N/A", change: "N/A", notable: false, insight: "Sentiment improving with risk-on tape." },
      { ticker: "AAPL",  name: "Apple",         price: "N/A", change: "N/A", notable: false, insight: "Megacap anchor; benefits from yield relief." },
      { ticker: "MSFT",  name: "Microsoft",     price: "N/A", change: "N/A", notable: false, insight: "Cloud/AI steady earnings compounder." },
      { ticker: "GOOGL", name: "Alphabet",      price: "N/A", change: "N/A", notable: false, insight: "Search/Cloud firm; AI monetization progressing." },
      { ticker: "AMZN",  name: "Amazon",        price: "N/A", change: "N/A", notable: false, insight: "AWS growth plus retail margin expansion." },
      { ticker: "NFLX",  name: "Netflix",       price: "N/A", change: "N/A", notable: false, insight: "Ad tier scaling; pricing power intact." },
      { ticker: "AMD",   name: "AMD",           price: "N/A", change: "N/A", notable: false, insight: "Second-source AI beneficiary; MI accelerators ramping." },
      { ticker: "PLTR",  name: "Palantir",      price: "N/A", change: "N/A", notable: false, insight: "AIP commercial traction driving multiple." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "N/A", change: "N/A", notable: false, insight: "Cyber demand steady; platform consolidation tailwind." },
      { ticker: "COIN",  name: "Coinbase",      price: "N/A", change: "N/A", notable: false, insight: "Levered to BTC reclaim of $75K." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "N/A", change: "N/A", notable: false, insight: "BTC proxy; benefits from $75K reclaim." },
      { ticker: "APP",   name: "AppLovin",      price: "N/A", change: "N/A", notable: false, insight: "Adtech momentum continuing with risk-on bid." },
      { ticker: "SMCI",  name: "Super Micro",   price: "N/A", change: "N/A", notable: false, insight: "AI server demand underwrites revenue trend." }
    ],
    trending: [
      { ticker: "ARB",  change: "+24.00%" },
      { ticker: "PEPE", change: "+10.00%" },
      { ticker: "SHIB", change: "+6.32%" },
      { ticker: "N/A",  change: "N/A" },
      { ticker: "N/A",  change: "N/A" }
    ],
    verdict: "AI trade still driving index highs; breadth broadening as Dow joins record club. Rotation favors cyclicals plus megacap tech over defensives. Own leaders (NVDA, META, MSFT); avoid low-quality shorts into momentum."
  },

  malaysia: {
    klci:   { value: "1,710.56", change: "+0.83%", context: "KLCI closed firm at 1,710.56 Friday. Monday open looks constructive with soft DXY and US record highs." },
    usdmyr: { value: "4.02", change: "-0.10%", signal: "Ringgit supported; DXY weakness helps." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM11.04", change: "N/A", insight: "Anchor bank; stable on firm OPR stance." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "N/A (Bursa closed)", change: "N/A", insight: "Regional ASEAN banking exposure intact." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "N/A (Bursa closed)", change: "N/A", insight: "Defensive retail bank; low NPL profile." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "N/A (Bursa closed)", change: "N/A", insight: "Mid-tier bank; dividend yield supportive." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "N/A (Bursa closed)", change: "N/A", insight: "Utility with data-center capex tailwind." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "N/A (Bursa closed)", change: "N/A", insight: "Semi cycle upside; rides NVDA/AI narrative." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "N/A (Bursa closed)", change: "N/A", insight: "Telco consolidation story still in play." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "N/A (Bursa closed)", change: "N/A", insight: "Defensive healthcare; regional volume steady." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "N/A (Bursa closed)", change: "N/A", insight: "Digital services growth; concession renewals key." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "N/A (Bursa closed)", change: "N/A", insight: "5G monetization and ARPU stabilization in focus." }
    ],
    ipos: [
      { name: "N/A", sector: "N/A", price: "N/A", listingDate: "N/A", status: "N/A", note: "N/A" }
    ],
    verdict: "Ringgit firm near 4.02 on soft dollar. Inari looks best-placed to track US semi momentum. Monday open biased higher following US record closes and Iran de-escalation."
  },

  news: [
    { headline: "S&P 500, Nasdaq, Dow close at fresh records on US-Iran diplomacy", source: "Yahoo Finance", time: "14h ago", sentiment: "BULLISH", meaning: "Risk-on across indices; breadth broadens, cyclicals join rally." },
    { headline: "Bitcoin reclaims $75K as Strait of Hormuz reopens", source: "CoinDesk", time: "10h ago", sentiment: "BULLISH", meaning: "Geopolitical relief lifts crypto; $78K breakout opens path higher." },
    { headline: "Arbitrum rallies 24% on Ethereum L2 tailwind and token unlock", source: "CoinMarketCap", time: "8h ago", sentiment: "BULLISH", meaning: "L2 momentum strong; ETH ecosystem rotation beginning to fire." },
    { headline: "Shiba Inu up 6% as BTC rally boosts memecoin sentiment", source: "CoinGape", time: "6h ago", sentiment: "BULLISH", meaning: "Whale accumulation and burn rate amplify speculative bid." },
    { headline: "Gold holds near $4,830 record as DXY softens", source: "Investing.com", time: "5h ago", sentiment: "BULLISH", meaning: "Debasement trade intact despite rising equity risk appetite." },
    { headline: "Malaysia unveils sandbox for ringgit stablecoins", source: "Cointelegraph", time: "12h ago", sentiment: "BULLISH", meaning: "Positions Malaysia as regional fintech hub; bank winners ahead." },
    { headline: "KLCI closes up 0.83% to 1,710.56 on Friday", source: "Yahoo Finance", time: "20h ago", sentiment: "BULLISH", meaning: "Steady bid into weekend; Monday open leans constructive." },
    { headline: "VIX falls below 18 as volatility regime resets", source: "CNBC", time: "15h ago", sentiment: "BULLISH", meaning: "Low-vol tape favors carry, momentum, growth leadership extends." }
  ],

  goldSummary: {
    "Price":  { value: "$4,831.98", change: "+0.50%", note: "Near record highs; DXY soft." },
    "Open":   { value: "$4,790.78", change: "", note: "" },
    "High":   { value: "$4,889.22", change: "", note: "Day high" },
    "Low":    { value: "$4,767.80", change: "", note: "Day low" },
    "52W High": { value: "$5,595.46", change: "", note: "" },
    "52W Low":  { value: "$3,120.52", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,985.48" },
      { label: "R2",    value: "$4,937.35" },
      { label: "R1",    value: "$4,864.06" },
      { label: "Pivot", value: "$4,815.93" },
      { label: "S1",    value: "$4,742.64" },
      { label: "S2",    value: "$4,694.51" },
      { label: "S3",    value: "$4,621.22" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,937.35" },
      { label: "R2",    value: "$4,890.97" },
      { label: "R1",    value: "$4,862.31" },
      { label: "Pivot", value: "$4,815.93" },
      { label: "S1",    value: "$4,769.55" },
      { label: "S2",    value: "$4,740.89" },
      { label: "S3",    value: "$4,694.51" }
    ],
    camarilla: [
      { label: "R4", value: "$4,857.56" },
      { label: "R3", value: "$4,824.17" },
      { label: "R2", value: "$4,813.04" },
      { label: "R1", value: "$4,801.91" },
      { label: "S1", value: "$4,779.65" },
      { label: "S2", value: "$4,768.52" },
      { label: "S3", value: "$4,757.39" },
      { label: "S4", value: "$4,724.00" }
    ],
    note: "Gold above classic pivot $4,815.93 = bullish bias; R1 $4,864 next resistance."
  }
};
