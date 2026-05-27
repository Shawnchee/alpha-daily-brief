window.CRUCIX_DATA = {
  generated: "Wed, 27 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on equities on Iran truce hopes while Bitcoin and gold both slide.",

  macro: {
    dxy:      { value: "99.05",     change: "-0.14%", signal: "Dollar softens as peace hopes lift risk." },
    gold:     { value: "$4,442",    change: "-1.46%", signal: "Two-month low as safe-haven bid fades." },
    oil:      { value: "$92.98",    change: "-3.75%", signal: "WTI tumbles on Iran truce optimism." },
    silver:   { value: "$75.78",    change: "-0.56%", signal: "Tracks gold lower; ratio near 60." },
    yield10y: { value: "4.48%",     change: "-7bps",  signal: "Yields ease, supporting equity multiples." },
    vix:      { value: "16.87",     change: "-0.82%", signal: "Volatility low; complacency creeping in." },
    usdmyr:   { value: "3.9676",    change: "+0.08%", signal: "Ringgit steady near 3.97 handle." },
    sp500:    { value: "7,515.99",  change: "-0.04%", signal: "Flat as megacaps offset Dow record." },
    verdict: "Falling DXY, easing yields and a sub-17 VIX make a constructive backdrop for risk assets. Yet gold's two-month low signals fading fear, not panic buying. Stocks favored over crypto today; KLSE stays pressured by foreign selling and holiday caution."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC weakness drags overall market sentiment." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$75,139", marketCap: "$1.51T", change1h: "N/A", change24h: "-1.00%", change7d: "N/A", insight: "BTC slips near $75K as spot ETF demand weakens and volatility compresses. Bulls must defend $74,950 or risk a slide toward $70K." },
      { name: "Ethereum", symbol: "ETH", price: "$2,060", marketCap: "$248B",  change1h: "N/A", change24h: "N/A",     change7d: "N/A", insight: "ETH hovers near $2,060, lagging as the broader complex consolidates. Holds structural support but needs BTC stability to recover." },
      { name: "Solana",   symbol: "SOL", price: "$86.03", marketCap: "$47B",   change1h: "N/A", change24h: "+1.30%",  change7d: "N/A", insight: "SOL bucks the trend with a 1.3% gain, the relative strength leader among majors. Ecosystem flows keep it firmer than peers." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",     change24h: "N/A", note: "Tests 100-day EMA support." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000040",  change24h: "N/A", note: "Coiling above 100-day EMA." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000614", change24h: "N/A", note: "Consolidating between key EMAs." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A", note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A", note: "Speculative SOL memecoin." }
    ],
    verdict: "Crypto is the day's risk-off corner while equities rally. BTC's $74,950 line is the level that matters; lose it and $70K opens up. No altseason signal with dominance flat and memecoins drifting."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,515.99",  change: "-0.04%" },
      { name: "Nasdaq",       value: "26,633.11", change: "-0.09%" },
      { name: "Dow",          value: "50,682.40", change: "+0.44%" },
      { name: "VIX",          value: "16.87",     change: "-0.82%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$689.96", change: "-0.04%", insight: "Tracks a flat S&P as breadth narrows beneath megacaps." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$726.84", change: "-0.09%", insight: "Slightly soft as tech megacaps cool from recent highs." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$748.86", change: "-0.04%", insight: "Mirrors index; low VIX keeps option hedging cheap." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Broad-market proxy tilts on megacap performance today." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "$77.23",  change: "+1.09%", insight: "High-beta names firm as yields ease and risk appetite holds." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$570.09", change: "N/A",    insight: "Semis catch a bid as SK Hynix joins the $1T club." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$41.74",  change: "-1.00%", insight: "Tracks BTC lower as spot ETF inflows soften." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Tech sector flat; chips lead while software lags." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$415.14", change: "-1.46%", insight: "Slides to two-month low as haven demand fades." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$612.26", change: "+0.30%",  notable: false, insight: "Steady gain; ad spend resilience underpins the print." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$214.52", change: "-0.40%",  notable: false, insight: "Slight dip even as memory-chip peers rally on AI demand." },
      { ticker: "TSLA",  name: "Tesla",         price: "$433.23", change: "+1.70%",  notable: false, insight: "Outperforms megacaps on renewed risk appetite." },
      { ticker: "AAPL",  name: "Apple",         price: "$308.07", change: "-0.20%",  notable: false, insight: "Drifts lower; awaiting next product and services catalyst." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$412.69", change: "-0.80%",  notable: false, insight: "Soft on AI-capex scrutiny despite Azure momentum." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$389.50", change: "-0.40%",  notable: false, insight: "Eases within range; search and cloud narrative intact." },
      { ticker: "AMZN",  name: "Amazon",        price: "$265.29", change: "-0.39%",  notable: false, insight: "Modest pullback as AWS growth keeps story constructive." },
      { ticker: "NFLX",  name: "Netflix",       price: "$87.68",  change: "-1.04%",  notable: false, insight: "Lags the tape; ad-tier and engagement remain key drivers." },
      { ticker: "AMD",   name: "AMD",           price: "$512.30", change: "+1.67%",  notable: false, insight: "Climbs with the semi complex on AI-hardware tailwinds." },
      { ticker: "PLTR",  name: "Palantir",      price: "$134.72", change: "N/A",     notable: false, insight: "Holds gains as government and commercial AI bookings grow." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "$671.55", change: "+1.22%",  notable: false, insight: "Firms as cybersecurity spend stays a defensive favorite." },
      { ticker: "COIN",  name: "Coinbase",      price: "$182.23", change: "-1.49%",  notable: false, insight: "Slips alongside Bitcoin as crypto trading volumes cool." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$161.13", change: "+0.78%",  notable: false, insight: "Edges up despite halting fresh Bitcoin purchases." },
      { ticker: "APP",   name: "AppLovin",      price: "$577.07", change: "+12.22%", notable: true,  insight: "Soars on bullish guidance fueling ad-tech momentum." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$38.48",  change: "N/A",     notable: false, insight: "Stabilizes at a low base amid AI-server demand questions." }
    ],
    trending: [
      { ticker: "APP",  change: "+12.22%" },
      { ticker: "TSLA", change: "+1.70%" },
      { ticker: "AMD",  change: "+1.67%" },
      { ticker: "CRWD", change: "+1.22%" },
      { ticker: "MSTR", change: "+0.78%" }
    ],
    verdict: "The AI trade is alive but rotating: chips and ad-tech lead while software megacaps cool. Own semis and quality AI beneficiaries; trim crowded megacaps showing fatigue. Avoid crypto-proxies like COIN until BTC stabilizes."
  },

  malaysia: {
    klci:   { value: "1,699.02", change: "-0.30%", context: "KLCI closed lower ahead of the holiday period, extending a losing streak on foreign selling. Expect cautious, range-bound trade with banks setting direction." },
    usdmyr: { value: "3.9676", change: "+0.08%", signal: "Ringgit firm near 3.97 as dollar eases." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM11.06", change: "+0.55%",  insight: "Region's largest bank firms; stable OPR supports margins." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "RM7.68",  change: "-0.65%",  insight: "Eases on profit-taking; ASEAN exposure remains the draw." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "RM4.80",  change: "+0.84%",  insight: "Defensive retail-bank gains amid the risk-off Bursa mood." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",       change: "—",       insight: "Attractive dividend yield anchors the regional banking play." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "RM14.16", change: "-2.08%",  insight: "Utility heavyweight drops, weighing on the index meaningfully." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "RM2.22",  change: "+12.12%", insight: "Surges with the semi cycle and AI-chip demand tailwinds." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",       change: "—",       insight: "Telco restructuring story keeps regional optionality alive." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",       change: "—",       insight: "Defensive healthcare demand cushions broad-market weakness." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",       change: "—",       insight: "Digital-government services offer steady recurring revenue." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",       change: "—",       insight: "5G monetization and a stable yield support the telco case." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No notable new Bursa listing surfaced in today's search." }
    ],
    verdict: "Ringgit holds firm near 3.97 as the dollar softens. Inari is the standout, riding the semiconductor and AI-chip upcycle. Expect a cautious, bank-led Bursa session with foreign flows the swing factor."
  },

  news: [
    { headline: "SK Hynix joins Micron in $1 trillion club", source: "CoinDesk", time: "3h ago", sentiment: "BULLISH", meaning: "Memory chipmakers surge; AI hardware demand stays red-hot." },
    { headline: "Dow hits record close as oil retreats on Iran truce", source: "CNBC", time: "12h ago", sentiment: "BULLISH", meaning: "Dow notches record; energy weakness offsets megacap softness." },
    { headline: "Markets surge on Iran peace hopes", source: "CoinDesk", time: "14h ago", sentiment: "NEUTRAL", meaning: "Iran truce optimism lifts equities and pressures oil lower." },
    { headline: "Bitcoin slips near $75K as ETF demand weakens", source: "crypto.news", time: "2h ago", sentiment: "BEARISH", meaning: "Spot Bitcoin ETF outflows pressure price below $76K." },
    { headline: "AppLovin soars on bullish guidance", source: "Benzinga", time: "4h ago", sentiment: "BULLISH", meaning: "Ad-tech momentum drives AppLovin sharply higher intraday." },
    { headline: "Saylor halts Bitcoin buys, pivots to treasury bonds", source: "Yahoo Finance", time: "6h ago", sentiment: "WATCH", meaning: "Strategy stops accumulating BTC; treasury-bond pivot signals caution." },
    { headline: "Bursa Malaysia closes lower ahead of holiday period", source: "FMT", time: "16h ago", sentiment: "BEARISH", meaning: "KLCI extends losses; foreign selling and holiday caution weigh." },
    { headline: "Gold falls to two-month low as peace hopes build", source: "Fortune", time: "8h ago", sentiment: "NEUTRAL", meaning: "Safe-haven bid fades; bullion drops near $4,400 support." }
  ],

  goldSummary: {
    "Price":    { value: "$4,442",    change: "-1.46%", note: "Two-month low; haven demand fading fast." },
    "Open":     { value: "$4,507.56", change: "", note: "" },
    "High":     { value: "$4,527.49", change: "", note: "Day high" },
    "Low":      { value: "$4,425.07", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,606.93" },
      { label: "R2",    value: "$4,567.21" },
      { label: "R1",    value: "$4,504.51" },
      { label: "Pivot", value: "$4,464.79" },
      { label: "S1",    value: "$4,402.09" },
      { label: "S2",    value: "$4,362.37" },
      { label: "S3",    value: "$4,299.67" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,567.21" },
      { label: "R2",    value: "$4,528.09" },
      { label: "R1",    value: "$4,503.91" },
      { label: "Pivot", value: "$4,464.79" },
      { label: "S1",    value: "$4,425.67" },
      { label: "S2",    value: "$4,401.49" },
      { label: "S3",    value: "$4,362.37" }
    ],
    camarilla: [
      { label: "R4", value: "$4,498.15" },
      { label: "R3", value: "$4,469.99" },
      { label: "R2", value: "$4,460.60" },
      { label: "R1", value: "$4,451.21" },
      { label: "S1", value: "$4,432.43" },
      { label: "S2", value: "$4,423.04" },
      { label: "S3", value: "$4,413.65" },
      { label: "S4", value: "$4,385.49" }
    ],
    note: "Gold trades below the $4,464.79 classic pivot — bearish bias until reclaimed."
  }
};
