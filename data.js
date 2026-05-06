window.CRUCIX_DATA = {
  generated: "Wed, 06 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on tone as DXY breaks lower, oil falls on Iran peace headlines, and BTC reclaims $82K with short squeeze fuel.",

  macro: {
    dxy:      { value: "98.26",   change: "-0.19%", signal: "Dollar breaking lower; supports risk assets." },
    gold:     { value: "$3,385",  change: "+0.85%", signal: "Rally builds on weak dollar, falling yields." },
    oil:      { value: "$60.15",  change: "-2.07%", signal: "Iran peace headlines crush crude sharply." },
    silver:   { value: "$33.40",  change: "+0.60%", signal: "Tracking gold strength on dollar weakness." },
    yield10y: { value: "4.42%",   change: "-3bps",  signal: "Yields ease, supportive of duration assets." },
    vix:      { value: "17.38",   change: "-4.98%", signal: "Vol crushed; complacency creeping back in." },
    usdmyr:   { value: "4.05",    change: "-0.10%", signal: "Ringgit firm on broad dollar weakness today." },
    sp500:    { value: "7,259.22", change: "+0.81%", signal: "New record close; breadth still narrow." },
    verdict: "Soft DXY, falling yields, low VIX and bid gold form classic risk-on backdrop. Crypto and growth equities benefit; defensive plays underperform. KLSE should track regional positivity, with ringgit strength capping import-cost concerns."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady around mid-50s range." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$82,150",  marketCap: "$1.62T",  change1h: "N/A", change24h: "+2.85%", change7d: "N/A", insight: "BTC reclaimed $82K resistance with $270M short liquidations. ETF inflows returning as Iran tensions ease." },
      { name: "Ethereum", symbol: "ETH", price: "$2,367.35", marketCap: "$285B",  change1h: "N/A", change24h: "+1.90%", change7d: "N/A", insight: "ETH lagging BTC's breakout but holding $2,300 support. Altseason rotation pending until ETH/BTC base completes." },
      { name: "Solana",   symbol: "SOL", price: "$143.80",  marketCap: "$68B",   change1h: "N/A", change24h: "+2.20%", change7d: "N/A", insight: "SOL outperforming on memecoin activity revival. Strong relative strength signals risk appetite return." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.115",      change24h: "+6.0%", note: "RSI 80; overbought but trending." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000042",  change24h: "+5.0%", note: "Bullish MACD crossover, breakout." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000064",  change24h: "+4.5%", note: "Approaching 200-day EMA test." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",   note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",   note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on confirmed: BTC reclaiming $82K with short squeeze fuel and meme coins ripping. Key level is $85K — clean break opens path toward $90K. Altseason signal still pending until ETH/BTC base breakout."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,259.22",  change: "+0.81%" },
      { name: "Nasdaq",       value: "25,326.13", change: "+1.03%" },
      { name: "Dow",          value: "49,298.25", change: "+0.73%" },
      { name: "VIX",          value: "17.38",     change: "-4.98%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$665.30", change: "+0.75%", insight: "Tracking S&P record close on broad risk-on bid." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$688.52", change: "+1.01%", insight: "Tech-heavy ETF leading on semis and AI rally." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$723.77", change: "+0.80%", insight: "Liquid benchmark proxy; smooth bid throughout session." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Total market exposure tracking S&P 500 closely today." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",      insight: "High-beta innovation names benefit from falling yields." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$482.73", change: "+4.47%", insight: "Massive semi rally on NVDA strength and AI capex." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$45.64",  change: "+2.85%", insight: "Estimated from BTC÷1800; ETF inflows returning." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Tech sector leadership intact on dovish rate backdrop." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$316.36", change: "+0.85%", insight: "Estimated from Gold÷10.7; safe-haven bid on weak dollar." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$604.96",  change: "-0.89%", notable: false, insight: "Modest pullback after recent run; ad cycle still strong." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$206.46",  change: "+2.50%", notable: true,  insight: "Powering semi rally; AI capex demand undiminished." },
      { ticker: "TSLA",  name: "Tesla",         price: "$389.37",  change: "-0.80%", notable: false, insight: "Lagging mega-cap peers; robotaxi narrative still pending." },
      { ticker: "AAPL",  name: "Apple",         price: "$282.75",  change: "+0.30%", notable: false, insight: "Stable bid; services growth offsetting hardware softness." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",        change: "—",      notable: false, insight: "Azure AI revenue growth remains the key bull thesis." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",        change: "—",      notable: false, insight: "Search resilience and Gemini progress underpinning multiple." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",        change: "—",      notable: false, insight: "AWS reacceleration and retail margin expansion the focus." },
      { ticker: "NFLX",  name: "Netflix",       price: "$93.13",   change: "+0.50%", notable: false, insight: "Ad-tier monetization scaling; subscriber growth stable." },
      { ticker: "AMD",   name: "AMD",           price: "—",        change: "—",      notable: false, insight: "MI300 ramp critical to capture share from NVDA." },
      { ticker: "PLTR",  name: "Palantir",      price: "$135.91",  change: "+1.20%", notable: true,  insight: "Government and commercial AI deals driving outperformance." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "$476.53",  change: "+0.80%", notable: false, insight: "Cyber demand robust; module attach rates expanding." },
      { ticker: "COIN",  name: "Coinbase",      price: "$196.89",  change: "+3.50%", notable: true,  insight: "Crypto rally lifting trading volumes and stock beta." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",        change: "—",      notable: false, insight: "Q1 dividend funding chatter weighing on BTC proxy premium." },
      { ticker: "APP",   name: "AppLovin",      price: "—",        change: "—",      notable: false, insight: "Ad-tech AXON engine still driving outsized revenue growth." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$34.67",   change: "+1.50%", notable: false, insight: "AI server demand intact but margin compression a worry." }
    ],
    trending: [
      { ticker: "SOXX", change: "+4.47%" },
      { ticker: "COIN", change: "+3.50%" },
      { ticker: "NVDA", change: "+2.50%" },
      { ticker: "PLTR", change: "+1.20%" },
      { ticker: "META", change: "-0.89%" }
    ],
    verdict: "AI trade re-energized: SOXX +4.47% with NVDA leading and capex cycle intact. Rotation favors semis, crypto-linked names, and growth over defensives. Own SOXX/NVDA/COIN; avoid stretched defensives and rate-sensitive utilities here."
  },

  malaysia: {
    klci:   { value: "1,562.50", change: "+0.20%", context: "KLCI holding firm into mid-week with banks and tech leading. Regional risk-on tone and ringgit strength supportive of further upside." },
    usdmyr: { value: "4.05",     change: "-0.10%", signal: "Ringgit firm on broad dollar weakness today." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM10.42", change: "+0.10%", insight: "Stable OPR backdrop and dividend yield underpin defensive bid." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "RM7.28",  change: "+0.15%", insight: "Regional banking exposure gives ASEAN growth optionality." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "RM4.50",  change: "+0.05%", insight: "Defensive bank with sector-best asset quality and ROE." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "RM6.85",  change: "0.00%",  insight: "Mid-tier bank with attractive valuation and dividend yield." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "RM14.20", change: "+0.30%", insight: "Data center power demand thesis driving capex re-rating." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "RM2.45",  change: "+1.20%", insight: "Semi cycle leverage to NVDA-driven AI capex tailwind." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "RM2.40",  change: "+0.20%", insight: "Telco consolidation theme remains primary catalyst." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "RM7.10",  change: "+0.10%", insight: "Defensive healthcare with regional volume growth." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "RM0.95",  change: "-0.50%", insight: "Digital services concession renewal risk capping upside." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "RM3.70",  change: "+0.10%", insight: "5G monetization slow but dividend yield supports floor." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No headline IPO catalyst on the Bursa pipeline this week." }
    ],
    verdict: "Ringgit at 4.05 is the standout, giving import-cost relief and lifting consumer/utility multiples. Inari is the best risk-reward with NVDA-tied semi cycle leverage. Bursa outlook constructive with banks and tech leading."
  },

  news: [
    { headline: "Bitcoin breaches $82K resistance on short squeeze and ETF inflows", source: "CryptoNews", time: "3h ago", sentiment: "BULLISH", meaning: "Short liquidations and ETF demand opening path to $85K." },
    { headline: "S&P 500 and Nasdaq close at fresh records on Iran peace hopes",      source: "CNBC",        time: "8h ago", sentiment: "BULLISH", meaning: "Geopolitical de-escalation lifts risk; vol crushed lower." },
    { headline: "Strategy weighs selling bitcoin to fund dividend obligations",       source: "CoinDesk",    time: "10h ago", sentiment: "BEARISH", meaning: "MSTR break from never-sell stance hits BTC proxy premium." },
    { headline: "Crude oil drops 2% as US-Iran talks restart easing supply fears",    source: "Reuters",     time: "9h ago", sentiment: "BULLISH", meaning: "Lower oil eases inflation pressure; supports rate cut path." },
    { headline: "Dollar index breaks lower as 10-year yield eases below 4.45%",       source: "Bloomberg",   time: "7h ago", sentiment: "BULLISH", meaning: "Soft dollar fuels EM and commodities; ringgit benefits." },
    { headline: "Semiconductor ETF SOXX surges 4.47% on NVDA and AI capex bid",       source: "TheStreet",   time: "6h ago", sentiment: "BULLISH", meaning: "AI cycle alive; semis leadership reasserted across tape." },
    { headline: "CIMB Securities reiterates positive Malaysia equity outlook 2026",   source: "The Edge",    time: "12h ago", sentiment: "BULLISH", meaning: "Domestic flows plus ringgit strength supportive for KLCI." },
    { headline: "Gold rallies as dollar breaks and oil falls sharply on day",         source: "FXEmpire",    time: "5h ago", sentiment: "BULLISH", meaning: "Macro mix favors gold; trend bias remains constructive." }
  ],

  goldSummary: {
    "Price":  { value: "$3,385", change: "+0.85%", note: "Rally on weak dollar, lower yields." },
    "Open":   { value: "$3,358", change: "", note: "" },
    "High":   { value: "$3,392", change: "", note: "Day high" },
    "Low":    { value: "$3,352", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$3,432" },
      { label: "R2",    value: "$3,412" },
      { label: "R1",    value: "$3,398" },
      { label: "Pivot", value: "$3,374" },
      { label: "S1",    value: "$3,360" },
      { label: "S2",    value: "$3,336" },
      { label: "S3",    value: "$3,322" }
    ],
    fibonacci: [
      { label: "R3",    value: "$3,414" },
      { label: "R2",    value: "$3,399" },
      { label: "R1",    value: "$3,389" },
      { label: "Pivot", value: "$3,374" },
      { label: "S1",    value: "$3,359" },
      { label: "S2",    value: "$3,349" },
      { label: "S3",    value: "$3,334" }
    ],
    camarilla: [
      { label: "R4", value: "$3,407" },
      { label: "R3", value: "$3,396" },
      { label: "R2", value: "$3,392" },
      { label: "R1", value: "$3,389" },
      { label: "S1", value: "$3,381" },
      { label: "S2", value: "$3,378" },
      { label: "S3", value: "$3,374" },
      { label: "S4", value: "$3,363" }
    ],
    note: "Gold above classic pivot $3,374 — bullish bias intact; watch R1 $3,398 for breakout confirmation."
  }
};
