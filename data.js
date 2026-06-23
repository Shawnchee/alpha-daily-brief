window.CRUCIX_DATA = {
  generated: "Tue, 23 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off tone as gold, equities and crypto all retreat with DXY firm and yields easing.",

  macro: {
    dxy:      { value: "101.19",   change: "+0.39%", signal: "Dollar firm; pressures EM and commodities." },
    gold:     { value: "$4,124.22", change: "-1.60%", signal: "Profit-taking after geopolitical risk eases." },
    oil:      { value: "$73.32",    change: "-0.73%", signal: "WTI soft on Iran peace optimism." },
    silver:   { value: "$62.34",    change: "-4.23%", signal: "Sharp drop tracks gold weakness." },
    yield10y: { value: "4.46%",     change: "-4bps",  signal: "Yields easing on diplomacy headlines." },
    vix:      { value: "17.28",     change: "+0.00%", signal: "Volatility tame despite tape weakness." },
    usdmyr:   { value: "4.08",      change: "+0.05%", signal: "Ringgit steady; dollar pressure persists." },
    sp500:    { value: "7,472.79",  change: "-0.37%", signal: "Index slips as megacaps lead lower." },
    verdict: "DXY firm with yields easing signals defensive flows into Treasuries despite peace optimism. Gold's pullback plus VIX near 17 suggests risk markets aren't panicking, just rotating. Crypto faces a $60k BTC defense, US equities lean defensive into PCE, KLSE will track Wall Street softness into Tuesday open."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance elevated as alts lag." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$96,262", marketCap: "$1.91T", change1h: "N/A", change24h: "-1.04%", change7d: "N/A", insight: "BTC drifting toward the $60k level cited by analysts as the key midweek squeeze line. Contrarian indicators suggest downside is limited near a bottom." },
      { name: "Ethereum", symbol: "ETH", price: "$1,682", marketCap: "$202B",   change1h: "N/A", change24h: "+1.76%", change7d: "-3.16%", insight: "ETH bouncing modestly but still down on the week as ETF flows stagnate. Holding above $1,650 is critical to avoid a deeper alt flush." },
      { name: "Solana",   symbol: "SOL", price: "$71.85", marketCap: "$34B",    change1h: "N/A", change24h: "-1.43%", change7d: "N/A", insight: "SOL underperforms as memecoin activity cools and TVL plateaus. A reclaim of $80 needed for trend repair." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",     change24h: "-2.10%", note: "Bearish flip below 50d EMA." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000098",  change24h: "+0.50%", note: "Mild bullish near EMA cluster." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000630", change24h: "-1.20%", note: "Consolidating between 50/100 EMA." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",     note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",     note: "Speculative SOL memecoin." }
    ],
    verdict: "Crypto is risk-off with BTC defending the $60k psychological level into a quarterly options expiry. ETH's modest bounce is not enough to confirm alt rotation while DOGE flips bearish. No altseason signal until BTC reclaims $100k cleanly."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,472.79",  change: "-0.37%" },
      { name: "Nasdaq",       value: "26,166.60", change: "-1.32%" },
      { name: "Dow",          value: "51,712.71", change: "+0.29%" },
      { name: "VIX",          value: "17.28",     change: "+0.00%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$686.10", change: "-0.25%", insight: "Tracks S&P softness; megacap drag dominant." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$737.95", change: "-0.36%", insight: "Tech-heavy index pressured by AI names." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "—",      insight: "Mirrors VOO; liquidity proxy for index hedges." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Broad-market wrap; small caps relatively resilient." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",      insight: "Innovation basket pressured by growth derate." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "—",      insight: "Semis under pressure as NVDA leads chips lower." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$53.48",  change: "-1.04%", insight: "Spot BTC ETF tracks BTC weakness into expiry." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Tech sector ETF mirrors megacap softness." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$385.44", change: "-1.60%", insight: "Gold ETF retreats as peace optimism cuts haven bid." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$569.96", change: "+1.08%", notable: true,  insight: "Outperforms as ad-tech narrative holds despite tape weakness." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$203.17", change: "-2.63%", notable: true,  insight: "AI leader pulls back, dragging semis with it." },
      { ticker: "TSLA",  name: "Tesla",         price: "$388.37", change: "-4.12%", notable: true,  insight: "Heavy selling on robotaxi catalyst fade and macro risk." },
      { ticker: "AAPL",  name: "Apple",         price: "$299.77", change: "+0.93%", notable: false, insight: "Defensive bid as services strength offsets hardware." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",       change: "-3.14%", notable: true,  insight: "Cloud leader sells off sharply alongside hyperscaler peers." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "—",      notable: false, insight: "Search dominance intact; AI overhang weighs in selloffs." },
      { ticker: "AMZN",  name: "Amazon",        price: "$244.39", change: "—",      notable: false, insight: "Retail-AWS combo defensive but tied to consumer print." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",       change: "—",      notable: false, insight: "Streaming leader resilient; ad-tier growth narrative intact." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "—",      notable: false, insight: "Tracks semis lower; lags NVDA in AI accelerator share." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "—",      notable: false, insight: "Government-AI exposure cushions but high beta to growth." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",      notable: false, insight: "Cybersecurity defensive but premium multiple sensitive." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "—",      notable: false, insight: "Trades as crypto beta; BTC slide pressures revenue." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "—",      notable: false, insight: "Capital stack under scrutiny as BTC retreats." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",      notable: false, insight: "Ad-tech momentum stock; sentiment-sensitive." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$35.69",  change: "—",      notable: false, insight: "AI server play stuck in range; awaiting NVDA cycle." }
    ],
    trending: [
      { ticker: "TSLA",  change: "-4.12%" },
      { ticker: "MSFT",  change: "-3.14%" },
      { ticker: "NVDA",  change: "-2.63%" },
      { ticker: "META",  change: "+1.08%" },
      { ticker: "AAPL",  change: "+0.93%" }
    ],
    verdict: "AI trade is consolidating with NVDA, TSLA and MSFT under distribution while META and AAPL show relative strength. Sector rotation favors defensives and quality cash flows over high-multiple growth. Own megacap profitability, avoid speculative AI beta into PCE."
  },

  malaysia: {
    klci:   { value: "1,572", change: "-0.20%", context: "KLCI drifted lower last close as banks and tech took profit. Tuesday open likely soft tracking Wall Street weakness." },
    usdmyr: { value: "4.08",  change: "+0.05%", signal: "Ringgit steady; dollar strength caps upside." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "—", change: "—", insight: "Anchor bank trades on OPR stability and dividend yield." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "—", change: "—", insight: "Regional bank tracks ASEAN credit cycle and ringgit." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",   price: "—", change: "—", insight: "Defensive lender; mortgage book and low NPLs." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",      price: "—", change: "—", insight: "Mid-tier bank trades at discount to peers." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",        price: "—", change: "—", insight: "Utility benefits from data-center demand pipeline." },
      { ticker: "INARI",  name: "Inari (0138.KL)",         price: "—", change: "—", insight: "Semi tester linked to RF cycle and NVDA softness." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",        price: "—", change: "—", insight: "Telco restructuring and regional asset rationalization." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—", change: "—", insight: "Defensive healthcare with pan-Asian footprint." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",          price: "—", change: "—", insight: "Digital concessions tied to government rollout pace." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",         price: "—", change: "—", insight: "5G wholesale dynamics drive earnings trajectory." }
    ],
    ipos: [
      { name: "Pipeline subdued", sector: "Mixed", price: "—", listingDate: "—", status: "Upcoming", note: "Bursa IPO pipeline soft as global tape weakens. Watch for tech and consumer listings into 2H." }
    ],
    verdict: "Ringgit holds 4.08 with no breakout catalyst either way. Inari is the cleanest semi proxy if NVDA stabilizes; banks remain defensive yield plays. Tuesday open soft on Wall Street follow-through, fade rallies into KLCI 1,580."
  },

  news: [
    { headline: "Bitcoin faces midweek squeeze as $60k level decides next move",  source: "CryptoNews",   time: "2h ago",  sentiment: "WATCH",   meaning: "BTC defending key psychological support into options expiry." },
    { headline: "Gold falls below $4,150 as US-Iran peace optimism cuts haven bid", source: "Reuters",      time: "4h ago",  sentiment: "BEARISH", meaning: "Safe-haven unwind pressures gold and silver lower." },
    { headline: "10Y Treasury yield drops to 4.46% on diplomacy headlines",         source: "Bloomberg",    time: "5h ago",  sentiment: "BULLISH", meaning: "Duration bid signals defensive flows into Treasuries." },
    { headline: "Nasdaq tumbles 1.32% as megacap tech leads decline",                source: "CNBC",         time: "6h ago",  sentiment: "BEARISH", meaning: "AI trade consolidates with NVDA and TSLA hit hardest." },
    { headline: "MicroStrategy's capital stack faces test as BTC retreats",          source: "The Block",    time: "8h ago",  sentiment: "BEARISH", meaning: "Leverage on BTC balance sheet under renewed scrutiny." },
    { headline: "PCE inflation print due Friday with Fed path in focus",            source: "Reuters",      time: "10h ago", sentiment: "WATCH",   meaning: "Key inflation data drives next leg in yields." },
    { headline: "DXY firm at 101 as dollar holds despite peace talks",              source: "Investing",    time: "12h ago", sentiment: "BEARISH", meaning: "Stronger dollar pressures commodities and emerging markets." },
    { headline: "Bursa Malaysia mixed as banks and tech take profit",               source: "The Edge",     time: "14h ago", sentiment: "NEUTRAL", meaning: "KLCI consolidates while ringgit holds 4.08 range." }
  ],

  goldSummary: {
    "Price":    { value: "$4,124.22", change: "-1.60%", note: "Profit-taking on peace optimism." },
    "Open":     { value: "$4,191.00", change: "", note: "" },
    "High":     { value: "$4,210.00", change: "", note: "Day high" },
    "Low":      { value: "$4,150.00", change: "", note: "Day low" },
    "52W High": { value: "N/A",       change: "", note: "" },
    "52W Low":  { value: "N/A",       change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,277.33" },
      { label: "R2",    value: "$4,243.67" },
      { label: "R1",    value: "$4,217.33" },
      { label: "Pivot", value: "$4,183.67" },
      { label: "S1",    value: "$4,157.33" },
      { label: "S2",    value: "$4,123.67" },
      { label: "S3",    value: "$4,097.33" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,243.67" },
      { label: "R2",    value: "$4,220.75" },
      { label: "R1",    value: "$4,206.59" },
      { label: "Pivot", value: "$4,183.67" },
      { label: "S1",    value: "$4,160.75" },
      { label: "S2",    value: "$4,146.59" },
      { label: "S3",    value: "$4,123.67" }
    ],
    camarilla: [
      { label: "R4", value: "$4,224.00" },
      { label: "R3", value: "$4,207.50" },
      { label: "R2", value: "$4,202.00" },
      { label: "R1", value: "$4,196.50" },
      { label: "S1", value: "$4,185.50" },
      { label: "S2", value: "$4,180.00" },
      { label: "S3", value: "$4,174.50" },
      { label: "S4", value: "$4,158.00" }
    ],
    note: "Gold trading below classic pivot of $4,183 — bearish near-term; needs reclaim for bullish reversal."
  }
};
