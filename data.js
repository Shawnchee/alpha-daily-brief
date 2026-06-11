window.CRUCIX_DATA = {
  generated: "Thu, 11 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on equities holding up while gold and silver crater on stronger dollar.",

  macro: {
    dxy:      { value: "100.05", change: "+0.67%", signal: "Dollar firms; headwind for metals and EM." },
    gold:     { value: "$4,062.59", change: "-0.22%", signal: "Sharp pullback from highs on USD strength." },
    oil:      { value: "$90.54", change: "-2.69%", signal: "WTI slides as Iran tension eases." },
    silver:   { value: "$69.10", change: "-6.58%", signal: "Silver punished as metals risk unwinds." },
    yield10y: { value: "4.53%", change: "-3bps", signal: "Yields ease modestly; equities cheer." },
    vix:      { value: "21.62", change: "-2.69%", signal: "Fear gauge cooling; risk appetite returning." },
    usdmyr:   { value: "4.0675", change: "-0.04%", signal: "Ringgit firms slightly against stronger dollar." },
    sp500:    { value: "7,282.30", change: "+0.21%", signal: "Index grinds higher near record." },
    verdict: "Stronger DXY and softer yields paint a Goldilocks setup for US equities but a metals washout. VIX easing supports risk-on stance for crypto and tech megacaps. KLSE faces a tug-of-war: weaker ringgit usually drags, but US tape strength should cushion Friday."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leads while alts lag — risk-on caution." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$96,262.14", marketCap: "$1.91T", change1h: "N/A", change24h: "-1.04%", change7d: "N/A", insight: "BTC consolidates near $96K with 19.82M circulating supply and $1.91T cap. Bernstein's $200K 2027 call keeps the bid resilient." },
      { name: "Ethereum", symbol: "ETH", price: "$1,581.66", marketCap: "$190B",  change1h: "N/A", change24h: "-1.10%", change7d: "N/A", insight: "ETH lags BTC as ETH/BTC ratio compresses to multi-year lows. A reclaim of $1,700 is needed before altseason can credibly start." },
      { name: "Solana",   symbol: "SOL", price: "$69.28",    marketCap: "$33B",   change1h: "N/A", change24h: "-1.43%", change7d: "N/A", insight: "SOL slips back into the high-$60s as memecoin flows cool. Holding $65 keeps the structural uptrend intact." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",     change24h: "+1.50%", note: "Eyes $0.096 resistance after CPI." },
      { name: "Pepe",      symbol: "PEPE", price: "—",            change24h: "—",      note: "Consolidating above 50/100-day EMAs." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000046",  change24h: "+2.20%", note: "Holding between 50/100-day EMAs." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on but selective — BTC leads while alts and memes consolidate. $96K is the key BTC pivot; a break opens path to fresh highs. Altseason signal absent until ETH/BTC reverses."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,282.30",  change: "+0.21%" },
      { name: "Nasdaq",       value: "25,265.01", change: "+0.38%" },
      { name: "Dow",          value: "50,173.24", change: "+0.51%" },
      { name: "VIX",          value: "21.62",     change: "-2.69%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$678.36", change: "+1.69%", insight: "Vanguard S&P tracker pushes higher with the index." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—",        change: "—",       insight: "Tracks Nasdaq strength led by megacap AI names." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$737.85", change: "+1.71%", insight: "SPY printing fresh highs alongside the cash index." },
      { ticker: "VTI",  name: "Total Market",      price: "—",        change: "—",       insight: "Total market exposure benefiting from broad participation." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",        change: "—",       insight: "High-beta innovation basket sensitive to yield direction." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$587.13", change: "+8.42%", insight: "Semis explode higher on AI demand and cycle optimism." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$53.48",  change: "-1.04%", insight: "Tracks BTC; consolidating with spot near $96K." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",        change: "—",       insight: "Tech sector ETF riding semis and software strength." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$379.68", change: "-0.22%", insight: "Gold proxy pulls back as DXY firms; key technical level." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$580.04", change: "-0.78%", notable: false, insight: "Meta drifts lower in after-hours despite AI ad-tech tailwinds." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$208.19", change: "-0.22%", notable: false, insight: "NVDA pauses but SOXX +8% signals semis broadly bid." },
      { ticker: "TSLA",  name: "Tesla",         price: "$396.68", change: "-3.00%", notable: true,  insight: "Biggest megacap laggard today on demand concerns." },
      { ticker: "AAPL",  name: "Apple",         price: "$584.59", change: "-0.14%", notable: false, insight: "Apple holds firm as a defensive megacap anchor." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",        change: "—",       notable: false, insight: "Azure and Copilot keep MSFT a core AI infrastructure name." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$371.90", change: "+0.50%", notable: false, insight: "Alphabet bid on search resilience and Gemini momentum." },
      { ticker: "AMZN",  name: "Amazon",        price: "$253.82", change: "+0.40%", notable: false, insight: "AWS growth keeps Amazon among preferred megacaps." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",        change: "—",       notable: false, insight: "Streaming leader benefits from ad-tier and live content push." },
      { ticker: "AMD",   name: "AMD",           price: "—",        change: "—",       notable: false, insight: "Lifted by SOXX +8% — MI accelerator cycle still in play." },
      { ticker: "PLTR",  name: "Palantir",      price: "$131.37", change: "+0.30%", notable: false, insight: "PLTR holds the $130 handle; AIP commercial wins underpin bid." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",        change: "—",       notable: false, insight: "Cybersecurity leader benefiting from secular spend." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",        change: "—",       notable: false, insight: "Coinbase tracks crypto beta; lagging on BTC weakness." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",        change: "-3.50%", notable: true,  insight: "MSTR down ~25% YTD on BTC drawdown and 40% monthly slide." },
      { ticker: "APP",   name: "AppLovin",      price: "—",        change: "—",       notable: false, insight: "AppLovin ad-tech AI story remains the bull case." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$29.28",  change: "-26.77%",notable: true,  insight: "SMCI craters on $7B equity raise despite touted AI server orders." }
    ],
    trending: [
      { ticker: "SMCI", change: "-26.77%" },
      { ticker: "SOXX", change: "+8.42%" },
      { ticker: "TSLA", change: "-3.00%" },
      { ticker: "SPY",  change: "+1.71%" },
      { ticker: "VOO",  change: "+1.69%" }
    ],
    verdict: "AI trade still dominant but bifurcating — SOXX explodes while SMCI implodes on dilution. Own megacap AI quality (NVDA, GOOGL, MSFT) and rotate out of overlevered satellites. Tesla weakness flags consumer-cyclical caution."
  },

  malaysia: {
    klci:   { value: "1,679.52", change: "-0.06%", context: "KLCI closed Thursday near 1,680 amid cautious tone. Friday's session likely range-bound on weaker metals and softer Wall Street tech leadership." },
    usdmyr: { value: "4.0675", change: "-0.04%", signal: "Ringgit firms marginally; DXY strength a cap." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM10.94", change: "-1.08%", insight: "Maybank slipped 12 sen as banks track regional risk-off." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "RM7.68",  change: "-0.65%", insight: "CIMB shed 5 sen; regional banking sentiment soft." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",        change: "—",       insight: "Defensive bank — usually bid when KLCI consolidates." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",        change: "—",       insight: "Mid-cap bank tied to OPR direction and loan growth." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",        change: "—",       insight: "Utility anchor — data-centre power demand a structural tailwind." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "RM2.22",  change: "+12.12%",insight: "Inari surged 24 sen tracking SOXX +8% and NVDA semis cycle." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",        change: "—",       insight: "Telco facing margin pressure but dividend supportive." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",        change: "—",       insight: "Healthcare a defensive bid in choppy regional tape." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",        change: "—",       insight: "E-government services play levered to digitalisation push." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",        change: "—",       insight: "5G monetisation story remains the swing factor." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No notable new Bursa IPO surfaced in today's search results." }
    ],
    verdict: "Ringgit steady at 4.07 — neutral for KLCI but caps export-led upside. Inari is the standout, riding the global semis melt-up alongside SOXX. Friday Bursa likely consolidates with banks soft and tech selectively bid."
  },

  news: [
    { headline: "Super Micro Computer crashes 26.77% after $7B equity financing plan", source: "CNBC", time: "1d ago", sentiment: "BEARISH", meaning: "Massive dilution overshadows AI server order strength for SMCI." },
    { headline: "Nasdaq pares semiconductor slide; SOXX rebounds +8.42%", source: "TheStreet", time: "12h ago", sentiment: "BULLISH", meaning: "Semis snap back hard; AI demand thesis still intact globally." },
    { headline: "Gold sinks 3% as dollar firms and risk appetite returns", source: "Investing.com", time: "8h ago", sentiment: "BEARISH", meaning: "DXY strength pressures metals; safe-haven bid evaporating fast." },
    { headline: "Bitcoin consolidates near $96K with $1.91T market cap", source: "CoinGecko", time: "2h ago", sentiment: "NEUTRAL", meaning: "BTC holding key level; Bernstein eyes $200K by 2027." },
    { headline: "Bursa Malaysia opens slightly lower as FBM KLCI slips 0.06%", source: "Malay Mail", time: "1d ago", sentiment: "NEUTRAL", meaning: "Local bourse drifts on cautious sentiment ahead of weekend." },
    { headline: "10-year Treasury yield eases to 4.53% as risk-on returns", source: "Trading Economics", time: "6h ago", sentiment: "BULLISH", meaning: "Lower yields support equity multiples and growth names." },
    { headline: "Inari Amertron jumps 24 sen tracking global semis rally", source: "I3investor", time: "1d ago", sentiment: "BULLISH", meaning: "Local proxy benefits from NVDA-led packaging demand cycle." },
    { headline: "Tesla drops 3% leading megacap losers as Nasdaq grinds higher", source: "Yahoo Finance", time: "8h ago", sentiment: "BEARISH", meaning: "TSLA underperforms; demand and margin concerns resurface." }
  ],

  goldSummary: {
    "Price":  { value: "$4,062.59", change: "-0.22%", note: "Spot trades below prior close." },
    "Open":   { value: "$4,071.46", change: "", note: "" },
    "High":   { value: "$4,118.07", change: "", note: "Day high" },
    "Low":    { value: "$4,023.96", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,212.47" },
      { label: "R2",    value: "$4,165.27" },
      { label: "R1",    value: "$4,118.37" },
      { label: "Pivot", value: "$4,071.16" },
      { label: "S1",    value: "$4,024.25" },
      { label: "S2",    value: "$3,977.05" },
      { label: "S3",    value: "$3,930.14" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,165.27" },
      { label: "R2",    value: "$4,129.32" },
      { label: "R1",    value: "$4,107.11" },
      { label: "Pivot", value: "$4,071.16" },
      { label: "S1",    value: "$4,035.21" },
      { label: "S2",    value: "$4,013.00" },
      { label: "S3",    value: "$3,977.05" }
    ],
    camarilla: [
      { label: "R4", value: "$4,123.22" },
      { label: "R3", value: "$4,097.34" },
      { label: "R2", value: "$4,088.71" },
      { label: "R1", value: "$4,080.09" },
      { label: "S1", value: "$4,062.83" },
      { label: "S2", value: "$4,054.21" },
      { label: "S3", value: "$4,045.58" },
      { label: "S4", value: "$4,019.70" }
    ],
    note: "Gold at $4,062 trades just below classic pivot $4,071 — mildly bearish; reclaim flips bias bullish toward R1 $4,118."
  }
};
