window.CRUCIX_DATA = {
  generated: "Wed, 24 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off as gold tumbles 3% and Nasdaq sells 2.2%; AI trade cooling, crypto bleeding alongside equities.",

  macro: {
    dxy:      { value: "99.10", change: "+0.35%", signal: "DXY firming on hawkish Fed repricing." },
    gold:     { value: "$3,995", change: "-3.00%", signal: "Hawkish Fed bets and Mideast calm." },
    oil:      { value: "$68.20", change: "-2.10%", signal: "Strait of Hormuz transit normalising." },
    silver:   { value: "$36.50", change: "-2.40%", signal: "Industrial metal tracking gold lower." },
    yield10y: { value: "4.45%", change: "-3bps",  signal: "Yields ease as oil-led CPI fears fade." },
    vix:      { value: "19.29", change: "-1.03%", signal: "Vol contained despite tech-led selloff." },
    usdmyr:   { value: "4.10", change: "+0.15%", signal: "Ringgit pinned near multi-month lows." },
    sp500:    { value: "7,365.46", change: "-1.44%", signal: "Mega-cap tech leadership rolling over." },
    verdict: "Stronger DXY plus rising rate-hike odds crushed gold and pressured risk assets. VIX stayed tame but Nasdaq's 2.2% drop confirms AI-trade exhaustion. Crypto and KLSE export names face headwinds while ringgit weakness pressures Bursa flows."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady as alts also weak." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$61,500", marketCap: "$1.22T",  change1h: "N/A", change24h: "-1.04%", change7d: "N/A", insight: "BTC broke $62k support amid hawkish Fed and ETF outflows. 10x Research warns $55k bottom possible by August-October." },
      { name: "Ethereum", symbol: "ETH", price: "$2,178", marketCap: "$262B",  change1h: "N/A", change24h: "-1.66%", change7d: "N/A", insight: "ETH underperforming BTC again as risk-off persists. Bulls need $2,250 reclaim to negate trend break." },
      { name: "Solana",   symbol: "SOL", price: "$78.97", marketCap: "$38B",  change1h: "N/A", change24h: "-1.43%", change7d: "N/A", insight: "SOL holding $78 floor but trend deteriorating with broader alts. Memecoin volume on Solana cooling notably." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065", change24h: "-2.20%", note: "Below 200-day EMA; bearish bias." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000095", change24h: "-1.80%", note: "Consolidating above 50-day EMA." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000061", change24h: "-2.00%", note: "Wedged between 50/100-day EMAs." },
      { name: "Bonk",      symbol: "BONK", price: "N/A", change24h: "N/A", note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A", change24h: "N/A", note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-off mode confirmed with BTC under $62k key support. Watch $60k psychological floor — break invites $55k flush. Altseason dead until BTC stabilises and DXY rolls over."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,365.46", change: "-1.44%" },
      { name: "Nasdaq",       value: "25,587.04", change: "-2.21%" },
      { name: "Dow",          value: "51,666.84", change: "-0.09%" },
      { name: "VIX",          value: "19.29", change: "-1.03%" },
      { name: "Russell 2000", value: "N/A",  change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$676.34", change: "-1.44%", insight: "Cheapest broad S&P exposure; pullback creates accumulation zone." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$713.65", change: "-2.21%", insight: "Tech-heavy QQQ leading the selloff as AI names cool off." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—", change: "-1.44%", insight: "Tracks S&P closely; same accumulation thesis as VOO." },
      { ticker: "VTI",  name: "Total Market",      price: "—", change: "N/A", insight: "Broadest US equity exposure including small caps for diversification." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—", change: "N/A", insight: "High-beta growth basket — avoid until rate fears settle." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—", change: "N/A", insight: "Chip ETF vulnerable as AI-trade leadership wobbles." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$34.17", change: "-1.04%", insight: "Spot BTC ETF tracks Bitcoin; bleeding with BTC under $62k." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—", change: "N/A", insight: "Tech sector SPDR mirroring QQQ's 2%+ decline." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$373.36", change: "-3.00%", insight: "Gold ETF crushed as hawkish Fed repricing favours dollar." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$562.20", change: "-0.29%", notable: false, insight: "Relative outperformer as ad business stays resilient amid tech selloff." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$197.72", change: "-2.80%", notable: true, insight: "AI bellwether leading Nasdaq lower; watch $190 key support." },
      { ticker: "TSLA",  name: "Tesla",         price: "$381.61", change: "-5.79%", notable: true, insight: "Brutal -5.8% drop on AI-trade unwind and EV demand worries." },
      { ticker: "AAPL",  name: "Apple",         price: "$298.01", change: "-1.20%", notable: false, insight: "Defensive mega-cap held up better than peers in the rout." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$412.67", change: "-0.81%", notable: false, insight: "Cloud and AI capex story still intact despite sector pullback." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—", change: "N/A", notable: false, insight: "Search and YouTube monetisation underpin relative stability." },
      { ticker: "AMZN",  name: "Amazon",        price: "$234.11", change: "+0.57%", notable: true, insight: "Rare green print on AWS resilience and retail flows." },
      { ticker: "NFLX",  name: "Netflix",       price: "$72.82", change: "-0.08%", notable: false, insight: "Streaming ad-tier momentum keeping shares stable." },
      { ticker: "AMD",   name: "AMD",           price: "$205.27", change: "+2.91%", notable: true, insight: "Bucking sector weakness on share-gain narrative versus Nvidia." },
      { ticker: "PLTR",  name: "Palantir",      price: "—", change: "N/A", notable: false, insight: "Wolfe Research upgraded with $190 target on enterprise AI growth." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—", change: "N/A", notable: false, insight: "Cybersecurity remains a defensive AI-adjacent theme." },
      { ticker: "COIN",  name: "Coinbase",      price: "—", change: "N/A", notable: false, insight: "Crypto exchange revenue pressured as BTC breaks $62k." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—", change: "N/A", notable: false, insight: "Down ~80% from peak as Bitcoin treasury thesis stressed." },
      { ticker: "APP",   name: "AppLovin",      price: "—", change: "N/A", notable: false, insight: "Ad-tech name caught in broader growth-stock derisking." },
      { ticker: "SMCI",  name: "Super Micro",   price: "—", change: "N/A", notable: false, insight: "AI server backlog growth driving momentum despite trust concerns." }
    ],
    trending: [
      { ticker: "TSLA", change: "-5.79%" },
      { ticker: "AMD",  change: "+2.91%" },
      { ticker: "NVDA", change: "-2.80%" },
      { ticker: "AMZN", change: "+0.57%" },
      { ticker: "MSFT", change: "-0.81%" }
    ],
    verdict: "AI trade cooling — Nasdaq -2.2%, Tesla -5.8%, Nvidia under pressure. Rotation favors defensives (AAPL, AMZN) and beneficiaries of share-shift narratives (AMD). Avoid high-beta growth and crypto-proxy names until BTC stabilises."
  },

  malaysia: {
    klci:   { value: "1,555", change: "-0.30%", context: "KLCI consolidating near multi-month lows as ringgit weakness deters foreign flows. Wednesday open likely soft tracking US tech selloff." },
    usdmyr: { value: "4.10", change: "+0.15%", signal: "Ringgit pressured by hawkish Fed repricing." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM10.20", change: "-0.20%", insight: "OPR steady at 3.00% supports NIM; dividend yield ~6% defensive anchor." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "RM7.85", change: "-0.30%", insight: "Regional ASEAN exposure offers growth optionality versus pure-play Malaysian banks." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",   price: "RM4.55", change: "-0.10%", insight: "Defensive low-beta name preferred by funds during risk-off episodes." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",      price: "RM6.80", change: "-0.20%", insight: "Higher dividend payout post-strategic review supports valuation re-rating." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",        price: "RM14.50", change: "-0.10%", insight: "Data centre energy demand thesis intact; defensive utility yield ~3%." },
      { ticker: "INARI",  name: "Inari (0138.KL)",         price: "RM2.50", change: "-1.50%", insight: "OSAT cycle vulnerable as Nvidia weakness signals AI capex pause." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",        price: "RM2.45", change: "+0.20%", insight: "Telco consolidation narrative supports re-rating despite weak earnings momentum." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "RM6.95", change: "+0.10%", insight: "Defensive healthcare with medical tourism tailwind from ringgit weakness." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",          price: "RM0.95", change: "-0.50%", insight: "Government concession renewals key catalyst for digital services play." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",         price: "RM3.80", change: "+0.00%", insight: "5G monetisation slow; high dividend offsets limited capital upside." }
    ],
    ipos: [
      { name: "Watch upcoming Bursa listings", sector: "Mixed", price: "—", listingDate: "—", status: "Upcoming", note: "Bursa IPO pipeline thinning as risk-off mood reduces appetite. Monitor mainboard filings via Bursa announcements." }
    ],
    verdict: "Ringgit weakness near 4.10 hurts foreign flows but helps exporters like IHH and gloves. Best long-term name: Tenaga on data-centre demand. Wednesday Bursa likely soft following Wall Street tech rout."
  },

  news: [
    { headline: "Gold tumbles 3% below $4,000 on hawkish Fed bets", source: "Trading Economics", time: "2h ago", sentiment: "BEARISH", meaning: "Hawkish Fed pivot pressures rate-sensitive assets including crypto." },
    { headline: "Bitcoin breaks below $62k as ETF outflows accelerate", source: "CoinDesk", time: "3h ago", sentiment: "BEARISH", meaning: "Crypto bleeding alongside equities; watch $60k psychological floor." },
    { headline: "10x Research: BTC could fall to $55k before bottom", source: "CoinDesk", time: "4h ago", sentiment: "BEARISH", meaning: "Bearish call adds pressure; trader positioning leaning defensive." },
    { headline: "Nasdaq sheds 2.2% as Tesla drops 5.8% on AI unwind", source: "Yahoo Finance", time: "5h ago", sentiment: "BEARISH", meaning: "Mega-cap tech leadership rolling over; rotation defensive." },
    { headline: "US-Iran tensions ease, oil drops sub-$70", source: "Reuters", time: "6h ago", sentiment: "NEUTRAL", meaning: "Lower oil eases inflation but hurts energy names broadly." },
    { headline: "Super Micro surges on new AI server platform launch", source: "Motley Fool", time: "1d ago", sentiment: "BULLISH", meaning: "AI infra demand intact even as headline tech sells off." },
    { headline: "USD/MYR holds near 4.10 as Fed hike odds rise", source: "Trading Economics", time: "8h ago", sentiment: "BEARISH", meaning: "Ringgit weakness pressures Bursa foreign-fund inflows further." },
    { headline: "Palantir upgraded by Wolfe with $189 target", source: "Investing.com", time: "1d ago", sentiment: "BULLISH", meaning: "Enterprise AI growth story remains intact amid sector pullback." }
  ],

  goldSummary: {
    "Price":  { value: "$3,995", change: "-3.00%", note: "Lowest since November 2025." },
    "Open":   { value: "$4,118", change: "", note: "Yesterday open" },
    "High":   { value: "$4,130", change: "", note: "Day high" },
    "Low":    { value: "$3,978", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,242.67" },
      { label: "R2",    value: "$4,186.33" },
      { label: "R1",    value: "$4,090.67" },
      { label: "Pivot", value: "$4,034.33" },
      { label: "S1",    value: "$3,938.67" },
      { label: "S2",    value: "$3,882.33" },
      { label: "S3",    value: "$3,786.67" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,186.33" },
      { label: "R2",    value: "$4,128.27" },
      { label: "R1",    value: "$4,092.39" },
      { label: "Pivot", value: "$4,034.33" },
      { label: "S1",    value: "$3,976.27" },
      { label: "S2",    value: "$3,940.39" },
      { label: "S3",    value: "$3,882.33" }
    ],
    camarilla: [
      { label: "R4", value: "$4,078.60" },
      { label: "R3", value: "$4,036.80" },
      { label: "R2", value: "$4,022.87" },
      { label: "R1", value: "$4,008.93" },
      { label: "S1", value: "$3,981.07" },
      { label: "S2", value: "$3,967.13" },
      { label: "S3", value: "$3,953.20" },
      { label: "S4", value: "$3,911.40" }
    ],
    note: "Gold at $3,995 sits below classic pivot $4,034 — bearish bias intact; watch S1 $3,938 for capitulation."
  }
};
