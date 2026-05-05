window.CRUCIX_DATA = {
  generated: "Tue, 05 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on tape: indices at fresh records as oil retreats and VIX collapses below 18.",

  macro: {
    dxy:      { value: "98.36",   change: "+0.10%", signal: "Dollar firm but capped near recent range." },
    gold:     { value: "$4,549",  change: "+0.36%", signal: "Bid on Mideast hedging; trend intact." },
    oil:      { value: "$104.32", change: "-1.97%", signal: "Talks-pause cooling crude; relief for risk." },
    silver:   { value: "$73.47",  change: "-0.08%", signal: "Consolidating near highs after sharp run." },
    yield10y: { value: "4.44%",   change: "-1bps",  signal: "Yields drifting; supports duration and tech." },
    vix:      { value: "17.43",   change: "-4.70%", signal: "Vol crushed as stocks print new highs." },
    usdmyr:   { value: "3.9649",  change: "-0.05%", signal: "Ringgit firm under 4.00 — supportive." },
    sp500:    { value: "7,259.22", change: "+0.81%", signal: "Record close; breadth confirming uptrend." },
    verdict: "Soft DXY, falling oil, and a sub-18 VIX are the textbook risk-on cocktail. Gold up alongside stocks tells you Mideast hedging is real — own both. Crypto, US tech and KLSE banks all have a green runway into Asia open."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leadership intact; alts still lag." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$81,537", marketCap: "$1.62T", change1h: "N/A", change24h: "+2.22%", change7d: "N/A", insight: "BTC reclaimed $80k with $200M shorts liquidated and IBIT flows building. Next test sits at $87k — losing $78k flips momentum." },
      { name: "Ethereum", symbol: "ETH", price: "$2,053",  marketCap: "$248B",  change1h: "N/A", change24h: "+1.10%", change7d: "N/A", insight: "ETH grinding above the $1,800 institutional anchor as ETF flows stabilise. Reclaiming $2,200 opens the door to $2,400." },
      { name: "Solana",   symbol: "SOL", price: "$85.48",  marketCap: "$45B",   change1h: "N/A", change24h: "+1.00%", change7d: "N/A", insight: "SOL holding the $80 shelf with rising on-chain volume. Memecoin rotation in BONK/WIF still tied to SOL strength." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.113",     change24h: "+2.50%", note: "Cleared 100-day EMA; eyes 0.119." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000040", change24h: "+1.80%", note: "Holds 100EMA; 200EMA next." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000063", change24h: "+1.50%", note: "Coiled at consolidation top." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",        change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",        change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on: BTC reclaiming $80k flushed shorts and reignited the bid. Key level is $78k support; losing it invalidates the setup. Altseason still gated — wait for ETH > $2,200 before chasing."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,259.22",  change: "+0.81%" },
      { name: "Nasdaq",       value: "25,326.13", change: "+1.03%" },
      { name: "Dow",          value: "49,298.25", change: "+0.73%" },
      { name: "VIX",          value: "17.43",     change: "-4.70%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$665.30", change: "+0.78%", insight: "Riding fresh S&P record; core long position." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$672.88", change: "+1.00%", insight: "Tech leadership intact with yields easing." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$723.77", change: "+0.80%", insight: "Liquid proxy on a record-high tape." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Broad-market beta; expect to mirror VOO move." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",      insight: "High-beta growth — sub-18 VIX is its tailwind." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$482.73", change: "+4.47%", insight: "Chips ripping on AI capex restock; leadership group." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$45.30",  change: "+2.22%", insight: "Spot proxy; flows tracking BTC reclaim of $80k." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Sector leader as megacaps and AI both bid." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$425.14", change: "+0.36%", insight: "Defensive sleeve still working as Mideast risk lingers." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$603.52", change: "-1.10%", notable: false, insight: "Mild profit-taking after recent rip; AI capex story unchanged." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$197.41", change: "-0.50%", notable: false, insight: "Cooling near highs but SOXX +4.47% says demand intact." },
      { ticker: "TSLA",  name: "Tesla",         price: "$392.74", change: "+0.10%", notable: false, insight: "Flat day; robotaxi narrative back in focus." },
      { ticker: "AAPL",  name: "Apple",         price: "$283.68", change: "+2.50%", notable: true,  insight: "Outperformer today on services momentum and buyback flow." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",       change: "—",      notable: false, insight: "Azure AI revenue remains the megacap anchor trade." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "—",      notable: false, insight: "Search + Gemini monetisation underpinning the bid." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "—",      notable: false, insight: "AWS reacceleration continues to anchor the print." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",       change: "—",      notable: false, insight: "Ad-tier and password-share monetisation still compounding." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "—",      notable: false, insight: "MI series share gains the swing factor for the stock." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "+1.00%", notable: true,  insight: "Q1 revenue +85% to $1.63B; commercial AI book accelerating." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",      notable: false, insight: "Cybersecurity bid intact; Falcon platform consolidating share." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "—",      notable: false, insight: "High-beta to BTC reclaim of $80k; watch trading-volume tape." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$177.59", change: "+2.50%", notable: false, insight: "Still 61% off July-2025 highs despite BTC rebound." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",      notable: false, insight: "AXON ad-engine remains the unique high-margin growth story." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$27.98",  change: "+1.00%", notable: false, insight: "Beaten-down AI server play; mkt cap collapsed to $16.7B." }
    ],
    trending: [
      { ticker: "SOXX", change: "+4.47%" },
      { ticker: "AAPL", change: "+2.50%" },
      { ticker: "BTC",  change: "+2.22%" },
      { ticker: "META", change: "-1.10%" },
      { ticker: "OIL",  change: "-1.97%" }
    ],
    verdict: "AI trade is alive: SOXX +4.47% with Nasdaq at a record says capex demand isn't done. Rotate toward semis and quality megacaps; trim parabolic single-names into strength. Avoid energy length while crude rolls over on talks-pause."
  },

  malaysia: {
    klci:   { value: "1,739.33", change: "-0.03%", context: "KLCI flat at Monday close, lagging the global rally. Tuesday should open firmer with Wall Street records and a sub-3.97 ringgit." },
    usdmyr: { value: "3.9649",   change: "-0.05%", signal: "Ringgit firm under 4.00 — exporter pressure." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "—", change: "—", insight: "OPR steady at 3.00% keeps NIM anchored; dividend yield core support." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "—", change: "—", insight: "Regional ASEAN exposure leveraged to Indonesia loan-growth recovery." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—", change: "—", insight: "Defensive bank with cleanest asset book; low-beta KLCI anchor." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—", change: "—", insight: "Capital-rich and one of the highest yields in the bank space." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—", change: "—", insight: "Data-centre power demand the structural growth lever." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—", change: "—", insight: "OSAT proxy to NVDA/AI capex; SOXX +4.47% is a clear positive setup." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—", change: "—", insight: "Tower monetisation and CelcomDigi synergies driving FCF expansion." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—", change: "—", insight: "Defensive ASEAN healthcare; medical-tourism tailwind intact." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—", change: "—", insight: "Digital concession pipeline still the earnings catalyst." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—", change: "—", insight: "5G wholesale clarity remains the rerating trigger." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No fresh Bursa IPO highlights surfaced in the morning scan." }
    ],
    verdict: "Ringgit under 3.97 is constructive for risk and import-heavy names. Inari is the highest-conviction trade today — Wall Street semis ripped 4.47% overnight. Tuesday Bursa should gap higher, with banks and semis leading."
  },

  news: [
    { headline: "S&P 500 closes at fresh record as oil retreats",                   source: "CNBC",          time: "10h ago", sentiment: "BULLISH", meaning: "Risk assets benefit from cheaper energy and easier yields." },
    { headline: "Bitcoin tops $80K, sparks $200M in short liquidations",            source: "Coin Republic", time: "8h ago",  sentiment: "BULLISH", meaning: "Forced buying confirms momentum has flipped back to bulls." },
    { headline: "Strategy (MSTR) posts $12.54B Q1 loss on BTC mark-down",            source: "CoinDesk",      time: "6h ago",  sentiment: "BEARISH", meaning: "Treasury accounting hit; underlying BTC stack still intact." },
    { headline: "Nasdaq notches record close on Apple-led tech bid",                source: "CNBC",          time: "9h ago",  sentiment: "BULLISH", meaning: "Megacap leadership and AI capex still driving the index." },
    { headline: "Crude oil slides nearly 2% on US-Iran talks pause",                source: "Reuters",       time: "12h ago", sentiment: "BULLISH", meaning: "Lower oil cools inflation fear and supports duration assets." },
    { headline: "VIX collapses below 18 as volatility sellers re-emerge",           source: "Bloomberg",     time: "9h ago",  sentiment: "BULLISH", meaning: "Cheap hedges; complacency risk if geopolitics flares again." },
    { headline: "Gold at $4,549 as Mideast hedging keeps bid intact",               source: "Investing",     time: "7h ago",  sentiment: "WATCH",   meaning: "Stocks and gold rallying together signals lingering tail risk." },
    { headline: "Ringgit holds firm under 3.97 as DXY stalls near 98.4",            source: "Bursa",         time: "5h ago",  sentiment: "NEUTRAL", meaning: "FX stability supports foreign inflows back into Bursa names." }
  ],

  goldSummary: {
    "Price":  { value: "$4,549.46", change: "+0.36%", note: "Bid on Mideast hedging flows" },
    "Open":   { value: "$4,533",    change: "", note: "Session open" },
    "High":   { value: "$4,565",    change: "", note: "Day high" },
    "Low":    { value: "$4,510",    change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,617" },
      { label: "R2",    value: "$4,591" },
      { label: "R1",    value: "$4,562" },
      { label: "Pivot", value: "$4,536" },
      { label: "S1",    value: "$4,507" },
      { label: "S2",    value: "$4,481" },
      { label: "S3",    value: "$4,452" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,591" },
      { label: "R2",    value: "$4,570" },
      { label: "R1",    value: "$4,557" },
      { label: "Pivot", value: "$4,536" },
      { label: "S1",    value: "$4,515" },
      { label: "S2",    value: "$4,502" },
      { label: "S3",    value: "$4,481" }
    ],
    camarilla: [
      { label: "R4", value: "$4,563" },
      { label: "R3", value: "$4,548" },
      { label: "R2", value: "$4,543" },
      { label: "R1", value: "$4,538" },
      { label: "S1", value: "$4,528" },
      { label: "S2", value: "$4,523" },
      { label: "S3", value: "$4,518" },
      { label: "S4", value: "$4,503" }
    ],
    note: "Gold trading above the $4,536 classic pivot keeps the near-term bias bullish toward R1 $4,562."
  }
};
