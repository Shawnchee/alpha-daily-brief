window.CRUCIX_DATA = {
  generated: "Thu, 21 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on US tape on Middle East peace hopes, but rising yields cap upside and pressure Asia.",

  macro: {
    dxy:      { value: "99.19",   change: "+0.10%", signal: "Dollar firm; weighs on EM and gold." },
    gold:     { value: "$4,490",  change: "+0.19%", signal: "Range-bound near $4,500 after hawkish FOMC." },
    oil:      { value: "$101.20", change: "+3.00%", signal: "Spikes on Strait of Hormuz risk." },
    silver:   { value: "—",       change: "—",      signal: "Compressed range; awaiting metals catalyst." },
    yield10y: { value: "4.62%",   change: "+5bps",  signal: "Hawkish; pressures duration and growth." },
    vix:      { value: "16.76",   change: "-3.90%", signal: "Complacent; vol bid fading on peace hopes." },
    usdmyr:   { value: "3.9621",  change: "+0.05%", signal: "Ringgit soft on DXY firmness." },
    sp500:    { value: "7,445.72", change: "+0.17%", signal: "Records hold; breadth narrow." },
    verdict: "DXY firm and 10Y at 4.62% is a clear hawkish combo, but VIX collapse and gold stable signal complacency winning short-term. Crypto and growth tech remain bid on peace-deal optimism, though any reversal in Mideast tone hits hardest. KLSE faces another soft session as ringgit stays pressured and foreign outflows persist."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leadership intact, alts lagging." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$77,500", marketCap: "$1.54T", change1h: "N/A", change24h: "-1.04%", change7d: "N/A", insight: "BTC consolidates near $77.5K with bears defending $80K resistance. ETF outflows and hawkish Fed minutes keep momentum capped." },
      { name: "Ethereum", symbol: "ETH", price: "$2,282.84", marketCap: "$275B",  change1h: "N/A", change24h: "-1.50%", change7d: "N/A", insight: "ETH underperforms BTC; staking yields compete with 4.62% Treasuries. Layer-2 narrative needs a fresh catalyst to reignite." },
      { name: "Solana",   symbol: "SOL", price: "$86.30",   marketCap: "$41B",   change1h: "N/A", change24h: "-2.10%", change7d: "N/A", insight: "SOL holds key $85 support but memecoin activity has cooled materially. Network upgrades remain the bullish wildcard." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.105",     change24h: "+1.20%", note: "Reclaims 200-day EMA support." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000037", change24h: "+0.80%", note: "Nears breakout resistance zone." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000058", change24h: "+0.30%", note: "Stabilizes at lower boundary." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",        change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",        change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Crypto is in neutral consolidation: BTC's $77.5K shelf is the line in the sand, with ETF flows the swing factor. Altseason remains dormant — SOL and ETH need BTC to clear $80K first. Memecoin breadth is improving slightly but volumes remain thin."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,445.72",  change: "+0.17%" },
      { name: "Nasdaq",       value: "26,293.10", change: "+0.09%" },
      { name: "Dow",          value: "50,285.66", change: "+0.55%" },
      { name: "VIX",          value: "16.76",     change: "-3.90%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$681.57", change: "+1.03%", insight: "Tracks SPX strength; broad large-cap exposure intact." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$713.15", change: "+1.66%", insight: "Big tech leadership; AI capex narrative still driving." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$741.25", change: "+1.02%", insight: "Highest-liquidity SPX proxy; record-level holding." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Total-market exposure tracks SPX with smid-cap tilt." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",      insight: "High-beta growth basket; sensitive to yield moves." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$520.31", change: "+4.74%", insight: "AMD-led rally lifts chips broadly ahead of NVDA earnings." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$43.06",  change: "-1.04%", insight: "Tracks BTC; ETF flows turning cautious near $77K." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Tech sector trades with QQQ; AI capex tailwind persists." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$419.63", change: "+0.19%", insight: "Mirrors spot gold; central-bank bid still supportive." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$597.16", change: "-0.90%", notable: false, insight: "Capex worries cap upside despite ad-tech strength." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$219.45", change: "+1.20%", notable: true,  insight: "All eyes on Wednesday earnings; high bar set." },
      { ticker: "TSLA",  name: "Tesla",         price: "$414.75", change: "+0.50%", notable: false, insight: "Robotaxi narrative intact; delivery data the next catalyst." },
      { ticker: "AAPL",  name: "Apple",         price: "$302.25", change: "+1.10%", notable: false, insight: "Pushes toward 52w high on services strength." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$418.36", change: "+0.40%", notable: false, insight: "Azure AI demand steady; Copilot adoption broadening." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$387.39", change: "+1.20%", notable: false, insight: "Search resilient; Gemini gains share vs OpenAI." },
      { ticker: "AMZN",  name: "Amazon",        price: "$268.87", change: "+0.80%", notable: false, insight: "AWS growth re-accelerating; retail margins firm." },
      { ticker: "NFLX",  name: "Netflix",       price: "$89.61",  change: "+1.39%", notable: false, insight: "Post-split price; ad-tier ARPU improving steadily." },
      { ticker: "AMD",   name: "AMD",           price: "$447.58", change: "+8.10%", notable: true,  insight: "Agentic AI server demand drives blowout guidance." },
      { ticker: "PLTR",  name: "Palantir",      price: "$137.15", change: "+1.50%", notable: false, insight: "Government and commercial AIP deals keep compounding." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "$644.86", change: "+5.39%", notable: true,  insight: "Cantor/Stifel target hikes ahead of June 3 earnings." },
      { ticker: "COIN",  name: "Coinbase",      price: "$190.40", change: "-0.47%", notable: false, insight: "Tracks BTC weakness; subscription revenue offsets." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$165.81", change: "-1.80%", notable: false, insight: "BTC proxy; accumulation strategy unchanged." },
      { ticker: "APP",   name: "AppLovin",      price: "$485.16", change: "+0.60%", notable: false, insight: "Ad-tech AXON 2 monetization remains best-in-class." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$33.48",  change: "-0.90%", notable: false, insight: "AI server pricing pressure weighs despite volume growth." }
    ],
    trending: [
      { ticker: "AMD",  change: "+8.10%" },
      { ticker: "CRWD", change: "+5.39%" },
      { ticker: "SOXX", change: "+4.74%" },
      { ticker: "NVDA", change: "+1.20%" },
      { ticker: "AAPL", change: "+1.10%" }
    ],
    verdict: "AI trade roars back with AMD blowout and CRWD upgrade — semis and security are the leadership pairs to own. Rotation favors mega-cap quality (AAPL, GOOGL, MSFT) over high-beta speculation while yields stay sticky. Avoid duration-sensitive names and unprofitable growth until 10Y rolls below 4.5%."
  },

  malaysia: {
    klci:   { value: "1,717.69", change: "-0.56%", context: "FBM KLCI extended losing streak to a seventh session at intraday lows. Sentiment cautious into Thursday open with foreign net selling persistent." },
    usdmyr: { value: "3.9621",   change: "+0.05%", signal: "Ringgit drifts weaker; BNM tolerance intact." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM11.06", change: "-0.18%", insight: "OPR steady at 3.00%; NIM stable, dividend support intact." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "—",        change: "—",      insight: "Regional ASEAN exposure helps but ringgit drag persists." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "RM4.77",  change: "-0.21%", insight: "Defensive mortgage book; cheapest large-cap bank by P/B." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",        change: "—",      insight: "Highest dividend yield among banks; capital ratios strong." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",        change: "—",      insight: "Data-center power demand thesis intact under NETR." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "RM1.87",  change: "0.00%",  insight: "Apple/Broadcom RF cycle stabilizing; NVDA earnings the swing factor." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",        change: "—",      insight: "Edotco monetization and CelcomDigi synergies in focus." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",        change: "—",      insight: "Pan-Asia hospital network; defensive earnings stream." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",        change: "—",      insight: "Digital concession renewals dominate the narrative." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",        change: "—",      insight: "5G wholesale economics under second-network framework." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No notable Bursa IPO catalyst flagged in overnight search results." }
    ],
    verdict: "Ringgit at 3.96 is comfortable but stuck while DXY firms. Inari is the best risk-reward play into NVDA earnings, with semis re-rating likely on positive guide. Bursa likely opens soft Thursday — wait for KLCI to base near 1,710 before adding cyclicals."
  },

  news: [
    { headline: "FBM KLCI extends losing streak to seventh session, closes at intraday low", source: "The Star",      time: "10h ago", sentiment: "BEARISH", meaning: "Foreign selling persists; sentiment fragile into Thursday open." },
    { headline: "Dow rises more than 270 points to close at a record as oil prices pull back", source: "CNBC",         time: "12h ago", sentiment: "BULLISH", meaning: "Risk-on tone supported by easing Middle East tensions." },
    { headline: "Bitcoin Holds Near $77,500 as Trump Orders Fed Crypto Review",                source: "OpenPR",        time: "8h ago",  sentiment: "WATCH",   meaning: "Regulatory review could be inflection point for crypto policy." },
    { headline: "AMD Q1 revenue jumps 38% on agentic AI server demand",                         source: "24/7 Wall St.", time: "9h ago",  sentiment: "BULLISH", meaning: "AI capex broadening beyond Nvidia confirms cycle." },
    { headline: "CrowdStrike target raised to $700 by Cantor ahead of earnings",                source: "Investing.com", time: "11h ago", sentiment: "BULLISH", meaning: "Cybersecurity spending resilience reinforced by Street upgrades." },
    { headline: "US 10-year Treasury yield rises to 4.62% on hawkish Fed minutes",              source: "Reuters",       time: "14h ago", sentiment: "BEARISH", meaning: "Higher yields pressure duration, growth, and emerging markets." },
    { headline: "WTI crude jumps 3% on Strait of Hormuz uncertainty",                            source: "OilPrice",      time: "13h ago", sentiment: "WATCH",   meaning: "Oil spike could reignite inflation and Fed hawkishness." },
    { headline: "Bursa Malaysia ends lower on cautious sentiment as foreigners sell",            source: "FMT",           time: "10h ago", sentiment: "BEARISH", meaning: "Outflows continue; ringgit weakness compounds equity drag." }
  ],

  goldSummary: {
    "Price":    { value: "$4,490", change: "+0.19%", note: "Holds above $4,450 key support." },
    "Open":     { value: "$4,482", change: "",       note: "" },
    "High":     { value: "$4,499", change: "",       note: "Day high" },
    "Low":      { value: "$4,450", change: "",       note: "Day low" },
    "52W High": { value: "N/A",    change: "",       note: "" },
    "52W Low":  { value: "N/A",    change: "",       note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,558.34" },
      { label: "R2",    value: "$4,528.67" },
      { label: "R1",    value: "$4,509.34" },
      { label: "Pivot", value: "$4,479.67" },
      { label: "S1",    value: "$4,460.34" },
      { label: "S2",    value: "$4,430.67" },
      { label: "S3",    value: "$4,411.34" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,528.67" },
      { label: "R2",    value: "$4,509.95" },
      { label: "R1",    value: "$4,498.39" },
      { label: "Pivot", value: "$4,479.67" },
      { label: "S1",    value: "$4,460.95" },
      { label: "S2",    value: "$4,449.39" },
      { label: "S3",    value: "$4,430.67" }
    ],
    camarilla: [
      { label: "R4", value: "$4,516.95" },
      { label: "R3", value: "$4,503.48" },
      { label: "R2", value: "$4,498.98" },
      { label: "R1", value: "$4,494.49" },
      { label: "S1", value: "$4,485.51" },
      { label: "S2", value: "$4,481.02" },
      { label: "S3", value: "$4,476.52" },
      { label: "S4", value: "$4,463.05" }
    ],
    note: "Gold at $4,490 sits above the $4,479.67 classic pivot — mildly bullish bias as long as $4,450 support holds."
  }
};
