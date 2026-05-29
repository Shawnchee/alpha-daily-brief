window.CRUCIX_DATA = {
  generated: "Fri, 29 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off bleed: BTC tags six-week lows while equities print fresh highs on AI strength — divergence widening.",

  macro: {
    dxy:      { value: "99.05",   change: "-0.14%", signal: "Soft dollar; tailwind for EM and metals." },
    gold:     { value: "$4,536",  change: "-0.44%", signal: "Pullback after run; structural bid intact." },
    oil:      { value: "$92.98",  change: "-3.75%", signal: "WTI drops on demand concerns; bearish." },
    silver:   { value: "$75.78",  change: "-0.56%", signal: "Tracking gold lower; industrial demand soft." },
    yield10y: { value: "4.48%",   change: "-9bps",  signal: "Yields ease; supportive of duration assets." },
    vix:      { value: "15.32",   change: "-2.67%", signal: "Complacency reigns despite crypto weakness." },
    usdmyr:   { value: "4.05",    change: "-0.10%", signal: "Ringgit firmer on softer DXY backdrop." },
    sp500:    { value: "7,563.63", change: "+0.58%", signal: "All-time highs on Nvidia-led tech rally." },
    verdict: "DXY soft, yields easing, VIX subdued — classic risk-on cocktail for equities, yet crypto refuses to participate. Gold consolidates above $4,500 with structural demand intact. KLSE should catch a bid from softer ringgit and lower yields if Wall Street holds."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC weakness; alts likely punished harder." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$73,004",   marketCap: "$1.45T",  change1h: "N/A", change24h: "-1.2%", change7d: "N/A", insight: "Six-week lows tagged as analysts eye $72K capitulation zone before potential bounce. Two-month winning streak in jeopardy with month-end close below $75K signaling deeper unwind." },
      { name: "Ethereum", symbol: "ETH", price: "$2,060",    marketCap: "$248B",   change1h: "N/A", change24h: "-2.5%", change7d: "N/A", insight: "ETH crushed below $2,100 as risk-off bleeds across majors. Spot ETF flows have flipped negative; $1,950 next major support to defend." },
      { name: "Solana",   symbol: "SOL", price: "$86.03",    marketCap: "$42B",    change1h: "N/A", change24h: "+1.30%", change7d: "N/A", insight: "SOL outperforming majors with small green print on stablecoin and DeFi volume resilience. Holds key $80 zone; reclaim of $95 needed for trend reversal." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",     change24h: "-2.1%", note: "Bearish flip below 50-EMA." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000062",  change24h: "-1.8%", note: "Mild bullish; 200-EMA caps." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000063",  change24h: "-2.4%", note: "Consolidating between key EMAs." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",   note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",   note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-off in crypto despite equities ripping — clear sign of capital rotation out of digital assets. BTC $72K is the line in the sand; lose it and $68K opens. Altseason signals dead until BTC reclaims $80K and dominance peaks."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,563.63",  change: "+0.58%" },
      { name: "Nasdaq",       value: "26,917.47", change: "+0.91%" },
      { name: "Dow",          value: "50,668.97", change: "+0.05%" },
      { name: "VIX",          value: "15.32",     change: "-2.67%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—",       change: "—",       insight: "Tracks S&P at fresh ATHs; core long-term allocation." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—",       change: "—",       insight: "Tech-heavy benchmark riding AI-led record highs." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "—",       insight: "Most liquid S&P proxy trading near all-time highs." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",       insight: "Total US market exposure; broad rally participation." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",       insight: "High-beta innovation basket; correlates with crypto weakness." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "—",       insight: "Chip basket benefiting from Nvidia and SMCI strength." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$40.56",  change: "-1.2%",   insight: "Spot BTC ETF flows turned outflow as BTC retests support." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",       insight: "Tech sector SPDR riding mega-cap leadership higher." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$423.94", change: "-0.44%",  insight: "Profit-taking after parabolic run; structural bid below." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$607.38", change: "+0.38%",  notable: false, insight: "Ad spend resilient; AI capex narrative still tailwind." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$216.24", change: "+1.20%",  notable: true,  insight: "AI demand intact; Dell earnings reinforce capex cycle thesis." },
      { ticker: "TSLA",  name: "Tesla",         price: "$438.78", change: "+0.50%",  notable: false, insight: "Robotaxi narrative driving multiple expansion despite delivery softness." },
      { ticker: "AAPL",  name: "Apple",         price: "$310.85", change: "+0.82%",  notable: false, insight: "Services growth offsetting hardware sluggishness; AI roadmap watched." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",       change: "—",       notable: false, insight: "Azure AI growth remains the key driver for cloud sector leadership." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "—",       notable: false, insight: "Search resilience plus Gemini momentum keep megacap bid intact." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "—",       notable: false, insight: "AWS reacceleration and retail margins remain the bull thesis." },
      { ticker: "NFLX",  name: "Netflix",       price: "$88.60",  change: "-1.50%",  notable: false, insight: "Ad-tier ramp and password sharing crackdown driving subscriber economics." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "—",       notable: false, insight: "MI300 ramp story remains main bull case against Nvidia dominance." },
      { ticker: "PLTR",  name: "Palantir",      price: "$156.32", change: "+2.10%",  notable: true,  insight: "Government and commercial AI deals driving sustained re-rating." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",       notable: false, insight: "Cybersecurity demand robust; Falcon platform expansion continues." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "—",       notable: false, insight: "Pressured by BTC weakness; trading volumes the swing factor." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "—",       notable: false, insight: "Saylor's BTC treasury under scrutiny as crypto sells off." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",       notable: false, insight: "Ad-tech AI machine driving outsized growth versus peers." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$41.30",  change: "+10.69%", notable: true,  insight: "Surged on Dell's blowout AI server outlook; sector tailwind extended." }
    ],
    trending: [
      { ticker: "SMCI", change: "+10.69%" },
      { ticker: "PLTR", change: "+2.10%" },
      { ticker: "NVDA", change: "+1.20%" },
      { ticker: "AAPL", change: "+0.82%" },
      { ticker: "META", change: "+0.38%" }
    ],
    verdict: "AI trade roaring back with Dell-fueled SMCI breakout and Nvidia leadership intact. Rotation favoring semis and AI-infrastructure plays over consumer megacaps. Own NVDA/SMCI/PLTR baskets; avoid pure crypto-proxy names like MSTR while BTC bleeds."
  },

  malaysia: {
    klci:   { value: "1,684.93", change: "-0.83%", context: "KLCI slipped a third straight session toward two-week lows. Monday outlook neutral-bearish absent a Wall Street follow-through bid." },
    usdmyr: { value: "4.05",     change: "-0.10%", signal: "Ringgit firmer on softer DXY backdrop." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "—", change: "Fri close", insight: "OPR-stable backdrop keeps NIMs steady; dividend yield anchors the name." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "—", change: "Fri close", insight: "Regional banking franchise leveraged to ASEAN growth recovery." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—", change: "Fri close", insight: "Defensive retail bank with rock-solid asset quality and low NPLs." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—", change: "Fri close", insight: "Trading at discount to peers; capital strong and dividend visible." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—", change: "Fri close", insight: "Utility powering data center buildout and renewable transition capex." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—", change: "Fri close", insight: "Semi cycle and Nvidia-linked RF testing demand drive the thesis." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—", change: "Fri close", insight: "Regional telco consolidation story; CelcomDigi synergies in focus." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—", change: "Fri close", insight: "Pan-Asia hospital operator with structural medical tourism tailwind." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—", change: "Fri close", insight: "Digital government services monopoly with strong cash generation." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—", change: "Fri close", insight: "5G monetization and enterprise solutions the key growth lever." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No notable IPO action surfaced in this morning's search sweep." }
    ],
    verdict: "Ringgit firming below 4.10 cushions importers and lifts sentiment. Best risk-reward sits with Inari on semi cycle leverage and Tenaga on data center capex. Monday Bursa likely opens defensive but tracks any DXY weakness for relief."
  },

  news: [
    { headline: "Bitcoin slides further; two-month winning streak in jeopardy as May ends red", source: "CoinDesk", time: "2h ago", sentiment: "BEARISH", meaning: "Risk-off rotation; BTC capitulation risk into month-end close." },
    { headline: "S&P 500 and Nasdaq close at new records on tech rally", source: "CNBC", time: "12h ago", sentiment: "BULLISH", meaning: "AI leadership intact; equity strength decoupled from crypto." },
    { headline: "Super Micro surges 10.69% as Dell's AI server outlook electrifies sector", source: "WSJ", time: "14h ago", sentiment: "BULLISH", meaning: "AI infrastructure capex cycle confirmed; semi tailwind extended." },
    { headline: "Michael Saylor's Strategy preparing to sell as BTC slides", source: "Yahoo Finance", time: "6h ago", sentiment: "BEARISH", meaning: "MSTR forced selling fears amplify crypto downside risk." },
    { headline: "Oil, gold, silver, copper all fall together as 10Y yield drives moves", source: "BeInCrypto", time: "8h ago", sentiment: "WATCH", meaning: "Commodity complex correlated to rates; macro repricing underway." },
    { headline: "Bank Negara Malaysia launches stablecoin pilot programmes", source: "The Edge", time: "1d ago", sentiment: "BULLISH", meaning: "Regulatory clarity attracts fintech investment to Malaysia." },
    { headline: "KLCI slips to two-week low on third straight session of losses", source: "The Star", time: "16h ago", sentiment: "BEARISH", meaning: "Foreign outflows persist; Monday rebound depends on DXY." },
    { headline: "Bitcoin traders increasingly convinced price falls below $70K by end of May", source: "Decrypt", time: "5h ago", sentiment: "BEARISH", meaning: "Positioning skewed bearish; $70K becomes key psychological line." }
  ],

  goldSummary: {
    "Price":    { value: "$4,536.20", change: "-0.44%", note: "Pullback after parabolic monthly run." },
    "Open":     { value: "$4,495.83", change: "",       note: "" },
    "High":     { value: "$4,526.11", change: "",       note: "Day high" },
    "Low":      { value: "$4,489.16", change: "",       note: "Day low" },
    "52W High": { value: "N/A",       change: "",       note: "" },
    "52W Low":  { value: "N/A",       change: "",       note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,568.81" },
      { label: "R2",    value: "$4,547.46" },
      { label: "R1",    value: "$4,531.86" },
      { label: "Pivot", value: "$4,510.51" },
      { label: "S1",    value: "$4,494.91" },
      { label: "S2",    value: "$4,473.56" },
      { label: "S3",    value: "$4,457.96" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,547.46" },
      { label: "R2",    value: "$4,533.35" },
      { label: "R1",    value: "$4,524.62" },
      { label: "Pivot", value: "$4,510.51" },
      { label: "S1",    value: "$4,496.40" },
      { label: "S2",    value: "$4,487.67" },
      { label: "S3",    value: "$4,473.56" }
    ],
    camarilla: [
      { label: "R4", value: "$4,536.57" },
      { label: "R3", value: "$4,526.41" },
      { label: "R2", value: "$4,523.02" },
      { label: "R1", value: "$4,519.64" },
      { label: "S1", value: "$4,512.86" },
      { label: "S2", value: "$4,509.48" },
      { label: "S3", value: "$4,506.09" },
      { label: "S4", value: "$4,495.93" }
    ],
    note: "Gold trades above the classic pivot at $4,510 — bias remains constructive while $4,495 holds as nearest support."
  }
};
