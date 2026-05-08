window.CRUCIX_DATA = {
  generated: "Fri, 08 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off tilt as BTC tests 200-day line, gold prints fresh records, and Treasury yields slide on softer oil and Middle East de-escalation hopes.",

  macro: {
    dxy:      { value: "97.99",   change: "-0.08%", signal: "Soft dollar; tailwind for gold and EM." },
    gold:     { value: "$4,706",  change: "+0.43%", signal: "Record bid; safe-haven flow persists." },
    oil:      { value: "$94.47",  change: "-0.36%", signal: "Iran detente trims geopolitical premium." },
    silver:   { value: "—",       change: "—",      signal: "Tracks gold; data unavailable today." },
    yield10y: { value: "4.39%",   change: "-3bps",  signal: "Third session lower; disinflation bid." },
    vix:      { value: "17.08",   change: "-1.78%", signal: "Calm tape despite index pullback." },
    usdmyr:   { value: "3.98",    change: "-0.05%", signal: "Ringgit firm on weaker DXY." },
    sp500:    { value: "7,337",   change: "-0.38%", signal: "Mild profit-take after record run." },
    verdict: "Soft DXY plus falling 10Y plus low VIX plus record gold = stealth easing trade in motion. Crypto gets a liquidity tailwind if BTC reclaims $82K. KLSE benefits from ringgit strength and regional risk-on rotation."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady near cycle highs." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$80,100",  marketCap: "$1.59T", change1h: "N/A", change24h: "-1.20%", change7d: "N/A", insight: "BTC corrects below $80K for second day after Project Freedom rally stalled at $82K supply. Spot ETF flows snapped a five-day inflow streak — bulls need to reclaim 200-day line to target $85K." },
      { name: "Ethereum", symbol: "ETH", price: "$2,283",   marketCap: "$275B",  change1h: "N/A", change24h: "-1.50%", change7d: "N/A", insight: "ETH lags BTC as ETH/BTC ratio compresses to multi-year lows. Layer-2 fee revenue improving but rotation into SOL keeps relative performance heavy." },
      { name: "Solana",   symbol: "SOL", price: "$87.88",   marketCap: "$42B",   change1h: "N/A", change24h: "-2.10%", change7d: "N/A", insight: "SOL holds key trend support as memecoin and DEX volumes stay elevated. Network outage risk remains the single biggest overhang into next leg up." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",     change24h: "-3.80%", note: "Funding rates hit 10-yr low." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000820", change24h: "-2.10%", note: "Consolidates above 50/100 EMA." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000614", change24h: "-2.50%", note: "Pinned between EMAs; flat range." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk slightly off as BTC tests 200-day with negative funding extremes hitting DOGE. Reclaim of $82K opens $85K; loss of $78K invites $72K retest. Altseason on hold until BTC stabilizes and ETH/BTC base forms."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,337.11",  change: "-0.38%" },
      { name: "Nasdaq",       value: "25,806.20", change: "-0.13%" },
      { name: "Dow",          value: "49,596.97", change: "-0.63%" },
      { name: "VIX",          value: "17.08",     change: "-1.78%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$678.26", change: "+0.85%", insight: "Mega-cap weight cushions index against breadth weakness." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$711.23", change: "+0.20%", insight: "AI complex still leading; semis drove Thursday's bid." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$737.76", change: "+0.84%", insight: "Liquid proxy; hedging volumes elevated near records." },
      { ticker: "VTI",  name: "Total Market",      price: "—",        change: "—",       insight: "Broad-market exposure; tracks SPY plus small/mid drag." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",        change: "—",       insight: "Long-duration growth sensitive to falling 10Y yields." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$517.03", change: "+5.01%", insight: "Massive rip on Intel-led chip rally; AI capex still king." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$44.50",   change: "-1.20%", insight: "Spot ETF inflows paused; price tracks BTC into 200-day test." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",        change: "—",       insight: "Tech leadership intact; mega-cap earnings still lifting estimates." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$439.85", change: "+0.43%", insight: "Tracks record gold print; safe-haven flows persist." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$616.81", change: "+0.64%", notable: false, insight: "Ad spend resilient; AI-driven engagement supports valuation." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$211.50", change: "+1.77%", notable: true,  insight: "Semis breakout day; data-center demand still the cycle's anchor." },
      { ticker: "TSLA",  name: "Tesla",         price: "$411.79", change: "+3.28%", notable: true,  insight: "Top mega-cap mover; robotaxi narrative drives momentum bid." },
      { ticker: "AAPL",  name: "Apple",         price: "$292.64", change: "+1.80%", notable: false, insight: "Services margin expansion offsetting iPhone unit softness." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",        change: "—",       notable: false, insight: "Azure AI revenue accelerating; capex digestion remains key debate." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",        change: "—",       notable: false, insight: "Search resilience plus Gemini monetization underpin re-rating." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",        change: "—",       notable: false, insight: "AWS growth re-accelerating; retail margin story intact." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",        change: "—",       notable: false, insight: "Hit with sell-side downgrade to Hold; ad-tier maturing." },
      { ticker: "AMD",   name: "AMD",           price: "—",        change: "—",       notable: false, insight: "Rides SOXX rally; MI accelerator share gains in focus." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",        change: "—",       notable: false, insight: "Government and commercial AI bookings remain the bull case." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",        change: "—",       notable: false, insight: "Cybersecurity demand sticky; ARR cadence the watch item." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",        change: "—",       notable: false, insight: "Beta to BTC weak today; subscription revenue cushions volume risk." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$183.80", change: "-2.50%", notable: true,  insight: "Strategy signals possible BTC sale to fund dividends — narrative break." },
      { ticker: "APP",   name: "AppLovin",      price: "—",        change: "—",       notable: false, insight: "Ad-tech AI engine still outperforming peers on conversion lift." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$33.62",  change: "-3.00%", notable: false, insight: "Underperforms despite SOXX rip; margin and audit overhangs linger." }
    ],
    trending: [
      { ticker: "SOXX", change: "+5.01%" },
      { ticker: "TSLA", change: "+3.28%" },
      { ticker: "SMCI", change: "-3.00%" },
      { ticker: "MSTR", change: "-2.50%" },
      { ticker: "NVDA", change: "+1.77%" }
    ],
    verdict: "AI trade alive: SOXX +5% and NVDA breakout signal capex cycle still extending. Rotate within tech — own semis and mega-cap compounders, fade BTC-proxy MSTR and broken SMCI. Avoid chasing late-cycle momentum into VIX 17 with macro data risk ahead."
  },

  malaysia: {
    klci:   { value: "1,739.77", change: "+1.03%", context: "FBM KLCI logged biggest gain since 8 April, rebounding from 1,725 low. Monday outlook constructive on ringgit strength and regional rally." },
    usdmyr: { value: "3.98",     change: "-0.05%", signal: "Ringgit firm; importers may dollar-cost average." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM11.26", change: "Fri close", insight: "OPR steady; loan growth and dividend yield keep it core defensive bank." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "RM8.04",  change: "Fri close", insight: "Regional ASEAN exposure benefits from softer DXY and Indonesia growth." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",       change: "Fri close", insight: "Defensive retail-banking franchise; stable NIM and disciplined cost base." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",       change: "Fri close", insight: "Highest CET1 among peers; capital return optionality remains the catalyst." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",       change: "Fri close", insight: "Data-center demand growth lifts utility capex cycle and earnings visibility." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "RM1.99",  change: "Fri close", insight: "Soft tape despite NVDA strength; semis cycle leverage intact medium-term." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",       change: "Fri close", insight: "CelcomDigi synergies and tower monetization underpin deleveraging story." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",       change: "Fri close", insight: "Medical-tourism rebound and India hospital ramp drive earnings momentum." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",       change: "Fri close", insight: "Digital concession renewals and stablecoin pilot tailwinds support re-rating." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",       change: "Fri close", insight: "5G wholesale model bedding in; postpaid ARPU stable." }
    ],
    ipos: [
      { name: "TBA", sector: "Pending pipeline", price: "—", listingDate: "—", status: "Upcoming", note: "Bursa pipeline active in tech and consumer. Watch Main Market filings into Q3." }
    ],
    verdict: "Ringgit strength favors importers and tech assemblers. Inari offers best risk/reward as semis cycle re-accelerates with NVDA leadership. Monday Bursa likely opens firm on regional momentum and BNM stablecoin tailwind."
  },

  news: [
    { headline: "Bitcoin tests 200-day line as bulls eye $85K or $72K retest", source: "Cryptonews", time: "4h ago",  sentiment: "WATCH",   meaning: "Make-or-break level; BTC direction sets risk tone." },
    { headline: "BTC spot ETFs snap five-day inflow streak",                     source: "Finbold",     time: "6h ago",  sentiment: "BEARISH", meaning: "Institutional bid pausing right at key technical pivot." },
    { headline: "Strategy weighs selling BTC to fund dividends amid Q1 loss",    source: "CoinDesk",    time: "2d ago",  sentiment: "BEARISH", meaning: "Largest corporate holder shifts narrative; sentiment overhang now." },
    { headline: "Bursa Malaysia kicks off May strong on regional rally",         source: "The Star",    time: "1d ago",  sentiment: "BULLISH", meaning: "Risk-on flows lifting Bursa with ringgit tailwind." },
    { headline: "BNM launches Digital Asset Innovation Hub for stablecoins",     source: "Crypto.news", time: "1d ago",  sentiment: "BULLISH", meaning: "Regulatory tailwind for MyEG and fintech ecosystem plays." },
    { headline: "Arthur Hayes predicts Bitcoin at $125K by December",            source: "AOL",         time: "5h ago",  sentiment: "BULLISH", meaning: "Liquidity-return thesis; reinforces year-end target setup." },
    { headline: "FBM KLCI surges 17.75 points — biggest gain since 8 April",     source: "The Star",    time: "1d ago",  sentiment: "BULLISH", meaning: "Index breaks 1,725 base; momentum builds into Monday." },
    { headline: "10Y Treasury yield falls third session as oil eases",           source: "Macro wire",  time: "8h ago",  sentiment: "BULLISH", meaning: "Lower yields support equities and growth multiples now." }
  ],

  goldSummary: {
    "Price":  { value: "$4,706.36", change: "+0.43%", note: "New record; safe-haven flow steady." },
    "Open":   { value: "$4,687.24", change: "",       note: "" },
    "High":   { value: "$4,734.41", change: "",       note: "Day high" },
    "Low":    { value: "$4,682.04", change: "",       note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,785.53" },
      { label: "R2",    value: "$4,759.97" },
      { label: "R1",    value: "$4,733.17" },
      { label: "Pivot", value: "$4,707.60" },
      { label: "S1",    value: "$4,680.79" },
      { label: "S2",    value: "$4,655.23" },
      { label: "S3",    value: "$4,628.42" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,759.97" },
      { label: "R2",    value: "$4,739.96" },
      { label: "R1",    value: "$4,727.61" },
      { label: "Pivot", value: "$4,707.60" },
      { label: "S1",    value: "$4,687.59" },
      { label: "S2",    value: "$4,675.24" },
      { label: "S3",    value: "$4,655.23" }
    ],
    camarilla: [
      { label: "R4", value: "$4,735.17" },
      { label: "R3", value: "$4,720.76" },
      { label: "R2", value: "$4,715.96" },
      { label: "R1", value: "$4,711.16" },
      { label: "S1", value: "$4,701.56" },
      { label: "S2", value: "$4,696.76" },
      { label: "S3", value: "$4,691.96" },
      { label: "S4", value: "$4,677.55" }
    ],
    note: "Spot $4,706 sits just below classic pivot $4,707.60 — neutral-to-bullish; reclaim flips bias outright bullish toward R1 $4,733."
  }
};
