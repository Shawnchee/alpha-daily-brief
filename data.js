window.CRUCIX_DATA = {
  generated: "Thu, 14 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Hot PPI print breaks BTC below $80K while AI-led indices keep grinding fresh records.",

  macro: {
    dxy:      { value: "98.40",   change: "+0.22%", signal: "Dollar firm; sticky inflation delays Fed cuts." },
    gold:     { value: "$4,702.59", change: "-0.09%", signal: "Holding near record; real yields cap upside." },
    oil:      { value: "$100.99",  change: "-0.03%", signal: "WTI hovering triple digits; Iran risk premium." },
    silver:   { value: "$88.33",   change: "-1.16%", signal: "Profit-taking after sharp industrial-led rally." },
    yield10y: { value: "4.46%",   change: "-1bps",  signal: "Off cycle high; PPI keeps yields elevated." },
    vix:      { value: "17.27",   change: "-3.36%", signal: "Vol bid easing; complacency creeping back in." },
    usdmyr:   { value: "3.9280",  change: "-0.10%", signal: "Ringgit firmer on softer DXY pulse." },
    sp500:    { value: "7,501.24", change: "+0.77%", signal: "Fresh record; AI capex story re-accelerating." },
    verdict: "DXY firm and 10y near 4.46% argue for defensive crypto positioning, yet equities shrug off hot PPI as the AI trade roars. Gold holds $4,700 as a hedge against sticky inflation and Iran tension. KLSE benefits from softer USD/MYR but imported energy costs weigh on margins."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance softening on alt rotation." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$79,641", marketCap: "$1.58T", change1h: "N/A", change24h: "-1.55%", change7d: "N/A", insight: "BTC sliced below $80K on hotter PPI, with $78.8K acting as the weekly pivot. CLARITY Act vote and $550M shorts stacked overhead set up a potential squeeze if bulls reclaim $82K." },
      { name: "Ethereum", symbol: "ETH", price: "$2,267",  marketCap: "$273B",  change1h: "N/A", change24h: "-1.20%", change7d: "N/A", insight: "ETH stuck below $2.3K while staking flows stay positive. A reclaim of $2.4K is needed before any rotation from BTC dominance accelerates." },
      { name: "Solana",   symbol: "SOL", price: "$92.59",  marketCap: "$45B",   change1h: "N/A", change24h: "+3.00%", change7d: "+5.00%", insight: "SOL outperforming as ETF speculation and rising DEX volumes drive flows. $95 is the key gate; reclaim opens path to $110." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1149",     change24h: "+2.63%", note: "Holding range; retail bid returning." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.000004179", change24h: "-1.00%", note: "Consolidating; awaiting BTC reclaim." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.000006245", change24h: "-4.00%", note: "Burn rate weak; flows fading." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-off in BTC as PPI shock and Fed-cut repricing weigh, but the CLARITY Act advancing is a structural tailwind. Key level is $78.8K — lose it and $74K opens; reclaim $82K and shorts liquidate. SOL's relative strength hints at selective altseason rather than broad-based mania."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,501.24",  change: "+0.77%" },
      { name: "Nasdaq",       value: "26,635.22", change: "+0.88%" },
      { name: "Dow",          value: "50,063.46", change: "+0.75%" },
      { name: "VIX",          value: "17.27",     change: "-3.36%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$682.41", change: "+0.60%", insight: "Tracking the S&P record; broad large-cap core exposure remains the default sleeve." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$720.27", change: "+0.88%", insight: "Mega-cap tech leads; AI capex story keeps QQQ extended above prior highs." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "—",      insight: "Mirrors VOO at +0.77%; preferred by active traders for option liquidity." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Total-market exposure; trailing QQQ as small caps lag the mega-cap leaders." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",      insight: "Speculative growth basket; rallies hard when long-duration risk-on returns." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$528.29", change: "+2.38%", insight: "Chips ripping as Nvidia and AMD lead the AI capex re-rating cycle." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$44.25",  change: "-1.55%", insight: "Spot BTC ETF tracking lower; flows turn cautious below $80K." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Cap-weighted tech sector basket; rides MSFT/NVDA/AAPL leadership." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$439.49", change: "-0.09%", insight: "Gold proxy holding near records; insurance against sticky inflation." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$406.00", change: "+1.20%", notable: false, insight: "AI ad-targeting tailwinds offsetting Reality Labs drag; capex remains the watch item." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$225.83", change: "+2.29%", notable: true,  insight: "Datacenter demand still uncapped; hyperscaler orders extending visibility into 2027." },
      { ticker: "TSLA",  name: "Tesla",         price: "$445.27", change: "+2.73%", notable: true,  insight: "Robotaxi narrative and energy storage growth driving the re-rating; deliveries the swing factor." },
      { ticker: "AAPL",  name: "Apple",         price: "$300.25", change: "+0.50%", notable: false, insight: "Services margin expansion and AI features cycle propping up the valuation." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",       change: "—",      notable: false, insight: "Azure AI workloads accelerating; Copilot monetization is the next leg." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "—",      notable: false, insight: "Gemini gaining share and Search ad resilience supporting the AI investment case." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "—",      notable: false, insight: "AWS reacceleration and retail margin expansion form the dual driver." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",       change: "+2.40%", notable: false, insight: "Ad-tier scaling and the live-sports pivot extending the engagement moat." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "—",      notable: false, insight: "MI400 ramp and CPU server share gains keep the AI-second story alive." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "—",      notable: false, insight: "Commercial AIP bookings continue to outpace street; valuation remains stretched." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",      notable: false, insight: "Cyber tailwinds intact; Falcon Flex deals expanding ARR durability." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "—",      notable: false, insight: "Direct beta to BTC pressure today; CLARITY Act vote is the key catalyst." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$177.26", change: "-3.88%", notable: true,  insight: "Bitcoin proxy hit as BTC breaks $80K; financing strategy under scrutiny post Q1 loss." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",      notable: false, insight: "Ad-tech ML stack still leading mobile monetization metrics." },
      { ticker: "SMCI",  name: "Super Micro",   price: "—",       change: "—",      notable: false, insight: "AI server cycle continues; gross margin recovery is the swing factor." }
    ],
    trending: [
      { ticker: "MSTR", change: "-3.88%" },
      { ticker: "TSLA", change: "+2.73%" },
      { ticker: "NFLX", change: "+2.40%" },
      { ticker: "SOXX", change: "+2.38%" },
      { ticker: "NVDA", change: "+2.29%" }
    ],
    verdict: "AI trade is roaring back with NVDA, TSLA and SOXX leading and Dow reclaiming 50K. Crypto-linked names like MSTR and COIN are the soft spot as BTC slips. Own AI infra and mega-cap tech; avoid bitcoin proxies until $82K reclaims."
  },

  malaysia: {
    klci:   { value: "1,708.65", change: "-0.50%", context: "KLCI ranged 1,704–1,732 as foreign selling resumed on a stronger USD pulse. Friday/Monday outlook hinges on whether the index holds 1,700 — a break opens 1,680." },
    usdmyr: { value: "3.9280", change: "-0.10%", signal: "Ringgit firmer; softer DXY helps imports." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "—", change: "—", insight: "OPR steady at 3.00% keeps NIMs intact; defensive yield play with regional ASEAN exposure." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "—", change: "—", insight: "Regional banking franchise benefiting from Indonesia loan growth and tight cost discipline." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",   price: "—", change: "—", insight: "Defensive bank with the cleanest asset quality among Big-3 Malaysian lenders." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",      price: "—", change: "—", insight: "Mid-cap bank with improving ROE; capital position remains the strongest in sector." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",        price: "—", change: "—", insight: "Data centre power demand is the structural tailwind; IBR period 4 review the next catalyst." },
      { ticker: "INARI",  name: "Inari (0138.KL)",         price: "—", change: "—", insight: "Semi cycle re-accelerating with NVDA strength; RF testing volumes for iPhone 17 ramp drive near-term earnings." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",        price: "—", change: "—", insight: "Telco consolidation post CelcomDigi keeps focus on dividends and tower monetisation." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—", change: "—", insight: "Defensive healthcare with medical tourism rebound; Turkey lira drag stabilising." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",          price: "—", change: "—", insight: "Digital services concession renewals plus Zetrix blockchain optionality drive earnings visibility." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",         price: "—", change: "—", insight: "5G DNB wholesale model stabilising; enterprise segment is the growth lever." }
    ],
    ipos: [
      { name: "Bursa pipeline 2026", sector: "Mixed", price: "—", listingDate: "TBD", status: "Upcoming", note: "Malaysia IPO market remains active in 2026 with tech and consumer listings dominating the pipeline. Watch for sponsor announcements ahead of mid-year." }
    ],
    verdict: "Ringgit at 3.93 is a tailwind for imports and consumer plays but a slight headwind for exporters. Inari remains the best AI-adjacent semi name as NVDA capex feeds the supply chain. KLCI Friday outlook neutral — defend 1,700 or risk a slide to 1,680."
  },

  news: [
    { headline: "Bitcoin breaks below $80K as PPI surges to 6%",      source: "CoinDesk",         time: "4h ago",  sentiment: "BEARISH", meaning: "Sticky inflation delays Fed cuts; crypto risk-off intensifies." },
    { headline: "CLARITY Act heads to Senate Banking markup vote",     source: "CCN",              time: "6h ago",  sentiment: "BULLISH", meaning: "US crypto regulatory clarity a structural tailwind for digital assets." },
    { headline: "Dow retakes 50,000 as AI trade roars back",           source: "Yahoo Finance",    time: "8h ago",  sentiment: "BULLISH", meaning: "Mega-cap AI leadership extends index records to fresh highs." },
    { headline: "MSTR slides 3.88% after $12.5B Q1 loss disclosure",   source: "Traders Union",    time: "10h ago", sentiment: "BEARISH", meaning: "Bitcoin proxy hit as financing model raises balance-sheet questions." },
    { headline: "10y Treasury yield eases from cycle highs at 4.46%",  source: "Trading Economics", time: "5h ago",  sentiment: "NEUTRAL", meaning: "Yields stabilise but stay elevated; duration sensitive sectors capped." },
    { headline: "Gold holds near record $4,700 on Iran tension",       source: "Investing.com",    time: "7h ago",  sentiment: "BULLISH", meaning: "Geopolitical risk and inflation hedge demand keep bullion bid." },
    { headline: "Ringgit firms to 3.93 versus dollar",                 source: "Bloomberg",        time: "3h ago",  sentiment: "BULLISH", meaning: "MYR strength eases imported inflation and supports consumer plays." },
    { headline: "Citigroup boosts Strategy stake by $41.2M",           source: "Crypto Briefing",  time: "12h ago", sentiment: "BULLISH", meaning: "Institutional bitcoin exposure rising despite price weakness." }
  ],

  goldSummary: {
    "Price":    { value: "$4,702.59", change: "-0.09%", note: "Holding near record; consolidating digestion." },
    "Open":     { value: "$4,700.00", change: "", note: "Estimated open" },
    "High":     { value: "$4,720.00", change: "", note: "Day high" },
    "Low":      { value: "$4,680.00", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,761.72" },
      { label: "R2",    value: "$4,740.86" },
      { label: "R1",    value: "$4,721.73" },
      { label: "Pivot", value: "$4,700.86" },
      { label: "S1",    value: "$4,681.73" },
      { label: "S2",    value: "$4,660.86" },
      { label: "S3",    value: "$4,641.72" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,740.86" },
      { label: "R2",    value: "$4,725.58" },
      { label: "R1",    value: "$4,716.14" },
      { label: "Pivot", value: "$4,700.86" },
      { label: "S1",    value: "$4,685.58" },
      { label: "S2",    value: "$4,676.14" },
      { label: "S3",    value: "$4,660.86" }
    ],
    camarilla: [
      { label: "R4", value: "$4,724.59" },
      { label: "R3", value: "$4,713.59" },
      { label: "R2", value: "$4,709.92" },
      { label: "R1", value: "$4,706.26" },
      { label: "S1", value: "$4,698.92" },
      { label: "S2", value: "$4,695.26" },
      { label: "S3", value: "$4,691.59" },
      { label: "S4", value: "$4,680.59" }
    ],
    note: "Gold trades marginally above the $4,700.86 classic pivot — bullish bias while above, but reclaim of $4,721 R1 needed to confirm momentum."
  }
};
