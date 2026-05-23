window.CRUCIX_DATA = {
  generated: "Sat, 23 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on tilt as US-Iran peace headlines lift BTC and equities, while gold cools and DXY holds steady.",

  macro: {
    dxy:      { value: "99.19",    change: "-0.03%", signal: "Dollar flat; risk assets get breathing room." },
    gold:     { value: "$4,523.20", change: "-0.42%", signal: "Profit taking after geopolitical de-escalation." },
    oil:      { value: "$96.60",   change: "+0.26%", signal: "WTI firm; Brent leads on demand optimism." },
    silver:   { value: "$76.20",   change: "-0.69%", signal: "Silver lags gold; industrial demand wobble." },
    yield10y: { value: "4.572%",   change: "-1bps",  signal: "Yields drift lower; duration bid returning." },
    vix:      { value: "16.70",    change: "-0.36%", signal: "Vol compressed; complacency creeping in." },
    usdmyr:   { value: "3.9620",   change: "+0.05%", signal: "Ringgit steady inside 3.95–3.97 range." },
    sp500:    { value: "7,473.47", change: "+0.37%", signal: "Index at fresh highs; breadth narrow." },
    verdict: "Soft DXY, falling yields and a 16-handle VIX form a textbook risk-on backdrop while gold pulls back on peace-deal optimism. Crypto and US tech are the prime beneficiaries; defensives and gold miners lag. KLSE stays range-bound — ringgit strength caps exporters but supports consumer plays."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady around mid-50s." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$78,255", marketCap: "$1.55T", change1h: "N/A", change24h: "+1.16%", change7d: "N/A", insight: "BTC reclaiming $77K on Trump's Iran peace announcement after dipping toward $75K. Key bull trigger sits at $80K; loss of $75K reopens $70K." },
      { name: "Ethereum", symbol: "ETH", price: "$2,060",  marketCap: "$248B",  change1h: "N/A", change24h: "+1.8%",  change7d: "N/A", insight: "ETH grinding in $2,000–$2,150 range as ETF flows stabilize. A clean break above $2,200 needed to confirm trend change." },
      { name: "Solana",   symbol: "SOL", price: "$84.36",  marketCap: "$40B",   change1h: "N/A", change24h: "+2.1%",  change7d: "N/A", insight: "SOL leading L1s on resilient DEX volume despite memecoin chill. Watching $90 as next resistance, $78 as support." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.105",      change24h: "+1.8%", note: "Pressing 200 EMA at $0.106." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000037",  change24h: "+2.4%", note: "Recovery from local lows holding." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000058",  change24h: "+1.5%", note: "Stabilizing above key support." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",   note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",   note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on tape returning as BTC reclaims $77K on Iran de-escalation, dragging alts and memes higher. Key BTC level: $80K reclaim opens $85K; failure to hold $75K invalidates the bounce. Altseason signal still off — BTC dominance elevated, ETH/BTC weak."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,473.47",  change: "+0.37%" },
      { name: "Nasdaq",       value: "26,343.97", change: "+0.19%" },
      { name: "Dow",          value: "50,579.70", change: "+0.58%" },
      { name: "VIX",          value: "16.70",     change: "-0.36%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$685.55", change: "Fri close", insight: "Tracks SPX at record; core long-term hold." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$711.23", change: "Fri close", insight: "Mega-cap tech engine; AI capex remains the bid." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",        change: "Fri close", insight: "Same exposure as VOO with deeper options liquidity." },
      { ticker: "VTI",  name: "Total Market",      price: "—",        change: "Fri close", insight: "Broader than VOO; adds small/mid-cap exposure." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",        change: "Fri close", insight: "High-beta disruptive growth; sensitive to long-duration rates." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",        change: "Fri close", insight: "Chips ETF tied to NVDA, AMD, AVGO cycle." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$43.48",   change: "+1.16%",    insight: "Spot BTC proxy; flows turned mixed last week." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",        change: "Fri close", insight: "Concentrated mega-cap tech; AI beneficiary." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$422.73",  change: "-0.42%",    insight: "Cooling on peace headlines but uptrend intact above $400." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$607.38", change: "+0.38% (Fri close)", notable: false, insight: "Ads engine humming; Reality Labs spend remains the swing factor." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$214.28", change: "Fri close",          notable: true,  insight: "AI capex cycle intact; hyperscaler orderbook into 2027 remains the bull case." },
      { ticker: "TSLA",  name: "Tesla",         price: "$417.85", change: "+0.14% (Fri close)", notable: false, insight: "Robotaxi narrative driving multiple expansion despite soft auto deliveries." },
      { ticker: "AAPL",  name: "Apple",         price: "$304.99", change: "Fri close",          notable: false, insight: "iPhone cycle steady; services margin the durable story." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$419.54", change: "Fri close",          notable: false, insight: "Azure AI workloads the engine; capex digestion the watch item." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",        change: "Fri close",          notable: false, insight: "Search resilient; Gemini and Cloud carry the AI narrative." },
      { ticker: "AMZN",  name: "Amazon",        price: "$266.32", change: "Fri close",          notable: false, insight: "AWS reacceleration plus retail margin lift; balanced compounder." },
      { ticker: "NFLX",  name: "Netflix",       price: "$88.60",  change: "Fri close",          notable: false, insight: "Ads tier and live events broaden the revenue stack." },
      { ticker: "AMD",   name: "AMD",           price: "—",        change: "Fri close",          notable: false, insight: "MI-series ramp the key swing variable versus NVDA dominance." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",        change: "Fri close",          notable: false, insight: "AIP land-and-expand still the growth engine in commercial." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",        change: "Fri close",          notable: false, insight: "Cybersecurity demand resilient; Falcon platform consolidation tailwind." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",        change: "Fri close",          notable: false, insight: "Levered BTC beta; subscription revenue smoothes cycle." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$158.75", change: "Fri close",          notable: true,  insight: "BTC treasury proxy; premium to NAV compressed with BTC near $77K." },
      { ticker: "APP",   name: "AppLovin",      price: "—",        change: "Fri close",          notable: false, insight: "Axon engine driving mobile-ad share gains; ecommerce optionality." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$35.22",  change: "Fri close",          notable: false, insight: "AI server demand intact but margin pressure persists from competition." }
    ],
    trending: [
      { ticker: "MSTR", change: "BTC-linked" },
      { ticker: "NVDA", change: "AI bid" },
      { ticker: "SMCI", change: "margin worry" },
      { ticker: "N/A",  change: "N/A" },
      { ticker: "N/A",  change: "N/A" }
    ],
    verdict: "AI trade remains the only game in town — NVDA, MSFT, META and AVGO doing the heavy lifting while breadth thins. Rotate toward quality mega-cap tech and BTC proxies on dips; trim unprofitable high-beta growth. Avoid chasing late-cycle semis like SMCI where margins are compressing."
  },

  malaysia: {
    klci:   { value: "1,753.43", change: "-0.26%", context: "KLCI slipped Friday to close near 1,753, weighed by financials and plantation. Monday opens cautiously, with regional sentiment hinging on US-Iran follow-through." },
    usdmyr: { value: "3.9620",   change: "+0.05%", signal: "Ringgit firm; 3.95–3.97 range trade likely." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "—", change: "Fri close", insight: "OPR steady supports NIM; dividend yield anchors the name." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "—", change: "Fri close", insight: "Regional ASEAN exposure with Indo and Thai units driving growth." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",     price: "—", change: "Fri close", insight: "Defensive bank with best-in-class asset quality and ROE." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",        price: "—", change: "Fri close", insight: "Capital-rich, attractive payout but slower loan growth than peers." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",          price: "—", change: "Fri close", insight: "Data centre power demand the structural re-rating story." },
      { ticker: "INARI",  name: "Inari (0138.KL)",           price: "—", change: "Fri close", insight: "Semi cycle leverage to NVDA RF content; weak ringgit fade is mild headwind." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",          price: "—", change: "Fri close", insight: "Telco consolidation thesis intact; capex discipline improving FCF." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)",  price: "—", change: "Fri close", insight: "Regional hospital footprint with strong medical tourism tailwind." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",            price: "—", change: "Fri close", insight: "Digital services concessions deliver recurring high-margin revenue." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",           price: "—", change: "Fri close", insight: "5G wholesale model clarified; cash yield supportive." }
    ],
    ipos: [
      { name: "No fresh IPO data", sector: "—", price: "—", listingDate: "—", status: "—", note: "No new IPO headlines captured this cycle. Check Bursa main board calendar for updates." }
    ],
    verdict: "Ringgit holds inside 3.96 zone — neutral for exporters, mildly positive for consumer names. Best risk-reward sits with Tenaga on the data-centre power thesis and Inari on the AI-chip cycle. Monday Bursa likely opens flat with upside bias if US futures hold gains; KLCI 1,760 the immediate resistance."
  },

  news: [
    { headline: "Bitcoin rebounds to $77K on Trump Iran peace announcement", source: "CoinDesk",   time: "3h ago",  sentiment: "BULLISH", meaning: "Geopolitical risk-off unwinds; crypto reclaims key support." },
    { headline: "S&P 500 and Nasdaq close at fresh records on Intel boost",   source: "CNBC",       time: "12h ago", sentiment: "BULLISH", meaning: "Mega-cap tech leadership extends; breadth still narrow concern." },
    { headline: "Gold slips below $4,540 as peace deal hopes ease bid",       source: "Reuters",    time: "6h ago",  sentiment: "BEARISH", meaning: "Safe-haven demand fades; uptrend intact above $4,400." },
    { headline: "Bitcoin ETF outflows accelerate as Fed risk weighs",         source: "Benzinga",   time: "8h ago",  sentiment: "BEARISH", meaning: "Institutional flows cautious into FOMC and CPI prints." },
    { headline: "Polymarket prices 75% odds BTC hits $70K before $90K",       source: "CryptoAdv",  time: "10h ago", sentiment: "WATCH",   meaning: "Crowd skews bearish near-term despite bounce headlines." },
    { headline: "10Y Treasury yield drifts to 4.57% as duration bid returns", source: "Bloomberg",  time: "7h ago",  sentiment: "BULLISH", meaning: "Lower yields support growth equities and gold structurally." },
    { headline: "KLCI eases to 1,753 on financials drag",                     source: "The Edge",   time: "14h ago", sentiment: "NEUTRAL", meaning: "Bursa consolidates; awaits regional cue Monday from Wall Street." },
    { headline: "USD/MYR steady at 3.96 as DXY hovers near 99",               source: "Bloomberg",  time: "9h ago",  sentiment: "NEUTRAL", meaning: "Ringgit stable; range trade likely while DXY contained." }
  ],

  goldSummary: {
    "Price":    { value: "$4,523.20", change: "-0.42%", note: "Cooling on peace headlines, trend intact." },
    "Open":     { value: "—",         change: "", note: "" },
    "High":     { value: "$4,545",    change: "", note: "Day high (est.)" },
    "Low":      { value: "$4,505",    change: "", note: "Day low (est.)" },
    "52W High": { value: "N/A",       change: "", note: "" },
    "52W Low":  { value: "N/A",       change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,583.67" },
      { label: "R2",    value: "$4,564.33" },
      { label: "R1",    value: "$4,543.67" },
      { label: "Pivot", value: "$4,524.33" },
      { label: "S1",    value: "$4,503.67" },
      { label: "S2",    value: "$4,484.33" },
      { label: "S3",    value: "$4,463.67" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,564.33" },
      { label: "R2",    value: "$4,549.05" },
      { label: "R1",    value: "$4,539.61" },
      { label: "Pivot", value: "$4,524.33" },
      { label: "S1",    value: "$4,509.05" },
      { label: "S2",    value: "$4,499.61" },
      { label: "S3",    value: "$4,484.33" }
    ],
    camarilla: [
      { label: "R4", value: "$4,545.00" },
      { label: "R3", value: "$4,534.00" },
      { label: "R2", value: "$4,530.33" },
      { label: "R1", value: "$4,526.67" },
      { label: "S1", value: "$4,519.33" },
      { label: "S2", value: "$4,515.67" },
      { label: "S3", value: "$4,512.00" },
      { label: "S4", value: "$4,501.00" }
    ],
    note: "Gold trading just below the classic pivot at $4,524 — neutral-to-bearish bias; reclaim opens R1 at $4,544."
  }
};
