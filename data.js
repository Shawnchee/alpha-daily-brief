window.CRUCIX_DATA = {
  generated: "Mon, 18 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off tone as rising yields and Mideast tensions pressure tech and crypto.",

  macro: {
    dxy:      { value: "98.90",   change: "-0.32%", signal: "Dollar softens despite haven bid elsewhere." },
    gold:     { value: "$4,570.70", change: "+0.19%", signal: "Record-zone bid on geopolitics and inflation fears." },
    oil:      { value: "$102.51",  change: "+1.47%", signal: "Strait of Hormuz disruption keeps crude bid." },
    silver:   { value: "$78.11",   change: "+0.72%", signal: "Industrial metals tracking gold's safe-haven flow." },
    yield10y: { value: "4.59%",    change: "+10bps", signal: "One-year high; war-driven inflation worries." },
    vix:      { value: "17.82",    change: "-3.31%", signal: "Complacency despite tape weakness underneath." },
    usdmyr:   { value: "4.02",     change: "-0.10%", signal: "Ringgit firm as DXY eases lower." },
    sp500:    { value: "7,403.05", change: "-0.07%", signal: "Index flat; mega-cap tech leading lower." },
    verdict: "Stagflation cocktail: rising oil, sticky yields, soft dollar, bid gold. Crypto and high-multiple tech remain the pressure point while defensives outperform. KLSE banks and consumer names should hold up better than Bursa tech."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady as alts underperform." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$76,468", marketCap: "$1.51T", change1h: "N/A", change24h: "-1.04%", change7d: "N/A", insight: "BTC broke $77K support as exchange reserves grow by 20K and bond yields spike. Resistance now caps at $78,400 — bulls need to reclaim or risk $72K test." },
      { name: "Ethereum", symbol: "ETH", price: "$2,282.84", marketCap: "$275B", change1h: "N/A", change24h: "-2.50%", change7d: "N/A", insight: "ETH lags BTC as risk-off sentiment hits altcoins harder. Holding above $2,200 is critical or trend flips bearish." },
      { name: "Solana",   symbol: "SOL", price: "$84.68", marketCap: "$40B",   change1h: "N/A", change24h: "-3.00%", change7d: "N/A", insight: "SOL down 3% as high-beta alts get sold first. Watch $80 — a break opens the door to $70 retest." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.107",       change24h: "-2.10%", note: "Below 100-EMA; momentum fading." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000040",   change24h: "-1.80%", note: "Hovering at 100-EMA support zone." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000063",   change24h: "-1.50%", note: "Consolidating; social interest waning." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",     note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",     note: "Speculative SOL memecoin." }
    ],
    verdict: "Clear risk-off: BTC under $77K, alts bleeding harder, no dominance flip. Key BTC defense at $76K — lose it and $72K opens. Altseason signal absent; stay defensive until yields cool."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,403.05",  change: "-0.07%" },
      { name: "Nasdaq",       value: "26,090.73", change: "-0.51%" },
      { name: "Dow",          value: "49,686.12", change: "+0.32%" },
      { name: "VIX",          value: "17.82",     change: "-3.31%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—",       change: "—",       insight: "Tracks SPX; flat tape with mega-cap tech drag." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$711.23", change: "-0.51%",  insight: "Tech-heavy ETF pressured by rate-sensitive growth names." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "—",       insight: "Mirrors SPX softness; rotation into defensives." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",       insight: "Broad market echoes large-cap weakness today." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",       insight: "High-duration growth basket vulnerable to yield spike." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "—",       insight: "Chip ETF weighed by Micron decline and AI cooling." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$42.48",  change: "-1.04%",  insight: "Tracks spot BTC; outflows resume as crypto sells off." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",       insight: "Mega-cap tech under pressure from rising real yields." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$427.17", change: "+0.19%",  insight: "Gold ETF at record territory; haven demand intact." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$608.75", change: "-0.80%", notable: false, insight: "Ad spend resilient but multiple compresses with yields up." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$227.75", change: "-1.20%", notable: true,  insight: "AI capex narrative tested; earnings on deck remain catalyst." },
      { ticker: "TSLA",  name: "Tesla",         price: "$417.25", change: "-1.50%", notable: false, insight: "Beta name suffering with broad risk-off positioning." },
      { ticker: "AAPL",  name: "Apple",         price: "$298.75", change: "+0.30%", notable: true,  insight: "Up 14% in a month; defensive mega-cap bid continues." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",       change: "—",      notable: false, insight: "Azure AI demand intact but valuation under yield pressure." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "—",      notable: false, insight: "Search moat solid; AI overhang and antitrust linger." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "—",      notable: false, insight: "AWS growth and retail margins anchor the story." },
      { ticker: "NFLX",  name: "Netflix",       price: "$87.02",  change: "-2.50%", notable: false, insight: "Ad-tier hits 250M monthly viewers; analysts bullish despite dip." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "—",      notable: false, insight: "Chip cycle softening alongside Micron weakness." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "—",      notable: false, insight: "Gov AI tailwind intact but high multiple at risk." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",      notable: false, insight: "Cybersecurity demand resilient through market volatility." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "—",      notable: false, insight: "Crypto proxy hit hard as BTC slides under $77K." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "—",      notable: false, insight: "BTC treasury play; tracks coin with leverage." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",      notable: false, insight: "Ad-tech momentum slowing as digital budgets normalize." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$30.90",  change: "-2.00%", notable: true,  insight: "Down 12% on week; AI server demand questions mount." }
    ],
    trending: [
      { ticker: "SMCI", change: "-12.00%" },
      { ticker: "NFLX", change: "-2.50%" },
      { ticker: "TSLA", change: "-1.50%" },
      { ticker: "NVDA", change: "-1.20%" },
      { ticker: "AAPL", change: "+0.30%" }
    ],
    verdict: "AI trade cooling as yields rise — selective, not broken. Rotate into defensives, gold, and energy; trim high-multiple growth and chip beta. Own AAPL and gold names; avoid SMCI, ARKK, and crypto-linked equities until BTC stabilizes."
  },

  malaysia: {
    klci:   { value: "—", change: "—", context: "Bursa opens Monday into a weak overnight tape. Watch banks for relative strength and Inari for NVDA-linked semi pressure." },
    usdmyr: { value: "4.02", change: "-0.10%", signal: "Ringgit firmer as DXY weakens this morning." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "—", change: "—", insight: "Defensive bank anchored by stable OPR and dividend yield." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "—", change: "—", insight: "Regional ASEAN exposure offers diversified loan growth." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—", change: "—", insight: "Highest-quality balance sheet on Bursa; defensive core." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—", change: "—", insight: "Mid-tier bank with attractive dividend and capital ratios." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—", change: "—", insight: "Utility benefits from data-center demand and capex cycle." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—", change: "—", insight: "Semi assembly play; tracks NVDA and chip cycle softness." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—", change: "—", insight: "Telco restructuring play with CelcomDigi synergies." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—", change: "—", insight: "Healthcare defensive; ASEAN medical-tourism tailwind." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—", change: "—", insight: "Digital-government services with recurring revenue base." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—", change: "—", insight: "5G monetization and dividend stability the key thesis." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No major new IPO highlights flagged in this morning's scan." }
    ],
    verdict: "Ringgit firm at 4.02 offers tailwind for importers and consumer names. Banks (MAY, PBBANK) look best on relative-strength basis. Bursa likely opens softer following Wall Street weakness; fade tech weakness, accumulate banks."
  },

  news: [
    { headline: "Bitcoin plunges under $77K, erasing $661M",                          source: "Yahoo Finance",  time: "8h ago",  sentiment: "BEARISH",  meaning: "Crypto risk-off accelerates; downside leverage flush continues." },
    { headline: "10-year Treasury yield hits fresh one-year high near 4.6%",          source: "Reuters",        time: "12h ago", sentiment: "BEARISH",  meaning: "Higher yields compress growth multiples and crypto valuations." },
    { headline: "Strait of Hormuz disruption keeps crude oil bid above $100",         source: "Bloomberg",      time: "10h ago", sentiment: "WATCH",    meaning: "Energy stocks bid; broader inflation print risk rises." },
    { headline: "Nasdaq posts back-to-back losses as Micron drags semis",             source: "CNBC",           time: "14h ago", sentiment: "BEARISH",  meaning: "Chip cycle softness spreading; AI capex narrative wobbles." },
    { headline: "Gold futures grind toward $4,600 on haven demand",                    source: "FXStreet",       time: "6h ago",  sentiment: "BULLISH",  meaning: "Safe-haven flow intact; supports miners and gold ETFs." },
    { headline: "Netflix ad tier reaches 250M monthly viewers; analysts bullish",      source: "TipRanks",       time: "18h ago", sentiment: "BULLISH",  meaning: "Ad business scaling; supports streaming margin story." },
    { headline: "Super Micro shares slide 12% on the week",                            source: "TS2 Tech",       time: "20h ago", sentiment: "BEARISH",  meaning: "AI server demand questions weigh on semi-adjacent names." },
    { headline: "Ringgit firms as dollar index slips amid rate uncertainty",           source: "Bursa News",     time: "5h ago",  sentiment: "BULLISH",  meaning: "Stronger MYR helps importers and consumer-led Bursa names." }
  ],

  goldSummary: {
    "Price":  { value: "$4,570.70", change: "+0.19%", note: "Haven bid intact on Mideast and yield mix." },
    "Open":   { value: "$4,562.00", change: "", note: "Yesterday open reference" },
    "High":   { value: "$4,580.00", change: "", note: "Day high" },
    "Low":    { value: "$4,545.00", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,614.67" },
      { label: "R2",    value: "$4,597.33" },
      { label: "R1",    value: "$4,579.67" },
      { label: "Pivot", value: "$4,562.33" },
      { label: "S1",    value: "$4,544.67" },
      { label: "S2",    value: "$4,527.33" },
      { label: "S3",    value: "$4,509.67" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,597.33" },
      { label: "R2",    value: "$4,583.96" },
      { label: "R1",    value: "$4,575.70" },
      { label: "Pivot", value: "$4,562.33" },
      { label: "S1",    value: "$4,548.96" },
      { label: "S2",    value: "$4,540.70" },
      { label: "S3",    value: "$4,527.33" }
    ],
    camarilla: [
      { label: "R4", value: "$4,581.25" },
      { label: "R3", value: "$4,571.63" },
      { label: "R2", value: "$4,568.42" },
      { label: "R1", value: "$4,565.21" },
      { label: "S1", value: "$4,558.79" },
      { label: "S2", value: "$4,555.58" },
      { label: "S3", value: "$4,552.37" },
      { label: "S4", value: "$4,542.75" }
    ],
    note: "Gold at $4,570 trades above classic pivot $4,562 — bullish bias intact while above."
  }
};
