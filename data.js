window.CRUCIX_DATA = {
  generated: "Sun, 17 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off weekend after Friday's hot inflation prints crushed rate-cut hopes; BTC sub-$80K, gold cracked $4,600, oil surging on Hormuz risk.",

  macro: {
    dxy:      { value: "99.45", change: "+0.62%", signal: "Highest weekly gain in two months." },
    gold:     { value: "$4,564", change: "-1.83%", signal: "Breaks $4,600; yields and dollar bite." },
    oil:      { value: "$109.40", change: "+3.85%", signal: "Hormuz still closed; supply fear extreme." },
    silver:   { value: "$77.52", change: "-10.61%", signal: "Brutal liquidation; industrial demand fear." },
    yield10y: { value: "4.59%", change: "+9bps", signal: "Highest since Feb 2025; rate-cut hopes dead." },
    vix:      { value: "18.43", change: "+6.78%", signal: "Climbing but not yet stress levels." },
    usdmyr:   { value: "3.93",  change: "+0.18%", signal: "Ringgit weak as DXY rips higher." },
    sp500:    { value: "7,408.50", change: "-1.24%", signal: "Inflation knocks records off perch." },
    verdict: "DXY surging with 10Y at 4.59% and gold cracking is textbook hawkish repricing — risk assets bleed. VIX at 18 says stress is building but not panic yet, while oil at $109 keeps inflation sticky. Crypto and tech most exposed; KLSE faces ringgit drag plus US sell-side spillover."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC weakness suggests dominance softening." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$77,977", marketCap: "$1.54T", change1h: "N/A", change24h: "-0.31%", change7d: "N/A", insight: "ETF outflows hit $1B in a week as institutions de-risk into hot CPI. Key level is $76K support; below opens $70K." },
      { name: "Ethereum", symbol: "ETH", price: "$2,282.84", marketCap: "$275B", change1h: "N/A", change24h: "-2.10%", change7d: "N/A", insight: "ETH lagging BTC dominance; $2,200 is the line in sand. Staking flows have cooled with yields rising elsewhere." },
      { name: "Solana",   symbol: "SOL", price: "$86.50", marketCap: "$41B", change1h: "N/A", change24h: "-3.00%", change7d: "N/A", insight: "SOL down 3% as memecoin froth deflates with risk-off tape. Watch $80 — losing it triggers altcoin cascade." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",     change24h: "-2.40%", note: "Bearish bias under EMAs." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000089",  change24h: "-3.10%", note: "Above EMAs but bearish 200." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000632", change24h: "-2.80%", note: "Consolidating between key EMAs." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Clear risk-off: BTC under $80K with $1B ETF exits and Iran-Hormuz tape. The $76K level is the must-hold — below opens $70K and the whole altcoin complex unwinds. No altseason signal while BTC bleeds and dominance holds firm."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,408.50",  change: "-1.24%" },
      { name: "Nasdaq",       value: "26,225.15", change: "-1.54%" },
      { name: "Dow",          value: "49,526.17", change: "-1.07%" },
      { name: "VIX",          value: "18.43",     change: "+6.78%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—",       change: "Fri close", insight: "Tracks SPX -1.24% Friday on hot inflation." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$711.23", change: "Fri close", insight: "Tech-heavy QQQ took the worst of it as yields ripped." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "Fri close", insight: "Mirrors VOO; record close gave way to inflation reality." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "Fri close", insight: "Broad-market wrap reflects the 1%+ Friday rout." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "Fri close", insight: "Long-duration growth basket gets crushed at 4.59% 10Y." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "Fri close", insight: "Semis led losses with NVDA and AMD dragging." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$43.32",  change: "-0.31%",    insight: "Spot BTC proxy bleeding with $1B in weekly outflows." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "Fri close", insight: "Tech selectorate under fire from rate repricing." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$426.54", change: "-1.83%",    insight: "Gold proxy slammed as dollar and yields overpower haven bid." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$614.23", change: "-1.80%", notable: false, insight: "Mega-cap ad name held up better than semis but still red." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$225.32", change: "-3.40%", notable: true,  insight: "Led Dow losses as H200 China clearance offset by rate fears." },
      { ticker: "TSLA",  name: "Tesla",         price: "$422.24", change: "-2.60%", notable: false, insight: "High-beta growth name punished by 10Y at 4.59%." },
      { ticker: "AAPL",  name: "Apple",         price: "$300.23", change: "-1.20%", notable: false, insight: "Defensive mega-cap held the $300 handle on a rough tape." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$421.92", change: "-1.50%", notable: false, insight: "Azure AI story intact but valuation pressured by yields." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$393.32", change: "-1.40%", notable: false, insight: "Search remains a cash machine even in rate-shock tape." },
      { ticker: "AMZN",  name: "Amazon",        price: "$264.14", change: "-2.10%", notable: false, insight: "Retail consumer concerns amplify the rate-driven hit." },
      { ticker: "NFLX",  name: "Netflix",       price: "$87.02",  change: "-1.90%", notable: false, insight: "Subscriber growth narrative tested by macro pullback." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "-5.70%", notable: true,  insight: "Worst-in-class semi loss on demand concerns and rate shock." },
      { ticker: "PLTR",  name: "Palantir",      price: "$133.99", change: "-3.20%", notable: false, insight: "AI-defense darling sold off with the high-multiple cohort." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "Fri close", notable: false, insight: "Cyber spend remains secular but duration risk hurts the multiple." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "Fri close", notable: false, insight: "High-beta to BTC tape — bleeds with the $1B ETF exits." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "Fri close", notable: false, insight: "Leveraged BTC proxy still adding to treasury per recent filings." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "Fri close", notable: false, insight: "Adtech momentum name caught in the high-duration sell-down." },
      { ticker: "SMCI",  name: "Super Micro",   price: "—",       change: "Fri close", notable: false, insight: "AI server cycle name caught in the semi-complex unwind." }
    ],
    trending: [
      { ticker: "AMD",  change: "-5.70%" },
      { ticker: "NVDA", change: "-3.40%" },
      { ticker: "PLTR", change: "-3.20%" },
      { ticker: "TSLA", change: "-2.60%" },
      { ticker: "AMZN", change: "-2.10%" }
    ],
    verdict: "AI trade is wobbling — not breaking — but at 10Y 4.59% the long-duration premium has to compress. Rotation favors defensives, energy, and quality mega-cap cash flow (AAPL, MSFT) over high-multiple semis and unprofitable growth. Avoid leveraged BTC proxies and high-beta semis until yields stabilize."
  },

  malaysia: {
    klci:   { value: "—", change: "N/A (Fri close)", context: "KLCI Friday close not captured. Monday opens with ringgit drag, oil-up tailwind for energy names, and US risk-off spillover into banks and tech-linked exporters." },
    usdmyr: { value: "3.93", change: "+0.18%", signal: "Ringgit weak as DXY rips higher." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "—", change: "N/A (Fri close)", insight: "OPR steady; net interest margin defensible despite ringgit weakness." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "—", change: "N/A (Fri close)", insight: "Regional banking franchise benefits from ASEAN trade exposure." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—", change: "N/A (Fri close)", insight: "Defensive retail-banking play with lowest credit cost in sector." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—", change: "N/A (Fri close)", insight: "Cheapest big-cap bank on P/B; rights-issue overhang lingering." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—", change: "N/A (Fri close)", insight: "Data-centre demand and ICPT mechanism keep utility narrative bid." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—", change: "N/A (Fri close)", insight: "Tracks semi-cycle and NVDA — Friday's US semi rout is negative read." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—", change: "N/A (Fri close)", insight: "Telco consolidation play with XL-Smart Indonesia merger narrative." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—", change: "N/A (Fri close)", insight: "Defensive healthcare name with regional patient-volume tailwind." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—", change: "N/A (Fri close)", insight: "Digital-services moat from government concessions still intact." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—", change: "N/A (Fri close)", insight: "5G DNB single-network economics improving postpaid yield." }
    ],
    ipos: [
      { name: "Pipeline quiet", sector: "—", price: "—", listingDate: "—", status: "—", note: "No fresh Bursa IPO prospectus filings captured this run. Watch ACE Market pipeline for Q2 listings as KLCI risk premium widens." }
    ],
    verdict: "Ringgit at 3.93 reflects DXY strength, not Malaysia weakness — manageable. Best risk-reward: Tenaga on data-centre theme; Inari most at risk from Friday's US semi sell-off. Bursa Monday likely opens softer on US spillover; banks and defensives should hold up best."
  },

  news: [
    { headline: "S&P 500 falls 1.24% as hot CPI and PPI prints kill rate-cut hopes",                source: "CNBC",          time: "2d ago", sentiment: "BEARISH", meaning: "Hawkish repricing pressures all duration-sensitive assets near-term." },
    { headline: "10-year Treasury yield jumps to 4.59%, highest since February 2025",                source: "Advisor Persp.", time: "2d ago", sentiment: "BEARISH", meaning: "Rate shock hits growth equities, gold, and crypto valuations." },
    { headline: "Gold breaks below $4,600 as dollar and yields overpower haven demand",              source: "Kitco",         time: "2d ago", sentiment: "BEARISH", meaning: "Real-yield surge crushes non-yielding assets despite Iran risk." },
    { headline: "Oil surges to $109 as Strait of Hormuz remains closed amid US-Iran friction",       source: "Sunday Guardian", time: "2d ago", sentiment: "WATCH",   meaning: "Energy tailwind but stagflation risk feeds into H2 outlook." },
    { headline: "Bitcoin spot ETFs lose $1B in a week as BTC slips under $80K",                      source: "MEXC",          time: "1d ago", sentiment: "BEARISH", meaning: "Institutional de-risking is the dominant crypto narrative now." },
    { headline: "Bitcoin price falls as Iran Strait warning hits crypto risk appetite",              source: "Coin Republic",  time: "1d ago", sentiment: "BEARISH", meaning: "Geopolitics now layering on top of the rate shock for digital assets." },
    { headline: "Nvidia reportedly clears H200 export to China, market cap touches $5.7T",           source: "Meyka",         time: "2d ago", sentiment: "BULLISH", meaning: "Structural AI thesis intact even as tape sells off." },
    { headline: "Dollar set for biggest weekly gain in two months as rate differentials widen",      source: "Reuters",       time: "2d ago", sentiment: "BEARISH", meaning: "DXY strength pressures EM FX including ringgit into Monday." }
  ],

  goldSummary: {
    "Price":    { value: "$4,564", change: "-1.83%", note: "Cracked $4,600 on hawkish repricing." },
    "Open":     { value: "$4,649", change: "", note: "Prior close as Friday open." },
    "High":     { value: "$4,650", change: "", note: "Day high" },
    "Low":      { value: "$4,540", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,739.34" },
      { label: "R2",    value: "$4,694.67" },
      { label: "R1",    value: "$4,629.34" },
      { label: "Pivot", value: "$4,584.67" },
      { label: "S1",    value: "$4,519.34" },
      { label: "S2",    value: "$4,474.67" },
      { label: "S3",    value: "$4,409.34" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,694.67" },
      { label: "R2",    value: "$4,652.65" },
      { label: "R1",    value: "$4,626.69" },
      { label: "Pivot", value: "$4,584.67" },
      { label: "S1",    value: "$4,542.65" },
      { label: "S2",    value: "$4,516.69" },
      { label: "S3",    value: "$4,474.67" }
    ],
    camarilla: [
      { label: "R4", value: "$4,624.50" },
      { label: "R3", value: "$4,594.25" },
      { label: "R2", value: "$4,584.17" },
      { label: "R1", value: "$4,574.08" },
      { label: "S1", value: "$4,553.92" },
      { label: "S2", value: "$4,543.83" },
      { label: "S3", value: "$4,533.75" },
      { label: "S4", value: "$4,503.50" }
    ],
    note: "Gold at $4,564 sits below the classic pivot of $4,584.67 — bearish bias until reclaimed."
  }
};
