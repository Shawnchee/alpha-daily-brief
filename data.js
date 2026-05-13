window.CRUCIX_DATA = {
  generated: "Wed, 13 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Hot PPI print rattles BTC under $80K while AI-led Nasdaq prints fresh record — split tape favors quality.",

  macro: {
    dxy:      { value: "98.32",    change: "+0.02%", signal: "Dollar steady; soft floor, no breakout yet." },
    gold:     { value: "$4,667.50", change: "-1.34%", signal: "Profit-taking after run; trend intact still." },
    oil:      { value: "$97.72",   change: "+2.41%", signal: "Iran supply risk re-prices crude higher." },
    silver:   { value: "$80.86",   change: "-0.01%", signal: "Holding lofty range; industrial bid firm." },
    yield10y: { value: "4.46%",    change: "+5bps",  signal: "PPI lifts yields; cut hopes fade slightly." },
    vix:      { value: "17.98",    change: "-0.06%", signal: "Complacent tone despite hot inflation print." },
    usdmyr:   { value: "4.05",     change: "+0.05%", signal: "Ringgit firm; weak DXY caps upside." },
    sp500:    { value: "7,446.17", change: "+0.61%", signal: "Record close; AI mega-caps lead tape." },
    verdict: "DXY flat plus 10Y at 4.46% with VIX sub-18 signals controlled risk-on, even as gold gives back. Crypto stays choppy under $80K BTC until PPI fear bleeds out. KLSE benefits from soft dollar and oil tailwinds for energy names."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leadership softening on PPI shock." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$79,750",  marketCap: "$1.58T", change1h: "N/A", change24h: "-0.91%", change7d: "N/A", insight: "BTC slipped below $80K as hot PPI revived sticky-inflation fears. Reclaim of $82K opens a path back to $85K resistance." },
      { name: "Ethereum", symbol: "ETH", price: "$2,301.70", marketCap: "$277B",  change1h: "N/A", change24h: "-1.20%", change7d: "N/A", insight: "ETH consolidates near $2,300 as ETH/BTC stays pinned. Needs a clean $2,400 reclaim to confirm rotation." },
      { name: "Solana",   symbol: "SOL", price: "$95.84",   marketCap: "$45B",   change1h: "N/A", change24h: "-2.10%", change7d: "N/A", insight: "SOL hovers under $100 as meme/DeFi flows cool. Network usage still strong, but momentum needs a catalyst." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1111",      change24h: "+1.04%", note: "Outperforming as BTC dips." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000406",  change24h: "-2.40%", note: "Range-bound; volume thinning." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000645",  change24h: "-1.80%", note: "Quiet drift; no narrative bid." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-off twitch: BTC under $80K, alts heavier than majors, memes mixed. Key BTC level is $82K reclaim for bulls; loss of $78K opens $75K. Altseason signal weak until ETH/BTC ratio turns up."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,446.17",  change: "+0.61%" },
      { name: "Nasdaq",       value: "26,407.36", change: "+1.22%" },
      { name: "Dow",          value: "49,613.74", change: "-0.30%" },
      { name: "VIX",          value: "17.98",     change: "-0.06%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$678.63", change: "-0.57%", insight: "Tracks SPX at records; core long-only sleeve." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$718.30", change: "+0.50%", insight: "AI mega-caps power index to new highs." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$738.18", change: "-0.15%", insight: "Liquidity proxy; modest pullback after record." },
      { ticker: "VTI",  name: "Total Market",      price: "—",        change: "—",       insight: "Broad-market beta proxy for US equities." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",        change: "—",       insight: "Hi-beta growth bellwether; sensitive to yields." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$528.29", change: "+2.38%", insight: "Chips leading on AI capex restocking." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$44.31",  change: "-0.91%", insight: "Spot BTC proxy; flows lighter on PPI shock." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",        change: "—",       insight: "Mega-cap tech sleeve; AI tailwind intact." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$436.21", change: "-1.34%", insight: "Gold giving back as yields and dollar firm." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$601.75", change: "+0.80%", notable: false, insight: "Ad spend resilient; AI agent monetization in focus." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$225.00", change: "+1.50%", notable: true,  insight: "AI capex restock keeps Blackwell demand tight." },
      { ticker: "TSLA",  name: "Tesla",         price: "$439.75", change: "+0.90%", notable: false, insight: "Robotaxi rollout cadence dominates the narrative." },
      { ticker: "AAPL",  name: "Apple",         price: "$292.68", change: "-0.20%", notable: false, insight: "Services growth offsets soft iPhone units." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",        change: "—",       notable: false, insight: "Azure AI bookings remain the swing factor." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",        change: "—",       notable: false, insight: "Gemini distribution into Search drives mix." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",        change: "—",       notable: false, insight: "AWS reacceleration plus retail margin story." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",        change: "—",       notable: false, insight: "Ads tier and live sports drive ARPU." },
      { ticker: "AMD",   name: "AMD",           price: "—",        change: "—",       notable: false, insight: "MI series ramp into hyperscaler buy windows." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",        change: "—",       notable: false, insight: "AIP commercial wins still the bull case." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",        change: "—",       notable: false, insight: "Falcon platform expansion underpins ARR." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",        change: "—",       notable: false, insight: "Crypto beta name; trades with BTC tape." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$177.26", change: "-3.88%", notable: true,  insight: "Q1 markdown loss plus BTC dip weighs hard." },
      { ticker: "APP",   name: "AppLovin",      price: "—",        change: "—",       notable: false, insight: "AXON ad engine still the growth engine." },
      { ticker: "SMCI",  name: "Super Micro",   price: "—",        change: "—",       notable: false, insight: "AI server ODM cycle remains the swing factor." }
    ],
    trending: [
      { ticker: "SOXX", change: "+2.38%" },
      { ticker: "NVDA", change: "+1.50%" },
      { ticker: "DOGE", change: "+1.04%" },
      { ticker: "MSTR", change: "-3.88%" },
      { ticker: "GLD",  change: "-1.34%" }
    ],
    verdict: "AI trade still leads — chips and mega-cap tech bid even with hot PPI. Rotation favors quality compounders over high-beta speculative names. Own SOXX/NVDA/META, fade MSTR-style BTC-proxy leverage until BTC reclaims $82K."
  },

  malaysia: {
    klci:   { value: "—",    change: "—", context: "Bursa close not in feed; soft dollar and firmer oil set a constructive Wednesday backdrop." },
    usdmyr: { value: "4.05", change: "+0.05%", signal: "Ringgit firm; DXY soft caps any upside." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "—", change: "—", insight: "Stable OPR backdrop supports NIM; dividend anchor for income sleeves." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "—", change: "—", insight: "Regional ASEAN banking franchise; Indonesia growth offsets domestic margin pressure." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—", change: "—", insight: "Defensive retail bank; clean asset quality, low-volatility carry." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—", change: "—", insight: "Cheapest big-cap bank on book; dividend yield re-rating thesis." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—", change: "—", insight: "Data-center power demand thesis remains the structural growth driver." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—", change: "—", insight: "Semi cycle and NVDA-linked RF orders remain the key beta lever." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—", change: "—", insight: "CelcomDigi synergies and tower monetization driving re-rating." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—", change: "—", insight: "Defensive medical-tourism franchise with FX-hedged earnings." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—", change: "—", insight: "Digital government services concession; political risk discount remains." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—", change: "—", insight: "5G wholesale model clarity needed before re-rating resumes." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No fresh Bursa IPO data in this feed; check Bursa announcements for upcoming book-builds." }
    ],
    verdict: "Ringgit firm at ~4.05 keeps imported-inflation pressure contained. Inari is the best risk/reward — NVDA tailwind plus semi-cycle leverage. Wednesday Bursa likely opens steady with energy and exporters leading."
  },

  news: [
    { headline: "US PPI surges hotter than forecast, sticky inflation fears return", source: "Yahoo Finance", time: "8h ago",  sentiment: "BEARISH", meaning: "Cut hopes fade; yields up; risk assets pressured short-term." },
    { headline: "Bitcoin slides below $80,000 as US investors lead selloff",         source: "Finbold",       time: "6h ago",  sentiment: "BEARISH", meaning: "ETF outflows risk; BTC needs $82K reclaim to flip." },
    { headline: "S&P 500 and Nasdaq close at fresh record highs on AI strength",     source: "CNBC",          time: "10h ago", sentiment: "BULLISH", meaning: "Mega-cap tech leadership intact; breadth still narrow." },
    { headline: "MicroStrategy posts Q1 net loss of $12.5B on BTC markdown",         source: "Traders Union", time: "12h ago", sentiment: "BEARISH", meaning: "BTC-proxy leverage stocks vulnerable on crypto dips." },
    { headline: "Crude oil jumps on renewed Iran supply risk premium",               source: "Yahoo Finance", time: "9h ago",  sentiment: "WATCH",   meaning: "Higher oil feeds PPI loop; energy names get bid." },
    { headline: "Gold pulls back over 1% as dollar firms and yields lift",           source: "GoldPrice",     time: "7h ago",  sentiment: "NEUTRAL", meaning: "Healthy pullback in uptrend; watch $4,600 support." },
    { headline: "ETF inflows revive Bitcoin bullish price prediction talk",          source: "OpenPR",        time: "11h ago", sentiment: "BULLISH", meaning: "Institutional bid alive; retail FOMO still absent." },
    { headline: "Semis lead as SOXX jumps 2.4% on AI capex restock",                 source: "Market wrap",   time: "10h ago", sentiment: "BULLISH", meaning: "Chip cycle re-accelerating; NVDA and Inari beneficiaries." }
  ],

  goldSummary: {
    "Price":    { value: "$4,667.50", change: "-1.34%", note: "Profit-taking after a strong run." },
    "Open":     { value: "$4,730.70", change: "", note: "Yesterday's close, today's open" },
    "High":     { value: "$4,735.00", change: "", note: "Day high" },
    "Low":      { value: "$4,660.00", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,790.00" },
      { label: "R2",    value: "$4,762.50" },
      { label: "R1",    value: "$4,715.00" },
      { label: "Pivot", value: "$4,687.50" },
      { label: "S1",    value: "$4,640.00" },
      { label: "S2",    value: "$4,612.50" },
      { label: "S3",    value: "$4,565.00" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,762.50" },
      { label: "R2",    value: "$4,733.85" },
      { label: "R1",    value: "$4,716.15" },
      { label: "Pivot", value: "$4,687.50" },
      { label: "S1",    value: "$4,658.85" },
      { label: "S2",    value: "$4,641.15" },
      { label: "S3",    value: "$4,612.50" }
    ],
    camarilla: [
      { label: "R4", value: "$4,708.75" },
      { label: "R3", value: "$4,688.13" },
      { label: "R2", value: "$4,681.25" },
      { label: "R1", value: "$4,674.38" },
      { label: "S1", value: "$4,660.63" },
      { label: "S2", value: "$4,653.75" },
      { label: "S3", value: "$4,646.88" },
      { label: "S4", value: "$4,626.25" }
    ],
    note: "Gold trades below the $4,687.50 classic pivot — short-term bias bearish until reclaim."
  }
};
