window.CRUCIX_DATA = {
  generated: "Mon, 20 Apr 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off tone as Iran/Hormuz tensions resurface, lifting gold and oil while equities hover near recent highs.",

  macro: {
    dxy:      { value: "99.20",   change: "+0.15%", signal: "Dollar firm on haven demand flows." },
    gold:     { value: "$4,809",  change: "-0.51%", signal: "Profit-taking after Hormuz spike higher." },
    oil:      { value: "$78.40",  change: "+3.20%", signal: "Hormuz shock reignites supply fears again." },
    silver:   { value: "$48.15",  change: "-0.40%", signal: "Tracking gold; industrial demand still firm." },
    yield10y: { value: "4.29%",   change: "+2bps",  signal: "Yields firm on sticky inflation worries." },
    vix:      { value: "19.98",   change: "+14.30%",signal: "Volatility pop on geopolitical risk flare." },
    usdmyr:   { value: "3.9525",  change: "+0.06%", signal: "Ringgit flat; DXY bid limits upside." },
    sp500:    { value: "7,126.06",change: "+1.20%", signal: "Bulls defend record zone into open." },
    verdict: "Dollar and yields holding firm while gold consolidates and VIX pops signals a cautious risk tone, not panic. Crypto can still grind higher on BTC ETF flows but expect choppy tape. KLSE should open defensive with ringgit contained near 3.95."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leadership intact; alts lag broadly." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$76,500", marketCap: "$1.51T", change1h: "N/A", change24h: "+1.20%", change7d: "N/A", insight: "BTC reclaimed $76.5K after dipping toward $75K on Iran/Hormuz risk. Watch $79K breakout; loss of $74K reopens $70K." },
      { name: "Ethereum", symbol: "ETH", price: "$2,294", marketCap: "$276B",   change1h: "N/A", change24h: "-0.80%", change7d: "N/A", insight: "ETH lagging BTC as ETH/BTC ratio stays pinned near cycle lows. A reclaim of $2,400 is needed to change the trend." },
      { name: "Solana",   symbol: "SOL", price: "$84.40",  marketCap: "$41B",    change1h: "N/A", change24h: "-2.00%", change7d: "N/A", insight: "SOL rolling over with alts under pressure and ecosystem memecoins fading. $80 is the must-hold; losing it targets $72." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.0939",       change24h: "-1.14%", note: "Sluggish; awaits BTC breakout confirmation." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000334",   change24h: "-2.94%", note: "Bleeding; ETH weakness drags it lower." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000539",   change24h: "-2.05%", note: "Fading volume; no catalyst in sight." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",            change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",            change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on is fragile — BTC holding $75K is the only thing keeping dip-buyers in control. A clean break above $79K opens altseason; a loss of $74K kills it. Memes broadly weak, wait for BTC to lead."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,126.06",  change: "+1.20%" },
      { name: "Nasdaq",       value: "24,468.48", change: "+1.52%" },
      { name: "Dow",          value: "49,447.43", change: "+1.79%" },
      { name: "VIX",          value: "19.98",     change: "+14.30%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$652.78", change: "+1.20%", insight: "Core S&P exposure holding record-zone levels on strong breadth." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$648.97", change: "+1.52%", insight: "Mega-cap tech leading on AI capex and earnings momentum." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "—",       insight: "Tracks S&P 500; same risk-on posture as VOO today." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",       insight: "Broad-market proxy benefiting from small-cap catch-up potential." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",       insight: "High-beta innovation basket sensitive to yield direction." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$417.55", change: "+2.10%", insight: "Semis leading tape on NVDA strength and AI infra demand." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$43.25",  change: "+1.20%", insight: "Spot BTC flows steady; tracks BTC near $76.5K." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",       insight: "Tech sector proxy riding the AI and mega-cap wave." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$449.44", change: "-0.51%", insight: "Gold proxy consolidating after Hormuz-driven spike." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$688.55", change: "+1.73%", notable: true,  insight: "AI ad-targeting tailwind keeps Meta a top large-cap growth pick." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$201.68", change: "+1.68%", notable: true,  insight: "AI infra leader; Blackwell cycle and data-center demand still dominant." },
      { ticker: "TSLA",  name: "Tesla",         price: "$392.67", change: "-1.98%", notable: false, insight: "Weak on delivery jitters; robotaxi narrative the swing factor." },
      { ticker: "AAPL",  name: "Apple",         price: "$270.23", change: "+2.59%", notable: true,  insight: "Services strength and AI device cycle keeping bulls engaged." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",        change: "—",       notable: false, insight: "Azure AI growth the key driver; awaits earnings confirmation." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",        change: "—",       notable: false, insight: "Search AI monetization and Cloud momentum support valuation." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",        change: "—",       notable: false, insight: "AWS re-acceleration and retail margin lift the story." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",        change: "—",       notable: false, insight: "Soft Q2 guide and Hastings exit are near-term headwinds." },
      { ticker: "AMD",   name: "AMD",           price: "—",        change: "—",       notable: false, insight: "MI-series AI accelerator traction remains the key thesis." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",        change: "—",       notable: false, insight: "AIP enterprise expansion keeps rich multiple defensible." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",        change: "—",       notable: false, insight: "Cyber spend resilient; Falcon platform land-and-expand intact." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",        change: "—",       notable: false, insight: "Levered to BTC spot flows and stablecoin regulatory clarity." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$167.40",  change: "+12.00%", notable: true,  insight: "Leveraged BTC proxy; ripped on $78K spike and new dividend plan." },
      { ticker: "APP",   name: "AppLovin",      price: "—",        change: "—",       notable: false, insight: "Ad-tech AXON engine drives best-in-class ad-tech growth." },
      { ticker: "SMCI",  name: "Super Micro",   price: "—",        change: "—",       notable: false, insight: "AI server demand strong but legal overhang caps the multiple." }
    ],
    trending: [
      { ticker: "MSTR", change: "+12.00%" },
      { ticker: "AAPL", change: "+2.59%" },
      { ticker: "META", change: "+1.73%" },
      { ticker: "NVDA", change: "+1.68%" },
      { ticker: "TSLA", change: "-1.98%" }
    ],
    verdict: "AI trade is still the only game in town — NVDA, META, AAPL leading while TSLA lags on delivery jitters. Rotation favors mega-cap quality and semis over speculative small-caps. Own SOXX/QQQ core, avoid fresh chases until VIX cools."
  },

  malaysia: {
    klci:   { value: "1,702.30", change: "+0.75%", context: "KLCI closed Friday at a firm 1,702 on broad-based buying. Monday open likely cautious as oil spike and VIX pop test risk appetite." },
    usdmyr: { value: "3.9525",   change: "+0.06%", signal: "Ringgit contained; BNM tone keeps floor near 3.95." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "—", change: "Fri close", insight: "Regional banking leader; steady OPR backdrop supports NIM." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "—", change: "Fri close", insight: "ASEAN banking play; Indonesia contribution a swing factor." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",   price: "—", change: "Fri close", insight: "Defensive bank with strongest asset quality in sector." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",      price: "—", change: "Fri close", insight: "Yield play; dividend support cushions sideways tape." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",        price: "—", change: "Fri close", insight: "Data-center power demand thesis still the core driver." },
      { ticker: "INARI",  name: "Inari (0138.KL)",         price: "—", change: "Fri close", insight: "Semi cycle proxy; rides NVDA/AI hardware momentum into open." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",        price: "—", change: "Fri close", insight: "Restructuring story; regional telco consolidation in focus." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)",price: "—", change: "Fri close", insight: "Defensive healthcare; medical tourism recovery intact." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",          price: "—", change: "Fri close", insight: "Digital services beneficiary; new concession wins key catalyst." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",         price: "—", change: "Fri close", insight: "5G rollout and dividend yield anchor the story." }
    ],
    ipos: [
      { name: "N/A", sector: "—", price: "—", listingDate: "—", status: "—", note: "No fresh IPO catalysts confirmed in the morning tape." }
    ],
    verdict: "Ringgit steady near 3.95 keeps foreign flows supportive. Inari is the best risk-reward today given semi tailwinds. Bursa opens cautious but defensive-heavy; banks and utilities likely to outperform on any risk-off leg."
  },

  news: [
    { headline: "Iran/Hormuz tensions flare again, lifting oil and gold",           source: "Yahoo Finance", time: "3h ago", sentiment: "BEARISH", meaning: "Geopolitical risk back in focus; expect choppy risk-asset tape." },
    { headline: "Bitcoin reclaims $76,500 as short squeeze loads above $77K",       source: "Bitcoin Magazine", time: "5h ago", sentiment: "BULLISH", meaning: "BTC structure intact; $79K breakout would confirm trend." },
    { headline: "Strategy (MSTR) surges 12% on BTC rally and new dividend plan",    source: "CoinCentral", time: "2d ago", sentiment: "BULLISH", meaning: "Levered BTC proxy benefits as institutional flows resume." },
    { headline: "Netflix drops on soft Q2 forecast and Hastings board exit",         source: "CNBC", time: "3d ago", sentiment: "BEARISH", meaning: "Growth reset plus leadership change weighs on NFLX multiple." },
    { headline: "Dow flat, S&P 500 and Nasdaq slip on renewed Iran tensions",        source: "Invezz", time: "6h ago", sentiment: "NEUTRAL", meaning: "Tape churns near highs; watch VIX for breakout signals." },
    { headline: "Gold slips 0.5% to $4,809 after Hormuz-driven spike fades",         source: "Trading Economics", time: "4h ago", sentiment: "NEUTRAL", meaning: "Consolidation after spike; dips still being bought." },
    { headline: "USD/MYR holds 3.9525 as ringgit steadies vs firm dollar",           source: "Yahoo Finance", time: "2h ago", sentiment: "NEUTRAL", meaning: "Stable ringgit supports foreign equity flows into Bursa." },
    { headline: "KLCI closes at 1,702.30 on broad-based buying Friday",              source: "Investing.com", time: "Fri", sentiment: "BULLISH", meaning: "Firm close sets constructive tone into Monday's open." }
  ],

  goldSummary: {
    "Price":    { value: "$4,809.05", change: "-0.51%", note: "Consolidating after Hormuz-driven spike." },
    "Open":     { value: "$4,820",    change: "",       note: "" },
    "High":     { value: "$4,860",    change: "",       note: "Day high" },
    "Low":      { value: "$4,810",    change: "",       note: "Day low" },
    "52W High": { value: "N/A",       change: "",       note: "" },
    "52W Low":  { value: "N/A",       change: "",       note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,908.67" },
      { label: "R2",    value: "$4,884.33" },
      { label: "R1",    value: "$4,858.67" },
      { label: "Pivot", value: "$4,834.33" },
      { label: "S1",    value: "$4,808.67" },
      { label: "S2",    value: "$4,784.33" },
      { label: "S3",    value: "$4,758.67" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,884.33" },
      { label: "R2",    value: "$4,865.23" },
      { label: "R1",    value: "$4,853.43" },
      { label: "Pivot", value: "$4,834.33" },
      { label: "S1",    value: "$4,815.23" },
      { label: "S2",    value: "$4,803.43" },
      { label: "S3",    value: "$4,784.33" }
    ],
    camarilla: [
      { label: "R4", value: "$4,860.50" },
      { label: "R3", value: "$4,846.75" },
      { label: "R2", value: "$4,842.17" },
      { label: "R1", value: "$4,837.58" },
      { label: "S1", value: "$4,828.42" },
      { label: "S2", value: "$4,823.83" },
      { label: "S3", value: "$4,819.25" },
      { label: "S4", value: "$4,805.50" }
    ],
    note: "Gold trading just below classic pivot $4,834 — bias neutral-to-bearish unless price reclaims pivot."
  }
};
