window.CRUCIX_DATA = {
  generated: "Sun, 07 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off shock — Nasdaq's worst day since April crushed chips while BTC slid under $60K.",

  macro: {
    dxy:      { value: "100.05",   change: "+0.67%", signal: "Dollar bid as risk assets unwind." },
    gold:     { value: "$4,365.30", change: "-3.10%", signal: "Profit-taking after strong jobs print." },
    oil:      { value: "$90.54",   change: "-2.69%", signal: "Demand fears drag crude sharply lower." },
    silver:   { value: "$69.10",   change: "-6.58%", signal: "Industrial metals slammed by growth fear." },
    yield10y: { value: "4.536%",   change: "+5.9bps", signal: "Yields up, jobs print pushes Fed back." },
    vix:      { value: "21.51",    change: "+39.68%", signal: "Volatility explodes, fear gauge surges hard." },
    usdmyr:   { value: "4.0290",   change: "+0.40%", signal: "Ringgit slips on dollar strength." },
    sp500:    { value: "7,383.74", change: "-2.64%", signal: "Broad selloff led by mega-cap tech." },
    verdict: "Hot jobs report shoved yields and dollar higher while VIX spiked 40% — classic risk-off cascade. Gold and silver got hit on hawkish repricing; crypto broke key support as leverage flushed. KLSE will likely gap down Monday on ringgit weakness and global tech drawdown."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance firm as alts bleed faster." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$61,739",   marketCap: "$1.22T", change1h: "N/A", change24h: "-3.50%", change7d: "N/A", insight: "BTC tested $60,420 — lowest since pre-election Nov 2024. Saylor signaled more accumulation; $60K is the line in the sand." },
      { name: "Ethereum", symbol: "ETH", price: "$1,581.66", marketCap: "$190B",  change1h: "N/A", change24h: "-4.20%", change7d: "N/A", insight: "ETH lost the $1,600 handle as risk-off accelerates. ETF outflows and weak L2 fee burn keep structural tone heavy." },
      { name: "Solana",   symbol: "SOL", price: "$64.70",    marketCap: "$31B",   change1h: "N/A", change24h: "-5.10%", change7d: "N/A", insight: "SOL underperforms BTC as memecoin froth deflates. Holding above $60 keeps the longer-term uptrend intact." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",     change24h: "-1.14%",  note: "Holding 100-day EMA support." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000365", change24h: "-10.00%", note: "Bearish flush, 100-day EMA tested." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000615", change24h: "-2.30%",  note: "Stuck between EMAs, no momentum." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",     note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",     note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-off in full force — BTC's break below $60K invalidates the spring breakout structure. Watch $58K next; reclaim of $63K needed to reset bulls. Altseason is dead until BTC stabilizes and dominance rolls over."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,383.74",  change: "-2.64%" },
      { name: "Nasdaq",       value: "25,709.43", change: "-4.18%" },
      { name: "Dow",          value: "50,866.78", change: "-1.35%" },
      { name: "VIX",          value: "21.51",     change: "+39.68%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$678.00", change: "Fri close", insight: "Tracks S&P; absorbed the entire Friday rout." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—",        change: "Fri close", insight: "Nasdaq's -4% drop is the worst tape since April 2025." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",        change: "Fri close", insight: "Liquidity vehicle saw heavy put flow into Friday close." },
      { ticker: "VTI",  name: "Total Market",      price: "—",        change: "Fri close", insight: "Broad market exposure took the hit alongside large caps." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",        change: "Fri close", insight: "High-beta innovation names hammered with risk unwind." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",        change: "Fri close", insight: "Chip ETF led the destruction with Nasdaq's worst day." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$34.30",   change: "Fri close", insight: "Tracks BTC's break below $60K; outflows accelerating." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",        change: "Fri close", insight: "Tech sector ETF gutted as AI trade unwinds violently." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$407.97",  change: "Fri close", insight: "Gold-backed ETF down 3% as jobs print lifted yields." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$627.57", change: "Fri close", notable: false, insight: "Held up better than peers; ad business resilient." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$204.04", change: "Fri close", notable: true,  insight: "Chip leader at the center of the AI trade unwind." },
      { ticker: "TSLA",  name: "Tesla",         price: "$418.45", change: "Fri close", notable: false, insight: "Slipped 1.24%, modest decline vs sector carnage." },
      { ticker: "AAPL",  name: "Apple",         price: "$307.34", change: "Fri close", notable: false, insight: "Defensive name still slipped 1.25% on weak tape." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$412.50", change: "Fri close", notable: false, insight: "Mega-cap software held the $412 support level." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",        change: "Fri close", notable: false, insight: "Ad/cloud giant caught in the broader Nasdaq selloff." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",        change: "Fri close", notable: false, insight: "E-commerce/AWS leader sold off with mega-cap tech." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",        change: "Fri close", notable: false, insight: "Streaming leader vulnerable as growth premium compresses." },
      { ticker: "AMD",   name: "AMD",           price: "—",        change: "Fri close", notable: false, insight: "Chip name pulled lower with SOXX's brutal session." },
      { ticker: "PLTR",  name: "Palantir",      price: "$133.89", change: "Fri close", notable: true,  insight: "Slid -5.7% off intraday peak; momentum broken." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",        change: "Fri close", notable: false, insight: "Cybersecurity name dragged by high-multiple software derate." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",        change: "Fri close", notable: false, insight: "Crypto-leveraged equity slammed as BTC broke $60K." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$118.45", change: "Fri close", notable: true,  insight: "Dropped 8% as BTC fell below $60K, leverage unwound." },
      { ticker: "APP",   name: "AppLovin",      price: "—",        change: "Fri close", notable: false, insight: "Ad-tech momentum name caught in the high-beta selloff." },
      { ticker: "SMCI",  name: "Super Micro",   price: "—",        change: "Fri close", notable: false, insight: "AI server play volatile amid chip sector destruction." }
    ],
    trending: [
      { ticker: "VIX",  change: "+39.68%" },
      { ticker: "MSTR", change: "-8.00%" },
      { ticker: "PLTR", change: "-5.70%" },
      { ticker: "NDX",  change: "-4.18%" },
      { ticker: "GLD",  change: "-3.10%" }
    ],
    verdict: "AI trade is in full retreat — SOXX/NDX -4% says the chip premium is being repriced fast. Rotate toward defensives (META held best) and avoid leveraged crypto-equity proxies until BTC stabilizes. Don't buy the dip until VIX rolls back below 18 and yields cool."
  },

  malaysia: {
    klci:   { value: "1,693.43", change: "+0.60%", context: "KLCI closed up Friday before the US carnage hit. Monday gap-down likely as global risk-off and ringgit weakness import pressure." },
    usdmyr: { value: "4.0290",   change: "+0.40%", signal: "Ringgit slips as DXY surges on jobs." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM10.64", change: "Fri close", insight: "OPR steady at 3.00%, NIM resilient; largest bank a defensive anchor." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "RM7.70",  change: "Fri close", insight: "Regional ASEAN footprint cushions; trades at undemanding P/B." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",   price: "—",        change: "Fri close", insight: "Defensive retail-deposit franchise, lowest NPL among peers." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",      price: "—",        change: "Fri close", insight: "Highest dividend yield in sector, capital ratios remain strong." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",        price: "—",        change: "Fri close", insight: "Data center power demand thesis intact, regulated returns." },
      { ticker: "INARI",  name: "Inari (0138.KL)",         price: "RM2.32",  change: "Fri close", insight: "Semi cycle tied to NVDA AI — vulnerable Monday after chip rout." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",        price: "—",        change: "Fri close", insight: "Telco consolidation thesis still in play, dividend support." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",       change: "Fri close", insight: "Defensive healthcare, ASEAN growth and ringgit hedge." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",          price: "—",        change: "Fri close", insight: "Digital services concession with growing ASEAN expansion." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",         price: "—",        change: "Fri close", insight: "5G rollout monetization plus stable dividend yield profile." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No fresh Bursa IPO data surfaced this morning. Monitor MITI/Bursa announcements for upcoming Main Market and ACE filings." }
    ],
    verdict: "Ringgit at 4.03 imports inflation and pressures BNM patience on OPR. Inari is the most at-risk Monday — semis tied to NVDA's bleed. Stay defensive: banks (MAY, PBBANK) and IHH lead a watch-list bias on any flush."
  },

  news: [
    { headline: "Bitcoin breaks below $60K — worst week since FTX collapse",    source: "CoinDesk",          time: "12h ago", sentiment: "BEARISH", meaning: "BTC bull cycle structure broken; leverage unwind dominates." },
    { headline: "Nasdaq sinks 4.18% in worst day since April 2025 chip rout",   source: "CNBC",              time: "14h ago", sentiment: "BEARISH", meaning: "AI premium re-rated; semis lead high-beta de-risking lower." },
    { headline: "Gold tumbles 3.1% as May jobs report keeps Fed hawkish",       source: "Yahoo",             time: "16h ago", sentiment: "BEARISH", meaning: "Hot jobs print kills rate-cut hopes; yields up." },
    { headline: "VIX spikes 40% to 21.51 — fear gauge highest in months",       source: "CBOE",              time: "14h ago", sentiment: "BEARISH", meaning: "Volatility regime shift; protection bids overwhelm Friday close." },
    { headline: "MicroStrategy drops 8% as Bitcoin retests $60K floor",         source: "CNBC",              time: "13h ago", sentiment: "BEARISH", meaning: "Leveraged BTC proxy unwinds; equity follows crypto down." },
    { headline: "USD/MYR climbs to 4.0290 on dollar surge",                     source: "Trading Economics", time: "10h ago", sentiment: "BEARISH", meaning: "Ringgit weakness imports inflation; BNM hands tied." },
    { headline: "KLCI closes +0.60% at 1,693 before US selloff hit",            source: "Yahoo SG",          time: "18h ago", sentiment: "WATCH",   meaning: "Friday gain at risk Monday; gap-down opening probable." },
    { headline: "Saylor hints more BTC buys as bitcoin tests $60K",             source: "Crypto News",       time: "13h ago", sentiment: "BULLISH", meaning: "Strategic accumulator signals support at psychological line." }
  ],

  goldSummary: {
    "Price":  { value: "$4,365.30", change: "-3.10%", note: "Hot jobs print sinks gold sharply." },
    "Open":   { value: "$4,503.00", change: "",       note: "Friday open" },
    "High":   { value: "$4,505.00", change: "",       note: "Day high" },
    "Low":    { value: "$4,331.00", change: "",       note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,643.67" },
      { label: "R2",    value: "$4,574.33" },
      { label: "R1",    value: "$4,469.67" },
      { label: "Pivot", value: "$4,400.33" },
      { label: "S1",    value: "$4,295.67" },
      { label: "S2",    value: "$4,226.33" },
      { label: "S3",    value: "$4,121.67" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,574.33" },
      { label: "R2",    value: "$4,507.86" },
      { label: "R1",    value: "$4,466.80" },
      { label: "Pivot", value: "$4,400.33" },
      { label: "S1",    value: "$4,333.86" },
      { label: "S2",    value: "$4,292.80" },
      { label: "S3",    value: "$4,226.33" }
    ],
    camarilla: [
      { label: "R4", value: "$4,460.70" },
      { label: "R3", value: "$4,412.85" },
      { label: "R2", value: "$4,396.90" },
      { label: "R1", value: "$4,380.95" },
      { label: "S1", value: "$4,349.05" },
      { label: "S2", value: "$4,333.10" },
      { label: "S3", value: "$4,317.15" },
      { label: "S4", value: "$4,269.30" }
    ],
    note: "Gold at $4,365 sits below classic pivot $4,400 — bearish bias; reclaim of pivot needed to neutralize."
  }
};
