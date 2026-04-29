window.CRUCIX_DATA = {
  generated: "Wed, 29 Apr 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off as chip stocks slip on OpenAI report; oil and gold dominate macro narrative.",

  macro: {
    dxy:      { value: "98.68",   change: "+0.04%", signal: "Dollar steady; soft bid into FOMC aftermath." },
    gold:     { value: "$4,585",  change: "-1.95%", signal: "One-month low after sharp pullback yesterday." },
    oil:      { value: "$96.90",  change: "+3.10%", signal: "Hormuz disruption fuels supply-shock pricing." },
    silver:   { value: "—",       change: "—",      signal: "Pricing unavailable; tracking gold weakness." },
    yield10y: { value: "4.42%",   change: "+7bps",  signal: "Yields jump post-FOMC; one-month high." },
    vix:      { value: "18.92",   change: "-2.97%", signal: "Volatility easing despite chip-sector tremor." },
    usdmyr:   { value: "4.05",    change: "+0.05%", signal: "Ringgit stable; oil pressure offsets dollar." },
    sp500:    { value: "7,137.90", change: "+1.05%", signal: "Tape resilient; AI rotation churning underneath." },
    verdict: "Higher yields plus a firm dollar usually cap risk, but a softer VIX and lower gold suggest panic is fading even as oil shocks bite. Crypto stays vulnerable below $80K BTC, while US equities rotate from chips to broader names. KLSE faces mixed cues: strong oil aids energy plays, but Inari and tech proxies wobble on chip weakness."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC rangebound; alts underperform marginally." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$76,379", marketCap: "$1.51T",  change1h: "N/A", change24h: "-1.20%", change7d: "-3.97%", insight: "BTC failed again at $80K, the key resistance since February. STH realized price near $79.3K caps any breakout attempt." },
      { name: "Ethereum", symbol: "ETH", price: "$2,053",  marketCap: "$248B",   change1h: "N/A", change24h: "-2.10%", change7d: "N/A", insight: "ETH lags BTC as derivatives positioning stays defensive. A reclaim of $2,300 is needed to flip momentum bullish." },
      { name: "Solana",   symbol: "SOL", price: "$83.02",  marketCap: "$40B",    change1h: "N/A", change24h: "-1.00%", change7d: "-6.00%", insight: "SOL down 6% on the week as memecoin volume cools. Network activity holding but speculation has dimmed." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.102",      change24h: "+6.00%", note: "Holds 50-day EMA; momentum returning." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000040",  change24h: "+1.50%", note: "Testing 100-day EMA resistance." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000063",  change24h: "+0.80%", note: "Near upper consolidation boundary." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-off bias dominates with BTC stuck below $80K and STH realized resistance heavy. ETH and SOL show weakness, signalling no altseason without a clean BTC breakout. Watch $75K — a break invites a $70K test; a reclaim of $80K opens a relief rally."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,137.90", change: "+1.05%" },
      { name: "Nasdaq",       value: "24,657.57", change: "+1.64%" },
      { name: "Dow",          value: "49,490.03", change: "+0.69%" },
      { name: "VIX",          value: "18.92",     change: "-2.97%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$654.26", change: "+1.05%", insight: "Core large-cap exposure tracks S&P strength as breadth widens." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$659.02", change: "+1.64%", insight: "Tech-heavy bid even as chip names take hits intraday." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "—",      insight: "Mirrors S&P; institutional pivot ETF of choice." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Total-market proxy; broad participation favours holding." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",      insight: "High-beta growth vulnerable to higher yields and chip rotation." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$460.94", change: "-2.10%", insight: "Chip ETF pressured by OpenAI report on hyperscaler capex." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$43.89",  change: "-1.20%", insight: "BTC proxy; flows turn defensive as $80K cap holds." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Tech mixed; software resilient, semis vulnerable." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$428.50", change: "-1.95%", insight: "Gold ETF tracks bullion's pullback to one-month low." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$671.34", change: "-1.07%", notable: false, insight: "Heading into earnings; ad-spend and AI capex narrative is the swing factor." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$213.17", change: "-1.59%", notable: true,  insight: "Hit on OpenAI report; still the GPU bellwether but momentum is cooling." },
      { ticker: "TSLA",  name: "Tesla",         price: "$376.02", change: "-0.70%", notable: false, insight: "Modest dip; awaiting robotaxi and FSD milestone catalysts." },
      { ticker: "AAPL",  name: "Apple",         price: "$269.47", change: "-0.46%", notable: false, insight: "Defensive trade; iPhone refresh cycle and services growth supportive." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$424.46", change: "-1.12%", notable: false, insight: "Lower into Q3 print; OpenAI dynamic and Azure AI revenue in focus." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$349.94", change: "-0.50%", notable: false, insight: "Search and cloud beat are key as Mag7 earnings are tested tonight." },
      { ticker: "AMZN",  name: "Amazon",        price: "$263.04", change: "+1.29%", notable: false, insight: "Bucks tech weakness; AWS and retail margin trajectory critical." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",       change: "—",      notable: false, insight: "Q1 beat but Q2 guide soft; Hastings exit adds governance overhang." },
      { ticker: "AMD",   name: "AMD",           price: "$278.26", change: "+7.80%", notable: true,  insight: "Breakout on investor-day catalyst; share-gain narrative versus NVDA." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "—",      notable: false, insight: "AI-platform leader; commercial book accelerating into 2026." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",      notable: false, insight: "Cybersecurity bellwether; ARR durability is the key tell." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "—",      notable: false, insight: "Crypto exchange leverage; volumes cooling as BTC struggles below $80K." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$165.25", change: "-2.50%", notable: false, insight: "BTC proxy with preferred-stock leverage; mNAV compresses as BTC fades." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",      notable: false, insight: "Adtech AI engine driving margins; valuation now demands execution." },
      { ticker: "SMCI",  name: "Super Micro",   price: "—",       change: "—",      notable: false, insight: "AI server beneficiary; governance and margin questions remain an overhang." }
    ],
    trending: [
      { ticker: "AMD",  change: "+7.80%" },
      { ticker: "MSTR", change: "-2.50%" },
      { ticker: "SOXX", change: "-2.10%" },
      { ticker: "AMZN", change: "+1.29%" },
      { ticker: "NVDA", change: "-1.59%" }
    ],
    verdict: "AI trade is rotating: AMD breaks out while NVDA and SOXX wobble on OpenAI capex fears. Own diversified mega-cap (AMZN, GOOGL) into earnings and trim chip-only exposure. Avoid high-beta innovation names until yields stabilise below 4.40%."
  },

  malaysia: {
    klci:   { value: "—", change: "N/A", context: "Awaiting last-close confirmation. Bursa likely tracks regional risk tone with energy strength offsetting chip weakness." },
    usdmyr: { value: "4.05", change: "+0.05%", signal: "Ringgit firm; oil tailwind balances dollar." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM11.14", change: "+1.08%", insight: "Bank leadership intact; OPR steady supports NIM and dividend yield." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "—",       change: "—",      insight: "Regional ASEAN banking franchise benefits from cross-border trade growth." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",      change: "—",      insight: "Defensive bank pick with consistent ROE and asset-quality leadership." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",      change: "—",      insight: "Mid-cap bank with attractive dividend; SME loan book expanding." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",      change: "—",      insight: "Utility anchor; data-centre power demand a multi-year structural tailwind." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—",      change: "—",      insight: "Semi outsource play near-term pressured by NVDA and chip-cycle wobble." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",      change: "—",      insight: "Telco restructuring story; ASEAN footprint and tower monetisation are key." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",      change: "—",      insight: "Healthcare defensive; medical tourism and Singapore hospital pricing supportive." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",      change: "—",      insight: "Digital-services concession with recurring revenue mix improving margins." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",      change: "—",      insight: "5G monetisation underway; dividend yield anchors total return profile." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No new IPO data captured this run. Monitor Bursa announcements for upcoming retail subscriptions." }
    ],
    verdict: "Ringgit holds the 4.00–4.10 band as oil tailwinds offset a firm dollar. Maybank remains the cleanest large-cap with stable yield while Inari faces near-term chip-cycle risk. Bursa likely opens mixed with energy and banks leading and tech proxies under pressure."
  },

  news: [
    { headline: "Stocks drop as chip names sink on OpenAI capex report",            source: "Yahoo Finance", time: "10h ago", sentiment: "BEARISH",  meaning: "Hyperscaler capex worries hit AI chip suppliers." },
    { headline: "Fed holds rates; Powell signals patience in final FOMC speech",    source: "CCN",           time: "1d ago",  sentiment: "NEUTRAL",  meaning: "No surprise hold; yields rise on data dependence." },
    { headline: "Bitcoin tests $79,300 STH realized price; $80K resistance holds",  source: "Blockonomi",    time: "8h ago",  sentiment: "BEARISH",  meaning: "BTC capped; downside test of $75K likely." },
    { headline: "Gold drops 2% to one-month low below $4,600 per ounce",            source: "FXStreet",      time: "1d ago",  sentiment: "BEARISH",  meaning: "Bullion correction as yields jump and dollar firms." },
    { headline: "Strait of Hormuz disruption cuts 20% of global oil flows",         source: "TradingEcon",   time: "2d ago",  sentiment: "BULLISH",  meaning: "Oil supply shock supports energy and inflation hedges." },
    { headline: "AMD breakout on investor-day catalyst; +7.8% surge",               source: "Investing.com", time: "12h ago", sentiment: "BULLISH",  meaning: "Share-gain narrative challenges Nvidia's GPU dominance." },
    { headline: "Mag7 earnings ahead: MSFT, AMZN, META, GOOGL on deck",             source: "Stocktwits",    time: "6h ago",  sentiment: "WATCH",    meaning: "Earnings will set near-term tape direction sharply." },
    { headline: "Ringgit steady at 4.05 amid mixed regional flows",                 source: "Bloomberg",     time: "5h ago",  sentiment: "NEUTRAL",  meaning: "MYR balanced by oil tailwind and dollar strength." }
  ],

  goldSummary: {
    "Price":    { value: "$4,585", change: "-1.95%", note: "One-month low after sharp drop." },
    "Open":     { value: "$4,650", change: "",       note: "" },
    "High":     { value: "$4,680", change: "",       note: "Day high" },
    "Low":      { value: "$4,560", change: "",       note: "Day low" },
    "52W High": { value: "N/A",    change: "",       note: "" },
    "52W Low":  { value: "N/A",    change: "",       note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,776" },
      { label: "R2",    value: "$4,728" },
      { label: "R1",    value: "$4,656" },
      { label: "Pivot", value: "$4,608" },
      { label: "S1",    value: "$4,536" },
      { label: "S2",    value: "$4,488" },
      { label: "S3",    value: "$4,416" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,728" },
      { label: "R2",    value: "$4,682" },
      { label: "R1",    value: "$4,654" },
      { label: "Pivot", value: "$4,608" },
      { label: "S1",    value: "$4,562" },
      { label: "S2",    value: "$4,534" },
      { label: "S3",    value: "$4,488" }
    ],
    camarilla: [
      { label: "R4", value: "$4,651" },
      { label: "R3", value: "$4,618" },
      { label: "R2", value: "$4,607" },
      { label: "R1", value: "$4,596" },
      { label: "S1", value: "$4,574" },
      { label: "S2", value: "$4,563" },
      { label: "S3", value: "$4,552" },
      { label: "S4", value: "$4,519" }
    ],
    note: "Gold trades below the $4,608 classic pivot — bias bearish until reclaim, with $4,536 the next downside marker."
  }
};
