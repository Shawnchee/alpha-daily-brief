window.CRUCIX_DATA = {
  generated: "Mon, 15 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on resumes as US-Iran deal cools oil and lifts gold to record highs.",

  macro: {
    dxy:      { value: "99.31",   change: "-0.18%", signal: "Dollar softens on geopolitical de-escalation move." },
    gold:     { value: "$4,373.95", change: "+3.19%", signal: "Safe-haven bid extends; record territory holds." },
    oil:      { value: "$80.58",  change: "-5.07%", signal: "WTI tumbles on US-Iran peace deal." },
    silver:   { value: "$70.67",  change: "+3.96%", signal: "Silver tracks gold, breakout continues higher." },
    yield10y: { value: "4.456%",  change: "-3bps",  signal: "Yields ease as inflation risk recedes." },
    vix:      { value: "17.68",   change: "-2.10%", signal: "Volatility compressed; complacency creeping in." },
    usdmyr:   { value: "4.05",    change: "-0.15%", signal: "Ringgit firmer with weaker dollar tone." },
    sp500:    { value: "7,431.46", change: "+0.50%", signal: "Record close; AI leaders drive index." },
    verdict: "Weaker DXY, falling yields, low VIX and surging gold scream classic risk-on with hedges. Crypto and tech benefit from looser financial conditions while bonds rally. KLSE catches a tailwind from stronger ringgit and softer oil import bill."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance holding ~58% range." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$66,500", marketCap: "$1.32T", change1h: "N/A", change24h: "+4.70%", change7d: "N/A", insight: "BTC clawed back from $59k June 5 low on US-Iran deal optimism and dip buying. Next resistance $70k after 13 straight days of ETF outflows totaled $4.4B." },
      { name: "Ethereum", symbol: "ETH", price: "$1,673.29", marketCap: "$201B", change1h: "N/A", change24h: "+3.20%", change7d: "N/A", insight: "ETH lags BTC but recovers above $1,650 support. Staking yields and L2 activity remain key catalysts heading into summer." },
      { name: "Solana",   symbol: "SOL", price: "$75.23", marketCap: "$36B", change1h: "N/A", change24h: "+11.70%", change7d: "+11.70%", insight: "SOL leads majors with double-digit weekly gain on memecoin volumes and stablecoin growth. Watch $80 resistance for breakout confirmation." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065", change24h: "+2.50%", note: "Bearish bias; needs BTC pump." },
      { name: "Pepe",      symbol: "PEPE", price: "—",       change24h: "N/A",     note: "Holds above 100-day EMA." },
      { name: "Shiba Inu", symbol: "SHIB", price: "—",       change24h: "N/A",     note: "Consolidates between 50/100 EMAs." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",     change24h: "N/A",     note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",     change24h: "N/A",     note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on resumes with BTC reclaiming $66.5k after $59k washout. Key level: $70k breakout would confirm trend resumption and trigger altseason. SOL outperformance signals appetite for higher-beta crypto returning."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,431.46",  change: "+0.50%" },
      { name: "Nasdaq",       value: "29,635.95", change: "+0.64%" },
      { name: "Dow",          value: "47,012",    change: "+0.70%" },
      { name: "VIX",          value: "17.68",     change: "-2.10%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$582.96", change: "-1.70%", insight: "Core S&P exposure; trims with broader index but uptrend intact." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$562.58", change: "-1.95%", insight: "Tech-heavy weakness on profit-taking despite index records." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$634.09", change: "-1.71%", insight: "Liquid S&P proxy mirrors VOO; institutional flows steady." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",       insight: "Total US market tilt; tracks S&P with small-cap drag." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",       insight: "Innovation basket leveraged to risk-on rotation." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$626.18", change: "+5.02%", insight: "Semis ripping on AI demand and pricing power across cycle." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$37.40",  change: "+4.50%", insight: "Spot BTC ETF tracks $66.5k recovery after 13-day outflow streak." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",       insight: "Megacap tech leadership intact despite intraday wobble." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$408.78", change: "+3.19%", insight: "Gold proxy hits record alongside spot; haven demand surges." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "—",        change: "—",       notable: false, insight: "Ad spend resilient; AI infra build continues to drive capex." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$205.19",  change: "+1.20%", notable: true,  insight: "AI king; data center demand and Blackwell ramp keep estimates rising." },
      { ticker: "TSLA",  name: "Tesla",         price: "—",        change: "—",       notable: false, insight: "EV demand mixed; robotaxi narrative remains the main re-rating catalyst." },
      { ticker: "AAPL",  name: "Apple",         price: "$291.13",  change: "+0.30%", notable: false, insight: "Steady cash machine; services growth offsets iPhone unit softness." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$390.70",  change: "+0.40%", notable: false, insight: "Azure AI workloads and Copilot monetization driving high-teens growth." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",        change: "—",       notable: false, insight: "Search resilient; Gemini and Cloud AI offset competitive concerns." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",        change: "—",       notable: false, insight: "AWS reacceleration and ad business drive margin expansion story." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",        change: "—",       notable: false, insight: "Ad tier and password sharing crackdown sustain subscriber growth." },
      { ticker: "AMD",   name: "AMD",           price: "—",        change: "—",       notable: false, insight: "MI accelerator ramp the swing factor; trails NVDA but gaining share." },
      { ticker: "PLTR",  name: "Palantir",      price: "$128.22",  change: "+2.10%", notable: true,  insight: "AIP enterprise deals accelerating; government revenue mix expanding." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",        change: "—",       notable: false, insight: "Cybersecurity demand structural; Falcon platform consolidation continues." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",        change: "—",       notable: false, insight: "Beta to BTC; stablecoin revenue and custody fees diversify the model." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",        change: "—",       notable: false, insight: "Levered BTC proxy; 843,706 BTC treasury defines the thesis." },
      { ticker: "APP",   name: "AppLovin",      price: "—",        change: "—",       notable: false, insight: "AXON ad engine driving outsized take rates in mobile gaming." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$30.85",   change: "-1.50%", notable: false, insight: "AI server demand intact but margin and governance overhangs persist." }
    ],
    trending: [
      { ticker: "SOXX", change: "+5.02%" },
      { ticker: "IBIT", change: "+4.50%" },
      { ticker: "PLTR", change: "+2.10%" },
      { ticker: "NVDA", change: "+1.20%" },
      { ticker: "SMCI", change: "-1.50%" }
    ],
    verdict: "AI trade still the only game in town with SOXX leading semis higher. Rotation favors quality megacap tech and crypto-linked names over high-beta innovation. Trim profit-taking risk in QQQ but stay long NVDA, PLTR, SOXX into earnings."
  },

  malaysia: {
    klci:   { value: "1,722", change: "+0.10%", context: "KLCI held flat at midday Friday as tech and transport offset healthcare weakness. Monday outlook constructive on weaker oil and firmer ringgit." },
    usdmyr: { value: "4.05",  change: "-0.15%", signal: "Ringgit firmer with US-Iran deal narrative." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM10.92", change: "+0.56% (Fri close)", insight: "Largest Malaysian bank; OPR steady supports net interest margins." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "RM7.39",  change: "+1.23% (Fri close)", insight: "Regional bank with Indonesia exposure; benefits from ASEAN rate stability." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",        change: "N/A (Fri close)",     insight: "Defensive consumer bank with sector-leading asset quality." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",        change: "N/A (Fri close)",     insight: "Mid-cap bank trading at discount to peers; dividend yield support." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",        change: "N/A (Fri close)",     insight: "Utility play with data center demand tailwind and energy transition capex." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—",        change: "N/A (Fri close)",     insight: "Semi packager levered to RF and AI cycle; NVDA strength a positive read-across." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",        change: "N/A (Fri close)",     insight: "Regional telco restructuring; XL-Smartfren merger unlocks Indonesia value." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",        change: "N/A (Fri close)",     insight: "Defensive healthcare with pricing power across ASEAN footprint." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",        change: "N/A (Fri close)",     insight: "E-government concession provides stable recurring digital revenue base." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",        change: "N/A (Fri close)",     insight: "5G rollout costs digested; dividend yield offers defensive carry." }
    ],
    ipos: [
      { name: "Upcoming Bursa listings", sector: "Various", price: "TBA", listingDate: "Q3 2026", status: "Pipeline", note: "Bursa IPO pipeline focused on tech and consumer names. Watch ACE Market for high-growth listings." }
    ],
    verdict: "Ringgit catches a bid as DXY softens and oil falls — net positive for KLSE importers. Inari is the top idea given NVDA-linked semi cycle strength and weaker MYR translation. Monday Bursa opens firmer with banks and tech leading."
  },

  news: [
    { headline: "US-Iran agree to deal, oil tumbles 5%", source: "Reuters", time: "12h ago", sentiment: "BULLISH", meaning: "Risk premium drops; equities and bonds both rally on lower inflation." },
    { headline: "Gold breaks $4,373 record high on safe-haven flows", source: "Bloomberg", time: "8h ago", sentiment: "BULLISH", meaning: "Real yields falling and central bank buying drive metal higher." },
    { headline: "Bitcoin reclaims $66,500 after $59k June low", source: "CoinDesk", time: "6h ago", sentiment: "BULLISH", meaning: "Dip buyers return; ETF outflow streak set to break this week." },
    { headline: "S&P 500 and Nasdaq log record closes", source: "CNBC", time: "10h ago", sentiment: "BULLISH", meaning: "Megacap tech and semis lead indices to fresh all-time highs." },
    { headline: "Strategy sells 32 BTC for $2.5M dividend cover", source: "The Block", time: "14h ago", sentiment: "NEUTRAL", meaning: "Tiny fraction of 843,706 BTC stack; signaling not capitulation." },
    { headline: "Fed's Warsh signals no rate cuts in 2026", source: "WSJ", time: "18h ago", sentiment: "BEARISH", meaning: "Hawkish hold tempers risk-on; growth stocks face valuation test." },
    { headline: "KLCI flat at 1,722 as tech offsets healthcare drag", source: "The Edge", time: "20h ago", sentiment: "NEUTRAL", meaning: "Bursa range-bound; semi names show relative strength into Monday." },
    { headline: "SOXX semis ETF surges 5% on AI capex guidance", source: "MarketWatch", time: "9h ago", sentiment: "BULLISH", meaning: "Hyperscaler capex remains structural; chip cycle far from peaking." }
  ],

  goldSummary: {
    "Price":    { value: "$4,373.95", change: "+3.19%", note: "Record high on US-Iran deal flows." },
    "Open":     { value: "$4,240.00", change: "", note: "" },
    "High":     { value: "$4,380.00", change: "", note: "Day high" },
    "Low":      { value: "$4,238.00", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,565.30" },
      { label: "R2",    value: "$4,472.65" },
      { label: "R1",    value: "$4,423.30" },
      { label: "Pivot", value: "$4,330.65" },
      { label: "S1",    value: "$4,281.30" },
      { label: "S2",    value: "$4,188.65" },
      { label: "S3",    value: "$4,139.30" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,472.65" },
      { label: "R2",    value: "$4,418.41" },
      { label: "R1",    value: "$4,384.89" },
      { label: "Pivot", value: "$4,330.65" },
      { label: "S1",    value: "$4,276.41" },
      { label: "S2",    value: "$4,242.89" },
      { label: "S3",    value: "$4,188.65" }
    ],
    camarilla: [
      { label: "R4", value: "$4,452.05" },
      { label: "R3", value: "$4,413.00" },
      { label: "R2", value: "$4,399.98" },
      { label: "R1", value: "$4,386.97" },
      { label: "S1", value: "$4,360.93" },
      { label: "S2", value: "$4,347.92" },
      { label: "S3", value: "$4,334.90" },
      { label: "S4", value: "$4,295.85" }
    ],
    note: "Gold trading above classic pivot $4,330.65 keeps bullish bias intact for the session."
  }
};
