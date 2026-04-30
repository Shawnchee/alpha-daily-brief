window.CRUCIX_DATA = {
  generated: "Thu, 30 Apr 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on tone fading as BTC stalls near $76K and 10Y yield jumps 8bps on hawkish Fed signal.",

  macro: {
    dxy:      { value: "98.92",   change: "-0.05%", signal: "Dollar soft despite hawkish Fed undertone." },
    gold:     { value: "$4,270",  change: "+0.87%", signal: "Bullion bid on geopolitics and yields." },
    oil:      { value: "$107.20", change: "+1.85%", signal: "WTI 7-week high; Hormuz risk premium." },
    silver:   { value: "$42.10",  change: "+0.95%", signal: "Tracking gold; industrial bid firm." },
    yield10y: { value: "4.43%",   change: "+8bps",  signal: "Yields jump on Fed hawkish tone." },
    vix:      { value: "18.33",   change: "-2.55%", signal: "Vol bleeds; complacency creeping in." },
    usdmyr:   { value: "4.10",    change: "-0.10%", signal: "Ringgit firm on softer dollar." },
    sp500:    { value: "7,135.95", change: "-0.04%", signal: "Index pauses near record highs." },
    verdict: "DXY soft yet 10Y yields jumped 8bps — a hawkish Fed risk-off cocktail. Gold and oil bid signals geopolitical unease, while VIX collapse shows equity complacency. Crypto vulnerable; AI/megacaps face multiple compression; KLSE supported by weak USD."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady; alts lagging." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$76,500", marketCap: "$1.51T",  change1h: "N/A", change24h: "+0.70%", change7d: "N/A", insight: "BTC reversed a 3-day slide above $76K but failed twice at $80K resistance. Spot ETF outflows for 3 sessions signal fading institutional bid." },
      { name: "Ethereum", symbol: "ETH", price: "$2,053.02", marketCap: "$248B", change1h: "N/A", change24h: "-0.50%", change7d: "N/A", insight: "ETH stuck below $2,100 as L2 narrative loses traction. SOL rotation pressure persists despite April BTC recovery." },
      { name: "Solana",   symbol: "SOL", price: "$83.02", marketCap: "$40B", change1h: "N/A", change24h: "-1.00%", change7d: "N/A", insight: "SOL slipped 1% as memecoin volume on Solana cooled. Watching $80 support; loss invites $72 retest." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1060",     change24h: "+3.20%", note: "RSI 71; bullish breakout brewing." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000380", change24h: "+0.50%", note: "Stuck between key EMAs." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000630", change24h: "+1.10%", note: "Testing upper boundary breakout." },
      { name: "Bonk",      symbol: "BONK", price: "—",            change24h: "N/A",     note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "—",            change24h: "N/A",     note: "Speculative SOL memecoin." }
    ],
    verdict: "BTC failure at $80K twice in a week and ETF outflows scream caution — risk-off bias. $75K is the line; loss opens $70K. Altseason on hold until BTC reclaims $80K decisively."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,135.95",  change: "-0.04%" },
      { name: "Nasdaq",       value: "24,673.24", change: "+0.04%" },
      { name: "Dow",          value: "48,861.81", change: "-0.57%" },
      { name: "VIX",          value: "18.33",     change: "-2.55%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$654.33", change: "-0.04%", insight: "Tracks S&P; record-high zone, momentum stalling." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$662.23", change: "+0.04%", insight: "Megacap tech holding gains post-earnings deluge." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",        change: "—",       insight: "Mirrors S&P 500; flat near all-time highs." },
      { ticker: "VTI",  name: "Total Market",      price: "—",        change: "—",       insight: "Broad-market exposure; matches S&P direction." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",        change: "—",       insight: "Innovation names sensitive to higher 10Y yields." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$460.94", change: "-2.10%",  insight: "Chip ETF pressured by NVDA TPU competition fears." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$43.89",  change: "+0.70%",  insight: "Tracks BTC; outflows three days running." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",        change: "—",       insight: "Tech sector mixed post Big-Tech earnings." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$399.07", change: "+0.87%",  insight: "Gold ETF rides bullion to record bid." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$671.34", change: "-1.07%", notable: false, insight: "Sold post-earnings despite ad strength; capex worries linger." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$199.90", change: "-4.36%", notable: true,  insight: "Sharp drop on Google TPU sale plan; AI moat questioned." },
      { ticker: "TSLA",  name: "Tesla",         price: "$372.30", change: "+0.50%", notable: false, insight: "Range-bound 368-375; awaits robotaxi catalyst." },
      { ticker: "AAPL",  name: "Apple",         price: "—",        change: "—",       notable: false, insight: "Strong earnings reported; iPhone cycle strength supports premium." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$418.17", change: "+0.30%", notable: false, insight: "Azure AI bookings drove a Big-Tech beat this week." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",        change: "—",       notable: true,  insight: "TPU monetization plan rerates Alphabet AI infrastructure value." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",        change: "—",       notable: false, insight: "AWS growth re-acceleration cited in fresh quarterly print." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",        change: "—",       notable: false, insight: "Hastings exit overshadows steady subscriber and ad growth." },
      { ticker: "AMD",   name: "AMD",           price: "—",        change: "—",       notable: false, insight: "MI series demand intact; chip sector pressure today." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",        change: "—",       notable: false, insight: "AIP enterprise pipeline fuels premium AI/defense valuation." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",        change: "—",       notable: false, insight: "Falcon platform cyber spend resilient through any cycle." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",        change: "—",       notable: false, insight: "Beta to BTC; weak ETF flows cap upside near-term." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",        change: "—",       notable: true,  insight: "AIMCo $219M stake; first sovereign-style BTC allocation noted." },
      { ticker: "APP",   name: "AppLovin",      price: "—",        change: "—",       notable: false, insight: "AXON ad-tech engine continues to print outsized beats." },
      { ticker: "SMCI",  name: "Super Micro",   price: "—",        change: "—",       notable: false, insight: "GPU server demand strong; margin pressure key risk." }
    ],
    trending: [
      { ticker: "NVDA", change: "-4.36%" },
      { ticker: "META", change: "-1.07%" },
      { ticker: "DOW",  change: "-0.57%" },
      { ticker: "VIX",  change: "-2.55%" },
      { ticker: "MSFT", change: "+0.30%" }
    ],
    verdict: "AI trade fractured — NVDA -4.4% on Google TPU news challenges single-stock dominance. Rotate from chip pure-plays into hyperscalers (MSFT, GOOGL) owning their silicon. Avoid high-multiple unprofitable tech as 10Y yields punch higher."
  },

  malaysia: {
    klci:   { value: "—", change: "N/A", context: "KLCI close not pulled from feed; ringgit strength and gold bid favour Malaysia exporters and miners. Friday tone likely supportive given softer DXY." },
    usdmyr: { value: "4.10", change: "-0.10%", signal: "Ringgit firm; softer USD a tailwind." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM11.14", change: "+1.08%", insight: "Maybank firm on stable OPR and strong dividend yield." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "—",        change: "N/A",     insight: "Regional banking franchise leveraged to ASEAN growth." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",        change: "N/A",     insight: "Defensive bank; consumer mortgage book remains resilient." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",        change: "N/A",     insight: "Trades at value multiple with steady NIM trajectory." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",        change: "N/A",     insight: "Data-centre demand a structural tailwind for power utility." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—",        change: "N/A",     insight: "Inari hostage to NVDA sentiment; -4.4% chip wobble overnight." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",        change: "N/A",     insight: "Telco consolidation thesis intact; deleveraging on track." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",        change: "N/A",     insight: "Defensive healthcare with regional growth optionality." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",        change: "N/A",     insight: "Digital concession services compounder; election cycle catalyst." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",        change: "N/A",     insight: "5G access pricing clarity supports steady FCF outlook." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No fresh IPO names surfaced from morning scan; pipeline focus remains on tech and consumer names." }
    ],
    verdict: "Ringgit firm at 4.10 supports importers and consumer plays. Maybank +1.08% is the standout bid. Bursa supported on softer DXY but Inari faces NVDA-driven chip-cycle drag."
  },

  news: [
    { headline: "Bitcoin reverses 3-day slide, climbs above $76K despite $75M long liquidations", source: "Bitcoin.com", time: "4h ago",  sentiment: "BULLISH",  meaning: "BTC defending $75K key support; squeeze-led bounce, not buying." },
    { headline: "NVIDIA falls 4.36% as Google announces plans to sell TPU chips externally",       source: "CNBC",        time: "6h ago",  sentiment: "BEARISH",  meaning: "Direct AI chip competitor erodes NVDA monopoly; sector rerate." },
    { headline: "Bitcoin spot ETFs see $819.7M inflows on US-Iran ceasefire optimism",             source: "CryptoBriefing", time: "8h ago", sentiment: "BULLISH",  meaning: "Geopolitical relief drove fresh institutional crypto allocation flows." },
    { headline: "AIMCo Canadian pension grabs 1.38M MSTR shares worth $219M",                      source: "Bitcoin.com", time: "10h ago", sentiment: "BULLISH",  meaning: "Sovereign-style fund signals legitimacy of BTC treasury thesis." },
    { headline: "10-year Treasury yield jumps 8 bps to 4.43% on hawkish Fed undertone",            source: "Investing",   time: "5h ago",  sentiment: "BEARISH",  meaning: "Higher discount rate pressures duration and growth multiples." },
    { headline: "WTI crude hits 7-week high above $107 on Strait of Hormuz tensions",              source: "FXStreet",    time: "7h ago",  sentiment: "WATCH",    meaning: "Energy spike reignites inflation worry; Fed cut bets fade." },
    { headline: "S&P 500 and Nasdaq cap best month for stocks since 2020",                          source: "Yahoo",       time: "12h ago", sentiment: "BULLISH",  meaning: "Equities ride strong April; momentum may exhaust." },
    { headline: "Reed Hastings to leave Netflix; succession plan in focus",                         source: "Motley Fool", time: "1d ago",  sentiment: "NEUTRAL",  meaning: "Founder exit symbolic; operational continuity already in place." }
  ],

  goldSummary: {
    "Price":   { value: "$4,270",  change: "+0.87%", note: "Record-bid zone; geopolitics and yields." },
    "Open":    { value: "$4,234",  change: "", note: "" },
    "High":    { value: "$4,275",  change: "", note: "Day high" },
    "Low":     { value: "$4,150",  change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,414.33" },
      { label: "R2",    value: "$4,344.67" },
      { label: "R1",    value: "$4,289.33" },
      { label: "Pivot", value: "$4,219.67" },
      { label: "S1",    value: "$4,164.33" },
      { label: "S2",    value: "$4,094.67" },
      { label: "S3",    value: "$4,039.33" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,344.67" },
      { label: "R2",    value: "$4,296.92" },
      { label: "R1",    value: "$4,267.42" },
      { label: "Pivot", value: "$4,219.67" },
      { label: "S1",    value: "$4,171.92" },
      { label: "S2",    value: "$4,142.42" },
      { label: "S3",    value: "$4,094.67" }
    ],
    camarilla: [
      { label: "R4", value: "$4,302.75" },
      { label: "R3", value: "$4,268.38" },
      { label: "R2", value: "$4,256.92" },
      { label: "R1", value: "$4,245.46" },
      { label: "S1", value: "$4,222.54" },
      { label: "S2", value: "$4,211.08" },
      { label: "S3", value: "$4,199.62" },
      { label: "S4", value: "$4,165.25" }
    ],
    note: "Gold trades at $4,270, above classic pivot $4,219.67 — bullish bias intact while above pivot."
  }
};
