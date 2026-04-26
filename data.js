window.CRUCIX_DATA = {
  generated: "Sun, 26 Apr 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on tone holds as BTC stalks $80K and US indices print fresh highs into Asia open.",

  macro: {
    dxy:      { value: "98.51", change: "-0.02%", signal: "Soft dollar supports gold and EM FX." },
    gold:     { value: "$4,709.25", change: "+0.31%", signal: "New highs; hedge demand still intact." },
    oil:      { value: "$94.40", change: "-1.51%", signal: "Iran de-escalation hopes pressuring crude." },
    silver:   { value: "$56.80", change: "+0.45%", signal: "Riding gold tailwind and industrial bid." },
    yield10y: { value: "4.31%", change: "-1bps", signal: "Yields drift lower; risk assets benefit." },
    vix:      { value: "18.92", change: "-2.97%", signal: "Vol bleed signals complacent positioning." },
    usdmyr:   { value: "3.9525", change: "+0.06%", signal: "Ringgit firm; sub-4.00 zone holding." },
    sp500:    { value: "7,137.90", change: "+1.05%", signal: "Record close; breadth and AI leading." },
    verdict: "Soft DXY and easing yields with VIX under 20 keep risk assets bid, even as gold prints fresh highs on hedge demand. Crypto inherits the tape; mega-cap tech continues to absorb flows. KLSE should benefit from a stable ringgit and constructive Wall Street handoff."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leadership intact above $77K." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$78,000", marketCap: "$1.55T",  change1h: "N/A", change24h: "+1.20%", change7d: "N/A", insight: "ETF inflows logged eight straight days totaling $2.1B, reclaiming $78K. $80K is the line in the sand for a structural breakout." },
      { name: "Ethereum", symbol: "ETH", price: "$2,322.46", marketCap: "$280B", change1h: "N/A", change24h: "+0.85%", change7d: "N/A", insight: "ETH lagging BTC but holding $2,300 reclaim. Needs $2,500 break to confirm altcoin rotation." },
      { name: "Solana",   symbol: "SOL", price: "$85.73", marketCap: "$41B",     change1h: "N/A", change24h: "+1.10%", change7d: "N/A", insight: "SOL/ETH ratio firm; ecosystem TVL stable. $90 reclaim opens path to $100." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.0939",     change24h: "-1.14%",  note: "Tracking BTC; weak relative bid." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000365", change24h: "-10.00%", note: "Sharp drawdown; speculative flush." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000621", change24h: "-0.80%",  note: "Range-bound; awaiting BTC trigger." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",     note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",     note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on but selective: BTC leads, ETH and SOL participate modestly, memecoins fading. $80K BTC remains the key level; clear break unlocks altseason. Below $75K invalidates the bullish leg."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,137.90",  change: "+1.05%" },
      { name: "Nasdaq",       value: "24,657.57", change: "+1.64%" },
      { name: "Dow",          value: "49,490.03", change: "+0.69%" },
      { name: "VIX",          value: "18.92",     change: "-2.97%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$656.42", change: "Fri close", insight: "Tracking S&P record close; core holding remains in uptrend." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$663.46", change: "Fri close", insight: "AI and mega-cap tech driving leadership above prior highs." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "Fri close", insight: "Mirrors VOO/S&P; broad-market proxy at fresh highs." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "Fri close", insight: "Total market exposure; benefits from breadth improvement." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "Fri close", insight: "High-beta growth tracks Nasdaq strength; speculative tail." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$460.94", change: "Fri close", insight: "Semis still a leadership group despite NVDA pullback." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$43.89",  change: "+1.20%",    insight: "Eight-day inflow streak underpins price; institutional bid intact." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "Fri close", insight: "Tech sector at highs; software and semis leading." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$440.12", change: "+0.31%",    insight: "Tracking spot gold to fresh records on hedge demand." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$659.15", change: "Fri close -2.31%", notable: true,  insight: "Profit-taking after recent run; ad-spend cycle still constructive." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$199.64", change: "Fri close -1.41%", notable: true,  insight: "Pause after rally; AI capex narrative remains the leadership trade." },
      { ticker: "TSLA",  name: "Tesla",         price: "$373.72", change: "Fri close -3.56%", notable: true,  insight: "Sharp drop on demand worries; below 50DMA invites further weakness." },
      { ticker: "AAPL",  name: "Apple",         price: "$273.43", change: "Fri close +0.10%", notable: false, insight: "Quiet drift; awaiting services growth and iPhone refresh data." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$416.97", change: "Fri close",        notable: false, insight: "Azure and Copilot remain the structural growth pillars." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$337.06", change: "Fri close",        notable: false, insight: "Search resilience plus Gemini momentum support multiple." },
      { ticker: "AMZN",  name: "Amazon",        price: "$252.05", change: "Fri close",        notable: false, insight: "AWS reacceleration and retail margins underpin the bull case." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",       change: "Fri close",        notable: false, insight: "Ad-tier and live-sports flywheel continues to drive ARPU." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "Fri close",        notable: false, insight: "MI-class GPU traction is the swing factor versus NVDA dominance." },
      { ticker: "PLTR",  name: "Palantir",      price: "$142.39", change: "Fri close",        notable: true,  insight: "Government and AIP commercial wins keep multiple stretched but bid." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "Fri close",        notable: false, insight: "Cyber spend resilient; Falcon platform consolidation continues." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "Fri close",        notable: false, insight: "Levered to BTC trend and ETF flows; $80K break is bullish." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "Fri close",        notable: false, insight: "BTC treasury at 815K coins; pure proxy on Bitcoin price." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "Fri close",        notable: false, insight: "Ad-tech leadership with Axon engine still gaining share." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$29.20",  change: "Fri close",        notable: true,  insight: "Sharp derate from prior highs; AI server demand vs margin pressure." }
    ],
    trending: [
      { ticker: "TSLA", change: "-3.56%" },
      { ticker: "META", change: "-2.31%" },
      { ticker: "NVDA", change: "-1.41%" },
      { ticker: "AAPL", change: "+0.10%" },
      { ticker: "PLTR", change: "N/A" }
    ],
    verdict: "AI and mega-cap tech still anchor the rally, but Friday saw rotation out of NVDA/TSLA/META into broader tape. Own the QQQ/SOXX core; trim crowded names into strength. Avoid pure-play high-beta speculatives until vol confirms direction."
  },

  malaysia: {
    klci:   { value: "1,720.34", change: "-0.08%", context: "KLCI eased 1.36 pts on Friday; tech and transport offset healthcare weakness. Constructive Wall Street handoff supports a firmer Monday open." },
    usdmyr: { value: "3.9525", change: "+0.06%", signal: "Ringgit firm under 4.00; supportive backdrop." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM11.16", change: "Fri close", insight: "Stable OPR backdrop and dividend yield keep the largest cap defensive." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "—",       change: "Fri close", insight: "Regional banking franchise leveraged to ASEAN growth and ringgit strength." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",     price: "—",       change: "Fri close", insight: "Defensive bank with sticky deposit base; low-beta KLCI anchor." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",        price: "—",       change: "Fri close", insight: "Mid-cap bank with attractive valuation and dividend support." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",          price: "—",       change: "Fri close", insight: "Utility leveraged to data-centre demand growth and rate base expansion." },
      { ticker: "INARI",  name: "Inari (0138.KL)",           price: "RM1.28",  change: "Fri close", insight: "Semi cycle proxy; tracks NVDA and global RF demand into FY27 reset." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",          price: "—",       change: "Fri close", insight: "Telco consolidation and edotco monetisation are the catalysts to watch." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)",  price: "—",       change: "Fri close", insight: "Defensive healthcare growth with regional hospital network exposure." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",            price: "—",       change: "Fri close", insight: "Digital government services with recurring concession revenue." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",           price: "—",       change: "Fri close", insight: "5G rollout and enterprise services support stable cash generation." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "Upcoming", note: "No notable new listing flagged in weekend Bursa news. Pipeline remains healthy heading into Q2." }
    ],
    verdict: "Ringgit holding sub-3.96 is the macro tailwind for KLCI Monday. Inari is the cleanest beta to the AI semi cycle; Maybank stays the defensive anchor. Constructive US close should lift Bursa open, with banks and tech as preferred exposures."
  },

  news: [
    { headline: "Bitcoin reclaims $78K as ETFs log $2.1B inflow streak", source: "Yahoo Finance",  time: "6h ago",  sentiment: "BULLISH",  meaning: "Institutional bid persistent; $80K resistance now the swing level." },
    { headline: "S&P 500 and Nasdaq close at fresh records, Intel-led rally", source: "CNBC",     time: "2d ago",  sentiment: "BULLISH",  meaning: "Breadth improving with semis leadership; risk-on into weekend." },
    { headline: "VIX falls to 18.92 as US-Iran de-escalation hopes lift sentiment", source: "Reuters", time: "2d ago", sentiment: "BULLISH", meaning: "Lower vol regime supports continued multiple expansion." },
    { headline: "Gold prints fresh record above $4,700 on hedge demand", source: "Bloomberg",     time: "1d ago",  sentiment: "BULLISH",  meaning: "Bullish gold not contradicting risk-on; debasement trade alive." },
    { headline: "USD/MYR holds near 3.95 as dollar softens broadly", source: "Bank Negara",       time: "1d ago",  sentiment: "BULLISH",  meaning: "Ringgit strength supports KLSE foreign inflows and consumption." },
    { headline: "Tesla slides 3.56% on demand worries; Meta off 2.3%", source: "CNBC",            time: "2d ago",  sentiment: "BEARISH",  meaning: "Crowded mega-cap names seeing profit-taking ahead of earnings." },
    { headline: "Morgan Stanley enters spot Bitcoin trade for clients", source: "OpenPR",         time: "1d ago",  sentiment: "BULLISH",  meaning: "Wirehouse adoption broadens institutional crypto distribution channel." },
    { headline: "KLCI eases 0.08% to 1,720; tech offsets healthcare drag", source: "Bernama",     time: "2d ago",  sentiment: "NEUTRAL",  meaning: "Bursa range-bound; Monday open should track Wall Street higher." }
  ],

  goldSummary: {
    "Price":  { value: "$4,709.25", change: "+0.31%", note: "Fresh record close; trend intact." },
    "Open":   { value: "$4,693.89", change: "", note: "" },
    "High":   { value: "$4,740.58", change: "", note: "Day high" },
    "Low":    { value: "$4,657.64", change: "", note: "Day low" },
    "52W High": { value: "$4,740.58", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,830.28" },
      { label: "R2",    value: "$4,785.43" },
      { label: "R1",    value: "$4,747.34" },
      { label: "Pivot", value: "$4,702.49" },
      { label: "S1",    value: "$4,664.40" },
      { label: "S2",    value: "$4,619.55" },
      { label: "S3",    value: "$4,581.46" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,785.43" },
      { label: "R2",    value: "$4,753.75" },
      { label: "R1",    value: "$4,734.17" },
      { label: "Pivot", value: "$4,702.49" },
      { label: "S1",    value: "$4,670.81" },
      { label: "S2",    value: "$4,651.23" },
      { label: "S3",    value: "$4,619.55" }
    ],
    camarilla: [
      { label: "R4", value: "$4,754.87" },
      { label: "R3", value: "$4,732.06" },
      { label: "R2", value: "$4,724.46" },
      { label: "R1", value: "$4,716.85" },
      { label: "S1", value: "$4,701.65" },
      { label: "S2", value: "$4,694.04" },
      { label: "S3", value: "$4,686.44" },
      { label: "S4", value: "$4,663.63" }
    ],
    note: "Spot gold ($4,709) trades above the classic pivot ($4,702.49), keeping the near-term bias bullish toward R1 $4,747."
  }
};
