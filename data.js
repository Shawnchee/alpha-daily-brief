window.CRUCIX_DATA = {
  generated: "Mon, 01 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Tech tape at fresh records as Nvidia rips, but BTC slides on Strategy's first sale since 2022.",

  macro: {
    dxy:      { value: "99.11",   change: "+0.12%", signal: "Dollar firm; commodity headwind persists." },
    gold:     { value: "$4,499",  change: "-0.88%", signal: "Pullback from highs on real-yield pressure." },
    oil:      { value: "$90.57",  change: "-2.04%", signal: "WTI fades as Iran tensions ease." },
    silver:   { value: "$74.95",  change: "-2.54%", signal: "Silver slips harder than gold." },
    yield10y: { value: "4.45%",   change: "-2bps",  signal: "Near three-week lows; supportive backdrop." },
    vix:      { value: "16.05",   change: "+4.77%", signal: "Low absolute level despite uptick." },
    usdmyr:   { value: "3.9687",  change: "+0.11%", signal: "Ringgit steady in tight 3.96-3.97 range." },
    sp500:    { value: "7,599.96", change: "+0.26%", signal: "Fresh record close to open June." },
    verdict: "DXY firm with 10Y yields easing and VIX still suppressed creates a constructive equity backdrop, even as gold pauses near record highs. Crypto is the lone risk-off note as Strategy's BTC sale rattles sentiment. KLSE benefits from soft dollar near 3.96 and steady US tape into Monday open."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady amid altcoin chop." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$73,303",  marketCap: "$1.45T", change1h: "N/A", change24h: "-5.0%",  change7d: "N/A", insight: "Strategy's first BTC sale since 2022 (32 BTC, $2.5M) triggered liquidations topping $627M. ETF outflow streak extends; $70k is the must-hold pivot." },
      { name: "Ethereum", symbol: "ETH", price: "$2,060",   marketCap: "$248B",  change1h: "N/A", change24h: "-2.1%",  change7d: "N/A", insight: "ETH slipping below $2,000 support as BitMine slows accumulation. Third straight red quarter setup unless bulls reclaim $2,050." },
      { name: "Solana",   symbol: "SOL", price: "$84.12",   marketCap: "$40B",   change1h: "N/A", change24h: "-3.4%",  change7d: "N/A", insight: "SOL drifts with BTC weakness despite resilient ecosystem activity. ETF flows and memecoin engagement remain the swing factors." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",      change24h: "-1.14%", note: "Neutral-bearish; tracks BTC tape." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000444",  change24h: "-2.94%", note: "Bulls fading; risk-off bleed." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000615",  change24h: "+6.32%", note: "Outperforming peer memecoins." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-off across crypto as Strategy's symbolic sale ends a four-year accumulation narrative and triggers cascading liquidations. BTC must hold $70k or open trapdoor toward $68k; ETF outflow streak is the bearish tell. No altseason signal — SHIB's bounce is rotational noise, not breadth."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,599.96",  change: "+0.26%" },
      { name: "Nasdaq",       value: "27,086.81", change: "+0.42%" },
      { name: "Dow",          value: "51,078.88", change: "+0.09%" },
      { name: "VIX",          value: "16.05",     change: "+4.77%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$695.49", change: "+0.23%", insight: "Tracks fresh S&P record; core long-duration equity exposure." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$738.31", change: "+0.37%", insight: "Nasdaq leadership intact on Nvidia's RTX Spark catalyst." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "—",      insight: "Mirrors VOO at record highs; broad-market proxy." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Total US exposure; benefits from broad tech-led rally." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",      insight: "High-beta innovation basket; volatile around AI sentiment." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "—",      insight: "Semis leading on Nvidia RTX Spark and SMCI agentic-AI demand." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$41.63",  change: "-5.0%",  insight: "Hit by ETF outflow streak as Strategy ends pure-accumulation era." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Tech sector benefits from yields easing and Nvidia leadership." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$420.49", change: "-0.88%", insight: "Profit-taking from record highs; structural bid intact." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$612.57", change: "-3.15%", notable: true,  insight: "Selling pressure despite broad tape strength; ad-cycle worries resurface." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$220.15", change: "+4.27%", notable: true,  insight: "RTX Spark PC processor unveil reignites AI hardware leadership trade." },
      { ticker: "TSLA",  name: "Tesla",         price: "$371.15", change: "-1.40%", notable: false, insight: "Drifts lower while mega-cap peers diverge on company-specific catalysts." },
      { ticker: "AAPL",  name: "Apple",         price: "$306.31", change: "-1.84%", notable: false, insight: "Underperforms mega-cap basket; services growth carries the narrative." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",       change: "—",      notable: false, insight: "AI capex cycle and Azure growth remain the structural anchor." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "—",      notable: false, insight: "Search durability and Gemini momentum support multiple expansion." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "—",      notable: false, insight: "AWS reacceleration and ads strength remain the dual engines." },
      { ticker: "NFLX",  name: "Netflix",       price: "$86.02",  change: "-2.90%", notable: false, insight: "Down 28% from highs; ad-tier and Q1 analyst focus pivotal." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "—",      notable: false, insight: "Rides Nvidia's halo on AI accelerator demand inflection." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "—",      notable: false, insight: "AIP government and commercial backlog remain core thesis." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",      notable: false, insight: "Cybersecurity spending resilience supports premium multiple." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "—",      notable: false, insight: "Pressured by BTC slide and ETF outflow narrative." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "—",      notable: true,  insight: "Shares fell after first BTC sale since 2022 ($2.5M, 32 BTC) shocked thesis." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",      notable: false, insight: "Ad-tech AI engine remains the structural growth driver." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$47.86",  change: "+4.50%", notable: true,  insight: "Mizuho raises target to $44 on agentic-AI server demand." }
    ],
    trending: [
      { ticker: "SMCI", change: "+4.50%" },
      { ticker: "NVDA", change: "+4.27%" },
      { ticker: "META", change: "-3.15%" },
      { ticker: "NFLX", change: "-2.90%" },
      { ticker: "AAPL", change: "-1.84%" }
    ],
    verdict: "AI trade is alive and rotating into hardware: Nvidia's RTX Spark and SMCI's agentic-AI demand pull semis higher even as Meta and Apple bleed. Own NVDA, SMCI, and broad QQQ exposure; avoid stretched social-ad names rolling over. Sector rotation favors semis and AI infrastructure over consumer-tech mega-caps near term."
  },

  malaysia: {
    klci:   { value: "1,690.40", change: "+0.33%", context: "KLCI closed Friday at 1,690.40 after tracking Wall Street gains. Monday open should follow constructive US tape and softer ringgit." },
    usdmyr: { value: "3.9687",   change: "+0.11%", signal: "Tight range; soft dollar helps Bursa." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM10.62", change: "+1.14%", insight: "Led Friday banking gains (+12 sen); OPR-stable backdrop supports NIM." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "RM7.50",  change: "+0.13%", insight: "Regional banking franchise grinds higher with ASEAN flows." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "RM4.78",  change: "+0.21%", insight: "Defensive deposit franchise; steady dividend underpin." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",        change: "—",      insight: "Domestic-focused lender benefits from stable OPR cycle." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",        change: "—",      insight: "Defensive utility; data-center power demand a structural tailwind." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "RM2.41",  change: "+2.55%", insight: "Up 6 sen Friday riding NVDA's RTX Spark momentum in semi cycle." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",        change: "—",      insight: "Telco consolidation and Indonesia exposure are key swing factors." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",        change: "—",      insight: "Pan-Asian hospital network with structural ageing-demographic tailwind." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",        change: "—",      insight: "Digital services beneficiary of government e-platform expansion." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",        change: "—",      insight: "5G monetization and enterprise mix drive the thesis." }
    ],
    ipos: [
      { name: "N/A", sector: "—", price: "—", listingDate: "—", status: "—", note: "No new Bursa IPO catalysts flagged in weekend news flow." }
    ],
    verdict: "Ringgit holds tight near 3.96 — supportive but not yet a tailwind. Inari is the standout on Friday's tape, riding global semi momentum and NVDA's halo. Monday Bursa should open firm tracking US records, with banks and semis leading."
  },

  news: [
    { headline: "Strategy sells 32 BTC for $2.5M — first sale since 2022",                source: "CNBC",        time: "6h ago",  sentiment: "BEARISH",  meaning: "Symbolic end of pure-accumulation era; sentiment break for BTC holders." },
    { headline: "S&P 500, Nasdaq, Dow clinch records as Nvidia surges on RTX Spark",       source: "Yahoo Finance", time: "10h ago", sentiment: "BULLISH",  meaning: "AI hardware leadership reasserts; tape broadening to semis again." },
    { headline: "Bitcoin slides 5% as liquidations top $627M after Strategy sale",         source: "Bitcoin.com", time: "5h ago",  sentiment: "BEARISH",  meaning: "Cascading liquidations expose leveraged longs; $70k key pivot." },
    { headline: "Crypto funds suffer second-largest outflows of 2026 at $1.67B",           source: "CoinDesk",    time: "1d ago",  sentiment: "BEARISH",  meaning: "Institutional flows turning; XRP and HYPE buck the trend." },
    { headline: "Ethereum dips below $2,000 as BitMine slows accumulation",                source: "FXStreet",    time: "4h ago",  sentiment: "BEARISH",  meaning: "Key psychological level broken; third red quarter risk rising." },
    { headline: "Japan's LDP backs legal framework for crypto ETFs",                       source: "Crypto.news", time: "1d ago",  sentiment: "BULLISH",  meaning: "Regulatory tailwind for Asia-Pacific crypto adoption building." },
    { headline: "Bursa pares losses to open higher tracking Wall Street gains",            source: "FMT",         time: "2d ago",  sentiment: "BULLISH",  meaning: "Constructive Monday setup with US tape providing supportive backdrop." },
    { headline: "Mizuho raises SMCI target to $44 citing agentic-AI demand",               source: "Yahoo Finance", time: "1d ago",  sentiment: "BULLISH",  meaning: "Sell-side validating AI server cycle; multi-step agent workloads scaling." }
  ],

  goldSummary: {
    "Price":  { value: "$4,499.23", change: "-0.88%", note: "Pullback from $4,539 close." },
    "Open":   { value: "$4,539.27", change: "",       note: "Prior session close." },
    "High":   { value: "$4,546.03", change: "",       note: "Day high" },
    "Low":    { value: "$4,489.86", change: "",       note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,616.41" },
      { label: "R2",    value: "$4,581.22" },
      { label: "R1",    value: "$4,560.24" },
      { label: "Pivot", value: "$4,525.05" },
      { label: "S1",    value: "$4,504.07" },
      { label: "S2",    value: "$4,468.88" },
      { label: "S3",    value: "$4,447.90" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,581.22" },
      { label: "R2",    value: "$4,559.76" },
      { label: "R1",    value: "$4,546.51" },
      { label: "Pivot", value: "$4,525.05" },
      { label: "S1",    value: "$4,503.59" },
      { label: "S2",    value: "$4,490.34" },
      { label: "S3",    value: "$4,468.88" }
    ],
    camarilla: [
      { label: "R4", value: "$4,570.16" },
      { label: "R3", value: "$4,554.72" },
      { label: "R2", value: "$4,549.57" },
      { label: "R1", value: "$4,544.42" },
      { label: "S1", value: "$4,534.12" },
      { label: "S2", value: "$4,528.97" },
      { label: "S3", value: "$4,523.82" },
      { label: "S4", value: "$4,508.38" }
    ],
    note: "Gold at $4,499 sits just below the $4,525 classic pivot — short-term bearish bias until reclaim."
  }
};
