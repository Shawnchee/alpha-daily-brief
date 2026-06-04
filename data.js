window.CRUCIX_DATA = {
  generated: "Thu, 04 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off morning — BTC sliding below $64K and gold pulling back as DXY pushes higher on Mideast oil shock.",

  macro: {
    dxy:      { value: "99.51",   change: "+0.33%", signal: "Dollar firms on safe-haven Mideast bid" },
    gold:     { value: "$4,466.95", change: "-1.17%", signal: "Profit-taking after record run; uptrend intact" },
    oil:      { value: "$96.19",  change: "+2.59%", signal: "Iran tensions keep crude bid premium" },
    silver:   { value: "$73.58",  change: "-2.61%", signal: "Industrial weakness drags silver harder than gold" },
    yield10y: { value: "4.499%",  change: "+4bps",  signal: "Yields climb on sticky labor data" },
    vix:      { value: "15.40",   change: "-4.11%", signal: "Volatility muted despite crypto carnage" },
    usdmyr:   { value: "4.088",   change: "+0.20%", signal: "Ringgit soft on dollar strength" },
    sp500:    { value: "7,584.31", change: "+0.41%", signal: "Equities shrug off bond, crypto wobble" },
    verdict: "DXY at 99.5 plus a 4.50% 10Y is a clear headwind for risk assets, even as VIX stays calm at 15. Gold's pullback is technical after a parabolic move — structural bid intact while oil rips on Iran. Stocks holding up but breadth narrowing; crypto and KLSE the weakest links until dollar rolls."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance rising as alts bleed" },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$64,200", marketCap: "$1.27T", change1h: "N/A", change24h: "-5.5%", change7d: "N/A", insight: "BTC broke $63K intraday — weakest since February as leverage flushes. $60K is the line in the sand; lose it and $55K opens up." },
      { name: "Ethereum", symbol: "ETH", price: "$2,060.24", marketCap: "$248B", change1h: "N/A", change24h: "-6.2%", change7d: "N/A", insight: "ETH back to $2K psychological support with ETF flows turning negative. Underperformance vs BTC continues; needs $2,200 reclaim to flip bias." },
      { name: "Solana",   symbol: "SOL", price: "$69.28",  marketCap: "$32B",  change1h: "N/A", change24h: "-8.1%", change7d: "N/A", insight: "SOL leading downside as meme rotation unwinds and network activity cools. $60 is major support — below that, $48 next." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",     change24h: "-7.2%", note: "Below 200-day EMA; trend broken." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000444", change24h: "-9.4%", note: "Social interest waning fast." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000062",  change24h: "-6.8%", note: "Wedged between 50/100-day EMAs." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",   note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",   note: "Speculative SOL memecoin." }
    ],
    verdict: "Hard risk-off across crypto — BTC -5.5%, alts -8% as Mideast escalation and rising yields hammer leverage. $60K BTC is the must-hold; below that, capitulation likely flushes to $55K. Altseason signal: dead — stay defensive until DXY rolls or BTC reclaims $68K."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,584.31",  change: "+0.41%" },
      { name: "Nasdaq",       value: "26,830.96", change: "-0.09%" },
      { name: "Dow",          value: "51,561.93", change: "+1.73%" },
      { name: "VIX",          value: "15.40",     change: "-4.11%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—",       change: "—",      insight: "Tracks SPX +0.41%; large-cap leadership intact." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$744.21", change: "-0.26%", insight: "Mega-cap tech flat; AI names mixed under valuation scrutiny." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$754.24", change: "-0.70%", insight: "Slight divergence vs index — late-day weakness in mega caps." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Broad market tracks SPX; small caps the laggard." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",      insight: "High-beta growth pressured by 4.50% 10Y yield." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$615.68", change: "+1.76%", insight: "Chips lead — AI capex narrative supersedes broader weakness." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$35.67",  change: "-5.50%", insight: "Tracking BTC lower; redemptions accelerating this week." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Tech mixed — semis up, software soft on rate fears." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$417.47", change: "-1.17%", insight: "Profit-taking after record; uptrend structure unbroken." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$597.63",  change: "-0.47%", notable: false, insight: "Holds $600 zone; AI ad-targeting story still the bull case." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$222.82",  change: "-0.69%", notable: false, insight: "Consolidates near highs; semis ETF strong supports thesis." },
      { ticker: "TSLA",  name: "Tesla",         price: "$423.74",  change: "+1.89%", notable: true,  insight: "Outperformer — robotaxi/AI narrative absorbing macro pressure." },
      { ticker: "AAPL",  name: "Apple",         price: "$245.00",  change: "+0.10%", notable: false, insight: "Range-bound ahead of WWDC; iPhone AI cycle next catalyst." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$498.00",  change: "+3.11%", notable: true,  insight: "Strong bid — Azure AI revenue print continues to expand." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$198.00",  change: "+0.70%", notable: false, insight: "Search resilience and Gemini traction keeping bid firm." },
      { ticker: "AMZN",  name: "Amazon",        price: "$232.00",  change: "+2.51%", notable: true,  insight: "AWS strength + retail margin expansion driving outperformance." },
      { ticker: "NFLX",  name: "Netflix",       price: "$83.33",   change: "-2.94%", notable: false, insight: "Insider selling weighs; subscriber growth narrative cooling." },
      { ticker: "AMD",   name: "AMD",           price: "$165.00",  change: "+3.99%", notable: true,  insight: "MI400 traction lifting sentiment; semis ETF confirms bid." },
      { ticker: "PLTR",  name: "Palantir",      price: "$155.00",  change: "+0.80%", notable: false, insight: "Q1 +85% revenue strong but valuation gating further upside." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "$405.00",  change: "-1.20%", notable: false, insight: "Cybersec premium intact but margin pressure post-incident lingers." },
      { ticker: "COIN",  name: "Coinbase",      price: "$235.00",  change: "-6.40%", notable: true,  insight: "Heavy red on crypto carnage — high-beta to BTC moves." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$295.00",  change: "-9.10%", notable: true,  insight: "Saylor sale shocker plus BTC drop — double whammy, PT cut 20%." },
      { ticker: "APP",   name: "AppLovin",      price: "$385.00",  change: "+1.10%", notable: false, insight: "AI ad-tech leverage continues to compound earnings." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$58.00",   change: "+2.30%", notable: false, insight: "Riding AI server demand alongside SOXX strength." }
    ],
    trending: [
      { ticker: "MSTR", change: "-9.10%" },
      { ticker: "COIN", change: "-6.40%" },
      { ticker: "AMD",  change: "+3.99%" },
      { ticker: "MSFT", change: "+3.11%" },
      { ticker: "NFLX", change: "-2.94%" }
    ],
    verdict: "AI trade bifurcating — semis and hyperscalers (NVDA/MSFT/AMD/SOXX) holding bid while crypto-adjacent names (COIN/MSTR/IBIT) get crushed. Sector rotation favors quality compounders over high-beta speculation as 10Y pushes 4.50%. Own mega-cap AI infrastructure; avoid leveraged crypto proxies until BTC stabilizes."
  },

  malaysia: {
    klci:   { value: "1,592",  change: "-0.25%", context: "Wednesday's close soft on regional risk-off and ringgit weakness. Thursday open likely lower tracking US tech mixed and crypto bleed; watch 1,580 support." },
    usdmyr: { value: "4.088",  change: "+0.20%", signal: "Ringgit pressured by DXY 99.5 strength" },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM10.42", change: "-0.19%", insight: "OPR steady at 3.00% supports NIMs; defensive bid with 5.7% yield." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "RM7.85",  change: "-0.13%", insight: "Regional ASEAN footprint cushioning domestic margin pressure." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "RM4.62",  change: "-0.22%", insight: "Defensive mortgage book and lowest-cost funding keep it the anchor bank." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "RM7.10",  change: "+0.14%", insight: "Highest CET1 ratio in sector — capital return story intact." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "RM15.40", change: "-0.13%", insight: "Data center utility tailwind plus RP4 visibility underpins re-rating." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "RM2.40",  change: "+0.42%", insight: "Semi cycle lift with SOXX +1.76% and NVDA stability supportive." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "RM2.45",  change: "-0.41%", insight: "Restructuring overhang persists; Indonesia merger key catalyst." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "RM7.18",  change: "+0.28%", insight: "Defensive healthcare bid as risk-off rotates into earnings stability." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "RM0.92",  change: "-1.07%", insight: "Digital services pressure on contract renewal uncertainty." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "RM3.55",  change: "+0.00%", insight: "5G monetization slow; defensive yield play in choppy tape." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No major IPO catalyst tracked this morning. Watch ACE Market listings pipeline for tech-related debuts." }
    ],
    verdict: "Ringgit at 4.09 stays soft on DXY 99.5 — caps any KLCI bounce. Inari is the best risk-reward as semis lift with SOXX and NVDA holds firm. Thursday Bursa likely opens lower tracking risk-off but defensive yields (banks, IHH) should cushion the index near 1,580."
  },

  news: [
    { headline: "Bitcoin selloff continues as prices slide below $63,000 first time since February", source: "CoinDesk",   time: "2h ago",  sentiment: "BEARISH", meaning: "Leverage flush ongoing; key $60K support next to test." },
    { headline: "Strategy (MSTR) leads crypto stocks lower after Saylor signals first BTC sale",     source: "CNBC",       time: "4h ago",  sentiment: "BEARISH", meaning: "Sentiment shock — corporate BTC narrative loses anchor buyer." },
    { headline: "WTI crude jumps above $96 as US-Iran tensions escalate",                            source: "Bloomberg",  time: "3h ago",  sentiment: "WATCH",   meaning: "Energy stocks bid; inflation prints face fresh upside risk." },
    { headline: "10-year Treasury yield climbs to 4.50% on hot labor data",                          source: "CNBC",       time: "5h ago",  sentiment: "BEARISH", meaning: "Higher discount rates pressure growth equities and crypto." },
    { headline: "JP Morgan reiterates FBM KLCI year-end target of 1,800",                            source: "The Edge",   time: "6h ago",  sentiment: "BULLISH", meaning: "13% upside path keeps domestic institutional flow constructive." },
    { headline: "Gold pulls back from record above $4,500 on profit-taking",                         source: "Reuters",    time: "5h ago",  sentiment: "NEUTRAL", meaning: "Healthy consolidation; structural haven bid still intact." },
    { headline: "AMD MI400 chip orders pick up — Microsoft and Meta expand allocations",             source: "Reuters",    time: "8h ago",  sentiment: "BULLISH", meaning: "AI capex story broadens beyond Nvidia; semis bid sustained." },
    { headline: "Bank Negara holds OPR steady at 3.00%, ringgit pressured by DXY",                   source: "The Star",   time: "12h ago", sentiment: "NEUTRAL", meaning: "Banks margin neutral; FX weakness limits foreign equity inflows." }
  ],

  goldSummary: {
    "Price":  { value: "$4,466.95", change: "-1.17%", note: "Profit-taking after parabolic record run" },
    "Open":   { value: "$4,519.90", change: "", note: "" },
    "High":   { value: "$4,525.00", change: "", note: "Day high" },
    "Low":    { value: "$4,455.00", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,579.64" },
      { label: "R2",    value: "$4,552.32" },
      { label: "R1",    value: "$4,509.64" },
      { label: "Pivot", value: "$4,482.32" },
      { label: "S1",    value: "$4,439.64" },
      { label: "S2",    value: "$4,412.32" },
      { label: "S3",    value: "$4,369.64" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,552.32" },
      { label: "R2",    value: "$4,525.58" },
      { label: "R1",    value: "$4,509.06" },
      { label: "Pivot", value: "$4,482.32" },
      { label: "S1",    value: "$4,455.58" },
      { label: "S2",    value: "$4,439.06" },
      { label: "S3",    value: "$4,412.32" }
    ],
    camarilla: [
      { label: "R4", value: "$4,505.45" },
      { label: "R3", value: "$4,486.20" },
      { label: "R2", value: "$4,479.78" },
      { label: "R1", value: "$4,473.37" },
      { label: "S1", value: "$4,460.53" },
      { label: "S2", value: "$4,454.12" },
      { label: "S3", value: "$4,447.70" },
      { label: "S4", value: "$4,428.45" }
    ],
    note: "Gold at $4,467 sits below the classic pivot of $4,482 — short-term bias bearish; reclaim of pivot needed for bullish flip."
  }
};
