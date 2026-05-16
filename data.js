window.CRUCIX_DATA = {
  generated: "Sat, 16 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off Friday: hot CPI/PPI lifted yields, sank stocks and crypto; oil and DXY surge keep pressure on.",

  macro: {
    dxy:      { value: "99.29",    change: "+0.45%", signal: "Dollar firm; pressures gold and EM FX." },
    gold:     { value: "$4,547.89", change: "-2.22%", signal: "Fourth daily drop on stronger USD." },
    oil:      { value: "$98.20",   change: "+1.80%", signal: "Hormuz closure keeps supply premium." },
    silver:   { value: "$80.87",   change: "+0.85%", signal: "Holds up despite gold pullback." },
    yield10y: { value: "4.60%",    change: "+10bps", signal: "Fresh one-year high; hawkish repricing." },
    vix:      { value: "18.43",    change: "+8.20%", signal: "Risk gauge perks but not panic." },
    usdmyr:   { value: "3.96",     change: "+0.28%", signal: "Ringgit soft as DXY pushes higher." },
    sp500:    { value: "7,408.50", change: "-1.24%", signal: "Friday selloff led by tech, semis." },
    verdict: "Hotter inflation prints (CPI 3.8%, PPI 6.0%) and a 10bps yield spike re-priced rate-hike odds, with traders now pricing a March 2027 hike. Stronger DXY plus rising yields punish crypto, mega-cap tech and gold simultaneously. KLSE faces a soft Monday: ringgit pressure and risk-off in Asia, partially offset by stable bank earnings."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady as alts bleed harder." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$80,605",   marketCap: "$1.60T", change1h: "N/A", change24h: "+0.97%", change7d: "N/A", insight: "BTC defended $78K after $1B in spot ETF outflows wiped six weeks of inflows. Hot inflation and dollar strength remain the dominant headwinds into next week." },
      { name: "Ethereum", symbol: "ETH", price: "$2,282.84", marketCap: "$275B",  change1h: "N/A", change24h: "-3.10%", change7d: "N/A", insight: "ETH lagging BTC again, slipping under $2,300 with weak spot flows. Needs reclaim of $2,400 to neutralize the bearish structure." },
      { name: "Solana",   symbol: "SOL", price: "$89.80",    marketCap: "$52B",   change1h: "N/A", change24h: "-4.00%", change7d: "-2.00%", insight: "SOL sliced through $90 support as risk-off hits high-beta L1s. Memecoin volume tied to SOL ecosystem continues to thin." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",     change24h: "-3.50%", note: "DOGE flips bearish under EMAs." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000040",  change24h: "-2.10%", note: "Consolidating just above 100D EMA." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000614", change24h: "-2.80%", note: "Pinned between 50D and 100D EMAs." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",    note: "SOL-linked; tracks ecosystem weakness." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",    note: "Speculative SOL memecoin under pressure." }
    ],
    verdict: "Clear risk-off tone — BTC ETF outflows and dollar strength are draining liquidity. Key BTC level to watch is $78K; lose it and $72K opens up fast. No altseason signal — SOL/ETH lagging and meme volume fading."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,408.50",  change: "-1.24%" },
      { name: "Nasdaq",       value: "26,225.15", change: "-1.54%" },
      { name: "Dow",          value: "49,526.17", change: "-1.07%" },
      { name: "VIX",          value: "18.43",     change: "+8.20%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—",       change: "Fri close", insight: "Tracks S&P 500; will reflect Friday's -1.24% drop." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$711.23", change: "Fri close", insight: "Tech-heavy fund took the brunt of yield-driven selling." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "Fri close", insight: "Mirrors VOO; broad index ETF following Friday rout." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "Fri close", insight: "Total-market exposure; small-cap drag adds to losses." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "Fri close", insight: "High-beta growth basket hurt most by rising real yields." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "Fri close", insight: "Semis sold off hard with NVDA and AMD both red Friday." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$44.78",  change: "+0.97%",    insight: "Spot BTC ETF saw $1B in outflows this week; tracks BTC weakness." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "Fri close", insight: "Tech sector ETF mirrors mega-cap selloff." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$425.04", change: "-2.22%",    insight: "Gold proxy fell with bullion on USD and yield strength." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$614.38", change: "-0.70%", notable: false, insight: "Relatively resilient amid the tech rout; ad business seen as defensive." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$225.39", change: "-2.10%", notable: true,  insight: "AI bellwether dragged by yield spike; still the core long-term AI proxy." },
      { ticker: "TSLA",  name: "Tesla",         price: "$422.30", change: "-4.70%", notable: true,  insight: "High-beta name punished hard on rate-hike fears." },
      { ticker: "AAPL",  name: "Apple",         price: "$300.23", change: "+0.70%", notable: false, insight: "Defensive bid; balance sheet and buybacks insulate from yields." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$419.67", change: "-1.10%", notable: false, insight: "Holds the $3T club; AI cloud growth still the structural story." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$396.47", change: "-1.15%", notable: false, insight: "Search and YouTube cash flow offsetting AI capex anxiety." },
      { ticker: "AMZN",  name: "Amazon",        price: "$264.14", change: "-1.15%", notable: false, insight: "AWS growth supports the floor; retail margins watched closely." },
      { ticker: "NFLX",  name: "Netflix",       price: "$87.02",  change: "+0.09%", notable: false, insight: "Post-split price; subscriber growth and ads keep narrative intact." },
      { ticker: "AMD",   name: "AMD",           price: "$430.98", change: "-5.69%", notable: true,  insight: "Sharp Friday drop but still +10% on the week on AI server share gains." },
      { ticker: "PLTR",  name: "Palantir",      price: "$133.06", change: "-2.50%", notable: false, insight: "Government and enterprise AI demand intact; valuation remains the debate." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "$591.50", change: "-1.20%", notable: false, insight: "Cyber demand structural; near 52-week highs despite insider selling." },
      { ticker: "COIN",  name: "Coinbase",      price: "$194.48", change: "-3.80%", notable: false, insight: "High-beta crypto proxy; falls with BTC and ETF outflows." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$183.79", change: "+3.24%", notable: true,  insight: "Bucked the tape on fresh BTC purchases and Citigroup $41M stake disclosure." },
      { ticker: "APP",   name: "AppLovin",      price: "$453.53", change: "-2.20%", notable: false, insight: "Ad-tech leader still in uptrend despite Friday risk-off." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$30.90",  change: "-4.10%", notable: false, insight: "AI server name remains volatile and well off prior cycle highs." }
    ],
    trending: [
      { ticker: "AMD",  change: "-5.69%" },
      { ticker: "TSLA", change: "-4.70%" },
      { ticker: "SMCI", change: "-4.10%" },
      { ticker: "COIN", change: "-3.80%" },
      { ticker: "MSTR", change: "+3.24%" }
    ],
    verdict: "AI trade intact structurally but tactically vulnerable while real yields climb. Rotation favors mega-cap quality (AAPL, MSFT, META) and away from high-beta (TSLA, SMCI, ARKK names). Own dollar-resilient cash flows; avoid leveraged growth until yields stabilize."
  },

  malaysia: {
    klci:   { value: "1,747.43", change: "+0.44%", context: "KLCI eked out a Friday gain led by banks. Monday opens facing global risk-off headwinds and a softer ringgit." },
    usdmyr: { value: "3.96",     change: "+0.28%", signal: "Ringgit pressured by stronger DXY narrative." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM11.24", change: "-0.35% (Fri)",    insight: "Largest bank; OPR stability and dividend yield remain the anchor." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "RM7.83",  change: "+1.82% (Fri)",    insight: "Regional ASEAN footprint outperformed on Friday's bank bid." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",       change: "N/A (Fri close)", insight: "Defensive consumer bank; low NPL franchise prized in risk-off tape." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",       change: "N/A (Fri close)", insight: "Mid-cap bank with high dividend yield appeal." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",       change: "N/A (Fri close)", insight: "Utility and data-center power demand still the structural story." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—",       change: "N/A (Fri close)", insight: "Semi cycle proxy; will track NVDA/AMD Friday weakness on open." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",       change: "N/A (Fri close)", insight: "Regional telco; deleveraging story unfolding." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",       change: "N/A (Fri close)", insight: "Defensive hospital operator with regional growth." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",       change: "N/A (Fri close)", insight: "Digital govt services; concession renewals remain the catalyst." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",       change: "N/A (Fri close)", insight: "5G access pricing and DNB structure still in focus." }
    ],
    ipos: [
      { name: "No fresh IPO disclosed", sector: "N/A", price: "N/A", listingDate: "N/A", status: "N/A", note: "No new IPO news flagged in Friday Bursa flow." }
    ],
    verdict: "Ringgit at 3.96 still well inside the 3.90–4.10 band but with upside DXY risk. Best risk-reward sits with CIMB and Maybank on yield plus regional banking strength. Monday Bursa likely opens softer on Wall Street's Friday rout; semis (Inari) most exposed."
  },

  news: [
    { headline: "Spot Bitcoin ETFs see $1B weekly outflow, ending six-week inflow streak", source: "Benzinga", time: "12h ago", sentiment: "BEARISH", meaning: "Institutional demand softening; near-term BTC pressure continues." },
    { headline: "US CPI jumps to 3.8%, PPI surges to 6.0% on energy shock", source: "Reuters", time: "1d ago", sentiment: "BEARISH", meaning: "Inflation re-acceleration kills rate-cut hopes for 2026." },
    { headline: "10-Year Treasury yield hits fresh one-year high at 4.6%", source: "CNBC", time: "14h ago", sentiment: "BEARISH", meaning: "Higher discount rate pressures growth, crypto, gold simultaneously." },
    { headline: "Gold drops 4th straight day toward $4,500 on USD strength", source: "FXStreet", time: "10h ago", sentiment: "BEARISH", meaning: "Yields and dollar overwhelming safe-haven demand short term." },
    { headline: "Crude oil holds near $98 as Strait of Hormuz remains closed", source: "Bloomberg", time: "8h ago", sentiment: "WATCH", meaning: "Energy supply premium fueling inflation feedback loop." },
    { headline: "Citigroup boosts Bitcoin exposure with $41.2M Strategy stake", source: "CryptoBriefing", time: "1d ago", sentiment: "BULLISH", meaning: "Tradfi accumulation through MSTR signals structural BTC demand." },
    { headline: "AMD jumps 10% on the week on AI server share gains despite Friday dip", source: "Yahoo Finance", time: "15h ago", sentiment: "BULLISH", meaning: "AI semi cycle intact; competitive position improving versus Intel." },
    { headline: "Bursa: KLCI closes +0.44% Friday led by banks; ringgit at 3.96", source: "The Edge", time: "16h ago", sentiment: "NEUTRAL", meaning: "Local resilience but global risk-off into Monday open." }
  ],

  goldSummary: {
    "Price":    { value: "$4,547.89", change: "-2.22%", note: "Fourth daily drop; USD pressure." },
    "Open":     { value: "$4,620.00", change: "",       note: "Estimated open" },
    "High":     { value: "$4,660.00", change: "",       note: "Day high (est)" },
    "Low":      { value: "$4,535.00", change: "",       note: "Day low (est)" },
    "52W High": { value: "N/A",       change: "",       note: "" },
    "52W Low":  { value: "N/A",       change: "",       note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,751.92" },
      { label: "R2",    value: "$4,705.96" },
      { label: "R1",    value: "$4,626.93" },
      { label: "Pivot", value: "$4,580.96" },
      { label: "S1",    value: "$4,501.93" },
      { label: "S2",    value: "$4,455.96" },
      { label: "S3",    value: "$4,376.92" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,705.96" },
      { label: "R2",    value: "$4,658.21" },
      { label: "R1",    value: "$4,628.71" },
      { label: "Pivot", value: "$4,580.96" },
      { label: "S1",    value: "$4,533.21" },
      { label: "S2",    value: "$4,503.71" },
      { label: "S3",    value: "$4,455.96" }
    ],
    camarilla: [
      { label: "R4", value: "$4,616.64" },
      { label: "R3", value: "$4,582.27" },
      { label: "R2", value: "$4,570.81" },
      { label: "R1", value: "$4,559.35" },
      { label: "S1", value: "$4,536.43" },
      { label: "S2", value: "$4,524.97" },
      { label: "S3", value: "$4,513.51" },
      { label: "S4", value: "$4,479.14" }
    ],
    note: "Gold at $4,547.89 sits below classic pivot $4,580.96 — bearish bias unless reclaimed."
  }
};
