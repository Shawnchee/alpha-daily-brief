window.CRUCIX_DATA = {
  generated: "Thu, 25 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Hot US inflation print triggered a brutal risk-off; BTC cracked $60K, semis dumped, gold held $4K.",

  macro: {
    dxy:      { value: "101.58", change: "+0.17%", signal: "Dollar firm; squeezes EM and crypto" },
    gold:     { value: "$3,997", change: "-2.00%", signal: "Real yields up; gold defends $4K shelf" },
    oil:      { value: "$71.80", change: "-1.20%", signal: "Iran truce hits crude; demand fears too" },
    silver:   { value: "$48.20", change: "-4.00%", signal: "High-beta gold cousin gets hit hardest" },
    yield10y: { value: "4.40%", change: "-9bps", signal: "Yields fade; flight-to-quality bid emerging" },
    vix:      { value: "18.63", change: "-4.41%", signal: "VIX cools but breadth still ugly" },
    usdmyr:   { value: "4.1055", change: "-0.71%", signal: "Ringgit gains; weak DXY-Asia divergence" },
    sp500:    { value: "7,358", change: "-0.10%", signal: "Index masks brutal under-the-hood damage" },
    verdict: "DXY firm with yields fading is unusual — sticky-inflation fear without growth confidence. VIX dropping despite ugly tape says the panic is concentrated, not systemic, but tech and crypto remain the pressure valve. KLSE benefits from softer USD even as global risk wobbles."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leading lower; alts beta-bleeding hard" },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$60,500", marketCap: "$1.19T", change1h: "N/A", change24h: "-3.20%", change7d: "N/A", insight: "BTC cracked $60K on the hot US CPI print — its lowest in 21 months. Short-squeeze setup builds but $58K is the next defensive line." },
      { name: "Ethereum", symbol: "ETH", price: "$1,945",  marketCap: "$234B",  change1h: "N/A", change24h: "-4.10%", change7d: "N/A", insight: "ETH lagging BTC as ETF flows dry up and the EF cuts narrative weighs on sentiment. The $1,800 zone is critical structural support." },
      { name: "Solana",   symbol: "SOL", price: "$78.96",  marketCap: "$37B",   change1h: "N/A", change24h: "-1.43%", change7d: "N/A", insight: "SOL outperforming peers on memecoin throughput resilience. A reclaim of $85 would invalidate the bearish weekly setup." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",      change24h: "-2.87%", note: "Elon-beta tracking TSLA lower." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000334",  change24h: "-0.60%", note: "Consolidating; awaiting BTC bounce." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000615",  change24h: "-2.00%", note: "Below 50-day EMA; weak." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk fully off — hot CPI shock blew through stop levels on BTC, and altcoin beta is brutal. Key level: BTC $58K must hold or expect cascade liquidations toward $52K. Altseason signal dead; cash and BTC dominance until the macro print resets."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,358.22",  change: "-0.10%" },
      { name: "Nasdaq",       value: "25,476.64", change: "-0.43%" },
      { name: "Dow",          value: "51,848.90", change: "+0.35%" },
      { name: "VIX",          value: "18.63",     change: "-4.41%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$675.69", change: "-0.10%", insight: "Mirrors S&P; cap-weight masking semi-led pain underneath." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—",       change: "-0.43%", insight: "Mega-cap tech under pressure as AI-trade rotation accelerates." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "-0.10%", insight: "Largest S&P ETF; flows the cleanest read on US sentiment." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "-0.20%", insight: "Broad US tilt — small caps lagging mega-caps again." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "-2.50%", insight: "High-beta growth in the eye of the inflation storm." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "-3.80%", insight: "Chip-led selloff continues; NVDA/Micron drag persists." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$33.61",  change: "-3.20%", insight: "Tracking BTC lower; spot ETF outflows the key signal." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "-1.00%", insight: "Tech sector cracking; defensive rotation into staples emerging." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$373.55", change: "-2.00%", insight: "Gold's $4K shelf intact despite rate-cut hopes fading." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$562.20", change: "-0.29%", notable: false, insight: "Held up better than peers; ad-spend resilience the key thesis." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$200.04", change: "-4.13%", notable: true,  insight: "Semi sell-off intensifies; $200 is the line in the sand for AI bulls." },
      { ticker: "TSLA",  name: "Tesla",         price: "$381.61", change: "-5.79%", notable: true,  insight: "High-beta name dragged hard by macro shock; demand worries reignited." },
      { ticker: "AAPL",  name: "Apple",         price: "$293.17", change: "-0.38%", notable: false, insight: "Defensive mega-cap; cash flow story shielding from full sell-off." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",       change: "-0.80%", notable: false, insight: "AI-infra capex narrative softening as customers tighten budgets." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "-1.20%", notable: false, insight: "Search ad pricing intact; AI-search transition the overhang." },
      { ticker: "AMZN",  name: "Amazon",        price: "$208.76", change: "-0.53%", notable: false, insight: "AWS growth the swing factor against retail margin pressure." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",       change: "-1.40%", notable: false, insight: "Near 52-week low; down 32% since Hastings exit news." },
      { ticker: "AMD",   name: "AMD",           price: "$205.27", change: "+2.91%", notable: true,  insight: "Rare green; data-center MI400 takes share narrative gaining." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "-2.50%", notable: false, insight: "Gov-AI runway intact but valuation gets repriced on risk-off." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "-1.80%", notable: false, insight: "Cyber tape softening; Falcon platform consolidation continues." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "-5.50%", notable: false, insight: "Pure BTC-beta — trades like a 2x leveraged crypto ETF here." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$87.00",  change: "-7.00%", notable: true,  insight: "First sub-$100 print since March 2024; BTC-treasury premium fully crushed." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "-3.20%", notable: false, insight: "AdTech beta to consumer spend — gets hit on inflation fears." },
      { ticker: "SMCI",  name: "Super Micro",   price: "—",       change: "-4.50%", notable: false, insight: "AI-server beta with audit overhang; volatile on every macro print." }
    ],
    trending: [
      { ticker: "MSTR", change: "-7.00%" },
      { ticker: "TSLA", change: "-5.79%" },
      { ticker: "COIN", change: "-5.50%" },
      { ticker: "NVDA", change: "-4.13%" },
      { ticker: "AMD",  change: "+2.91%" }
    ],
    verdict: "AI trade in repricing mode — NVDA/SMCI flush as AMD takes share on MI400. Rotation into defensives (AAPL, META, staples) over high-beta growth. Own quality cash-flow names; avoid leveraged crypto-proxies (MSTR, COIN) until BTC reclaims $62K."
  },

  malaysia: {
    klci:   { value: "1,707.68", change: "-0.40%", context: "KLCI gave back gains as regional risk wobbled on US CPI shock. Friday close near session lows; Monday opens vulnerable to gap-down on Wall St follow-through." },
    usdmyr: { value: "4.1055",   change: "-0.71%", signal: "Ringgit firm; softer DXY-Asia decoupling" },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "—", change: "Fri close", insight: "OPR steady at 3.00% supports NIM; defensive yield play in choppy tape." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "—", change: "Fri close", insight: "Regional ASEAN exposure leveraged to ringgit strength near-term." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—", change: "Fri close", insight: "Defensive consumer-bank play; lowest NPL ratio in sector." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—", change: "Fri close", insight: "Dividend-yield story intact; capital return remains the thesis." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—", change: "Fri close", insight: "Data-center power demand the secular tailwind for the utility." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—", change: "Fri close", insight: "Semi-cycle beta — NVDA's -4% session sets up a soft Monday open." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—", change: "Fri close", insight: "Telco consolidation narrative; XL-Axiata integration the swing factor." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—", change: "Fri close", insight: "Defensive healthcare exposure across ASEAN — recession-resilient." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—", change: "Fri close", insight: "Digital-services concession monopoly; cash-flow defensive." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—", change: "Fri close", insight: "5G monetization slow; dividend yield the support." }
    ],
    ipos: [
      { name: "TBD", sector: "—", price: "—", listingDate: "—", status: "—", note: "Pipeline quiet this week; watch Bursa for new prospectuses on Monday." }
    ],
    verdict: "Ringgit at 4.10 is the bright spot — softest reading in weeks lifts importers and consumer plays. Best stock: IHH on defensive ASEAN healthcare. Monday Bursa likely opens -0.5% on Wall St follow-through; buy dips in banks."
  },

  news: [
    { headline: "Bitcoin Plunges Below $60K on Hot US Inflation Print",    source: "CoinDesk",         time: "2h ago", sentiment: "BEARISH", meaning: "CPI shock kills near-term rate-cut hopes; BTC tests $58K next." },
    { headline: "Nasdaq Closes Lower as Chip Sell-Off Resumes",            source: "CNBC",             time: "4h ago", sentiment: "BEARISH", meaning: "Micron drag spreads to NVDA; AI-trade repricing accelerates this week." },
    { headline: "MicroStrategy Breaks $100 First Time Since March 2024",   source: "Yahoo Finance",    time: "3h ago", sentiment: "BEARISH", meaning: "BTC-treasury premium crushed; mNAV compression continues lower." },
    { headline: "Gold Holds Above $4,000 Despite Stronger Dollar",         source: "TradingEconomics", time: "1h ago", sentiment: "NEUTRAL", meaning: "Real-yield resilience suggests structural bid; $3,950 the new floor." },
    { headline: "Tesla Slides Nearly 6% as Demand Worries Return",         source: "Yahoo Finance",    time: "5h ago", sentiment: "BEARISH", meaning: "Inflation shock crimps EV affordability narrative; FSD optionality unchanged." },
    { headline: "AMD Bucks Tape on MI400 Share-Take Narrative",            source: "CNBC",             time: "6h ago", sentiment: "BULLISH", meaning: "Hyperscaler diversification away from NVDA finally showing up." },
    { headline: "Ringgit Strengthens to 4.10 Against Dollar",              source: "Yahoo Finance",    time: "8h ago", sentiment: "BULLISH", meaning: "Asia FX decoupling from DXY supports KLSE consumer plays." },
    { headline: "Crude Slides Below $72 as Iran Risk Premium Fades",       source: "Schwab",           time: "7h ago", sentiment: "NEUTRAL", meaning: "Lower energy easing inflation pressure; consumer staples benefit." }
  ],

  goldSummary: {
    "Price":  { value: "$3,997.21", change: "-2.00%", note: "Held $4K shelf despite stronger dollar" },
    "Open":   { value: "$4,030.00", change: "", note: "" },
    "High":   { value: "$4,030.00", change: "", note: "Day high" },
    "Low":    { value: "$3,970.00", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,088.00" },
      { label: "R2",    value: "$4,059.00" },
      { label: "R1",    value: "$4,028.00" },
      { label: "Pivot", value: "$3,999.00" },
      { label: "S1",    value: "$3,968.00" },
      { label: "S2",    value: "$3,939.00" },
      { label: "S3",    value: "$3,908.00" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,059.00" },
      { label: "R2",    value: "$4,036.08" },
      { label: "R1",    value: "$4,021.92" },
      { label: "Pivot", value: "$3,999.00" },
      { label: "S1",    value: "$3,976.08" },
      { label: "S2",    value: "$3,961.92" },
      { label: "S3",    value: "$3,939.00" }
    ],
    camarilla: [
      { label: "R4", value: "$4,030.00" },
      { label: "R3", value: "$4,013.50" },
      { label: "R2", value: "$4,008.00" },
      { label: "R1", value: "$4,002.50" },
      { label: "S1", value: "$3,991.50" },
      { label: "S2", value: "$3,986.00" },
      { label: "S3", value: "$3,980.50" },
      { label: "S4", value: "$3,964.00" }
    ],
    note: "Gold trading just below the classic pivot at $3,999 — bias bearish unless reclaim of $4,028 R1 triggers a squeeze."
  }
};
