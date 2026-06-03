window.CRUCIX_DATA = {
  generated: "Wed, 03 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off cascade: BTC at multi-month lows, equities slipping as Iran tensions lift oil and yields.",

  macro: {
    dxy:      { value: "99.47",  change: "+0.25%", signal: "Dollar firms on safe-haven flows." },
    gold:     { value: "$4,494.44", change: "+0.21%", signal: "Gold consolidates near record highs." },
    oil:      { value: "$96.96", change: "+1.00%", signal: "Brent climbs on Iran conflict." },
    silver:   { value: "$54.20", change: "+0.40%", signal: "Silver tracks gold strength." },
    yield10y: { value: "4.49%", change: "+3.4bps",  signal: "Yields pressure stocks and crypto." },
    vix:      { value: "15.32",  change: "-2.67%", signal: "VIX low despite risk-off undertone." },
    usdmyr:   { value: "3.9861", change: "+0.10%", signal: "Ringgit steady against firmer dollar." },
    sp500:    { value: "7,553.68",  change: "-0.74%", signal: "Index slips from record highs." },
    verdict: "DXY firming with 10Y at 4.49% is a headwind for risk; VIX still complacent at 15 means more downside is possible. Gold near $4,500 confirms safe-haven bid amid Iran tensions and oil surge. KLSE faces import-cost pressure from oil; US tech vulnerable to yield squeeze; crypto reeling from rate risk-off."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady amid altcoin weakness." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$66,654", marketCap: "$1.32T", change1h: "N/A", change24h: "-7.00%", change7d: "N/A", insight: "BTC broke below $68K on Iran-driven risk-off and ETF outflows of $519M. Key support sits at $65K; loss opens path to $60K." },
      { name: "Ethereum", symbol: "ETH", price: "$1,844.52", marketCap: "$222B", change1h: "N/A", change24h: "-3.49%", change7d: "N/A", insight: "ETH tumbles below $1,900 as $90M leaves Ether ETFs. Reclaiming $2,000 is critical for bulls." },
      { name: "Solana",   symbol: "SOL", price: "$74.98", marketCap: "$36B",  change1h: "N/A", change24h: "-1.43%", change7d: "N/A", insight: "SOL outperforming peers on Hyperliquid-led on-chain activity. $70 must hold to avoid further decay." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065", change24h: "-4.50%", note: "Bearish flip below moving averages." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000094", change24h: "-3.20%", note: "Consolidates above key EMAs." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000614", change24h: "-2.80%", note: "Wedged between 50 and 100 EMA." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",    change24h: "N/A",  note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",    change24h: "N/A",  note: "Speculative SOL memecoin." }
    ],
    verdict: "Crypto is risk-off: BTC -7% in 24h, $1.3B liquidated, ETF outflows accelerating. Key BTC level is $65K — losing it targets $60K. No altseason signal; BTC dominance rising as alts bleed harder."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,553.68", change: "-0.74%" },
      { name: "Nasdaq",       value: "26,853.98", change: "-0.89%" },
      { name: "Dow",          value: "50,687.07", change: "-1.21%" },
      { name: "VIX",          value: "15.32", change: "-2.67%" },
      { name: "Russell 2000", value: "N/A",  change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—", change: "—", insight: "Tracks S&P; mirrors index -0.74% move." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$746.16", change: "+0.46%", insight: "Holds up on chip strength despite Nasdaq weakness." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$759.57", change: "+0.14%", insight: "Flat as megacaps offset broad weakness." },
      { ticker: "VTI",  name: "Total Market",      price: "—", change: "—", insight: "Total market tracks slightly worse than S&P." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—", change: "—", insight: "Innovation names pressured by yield spike." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$605.02", change: "+5.79%", insight: "Semis surge on agentic AI demand catalyst." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$37.03", change: "-7.00%", insight: "Outflows of $519M reflect BTC capitulation." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—", change: "—", insight: "Tech wobbles but semis lift sector floor." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$420.04", change: "+0.21%", insight: "Steady bid as safe-haven flows continue." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$597.63", change: "-0.47%", notable: false, insight: "Slips with megacap basket; AI ad pipeline still intact." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$221.72", change: "+1.50%", notable: true, insight: "Holds gains on agentic AI commentary and SMCI deal flow." },
      { ticker: "TSLA",  name: "Tesla",         price: "$421.60", change: "-1.20%", notable: false, insight: "Pressured by risk-off but robotaxi narrative intact." },
      { ticker: "AAPL",  name: "Apple",         price: "—", change: "—", notable: false, insight: "Trading near all-time high ahead of developer conference." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—", change: "—", notable: false, insight: "Defensive megacap holds in face of yield pressure." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—", change: "—", notable: false, insight: "Search-AI integration story remains catalyst." },
      { ticker: "AMZN",  name: "Amazon",        price: "$256.52", change: "-1.81%", notable: false, insight: "Consumer-spending fears weigh on retail leg." },
      { ticker: "NFLX",  name: "Netflix",       price: "$83.33", change: "-2.94%", notable: false, insight: "Post-split levels see profit-taking on risk-off." },
      { ticker: "AMD",   name: "AMD",           price: "—", change: "—", notable: false, insight: "Likely catches semi tailwind from SOXX +5.79%." },
      { ticker: "PLTR",  name: "Palantir",      price: "$149.99", change: "-2.00%", notable: false, insight: "High-multiple AI name vulnerable to yield surge." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—", change: "—", notable: false, insight: "Cybersecurity remains defensive growth pocket." },
      { ticker: "COIN",  name: "Coinbase",      price: "—", change: "—", notable: false, insight: "BTC -7% likely drags Coinbase mid-single digits." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—", change: "—", notable: false, insight: "Levered BTC proxy; expect amplified downside today." },
      { ticker: "APP",   name: "AppLovin",      price: "—", change: "—", notable: false, insight: "Ad-tech leader; sentiment-sensitive in risk-off." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$47.86", change: "+4.50%", notable: true, insight: "Mizuho target hike on agentic AI demand; +48% YTD." }
    ],
    trending: [
      { ticker: "SOXX", change: "+5.79%" },
      { ticker: "SMCI", change: "+4.50%" },
      { ticker: "NFLX", change: "-2.94%" },
      { ticker: "AMZN", change: "-1.81%" },
      { ticker: "PLTR", change: "-2.00%" }
    ],
    verdict: "AI trade splitting: hardware (semis, SMCI) rips on agentic-AI demand, software (PLTR) sells on yield risk. Rotation favors physical AI infrastructure over high-multiple growth. Own semis and selective megacaps; avoid duration-sensitive AI software until 10Y stabilizes."
  },

  malaysia: {
    klci:   { value: "1,612.40", change: "-0.30%", context: "KLCI eased on regional risk-off and oil cost pressures. Wednesday open faces headwinds from US weakness and BTC slide." },
    usdmyr: { value: "3.9861", change: "+0.10%", signal: "Ringgit holds despite stronger dollar." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM10.56", change: "-0.80%", insight: "OPR steady at 3.00%; NIM stable but loan growth moderating." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "RM7.40", change: "-1.10%", insight: "Regional banking play with ASEAN tailwinds; Indonesia exposure key." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",   price: "—", change: "—", insight: "Defensive bank with strongest asset quality; yield play under risk-off." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",      price: "—", change: "—", insight: "Mid-cap bank; capital-return story intact." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",        price: "—", change: "—", insight: "Utility cushioned from market vol; data-center demand structural tailwind." },
      { ticker: "INARI",  name: "Inari (0138.KL)",         price: "RM2.35", change: "+0.40%", insight: "Tracks NVDA/semis cycle; SOXX +5.79% reading supportive." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",        price: "—", change: "—", insight: "Telco consolidation theme with XL-Smartfren overhang." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—", change: "—", insight: "Defensive medical-tourism beneficiary; FX-resilient earnings." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",          price: "—", change: "—", insight: "Digital services franchise; concession renewals key catalyst." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",         price: "—", change: "—", insight: "5G rollout play with steady dividend yield." }
    ],
    ipos: [
      { name: "Quiet pipeline", sector: "—", price: "—", listingDate: "—", status: "Watching", note: "No major Bursa IPO opening this week. Pipeline focus shifts to second-half 2026 mainboard listings." }
    ],
    verdict: "Ringgit at 3.99 holds firm vs DXY at 99.47 — Malaysia's twin surpluses still a buffer. Best tactical pick: Inari, riding semi cycle confirmed by SOXX surge. Bursa Wednesday: expect cautious open with banks heavy, semis/oil & gas as bright spots."
  },

  news: [
    { headline: "Bitcoin slides below $66K as high-conviction holders turn sellers", source: "CNBC", time: "3h ago", sentiment: "BEARISH", meaning: "Long-term holders distributing signals deeper drawdown." },
    { headline: "Dow closes 600 points lower on rising yields, oil pressure", source: "CNBC", time: "12h ago", sentiment: "BEARISH", meaning: "Yield and oil double whammy hurts risk assets." },
    { headline: "Oil rallies on Iran conflict escalation; Brent above $96", source: "Yahoo Finance", time: "6h ago", sentiment: "WATCH", meaning: "Geopolitics drives inflation, complicates Fed path." },
    { headline: "Super Micro target raised by Mizuho on agentic AI demand", source: "Stocktwits", time: "8h ago", sentiment: "BULLISH", meaning: "Server demand confirms AI capex cycle still strong." },
    { headline: "Spot Bitcoin ETFs see $519M outflows; Ethereum loses $90M", source: "CoinDesk", time: "5h ago", sentiment: "BEARISH", meaning: "Institutional capitulation accelerating across crypto products." },
    { headline: "10-year Treasury yield jumps to 4.49% on Middle East risk", source: "CNBC", time: "10h ago", sentiment: "BEARISH", meaning: "Rising rates pressure high-multiple equities and crypto." },
    { headline: "Gold holds near $4,500 as safe-haven flows persist", source: "Investing.com", time: "4h ago", sentiment: "BULLISH", meaning: "Bullion remains safest hedge against geopolitical risk." },
    { headline: "Ringgit steady at 3.99 vs USD despite dollar firmness", source: "Bank Negara Malaysia", time: "2h ago", sentiment: "NEUTRAL", meaning: "BNM stance keeps MYR resilient amid global risk-off." }
  ],

  goldSummary: {
    "Price":  { value: "$4,494.44", change: "+0.21%", note: "Safe-haven bid intact." },
    "Open":   { value: "$4,484.86", change: "", note: "" },
    "High":   { value: "$4,541.53", change: "", note: "Day high" },
    "Low":    { value: "$4,463.24", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,614.53" },
      { label: "R2",    value: "$4,578.03" },
      { label: "R1",    value: "$4,536.24" },
      { label: "Pivot", value: "$4,499.74" },
      { label: "S1",    value: "$4,457.95" },
      { label: "S2",    value: "$4,421.45" },
      { label: "S3",    value: "$4,379.66" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,578.03" },
      { label: "R2",    value: "$4,548.12" },
      { label: "R1",    value: "$4,529.65" },
      { label: "Pivot", value: "$4,499.74" },
      { label: "S1",    value: "$4,469.83" },
      { label: "S2",    value: "$4,451.36" },
      { label: "S3",    value: "$4,421.45" }
    ],
    camarilla: [
      { label: "R4", value: "$4,537.50" },
      { label: "R3", value: "$4,515.97" },
      { label: "R2", value: "$4,508.79" },
      { label: "R1", value: "$4,501.62" },
      { label: "S1", value: "$4,487.26" },
      { label: "S2", value: "$4,480.09" },
      { label: "S3", value: "$4,472.91" },
      { label: "S4", value: "$4,451.38" }
    ],
    note: "Gold at $4,494 sits just below classic pivot $4,499 — modestly bearish; reclaim above triggers bullish bias toward $4,536."
  }
};
