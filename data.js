window.CRUCIX_DATA = {
  generated: "Sat, 27 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off bias as BTC nurses sub-60k breakdown; gold above $4k as ringgit firms below 4.10.",

  macro: {
    dxy:      { value: "101.13", change: "-0.07%", signal: "Dollar soft; supportive for EM and gold." },
    gold:     { value: "$4,007", change: "+0.45%", signal: "Above $4k; safe-haven bid intact." },
    oil:      { value: "$69.23", change: "-3.74%", signal: "Iran de-escalation pulls WTI lower." },
    silver:   { value: "$59.22", change: "+1.47%", signal: "Industrial bid plus precious tailwind." },
    yield10y: { value: "4.37%", change: "-3bps", signal: "Seven-week low; cooling inflation supports risk." },
    vix:      { value: "18.41", change: "-2.54%", signal: "Calm but elevated; macro tail uncertainty." },
    usdmyr:   { value: "4.0878", change: "-0.66%", signal: "Ringgit firms on soft dollar print." },
    sp500:    { value: "7354.02", change: "-0.05%", signal: "Flat at highs; tech leadership wobbling." },
    verdict: "DXY softening with 10Y at seven-week lows is a textbook risk-positive backdrop, yet gold above $4k and VIX still near 18 signal hedged positioning. For crypto, the divergence is bearish — easy money should be lifting BTC, but ETF outflows dominate. For US tech and KLSE banks, lower yields are constructive into next week."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady as alts under pressure." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$60,500", marketCap: "$1.20T",  change1h: "N/A", change24h: "-1.04%", change7d: "N/A", insight: "BTC reclaimed $60k after testing 2024 lows amid record ETF outflows. Strategy's leverage overhang and miner capitulation risk keep the tape fragile." },
      { name: "Ethereum", symbol: "ETH", price: "$1,563",  marketCap: "$188B",   change1h: "N/A", change24h: "-4.97%", change7d: "N/A", insight: "ETH led the downside with a sharp single-day flush as risk-off bid the dollar peers. Staking inflows and L2 fee data the bull case to watch." },
      { name: "Solana",   symbol: "SOL", price: "$72.70",  marketCap: "$34B",    change1h: "N/A", change24h: "+0.20%", change7d: "+2.0%", insight: "SOL outperformed majors on resilient DEX volume and memecoin activity. Holding $70 keeps the ecosystem narrative alive." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",    change24h: "-2.10%", note: "Neutral-to-bearish under 50DMA." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000091", change24h: "-1.80%", note: "Above 50/100 EMA cluster." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000063", change24h: "-2.40%", note: "Coiled between 50/100 EMAs." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",        change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",        change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk is firmly off in crypto with BTC barely defending $60k and ETH down ~5% on the day. Key BTC level is $58.8k — losing it opens a $55k air pocket. No altseason signal while dominance holds and meme tape bleeds."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7354.02",  change: "-0.05%" },
      { name: "Nasdaq",       value: "25297.62", change: "-0.24%" },
      { name: "Dow",          value: "51876.11", change: "-0.09%" },
      { name: "VIX",          value: "18.41",    change: "-2.54%" },
      { name: "Russell 2000", value: "N/A",      change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—",       change: "Fri close", insight: "Mirrors S&P 500 drift at record highs into month-end." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—",       change: "Fri close", insight: "Tech-heavy basket leaking with NVDA in correction." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "Fri close", insight: "Most-traded S&P proxy; liquidity favored into July." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "Fri close", insight: "Broader market exposure outpacing concentrated mega-cap risk." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "Fri close", insight: "High-beta growth proxy; sensitive to yield-down move." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "Fri close", insight: "+85% YTD per VanEck; semis remain leadership group." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$33.61",  change: "-1.04%",    insight: "Record monthly outflows pressuring spot BTC bid." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "Fri close", insight: "Holds up despite mega-cap rotation under the surface." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$374.51", change: "+0.45%",    insight: "Tracks XAU above $4k; haven flows still firm." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$542.87", change: "-2.65% (Fri close)", notable: true,  insight: "Sharpest mega-cap drop on day; ad spend questions resurface." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$195.74", change: "-1.64% (Fri close)", notable: true,  insight: "In correction; -10% on month and YTD only +12% vs SOXX +85%." },
      { ticker: "TSLA",  name: "Tesla",         price: "$375.12", change: "-0.11% (Fri close)", notable: false, insight: "Range-bound ahead of next delivery print." },
      { ticker: "AAPL",  name: "Apple",         price: "$298.01", change: "Fri close",          notable: false, insight: "Defensive mega-cap holding amid AI capex skepticism." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",       change: "Fri close",          notable: false, insight: "Azure AI workloads remain the cleanest enterprise AI revenue print." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "Fri close",          notable: false, insight: "Search-vs-AI overhang persists; cloud margins the offset." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "Fri close",          notable: false, insight: "AWS reacceleration narrative carrying valuation premium." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",       change: "Fri close",          notable: false, insight: "Popped on AI ad-alliance reveal; still -45% from prior peak." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "Fri close",          notable: false, insight: "MI accelerator share gains the key bullish lever." },
      { ticker: "PLTR",  name: "Palantir",      price: "$112.15", change: "+5.55% (Fri close)", notable: true,  insight: "Biggest single-day move; commercial AIP traction back in focus." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "$701.09", change: "+3.31% (Fri close)", notable: true,  insight: "Cybersecurity bid resumes; Falcon platform consolidation thesis." },
      { ticker: "COIN",  name: "Coinbase",      price: "$149.06", change: "+4.59% (Fri close)", notable: true,  insight: "Rallying despite BTC weakness — fee mix and base-app optionality." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$82.80",  change: "Fri close",          notable: false, insight: "Leverage stress as BTC tests $60k; convert overhang lingers." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "Fri close",          notable: false, insight: "AI ad-engine compounder; ad-tech multiple expansion play." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$30.63",  change: "Fri close",          notable: false, insight: "Rangebound post-restatement; liquid-cooled server cycle pending." }
    ],
    trending: [
      { ticker: "PLTR", change: "+5.55%" },
      { ticker: "COIN", change: "+4.59%" },
      { ticker: "CRWD", change: "+3.31%" },
      { ticker: "META", change: "-2.65%" },
      { ticker: "NVDA", change: "-1.64%" }
    ],
    verdict: "AI leadership cracked: NVDA in correction while semis ex-NVDA (SOXX +85% YTD) carry the trade — rotation, not collapse. Software (PLTR, CRWD) and crypto-equity beta (COIN) leading; Mag-7 mixed with META the laggard. Own SOXX, software AI monetizers, and quality cyclicals; avoid leverage-heavy crypto-equity proxies like MSTR."
  },

  malaysia: {
    klci:   { value: "1,667.74", change: "+0.24%", context: "Closed higher Friday on bargain-hunting in banks. Monday opens with softer dollar and stable yields as tailwinds." },
    usdmyr: { value: "4.0878",   change: "-0.66%", signal: "Ringgit firms; sub-4.10 is bullish KLSE bias." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM10.80", change: "+0.70% (Fri close)", insight: "Regional bank leader; dividend yield supports defensive rotation." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "RM7.41",  change: "+0.30% (Fri close)", insight: "ASEAN footprint adds growth optionality versus pure domestic peers." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",       change: "Fri close",          insight: "Defensive franchise with the cleanest asset quality in the sector." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",       change: "Fri close",          insight: "Mid-tier bank with capital return optionality on excess CET1." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",       change: "Fri close",          insight: "Data-center power capex story remains the structural re-rating driver." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "RM2.20",  change: "-2.20% (Fri close)", insight: "Tracking NVDA correction; OSAT cycle still tied to AI silicon demand." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",       change: "Fri close",          insight: "CelcomDigi merger synergy realization the swing factor." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",       change: "Fri close",          insight: "Defensive ASEAN healthcare; medical tourism a quiet tailwind." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",       change: "Fri close",          insight: "E-government concessions provide annuity-like cashflows." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",       change: "Fri close",          insight: "5G wholesale economics improving; spectrum clarity overdue." }
    ],
    ipos: [
      { name: "No new mainboard IPO confirmed for the week", sector: "—", price: "—", listingDate: "—", status: "Pending", note: "Bursa IPO pipeline thin into July. Watch ACE Market filings for retail-driven momentum candidates." }
    ],
    verdict: "Ringgit firming below 4.10 is the single biggest tailwind for the index next week. Best risk-reward: Maybank for yield-plus-stability if global rates stay anchored. Monday Bursa likely opens green tracking soft DXY and lower UST yields."
  },

  news: [
    { headline: "Bitcoin recovers above $60k despite record monthly ETF outflows",      source: "FX Leaders",   time: "4h ago",  sentiment: "WATCH",   meaning: "Spot bid surviving despite institutional unwind; key inflection." },
    { headline: "Michael Saylor's Strategy faces no easy way out as BTC drops",          source: "Yahoo Finance", time: "8h ago",  sentiment: "BEARISH", meaning: "Leverage spiral risk if BTC loses $58k support next." },
    { headline: "Bursa closes lower on US inflation and global rate outlook caution",     source: "Malay Mail",    time: "1d ago",  sentiment: "NEUTRAL", meaning: "Caution priced; soft DXY now flips Monday bias positive." },
    { headline: "Gold reclaims $4,000 on weaker dollar and lower Treasury yields",        source: "TradingEconomics", time: "1d ago", sentiment: "BULLISH", meaning: "Macro setup constructive for precious-metals exposure now." },
    { headline: "Oil retreats to pre-conflict levels on US-Iran de-escalation talks",     source: "Investing.com", time: "1d ago",  sentiment: "BEARISH", meaning: "Energy bull thesis fading; cyclicals rotate over energy." },
    { headline: "Netflix unveils AI-powered advertising alliance, shares jump 5%",        source: "TradingView",   time: "1d ago",  sentiment: "BULLISH", meaning: "Ad-tier monetization re-rates streaming margin outlook." },
    { headline: "10Y Treasury yield falls to seven-week low near 4.37%",                  source: "FRED",          time: "1d ago",  sentiment: "BULLISH", meaning: "Duration relief supports growth equities and EM FX." },
    { headline: "Inari tracks NVDA correction, semis under near-term pressure",            source: "Bursa Malaysia", time: "1d ago", sentiment: "BEARISH", meaning: "OSAT names re-rate down with AI silicon order pause." }
  ],

  goldSummary: {
    "Price":  { value: "$4,007", change: "+0.45%", note: "Above key $4k psychological level." },
    "Open":   { value: "$4,090", change: "", note: "Gapped lower from Thursday close." },
    "High":   { value: "$4,096", change: "", note: "Day high" },
    "Low":    { value: "$3,983", change: "", note: "Day low" },
    "52W High": { value: "N/A",  change: "", note: "" },
    "52W Low":  { value: "N/A",  change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,187.22" },
      { label: "R2",    value: "$4,141.64" },
      { label: "R1",    value: "$4,074.48" },
      { label: "Pivot", value: "$4,028.90" },
      { label: "S1",    value: "$3,961.74" },
      { label: "S2",    value: "$3,916.16" },
      { label: "S3",    value: "$3,849.00" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,141.64" },
      { label: "R2",    value: "$4,098.57" },
      { label: "R1",    value: "$4,071.97" },
      { label: "Pivot", value: "$4,028.90" },
      { label: "S1",    value: "$3,985.83" },
      { label: "S2",    value: "$3,959.23" },
      { label: "S3",    value: "$3,916.16" }
    ],
    camarilla: [
      { label: "R4", value: "$4,069.32" },
      { label: "R3", value: "$4,038.31" },
      { label: "R2", value: "$4,027.98" },
      { label: "R1", value: "$4,017.65" },
      { label: "S1", value: "$3,996.97" },
      { label: "S2", value: "$3,986.64" },
      { label: "S3", value: "$3,976.31" },
      { label: "S4", value: "$3,945.30" }
    ],
    note: "Gold at $4,007 sits below classic pivot $4,028.90 — short-term bearish bias unless reclaimed."
  }
};
