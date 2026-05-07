window.CRUCIX_DATA = {
  generated: "Thu, 07 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off tilt as BTC slips below $80K and oil drops on US-Iran de-escalation hopes, while gold pushes toward record highs.",

  macro: {
    dxy:      { value: "98.02",  change: "-0.01%", signal: "Soft dollar supports gold and EM FX." },
    gold:     { value: "$4,710", change: "+0.45%", signal: "Record-territory rally on geopolitical hedge." },
    oil:      { value: "$95.36", change: "+0.29%", signal: "Choppy; Iran talks weigh on premium." },
    silver:   { value: "—",      change: "—",      signal: "Tracks gold higher; supply tight." },
    yield10y: { value: "4.35%",  change: "-7bps",  signal: "Yields slip on softer US dollar." },
    vix:      { value: "17.39",  change: "+0.06%", signal: "Calm tape; complacency creeping in." },
    usdmyr:   { value: "4.08",   change: "-0.10%", signal: "Ringgit firmer on weaker dollar bias." },
    sp500:    { value: "7,365.12", change: "+1.46%", signal: "Records on Intel-led tech leadership." },
    verdict: "Soft DXY plus falling 10Y yield is a textbook risk-on backdrop, yet VIX 17 hides BTC's sharp reversal under $80K. Gold's surge says hedging demand is real even as equities print records. KLSE benefits from ringgit strength; Bursa banks and exporters skew positive."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC weakness opens altcoin rotation window." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$79,840", marketCap: "$1.58T", change1h: "N/A", change24h: "-1.76%", change7d: "N/A", insight: "BTC lost $80K after touching $82.5K mid-week as Iran rejected the US Strait of Hormuz proposal. ETF inflows of $2.7B over nine days remain the structural bid; $78K is the line in the sand." },
      { name: "Ethereum", symbol: "ETH", price: "$2,367.35", marketCap: "$285B", change1h: "N/A", change24h: "-1.90%", change7d: "N/A", insight: "ETH lagging BTC again as L2 fee revenue stays soft. A reclaim of $2,500 is needed to flip momentum back to bulls." },
      { name: "Solana",   symbol: "SOL", price: "$87.98",   marketCap: "$42B",  change1h: "N/A", change24h: "+2.00%", change7d: "N/A", insight: "SOL outperforming on memecoin and DEX volume rebound. $90 reclaim opens a path back to $100 psychological resistance." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.0939",      change24h: "-1.14%", note: "Range-bound; awaiting BTC direction." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000365",  change24h: "-10.0%", note: "Sharp flush; testing key support." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000630",  change24h: "-0.50%", note: "Coiling near upper consolidation band." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Bitcoin losing $80K with Iran headlines is a clear risk-off tell short-term. $78K is the BTC level that decides whether dips get bought or panic accelerates. Altseason is on hold until BTC stabilizes; SOL is the only bright spot."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,365.12",  change: "+1.46%" },
      { name: "Nasdaq",       value: "25,838.94", change: "+2.02%" },
      { name: "Dow",          value: "49,910.59", change: "+1.24%" },
      { name: "VIX",          value: "17.39",     change: "+0.06%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$674.66", change: "+1.46%", insight: "Tracks S&P records; broad index demand intact." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$696.01", change: "+2.02%", insight: "Tech leadership extends; mega-cap AI bid persistent." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "—",      insight: "Mirrors VOO; institutional liquidity benchmark." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Captures small-cap drag versus large-cap leadership." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",      insight: "High-beta growth basket sensitive to yield drift." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "—",      insight: "Intel-led rip lifted chips; AI capex theme intact." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$44.36",  change: "-1.76%", insight: "Tracks BTC weakness; flows still positive nine days." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Software and semis driving sector performance." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$440.19", change: "+0.45%", insight: "Record gold flows show real hedging bid emerging." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$604.96", change: "-0.89%", notable: false, insight: "Pulled back despite ad strength; awaiting AI capex digestion." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$196.50", change: "-1.00%", notable: false, insight: "Mild profit-taking after recent leadership; demand thesis intact." },
      { ticker: "TSLA",  name: "Tesla",         price: "$389.37", change: "-0.80%", notable: false, insight: "Range-bound; awaiting robotaxi rollout milestones." },
      { ticker: "AAPL",  name: "Apple",         price: "—",       change: "—",      notable: false, insight: "Services growth offsets hardware deceleration narrative." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",       change: "—",      notable: false, insight: "Azure AI revenue acceleration remains the key bull driver." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "—",      notable: false, insight: "Search ad resilience plus Gemini gains keep the bid healthy." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "—",      notable: false, insight: "AWS margins and retail efficiency drive earnings power." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",       change: "—",      notable: false, insight: "Recent analyst downgrade to Hold; ads tier still scaling." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "—",      notable: false, insight: "MI accelerator ramp is the swing factor versus NVDA." },
      { ticker: "PLTR",  name: "Palantir",      price: "$133.43", change: "+0.50%", notable: true,  insight: "Government and AIP commercial bookings keep the multiple stretched." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",      notable: false, insight: "Cyber spending resilient; Falcon platform consolidation ongoing." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "-4.00%", notable: false, insight: "Q1 loss reported; revenue tracks crypto trading tape." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "—",      notable: true,  insight: "Strategy hinted at potential BTC sales to fund dividends — narrative shift." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",      notable: false, insight: "AXON ad-engine remains the cleanest AI monetization story." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$25.26",  change: "+2.00%", notable: false, insight: "Q1 print solid (+343% NI); AI server demand backlog still long." }
    ],
    trending: [
      { ticker: "PEPE", change: "-10.00%" },
      { ticker: "COIN", change: "-4.00%"  },
      { ticker: "SMCI", change: "+2.00%"  },
      { ticker: "SOL",  change: "+2.00%"  },
      { ticker: "BTC",  change: "-1.76%"  }
    ],
    verdict: "AI mega-cap tape still leads with QQQ +2% and SPX records, but the divergence from BTC under $80K is the tell — risk parity is fragile. Own software (MSFT/GOOGL) and AI infra (NVDA/SMCI); avoid pure crypto-beta names like COIN and MSTR until BTC reclaims $82K. Gold and IBIT pair as the macro hedge."
  },

  malaysia: {
    klci:   { value: "—", change: "N/A", context: "KLCI level not confirmed in this morning's feed; ringgit strength and softer US yields support a constructive Bursa session bias." },
    usdmyr: { value: "4.08", change: "-0.10%", signal: "Ringgit firms on weak dollar, soft yields." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM11.20", change: "-0.71%", insight: "Largest bank by assets; OPR steady supports NIM defensiveness." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "RM7.78",  change: "+1.70%", insight: "Regional ASEAN exposure benefiting from softer US dollar." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",     price: "—",       change: "N/A",    insight: "Defensive bank; sticky retail deposits anchor earnings quality." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",        price: "—",       change: "N/A",    insight: "Highest dividend yield among local banks remains a floor." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",          price: "—",       change: "N/A",    insight: "Data-centre power offtake remains the structural growth lever." },
      { ticker: "INARI",  name: "Inari (0138.KL)",           price: "RM1.97",  change: "-3.90%", insight: "Sold off with NVDA/SOXX dip; semi cycle still constructive medium-term." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",          price: "—",       change: "N/A",    insight: "Restructuring story; XL-Smartfren value unlock pending." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)",  price: "—",       change: "N/A",    insight: "Defensive ASEAN healthcare; medical tourism volumes recovering." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",            price: "—",       change: "N/A",    insight: "Digital concession monopoly; Zetrix blockchain optionality remains." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",           price: "—",       change: "N/A",    insight: "5G wholesale model finalized; dividend yield supports floor." }
    ],
    ipos: [
      { name: "No new listing confirmed in today's feed", sector: "—", price: "—", listingDate: "—", status: "Watch", note: "Bursa IPO pipeline remains active but no new prospectus surfaced in this morning's headlines." }
    ],
    verdict: "Ringgit at 4.08 with soft DXY is supportive — bank stocks remain the cleanest play and CIMB's +1.70% leads. Inari's -3.90% drop tracks SOXX softness rather than fundamentals; bargain hunters likely accumulate. Bursa today should open mildly positive on US records, with banks and tech-exporters favored."
  },

  news: [
    { headline: "Bitcoin slips below $80,000 after Iran rejects US Strait of Hormuz proposal", source: "CoinPaper", time: "4h ago", sentiment: "BEARISH", meaning: "Geopolitical headlines outweigh ETF inflows; short-term BTC pressure." },
    { headline: "S&P 500 and Nasdaq close at record highs led by Intel rebound", source: "CNBC", time: "14h ago", sentiment: "BULLISH", meaning: "Mega-cap tech and semis extend leadership; broad risk-on tone." },
    { headline: "Strategy weighs selling bitcoin to fund dividends after Q1 loss", source: "CoinDesk", time: "2d ago", sentiment: "BEARISH", meaning: "MSTR shifts from never-sell stance; supply overhang risk emerges." },
    { headline: "Coinbase posts Q1 loss, shares fall 4% on weaker crypto prices", source: "CNBC/MSN", time: "1d ago", sentiment: "BEARISH", meaning: "Crypto tape weakness flows into exchange revenue exposure." },
    { headline: "Super Micro reports 343% net income surge on AI server demand", source: "Yahoo Finance", time: "1d ago", sentiment: "BULLISH", meaning: "AI capex cycle still translating to hardware vendor earnings." },
    { headline: "Gold climbs above $4,700 on geopolitical hedge demand", source: "FXStreet", time: "12h ago", sentiment: "BULLISH", meaning: "Record territory; safe-haven flows confirm hedging bid." },
    { headline: "US 10Y yield slips to 4.35% from 4.42% prior session", source: "Trading Economics", time: "10h ago", sentiment: "BULLISH", meaning: "Lower yields support equity multiples and EM FX strength." },
    { headline: "Initial jobless claims rise to 200,000 — softening labor signal", source: "CoinGape", time: "1d ago", sentiment: "WATCH", meaning: "Mild loosening; not yet recessionary but Fed-watchers note shift." }
  ],

  goldSummary: {
    "Price":  { value: "$4,710", change: "+0.45%", note: "Record-area rally on Iran hedge demand." },
    "Open":   { value: "$4,690", change: "", note: "Yesterday open" },
    "High":   { value: "$4,720", change: "", note: "Day high" },
    "Low":    { value: "$4,680", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,766.67" },
      { label: "R2",    value: "$4,743.33" },
      { label: "R1",    value: "$4,726.67" },
      { label: "Pivot", value: "$4,703.33" },
      { label: "S1",    value: "$4,686.67" },
      { label: "S2",    value: "$4,663.33" },
      { label: "S3",    value: "$4,646.67" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,743.33" },
      { label: "R2",    value: "$4,728.05" },
      { label: "R1",    value: "$4,718.61" },
      { label: "Pivot", value: "$4,703.33" },
      { label: "S1",    value: "$4,688.05" },
      { label: "S2",    value: "$4,678.61" },
      { label: "S3",    value: "$4,663.33" }
    ],
    camarilla: [
      { label: "R4", value: "$4,732.00" },
      { label: "R3", value: "$4,721.00" },
      { label: "R2", value: "$4,717.33" },
      { label: "R1", value: "$4,713.67" },
      { label: "S1", value: "$4,706.33" },
      { label: "S2", value: "$4,702.67" },
      { label: "S3", value: "$4,699.00" },
      { label: "S4", value: "$4,688.00" }
    ],
    note: "Gold $4,710 trading above classic pivot $4,703 — bullish bias intact while above $4,687 (S1)."
  }
};
