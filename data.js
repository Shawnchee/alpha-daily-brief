window.CRUCIX_DATA = {
  generated: "Fri, 01 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "S&P and Nasdaq close at fresh records on AI capex tailwinds; gold near all-time high; BTC range-bound near $78k.",

  macro: {
    dxy:      { value: "—",      change: "N/A",      signal: "Index data unavailable; broadly soft this week." },
    gold:     { value: "$4,626.64", change: "+0.11%", signal: "Near record highs; safe-haven bid intact." },
    oil:      { value: "$104.23",   change: "N/A",    signal: "Elevated on US-Iran energy export impasse." },
    silver:   { value: "—",      change: "N/A",      signal: "Tracking gold; spot quote unavailable." },
    yield10y: { value: "4.39%",  change: "-6bps",    signal: "Yields ease from nine-month highs; relief." },
    vix:      { value: "16.99",  change: "+0.59%",   signal: "Volatility benign; complacency persists into May." },
    usdmyr:   { value: "3.97",   change: "N/A",      signal: "Ringgit firm versus soft greenback." },
    sp500:    { value: "7,230.12", change: "+0.29%", signal: "Fresh record close; breadth improving." },
    verdict: "Risk-on tone intact: yields easing from nine-month highs, VIX sub-17, US indices at records. Gold's grind to $4,626 signals real-yield repricing and persistent dollar softness. KLSE closed Friday for Labour Day; Bursa reopens Monday with a strongly positive Wall Street lead."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dom data not surfaced; ETH lagging." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$78,106", marketCap: "$1.55T", change1h: "N/A", change24h: "+1.50%", change7d: "N/A", insight: "BTC reclaimed $78k after defending mid-$75k support and is wedged between $75–80k since April 19. Futures-led rally raises caution; $80k breakout needed to confirm next leg." },
      { name: "Ethereum", symbol: "ETH", price: "$2,053",  marketCap: "$248B",  change1h: "N/A", change24h: "+0.80%", change7d: "N/A", insight: "ETH suppressed below $2,200 and continues to lag BTC into May. Spot ETF flows soft; market awaits Pectra-2 timing for catalyst." },
      { name: "Solana",   symbol: "SOL", price: "$84.07",  marketCap: "$40B",   change1h: "N/A", change24h: "+2.00%", change7d: "N/A", insight: "SOL holds above $80 with ecosystem resilient on DEX volumes and stablecoin growth. Outperforming ETH; key resistance $90." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1060",     change24h: "+1.20%", note: "Range-bound; awaiting BTC breakout." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000392", change24h: "+0.50%", note: "Consolidating near key resistance." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000063",  change24h: "+0.30%", note: "Tight range; momentum paused." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on lite: BTC defending the $75–80k range while equities print records, but derivatives signal short bias. A clean break of $80k would reignite alts and lift dom-rotation trades. Altseason still gated until ETH reclaims $2,200 with conviction."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,230.12",  change: "+0.29%" },
      { name: "Nasdaq",       value: "25,114.44", change: "+0.89%" },
      { name: "Dow",          value: "49,499.27", change: "-0.31%" },
      { name: "VIX",          value: "16.99",     change: "+0.59%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$665.95", change: "+0.29%", insight: "Tracks SPX record close; core allocation remains the obvious vehicle." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$674.78", change: "+0.89%", insight: "AI-heavy mega-cap exposure leading the tape into May." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",        change: "N/A",    insight: "Mirror of SPX; expect record print alongside VOO." },
      { ticker: "VTI",  name: "Total Market",      price: "—",        change: "N/A",    insight: "Total-market exposure benefiting from broadening breadth." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",        change: "N/A",    insight: "Speculative growth basket sensitive to falling 10y yields." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$460.94",  change: "N/A",    insight: "Chip cycle supported by hyperscaler capex commitments." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$43.89",   change: "+1.50%", insight: "BTC ÷ 1,800 proxy; tracking spot tightly into $80k test." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",        change: "N/A",    insight: "Tech leadership reasserted on AI capex narrative." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$432.40",  change: "+0.11%", insight: "Estimated as gold ÷ 10.7; near all-time high alongside spot." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "—",        change: "N/A",    notable: false, insight: "Ad spend resilient; AI infra spend a near-term margin watch." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$201.22",  change: "N/A",    notable: true,  insight: "Market cap $4.91T; remains AI capex prime beneficiary." },
      { ticker: "TSLA",  name: "Tesla",         price: "—",        change: "N/A",    notable: false, insight: "EV demand soft; robotaxi narrative the swing factor." },
      { ticker: "AAPL",  name: "Apple",         price: "$280.64",  change: "+3.43%", notable: true,  insight: "Q2 beat on iPhone strength and China rebound — multiple expansion." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",        change: "+1.54%", notable: true,  insight: "Up on $700B AI infrastructure spending announcement." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",        change: "N/A",    notable: false, insight: "Search resilient; cloud capex aligned with hyperscaler theme." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",        change: "N/A",    notable: false, insight: "AWS growth pivotal; retail margins steady." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",        change: "N/A",    notable: false, insight: "Subscriber growth healthy; ad-tier monetization scaling." },
      { ticker: "AMD",   name: "AMD",           price: "—",        change: "N/A",    notable: false, insight: "MI accelerator share gains the key to chip-cycle leverage." },
      { ticker: "PLTR",  name: "Palantir",      price: "$144.08",  change: "N/A",    notable: false, insight: "Government and enterprise AI deployments compounding." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "$451.24",  change: "N/A",    notable: false, insight: "Endpoint share recapture intact post-2024 outage." },
      { ticker: "COIN",  name: "Coinbase",      price: "$190.33",  change: "N/A",    notable: false, insight: "Trading volumes sensitive to BTC breaking $80k." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",        change: "+9.00%", notable: true,  insight: "Pops on BTC reclaim of $78k; AIMCo $219M sovereign stake bullish." },
      { ticker: "APP",   name: "AppLovin",      price: "$448.29",  change: "+3.22%", notable: true,  insight: "Ad-tech leader; analyst price targets imply further upside." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$25.80",   change: "N/A",    notable: false, insight: "AI-server demand intact but governance overhang persists." }
    ],
    trending: [
      { ticker: "MSTR", change: "+9.00%" },
      { ticker: "AAPL", change: "+3.43%" },
      { ticker: "APP",  change: "+3.22%" },
      { ticker: "MSFT", change: "+1.54%" },
      { ticker: "NVDA", change: "N/A" }
    ],
    verdict: "AI capex remains the dominant macro trade after the $700B infra commitment headline. Mega-cap winners (AAPL, MSFT, NVDA, APP) lead; defensives and small-caps lag. Own AI infra and quality compounders; avoid pure-rate-sensitive value until yields confirm the move below 4.30%."
  },

  malaysia: {
    klci:   { value: "1,722.02", change: "0.00%",  context: "Bursa closed Thursday flat at 1,722. May 1 Labour Day holiday — exchange shut Friday; Monday reopens with a strongly positive Wall Street lead." },
    usdmyr: { value: "3.97",     change: "N/A",    signal: "Ringgit firm against soft greenback." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM 11.08", change: "Thu close", insight: "Stable OPR backdrop; defensive yield anchor for local books." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "RM 7.80",  change: "Thu close", insight: "Regional banking franchise; ASEAN loan growth supportive." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",     price: "—",        change: "Thu close", insight: "Defensive mortgage book and tight asset quality stance." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",        price: "—",        change: "Thu close", insight: "Higher capital ratios support dividend visibility." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",          price: "—",        change: "Thu close", insight: "Data-centre demand a structural earnings tailwind." },
      { ticker: "INARI",  name: "Inari (0138.KL)",           price: "—",        change: "Thu close", insight: "Semi cycle leverage to RF and NVDA-driven capex flows." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",          price: "—",        change: "Thu close", insight: "Regional telco rationalisation underway; deleveraging focus." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)",  price: "—",        change: "Thu close", insight: "Defensive private-care growth; ringgit weakness mildly accretive." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",            price: "—",        change: "Thu close", insight: "Digital concession rollouts driving recurring revenue." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",           price: "—",        change: "Thu close", insight: "5G wholesale model now stable; FCF supports dividend." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "No fresh primary issuance flagged.", note: "Bursa quiet on new IPOs into Labour Day. Pipeline focus on tech and consumer names heading into Q2 listings." }
    ],
    verdict: "Ringgit at 3.97 reflects a softer dollar tape and is supportive for local risk. Maybank at RM11.08 remains the cleanest defensive yield play; Inari is the high-beta watch as semis lead in the US. Bursa closed Friday — Monday should open firm tracking US record closes."
  },

  news: [
    { headline: "S&P 500, Nasdaq close at records as oil cools and Apple rises",         source: "CNBC",              time: "12h ago", sentiment: "BULLISH",  meaning: "Records set; AI capex narrative powering broad tape higher." },
    { headline: "Microsoft jumps after $700B AI infrastructure spending plan announced", source: "CNBC",              time: "12h ago", sentiment: "BULLISH",  meaning: "Affirms multi-year hyperscaler capex cycle for chips." },
    { headline: "10-year Treasury yield falls below 4.40% from nine-month highs",        source: "Trading Economics", time: "14h ago", sentiment: "BULLISH",  meaning: "Yield relief supports duration and growth equities." },
    { headline: "Bitcoin reclaims $78k while IBIT holds steady; $80k breakout in sight", source: "BraveNewCoin",      time: "6h ago",  sentiment: "BULLISH",  meaning: "BTC defending range; breakout would reignite altcoin rotation." },
    { headline: "Strategy (MSTR) pops 9% as Bitcoin recovers to $78k",                   source: "Bitcoin Magazine",  time: "12h ago", sentiment: "BULLISH",  meaning: "Leveraged BTC proxy outperforms on range reclaim." },
    { headline: "Apple Q2 earnings top estimates on strong iPhone, China sales",         source: "Yahoo Finance",     time: "14h ago", sentiment: "BULLISH",  meaning: "iPhone resilience plus China rebound supports multiple expansion." },
    { headline: "AIMCo buys $219M MSTR stake — first sovereign Bitcoin allocation",      source: "Bitcoin.com",       time: "24h ago", sentiment: "BULLISH",  meaning: "Sovereign wealth normalising BTC exposure via equity wrapper." },
    { headline: "Bybit removed from Malaysia investor alert list",                       source: "crypto.news",       time: "24h ago", sentiment: "NEUTRAL",  meaning: "Regulatory normalisation broadens local crypto access channels." }
  ],

  goldSummary: {
    "Price":  { value: "$4,626.64", change: "+0.11%", note: "Near record; safe-haven bid intact." },
    "Open":   { value: "$4,621.78", change: "",       note: "Prior close" },
    "High":   { value: "$4,636.00", change: "",       note: "Day high" },
    "Low":    { value: "$4,614.09", change: "",       note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,655.74" },
      { label: "R2",    value: "$4,645.87" },
      { label: "R1",    value: "$4,633.83" },
      { label: "Pivot", value: "$4,623.96" },
      { label: "S1",    value: "$4,611.92" },
      { label: "S2",    value: "$4,602.05" },
      { label: "S3",    value: "$4,590.01" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,645.87" },
      { label: "R2",    value: "$4,637.50" },
      { label: "R1",    value: "$4,632.33" },
      { label: "Pivot", value: "$4,623.96" },
      { label: "S1",    value: "$4,615.59" },
      { label: "S2",    value: "$4,610.42" },
      { label: "S3",    value: "$4,602.05" }
    ],
    camarilla: [
      { label: "R4", value: "$4,633.83" },
      { label: "R3", value: "$4,627.81" },
      { label: "R2", value: "$4,625.80" },
      { label: "R1", value: "$4,623.79" },
      { label: "S1", value: "$4,619.77" },
      { label: "S2", value: "$4,617.76" },
      { label: "S3", value: "$4,615.75" },
      { label: "S4", value: "$4,609.73" }
    ],
    note: "Spot $4,626 sits just above the $4,623.96 classic pivot — bullish bias intact while $4,612 holds."
  }
};
