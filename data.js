window.CRUCIX_DATA = {
  generated: "Thu, 28 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off bid as crypto liquidations and firm yields pressure speculative assets.",

  macro: {
    dxy:      { value: "99.21",  change: "+0.04%", signal: "Dollar firm, weighs on commodities globally." },
    gold:     { value: "$4,536.20", change: "-0.44%", signal: "Pullback after record run; uptrend intact." },
    oil:      { value: "$92.98", change: "-3.75%", signal: "Iran tension pause cools crude premium." },
    silver:   { value: "$75.78", change: "-0.56%", signal: "Tracks gold lower on dollar strength." },
    yield10y: { value: "4.50%", change: "+2bps", signal: "Real rates pressure risk and metals." },
    vix:      { value: "16.29", change: "-4.23%", signal: "Complacency returns despite undercurrent risks." },
    usdmyr:   { value: "4.05", change: "+0.05%", signal: "Ringgit stable; BNM defending soft band." },
    sp500:    { value: "7,520.36", change: "+0.02%", signal: "Record high holds on tech leadership." },
    verdict: "Firm DXY plus 4.50% 10Y yield keeps headwinds on metals and high-beta crypto. VIX at 16 signals complacency, supporting megacap tech and the AI trade. KLSE neutral; ringgit steady supports foreign inflows into Bursa banks."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady, alts lagging today." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$73,500", marketCap: "$1.45T",  change1h: "N/A", change24h: "-1.50%", change7d: "N/A", insight: "BTC slipped below $74k as $1B in liquidations hit. ETF outflows and US-Iran tension fuel risk-off pressure." },
      { name: "Ethereum", symbol: "ETH", price: "$2,060.24", marketCap: "$248B",  change1h: "N/A", change24h: "-1.80%", change7d: "N/A", insight: "ETH testing $2,000 support amid risk-off. Layer-2 activity remains the bullish secular story to track." },
      { name: "Solana",   symbol: "SOL", price: "$86.03",  marketCap: "$41B",   change1h: "N/A", change24h: "+1.30%", change7d: "N/A", insight: "SOL bucks the trend with a 1.3% gain. DeFi and memecoin ecosystem activity keeps SOL resilient." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",       change24h: "-2.10%", note: "Neutral-bearish, follows BTC moves." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000812",   change24h: "-1.40%", note: "Above 50/100 EMA cluster." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000629",   change24h: "-1.80%", note: "Consolidating between EMA bands." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",           change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",           change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-off as $1B liquidations and ETF outflows hit BTC below $74k. Key level: $72,000 support must hold to avoid deeper flush. Altseason muted; SOL the only major in green, no broad rotation yet."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,520.36",  change: "+0.02%" },
      { name: "Nasdaq",       value: "26,674.73", change: "+0.07%" },
      { name: "Dow",          value: "50,644.28", change: "+0.36%" },
      { name: "VIX",          value: "16.29",     change: "-4.23%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—",       change: "—",      insight: "Tracks S&P; record-high regime favors steady DCA." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$711.23", change: "+0.07%", insight: "Tech leadership intact; AI mega-caps anchor the index." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "—",      insight: "Mirrors SPX at record; low-vol regime supports holds." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Broad exposure; small-caps lag mega-cap leadership." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",      insight: "High-beta basket struggles with firm 10Y yields." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$574.73", change: "+1.91%", insight: "Semis lead; NVDA and AI capex cycle drive flows." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$40.83",  change: "-1.50%", insight: "Tracks spot BTC; outflows weigh near-term." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Sector heavy in NVDA/MSFT/AAPL; record-high regime." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$423.94", change: "-0.44%", insight: "Pullback from highs; structural bull case intact." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$635.59", change: "+0.05%", notable: false, insight: "Ads and AI capex story intact at record valuation." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$214.29", change: "+0.80%", notable: true,  insight: "AI demand and Blackwell cycle remain the dominant tape driver." },
      { ticker: "TSLA",  name: "Tesla",         price: "$442.19", change: "+0.40%", notable: false, insight: "Robotaxi narrative supports premium despite slowing EV unit growth." },
      { ticker: "AAPL",  name: "Apple",         price: "$312.50", change: "+0.50%", notable: false, insight: "Services moat and AI iPhone cycle drive megacap leadership." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",       change: "—",      notable: false, insight: "Azure AI growth and Copilot monetization remain core thesis." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "—",      notable: false, insight: "Gemini and Cloud momentum offset search disruption fears." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "—",      notable: false, insight: "AWS margins and ads growth anchor the megacap story." },
      { ticker: "NFLX",  name: "Netflix",       price: "$87.68",  change: "-1.04%", notable: false, insight: "Ad-tier scaling but stock testing key support level." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "—",      notable: false, insight: "MI300 ramp and data center share gains drive thesis." },
      { ticker: "PLTR",  name: "Palantir",      price: "$137.57", change: "+1.20%", notable: true,  insight: "AIP commercial expansion keeps enterprise AI darling bid." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",      notable: false, insight: "Cybersecurity tailwinds and Falcon platform consolidation continue." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "—",      notable: false, insight: "Crypto volume sensitive; BTC weakness pressures sentiment." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "—",      notable: false, insight: "Levered BTC proxy; tracks Bitcoin spot price closely." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",      notable: false, insight: "AXON ad-tech engine drives outsized growth versus peers." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$42.74",  change: "+2.50%", notable: false, insight: "AI server demand returns; sentiment turning positive again." }
    ],
    trending: [
      { ticker: "SMCI", change: "+2.50%" },
      { ticker: "SOXX", change: "+1.91%" },
      { ticker: "PLTR", change: "+1.20%" },
      { ticker: "NFLX", change: "-1.04%" },
      { ticker: "NVDA", change: "+0.80%" }
    ],
    verdict: "AI trade leads with NVDA, SOXX, SMCI bid on semis demand. Rotation favors megacap quality over high-beta innovation as 10Y holds 4.50%. Own NVDA/PLTR/semis; avoid unprofitable growth and crypto-proxy names short-term."
  },

  malaysia: {
    klci:   { value: "1,610", change: "+0.10%", context: "Bursa held into Wednesday close on bank strength. Thursday session sets up cautiously with US risk-off overnight." },
    usdmyr: { value: "4.05", change: "+0.05%", signal: "Ringgit stable; BNM band holds at 4.05." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "10.92", change: "-0.18%", insight: "OPR pause and stable NIMs keep regional bank leader well-bid." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "7.70",  change: "-0.26%", insight: "ASEAN exposure and Indonesia growth anchor the regional thesis." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",     change: "—",      insight: "Defensive retail bank; mortgage book stable amid OPR pause." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",     change: "—",      insight: "Cheap valuation versus peers; capital return story intact." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",     change: "—",      insight: "Data center power demand and AI grid spend remain catalysts." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "2.35",  change: "+0.40%", insight: "Tracks semi cycle and NVDA strength; RF and AI packaging exposure." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",     change: "—",      insight: "Telco consolidation and CelcomDigi synergies still playing out." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",     change: "—",      insight: "Defensive med-tourism play; ASEAN volumes structurally rising." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",     change: "—",      insight: "Digital govt services anchor; concession renewals key catalyst." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",     change: "—",      insight: "5G rollout and enterprise solutions drive earnings stability." }
    ],
    ipos: [
      { name: "Watch list", sector: "Various", price: "—", listingDate: "—", status: "Upcoming", note: "No major IPO confirmed for this week. Bursa pipeline focused on tech and consumer names." }
    ],
    verdict: "Ringgit holds 4.05 with BNM stable, supporting foreign flows. Inari best AI-linked exposure tracking semi cycle. Bursa likely cautious today on US risk-off overnight; banks should defend the index."
  },

  news: [
    { headline: "Bitcoin sheds 5.5% in five days as $1B liquidations hit", source: "Bitcoin Magazine", time: "2h ago", sentiment: "BEARISH", meaning: "Leverage flush pressures BTC; key support at 72k now." },
    { headline: "S&P 500 and Nasdaq close at new records on tech rally", source: "CNBC", time: "12h ago", sentiment: "BULLISH", meaning: "Megacap tech and AI leadership extend record-high regime." },
    { headline: "10-Year Treasury yield rises to 4.50%", source: "Trading Economics", time: "4h ago", sentiment: "BEARISH", meaning: "Higher real rates pressure metals and high-beta growth." },
    { headline: "Crude oil drops 3.75% as US-Iran tensions pause", source: "Investing.com", time: "3h ago", sentiment: "NEUTRAL", meaning: "Geopolitical premium fades; eases inflation pressure modestly." },
    { headline: "Gold pulls back from record, futures at $4,536", source: "MacroMicro", time: "5h ago", sentiment: "WATCH", meaning: "Healthy consolidation; structural bull thesis remains intact." },
    { headline: "Nvidia at $214 as AI capex cycle continues", source: "Yahoo Finance", time: "6h ago", sentiment: "BULLISH", meaning: "AI infrastructure spend supports semis and megacap leaders." },
    { headline: "Maybank holds 10.92 as Bursa stays defensive", source: "I3investor", time: "10h ago", sentiment: "NEUTRAL", meaning: "Banks anchor KLCI ahead of cautious Thursday session." },
    { headline: "US-Iran pause cools risk premium across markets", source: "Coingape", time: "8h ago", sentiment: "BULLISH", meaning: "Geopolitical relief supports equities, weighs on safe-havens." }
  ],

  goldSummary: {
    "Price":  { value: "$4,536.20", change: "-0.44%", note: "Pullback from recent all-time high." },
    "Open":   { value: "$4,556.00", change: "", note: "" },
    "High":   { value: "$4,560.00", change: "", note: "Day high" },
    "Low":    { value: "$4,520.00", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,597.47" },
      { label: "R2",    value: "$4,578.73" },
      { label: "R1",    value: "$4,557.47" },
      { label: "Pivot", value: "$4,538.73" },
      { label: "S1",    value: "$4,517.47" },
      { label: "S2",    value: "$4,498.73" },
      { label: "S3",    value: "$4,477.47" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,578.73" },
      { label: "R2",    value: "$4,563.45" },
      { label: "R1",    value: "$4,554.01" },
      { label: "Pivot", value: "$4,538.73" },
      { label: "S1",    value: "$4,523.45" },
      { label: "S2",    value: "$4,514.01" },
      { label: "S3",    value: "$4,498.73" }
    ],
    camarilla: [
      { label: "R4", value: "$4,558.20" },
      { label: "R3", value: "$4,547.20" },
      { label: "R2", value: "$4,543.53" },
      { label: "R1", value: "$4,539.87" },
      { label: "S1", value: "$4,532.53" },
      { label: "S2", value: "$4,528.87" },
      { label: "S3", value: "$4,525.20" },
      { label: "S4", value: "$4,514.20" }
    ],
    note: "Gold below $4,538.73 classic pivot tilts intraday bias bearish; reclaim flips to bullish."
  }
};
