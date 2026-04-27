window.CRUCIX_DATA = {
  generated: "Monday, 27 Apr 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off tilt: BTC slipped under $77K on US-Iran tensions while gold holds near $4,800 and US indices printed Friday records.",

  macro: {
    dxy:      { value: "98.51",    change: "-0.02%", signal: "Soft dollar; supports commodities and EM FX." },
    gold:     { value: "$4,779",   change: "-0.86%", signal: "Safe-haven bid intact above $4,700 pivot." },
    oil:      { value: "$92.55",   change: "-3.28%", signal: "Pulled back but Hormuz risk premium remains." },
    silver:   { value: "—",        change: "—",       signal: "Tracking gold; precious metals broadly firm." },
    yield10y: { value: "4.31%",    change: "+0bps",   signal: "Stuck in range; Fed pause priced in." },
    vix:      { value: "18.78",    change: "+1.20%",  signal: "Below 20; complacency despite Iran headlines." },
    usdmyr:   { value: "3.9525",   change: "+0.06%",  signal: "Ringgit stable; sub-4.00 regime holds." },
    sp500:    { value: "7,173.91", change: "+0.10%",  signal: "Record close; melt-up continues into earnings." },
    verdict: "DXY softness plus contained yields and a sub-19 VIX keep risk-on dominant despite the Iran-driven oil spike. Gold's bid alongside equity records signals stagflation hedging more than panic. Crypto wobble is geopolitical noise, not regime change; KLSE benefits from weak USD."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC pullback widens alt underperformance gap." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$76,600", marketCap: "$1.52T", change1h: "N/A", change24h: "-2.10%", change7d: "N/A", insight: "BTC failed the $80K breakout and slipped below $77K as Iran tensions and oil reignited risk-off flows. $75K is the next major support; loss opens $70K." },
      { name: "Ethereum", symbol: "ETH", price: "$2,053",  marketCap: "$247B",  change1h: "N/A", change24h: "-2.50%", change7d: "N/A", insight: "ETH lagging BTC again as ETH/BTC ratio weakens further. Needs reclaim of $2,200 to invalidate the bearish trend." },
      { name: "Solana",   symbol: "SOL", price: "$86.32",  marketCap: "$41B",   change1h: "N/A", change24h: "-3.10%", change7d: "N/A", insight: "SOL holding $85 support but momentum cooled with memecoin volume thinning. $80 is the line in the sand." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1005",     change24h: "+6.00%", note: "Holding above 50-day EMA." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000040",  change24h: "+6.00%", note: "Testing 100-day EMA resistance." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000063",  change24h: "+5.00%", note: "Approaching upper consolidation boundary." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-off short-term: BTC's $80K rejection plus Iran headlines argue for caution. $75K is the make-or-break level; below opens $70K, while reclaim of $80K reignites the bull case. Memecoins running on bullish momentum despite BTC weakness suggests retail still active — altseason signal not dead yet."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,173.91",  change: "+0.10%" },
      { name: "Nasdaq",       value: "24,887.10", change: "+0.30%" },
      { name: "Dow",          value: "49,167.79", change: "-0.13%" },
      { name: "VIX",          value: "18.78",     change: "+1.20%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$655.75", change: "Fri close", insight: "Tracks S&P record close; core compounding holding." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—",       change: "Fri close", insight: "Mega-cap AI names lifted Nasdaq to fresh record." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "Fri close", insight: "Liquid S&P proxy; same record beta as VOO." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "Fri close", insight: "Broad US exposure; small-cap drag persists vs large." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "Fri close", insight: "High-beta growth basket; volatile vs Iran headlines." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$460.94", change: "Fri close", insight: "Semi cycle hot; NVDA-led leadership intact." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$42.55",  change: "-2.10%",    insight: "Tracks BTC spot; pulled back with crypto weakness." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "Fri close", insight: "Tech leadership intact; AI capex narrative dominates." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$446.65", change: "-0.86%",    insight: "Mirrors XAU; safe-haven flows persistent." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$675.03", change: "+2.41%",    notable: true,  insight: "AI-ad reaccelerating; Reels monetization beat expectations." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$208.27", change: "+4.32%",    notable: true,  insight: "Hyperscaler capex tailwind plus Blackwell ramp drove leadership." },
      { ticker: "TSLA",  name: "Tesla",         price: "$376.30", change: "+0.69%",    notable: false, insight: "Robotaxi narrative supports valuation despite EV demand softness." },
      { ticker: "AAPL",  name: "Apple",         price: "$271.11", change: "-0.85%",    notable: false, insight: "Lagging mega-caps as iPhone cycle and AI rollout disappoint." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$422.79", change: "Fri close", notable: false, insight: "Azure AI growth and Copilot adoption keep premium valuation justified." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$341.68", change: "Fri close", notable: false, insight: "Search resilient; cloud accelerating against AWS." },
      { ticker: "AMZN",  name: "Amazon",        price: "$250.56", change: "Fri close", notable: false, insight: "AWS reacceleration plus retail margin expansion underpins re-rating." },
      { ticker: "NFLX",  name: "Netflix",       price: "$97.31",  change: "Fri close", notable: false, insight: "Post-split price; ad-tier growth and live sports fueling subscriber gains." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "Fri close", notable: false, insight: "MI400 ramp keeps AMD as the NVDA hedge for AI bulls." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "Fri close", notable: false, insight: "20% YTD drawdown on valuation reset; commercial AIP traction intact." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "Fri close", notable: false, insight: "Cybersecurity leader; enterprise consolidation tailwind continues." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "Fri close", notable: false, insight: "High-beta to BTC; pressured by the $77K breakdown." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "Fri close", notable: false, insight: "Holds $63B+ in BTC; leveraged beta tracks crypto weakness." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "Fri close", notable: false, insight: "AXON ad-tech engine driving outsized revenue and margin gains." },
      { ticker: "SMCI",  name: "Super Micro",   price: "—",       change: "Fri close", notable: false, insight: "Up 30% on the month on liquid-cooled AI server demand." }
    ],
    trending: [
      { ticker: "NVDA", change: "+4.32%" },
      { ticker: "META", change: "+2.41%" },
      { ticker: "TSLA", change: "+0.69%" },
      { ticker: "AAPL", change: "-0.85%" },
      { ticker: "DOW",  change: "-0.13%" }
    ],
    verdict: "AI trade alive: NVDA/META leading, MSFT/GOOGL/AMZN supportive — own the hyperscaler-plus-picks-and-shovels basket. Sector rotation favors semis and software, with energy and small-caps lagging. Avoid AAPL until iPhone catalyst returns; trim pure-momentum names if VIX breaks 20."
  },

  malaysia: {
    klci:   { value: "1,720.34", change: "Fri close", context: "KLCI closed Friday at 1,720.34 with rotation into mid-/small-caps. Monday opening tone cautious as US-Iran headlines weigh on regional risk." },
    usdmyr: { value: "3.9525",   change: "+0.06%",    signal: "Ringgit firm; sub-4.00 regime supports KLSE." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM11.10", change: "Fri close", insight: "Largest bank by assets; OPR steady supports stable NIMs and dividend story." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "RM7.65",  change: "Fri close", insight: "Regional ASEAN exposure benefits from Indonesia and Singapore loan growth." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "RM4.72",  change: "Fri close", insight: "Defensive consumer-loan franchise with sector-best asset quality." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",       change: "Fri close", insight: "Cheapest valuation among big banks; capital-return story intact." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "RM14.58", change: "Fri close", insight: "Data-centre power demand and RP4 tariff visibility underpin earnings outlook." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "RM2.06",  change: "Fri close", insight: "Closely tied to NVDA/Broadcom cycle; semi upcycle remains supportive." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",       change: "Fri close", insight: "Restructuring narrative continues; CelcomDigi merger tailwinds in play." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "RM8.77",  change: "Fri close", insight: "Defensive healthcare compounder with regional patient-volume growth." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",       change: "Fri close", insight: "Government-services digitalization beneficiary with high recurring margins." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",       change: "Fri close", insight: "5G DNB-2 narrative and dividend yield anchor the telco trade." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No notable Bursa IPOs flagged in the latest news cycle." }
    ],
    verdict: "Ringgit firm at 3.95 keeps imported inflation contained and supports foreign inflows. Inari is the standout into the week on Nvidia/Broadcom tape strength and Friday's 24-sen jump. Monday Bursa opens cautious on US-Iran headlines but selective bid in semis, banks and utilities likely persists."
  },

  news: [
    { headline: "Bitcoin slips below $77K as US-Iran tensions stall macro rally",       source: "CoinDesk",     time: "3h ago",  sentiment: "BEARISH", meaning: "Geopolitical risk drains crypto risk premium near $80K." },
    { headline: "S&P 500 ticks higher to record close as traders look past Iran talks", source: "CNBC",         time: "2d ago",  sentiment: "BULLISH", meaning: "Equities shrug off geopolitics; AI bid intact." },
    { headline: "Bursa Malaysia rotation into mid- and small-caps as KLCI eases",       source: "Malay Mail",   time: "12h ago", sentiment: "NEUTRAL", meaning: "Defensive blue-chip tape, retail chasing smaller names." },
    { headline: "Crypto funds pull in $1.2B; total AUM hits $155B, highest since Feb",  source: "CoinShares",   time: "1d ago",  sentiment: "BULLISH", meaning: "Institutional crypto demand persistent despite price chop." },
    { headline: "Strait of Hormuz remains effectively closed amid Iran standoff",       source: "Reuters",      time: "1d ago",  sentiment: "BEARISH", meaning: "Oil supply risk feeding stagflation positioning." },
    { headline: "Inari Amerton closes 24 sen higher at RM2.06 on semi cycle bid",       source: "Bernama",      time: "12h ago", sentiment: "BULLISH", meaning: "NVDA tailwind transmitting to Malaysian semi names." },
    { headline: "Wealth manager forecasts Bitcoin at $200K by 2027",                    source: "24/7 Wall St", time: "5h ago",  sentiment: "BULLISH", meaning: "Long-term institutional thesis still firmly intact." },
    { headline: "Malaysia approves 15 digital assets as Shariah-compliant",             source: "FintechNews",  time: "1d ago",  sentiment: "BULLISH", meaning: "Crypto adoption widening into Islamic-finance pools." }
  ],

  goldSummary: {
    "Price":  { value: "$4,779.12", change: "-0.86%", note: "Holding above $4,700 macro pivot zone." },
    "Open":   { value: "$4,820.77", change: "",       note: "Yesterday's open" },
    "High":   { value: "$4,833.09", change: "",       note: "Day high" },
    "Low":    { value: "$4,768.57", change: "",       note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,910.91" },
      { label: "R2",    value: "$4,872.00" },
      { label: "R1",    value: "$4,846.39" },
      { label: "Pivot", value: "$4,807.48" },
      { label: "S1",    value: "$4,781.87" },
      { label: "S2",    value: "$4,742.96" },
      { label: "S3",    value: "$4,717.35" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,872.00" },
      { label: "R2",    value: "$4,847.35" },
      { label: "R1",    value: "$4,832.13" },
      { label: "Pivot", value: "$4,807.48" },
      { label: "S1",    value: "$4,782.83" },
      { label: "S2",    value: "$4,767.61" },
      { label: "S3",    value: "$4,742.96" }
    ],
    camarilla: [
      { label: "R4", value: "$4,856.26" },
      { label: "R3", value: "$4,838.51" },
      { label: "R2", value: "$4,832.60" },
      { label: "R1", value: "$4,826.68" },
      { label: "S1", value: "$4,814.86" },
      { label: "S2", value: "$4,808.94" },
      { label: "S3", value: "$4,803.03" },
      { label: "S4", value: "$4,785.28" }
    ],
    note: "Gold trading below classic pivot $4,807 — short-term bearish bias unless reclaimed; S1 $4,782 is the pivotal hold."
  }
};
