window.CRUCIX_DATA = {
  generated: "Fri, 05 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off cascade: BTC under $60K, Nasdaq -4%, VIX spiked 40% on hot jobs print.",

  macro: {
    dxy:      { value: "—",     change: "N/A",     signal: "USD bid on hot jobs, rate-hike odds rising." },
    gold:     { value: "$4,443.18", change: "-0.72%", signal: "Pullback from highs; yields jump pressures." },
    oil:      { value: "—",     change: "N/A",     signal: "Middle East tension underpinning prices." },
    silver:   { value: "—",     change: "N/A",     signal: "Tracks gold lower on real yield rise." },
    yield10y: { value: "4.475%", change: "+3bps",  signal: "Jobs print pushed 85% hike odds by year-end." },
    vix:      { value: "21.51",  change: "+39.68%", signal: "Fear spike — biggest VIX surge in months." },
    usdmyr:   { value: "4.0356", change: "+0.57%", signal: "Ringgit weaker on broad USD strength bid." },
    sp500:    { value: "7,383.74", change: "-2.64%", signal: "Broad selloff led by semis and megacaps." },
    verdict: "DXY firming, 10Y at 4.47% and VIX at 21.5 combine for a textbook risk-off morning — gold also down shows liquidation, not haven bid. Crypto and high-beta US growth take the brunt; defensive sectors and cash favored. Ringgit weak; KLSE will open softer Monday tracking Wall Street rout."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dom slipping as altcoin selloff accelerates." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$60,761", marketCap: "$1.22T", change1h: "N/A", change24h: "-4.15%", change7d: "N/A", insight: "Lost $60K psychological level; weakest since Oct 2024 after $1.5B in liquidations. ETF outflows hit $3.4B weekly — largest since spot launch." },
      { name: "Ethereum", symbol: "ETH", price: "$1,581.66", marketCap: "$190B", change1h: "N/A", change24h: "-5.20%", change7d: "N/A", insight: "Slipped under $1,600 as risk-off hits all crypto beta. Key support at $1,500 — losing it opens path to $1,350." },
      { name: "Solana",   symbol: "SOL", price: "$78.97", marketCap: "$38B", change1h: "N/A", change24h: "-1.43%", change7d: "N/A", insight: "Held up better than BTC/ETH on relative basis. Memecoin ecosystem weakening drags sentiment but $75 is key floor." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",      change24h: "-1.14%", note: "Bearish flip; social interest waning." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000082",   change24h: "N/A",    note: "Consolidates above 100-day EMA." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000061",   change24h: "N/A",    note: "Stuck between 50/100-day EMAs." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Hard risk-off — BTC breaking $60K, $1.5B liquidated, Zcash bug compounds fear. Watch $58K BTC: lose it and capitulation extends to $52-55K range. Altseason dead until BTC stabilizes and ETF flows reverse."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,383.74",  change: "-2.64%" },
      { name: "Nasdaq",       value: "25,709.43", change: "-4.18%" },
      { name: "Dow",          value: "50,866.78", change: "-1.35%" },
      { name: "VIX",          value: "21.51",     change: "+39.68%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$684.14", change: "-2.60%", insight: "Core S&P proxy tracking broad selloff; defensive add zone." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—",       change: "-4.20%", insight: "Tech-heavy fund took the brunt — semis dragged worst since April 2025." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "-2.64%", insight: "Liquid hedge vehicle; VIX surge tells you protection got expensive." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "N/A",    insight: "Broad-based exposure suffering same selloff as S&P." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "N/A",    insight: "High-beta innovation basket hit hard in risk-off." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "N/A",    insight: "Semis at epicenter — AI overhype warnings triggered $1T wipeout." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "~$33.76", change: "-4.15%", insight: "Tracks BTC; $3.4B weekly outflows the largest since launch." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "-6.69%", insight: "Tech sector down 6.69% — rotation out of high-momentum names." },
      { ticker: "GLD",  name: "Gold ETF",          price: "~$415.25", change: "-0.72%", insight: "Even gold sold; suggests liquidation pressure not haven flows." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$627.57", change: "+0.74%", notable: true,  insight: "Rare green print on a brutal tape — AI ad monetization story still intact." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$218.66", change: "-4.93%", notable: true,  insight: "Analysts warning of overhyped AI expectations; key support at $210." },
      { ticker: "TSLA",  name: "Tesla",         price: "$418.45", change: "-6.29%", notable: true,  insight: "Roadster delays plus broader weakness — high-beta name punished." },
      { ticker: "AAPL",  name: "Apple",         price: "—",      change: "N/A",    notable: false, insight: "Defensive megacap; typically holds up better in broad selloffs." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$429.94", change: "N/A",   notable: false, insight: "AI capex narrative still dominant despite tape weakness." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",      change: "N/A",    notable: false, insight: "Search resilience plus Gemini momentum cushion downside." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",      change: "N/A",    notable: false, insight: "AWS growth thesis intact; consumer side under pressure." },
      { ticker: "NFLX",  name: "Netflix",       price: "$83.33",  change: "-2.94%", notable: true,  insight: "8-day losing streak — worst run in four years, at major support." },
      { ticker: "AMD",   name: "AMD",           price: "—",      change: "N/A",    notable: false, insight: "Caught in semiconductor washout; AI server demand still long-term bull." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",      change: "N/A",    notable: false, insight: "Government AI tailwind intact; high-multiple risk in rate spikes." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",      change: "N/A",    notable: false, insight: "Cybersecurity remains defensive growth pocket." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",      change: "N/A",    notable: false, insight: "BTC drop and ETF outflows directly hit transaction revenues." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",      change: "-11.32%", notable: true,  insight: "Plunged on BTC loss fears; highest-beta crypto proxy on the tape." },
      { ticker: "APP",   name: "AppLovin",      price: "—",      change: "N/A",    notable: false, insight: "Ad-tech momentum name vulnerable to risk-off pullback." },
      { ticker: "SMCI",  name: "Super Micro",   price: "—",      change: "-7.00%", notable: true,  insight: "AI infra rotation hit; offset by Helios launch and $2B deal." }
    ],
    trending: [
      { ticker: "MSTR", change: "-11.32%" },
      { ticker: "SMCI", change: "-7.00%" },
      { ticker: "TSLA", change: "-6.29%" },
      { ticker: "NVDA", change: "-4.93%" },
      { ticker: "META", change: "+0.74%" }
    ],
    verdict: "AI trade got a reality check — semis and high-beta got punished while META proved earnings strength still matters. Rotation favors defensives, cash, and quality megacaps over momentum and unprofitable growth. Avoid crypto-linked equities until BTC stabilizes; SMCI/MSTR/COIN all toxic on the tape."
  },

  malaysia: {
    klci:   { value: "1,696.01", change: "+0.76%", context: "Closed firm Thursday but Monday will open soft tracking Wall Street's -4% Nasdaq rout. Local banks and exporters most exposed to global risk-off." },
    usdmyr: { value: "4.0356", change: "+0.57%", signal: "Ringgit weaker; broad USD bid on hike fears." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM10.64", change: "Fri close",  insight: "Defensive yield anchor; OPR stable supports NIM but ringgit weakness a concern." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "RM7.74",  change: "Fri close",  insight: "Down 6.7% over 90 days; regional exposure adds FX volatility." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",       change: "Fri close",  insight: "Defensive deposit franchise; lowest beta among local banks." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",       change: "Fri close",  insight: "Smaller cap with stable dividends; tracks sector sentiment." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",       change: "Fri close",  insight: "Utility defensive; data center power demand a structural tailwind." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "RM2.36",  change: "Fri close",  insight: "Semi proxy — NVDA -4.9% and SOXX rout will pressure Monday open." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",       change: "Fri close",  insight: "Telco restructuring story; ringgit weakness hurts FX translation." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",       change: "Fri close",  insight: "Defensive healthcare; medical tourism a regional tailwind." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",       change: "Fri close",  insight: "Digital govt services concession; thinly tied to global risk sentiment." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",       change: "Fri close",  insight: "5G rollout drag offset by dividend yield; low beta." }
    ],
    ipos: [
      { name: "N/A", sector: "—", price: "—", listingDate: "—", status: "—", note: "No major Bursa IPO updates in latest scan." }
    ],
    verdict: "Ringgit at 4.04 reflects global USD strength, not local weakness — capped at 4.10. Best risk-reward: Tenaga and IHH as defensives; avoid Inari into Monday open given semi rout. KLCI to gap down ~0.8-1.2% Monday tracking Wall Street."
  },

  news: [
    { headline: "Bitcoin cracks $60,000 to weakest level since October 2024", source: "CNBC", time: "2h ago", sentiment: "BEARISH", meaning: "BTC support gone; opens path to $55K and broad crypto pain." },
    { headline: "Nasdaq drops 4% — worst day since April 2025 as chips slide", source: "CNBC", time: "3h ago", sentiment: "BEARISH", meaning: "AI trade unwind accelerating; semi capex narrative under heavy review." },
    { headline: "US jobs report blowout pushes rate hike odds to 85%", source: "Reuters", time: "5h ago", sentiment: "BEARISH", meaning: "Hot labor data killed Fed cut hopes; risk assets repriced lower." },
    { headline: "$1.5B in crypto liquidated after jobs print and Zcash bug", source: "CoinPaper", time: "4h ago", sentiment: "BEARISH", meaning: "Forced selling cascade; ETF outflows worst since launch." },
    { headline: "Bitcoin ETF outflows hit $3.4B in week — largest since spot launch", source: "CoinDesk", time: "6h ago", sentiment: "BEARISH", meaning: "Institutional sell signal; flows must reverse to stop bleeding." },
    { headline: "MicroStrategy plunges 11% as BTC loss fears mount", source: "Yahoo", time: "5h ago", sentiment: "BEARISH", meaning: "MSTR remains highest-beta crypto play; collateral risk in focus." },
    { headline: "Super Micro launches Helios platform, signs $2B AI deal", source: "Yahoo", time: "8h ago", sentiment: "BULLISH", meaning: "Long-term AI infra story alive despite stock down 7% premarket." },
    { headline: "USD/MYR rises to 4.0356 as dollar bid on rate hike bets", source: "Bloomberg", time: "1h ago", sentiment: "BEARISH", meaning: "Ringgit weaker; KLCI exporters to feel translation drag Monday." }
  ],

  goldSummary: {
    "Price":    { value: "$4,443.18", change: "-0.72%", note: "Pulled back from highs on real yield jump." },
    "Open":     { value: "$4,475.41", change: "",      note: "Prior close" },
    "High":     { value: "$4,481.59", change: "",      note: "Day high" },
    "Low":      { value: "$4,435.37", change: "",      note: "Day low" },
    "52W High": { value: "N/A",       change: "",      note: "" },
    "52W Low":  { value: "N/A",       change: "",      note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,539.09" },
      { label: "R2",    value: "$4,510.34" },
      { label: "R1",    value: "$4,492.87" },
      { label: "Pivot", value: "$4,464.12" },
      { label: "S1",    value: "$4,446.65" },
      { label: "S2",    value: "$4,417.90" },
      { label: "S3",    value: "$4,400.43" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,510.34" },
      { label: "R2",    value: "$4,492.68" },
      { label: "R1",    value: "$4,481.78" },
      { label: "Pivot", value: "$4,464.12" },
      { label: "S1",    value: "$4,446.46" },
      { label: "S2",    value: "$4,435.56" },
      { label: "S3",    value: "$4,417.90" }
    ],
    camarilla: [
      { label: "R4", value: "$4,500.83" },
      { label: "R3", value: "$4,488.12" },
      { label: "R2", value: "$4,483.88" },
      { label: "R1", value: "$4,479.65" },
      { label: "S1", value: "$4,471.17" },
      { label: "S2", value: "$4,466.94" },
      { label: "S3", value: "$4,462.70" },
      { label: "S4", value: "$4,449.99" }
    ],
    note: "Gold at $4,443 sits below classic pivot $4,464 — short-term bearish bias until reclaim."
  }
};
