window.CRUCIX_DATA = {
  generated: "Tue, 26 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Equities at record highs while Bitcoin slips below $77K; gold eases as US-Iran tensions cool.",

  macro: {
    dxy:      { value: "99.00",   change: "+0.08%", signal: "Dollar steady near 99; benign for risk assets." },
    gold:     { value: "$4,570.25", change: "-0.76%", signal: "Eases from highs; structural demand keeps bid intact." },
    oil:      { value: "$91.80",  change: "+1.65%", signal: "WTI firms above $90 on supply risk premium." },
    silver:   { value: "$76.74",  change: "-2.12%", signal: "Pulls back sharply tracking gold and industrial demand." },
    yield10y: { value: "4.51%",   change: "-7bps",  signal: "Yields ease to weekly low; supports equities." },
    vix:      { value: "17.01",   change: "+2.53%", signal: "Volatility ticks up but stays calm below 18." },
    usdmyr:   { value: "3.9659",  change: "+0.34%", signal: "Ringgit near 3.97; modestly eases import costs." },
    sp500:    { value: "7,519.12", change: "+0.61%", signal: "Record close on Intel and Iran de-escalation optimism." },
    verdict: "DXY steady near 99 with the 10Y easing to ~4.51% keeps financial conditions supportive, and VIX at 17 signals calm. Gold holding above $4,500 despite the risk-on tone points to durable structural demand. Lower yields favor crypto and growth equities, while a firmer ringgit near 3.97 lends mild support to KLSE."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC printing lower high; momentum softening." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$76,000", marketCap: "$1.51T", change1h: "N/A", change24h: "-2.24%", change7d: "N/A", insight: "BTC is forming a lower high below $77K as equities rally without it. Key support sits at $75K; a break opens a retest of $70K." },
      { name: "Ethereum", symbol: "ETH", price: "$2,060", marketCap: "$248B", change1h: "N/A", change24h: "N/A", change7d: "N/A", insight: "ETH slid alongside BTC, lagging the broader equity bounce. Holding $2,000 is the line that keeps the structure constructive." },
      { name: "Solana",   symbol: "SOL", price: "$85.00", marketCap: "$46B", change1h: "N/A", change24h: "+1.30%", change7d: "N/A", insight: "SOL outperformed majors with a modest 24h gain on AI-token rotation. Ecosystem flows remain the swing factor for continuation." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.113",     change24h: "N/A", note: "Reclaimed 100-day EMA; bullish." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000040", change24h: "N/A", note: "Holding 100-day EMA support." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000064", change24h: "N/A", note: "Consolidating near 50-day EMA." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A", note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A", note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk is quietly bleeding out of crypto even as stocks rally — a BTC lower high under $77K is the tell. The pivotal level is $75K support; lose it and $70K comes into play. No altseason signal yet, with ETH lagging and only SOL plus AI tokens drawing flows."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,519.12",  change: "+0.61%" },
      { name: "Nasdaq",       value: "26,656.18", change: "+1.19%" },
      { name: "Dow",          value: "50,461.68", change: "-0.23%" },
      { name: "VIX",          value: "17.01",     change: "+2.53%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—",       change: "—",      insight: "Core S&P 500 exposure tracking the record-setting index." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$711.23", change: "N/A",    insight: "Nasdaq-100 proxy riding the AI-led tech rally to fresh records." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "—",      insight: "Most liquid S&P 500 ETF; the broad large-cap benchmark." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Total US market exposure for a diversified core holding." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",      insight: "High-beta innovation basket sensitive to rate and risk shifts." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "—",      insight: "Semiconductor exposure leveraged to the AI capex cycle." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$42.20",  change: "-2.24%", insight: "Spot Bitcoin ETF tracking BTC's pullback below $77K." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Tech-sector fund anchored by megacap AI leaders." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$427.13", change: "-0.76%", insight: "Gold proxy holding firm above its $4,500 spot equivalent." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$607.38", change: "+0.38%", notable: false, insight: "Holding above $600 with ad revenue and AI-capex narrative intact." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$214.28", change: "N/A",    notable: true,  insight: "AI bellwether fading off intraday highs near $214 as megacap leadership narrows." },
      { ticker: "TSLA",  name: "Tesla",         price: "$432.33", change: "N/A",    notable: false, insight: "Hovering near $432 in a tight range as EV demand and robotaxi optimism balance." },
      { ticker: "AAPL",  name: "Apple",         price: "—",       change: "N/A",    notable: false, insight: "Megacap anchor leaning on services growth and steady iPhone demand." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",       change: "N/A",    notable: false, insight: "Cloud and Copilot AI monetization underpin the megacap software leader." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "N/A",    notable: false, insight: "Search resilience and Gemini momentum support the ad and cloud mix." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "N/A",    notable: false, insight: "Retail margins and AWS reacceleration remain the key profit drivers." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",       change: "N/A",    notable: false, insight: "Ad tier and engagement gains continue to lift subscribers and ARPU." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "N/A",    notable: false, insight: "Data-center GPU traction positions it as the key challenger to Nvidia." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "N/A",    notable: false, insight: "AI-platform demand keeps commercial bookings expanding at a premium valuation." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "N/A",    notable: false, insight: "Security-platform consolidation sustains durable subscription growth." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "N/A",    notable: false, insight: "Exchange revenue tracks crypto volumes, pressured as BTC prints a lower high." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "N/A",    notable: true,  insight: "Strategy paused Bitcoin buying to repurchase $1.5B in convertible notes." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "N/A",    notable: false, insight: "Ad-engine monetization keeps driving mobile-gaming growth." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$36.03",  change: "N/A",    notable: false, insight: "AI-server demand supports the rebound near $36 from 52-week lows." }
    ],
    trending: [
      { ticker: "META", change: "+0.38%" },
      { ticker: "N/A",  change: "N/A" },
      { ticker: "N/A",  change: "N/A" },
      { ticker: "N/A",  change: "N/A" },
      { ticker: "N/A",  change: "N/A" }
    ],
    verdict: "The AI trade is intact with Nasdaq at records, but leadership narrowed and Nvidia fading off intraday highs hints at fatigue. Favor megacap quality and semis on dips, and trim crypto-levered names like MSTR into the Bitcoin pullback. Lower yields support multiples, so stay long tech and avoid stretched momentum."
  },

  malaysia: {
    klci:   { value: "1,715", change: "-0.30%", context: "KLCI eased to roughly 1,715, closing lower ahead of the holiday period on thin volume. A firmer ringgit and steady regional tone set a cautious-to-neutral next-session outlook." },
    usdmyr: { value: "3.9659", change: "+0.34%", signal: "Ringgit firms past 3.97; supports importers." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM10.94", change: "-1.08%", insight: "Lost 12 sen to RM10.94; a stable OPR backdrop keeps the dividend yield support intact." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "RM7.68",  change: "-0.65%", insight: "Eased 5 sen to RM7.68; its regional banking franchise underpins earnings." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",       change: "—",      insight: "Defensive retail bank with strong asset quality and steady dividends." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",       change: "—",      insight: "Mid-cap bank leveraged to domestic loan growth and a high dividend yield." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",       change: "—",      insight: "Utility anchor benefiting from data-center power demand and tariff stability." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "RM2.22",  change: "+12.12%", insight: "Surged 24 sen to RM2.22 on the semiconductor upcycle and the Nvidia supply-chain tailwind." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",       change: "—",      insight: "Regional telco focused on deleveraging and operational consolidation." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",       change: "—",      insight: "Defensive healthcare play with pan-Asian hospital expansion." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",       change: "—",      insight: "Digital government-services concessionaire with recurring transaction revenue." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",       change: "—",      insight: "Premium mobile operator positioned for 5G monetization and stable cash flow." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No major new Bursa listing surfaced in the latest results. Watch the ACE Market for upcoming small-cap debuts." }
    ],
    verdict: "The ringgit firmed past 3.97, easing import costs and supporting sentiment. Inari is the standout on the semiconductor and Nvidia tailwind, while banks softened with Maybank and CIMB lower. Bursa closed lower into the holiday lull, so expect thin, range-bound trade next session."
  },

  news: [
    { headline: "Bursa closes lower ahead of holiday period", source: "FMT", time: "3h ago", sentiment: "BEARISH", meaning: "Malaysian market dips before holiday; thin trading volume expected ahead." },
    { headline: "Bitcoin risks another lower high as stocks rally, AI tokens outperform", source: "CoinDesk", time: "2h ago", sentiment: "BEARISH", meaning: "BTC weak while equities and AI tokens climb higher." },
    { headline: "Crypto prices tick up as US-Iran peace deal odds climb", source: "CoinDesk", time: "8h ago", sentiment: "BULLISH", meaning: "Iran de-escalation lifts risk sentiment and pulls oil lower." },
    { headline: "Strategy pauses Bitcoin buying to repurchase $1.5B in convertible notes", source: "Yahoo Finance", time: "6h ago", sentiment: "WATCH", meaning: "Saylor shifts to debt buyback, pausing Bitcoin accumulation for now." },
    { headline: "S&P 500, Nasdaq close at records, boosted by Intel", source: "CNBC", time: "14h ago", sentiment: "BULLISH", meaning: "Record close on Intel strength and renewed Iran-talks optimism." },
    { headline: "10-year Treasury yield eases to weekly low as inflation fears subside", source: "Trading Economics", time: "10h ago", sentiment: "BULLISH", meaning: "Lower yields ease pressure on equities and growth stocks." },
    { headline: "Oil retreats from highs on Strait of Hormuz reopening hopes", source: "Reuters", time: "9h ago", sentiment: "WATCH", meaning: "Hormuz reopening hopes pull crude off its recent highs." },
    { headline: "Gold eases as risk appetite returns to markets", source: "FXStreet", time: "5h ago", sentiment: "NEUTRAL", meaning: "Gold dips modestly as risk-on rotation lifts equities." }
  ],

  goldSummary: {
    "Price":  { value: "$4,570.25", change: "-0.76%", note: "Eases from highs on risk-on rotation." },
    "Open":   { value: "$4,509.38", change: "", note: "" },
    "High":   { value: "$4,579.68", change: "", note: "Day high" },
    "Low":    { value: "$4,509.38", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,667.13" },
      { label: "R2",    value: "$4,623.40" },
      { label: "R1",    value: "$4,596.83" },
      { label: "Pivot", value: "$4,553.10" },
      { label: "S1",    value: "$4,526.53" },
      { label: "S2",    value: "$4,482.80" },
      { label: "S3",    value: "$4,456.23" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,623.40" },
      { label: "R2",    value: "$4,596.55" },
      { label: "R1",    value: "$4,579.96" },
      { label: "Pivot", value: "$4,553.10" },
      { label: "S1",    value: "$4,526.25" },
      { label: "S2",    value: "$4,509.66" },
      { label: "S3",    value: "$4,482.80" }
    ],
    camarilla: [
      { label: "R4", value: "$4,608.92" },
      { label: "R3", value: "$4,589.58" },
      { label: "R2", value: "$4,583.14" },
      { label: "R1", value: "$4,576.69" },
      { label: "S1", value: "$4,563.81" },
      { label: "S2", value: "$4,557.36" },
      { label: "S3", value: "$4,550.92" },
      { label: "S4", value: "$4,531.59" }
    ],
    note: "Gold at $4,570 sits above the classic pivot $4,553 — a modestly bullish bias."
  }
};
