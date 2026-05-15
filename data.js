window.CRUCIX_DATA = {
  generated: "Fri, 15 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Yield spike crushes risk; gold cracks, BTC tests $79K as Fed-cut hopes evaporate.",

  macro: {
    dxy:      { value: "104.85", change: "+0.42%", signal: "Dollar bid as yields surge globally" },
    gold:     { value: "$4,651.93", change: "-0.74%", signal: "Profit-taking after parabolic rally extends" },
    oil:      { value: "$92.40", change: "+2.10%", signal: "Hormuz closure keeps supply premium elevated" },
    silver:   { value: "$54.20", change: "-7.80%", signal: "Industrial demand fears, brutal session" },
    yield10y: { value: "4.58%", change: "+10bps", signal: "Bond revolt prices out June rate cuts" },
    vix:      { value: "17.26", change: "+12.40%", signal: "Fear bid but not yet panic" },
    usdmyr:   { value: "4.0250", change: "+0.15%", signal: "Ringgit soft on dollar strength bid" },
    sp500:    { value: "7,408.50", change: "-1.24%", signal: "Tech-led rout, rate fears dominate" },
    verdict: "Yields and DXY higher with VIX rising marks a textbook risk-off Thursday close. Gold's pullback is a healthy reset, not a trend break, while crypto and equities face near-term pressure. KLSE will open soft Friday; defensive sectors and exporters benefit from a weaker ringgit."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leadership intact during macro stress" },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$79,250", marketCap: "$1.57T",  change1h: "N/A", change24h: "-3.10%", change7d: "N/A", insight: "BTC sliced under $79K as the bond market rout priced out Fed cuts and even floated a hike. Holding $78K keeps the bull structure; lose it and $74K opens." },
      { name: "Ethereum", symbol: "ETH", price: "$2,282.84", marketCap: "$275B", change1h: "N/A", change24h: "-4.20%", change7d: "N/A", insight: "ETH underperformed BTC again as risk-off dragged altcoins broadly. The $2,200 zone is the line that must hold to avoid a deeper flush." },
      { name: "Solana",   symbol: "SOL", price: "$89.80",   marketCap: "$48B",  change1h: "N/A", change24h: "-4.00%", change7d: "N/A", insight: "SOL broke its short-term range as memecoin volume dried up. Reclaiming $95 is needed to flip momentum back constructive." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",      change24h: "-5.20%", note: "Below 200DMA; bearish bias." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000820",  change24h: "-6.80%", note: "Mild bullish but losing steam." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000629",  change24h: "-5.10%", note: "Consolidating between 50/100 EMAs." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",     note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",     note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-off bond shock has crypto on the back foot with BTC defending $79K as the line in the sand. A break of $78K opens $74K; reclaim $82K and the bull resumes. Altseason is dead until BTC stabilizes and yields cool."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,408.50",  change: "-1.24%" },
      { name: "Nasdaq",       value: "26,225.14", change: "-1.54%" },
      { name: "Dow",          value: "49,526.17", change: "-1.07%" },
      { name: "VIX",          value: "17.26",     change: "+12.40%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$687.73",  change: "-1.24%", insight: "Core S&P 500 exposure sold off with the broad index on yield shock." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$711.23",  change: "-1.54%", insight: "Tech-heavy ETF led the downside as duration-sensitive growth got repriced." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",        change: "-1.24%", insight: "Tracks S&P 500 cash index; same sell-off, same setup as VOO." },
      { ticker: "VTI",  name: "Total Market",      price: "—",        change: "N/A",    insight: "Broad market ETF down in line with S&P given mega-cap weighting." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",        change: "N/A",    insight: "High-beta growth basket gets punished hardest when yields spike like this." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",        change: "N/A",    insight: "Chip ETF down with NVDA/AMD/SMCI weakness on AI capex worries." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$44.03",   change: "-3.10%", insight: "Spot BTC ETF tracks the $79K Bitcoin print one-for-one." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",        change: "N/A",    insight: "Tech sector ETF moved with QQQ; rate-sensitive growth in the firing line." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$434.76",  change: "-0.74%", insight: "Gold ETF pulled back with bullion as DXY firmed and yields jumped." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$685.00", change: "-2.10%", notable: false, insight: "AI capex tailwind intact but valuation compresses when long yields rip higher." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$227.15", change: "-2.80%", notable: true,  insight: "Held $224 intraday low; AI demand story unchanged but multiple sensitive to rates." },
      { ticker: "TSLA",  name: "Tesla",         price: "$429.00", change: "-2.40%", notable: false, insight: "Range-bound around $430 as auto demand and robotaxi optionality wrestle." },
      { ticker: "AAPL",  name: "Apple",         price: "$215.00", change: "-1.30%", notable: false, insight: "Defensive mega-cap held up better than growth peers on the rate shock." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$364.34", change: "+1.50%", notable: true,  insight: "Bucked the tape — Azure AI workload growth and cash flow flight-to-quality." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$185.00", change: "-1.80%", notable: false, insight: "Search and YouTube ad strength intact, but cloud capex weighs on margin narrative." },
      { ticker: "AMZN",  name: "Amazon",        price: "$206.16", change: "+2.59%", notable: true,  insight: "Big outperformer — AWS reacceleration and ad growth lifted shares against the tape." },
      { ticker: "NFLX",  name: "Netflix",       price: "$95.12",  change: "+2.31%", notable: false, insight: "Bounced after the 16% monthly drawdown; guidance raise providing fundamental floor." },
      { ticker: "AMD",   name: "AMD",           price: "$148.00", change: "-3.20%", notable: false, insight: "Sold with the chip cohort; MI series ramp the bull thesis still in play." },
      { ticker: "PLTR",  name: "Palantir",      price: "$133.00", change: "-2.50%", notable: false, insight: "Down 25% YTD as high-multiple AI names get reset; gov contracts the floor." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "$420.00", change: "-2.00%", notable: false, insight: "Cybersecurity remains a structural growth area despite the rate-driven repricing." },
      { ticker: "COIN",  name: "Coinbase",      price: "$215.00", change: "-4.10%", notable: false, insight: "Tracked crypto lower; volumes correlate with BTC volatility and price action." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$278.00", change: "-5.20%", notable: false, insight: "BTC treasury beta — added 11,707 BTC recently; share price levered to spot." },
      { ticker: "APP",   name: "AppLovin",      price: "$385.00", change: "-2.80%", notable: false, insight: "Ad-tech AI engine narrative intact; multiple compression with the rest of growth." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$31.00",  change: "-1.90%", notable: false, insight: "Hit $30.64 low intraday; turnaround hinges on new CRO and AI server pipeline." }
    ],
    trending: [
      { ticker: "AMZN",  change: "+2.59%" },
      { ticker: "NFLX",  change: "+2.31%" },
      { ticker: "MSFT",  change: "+1.50%" },
      { ticker: "MSTR",  change: "-5.20%" },
      { ticker: "COIN",  change: "-4.10%" }
    ],
    verdict: "AI mega-caps with real cash flow (MSFT, AMZN) held up while high-multiple growth and crypto-beta got hammered. Sector rotation favors quality balance sheets, energy, and defensives until yields stabilize. Avoid leveraged BTC plays and unprofitable growth into a bond market pricing out cuts."
  },

  malaysia: {
    klci:   { value: "1,747.43", change: "+0.10%", context: "KLCI held above 1,745 support on Thursday close ahead of the US risk-off spill-over. Expect a softer Friday open with banks and Inari most exposed to the global tape." },
    usdmyr: { value: "4.0250",   change: "+0.15%", signal: "Ringgit soft as DXY firms on yields" },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "11.20", change: "+0.20%", insight: "OPR-stable environment supports NIM; largest cap on Bursa and a defensive ringgit proxy." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",            price: "—",     change: "N/A",    insight: "Regional banking exposure benefits from ASEAN growth but tracks global risk sentiment." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",     price: "—",     change: "N/A",    insight: "Defensive retail-bank franchise; lowest beta among the big-three Malaysian lenders." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",        price: "—",     change: "N/A",    insight: "Mid-cap bank with steady dividend yield; sensitive to corporate loan growth." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",          price: "—",     change: "N/A",    insight: "Regulated utility with data-centre capacity tailwind; defensive when ringgit weakens." },
      { ticker: "INARI",  name: "Inari (0138.KL)",           price: "—",     change: "N/A",    insight: "Semicap proxy to NVDA/AI cycle; will track US chip ETFs lower on Friday open." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",          price: "—",     change: "N/A",    insight: "Telco restructuring story; XL-Smartfren merger optionality remains the swing factor." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)",  price: "—",     change: "N/A",    insight: "Pan-Asian hospital chain; defensive cash flows and FX-diversified earnings." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",            price: "—",     change: "N/A",    insight: "Digital services play tied to government concessions; thin liquidity, high beta." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",           price: "—",     change: "N/A",    insight: "5G monetisation gradual; defensive yield play in a risk-off Bursa session." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No fresh IPO catalysts surfaced overnight. KLCI Friday open will be reactive to US sell-off." }
    ],
    verdict: "Ringgit at 4.0250 is the soft side of the year's range, mildly positive for exporters Inari and IHH. Maybank remains the best risk-adjusted hold as US tech volatility weighs on Inari. Friday Bursa likely opens 0.3-0.6% lower mirroring Wall Street's yield-shock close."
  },

  news: [
    { headline: "10Y Treasury yield spikes to 4.58% as inflation data scuttles June cut hopes", source: "CNBC",             time: "4h ago",  sentiment: "BEARISH", meaning: "Bond market repricing crushes risk assets across stocks and crypto." },
    { headline: "Bitcoin slips under $79K on bond market revolt and Fed-hike chatter",            source: "Brave New Coin",   time: "6h ago",  sentiment: "BEARISH", meaning: "Crypto correlates with long bonds; the key $78K level is now in focus." },
    { headline: "Dow loses 537 points as tech slumps and yields rip higher into the close",       source: "CNBC",             time: "2h ago",  sentiment: "BEARISH", meaning: "Classic risk-off tape with VIX up 12% intraday print." },
    { headline: "Silver dives 8% on industrial-demand fears after April PPI hot print",            source: "Investing.com",    time: "5h ago",  sentiment: "BEARISH", meaning: "Industrial metals warn of growth slowdown alongside sticky inflation." },
    { headline: "Gold pulls back 0.74% to $4,651 as DXY firms and real yields jump",               source: "TradingEconomics", time: "3h ago",  sentiment: "NEUTRAL", meaning: "Healthy consolidation after parabolic rally; structural bid intact." },
    { headline: "MicroStrategy adds 11,707 BTC for $1B in latest treasury purchase",               source: "Yahoo Finance",    time: "12h ago", sentiment: "BULLISH", meaning: "Corporate BTC demand persists despite spot price weakness." },
    { headline: "Strait of Hormuz remains closed; Brent oil climbs on supply premium",             source: "Reuters",          time: "8h ago",  sentiment: "WATCH",   meaning: "Energy shock keeps inflation prints elevated and Fed boxed in." },
    { headline: "Netflix raises full-year guidance; bulls flag 283% upside scenario",              source: "Yahoo Finance",    time: "10h ago", sentiment: "BULLISH", meaning: "Streaming pricing power providing growth-stock relative haven." }
  ],

  goldSummary: {
    "Price":  { value: "$4,651.93", change: "-0.74%", note: "Profit-take after parabolic May rally" },
    "Open":   { value: "$4,686.66", change: "", note: "" },
    "High":   { value: "$4,700.00", change: "", note: "Day high" },
    "Low":    { value: "$4,640.00", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,747.96" },
      { label: "R2",    value: "$4,723.98" },
      { label: "R1",    value: "$4,687.96" },
      { label: "Pivot", value: "$4,663.98" },
      { label: "S1",    value: "$4,627.96" },
      { label: "S2",    value: "$4,603.98" },
      { label: "S3",    value: "$4,567.96" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,723.98" },
      { label: "R2",    value: "$4,701.06" },
      { label: "R1",    value: "$4,686.90" },
      { label: "Pivot", value: "$4,663.98" },
      { label: "S1",    value: "$4,641.06" },
      { label: "S2",    value: "$4,626.90" },
      { label: "S3",    value: "$4,603.98" }
    ],
    camarilla: [
      { label: "R4", value: "$4,684.93" },
      { label: "R3", value: "$4,668.43" },
      { label: "R2", value: "$4,662.93" },
      { label: "R1", value: "$4,657.43" },
      { label: "S1", value: "$4,646.43" },
      { label: "S2", value: "$4,640.93" },
      { label: "S3", value: "$4,635.43" },
      { label: "S4", value: "$4,618.93" }
    ],
    note: "Gold trading below classic pivot $4,663.98 signals near-term bearish bias; reclaim flips momentum."
  }
};
