window.CRUCIX_DATA = {
  generated: "Sat, 25 Apr 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on tone as US equities print fresh records, BTC reclaims $77K, gold marches above $4,740 — a rare every-asset bid.",

  macro: {
    dxy:      { value: "98.51",     change: "-0.02%", signal: "Dollar drifts sideways, soft tone supports risk." },
    gold:     { value: "$4,740.90", change: "+0.36%", signal: "Bullion grinds higher on real-yield slip." },
    oil:      { value: "$94.40",    change: "-1.51%", signal: "Crude drops as Iran talks resume optimism." },
    silver:   { value: "—",         change: "N/A",    signal: "Tracks gold, awaiting Friday close print." },
    yield10y: { value: "4.31%",     change: "-3bps",  signal: "Yields ease, equity duration trade extends." },
    vix:      { value: "18.92",     change: "-2.97%", signal: "Volatility crushes, complacency creeping in." },
    usdmyr:   { value: "3.9620",    change: "+0.05%", signal: "Ringgit firm under 4.00 — exporters watch." },
    sp500:    { value: "7,137.90",  change: "+1.05%", signal: "S&P at record, momentum trade intact." },
    verdict: "Soft DXY, falling 10Y, and a sub-19 VIX are the textbook risk-on cocktail — yet gold also rallying signals lingering hedging demand. Crypto and US tech remain the cleanest beta plays into Monday. KLSE benefits via firmer ringgit and Inari's NVDA tailwind."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance high; alts still suppressed." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$77,388", marketCap: "$1.53T", change1h: "N/A", change24h: "-0.53%", change7d: "N/A", insight: "BTC reclaimed mid-$77K after Iran-talks dip retraced; VanEck flags on-chain profit conditions returning. Watch $79K resistance and $75K floor." },
      { name: "Ethereum", symbol: "ETH", price: "$2,053",  marketCap: "$247B",  change1h: "N/A", change24h: "+1.20%", change7d: "N/A", insight: "ETH still lags BTC on dominance trade; ratio compressed. A break of $2,150 unlocks alt rotation." },
      { name: "Solana",   symbol: "SOL", price: "$85.73",  marketCap: "$41B",   change1h: "N/A", change24h: "+0.80%", change7d: "N/A", insight: "SOL holds the $85 pivot as ETF inflow narrative simmers. Memecoin volume on-chain is the leading tell." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.0939",     change24h: "-1.14%", note: "Tracks BTC, awaits ETF news." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000334", change24h: "-0.90%", note: "Sellers defend $0.0000034 zone." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000539", change24h: "-2.05%", note: "Soft tape, burn rate slowing." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on but BTC-led — alts and memes flat to red. Key levels: BTC $79K resistance, $75K support; a clean break opens $82K. Altseason still gated on a decisive ETH/BTC reversal."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,137.90",  change: "+1.05%" },
      { name: "Nasdaq",       value: "24,657.57", change: "+1.64%" },
      { name: "Dow",          value: "49,490.03", change: "+0.69%" },
      { name: "VIX",          value: "18.92",     change: "-2.97%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$656.42", change: "Fri close", insight: "Core beta — rides S&P record print into Monday open." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$663.46", change: "Fri close", insight: "Mega-cap tech leadership intact; AI capex narrative reaccelerating." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",        change: "Fri close", insight: "Tracks SPX; deepest liquidity for hedging Monday tape." },
      { ticker: "VTI",  name: "Total Market",      price: "—",        change: "Fri close", insight: "Broad-market proxy — small-caps still lag mega-caps." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",        change: "Fri close", insight: "High-beta speculative basket benefits from falling yields." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$460.94", change: "Fri close", insight: "NVDA's +4.3% session powers chip ETF higher into earnings season." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$43.89",  change: "~BTC",     insight: "Spot BTC ETF tracks $77K print; flows turning positive." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",        change: "Fri close", insight: "Tech sector leading on AI plus falling-rate tailwind." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$443.07", change: "+0.36%",   insight: "Gold ETF rides bullion's grind to fresh highs." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$675.49", change: "+2.48%", notable: true,  insight: "AI ad-stack momentum lifts Meta into earnings; Reality Labs drag fading." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$208.24", change: "+4.31%", notable: true,  insight: "Blackwell ramp plus sovereign AI deals drive day's biggest mega-cap gain." },
      { ticker: "TSLA",  name: "Tesla",         price: "$376.46", change: "+0.73%", notable: false, insight: "Robotaxi headlines support but margins still under scrutiny." },
      { ticker: "AAPL",  name: "Apple",         price: "$271.11", change: "-0.85%", notable: false, insight: "Lone mega-cap loser; iPhone cycle anxiety lingers pre-earnings." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$420.50", change: "Fri close", notable: false, insight: "Azure AI growth thesis intact; capex digestion the swing factor." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",        change: "Fri close", notable: false, insight: "Search moat tested by AI rivals; Cloud margins improving." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",        change: "Fri close", notable: false, insight: "AWS reacceleration plus retail margin lift the dual catalysts." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",        change: "Fri close", notable: true,  insight: "Announced $25B buyback — confidence signal post-results dip." },
      { ticker: "AMD",   name: "AMD",           price: "—",        change: "Fri close", notable: false, insight: "MI-series ramp the read-through from NVDA strength." },
      { ticker: "PLTR",  name: "Palantir",      price: "$142.39", change: "Fri close", notable: false, insight: "AIP commercial wins keep the multiple stretched — momentum favorite." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",        change: "Fri close", notable: false, insight: "Cyber spending durable; Falcon platform gaining share." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",        change: "Fri close", notable: false, insight: "High beta to BTC reclaim; staking and derivatives optionality." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",        change: "Fri close", notable: false, insight: "BTC proxy with leverage; Metaplanet's $50M raise echoes the playbook." },
      { ticker: "APP",   name: "AppLovin",      price: "—",        change: "Fri close", notable: false, insight: "Adtech AXON engine still the cleanest AI ad-stack story." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$29.20",  change: "Fri close", notable: false, insight: "Deeply discounted post-restatement; AI-server demand the upside." }
    ],
    trending: [
      { ticker: "NVDA", change: "+4.31%" },
      { ticker: "META", change: "+2.48%" },
      { ticker: "TSLA", change: "+0.73%" },
      { ticker: "AAPL", change: "-0.85%" },
      { ticker: "N/A",  change: "N/A" }
    ],
    verdict: "AI trade is back in front, led by NVDA and Meta. Rotate toward semis (SOXX), AI software (PLTR, APP) and BTC-proxies (IBIT, COIN) on dips. Avoid stretched defensives and Apple until iPhone cycle clarity returns."
  },

  malaysia: {
    klci:   { value: "1,720.34", change: "-0.08%", context: "KLCI flat into the weekend, holding the 1,720 shelf. Monday tape should benefit from firm ringgit and US tech tailwind for Inari." },
    usdmyr: { value: "3.9620",   change: "+0.05%", signal: "Ringgit holds sub-4.00 — exporters trim hedges." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "—", change: "Fri close", insight: "OPR hold and stable NIM keep the dividend yield call intact." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "—", change: "Fri close", insight: "Regional ASEAN exposure plus Indonesia pickup remain the swing factors." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—", change: "Fri close", insight: "Defensive bank with sticky retail deposits — the lower-beta KLCI core." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—", change: "Fri close", insight: "Higher dividend yield play, asset-quality watch into next print." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—", change: "Fri close", insight: "Data-center power thesis still the structural driver into 2027." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—", change: "Fri close", insight: "Direct NVDA/Apple beta — Friday's NVDA +4.3% should bid Monday open." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—", change: "Fri close", insight: "Restructuring story; XL-Smart merger execution the catalyst." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—", change: "Fri close", insight: "Defensive healthcare with regional volume growth — quality compounder." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—", change: "Fri close", insight: "Digital concession renewals plus Zetrix the optionality kicker." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—", change: "Fri close", insight: "5G DNB resolution and ARPU stability the dividend anchor." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No fresh Bursa IPO prints in this morning's tape." }
    ],
    verdict: "Ringgit's sub-4.00 print is the quiet macro win — frees BNM from urgency. Inari is the cleanest Monday long via NVDA spillover. Banks rangebound; rotate selectively into Tenaga and Inari beta."
  },

  news: [
    { headline: "S&P 500, Nasdaq close at fresh records on US-Iran talks optimism",       source: "CNBC",          time: "12h ago", sentiment: "BULLISH", meaning: "Geopolitical relief plus AI bid extends record-chase tape." },
    { headline: "Bitcoin reclaims $77K as VanEck flags bullish on-chain profit signals",  source: "Yahoo Finance", time: "8h ago",  sentiment: "BULLISH", meaning: "Spot demand returning; $79K the next decisive level." },
    { headline: "Netflix announces $25 billion stock buyback after share decline",        source: "Bloomberg",     time: "1d ago",  sentiment: "BULLISH", meaning: "Aggressive buyback signals management confidence in cash flow." },
    { headline: "Metaplanet raises $50M to add to corporate Bitcoin treasury",            source: "Cryptonews",    time: "10h ago", sentiment: "BULLISH", meaning: "Treasury demand from Asian corporates remains a key bid." },
    { headline: "Nvidia jumps 4.3% as Blackwell shipments and sovereign AI deals expand", source: "CNBC",          time: "12h ago", sentiment: "BULLISH", meaning: "AI capex cycle reaccelerating, lifts whole semis complex." },
    { headline: "10-year Treasury yield slides to 4.31% as Fed-cut bets firm",            source: "Investing.com", time: "14h ago", sentiment: "BULLISH", meaning: "Lower yields support equity multiples and gold simultaneously." },
    { headline: "USD/MYR holds near 3.96 as ringgit firms versus weak DXY",               source: "Bursa wire",    time: "9h ago",  sentiment: "NEUTRAL", meaning: "Stronger ringgit aids importers, pressures exporter margins modestly." },
    { headline: "Gold pushes above $4,740 as real yields drift lower on dovish repricing",source: "Goldprice.org", time: "6h ago",  sentiment: "BULLISH", meaning: "Hedging demand persists despite risk-on equities and BTC." }
  ],

  goldSummary: {
    "Price":  { value: "$4,740.90", change: "+0.36%", note: "Real yields slip; bullion grinds higher." },
    "Open":   { value: "$4,725.00", change: "", note: "" },
    "High":   { value: "$4,755.00", change: "", note: "Day high" },
    "Low":    { value: "$4,715.00", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,805.60" },
      { label: "R2",    value: "$4,780.30" },
      { label: "R1",    value: "$4,760.60" },
      { label: "Pivot", value: "$4,736.97" },
      { label: "S1",    value: "$4,718.93" },
      { label: "S2",    value: "$4,696.97" },
      { label: "S3",    value: "$4,672.27" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,776.97" },
      { label: "R2",    value: "$4,761.69" },
      { label: "R1",    value: "$4,752.25" },
      { label: "Pivot", value: "$4,736.97" },
      { label: "S1",    value: "$4,721.69" },
      { label: "S2",    value: "$4,712.25" },
      { label: "S3",    value: "$4,696.97" }
    ],
    camarilla: [
      { label: "R4", value: "$4,762.90" },
      { label: "R3", value: "$4,751.90" },
      { label: "R2", value: "$4,748.23" },
      { label: "R1", value: "$4,744.57" },
      { label: "S1", value: "$4,737.23" },
      { label: "S2", value: "$4,733.57" },
      { label: "S3", value: "$4,729.90" },
      { label: "S4", value: "$4,718.90" }
    ],
    note: "Spot trades above the $4,737 classic pivot — bias bullish toward $4,760 R1; loss of pivot opens $4,719 S1."
  }
};
