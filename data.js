window.CRUCIX_DATA = {
  generated: "Wed, 17 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off tape — Fed under new Chair Warsh signaled possible hikes; tech sold, VIX spiked, gold dipped.",

  macro: {
    dxy:      { value: "99.42",  change: "+0.01%", signal: "Dollar steady; bias higher on hawkish Fed." },
    gold:     { value: "$4,336.00", change: "-0.36%", signal: "Mild pullback; trend intact above $4,300." },
    oil:      { value: "$81.15",  change: "+0.50%", signal: "WTI firm on Middle East risk premium." },
    silver:   { value: "$69.44",  change: "-1.05%", signal: "Silver lags gold; industrial demand softer." },
    yield10y: { value: "4.468%",  change: "+0.3bps", signal: "Yields creep up as cuts get priced out." },
    vix:      { value: "18.44",   change: "+12.37%", signal: "Fear gauge jumps post-Fed; hedging back." },
    usdmyr:   { value: "4.02",    change: "-0.05%", signal: "Ringgit steady ahead of Bursa Wednesday." },
    sp500:    { value: "7,420.10", change: "-1.21%", signal: "Index breaks support on rate-hike scare." },
    verdict: "DXY firm with 10Y at 4.47% and VIX +12% screams late-cycle hawkish risk. Crypto and high-beta tech vulnerable; gold consolidates rather than breaks. KLSE imports the risk-off mood but ringgit anchors locally."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady around 55-56%." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$96,262.14", marketCap: "$1.91T", change1h: "N/A", change24h: "-1.04%", change7d: "N/A", insight: "BTC tagged $64.5K intraday lows on Strategy-selling fears before reclaiming $66K post-G7 — extreme volatility regime. Macro risk-off from Warsh Fed is the dominant driver, not flows." },
      { name: "Ethereum", symbol: "ETH", price: "$2,178.10", marketCap: "$262B",  change1h: "N/A", change24h: "-1.20%", change7d: "N/A", insight: "ETH still range-bound under $2,300, lagging BTC despite ETF inflows. Needs a clean BTC reclaim of $70K for any altseason ignition." },
      { name: "Solana",   symbol: "SOL", price: "$73.34",   marketCap: "$35B",   change1h: "N/A", change24h: "-1.43%", change7d: "N/A", insight: "SOL trapped under $80 as memecoin volume cools and L2 narrative captures attention. Holding $70 keeps the ecosystem bid intact." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.0904",     change24h: "-1.80%", note: "Bearish flip below 20-day MA." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000029",  change24h: "+2.10%", note: "Six-day rebound; meme leader." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000050",  change24h: "-0.40%", note: "Rejected at daily resistance." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-off bleed across crypto with BTC's $64.5K wick a warning, not a bottom. Key BTC level: hold $66K to keep bullish structure; lose it and $60K opens up. No altseason while BTC dominance climbs and VIX rips."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,420.10",  change: "-1.21%" },
      { name: "Nasdaq",       value: "26,021.66", change: "-1.34%" },
      { name: "Dow",          value: "51,492.55", change: "-0.98%" },
      { name: "VIX",          value: "18.44",     change: "+12.37%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—",      change: "—",      insight: "Tracks S&P; mirrors the -1.21% index slide on Fed hawkishness." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—",      change: "—",      insight: "Tech-heavy QQQ leads losses as MSFT/AMZN both -3%+." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",      change: "—",      insight: "Risk-off rotation; SPY follows index lower into Fed dot plot." },
      { ticker: "VTI",  name: "Total Market",      price: "—",      change: "—",      insight: "Broad market hit but small-caps relatively resilient today." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",      change: "—",      insight: "High-beta names get punished hardest on yield backup." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",      change: "—",      insight: "Chips drag — NVDA -2.4%, SMCI under $30 weighs on sector." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$53.48", change: "-1.04%", insight: "Tracks BTC's -1% move; net flows turning neutral this week." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",      change: "—",      insight: "Tech sector ETF leads downside given mega-cap selling." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$405.23",change: "-0.36%", insight: "GLD pulls back with spot gold; uptrend intact above $400." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$600.21", change: "+1.13%", notable: true,  insight: "Outlier strength on AI ad-revenue commentary; only mega-cap up." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$207.41", change: "-2.37%", notable: false, insight: "AI chip leader sold on rate-fear repricing, not fundamentals." },
      { ticker: "TSLA",  name: "Tesla",         price: "$404.66", change: "-1.58%", notable: false, insight: "Tesla cools after recent run; robotaxi narrative paused." },
      { ticker: "AAPL",  name: "Apple",         price: "$299.24", change: "-1.20%", notable: false, insight: "Apple drifts with tape; WWDC AI catalysts fully priced." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$378.91", change: "-3.79%", notable: true,  insight: "Biggest mega-cap drag — Azure capex worries plus rate beta." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "—",      notable: false, insight: "Ad and search exposure leaves Alphabet vulnerable in tech selloff." },
      { ticker: "AMZN",  name: "Amazon",        price: "$237.50", change: "-3.46%", notable: true,  insight: "AWS rerated lower as cloud capex/yields bite simultaneously." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",       change: "—",      notable: true,  insight: "Slide deepens near 52-week lows after Roku deal lost and growth slowing." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "—",      notable: false, insight: "Likely down 2-3% with semis on rate-hike repricing." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "—",      notable: false, insight: "High-multiple AI name vulnerable to duration shock." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",      notable: false, insight: "Cyber demand resilient but rate-sensitive multiple gets hit." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "—",      notable: false, insight: "Tracks BTC; -1% move and risk-off flow drag the name." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$122.81", change: "-3.50%", notable: true,  insight: "Down 66.7% YoY as Saylor pushes new bitcoin-per-share metric." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",      notable: false, insight: "Ad-tech high-beta; selling-pressure proxy for QQQ today." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$29.45",  change: "-4.20%", notable: true,  insight: "Tumbled 30% on $7B financing plan despite AI server backlog." }
    ],
    trending: [
      { ticker: "VIX",  change: "+12.37%" },
      { ticker: "SMCI", change: "-4.20%" },
      { ticker: "MSFT", change: "-3.79%" },
      { ticker: "MSTR", change: "-3.50%" },
      { ticker: "AMZN", change: "-3.46%" }
    ],
    verdict: "The AI trade still works but multiple compression on yield backup is the real tax — own META over MSFT today. Rotation favors energy, defensives, and gold proxies over mega-cap tech. Avoid high-beta SaaS and crypto-equity proxies until BTC reclaims $70K and VIX cools under 16."
  },

  malaysia: {
    klci:   { value: "1,612.40", change: "+0.18%", context: "KLCI held green Tuesday on bank strength. Wednesday open likely cautious importing Wall Street's -1.2% slide." },
    usdmyr: { value: "4.02",     change: "-0.05%", signal: "Ringgit firm; BNM stance supports below 4.05." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM11.20", change: "+1.87%", insight: "Regional bank leader; OPR steady supports NIM into year-end." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "RM7.80",  change: "+1.17%", insight: "ASEAN play benefits from rupiah/baht stability vs USD." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",       change: "—",      insight: "Defensive retail bank — best risk-off shelter on Bursa." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",       change: "—",      insight: "Highest dividend yield among large banks; value pick." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",       change: "—",      insight: "Data-center capex story intact; AI demand a tailwind." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "RM2.27",  change: "+2.78%", insight: "Semi cycle play; tracks NVDA — vulnerable if AI sells through." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",       change: "—",      insight: "Telco consolidation upside but ringgit-sensitive EBITDA." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",       change: "—",      insight: "Defensive healthcare; medical-tourism rebound supports earnings." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",       change: "—",      insight: "Digital govt services; concession renewal risk monitored." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",       change: "—",      insight: "5G rollout in steady state; dividend yield supports floor." }
    ],
    ipos: [
      { name: "Pipeline quiet ahead of 2H listings", sector: "Various", price: "—", listingDate: "—", status: "Watch", note: "No fresh IPO catalysts on Bursa this week. Eyes on next consumer-tech filing post-July." }
    ],
    verdict: "Ringgit's stability at 4.02 is the standout — Bursa can decouple modestly from US tech selloff. Inari at RM2.27 with +2.78% is the best momentum name but most exposed to global semi sentiment. Wednesday outlook: banks defensive, tech vulnerable, KLCI to open flat-to-down 0.3%."
  },

  news: [
    { headline: "Fed holds rates; Warsh signals likely hike later 2026",    source: "Yahoo Finance", time: "8h ago",  sentiment: "BEARISH", meaning: "Hawkish surprise pushes yields higher; risk assets reprice lower." },
    { headline: "Bitcoin tags $64.5K low on Strategy selling fears",        source: "TradingView",   time: "6h ago",  sentiment: "BEARISH", meaning: "Forced-seller narrative weighs on BTC despite spot ETF demand." },
    { headline: "Bitcoin reclaims $66,000 after Trump G7 summit remarks",   source: "Yahoo Finance", time: "4h ago",  sentiment: "BULLISH", meaning: "Geopolitical tailwind helps BTC bounce off intraday lows fast." },
    { headline: "Netflix slide deepens after losing Roku deal bid",         source: "Yahoo Finance", time: "5h ago",  sentiment: "BEARISH", meaning: "NFLX near 52-week low as growth slowdown spooks investors hard." },
    { headline: "SMCI -30% on $7B financing plan despite AI backlog",       source: "Robinhood",     time: "10h ago", sentiment: "BEARISH", meaning: "Dilution risk overshadows AI server demand and order pipeline." },
    { headline: "Gold pulls back to $4,336 as DXY firms post-Fed",          source: "Investing.com", time: "3h ago",  sentiment: "NEUTRAL", meaning: "Healthy consolidation; uptrend intact above $4,300 pivot zone." },
    { headline: "Saylor unveils new bitcoin-per-share Strategy metric",     source: "Digital Today", time: "12h ago", sentiment: "WATCH",   meaning: "MSTR pitches new valuation framework as stock down 66% YoY." },
    { headline: "Crude oil firm at $81 on Middle East risk premium",        source: "Investing.com", time: "7h ago",  sentiment: "NEUTRAL", meaning: "WTI bid on geopolitics; capped by demand worries from Fed." }
  ],

  goldSummary: {
    "Price":    { value: "$4,336.00", change: "-0.36%", note: "Mild pullback in solid uptrend." },
    "Open":     { value: "$4,351.60", change: "",       note: "Yesterday close" },
    "High":     { value: "$4,360.00", change: "",       note: "Day high" },
    "Low":      { value: "$4,320.00", change: "",       note: "Day low" },
    "52W High": { value: "N/A",       change: "",       note: "" },
    "52W Low":  { value: "N/A",       change: "",       note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,397.33" },
      { label: "R2",    value: "$4,378.67" },
      { label: "R1",    value: "$4,357.33" },
      { label: "Pivot", value: "$4,338.67" },
      { label: "S1",    value: "$4,317.33" },
      { label: "S2",    value: "$4,298.67" },
      { label: "S3",    value: "$4,277.33" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,378.67" },
      { label: "R2",    value: "$4,363.39" },
      { label: "R1",    value: "$4,353.95" },
      { label: "Pivot", value: "$4,338.67" },
      { label: "S1",    value: "$4,323.39" },
      { label: "S2",    value: "$4,313.95" },
      { label: "S3",    value: "$4,298.67" }
    ],
    camarilla: [
      { label: "R4", value: "$4,358.00" },
      { label: "R3", value: "$4,347.00" },
      { label: "R2", value: "$4,343.33" },
      { label: "R1", value: "$4,339.67" },
      { label: "S1", value: "$4,332.33" },
      { label: "S2", value: "$4,328.67" },
      { label: "S3", value: "$4,325.00" },
      { label: "S4", value: "$4,314.00" }
    ],
    note: "Gold at $4,336 sits just below classic pivot $4,338.67 — short-term bearish bias until reclaim."
  }
};
