window.CRUCIX_DATA = {
  generated: "Mon, 08 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off shockwave: chip megacaps cracked Friday, gold surges past $4,300, Ringgit slides above 4.07.",

  macro: {
    dxy:      { value: "99.79",   change: "-0.26%", signal: "Dollar slipping, supports gold and EM FX." },
    gold:     { value: "$4,331.15", change: "-0.78%", signal: "Pulls back from record near $4,400." },
    oil:      { value: "$94.61",  change: "+4.50%", signal: "WTI surges on US-Iran tension premium." },
    silver:   { value: "$67.25",  change: "-2.69%", signal: "Profit-taking after metals rally extension." },
    yield10y: { value: "4.578%",  change: "+3.7bps", signal: "Strong jobs revives Fed hike fears." },
    vix:      { value: "18.92",   change: "-12.04%", signal: "Vol unwinds after Thursday's chip crash." },
    usdmyr:   { value: "4.0735",  change: "+1.09%", signal: "Ringgit pressured by oil and yields." },
    sp500:    { value: "7,405.73", change: "+0.30%", signal: "Index recovers as chips rebound late." },
    verdict: "Yields jumping with oil and a soft DXY is a stagflation tell — gold at $4,300 is the confirmation. VIX collapsed but megacap chip wreckage warns dispersion is wide, not low. Crypto stays heavy, US tech selectively bid, Ringgit at 4.07 caps KLSE upside despite cheap valuations."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady as alts underperform." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$63,406", marketCap: "$1.25T", change1h: "N/A", change24h: "+1.55%", change7d: "N/A", insight: "BTC clawed back from a $61K liquidation flush after 13 straight days of ETF outflows. Holding above $63K keeps the weekly structure intact, but $61K is the line in the sand." },
      { name: "Ethereum", symbol: "ETH", price: "$1,581.66", marketCap: "$190B", change1h: "N/A", change24h: "-1.20%", change7d: "N/A", insight: "ETH lost $2K and is bleeding relative to BTC as risk appetite dries up. Needs a reclaim of $1,700 to invalidate the downtrend." },
      { name: "Solana",   symbol: "SOL", price: "$65.86", marketCap: "$31B", change1h: "N/A", change24h: "+2.00%", change7d: "N/A", insight: "SOL down 19% on the week despite today's bounce, the cleanest tell that alts are still in distribution. Memecoin activity collapsing alongside it." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.0932", change24h: "-2.25%", note: "Heavy; needs broader risk-on." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000349", change24h: "-0.59%", note: "Sideways grind, low conviction." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000468", change24h: "-1.10%", note: "Lagging; thin retail bid." },
      { name: "Bonk",      symbol: "BONK", price: "N/A", change24h: "N/A", note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A", change24h: "N/A", note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-off remains in control: $4.4B of ETF outflows in June and US-Iran headlines are crushing speculation. BTC must defend $61K or the next leg targets $58K. No altseason until BTC dominance turns down and ETF flows flip positive."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,405.73",  change: "+0.30%" },
      { name: "Nasdaq",       value: "25,929.66", change: "+0.86%" },
      { name: "Dow",          value: "50,786.01", change: "-0.16%" },
      { name: "VIX",          value: "18.92",     change: "-12.04%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$679.68", change: "+0.25%", insight: "Cheap S&P beta still the default core." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—",       change: "—",      insight: "Mega-cap tech bid into Friday but breadth narrow." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$739.22", change: "+0.23%", insight: "Tracks SPX; use for options liquidity." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Broader than VOO; small-caps still lag." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",      insight: "High-beta growth basket, vulnerable to yield spikes." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$571.45", change: "+5.87%", insight: "Sharp rebound after Thursday's chip washout." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$35.22",  change: "+1.5%",  insight: "ETF flows are leading BTC price, watch daily prints." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Megacap-heavy; tracks NVDA/MSFT closely." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$404.78", change: "-0.78%", insight: "Cleanest proxy to ride $4,300 gold breakout." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$593.00", change: "-5.51%", notable: true,  insight: "Megacap risk-off victim; ad outlook still intact." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$205.10", change: "-6.20%", notable: true,  insight: "Chip crash leader; $200 is critical defend level." },
      { ticker: "TSLA",  name: "Tesla",         price: "$391.00", change: "-6.56%", notable: true,  insight: "Worst megacap mover; robotaxi narrative under pressure." },
      { ticker: "AAPL",  name: "Apple",         price: "$307.34", change: "-1.25%", notable: false, insight: "Defensive megacap; outperforming the chip basket." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",       change: "—",      notable: false, insight: "AI capex story intact; relative safety in tech." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "—",      notable: false, insight: "Cheapest mega-cap on PE; search moat holding." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "—",      notable: false, insight: "AWS growth + retail margin expansion still bullish." },
      { ticker: "NFLX",  name: "Netflix",       price: "$82.18",  change: "+0.50%", notable: false, insight: "Bucked Friday's pullback; founder Hastings exit headline." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "—",      notable: false, insight: "Trades with SOXX; key AI laggard play vs NVDA." },
      { ticker: "PLTR",  name: "Palantir",      price: "$137.11", change: "-3.40%", notable: false, insight: "Government AI darling, vulnerable on valuation pullbacks." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",      notable: false, insight: "Cybersecurity bid as geopolitics escalate." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "—",      notable: false, insight: "Tracks BTC; pressured by ETF outflow narrative." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$127.30", change: "-4.10%", notable: false, insight: "Leveraged BTC proxy; $61K floor decides direction." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",      notable: false, insight: "Adtech momentum stock; high beta in risk-off." },
      { ticker: "SMCI",  name: "Super Micro",   price: "—",       change: "—",      notable: false, insight: "AI server beneficiary; trades with NVDA/SOXX." }
    ],
    trending: [
      { ticker: "TSLA",  change: "-6.56%" },
      { ticker: "NVDA",  change: "-6.20%" },
      { ticker: "SOXX",  change: "+5.87%" },
      { ticker: "META",  change: "-5.51%" },
      { ticker: "MSTR",  change: "-4.10%" }
    ],
    verdict: "AI trade is bifurcating: chip equipment and software-defense names (SOXX rebound) are bid, but momentum megacaps (NVDA/TSLA/META) are correcting hard. Rotate toward defensive megacap (AAPL/GOOGL) and gold miners while VIX is suppressed. Avoid leveraged crypto proxies (MSTR/COIN) until BTC reclaims $65K with conviction."
  },

  malaysia: {
    klci:   { value: "1,679.52", change: "+0.20%", context: "KLCI closed Friday at 1,679, capped by Ringgit weakness. Monday opens vulnerable to oil-driven inflation risk." },
    usdmyr: { value: "4.0735",   change: "+1.09%", signal: "Ringgit weakens; oil and US yields pressure." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM10.70", change: "+1.89% (Fri close)", insight: "Largest bank; benefits from steady OPR and dividend support." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "RM7.39",  change: "0.00% (Fri close)",  insight: "Regional banking franchise; ASEAN growth tailwind intact." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",     price: "—",       change: "Fri close",          insight: "Defensive bank with consistent dividend yield." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",        price: "—",       change: "Fri close",          insight: "Mid-cap bank; trades at discount to peers." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",          price: "—",       change: "Fri close",          insight: "Utility benefiting from data center demand growth." },
      { ticker: "INARI",  name: "Inari (0138.KL)",           price: "RM2.32",  change: "+0.85% (Fri close)", insight: "Semi cycle tied to NVDA; chip washout is a headwind." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",          price: "—",       change: "Fri close",          insight: "Telco consolidation play, regional dividend story." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)",  price: "—",       change: "Fri close",          insight: "Defensive healthcare exposure across ASEAN." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",            price: "—",       change: "Fri close",          insight: "Digital government services; high ROE compounder." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",           price: "—",       change: "Fri close",          insight: "5G monetization play; dividend yield support." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No major IPO highlight found in search. Bursa pipeline remains subdued." }
    ],
    verdict: "Ringgit at 4.07 is the dominant headwind for KLCI; exporters like Inari prefer this, banks neutral. Maybank looks like the cleanest hold here on dividend support and OPR stability. Monday Bursa likely opens cautious — watch oil-linked names (Petronas Dagangan) and avoid rate-sensitive REITs."
  },

  news: [
    { headline: "Bitcoin slumps to $61K as ETF outflows hit 13th straight day", source: "CoinDesk", time: "2d ago", sentiment: "BEARISH", meaning: "Spot ETF demand is leading BTC lower, not the other way." },
    { headline: "Nasdaq suffers worst day since April 2025 on chip rout", source: "CNBC", time: "4d ago", sentiment: "BEARISH", meaning: "AI megacap unwind raises broader market correction risk." },
    { headline: "10-year Treasury yield jumps to 4.58% on strong jobs data", source: "TradingEconomics", time: "1d ago", sentiment: "BEARISH", meaning: "Higher rates pressure tech multiples and EM currencies." },
    { headline: "Brent crude tops $97 on US-Iran tension escalation", source: "Reuters", time: "1d ago", sentiment: "BEARISH", meaning: "Oil spike adds inflation pressure and stagflation risk." },
    { headline: "Gold holds near record above $4,300/oz", source: "FXStreet", time: "1d ago", sentiment: "BULLISH", meaning: "Safe-haven demand intact despite Friday's profit-taking." },
    { headline: "Ringgit slides to 4.07 vs USD on yield and oil pressure", source: "TradingEconomics", time: "1d ago", sentiment: "BEARISH", meaning: "MYR weakness caps KLCI upside, hurts importer margins." },
    { headline: "Netflix bucks pullback; founder Reed Hastings exits board", source: "Yahoo Finance", time: "3d ago", sentiment: "NEUTRAL", meaning: "Leadership transition, modest defensive bid in megacap." },
    { headline: "SOXX rebounds 5.9% on Friday after Thursday's chip crash", source: "Yahoo Finance", time: "3d ago", sentiment: "BULLISH", meaning: "Semis V-shape suggests dip buyers active near key support." }
  ],

  goldSummary: {
    "Price":  { value: "$4,331.15", change: "-0.78%", note: "Holding above $4,300 keeps trend bullish." },
    "Open":   { value: "$4,329.33", change: "", note: "" },
    "High":   { value: "$4,353.52", change: "", note: "Day high" },
    "Low":    { value: "$4,268.74", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,451.64" },
      { label: "R2",    value: "$4,402.58" },
      { label: "R1",    value: "$4,366.86" },
      { label: "Pivot", value: "$4,317.80" },
      { label: "S1",    value: "$4,282.08" },
      { label: "S2",    value: "$4,233.02" },
      { label: "S3",    value: "$4,197.30" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,402.58" },
      { label: "R2",    value: "$4,370.20" },
      { label: "R1",    value: "$4,350.19" },
      { label: "Pivot", value: "$4,317.80" },
      { label: "S1",    value: "$4,285.41" },
      { label: "S2",    value: "$4,265.40" },
      { label: "S3",    value: "$4,233.02" }
    ],
    camarilla: [
      { label: "R4", value: "$4,377.78" },
      { label: "R3", value: "$4,354.46" },
      { label: "R2", value: "$4,346.69" },
      { label: "R1", value: "$4,338.92" },
      { label: "S1", value: "$4,323.38" },
      { label: "S2", value: "$4,315.61" },
      { label: "S3", value: "$4,307.84" },
      { label: "S4", value: "$4,284.52" }
    ],
    note: "Gold at $4,331 sits above classic pivot $4,317 — bias bullish while $4,282 (S1) holds."
  }
};
