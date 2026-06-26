window.CRUCIX_DATA = {
  generated: "Fri, 26 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off bias as BTC slides under $60K and gold holds above $4,000 amid Fed uncertainty.",

  macro: {
    dxy:      { value: "101.40",  change: "-0.15%", signal: "Dollar softens; supports metals and EM FX." },
    gold:     { value: "$4,035",  change: "+0.45%", signal: "Above $4K; safe-haven flows persist strongly." },
    oil:      { value: "$64.20",  change: "-1.20%", signal: "US-Iran talks ease Middle East premium." },
    silver:   { value: "$48.10",  change: "-0.30%", signal: "Under selling pressure; tracking gold weakly." },
    yield10y: { value: "4.39%",   change: "-10bps", signal: "Six-week low; rate-cut bets building fast." },
    vix:      { value: "18.89",   change: "+1.40%", signal: "Elevated but contained; crypto-led nerves." },
    usdmyr:   { value: "4.02",    change: "-0.10%", signal: "Ringgit firm on softer dollar tone." },
    sp500:    { value: "7,357.49", change: "-0.01%", signal: "Flat close; rotation under the surface." },
    verdict: "Dollar slipping and 10Y at six-week lows are classic dovish-pivot signals, lifting gold and capping the VIX bounce. Crypto isn't reading the memo — BTC's $60K break is a liquidity story, not macro. US stocks should chop sideways into next CPI; KLSE benefits from softer DXY and stable yields."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance climbs as alts bleed faster." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$59,740", marketCap: "$1.18T", change1h: "N/A", change24h: "-1.04%", change7d: "N/A", insight: "BTC sliced through $60K with $1.26B liquidated, testing the $58K make-or-break zone. A daily close under $58K opens the door to $55K; reclaim of $61.5K invalidates the breakdown." },
      { name: "Ethereum", symbol: "ETH", price: "$1,680",  marketCap: "$202B",  change1h: "N/A", change24h: "-1.85%", change7d: "N/A", insight: "ETH lagging BTC again as ETH/BTC drifts toward cycle lows. Watch $1,600 — losing it triggers cascade liquidations across the L2 complex." },
      { name: "Solana",   symbol: "SOL", price: "$68.29",  marketCap: "$33B",   change1h: "N/A", change24h: "-1.43%", change7d: "N/A", insight: "SOL holding better than majors on continued meme + DEX volumes. Key support $65; reclaim $75 needed to revive uptrend." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",     change24h: "-2.10%", note: "Neutral-bearish; BTC-correlated drift." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000082",  change24h: "-3.20%", note: "Above 50/100 EMAs; 200 caps." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000625", change24h: "-2.40%", note: "Coiled between 50/100 EMAs." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-off in crypto with $1.26B in 24h liquidations and BTC at 21-month support. The $58K level is THE line — losing it brings $55K and panic-altcoin dumps. No altseason signal; capital rotating to BTC dominance and stables."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,357.49",  change: "-0.01%" },
      { name: "Nasdaq",       value: "25,358.60", change: "-0.46%" },
      { name: "Dow",          value: "51,920.62", change: "+0.14%" },
      { name: "VIX",          value: "18.89",     change: "+1.40%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$675.71", change: "+0.00%", insight: "Flat S&P print; broad index buyers still steady on dips." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—",       change: "N/A",    insight: "Tracking Nasdaq -0.46%; mega-cap tech dragging on Netflix weakness." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$734.30", change: "+0.14%", insight: "Slight bid above VOO; institutional hedging flow visible." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "N/A",    insight: "Total market tilts with S&P; small-caps remain the laggard." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "N/A",    insight: "High-beta names pressured by crypto and growth de-risking." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$625.20", change: "+3.94%", insight: "Chips ripping on AMD breakout and renewed AI capex chatter." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$33.19",  change: "-1.04%", insight: "Tracking BTC's slide; spot ETF outflows likely accelerated." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "N/A",    insight: "Soft on Nasdaq weakness; semis offsetting software drag." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$377.10", change: "+0.45%", insight: "Above $4K spot supports new highs; central-bank bid intact." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "—",        change: "N/A",    notable: false, insight: "Ad-tech leader leveraged to AI capex and Reels monetization." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$205.19",  change: "+0.16%", notable: true,  insight: "Holding firm despite tape weakness; SOXX leadership is the tell." },
      { ticker: "TSLA",  name: "Tesla",         price: "—",        change: "N/A",    notable: false, insight: "Robotaxi narrative remains the swing factor for the stock." },
      { ticker: "AAPL",  name: "Apple",         price: "$298.01",  change: "+0.20%", notable: false, insight: "Holding $300 zone as services revenue underwrites the multiple." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",        change: "N/A",    notable: false, insight: "Azure AI demand keeps it the safest mega-cap bet here." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",        change: "N/A",    notable: false, insight: "Gemini momentum + search resilience offset adtech jitters." },
      { ticker: "AMZN",  name: "Amazon",        price: "$208.76",  change: "-0.53%", notable: false, insight: "AWS growth thesis intact; retail margins the swing factor." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",        change: "-3.50%", notable: true,  insight: "Hit 52-week low on ad-growth fears; sentiment washout territory." },
      { ticker: "AMD",   name: "AMD",           price: "$205.27",  change: "+2.91%", notable: true,  insight: "Leading semis higher on MI accelerator momentum vs Nvidia." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",        change: "N/A",    notable: false, insight: "Gov + commercial AIP bookings drive valuation premium." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",        change: "N/A",    notable: false, insight: "Cybersecurity remains a defensive growth pocket here." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",        change: "N/A",    notable: false, insight: "Direct BTC beta; under pressure as crypto liquidates." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$87.00",   change: "-5.20%", notable: true,  insight: "Down 46% in a month; broke $100 first time since Mar-2024." },
      { ticker: "APP",   name: "AppLovin",      price: "—",        change: "N/A",    notable: false, insight: "Ad-tech AI engine remains the growth story to own." },
      { ticker: "SMCI",  name: "Super Micro",   price: "—",        change: "N/A",    notable: false, insight: "AI server beta — moves with SOXX and hyperscaler capex." }
    ],
    trending: [
      { ticker: "SOXX", change: "+3.94%" },
      { ticker: "AMD",  change: "+2.91%" },
      { ticker: "MSTR", change: "-5.20%" },
      { ticker: "NFLX", change: "-3.50%" },
      { ticker: "AMZN", change: "-0.53%" }
    ],
    verdict: "AI trade is bifurcating: semis (SOXX +3.9%, AMD +2.9%) leading while crypto-adjacent (MSTR, COIN) and consumer-tech (NFLX) get punished. Own hardware over software here; the SOXX breakout is the cleanest signal. Avoid MSTR until BTC stabilizes above $61.5K — leveraged BTC proxies amplify pain on the way down."
  },

  malaysia: {
    klci:   { value: "1,615", change: "+0.10%", context: "KLCI held its 1,600 floor into Thursday close. Friday open should track softer DXY positive but cautious on US tech weakness." },
    usdmyr: { value: "4.02",  change: "-0.10%", signal: "Ringgit firmer; supports importers and consumer." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM10.88", change: "+0.37%", insight: "Steady defensive yield; OPR backdrop and regional ASEAN franchise underpin." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "—",       change: "Fri close", insight: "ASEAN regional banking play; Indonesia and Singapore franchises remain the swing." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",   price: "—",       change: "Fri close", insight: "Defensive bank with the strongest asset-quality moat on the board." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",      price: "—",       change: "Fri close", insight: "Mid-cap bank; capital ratios and dividend yield remain attractive." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",        price: "—",       change: "Fri close", insight: "Utility re-rating on data-center power demand and grid capex cycle." },
      { ticker: "INARI",  name: "Inari (0138.KL)",         price: "—",       change: "Fri close", insight: "Semi cycle proxy; benefits from NVDA/SOXX strength via OSAT supply chain." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",        price: "—",       change: "Fri close", insight: "Telco restructuring story; CelcomDigi synergies remain the catalyst." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",      change: "Fri close", insight: "Defensive healthcare with ASEAN demographic tailwind intact." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",          price: "—",       change: "Fri close", insight: "Digital govt services; new concession wins drive the bull case." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",         price: "—",       change: "Fri close", insight: "5G monetization and DNB structure remain the key telco overhang." }
    ],
    ipos: [
      { name: "Pending Bursa pipeline", sector: "Various", price: "TBA", listingDate: "TBA", status: "Upcoming", note: "No major IPO confirmed in today's headlines. Watch for Q3 2026 tech/REIT pipeline announcements via Bursa." }
    ],
    verdict: "Ringgit at 4.02 is constructive — softer DXY plus stable 10Y is the perfect setup for KLSE. Best risk/reward sits in Inari on the semis breakout and Tenaga on the data-center theme. Friday Bursa open likely flat-to-positive; watch external US session for direction."
  },

  news: [
    { headline: "Bitcoin slides to 21-month low at $58K as $1.26B liquidated", source: "CoinDesk",  time: "2h ago", sentiment: "BEARISH", meaning: "Crypto risk-off; expect altcoin cascade if $58K breaks." },
    { headline: "Strategy (MSTR) breaks $100 first time since March 2024",     source: "Yahoo Finance", time: "5h ago", sentiment: "BEARISH", meaning: "Leveraged BTC proxy unwind accelerates; sentiment washing out." },
    { headline: "Gold rebounds above $4,000 on softer dollar and lower yields", source: "TradingEconomics", time: "6h ago", sentiment: "BULLISH", meaning: "Safe-haven bid intact; central-bank flows remain supportive." },
    { headline: "US 10Y yield drops to six-week low near 4.39%",               source: "FRED",     time: "8h ago", sentiment: "BULLISH", meaning: "Rate-cut pricing builds; risk assets get duration support." },
    { headline: "Oil retreats to pre-conflict levels on US-Iran talks progress", source: "Reuters", time: "10h ago", sentiment: "NEUTRAL", meaning: "Geopolitical premium fading; inflation tailwind for risk." },
    { headline: "Semiconductor ETF SOXX jumps 3.94% on AMD-led rally",          source: "ETF.com", time: "12h ago", sentiment: "BULLISH", meaning: "AI hardware leadership confirmed; capex cycle intact." },
    { headline: "Netflix trades near 52-week low on ad-growth concerns",        source: "Motley Fool", time: "14h ago", sentiment: "BEARISH", meaning: "Consumer-tech sentiment fragile; ad market signals softening." },
    { headline: "Grant Cardone vows to keep buying BTC with real-estate cashflow", source: "CoinDesk", time: "16h ago", sentiment: "WATCH",   meaning: "Notable HNW bid persists despite drawdown; sentiment anchor." }
  ],

  goldSummary: {
    "Price":  { value: "$4,035",  change: "+0.45%", note: "Above $4K; central-bank bid firm." },
    "Open":   { value: "$4,020",  change: "", note: "" },
    "High":   { value: "$4,055",  change: "", note: "Day high" },
    "Low":    { value: "$3,990",  change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,128.33" },
      { label: "R2",    value: "$4,091.67" },
      { label: "R1",    value: "$4,063.33" },
      { label: "Pivot", value: "$4,026.67" },
      { label: "S1",    value: "$3,998.33" },
      { label: "S2",    value: "$3,961.67" },
      { label: "S3",    value: "$3,933.33" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,091.67" },
      { label: "R2",    value: "$4,066.83" },
      { label: "R1",    value: "$4,051.50" },
      { label: "Pivot", value: "$4,026.67" },
      { label: "S1",    value: "$4,001.83" },
      { label: "S2",    value: "$3,986.50" },
      { label: "S3",    value: "$3,961.67" }
    ],
    camarilla: [
      { label: "R4", value: "$4,070.75" },
      { label: "R3", value: "$4,052.88" },
      { label: "R2", value: "$4,046.92" },
      { label: "R1", value: "$4,040.96" },
      { label: "S1", value: "$4,029.04" },
      { label: "S2", value: "$4,023.08" },
      { label: "S3", value: "$4,017.12" },
      { label: "S4", value: "$3,999.25" }
    ],
    note: "Gold at $4,035 sits above classic pivot $4,026 — mild bullish bias; reclaim R1 $4,063 opens path to $4,091."
  }
};
