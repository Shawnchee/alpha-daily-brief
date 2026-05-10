window.CRUCIX_DATA = {
  generated: "Sun, 10 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on Friday close as US indices hit records but BTC stalls at $80K support.",

  macro: {
    dxy:      { value: "97.84", change: "-0.06%", signal: "Dollar soft; supports risk, commodities firm." },
    gold:     { value: "$—",    change: "—",       signal: "Bid intact as dollar fades, yields ease." },
    oil:      { value: "$95.42", change: "+0.64%", signal: "Crude firm on Middle East risk premium." },
    silver:   { value: "$—",     change: "—",       signal: "Tracks gold; industrial demand still strong." },
    yield10y: { value: "4.36%", change: "-4bps",  signal: "Yields easing; supports duration and tech." },
    vix:      { value: "17.19", change: "-1.20%", signal: "Calm tape; complacency creeping into options." },
    usdmyr:   { value: "—",      change: "—",       signal: "Ringgit firm vs softer dollar trend." },
    sp500:    { value: "7,398.93", change: "+0.84%", signal: "Index at record on AI-led breadth." },
    verdict: "Soft DXY plus falling 10Y yield plus sub-18 VIX equals textbook risk-on tape. Stocks priced for perfection — record S&P 500 and Nasdaq leaves little margin for hawkish surprise. Crypto lags equities; BTC must reclaim $86K to confirm risk-on; KLSE benefits from weaker dollar but waits for Bursa Monday cues."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady; alts waiting on Bitcoin." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$80,369", marketCap: "$1.6T",  change1h: "N/A", change24h: "-0.5%",  change7d: "N/A",     insight: "BTC defending $80K after failed push to $86K; momentum slowing. Down 36% from $126K ATH but Clarity Act vote could catalyze next leg." },
      { name: "Ethereum", symbol: "ETH", price: "$2,282.84", marketCap: "$275B", change1h: "N/A", change24h: "-0.8%",  change7d: "N/A",     insight: "ETH underperforms BTC as ETF flows favor Bitcoin. Needs $2,500 reclaim to flip structure bullish." },
      { name: "Solana",   symbol: "SOL", price: "$93.28",  marketCap: "$45B",   change1h: "N/A", change24h: "-0.40%", change7d: "+11.50%", insight: "SOL outpaces majors weekly on memecoin and DePIN activity. Watch $100 psychological resistance." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",      change24h: "-1.2%", note: "Testing 100-day EMA support." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.000004233", change24h: "-0.6%", note: "Consolidating with broader memes." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000614",  change24h: "-0.5%", note: "Range-bound between EMAs." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",   note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",   note: "Speculative SOL memecoin." }
    ],
    verdict: "Crypto cautious as BTC fights to hold $80K after hot jobs data killed rate-cut hopes. Reclaim $86K and momentum returns; lose $78K and a trip to $72K opens up. Altseason on hold until BTC dominance breaks lower."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,398.93",  change: "+0.84%" },
      { name: "Nasdaq",       value: "26,247.08", change: "+1.71%" },
      { name: "Dow",          value: "49,609.16", change: "+0.02%" },
      { name: "VIX",          value: "17.19",     change: "-1.20%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$678.04", change: "Fri close", insight: "Core S&P exposure printing fresh highs alongside index." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$711.23", change: "Fri close", insight: "Tech-heavy benchmark leads tape on AI and semis." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$737.62", change: "Fri close", insight: "Liquid S&P proxy; record close confirms breadth." },
      { ticker: "VTI",  name: "Total Market",      price: "—",        change: "Fri close", insight: "Broad market vehicle should track S&P record higher." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",        change: "Fri close", insight: "High-beta innovation basket benefits from falling 10Y yield." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$520.30", change: "Fri close", insight: "Semis ripping +5.67% on AI capex and Nvidia tailwind." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$44.65",  change: "Fri close", insight: "Spot-BTC ETF tracks Bitcoin near $80K consolidation." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",        change: "Fri close", insight: "Tech sector ETF carried by mega-caps and chips." },
      { ticker: "GLD",  name: "Gold ETF",          price: "—",        change: "Fri close", insight: "Gold proxy supported by soft dollar and easing yields." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$616.81", change: "Fri close", notable: false, insight: "Ad strength and AI capex narrative still intact." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$211.50", change: "Fri close", notable: true,  insight: "AI king closed +1.77%; smuggling probe a sideshow." },
      { ticker: "TSLA",  name: "Tesla",         price: "$411.79", change: "Fri close", notable: true,  insight: "Tesla +3.28% on robotaxi and energy momentum." },
      { ticker: "AAPL",  name: "Apple",         price: "$293.41", change: "Fri close", notable: false, insight: "Apple +2.1% as services growth offsets iPhone cycle." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",        change: "Fri close", notable: false, insight: "Azure AI bookings remain key growth driver." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",        change: "Fri close", notable: false, insight: "Gemini and cloud carrying narrative into next earnings." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",        change: "Fri close", notable: false, insight: "AWS margin expansion still the bull case." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",        change: "Fri close", notable: false, insight: "Stock 35% off highs; ad-tier and live sports key." },
      { ticker: "AMD",   name: "AMD",           price: "—",        change: "Fri close", notable: false, insight: "MI-series ramp and inference demand drive thesis." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",        change: "Fri close", notable: false, insight: "AIP enterprise wins drive premium multiple." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",        change: "Fri close", notable: false, insight: "Cybersecurity bellwether riding platform consolidation." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",        change: "Fri close", notable: false, insight: "Clarity Act vote is the binary catalyst." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",        change: "Fri close", notable: false, insight: "Levered BTC proxy; tracks Bitcoin at $80K support." },
      { ticker: "APP",   name: "AppLovin",      price: "—",        change: "Fri close", notable: false, insight: "Adtech machine-learning story still compounding." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$35.00",  change: "Fri close", notable: true,  insight: "SMCI +48% past month on margin beat and AI server demand." }
    ],
    trending: [
      { ticker: "SOXX", change: "+5.67%" },
      { ticker: "TSLA", change: "+3.28%" },
      { ticker: "AAPL", change: "+2.10%" },
      { ticker: "NVDA", change: "+1.77%" },
      { ticker: "META", change: "+0.64%" }
    ],
    verdict: "AI trade alive and well: SOXX +5.67%, NVDA, SMCI and Tesla driving the tape into record highs. Rotation favors mega-cap tech and semis over defensives; small caps still lagging. Own AI infrastructure (NVDA, SMCI, SOXX); avoid rate-sensitive defensives until yield direction confirms."
  },

  malaysia: {
    klci:   { value: "1,747.43", change: "+0.44%", context: "KLCI closed Friday at 1,747.43, supported by banks and select tech. Monday outlook hinges on Wall Street follow-through and ringgit direction." },
    usdmyr: { value: "—", change: "—", signal: "Ringgit underpinned by softer dollar tone." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM11.18", change: "Fri close", insight: "Regional banking leader; OPR steady supports NIM." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",            price: "RM7.89",  change: "Fri close", insight: "ASEAN exposure plus +2.60% Friday on regional banking strength." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",     price: "—",        change: "Fri close", insight: "Defensive consumer bank with stable asset quality and yield." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",        price: "—",        change: "Fri close", insight: "Dividend-yield play among mid-cap Malaysian banks." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",          price: "—",        change: "Fri close", insight: "Data-center power demand a structural tailwind for utility." },
      { ticker: "INARI",  name: "Inari (0138.KL)",           price: "—",        change: "Fri close", insight: "Semi cycle proxy; should track NVDA and SOXX strength Friday." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",          price: "—",        change: "Fri close", insight: "Regional telco; consolidation thesis still in play." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)",  price: "—",        change: "Fri close", insight: "Defensive healthcare growth across Malaysia and Turkey." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",            price: "—",        change: "Fri close", insight: "Digital services beneficiary of government concession renewals." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",           price: "—",        change: "Fri close", insight: "5G rollout and enterprise revenue support stable yield." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No fresh Bursa IPO catalysts surfaced in latest search results." }
    ],
    verdict: "Ringgit firm vs softer DXY; supports KLSE without intervention pressure. CIMB the standout Friday at +2.60%; banks and Inari best Monday positioning. Bursa Monday should track Wall Street record-close strength positively."
  },

  news: [
    { headline: "S&P 500 and Nasdaq close at record highs on AI-led rally",        source: "CNBC",            time: "2d ago", sentiment: "BULLISH", meaning: "Record close confirms risk-on; AI mega-cap leadership continues" },
    { headline: "Bitcoin holds $80K after strong jobs data trims rate-cut hopes",  source: "Coinpaper",       time: "1d ago", sentiment: "WATCH",   meaning: "Hot labor data delays Fed cuts; BTC range-bound near support" },
    { headline: "US Senate schedules Clarity Act vote on crypto market structure", source: "CaptainAltcoin",  time: "1d ago", sentiment: "BULLISH", meaning: "Crypto regulatory clarity catalyst for BTC, ETH and COIN" },
    { headline: "US suspects Nvidia chips smuggled to Alibaba via Thailand",       source: "Bloomberg",       time: "2d ago", sentiment: "WATCH",   meaning: "Export-control risk; NVDA shrugs but headline overhang remains" },
    { headline: "Super Micro Computer rises on margin beat and strong AI guide",   source: "24/7 Wall St.",   time: "2d ago", sentiment: "BULLISH", meaning: "SMCI +48% month; AI server demand thesis reignites" },
    { headline: "SOXX semiconductor ETF jumps 5.67% on AI capex tailwind",         source: "Yahoo Finance",   time: "2d ago", sentiment: "BULLISH", meaning: "Semis leadership confirms AI infrastructure trade intact" },
    { headline: "CIMB rises 2.60% as ASEAN banks lead Bursa Friday close",         source: "Bursa Malaysia",  time: "2d ago", sentiment: "BULLISH", meaning: "Malaysian banks firm into weekend; KLSE buoyant" },
    { headline: "Crude oil at $95.42 on Middle East risk premium",                 source: "TradingEconomics",time: "2d ago", sentiment: "WATCH",   meaning: "Energy firm; inflation risk if oil sustains above $95" }
  ],

  goldSummary: {
    "Price":    { value: "$—", change: "—", note: "Search did not return live gold spot price." },
    "Open":     { value: "$—", change: "",  note: "" },
    "High":     { value: "$—", change: "",  note: "Day high" },
    "Low":      { value: "$—", change: "",  note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$—" },
      { label: "R2",    value: "$—" },
      { label: "R1",    value: "$—" },
      { label: "Pivot", value: "$—" },
      { label: "S1",    value: "$—" },
      { label: "S2",    value: "$—" },
      { label: "S3",    value: "$—" }
    ],
    fibonacci: [
      { label: "R3",    value: "$—" },
      { label: "R2",    value: "$—" },
      { label: "R1",    value: "$—" },
      { label: "Pivot", value: "$—" },
      { label: "S1",    value: "$—" },
      { label: "S2",    value: "$—" },
      { label: "S3",    value: "$—" }
    ],
    camarilla: [
      { label: "R4", value: "$—" },
      { label: "R3", value: "$—" },
      { label: "R2", value: "$—" },
      { label: "R1", value: "$—" },
      { label: "S1", value: "$—" },
      { label: "S2", value: "$—" },
      { label: "S3", value: "$—" },
      { label: "S4", value: "$—" }
    ],
    note: "Gold OHLC unavailable from searches; pivot levels withheld until clean data confirms."
  }
};
