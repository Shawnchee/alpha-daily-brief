window.CRUCIX_DATA = {
  generated: "Tue, 02 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off morning: BTC slipped below $70K on Saylor selling while AI tokens diverge, equities cautious.",

  macro: {
    dxy:      { value: "99.20",  change: "+0.05%", signal: "Dollar steady; bid on safety flows." },
    gold:     { value: "$4,513.76", change: "+0.17%", signal: "Safe haven bid holds firm." },
    oil:      { value: "$93.84", change: "+1.82%", signal: "WTI rallies on tightening supply." },
    silver:   { value: "$75.18", change: "-0.10%", signal: "Silver flat lagging gold strength." },
    yield10y: { value: "4.46%",  change: "-2bps",  signal: "Yields ease, equity duration friendlier." },
    vix:      { value: "15.91",  change: "-0.87%", signal: "Vol compressed; complacency lingers." },
    usdmyr:   { value: "4.02",   change: "+0.10%", signal: "Ringgit soft on dollar resilience." },
    sp500:    { value: "7,606.25", change: "+0.08%", signal: "Index near highs, narrow leadership." },
    verdict: "DXY firm and yields easing keeps the bid in long-duration tech and gold. VIX at 15.9 signals complacency, but BTC breaking $70K warns risk appetite is thinning. KLSE faces a soft ringgit drag while gold strength supports defensive Bursa names."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance pressured by AI tokens." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$67,468", marketCap: "$1.33T", change1h: "N/A", change24h: "-5.80%", change7d: "N/A", insight: "BTC slid below $70K as a Saylor sale spooked the tape and tagged April lows. Holding $67K is critical or $65K opens next." },
      { name: "Ethereum", symbol: "ETH", price: "$2,060.24", marketCap: "$248B", change1h: "N/A", change24h: "-3.20%", change7d: "N/A", insight: "ETH lags BTC weakness with no clear catalyst. Watch $2,000 support; loss flips structure bearish." },
      { name: "Solana",   symbol: "SOL", price: "$84.12", marketCap: "$40B", change1h: "N/A", change24h: "-4.10%", change7d: "N/A", insight: "SOL retracing with majors despite memecoin liquidity. Holding $80 keeps the uptrend intact." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.0939", change24h: "-1.14%", note: "Bearish drift; tracks BTC sentiment." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000061", change24h: "-2.50%", note: "Consolidating between EMAs; range trade." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000615", change24h: "+6.32%", note: "Outperforms peers on retail bid." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",    change24h: "N/A",  note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",    change24h: "N/A",  note: "Speculative SOL memecoin." }
    ],
    verdict: "Crypto is risk-off this morning with BTC at April lows on Saylor pressure. The AI token divergence shows narrative-driven rotation, not broad altseason. Defend $67K BTC or expect a cascade toward $65K next."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,606.25",  change: "+0.08%" },
      { name: "Nasdaq",       value: "27,069.64", change: "-0.06%" },
      { name: "Dow",          value: "51,286.11", change: "+0.41%" },
      { name: "VIX",          value: "15.91",     change: "-0.87%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—", change: "—", insight: "Tracks S&P at 7,606; core long-term allocation vehicle." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—", change: "—", insight: "Mega-cap tech proxy; flat as megacaps digest gains." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—", change: "—", insight: "Liquidity benchmark; mirrors S&P 7,606 strength." },
      { ticker: "VTI",  name: "Total Market",      price: "—", change: "—", insight: "Total market exposure broader than SPY with small-cap tail." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—", change: "—", insight: "High-beta innovation basket sensitive to today's yield drop." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—", change: "—", insight: "Semis bid on NVDA strength; AI capex theme intact." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$37.48", change: "-5.80%", insight: "Spot BTC ETF tracking BTC slide below $70K." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—", change: "—", insight: "Tech sector mixed; AI winners offset megacap weakness." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$421.85", change: "+0.17%", insight: "Gold ETF tracks futures at fresh elevated levels." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$600.59", change: "-5.00%", notable: true,  insight: "Sharp -5% drop on rotation out of crowded megacap names." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$224.35", change: "+6.30%", notable: true,  insight: "NVDA leads tape on AI capex tailwind and SMCI demand signal." },
      { ticker: "TSLA",  name: "Tesla",         price: "$416.00", change: "-4.50%", notable: true,  insight: "Tesla off on softer delivery sentiment and risk-off bias." },
      { ticker: "AAPL",  name: "Apple",         price: "$306.26", change: "-1.90%", notable: false, insight: "Apple drifts lower with broader megacap profit-taking." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",       change: "—",      notable: false, insight: "Cloud and AI infrastructure leader bid on Azure demand." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "—",      notable: false, insight: "Search resilient; Gemini monetization story progressing." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "—",      notable: false, insight: "AWS growth and ad margin support the structural bull case." },
      { ticker: "NFLX",  name: "Netflix",       price: "$86.02",  change: "-2.90%", notable: false, insight: "Netflix dips weekly on ad-tier scrutiny and rising competition." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "—",      notable: false, insight: "AI accelerator share narrative supports re-rating versus NVDA." },
      { ticker: "PLTR",  name: "Palantir",      price: "$158.15", change: "N/A",    notable: true,  insight: "PLTR remains AI-government darling at elevated multiples." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",      notable: false, insight: "Cyber leader benefits from rising enterprise security spend." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "—",      notable: false, insight: "Tracks BTC closely; pressured by today's crypto risk-off." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "—",      notable: true,  insight: "Saylor sale news headwind; BTC leverage cuts both ways." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",      notable: false, insight: "AdTech AI monetization still in favor with growth funds." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$47.86",  change: "+4.50%", notable: true,  insight: "SMCI rallies on agentic AI demand and Mizuho target hike." }
    ],
    trending: [
      { ticker: "NVDA", change: "+6.30%" },
      { ticker: "META", change: "-5.00%" },
      { ticker: "TSLA", change: "-4.50%" },
      { ticker: "SMCI", change: "+4.50%" },
      { ticker: "NFLX", change: "-2.90%" }
    ],
    verdict: "AI capex trade still works: NVDA and SMCI lead while megacap consumer names rotate out. Sector breadth thin — be picky on longs, especially anything BTC-correlated. Own AI infra; avoid pure megacap consumer until rotation cools."
  },

  malaysia: {
    klci:   { value: "1,722", change: "+0.02%", context: "KLCI flat near 1,722 by midday Friday as tech and transport offset healthcare drag. Monday open likely soft on US tech wobble and weaker BTC sentiment." },
    usdmyr: { value: "4.02", change: "+0.10%", signal: "Ringgit soft on dollar resilience." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "10.64",  change: "+1.33%",   insight: "Maybank firms on stable OPR backdrop and resilient regional bank earnings." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "—",      change: "Fri close", insight: "Regional bank exposure benefits from steady ASEAN credit growth." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",   price: "—",      change: "Fri close", insight: "Defensive retail bank with strong asset quality through cycles." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",      price: "—",      change: "Fri close", insight: "Smaller bank; dividend yield supports a valuation floor." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",        price: "—",      change: "Fri close", insight: "Utility benefits from data center power demand build-out theme." },
      { ticker: "INARI",  name: "Inari (0138.KL)",         price: "—",      change: "Fri close", insight: "Semi-test packager rides AI accelerator cycle with NVDA tailwind." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",        price: "—",      change: "Fri close", insight: "Telco restructuring continues; XL Smart merger benefits emerging." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)",price: "—",      change: "Fri close", insight: "Defensive healthcare proxy with regional medical tourism upside." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",          price: "—",      change: "Fri close", insight: "Digital government services with concession-driven cash flow." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",         price: "—",      change: "Fri close", insight: "5G monetization steady; dividend yield supports the downside." }
    ],
    ipos: [
      { name: "No new IPO confirmed", sector: "—", price: "—", listingDate: "—", status: "—", note: "No fresh Bursa IPO confirmed in current data feed. Watch Bursa weekly listing pipeline updates." }
    ],
    verdict: "Ringgit at 4.02 stays soft on dollar firmness; FX is the swing factor for foreign flows. Maybank at 10.64 with +1.33% looks like the best risk-adjusted bank pick today. Monday Bursa likely opens cautious tracking weaker US tech close — watch 1,720 KLCI support."
  },

  news: [
    { headline: "Bitcoin slides below $70,000 to April lows", source: "Yahoo Finance", time: "4h ago", sentiment: "BEARISH", meaning: "Saylor sale spooks crypto; BTC retests April lows decisively." },
    { headline: "AI tokens surge as BTC drops, exposing market split", source: "CoinDesk", time: "5h ago", sentiment: "WATCH", meaning: "Narrative rotation: AI altcoins decouple from broader crypto risk." },
    { headline: "Super Micro rallies on Mizuho target hike, agentic AI", source: "Stocktwits", time: "8h ago", sentiment: "BULLISH", meaning: "SMCI AI server demand thesis re-rated by sell side analysts." },
    { headline: "Nvidia jumps 6% on AI capex tailwind", source: "Yahoo Finance", time: "6h ago", sentiment: "BULLISH", meaning: "AI infrastructure trade still the strongest single-name driver." },
    { headline: "Meta drops 5%, megacap rotation accelerates", source: "CNBC", time: "5h ago", sentiment: "BEARISH", meaning: "Profit-taking rotates out of crowded consumer megacap longs." },
    { headline: "Crude WTI jumps to $93.84 on supply tightness", source: "Investing.com", time: "3h ago", sentiment: "BULLISH", meaning: "Oil up 1.8% supports energy names and inflation risk premium." },
    { headline: "KLCI flat at 1,722 as tech offsets healthcare drag", source: "TradingView", time: "10h ago", sentiment: "NEUTRAL", meaning: "Bursa range-bound; sector rotation but no decisive trend signal." },
    { headline: "JP Morgan keeps KLCI year-end target at 1,800", source: "I3investor", time: "12h ago", sentiment: "BULLISH", meaning: "Sell-side reaffirms Malaysia upside despite ringgit volatility." }
  ],

  goldSummary: {
    "Price":  { value: "$4,513.76", change: "+0.17%", note: "Safe haven bid; near record levels." },
    "Open":   { value: "$4,506", change: "", note: "Session open estimate" },
    "High":   { value: "$4,525", change: "", note: "Day high" },
    "Low":    { value: "$4,495", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,552.33" },
      { label: "R2",    value: "$4,538.67" },
      { label: "R1",    value: "$4,522.33" },
      { label: "Pivot", value: "$4,508.67" },
      { label: "S1",    value: "$4,492.33" },
      { label: "S2",    value: "$4,478.67" },
      { label: "S3",    value: "$4,462.33" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,538.67" },
      { label: "R2",    value: "$4,527.21" },
      { label: "R1",    value: "$4,520.13" },
      { label: "Pivot", value: "$4,508.67" },
      { label: "S1",    value: "$4,497.21" },
      { label: "S2",    value: "$4,490.13" },
      { label: "S3",    value: "$4,478.67" }
    ],
    camarilla: [
      { label: "R4", value: "$4,522.50" },
      { label: "R3", value: "$4,514.25" },
      { label: "R2", value: "$4,511.50" },
      { label: "R1", value: "$4,508.75" },
      { label: "S1", value: "$4,503.25" },
      { label: "S2", value: "$4,500.50" },
      { label: "S3", value: "$4,497.75" },
      { label: "S4", value: "$4,489.50" }
    ],
    note: "Gold at $4,513.76 trades above classic pivot $4,508.67 — bullish bias intact while above."
  }
};
