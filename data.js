window.CRUCIX_DATA = {
  generated: "Tue, 21 Apr 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off tone as Iran talks stall and Warsh hearing clouds Fed rate path.",

  macro: {
    dxy:      { value: "98.27",    change: "+0.17%", signal: "Dollar firm on safe-haven bid" },
    gold:     { value: "$4785.16", change: "-0.74%", signal: "Profit-taking after record highs" },
    oil:      { value: "$86.64",   change: "-0.89%", signal: "Crude softens as Iran talks resume" },
    silver:   { value: "—",        change: "—",      signal: "Tracking gold's cooldown move" },
    yield10y: { value: "4.25%",    change: "+9bps",  signal: "Yields climb on Fed doubts" },
    vix:      { value: "19.84",    change: "+5.14%", signal: "Volatility firming under 20 line" },
    usdmyr:   { value: "3.9525",   change: "+0.06%", signal: "Ringgit steady near 3.95 pivot" },
    sp500:    { value: "-0.6%",    change: "-0.60%", signal: "Broad tape slips on geopolitics" },
    verdict: "Dollar firm, yields up, VIX rising and gold pulling back together spell a classic risk-off rotation. Crypto and growth tech stay pressured until Warsh clarity and Iran outcome emerge. KLSE should open defensive, with banks and utilities preferred over semis."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leading; alts lag cautious tape" },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$75,498", marketCap: "$1.49T", change1h: "N/A", change24h: "-1.70%", change7d: "N/A", insight: "BTC fights the $75K line as ETF inflows of $1.5B in five days cushion geopolitical drag. A daily close back above $77K reopens the path to $84K resistance." },
      { name: "Ethereum", symbol: "ETH", price: "$2,053",  marketCap: "$247B",  change1h: "N/A", change24h: "-2.10%", change7d: "N/A", insight: "ETH lags BTC as rotation into majors persists and staking yields compress. Watch $2,000 psychological floor; reclaim of $2,200 signals altseason pulse." },
      { name: "Solana",   symbol: "SOL", price: "$143.80", marketCap: "$69B",   change1h: "N/A", change24h: "+4.73%", change7d: "N/A", insight: "SOL outperforms with ecosystem revival and memecoin flows returning to its chain. Holds above $140 support; $160 is the next trigger level." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.095",     change24h: "+2.35%", note: "Nearing 50-day EMA breakout." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000037", change24h: "+3.00%", note: "Rebound off broken EMA support." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000060", change24h: "N/A",    note: "Testing 50-day EMA resistance." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Crypto is cautiously risk-off with BTC defending $75K and alts mixed under geopolitical uncertainty. Hold above $75K keeps the bull structure alive; failure targets $70K. Altseason signal weak until ETH reclaims $2,200 and dominance rolls over."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "-0.6%",  change: "-0.60%" },
      { name: "Nasdaq",       value: "-0.6%",  change: "-0.60%" },
      { name: "Dow",          value: "-0.6%",  change: "-0.60%" },
      { name: "VIX",          value: "19.84",  change: "+5.14%" },
      { name: "Russell 2000", value: "N/A",    change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$651.72", change: "-0.60%", insight: "Core US beta slips as Warsh hearing and Iran stall weigh on tape." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$646.79", change: "-0.60%", insight: "Megacap tech drags as yields rise and rate-cut odds fade." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "—",      insight: "Mirrors VOO; expect similar drawdown into NY open." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Broad exposure slips alongside large caps on risk-off tape." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",      insight: "High-beta growth vulnerable as 10Y pushes back to 4.25%." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$420.70", change: "-1.20%", insight: "Chips underperform as NVDA slides and AI trade cools." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$42.51",  change: "-1.70%", insight: "Tracks BTC; five-day inflows of $1.5B offset weak tape." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Tech heavyweights pressure the sleeve on yield-led selling." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$447.21", change: "-0.74%", insight: "Profit-taking after record highs; uptrend structure intact." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$688.55", change: "+1.73%", notable: false, insight: "Rebounds after Monday slide; AI capex narrative still supportive." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$200.19", change: "-1.10%", notable: true,  insight: "Chip leader slips as AI trade cools and yields climb." },
      { ticker: "TSLA",  name: "Tesla",         price: "$400.62", change: "+3.01%", notable: true,  insight: "Strongest megacap today on delivery chatter and robotaxi news." },
      { ticker: "AAPL",  name: "Apple",         price: "$270.23", change: "+2.59%", notable: true,  insight: "CEO change narrative sparks reassessment; supply chain remains stable." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$425.48", change: "-0.50%", notable: false, insight: "Defensive megacap holds; Azure AI demand remains the anchor." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "—",      notable: false, insight: "Search resilience and Gemini traction offset ad cycle worries." },
      { ticker: "AMZN",  name: "Amazon",        price: "$251.46", change: "-0.40%", notable: false, insight: "AWS growth story intact; retail margins the swing factor." },
      { ticker: "NFLX",  name: "Netflix",       price: "$92.97",  change: "-8.00%", notable: true,  insight: "Soft outlook and Hastings exit trigger sharp post-earnings selloff." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "—",      notable: false, insight: "Tracks SOXX weakness; MI400 ramp remains the key catalyst." },
      { ticker: "PLTR",  name: "Palantir",      price: "$146.96", change: "-1.50%", notable: false, insight: "Government AI tailwind intact; valuation keeps it volatile." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",      notable: false, insight: "Cybersecurity demand steady; Falcon platform drives ARR growth." },
      { ticker: "COIN",  name: "Coinbase",      price: "$207.25", change: "-2.00%", notable: false, insight: "Tracks BTC tape; subscription revenue cushions volume dips." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "+12.00%", notable: true, insight: "Jumped 12% this week on BTC rally and new dividend plan." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",      notable: false, insight: "Ad-tech momentum strong on AXON engine monetization gains." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$28.55",  change: "-1.00%", notable: true,  insight: "Deeply de-rated; AI server demand yet to translate to earnings trust." }
    ],
    trending: [
      { ticker: "MSTR", change: "+12.00%" },
      { ticker: "NFLX", change: "-8.00%" },
      { ticker: "TSLA", change: "+3.01%" },
      { ticker: "AAPL", change: "+2.59%" },
      { ticker: "META", change: "+1.73%" }
    ],
    verdict: "The AI trade is cooling as yields climb and Fed clarity fades, with rotation favoring defensive megacaps over high-beta chips. Own AAPL, TSLA, META on dips; trim SMCI and NFLX until catalysts reset. Keep IBIT exposure as BTC ETF flows stay structurally firm."
  },

  malaysia: {
    klci:   { value: "—",      change: "N/A", context: "KLCI last close unavailable from today's scan. Expect defensive open tracking Wall Street's risk-off tone." },
    usdmyr: { value: "3.9525", change: "+0.06%", signal: "Ringgit steady near 3.95 pivot" },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM11.10", change: "+0.36%", insight: "OPR steady and regional credit quality underpin dividend resilience." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "—",       change: "—",      insight: "Regional ASEAN banking exposure keeps earnings diversified." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",       change: "—",      insight: "Defensive retail-heavy franchise with industry-leading asset quality." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",       change: "—",      insight: "Dividend yield story remains supportive under steady OPR." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",       change: "—",      insight: "Data-center power demand is the structural long-term thesis." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—",       change: "—",      insight: "Sensitive to NVDA and SOXX — today's chip weakness is a headwind." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",       change: "—",      insight: "Telco consolidation and digital bank narrative keep thesis alive." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",       change: "—",      insight: "Defensive healthcare with ASEAN volume and medical tourism drivers." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",       change: "—",      insight: "Digital services concessions give steady recurring revenue base." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",       change: "—",      insight: "5G convergence and postpaid ARPU support the dividend story." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No fresh IPO data surfaced in today's scan. Pipeline remains tech and consumer weighted." }
    ],
    verdict: "Ringgit is firm near 3.95 and insulated from DXY's mild firmness. Maybank is the safest name into a risk-off session; Inari is the most exposed via semis. Expect a cautious Bursa with banks and utilities leading, tech names fading US chip weakness."
  },

  news: [
    { headline: "Bitcoin slides toward $75,000 amid Warsh hearing and Iran talks uncertainty", source: "CoinDesk",       time: "2h ago", sentiment: "BEARISH", meaning: "Macro overhang pressures crypto risk appetite near key level." },
    { headline: "Stocks turn negative on stalled US-Iran talks and Fed doubts",                source: "Yahoo Finance",  time: "3h ago", sentiment: "BEARISH", meaning: "Risk-off flows dominate as rate-cut expectations fade." },
    { headline: "Bitcoin ETFs pull in $1.5B in five days as sentiment flips",                  source: "CoinDesk",       time: "6h ago", sentiment: "BULLISH", meaning: "Institutional bid cushions BTC through geopolitical drawdown." },
    { headline: "Netflix shares drop as soft outlook and Reed Hastings exit weigh",            source: "Benzinga",       time: "5h ago", sentiment: "BEARISH", meaning: "Streaming leader faces leadership and growth narrative reset." },
    { headline: "Strategy (MSTR) surges 12% on bitcoin rally and new dividend plan",           source: "CoinCentral",    time: "1d ago", sentiment: "BULLISH", meaning: "BTC-proxy demand lifts MSTR on capital return news." },
    { headline: "Crude oil prices surge 6% as geopolitical premium returns",                   source: "Foreign Policy", time: "1d ago", sentiment: "WATCH",   meaning: "Energy inflation risk returns into summer demand season." },
    { headline: "Bursa Malaysia opens lower, tracking Wall Street declines",                   source: "Bernama",        time: "4h ago", sentiment: "BEARISH", meaning: "KLSE mirrors US risk-off; defensives likely to outperform." },
    { headline: "Bursa Malaysia and HKEX unveil first joint index to strengthen connectivity", source: "The Edge",       time: "1d ago", sentiment: "BULLISH", meaning: "Cross-border flows could boost KLSE large-cap liquidity." }
  ],

  goldSummary: {
    "Price":    { value: "$4785.16", change: "-0.74%", note: "Profit-taking after record highs" },
    "Open":     { value: "$4820.77", change: "",       note: "Session open" },
    "High":     { value: "$4833.09", change: "",       note: "Day high" },
    "Low":      { value: "$4772.93", change: "",       note: "Day low" },
    "52W High": { value: "N/A",      change: "",       note: "" },
    "52W Low":  { value: "N/A",      change: "",       note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4881.35" },
      { label: "R2",    value: "$4857.22" },
      { label: "R1",    value: "$4821.19" },
      { label: "Pivot", value: "$4797.06" },
      { label: "S1",    value: "$4761.03" },
      { label: "S2",    value: "$4736.90" },
      { label: "S3",    value: "$4700.87" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4857.22" },
      { label: "R2",    value: "$4834.24" },
      { label: "R1",    value: "$4820.04" },
      { label: "Pivot", value: "$4797.06" },
      { label: "S1",    value: "$4774.08" },
      { label: "S2",    value: "$4759.88" },
      { label: "S3",    value: "$4736.90" }
    ],
    camarilla: [
      { label: "R4", value: "$4818.25" },
      { label: "R3", value: "$4801.70" },
      { label: "R2", value: "$4796.19" },
      { label: "R1", value: "$4790.67" },
      { label: "S1", value: "$4779.65" },
      { label: "S2", value: "$4774.13" },
      { label: "S3", value: "$4768.62" },
      { label: "S4", value: "$4752.07" }
    ],
    note: "Gold trading below the $4797 classic pivot = short-term bearish bias until reclaim."
  }
};
