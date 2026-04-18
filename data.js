window.CRUCIX_DATA = {
  generated: "Sat, 18 Apr 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on rally extends as US-Iran diplomacy lifts equities and crushes oil.",

  macro: {
    dxy:      { value: "98.10",  change: "-0.45%", signal: "Dollar weakens on diplomacy and softer yields." },
    gold:     { value: "$3,245", change: "+0.40%", signal: "Gold firm despite risk-on; real yields easing." },
    oil:      { value: "$58.40", change: "-9.80%", signal: "Crude crushed as Strait of Hormuz reopens." },
    silver:   { value: "$32.85", change: "+0.65%", signal: "Silver tracks gold; industrial demand steady." },
    yield10y: { value: "4.31%",  change: "+2bps",  signal: "Yields steady as risk appetite returns broadly." },
    vix:      { value: "17.48",  change: "-2.56%", signal: "Volatility compresses on third record close." },
    usdmyr:   { value: "4.05",   change: "-0.30%", signal: "Ringgit firms as dollar weakness extends globally." },
    sp500:    { value: "7,100",  change: "+1.20%", signal: "Third straight all-time high closing print." },
    verdict: "DXY at 98 with VIX sub-18 and gold firm signals broad risk-on with hedges intact. Crypto and tech benefit from softer dollar; semis and AI names lead. KLSE supported by ringgit strength and crude collapse, helping importers and consumer names."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady as alts perk up." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$77,400", marketCap: "$1.52T", change1h: "N/A", change24h: "+3.00%", change7d: "N/A", insight: "BTC pushing past $76k on Iran diplomacy and oil collapse. Weekly close above $78k could trigger move toward $90k." },
      { name: "Ethereum", symbol: "ETH", price: "$2,409",  marketCap: "$290B",  change1h: "N/A", change24h: "+2.50%", change7d: "N/A", insight: "ETH reclaims $2.4k as risk-on returns. Layer-2 activity remains the structural bid for the network." },
      { name: "Solana",   symbol: "SOL", price: "$88.43",  marketCap: "$42B",   change1h: "N/A", change24h: "+0.80%", change7d: "N/A", insight: "SOL up modestly; lagging BTC on relative strength. Memecoin and DeFi activity still the swing factor." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.0939",      change24h: "-1.14%", note: "Lags BTC; needs Elon catalyst." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000365",  change24h: "-10.00%", note: "Memecoin sentiment cooling fast." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000615",  change24h: "+6.32%", note: "Best meme bid this session." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",     note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",     note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on confirmed with BTC near $77k and S&P at records. $78k weekly close is the key bull trigger toward $90k. Altseason still selective; SHIB perking up but PEPE bleeding signals not broad-based."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,100",  change: "+1.20%" },
      { name: "Nasdaq",       value: "23,150", change: "+1.50%" },
      { name: "Dow",          value: "47,850", change: "+1.80%" },
      { name: "VIX",          value: "17.48",  change: "-2.56%" },
      { name: "Russell 2000", value: "N/A",    change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—",       change: "Fri close", insight: "Tracks S&P at record highs; broad-market core holding." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$648.29", change: "+1.22%",    insight: "Tech-heavy ETF closed at fresh highs on AI-led rally." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "Fri close", insight: "Liquid S&P proxy benefiting from third record close." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "Fri close", insight: "Broad US exposure participating in melt-up." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "Fri close", insight: "High-beta growth name riding risk-on momentum." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "Fri close", insight: "Semis leading on AI demand and rate stability." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$43.00",  change: "+3.00%",    insight: "Tracks BTC near $77k; institutional flows resilient." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "Fri close", insight: "Tech sector remains the AI trade vehicle of choice." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$303.27", change: "+0.40%",    insight: "Gold ETF firm as real yields ease and DXY drops." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$640.50", change: "Fri close", notable: false, insight: "AI ad targeting and Reels engagement support megacap leadership." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$201.68", change: "Fri close", notable: false, insight: "AI capex king benefiting from sustained data center buildout." },
      { ticker: "TSLA",  name: "Tesla",         price: "$400.62", change: "Fri close", notable: false, insight: "Robotaxi rollout and energy storage growth keep narrative intact." },
      { ticker: "AAPL",  name: "Apple",         price: "$270.23", change: "Fri close", notable: false, insight: "Services growth offsets China headwinds; AI features pending." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$485.00", change: "Fri close", notable: false, insight: "Azure AI revenue continues to anchor the growth thesis." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$341.68", change: "Fri close", notable: false, insight: "Search resilience plus Gemini momentum drives sentiment." },
      { ticker: "AMZN",  name: "Amazon",        price: "$245.00", change: "Fri close", notable: false, insight: "AWS reacceleration and ad growth support multiple expansion." },
      { ticker: "NFLX",  name: "Netflix",       price: "$985.00", change: "Fri close", notable: false, insight: "Ad-tier scaling and live sports lift ARPU outlook." },
      { ticker: "AMD",   name: "AMD",           price: "$182.00", change: "Fri close", notable: false, insight: "MI300 ramp positions AMD as credible Nvidia alternative." },
      { ticker: "PLTR",  name: "Palantir",      price: "$95.00",  change: "Fri close", notable: false, insight: "AIP enterprise wins continue to validate the AI platform thesis." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "$420.00", change: "Fri close", notable: false, insight: "Cybersecurity demand structural; Falcon platform regaining trust." },
      { ticker: "COIN",  name: "Coinbase",      price: "$310.00", change: "Fri close", notable: false, insight: "Volume rebound and stablecoin revenue track BTC strength." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$172.00", change: "+11.80%",   notable: true,  insight: "Surged 12% on BTC rally; 762k coin treasury keeps leverage thesis alive." },
      { ticker: "APP",   name: "AppLovin",      price: "$385.00", change: "Fri close", notable: false, insight: "AXON ad engine continues to deliver outsized ROAS for advertisers." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$27.50",  change: "Fri close", notable: false, insight: "Trading in support zone amid lingering compliance overhang risks." }
    ],
    trending: [
      { ticker: "MSTR", change: "+11.80%" },
      { ticker: "COIN", change: "+5.50%" },
      { ticker: "NVDA", change: "+2.80%" },
      { ticker: "TSLA", change: "+2.20%" },
      { ticker: "META", change: "+1.90%" }
    ],
    verdict: "AI trade fully back in the lead with semis and crypto-adjacent names ripping. Rotation favors megacap tech and high-beta names; defensives lagging. Own NVDA, MSTR, and SOXX exposure; avoid energy and high-duration losers into next CPI."
  },

  malaysia: {
    klci:   { value: "1,612.50", change: "Fri close", context: "KLCI held above 1,600 into the weekend on ringgit strength. Monday should open firm with crude collapse aiding consumer and transport names." },
    usdmyr: { value: "4.05",     change: "-0.30%",    signal: "Ringgit firms on global dollar weakness." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "11.04",  change: "Fri close", insight: "Steady dividend yield; OPR backdrop supports NIM stability." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "7.25",   change: "Fri close", insight: "Regional ASEAN exposure provides diversified loan growth tailwind." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "4.55",   change: "Fri close", insight: "Defensive bank with strong asset quality and consistent payout." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "6.75",   change: "Fri close", insight: "Capital-rich balance sheet positions for selective loan growth." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "14.80",  change: "Fri close", insight: "Data center power demand the structural growth narrative driver." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "2.95",   change: "Fri close", insight: "Semi cycle proxy; benefits from NVDA strength and AI buildout." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "2.45",   change: "Fri close", insight: "Telco consolidation and edotco monetisation remain core catalysts." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "7.35",   change: "Fri close", insight: "Defensive healthcare with regional medical tourism upside." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "0.92",   change: "Fri close", insight: "Digital services contracts and Zetrix blockchain optionality." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "3.55",   change: "Fri close", insight: "5G migration and enterprise solutions driving ARPU stability." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No major IPO catalyst flagged in current Bursa pipeline this week." }
    ],
    verdict: "Ringgit at 4.05 is the standout, capping import inflation and supporting consumer plays. Inari is the cleanest beta to the global semi rally and NVDA momentum. Monday Bursa opens firm with crude collapse a tailwind for transport, consumer, and aviation names."
  },

  news: [
    { headline: "Dow leaps 850 points; S&P 500 and Nasdaq notch third straight record on US-Iran diplomacy", source: "Yahoo Finance", time: "12h ago", sentiment: "BULLISH", meaning: "Risk-on rally extends; AI and crypto names leading broad market melt-up." },
    { headline: "Bitcoin pushes past $76,000 as Iran reopens Strait of Hormuz", source: "CoinDesk", time: "14h ago", sentiment: "BULLISH", meaning: "Geopolitical relief sparks BTC breakout; $78k weekly close key trigger." },
    { headline: "Oil plunges nearly 10% on Iran cooldown and supply normalisation", source: "CoinDesk", time: "14h ago", sentiment: "BEARISH", meaning: "Energy collapse helps importers like Malaysia and disinflation narrative." },
    { headline: "Strategy (MSTR) jumps 12% as Bitcoin hits $78,000", source: "Yahoo Finance", time: "10h ago", sentiment: "BULLISH", meaning: "Leveraged BTC proxy outperforms; treasury bet vindicated by rally." },
    { headline: "Dollar drops to multi-week lows as DXY breaks below 98.50", source: "Investing.com", time: "16h ago", sentiment: "BEARISH", meaning: "Dollar weakness supports EM, commodities, gold, and crypto bid." },
    { headline: "Strategy proposes semi-monthly dividends on STRC preferred stock", source: "CoinDesk", time: "18h ago", sentiment: "NEUTRAL", meaning: "Capital structure tweak signals confidence in BTC treasury cash flow." },
    { headline: "Gold extends run as falling real yields offset hot inflation data", source: "Investing.com", time: "20h ago", sentiment: "BULLISH", meaning: "Real yield compression keeps gold bid as inflation hedge intact." },
    { headline: "QQQ closes at $648.29, fresh all-time high on AI rally", source: "Yahoo Finance", time: "12h ago", sentiment: "BULLISH", meaning: "Tech leadership intact; semis and megacaps powering Nasdaq breakout." }
  ],

  goldSummary: {
    "Price":  { value: "$3,245", change: "+0.40%", note: "Firm on softer DXY and yields." },
    "Open":   { value: "$3,232", change: "", note: "" },
    "High":   { value: "$3,258", change: "", note: "Day high" },
    "Low":    { value: "$3,228", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$3,288.33" },
      { label: "R2",    value: "$3,273.00" },
      { label: "R1",    value: "$3,258.67" },
      { label: "Pivot", value: "$3,243.67" },
      { label: "S1",    value: "$3,229.33" },
      { label: "S2",    value: "$3,213.67" },
      { label: "S3",    value: "$3,199.33" }
    ],
    fibonacci: [
      { label: "R3",    value: "$3,273.67" },
      { label: "R2",    value: "$3,262.21" },
      { label: "R1",    value: "$3,255.13" },
      { label: "Pivot", value: "$3,243.67" },
      { label: "S1",    value: "$3,232.21" },
      { label: "S2",    value: "$3,225.13" },
      { label: "S3",    value: "$3,213.67" }
    ],
    camarilla: [
      { label: "R4", value: "$3,261.50" },
      { label: "R3", value: "$3,253.25" },
      { label: "R2", value: "$3,250.50" },
      { label: "R1", value: "$3,247.75" },
      { label: "S1", value: "$3,242.25" },
      { label: "S2", value: "$3,239.50" },
      { label: "S3", value: "$3,236.75" },
      { label: "S4", value: "$3,228.50" }
    ],
    note: "Gold trading just above classic pivot $3,243 — bias bullish while above; failure flips bias bearish toward S1."
  }
};
