window.CRUCIX_DATA = {
  generated: "Sat, 18 Apr 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on snapback as Hormuz reopens, oil crashes 11%, stocks and BTC rip higher.",

  macro: {
    dxy:      { value: "97.77",    change: "-0.45%",  signal: "Dollar softens; supportive for risk assets." },
    gold:     { value: "$4,348",   change: "+0.86%",  signal: "New highs as real yields ease." },
    oil:      { value: "$81.23",   change: "-10.90%", signal: "Crude crashes on Hormuz reopening." },
    silver:   { value: "—",        change: "—",       signal: "Tracks gold; dollar weakness tailwind." },
    yield10y: { value: "4.24%",    change: "-7bps",   signal: "Yields fall on dovish repricing." },
    vix:      { value: "17.48",    change: "-2.56%",  signal: "Fear gauge cooling post Iran news." },
    usdmyr:   { value: "4.0260",   change: "-0.10%",  signal: "Ringgit firm; dollar headwind eases." },
    sp500:    { value: "7,126.06", change: "+1.20%",  signal: "Broad-based rally; breadth improving." },
    verdict: "Dollar down, yields lower, VIX cooling and gold at records — textbook risk-on reflation print. Crypto and high-beta tech lead; semis catch a bid on weaker DXY. KLSE should open firm Monday with ringgit tailwind."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leads tape; alts lagging slightly." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$75,682", marketCap: "$1.50T", change1h: "N/A", change24h: "-3.00%", change7d: "N/A", insight: "BTC tagged $78k intraday then retraced on profit-taking after Hormuz reopening. $75k is the critical weekly close for bulls." },
      { name: "Ethereum", symbol: "ETH", price: "$2,409",  marketCap: "$290B",  change1h: "N/A", change24h: "N/A",    change7d: "N/A", insight: "ETH consolidates below $2.5k resistance as BTC absorbs flows. ETH/BTC ratio still soft — altseason not yet confirmed." },
      { name: "Solana",   symbol: "SOL", price: "$88.43",  marketCap: "$42B",   change1h: "N/A", change24h: "+0.80%", change7d: "+4.90%", insight: "SOL grinds higher on memecoin volumes and ETF flows. Weekly strength outpaces ETH, confirming L1 rotation." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.0939",      change24h: "-1.14%",  note: "Cooling after BTC pop." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000365",  change24h: "-10.00%", note: "Profit-taking hits frog." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000615",  change24h: "+6.32%",  note: "SHIB outperforms DOGE today." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",     note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",     note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on confirmed by oil crash and VIX drop, but BTC retraced from $78k — bulls need a weekly close above $78k to trigger the $90k measured move. Alt strength remains selective (SOL, SHIB), not broad. Altseason still pending ETH breakout above $2,500."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,126.06",  change: "+1.20%" },
      { name: "Nasdaq",       value: "24,468.48", change: "+1.52%" },
      { name: "Dow",          value: "49,447.43", change: "+1.79%" },
      { name: "VIX",          value: "17.48",     change: "-2.56%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$652.35", change: "Fri close", insight: "Tracks S&P; broad-market core position." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$648.85", change: "Fri close", insight: "Big-tech heavy; riding AI leadership." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "Fri close", insight: "Liquid S&P proxy; mirrors VOO direction." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "Fri close", insight: "Broadest US equity exposure available." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "Fri close", insight: "High-beta growth; benefits from yield relief." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$413.77", change: "Fri close", insight: "Semis firm on AI capex and weaker dollar." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$43.73",  change: "-3.00%",    insight: "Tracks BTC; retraced with spot move." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "Fri close", insight: "Mega-cap tech carrying index gains." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$406.36", change: "+0.86%",    insight: "Gold ETF at records; safe-haven plus yield bid." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$688.55", change: "+1.73%",  notable: false, insight: "Ad revenue strength plus AI capex story intact." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$201.68", change: "+1.68%",  notable: false, insight: "Steady bid on AI datacenter demand." },
      { ticker: "TSLA",  name: "Tesla",         price: "$400.62", change: "+3.01%",  notable: true,  insight: "Rallies on risk-on tape and robotaxi sentiment." },
      { ticker: "AAPL",  name: "Apple",         price: "$270.23", change: "+2.59%",  notable: false, insight: "Solid gain on weaker dollar and China hopes." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$422.79", change: "+2.50%",  notable: false, insight: "Azure momentum lifts shares into Apr-29 print." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$341.68", change: "Fri close", notable: false, insight: "Search moat and Gemini traction keep bid intact." },
      { ticker: "AMZN",  name: "Amazon",        price: "$250.56", change: "Fri close", notable: false, insight: "AWS Trainium narrative drives analyst upgrades." },
      { ticker: "NFLX",  name: "Netflix",       price: "$107.37", change: "-0.32%",  notable: true,  insight: "Sold off after weak Q2 guide and Hastings board exit." },
      { ticker: "AMD",   name: "AMD",           price: "$277.80", change: "+7.80%",  notable: true,  insight: "Explodes higher on AI-GPU share gain chatter." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "Fri close", notable: false, insight: "Government AI contracts underpin the thesis." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "Fri close", notable: false, insight: "Cyber budgets resilient; Falcon platform expanding." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "Fri close", notable: false, insight: "High-beta BTC proxy; follows crypto flow." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$167.08", change: "+12.26%", notable: true,  insight: "Surged on semi-monthly STRC dividend and BTC rally." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "Fri close", notable: false, insight: "Ad-tech leader benefiting from risk-on sentiment." },
      { ticker: "SMCI",  name: "Super Micro",   price: "—",       change: "Fri close", notable: false, insight: "Server demand tied to AI infrastructure cycle." }
    ],
    trending: [
      { ticker: "MSTR", change: "+12.26%" },
      { ticker: "AMD",  change: "+7.80%" },
      { ticker: "TSLA", change: "+3.01%" },
      { ticker: "AAPL", change: "+2.59%" },
      { ticker: "MSFT", change: "+2.50%" }
    ],
    verdict: "AI trade back online: AMD, NVDA and MSTR leading; TSLA joins on risk-on tape. Rotation favors semis and BTC-proxies over defensives as DXY weakens. Avoid NFLX until guidance reset digests; own QQQ/SOXX-heavy baskets into earnings."
  },

  malaysia: {
    klci:   { value: "1,676.86", change: "-0.43%", context: "Closed soft Friday between 1,673–1,687. Monday should open firm on US risk-on spillover and weaker dollar." },
    usdmyr: { value: "4.0260",   change: "-0.10%", signal: "Ringgit firm; exporters may see light selling." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM11.06", change: "Fri close",       insight: "Largest Malaysian bank; OPR hold supports NIMs." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "—",        change: "N/A (Fri close)", insight: "Regional bank with Indonesia exposure; ASEAN proxy." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",        change: "N/A (Fri close)", insight: "Defensive retail bank; consistent dividend anchor." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",        change: "N/A (Fri close)", insight: "Value bank with improving ROE trajectory." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",        change: "N/A (Fri close)", insight: "Utility riding data-center power demand theme." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—",        change: "N/A (Fri close)", insight: "Semi-backend play leveraged to NVDA/AAPL cycle." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",        change: "N/A (Fri close)", insight: "Regional telco restructuring toward core Malaysia." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",        change: "N/A (Fri close)", insight: "Pan-Asia hospital network; defensive growth." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",        change: "N/A (Fri close)", insight: "Government digital services with moat-like position." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",        change: "N/A (Fri close)", insight: "5G rollout supports premium consumer pricing." }
    ],
    ipos: [
      { name: "N/A", sector: "—", price: "—", listingDate: "—", status: "—", note: "No headline Bursa IPO print in latest news scan." }
    ],
    verdict: "Ringgit firm near 4.03 with dollar softening — positive for sentiment. Inari is the top risk-on play via NVDA/Apple cycle. Bursa Monday open should track US gains; banks and tech-linked semis lead."
  },

  news: [
    { headline: "Iran reopens Strait of Hormuz; crude crashes 11%",      source: "dmarketforces", time: "12h ago", sentiment: "BULLISH", meaning: "Oil crash frees risk-on flows into equities and crypto." },
    { headline: "Bitcoin rips past $78k before retracing to $75.7k",     source: "CoinCentral",   time: "8h ago",  sentiment: "BULLISH", meaning: "Bulls need weekly close above $78k for $90k target." },
    { headline: "MSTR surges 12% on semi-monthly STRC dividend plan",    source: "Motley Fool",   time: "14h ago", sentiment: "BULLISH", meaning: "Saylor doubles down; BTC-treasury model gaining traction." },
    { headline: "Netflix slides on weak Q2 guide; Hastings exits board", source: "CNBC",          time: "24h ago", sentiment: "BEARISH", meaning: "Growth narrative bruised; capital return path unclear." },
    { headline: "AMD explodes +7.8% on AI-GPU share-gain chatter",       source: "Yahoo Finance", time: "9h ago",  sentiment: "BULLISH", meaning: "Semi rally broadens beyond Nvidia into AMD." },
    { headline: "Dow closes +868 points as Hormuz reopens",              source: "Yahoo Finance", time: "10h ago", sentiment: "BULLISH", meaning: "Broadest rally day; cyclicals lead narrow-tech pattern." },
    { headline: "10Y yield falls to 4.24% on dovish repricing",          source: "Investing.com", time: "11h ago", sentiment: "BULLISH", meaning: "Lower rates support long-duration tech and gold." },
    { headline: "Gold hits fresh record near $4,350/oz",                 source: "goldprice.org", time: "6h ago",  sentiment: "BULLISH", meaning: "Central bank and retail demand keep bid firm." }
  ],

  goldSummary: {
    "Price":    { value: "$4,348", change: "+0.86%", note: "Record high territory continues." },
    "Open":     { value: "$4,311", change: "",       note: "" },
    "High":     { value: "$4,354", change: "",       note: "Day high" },
    "Low":      { value: "$4,226", change: "",       note: "Day low" },
    "52W High": { value: "N/A",    change: "",       note: "" },
    "52W Low":  { value: "N/A",    change: "",       note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,496" },
      { label: "R2",    value: "$4,425" },
      { label: "R1",    value: "$4,368" },
      { label: "Pivot", value: "$4,297" },
      { label: "S1",    value: "$4,240" },
      { label: "S2",    value: "$4,169" },
      { label: "S3",    value: "$4,112" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,425" },
      { label: "R2",    value: "$4,376" },
      { label: "R1",    value: "$4,346" },
      { label: "Pivot", value: "$4,297" },
      { label: "S1",    value: "$4,248" },
      { label: "S2",    value: "$4,218" },
      { label: "S3",    value: "$4,169" }
    ],
    camarilla: [
      { label: "R4", value: "$4,381" },
      { label: "R3", value: "$4,346" },
      { label: "R2", value: "$4,335" },
      { label: "R1", value: "$4,323" },
      { label: "S1", value: "$4,299" },
      { label: "S2", value: "$4,287" },
      { label: "S3", value: "$4,276" },
      { label: "S4", value: "$4,241" }
    ],
    note: "Gold at $4,348 trades above classic pivot $4,297 — bullish bias while above."
  }
};
