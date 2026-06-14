window.CRUCIX_DATA = {
  generated: "Sun, 14 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on Friday close into Mideast peace headlines: equities firm, gold elevated, crypto soft.",

  macro: {
    dxy:      { value: "104.20", change: "-0.15%", signal: "Dollar slips on yield drop." },
    gold:     { value: "$4,222", change: "+0.22%", signal: "Safe haven bid holds firm." },
    oil:      { value: "$78.40", change: "+1.10%", signal: "Mideast peace headlines cap gains." },
    silver:   { value: "$36.85", change: "+0.45%", signal: "Tracking gold, industrial demand steady." },
    yield10y: { value: "4.47%",  change: "-10bps", signal: "Yields drop on Iran peace headlines." },
    vix:      { value: "17.68",  change: "-9.05%", signal: "Fear gauge collapses, complacency rising." },
    usdmyr:   { value: "4.06",   change: "-0.10%", signal: "Ringgit stable in tight range." },
    sp500:    { value: "7,431",  change: "+0.50%", signal: "Index pushes new highs Friday." },
    verdict: "Yields dropping with VIX falling = textbook risk-on as Iran peace headlines lift sentiment. Gold staying bid above $4,200 shows hedge demand persists despite equity strength. KLSE benefits from cheap ringgit and stable yields; crypto lags broad risk."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance near cycle highs." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$64,200", marketCap: "$1.29T", change1h: "N/A", change24h: "+1.29%", change7d: "N/A", insight: "BTC reclaimed $65K on Trump-Iran deal headlines before easing back. Key level remains $65K resistance; bulls need it to hold for a push to $70K." },
      { name: "Ethereum", symbol: "ETH", price: "$1,666",  marketCap: "$220B",  change1h: "N/A", change24h: "-2.10%", change7d: "N/A", insight: "ETH languishes below $1,800 as L2 fragmentation weighs on fees and sentiment. A reclaim of $1,800 is needed to flip momentum bullish." },
      { name: "Solana",   symbol: "SOL", price: "$65.08",  marketCap: "$37B",   change1h: "N/A", change24h: "-1.40%", change7d: "N/A", insight: "SOL holds last channel support after losing $70 cleanly this week. Strong on-chain activity, but breakdown here opens $55." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.090",      change24h: "-1.14%", note: "Softening as BTC chops." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000444", change24h: "-2.94%", note: "Risk-off; floor flushing out." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000562", change24h: "-1.80%", note: "Bleeding under $0.000006." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-off in crypto despite risk-on in equities — meaningful divergence. BTC must hold $63K; lose it and $58K opens fast. No altseason signal while majors lag and dominance climbs."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,431.46",  change: "+0.50%" },
      { name: "Nasdaq",       value: "25,888.84", change: "+0.31%" },
      { name: "Dow",          value: "51,202.26", change: "+0.70%" },
      { name: "VIX",          value: "17.68",     change: "-9.05%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$683.47", change: "Fri close", insight: "Tracks S&P at new highs; broad-market core holding." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—",       change: "Fri close", insight: "Mega-cap tech leadership intact, semis driving gains." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "Fri close", insight: "Liquid proxy for S&P 500; options activity high." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "Fri close", insight: "Total-market exposure benefiting from breadth improvement." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "Fri close", insight: "Hi-beta growth basket; outperforms in low-VIX regimes." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "Fri close", insight: "Semis the AI workhorse; tracks NVDA/AMD strength." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$35.67",  change: "+1.29%",    insight: "Spot-BTC vehicle; flows still positive despite price chop." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "Fri close", insight: "Sector ETF dominated by AAPL, MSFT, NVDA leadership." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$394.58", change: "+0.22%",    insight: "Gold ETF at record territory; safe-haven flows persist." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$725.00", change: "Fri close", notable: false, insight: "Ad revenue and AI capex narrative support premium valuation." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$172.00", change: "Fri close", notable: true,  insight: "AI demand cycle still the dominant US equity driver." },
      { ticker: "TSLA",  name: "Tesla",         price: "$391.91", change: "-2.00%",    notable: true,  insight: "Sold off as SpaceX IPO debut drew capital rotation." },
      { ticker: "AAPL",  name: "Apple",         price: "$245.00", change: "Fri close", notable: false, insight: "Services growth and AI rollout keep valuation supported." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$478.00", change: "Fri close", notable: false, insight: "Azure and Copilot monetization remain the cornerstone." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$360.87", change: "Fri close", notable: false, insight: "Search resilience plus Gemini traction sustain re-rating." },
      { ticker: "AMZN",  name: "Amazon",        price: "$238.65", change: "Fri close", notable: false, insight: "AWS growth reaccelerating; retail margins improving." },
      { ticker: "NFLX",  name: "Netflix",       price: "$80.34",  change: "Fri close", notable: false, insight: "Ad tier and password-sharing crackdown still ARPU positive." },
      { ticker: "AMD",   name: "AMD",           price: "$511.57", change: "Fri close", notable: true,  insight: "MI400 ramp and hyperscaler design wins fuel AI optimism." },
      { ticker: "PLTR",  name: "Palantir",      price: "$155.00", change: "Fri close", notable: false, insight: "Government and AIP traction support premium multiple." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "$420.00", change: "Fri close", notable: false, insight: "Cyber demand intact post-incident; platform consolidation." },
      { ticker: "COIN",  name: "Coinbase",      price: "$245.00", change: "Fri close", notable: false, insight: "Trading volumes lagged but custody and stablecoin steady." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$385.00", change: "Fri close", notable: false, insight: "High-beta BTC proxy; treasury strategy still core thesis." },
      { ticker: "APP",   name: "AppLovin",      price: "$520.00", change: "Fri close", notable: false, insight: "Ad-tech AXON engine driving mobile-ad pricing power." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$30.46",  change: "Fri close", notable: true,  insight: "AI server demand intact but margin compression weighs." }
    ],
    trending: [
      { ticker: "VIX",  change: "-9.05%" },
      { ticker: "AMD",  change: "+2.50%" },
      { ticker: "TSLA", change: "-2.00%" },
      { ticker: "N/A",  change: "N/A" },
      { ticker: "N/A",  change: "N/A" }
    ],
    verdict: "AI trade still the dominant equity story; NVDA/AMD/META leading, Tesla diluted by SpaceX IPO. Rotation favors mega-cap tech and semis over small caps until VIX bounces. Own the AI infrastructure stack; avoid stretched consumer-discretionary names."
  },

  malaysia: {
    klci:   { value: "1,683.63", change: "+0.24%", context: "KLCI closed Friday up 4.10 points, near 7-year highs. Monday opens with tailwinds from US strength and a stable ringgit." },
    usdmyr: { value: "4.06",     change: "-0.10%", signal: "Ringgit firm in 4.05-4.07 range." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "—", change: "Fri close", insight: "OPR steady at 3.00% supports NIMs; defensive banking holding." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "—", change: "Fri close", insight: "Regional banking exposure benefits from Indonesia and Thailand recovery." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—", change: "Fri close", insight: "Most defensive Malaysian bank; mortgage-heavy book steady." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—", change: "Fri close", insight: "Solid CET1 cushion and rising dividend yield support thesis." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—", change: "Fri close", insight: "Data-center capex and tariff resets remain medium-term catalyst." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—", change: "Fri close", insight: "Semi cycle and NVDA AI demand drive Penang assembly orders." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—", change: "Fri close", insight: "Telco consolidation narrative pending; XL-Smart merger update awaited." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—", change: "Fri close", insight: "Pan-Asia hospital network defensive; medical-tourism trend strong." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—", change: "Fri close", insight: "Digital-services concession base provides recurring revenue floor." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—", change: "Fri close", insight: "5G migration to dual-network model unlocks medium-term upside." }
    ],
    ipos: [
      { name: "No major IPO this week", sector: "—", price: "—", listingDate: "—", status: "—", note: "Pipeline quiet ahead of mid-year. Watch for tech and consumer listings in Q3 2026." }
    ],
    verdict: "Ringgit stability and falling US yields are constructive for KLCI heading into Monday. Inari and Tenaga most leveraged to AI capex narrative; banks defensive. Avoid stretched small caps; rotate into large-cap quality."
  },

  news: [
    { headline: "Trump-Iran peace deal could be signed this weekend in Europe", source: "Reuters",          time: "12h ago", sentiment: "BULLISH", meaning: "Reduces Middle East risk premium for equities and yields." },
    { headline: "US PPI rises 6.5% YoY in May, hottest since Nov 2022",          source: "BLS",              time: "24h ago", sentiment: "BEARISH", meaning: "Sticky inflation complicates Fed rate-cut timing." },
    { headline: "10-year yield drops 10bps Friday on peace headlines",           source: "TradingEconomics", time: "16h ago", sentiment: "BULLISH", meaning: "Lower yields support tech and growth valuations." },
    { headline: "VIX collapses 9% Friday as fear premium unwinds",               source: "CBOE",             time: "18h ago", sentiment: "BULLISH", meaning: "Complacency rising; volatility selling extreme." },
    { headline: "Gold holds above $4,200 despite risk-on bid",                   source: "TradingEconomics", time: "20h ago", sentiment: "WATCH",   meaning: "Safe haven demand persists despite equity strength." },
    { headline: "KLCI closes near 7-year highs at 1,683",                        source: "Bursa",            time: "36h ago", sentiment: "BULLISH", meaning: "Malaysian equities benefit from stable ringgit and yields." },
    { headline: "Tesla falls 2% as SpaceX opens for trade",                      source: "CNBC",             time: "36h ago", sentiment: "BEARISH", meaning: "Capital rotation diluting Tesla amid Musk-empire reshuffle." },
    { headline: "Standard Chartered cuts BTC year-end target to $100K",          source: "CryptoBriefing",   time: "48h ago", sentiment: "NEUTRAL", meaning: "Lower target reflects cycle moderation, not bear thesis." }
  ],

  goldSummary: {
    "Price":  { value: "$4,222", change: "+0.22%", note: "Safe-haven bid holds." },
    "Open":   { value: "$4,213", change: "", note: "" },
    "High":   { value: "$4,235", change: "", note: "Day high" },
    "Low":    { value: "$4,205", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,266.33" },
      { label: "R2",    value: "$4,250.67" },
      { label: "R1",    value: "$4,236.33" },
      { label: "Pivot", value: "$4,220.67" },
      { label: "S1",    value: "$4,206.33" },
      { label: "S2",    value: "$4,190.67" },
      { label: "S3",    value: "$4,176.33" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,250.67" },
      { label: "R2",    value: "$4,239.21" },
      { label: "R1",    value: "$4,232.13" },
      { label: "Pivot", value: "$4,220.67" },
      { label: "S1",    value: "$4,209.21" },
      { label: "S2",    value: "$4,202.13" },
      { label: "S3",    value: "$4,190.67" }
    ],
    camarilla: [
      { label: "R4", value: "$4,238.50" },
      { label: "R3", value: "$4,230.25" },
      { label: "R2", value: "$4,227.50" },
      { label: "R1", value: "$4,224.75" },
      { label: "S1", value: "$4,219.25" },
      { label: "S2", value: "$4,216.50" },
      { label: "S3", value: "$4,213.75" },
      { label: "S4", value: "$4,205.50" }
    ],
    note: "Gold trading above classic pivot $4,220 = bullish bias; bulls target R1 $4,236 then R2 $4,250."
  }
};
