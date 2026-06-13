window.CRUCIX_DATA = {
  generated: "Sat, 13 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Weekend lull — gold near record $4,220 while BTC consolidates around $64K and risk assets digest record Dow close.",

  macro: {
    dxy:      { value: "99.81",  change: "+0.06%", signal: "Dollar firm but capped below 100 line." },
    gold:     { value: "$4,219", change: "+0.20%", signal: "Record highs hold; haven bid persists." },
    oil:      { value: "$84.88", change: "-3.23%", signal: "Crude slides on demand softness fears." },
    silver:   { value: "$52.40", change: "+0.45%", signal: "Tracks gold; industrial bid steady." },
    yield10y: { value: "4.49%",  change: "+2bps",  signal: "Yields creep up post-CPI digestion." },
    vix:      { value: "17.68",  change: "+1.20%", signal: "Calm regime, complacency risk rising." },
    usdmyr:   { value: "4.0575", change: "-0.16%", signal: "Ringgit firmer; sub-4.10 holds." },
    sp500:    { value: "6,820",  change: "+0.50%", signal: "Record close zone, breadth narrow." },
    verdict: "DXY soft, yields stable, VIX low and gold at records signals a quiet risk-on tape with hedging undertones. Crypto gets tailwind from weak dollar; US tech remains the leadership engine but stretched. KLSE benefits from ringgit strength and regional yield carry."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady near 58%." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$63,844", marketCap: "$1.26T",  change1h: "N/A", change24h: "+1.10%", change7d: "N/A", insight: "BTC reclaimed $63K on institutional ETF inflows. Key level is $65K reclaim for $70K retest." },
      { name: "Ethereum", symbol: "ETH", price: "$1,847",  marketCap: "$222B",  change1h: "N/A", change24h: "-0.80%", change7d: "N/A", insight: "ETH lags BTC as L2 fees compress validator economics. Watch $1,900 reclaim for momentum shift." },
      { name: "Solana",   symbol: "SOL", price: "$78.97",  marketCap: "$37B",   change1h: "N/A", change24h: "-1.43%", change7d: "N/A", insight: "SOL consolidates below $80 with healthy DEX volume. Network growth narrative remains intact." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",     change24h: "-0.50%", note: "Bearish below 100-day EMA." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000444", change24h: "+0.20%", note: "Holding above 100-day EMA." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000046",  change24h: "+2.50%", note: "Modest bid; ecosystem chatter." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",     note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",     note: "Speculative SOL memecoin." }
    ],
    verdict: "Crypto leans risk-on as BTC defends $63K and DXY softens. The key BTC level is the $65K reclaim — break opens a $70K retest. Altseason signal is muted: ETH and SOL still lagging BTC."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "6,820",   change: "Fri close" },
      { name: "Nasdaq",       value: "23,150",  change: "Fri close" },
      { name: "Dow",          value: "47,120",  change: "Fri close" },
      { name: "VIX",          value: "17.68",   change: "Fri close" },
      { name: "Russell 2000", value: "N/A",     change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$628.30", change: "Fri close", insight: "Core S&P holding tracking record-high tape." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$613.12", change: "Fri close", insight: "Mega-cap tech leadership, AI capex sensitive." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$683.17", change: "Fri close", insight: "Most liquid S&P proxy; options bid steady." },
      { ticker: "VTI",  name: "Total Market",      price: "—",        change: "Fri close", insight: "Total market exposure; SCV tilt vs SPY." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",        change: "Fri close", insight: "High-beta growth basket; volatile in rate moves." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",        change: "Fri close", insight: "Chip cycle proxy; tied to AI capex and NVDA." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "~$35.47",  change: "+1.10%",     insight: "Spot BTC vehicle; estimate via BTC÷1800." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",        change: "Fri close", insight: "Cap-weighted tech; concentrated in AAPL/MSFT." },
      { ticker: "GLD",  name: "Gold ETF",          price: "~$394.30", change: "+0.20%",     insight: "Tracks spot gold at record highs." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$566.80", change: "Fri close",  notable: false, insight: "Ad spend resilient; Reality Labs drag persists." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$205.42", change: "Fri close",  notable: true,  insight: "AI capex king; Blackwell ramp in focus." },
      { ticker: "TSLA",  name: "Tesla",         price: "$406.43", change: "Fri close",  notable: true,  insight: "Strongest mega-cap mover Friday; robotaxi narrative bid." },
      { ticker: "AAPL",  name: "Apple",         price: "$291.13", change: "Fri close",  notable: false, insight: "Underperforming on China demand worry." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$387.71", change: "Fri close",  notable: false, insight: "Azure AI growth steady; copilot monetization watched." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",        change: "Fri close",  notable: false, insight: "Search resilient despite AI competition; Gemini momentum." },
      { ticker: "AMZN",  name: "Amazon",        price: "$238.55", change: "Fri close",  notable: false, insight: "AWS reaccelerating on AI workload mix." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",        change: "Fri close",  notable: false, insight: "Ad-tier monetization is the swing factor for FY26." },
      { ticker: "AMD",   name: "AMD",           price: "—",        change: "Fri close",  notable: false, insight: "MI300 ramp critical to close NVDA gap." },
      { ticker: "PLTR",  name: "Palantir",      price: "$131.46", change: "Fri close",  notable: false, insight: "Gov+commercial AIP demand keeps multiple elevated." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",        change: "Fri close",  notable: false, insight: "Cyber spend resilient; platform consolidation tailwind." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",        change: "Fri close",  notable: false, insight: "BTC reclaim of $63K supports trading volume." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$124.22", change: "Fri close",  notable: false, insight: "BTC treasury proxy; premium compressing modestly." },
      { ticker: "APP",   name: "AppLovin",      price: "—",        change: "Fri close",  notable: false, insight: "Ad-tech engine still firing on AXON 2 monetization." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$30.85",  change: "Fri close",  notable: false, insight: "AI server capex story tarnished by accounting overhang." }
    ],
    trending: [
      { ticker: "TSLA", change: "+1.82%" },
      { ticker: "NVDA", change: "+1.00%" },
      { ticker: "AAPL", change: "-1.52%" },
      { ticker: "AMZN", change: "-1.23%" },
      { ticker: "MSFT", change: "-0.40%" }
    ],
    verdict: "AI trade remains the dominant story — NVDA and TSLA bid, AAPL fading. Rotation favors hyperscaler infrastructure (MSFT, AMZN) over consumer hardware. Own AI capex beneficiaries; avoid stretched mega-cap consumer names into earnings."
  },

  malaysia: {
    klci:   { value: "1,679.52", change: "+0.70%", context: "KLCI extended Friday's gain to a second day, supported by bank rotation and ringgit strength. Monday outlook constructive if USD/MYR holds sub-4.06." },
    usdmyr: { value: "4.0575",   change: "-0.16%", signal: "Ringgit firm; helps importers and consumption plays." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM10.72", change: "Fri close", insight: "Largest cap bank; OPR stability supports NIM into 2H." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "—",       change: "Fri close", insight: "Regional ASEAN bank with Indonesia exposure offers earnings beta." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",   price: "—",       change: "Fri close", insight: "Defensive bank with cleanest asset quality in the sector." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",      price: "—",       change: "Fri close", insight: "Highest dividend yield among large banks; cap return story intact." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",        price: "—",       change: "Fri close", insight: "Utility with data center power demand kicker into FY26." },
      { ticker: "INARI",  name: "Inari (0138.KL)",         price: "—",       change: "Fri close", insight: "Pure-play semi name geared to RF cycle and NVDA supply chain." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",        price: "—",       change: "Fri close", insight: "Telco consolidation theme keeps optionality alive." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",       change: "Fri close", insight: "Defensive healthcare; medical tourism rebound thesis." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",          price: "—",       change: "Fri close", insight: "Digital govt services; concession renewals are the catalyst." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",         price: "—",       change: "Fri close", insight: "5G wholesale model finalised; dividend yield anchor." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "Upcoming", note: "No major Main Market IPO pricing on the tape this weekend. Watch ACE Market debuts next week." }
    ],
    verdict: "Ringgit at 4.06 is the bullish anchor for Bursa names with USD costs. Best stock pick is Inari into the NVDA Blackwell cycle. Monday Bursa outlook: constructive, with banks leading and consumer names benefiting from FX."
  },

  news: [
    { headline: "Bitcoin reclaims $63K as institutional ETF inflows resurface",                 source: "DMarketForces",     time: "6h ago",  sentiment: "BULLISH", meaning: "Institutional demand returns; supports risk-on crypto into next week." },
    { headline: "Dow clears 47,000 on third straight session of record closes",                  source: "Finviz",            time: "12h ago", sentiment: "BULLISH", meaning: "Breadth improving; rotation broadens beyond mega-cap tech leadership." },
    { headline: "Gold hits fresh record near $4,250 on safe-haven and central bank bid",         source: "Investing.com",     time: "8h ago",  sentiment: "BULLISH", meaning: "Real yields contained; central banks keep buying physical gold." },
    { headline: "Crude oil drops 3.2% on demand softness fears and inventory build",             source: "Trading Economics", time: "10h ago", sentiment: "BEARISH", meaning: "Energy names face headwind; consumer pockets get relief at pump." },
    { headline: "10-year Treasury yield ticks to 4.49% post-CPI digestion",                      source: "Investing.com",     time: "14h ago", sentiment: "NEUTRAL", meaning: "Rates stable; duration risk balanced for now." },
    { headline: "USD/MYR hovers near 4.06 as ringgit firms on regional flows",                   source: "FXStreet",          time: "5h ago",  sentiment: "BULLISH", meaning: "Ringgit strength supports Bursa importers and consumer plays." },
    { headline: "KLCI extends gains to second day, banks lead the tape",                         source: "Bursa Malaysia",    time: "16h ago", sentiment: "BULLISH", meaning: "Sector rotation into financials supports KLCI breakout setup." },
    { headline: "Nasdaq, S&P 500 log highest closes since February on AI bid",                   source: "Nasdaq",            time: "11h ago", sentiment: "BULLISH", meaning: "AI capex narrative still drives mega-cap multiple expansion." }
  ],

  goldSummary: {
    "Price":    { value: "$4,219", change: "+0.20%", note: "Holding record-high zone; haven bid." },
    "Open":     { value: "$4,215", change: "", note: "" },
    "High":     { value: "$4,247", change: "", note: "Day high" },
    "Low":      { value: "$4,170", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,324.79" },
      { label: "R2",    value: "$4,285.66" },
      { label: "R1",    value: "$4,248.28" },
      { label: "Pivot", value: "$4,209.15" },
      { label: "S1",    value: "$4,171.77" },
      { label: "S2",    value: "$4,132.64" },
      { label: "S3",    value: "$4,095.26" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,285.66" },
      { label: "R2",    value: "$4,256.43" },
      { label: "R1",    value: "$4,238.38" },
      { label: "Pivot", value: "$4,209.15" },
      { label: "S1",    value: "$4,179.92" },
      { label: "S2",    value: "$4,161.87" },
      { label: "S3",    value: "$4,132.64" }
    ],
    camarilla: [
      { label: "R4", value: "$4,252.97" },
      { label: "R3", value: "$4,231.93" },
      { label: "R2", value: "$4,224.92" },
      { label: "R1", value: "$4,217.90" },
      { label: "S1", value: "$4,203.88" },
      { label: "S2", value: "$4,196.86" },
      { label: "S3", value: "$4,189.85" },
      { label: "S4", value: "$4,168.81" }
    ],
    note: "Spot at $4,219 sits just above the $4,209 classic pivot — mildly bullish bias while above; failure invites a flush to S1 $4,172."
  }
};
