window.CRUCIX_DATA = {
  generated: "Mon, 25 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on as US-Iran de-escalation sinks oil; US shut for Memorial Day, new Fed chair sworn in.",

  macro: {
    dxy:      { value: "98.93",   change: "-0.27%", signal: "Dollar softens on easing Middle East risk." },
    gold:     { value: "$4,567.70", change: "+0.25%", signal: "Holds above $4,500 despite weekly slide." },
    oil:      { value: "$92.14",  change: "-4.62%", signal: "WTI tumbles as Iran deal eases supply fear." },
    silver:   { value: "$78.53",  change: "+3.06%", signal: "Silver outruns gold on industrial demand." },
    yield10y: { value: "4.50%",   change: "-8bps",  signal: "Yields ease to one-week low pre-holiday." },
    vix:      { value: "16.70",   change: "N/A",    signal: "Volatility subdued; complacency creeping in." },
    usdmyr:   { value: "3.9510",  change: "-0.35%", signal: "Ringgit firms as dollar broadly retreats." },
    sp500:    { value: "7,473.47", change: "+0.37%", signal: "Index near record into long weekend." },
    verdict: "Soft dollar, falling yields and a 16-handle VIX paint a risk-on backdrop with gold still firm above $4,500. Cheaper oil cools inflation fear short-term, helping crypto and growth equities. KLSE gets a weaker-dollar tailwind, though a new Fed chair and Mideast headlines keep tail risk alive."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady amid muted altcoin flows." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$77,275", marketCap: "$1.53T", change1h: "N/A", change24h: "+0.80%", change7d: "N/A", insight: "BTC ticks up as US-Iran peace odds climb and Strategy floats a debt buyback. Bulls need a clean reclaim of $80k; below $77k invites a retest of $70k." },
      { name: "Ethereum", symbol: "ETH", price: "$2,060", marketCap: "$248B", change1h: "N/A", change24h: "N/A", change7d: "N/A", insight: "ETH languishes near $2,060 as the ETH/BTC ratio stays pinned at cycle lows. A rotation into ETH is the missing piece for any altseason." },
      { name: "Solana",   symbol: "SOL", price: "$86.03", marketCap: "$47B", change1h: "N/A", change24h: "+1.30%", change7d: "N/A", insight: "SOL leads majors with a 1.3% gain, holding the mid-$80s. Ecosystem volume keeps it the strongest large-cap alt." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",     change24h: "-1.14%", note: "Neutral-bearish; tracks BTC." },
      { name: "Pepe",      symbol: "PEPE", price: "—",            change24h: "N/A",    note: "Above 50/100 EMAs; mild bull." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000615", change24h: "+6.32%", note: "Bounces off EMA support." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on tilt: easing oil and a softer dollar support crypto, with BTC holding $77k. The key level is $80k — reclaim it and momentum returns; lose $77k and $70k is back in play. Altcoins remain laggards, so no altseason signal yet."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,473.47",  change: "+0.37%" },
      { name: "Nasdaq",       value: "26,343.97", change: "+0.19%" },
      { name: "Dow",          value: "50,579.70", change: "+0.58%" },
      { name: "VIX",          value: "16.70",     change: "N/A" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$685.55", change: "+0.40%", insight: "Core S&P exposure near record into the holiday." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$701.53", change: "-0.62%", insight: "Megacap tech eased Friday despite firm chips." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$733.73", change: "-0.67%", insight: "Broad benchmark cooled into the long weekend." },
      { ticker: "VTI",  name: "Total Market",      price: "$366.79", change: "+0.47%", insight: "Whole-market fund grinds higher on breadth." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "$76.40",  change: "-0.29%", insight: "Speculative growth flat; risk appetite contained." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$537.33", change: "+2.41%", insight: "Chips lead the tape as AMD and SOXX surge." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$42.93",  change: "+0.80%", insight: "Tracks BTC near $77k; ETF inflows have cooled." },
      { ticker: "XLK",  name: "Tech Sector",       price: "$180.39", change: "+1.00%", insight: "Tech sector outperforms on semiconductor strength." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$426.89", change: "+0.25%", insight: "Gold proxy steady; bullion holds above $4,500." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$610.26", change: "+0.47%", notable: false, insight: "Ad engine resilience keeps Meta near highs." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$214.28", change: "-2.38%", notable: true,  insight: "Beat earnings yet sold off as guidance underwhelmed." },
      { ticker: "TSLA",  name: "Tesla",         price: "$426.01", change: "+1.95%", notable: false, insight: "Tesla rebounds on improving risk sentiment." },
      { ticker: "AAPL",  name: "Apple",         price: "$308.82", change: "+1.26%", notable: false, insight: "Apple firms as defensive megacap bid returns." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$418.57", change: "N/A",    notable: false, insight: "Cloud and AI demand underpin steady leadership." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$383.22", change: "+0.34%", notable: false, insight: "Search and cloud keep Alphabet grinding higher." },
      { ticker: "AMZN",  name: "Amazon",        price: "$266.32", change: "-0.80%", notable: false, insight: "Slips with consumer names; AWS still the anchor." },
      { ticker: "NFLX",  name: "Netflix",       price: "$88.60",  change: "-0.78%", notable: false, insight: "Streaming leader eases within its trading range." },
      { ticker: "AMD",   name: "AMD",           price: "$467.51", change: "+3.99%", notable: true,  insight: "Surges on AI-chip momentum near record highs." },
      { ticker: "PLTR",  name: "Palantir",      price: "$135.70", change: "N/A",    notable: false, insight: "Government and AI demand keep narrative intact." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "$663.46", change: "+2.35%", notable: false, insight: "Cyber leader gains on durable security spend." },
      { ticker: "COIN",  name: "Coinbase",      price: "$184.41", change: "N/A",    notable: false, insight: "Tracks crypto sentiment as BTC holds $77k." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$186.97", change: "N/A",    notable: false, insight: "Debt buyback plan supports the BTC treasury story." },
      { ticker: "APP",   name: "AppLovin",      price: "$481.68", change: "-0.87%", notable: false, insight: "Ad-tech high-flyer takes a breather after its run." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$35.58",  change: "N/A",    notable: false, insight: "AI-server play stays volatile and well off highs." }
    ],
    trending: [
      { ticker: "AMD",  change: "+3.99%" },
      { ticker: "CRWD", change: "+2.35%" },
      { ticker: "TSLA", change: "+1.95%" },
      { ticker: "AAPL", change: "+1.26%" },
      { ticker: "NVDA", change: "-2.38%" }
    ],
    verdict: "The AI trade splits: chips (AMD, SOXX) lead while Nvidia sells the news on soft guidance. Rotation favors broad semis and cyber over single-name megacap risk. Own SOXX/AMD strength and quality cash-flow names; avoid chasing extended ad-tech. US shut Monday for Memorial Day."
  },

  malaysia: {
    klci:   { value: "1,712.67", change: "N/A (Fri close)", context: "KLCI ended Friday at 1,712.67 after foreign selling pressured heavyweights. Monday opens cautious as a softer ringgit competes with weak regional sentiment." },
    usdmyr: { value: "3.9510", change: "-0.35%", signal: "Ringgit firms as the dollar broadly retreats." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM11.10", change: "-0.72%", insight: "Largest bank dips slightly; OPR-stable margins keep it a core anchor." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "RM7.88",  change: "-0.25%", insight: "Regional banking franchise eases marginally on profit-taking." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",     price: "RM4.91",  change: "+1.66%", insight: "Defensive lender outperforms on its low-risk mortgage book." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",        price: "—",       change: "—",      insight: "High-dividend bank stays a steady income proxy amid rate stability." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",          price: "RM14.54", change: "+0.41%", insight: "Utility firms as data-centre power demand supports the load story." },
      { ticker: "INARI",  name: "Inari (0138.KL)",           price: "—",       change: "—",      insight: "Semi back-ender leveraged to the AI cycle and Nvidia-led chip strength." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",          price: "—",       change: "—",      insight: "Telco play hinges on regional consolidation and cost discipline." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)",  price: "RM8.92",  change: "-0.78%", insight: "Defensive healthcare eases; medical-tourism volumes underpin growth." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",            price: "—",       change: "—",      insight: "Digital-government services offer structural recurring-revenue growth." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",           price: "—",       change: "—",      insight: "5G monetisation and dividend yield define the investment case." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "N/A", note: "No major Bursa IPO in immediate focus. Watch the ACE and Main Market pipeline for fresh listings." }
    ],
    verdict: "Ringgit strength below 3.96 is a quiet tailwind for sentiment and importers. Public Bank is the standout on defensive bank flows; banks broadly steady. Monday Bursa opens cautious — foreign selling and weak regional cues cap upside until clarity emerges."
  },

  news: [
    { headline: "US, Iran signal progress toward ending war; Hormuz toll disputed", source: "Schwab/Reuters", time: "3h ago", sentiment: "BULLISH", meaning: "Easing Middle East risk drags oil lower and lifts risk assets." },
    { headline: "Kevin Warsh sworn in as new Federal Reserve chairman", source: "CNBC", time: "1h ago", sentiment: "WATCH", meaning: "New Fed chief faces Mideast-driven inflation; policy path now uncertain." },
    { headline: "Oil tumbles ~4.6% as US-Iran de-escalation eases supply fears", source: "Investing.com", time: "5h ago", sentiment: "BULLISH", meaning: "Cheaper crude cools inflation and softens near-term rate-hike pressure." },
    { headline: "Nvidia beats earnings estimates but shares fall", source: "Motley Fool", time: "3d ago", sentiment: "BEARISH", meaning: "AI leader sells the news on guidance; chip sentiment stays mixed." },
    { headline: "Strategy targets debt buyback as Bitcoin rebounds above $77k", source: "The Coin Republic", time: "6h ago", sentiment: "BULLISH", meaning: "Balance-sheet move reinforces the corporate Bitcoin treasury narrative." },
    { headline: "Bitcoin ETF demand plummets, prompting fresh price analysis", source: "ZyCrypto", time: "12h ago", sentiment: "BEARISH", meaning: "Slowing ETF inflows weigh on Bitcoin's near-term upside momentum." },
    { headline: "Bursa Malaysia closes at intraday low on foreign selling", source: "BusinessToday", time: "3d ago", sentiment: "BEARISH", meaning: "Foreign outflows pressure KLCI heavyweights across utilities and industrials." },
    { headline: "US data week: consumer confidence, new home sales, Q1 GDP", source: "Schwab", time: "4h ago", sentiment: "NEUTRAL", meaning: "Key macro prints this week may reset Fed and market tone." }
  ],

  goldSummary: {
    "Price":  { value: "$4,567.70", change: "+0.25%", note: "Holds above $4,500 despite weekly slide." },
    "Open":   { value: "$4,536.00", change: "", note: "Fri open" },
    "High":   { value: "$4,565.00", change: "", note: "Day high" },
    "Low":    { value: "$4,485.00", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,639.50" },
      { label: "R2",    value: "$4,602.25" },
      { label: "R1",    value: "$4,559.50" },
      { label: "Pivot", value: "$4,522.25" },
      { label: "S1",    value: "$4,479.50" },
      { label: "S2",    value: "$4,442.25" },
      { label: "S3",    value: "$4,399.50" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,602.25" },
      { label: "R2",    value: "$4,571.69" },
      { label: "R1",    value: "$4,552.81" },
      { label: "Pivot", value: "$4,522.25" },
      { label: "S1",    value: "$4,491.69" },
      { label: "S2",    value: "$4,472.81" },
      { label: "S3",    value: "$4,442.25" }
    ],
    camarilla: [
      { label: "R4", value: "$4,560.75" },
      { label: "R3", value: "$4,538.75" },
      { label: "R2", value: "$4,531.42" },
      { label: "R1", value: "$4,524.08" },
      { label: "S1", value: "$4,509.42" },
      { label: "S2", value: "$4,502.08" },
      { label: "S3", value: "$4,494.75" },
      { label: "S4", value: "$4,472.75" }
    ],
    note: "Spot $4,567 sits above the $4,522 classic pivot — bias stays bullish while it holds."
  }
};
