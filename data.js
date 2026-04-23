window.CRUCIX_DATA = {
  generated: "Thu, 23 Apr 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on rebound fading as Hormuz tensions offset ceasefire relief; gold, oil and yields all pressing higher.",

  macro: {
    dxy:      { value: "98.40",   change: "+0.15%", signal: "Dollar grinding higher; headwind for gold/EM." },
    gold:     { value: "$4,750",  change: "-0.30%", signal: "Above $4,700; ceasefire cooled safe-haven bid." },
    oil:      { value: "$92.00",  change: "+2.40%", signal: "Brent firm on Hormuz risk; inflation sticky." },
    silver:   { value: "—",       change: "N/A",    signal: "Flat with gold; diplomacy capping upside." },
    yield10y: { value: "4.23%",   change: "+3bps",  signal: "Yields firm; rate-cut bets fading again." },
    vix:      { value: "18.92",   change: "-2.97%", signal: "Volatility easing; risk appetite returning." },
    usdmyr:   { value: "3.956",   change: "-0.10%", signal: "Ringgit steady near YTD strong zone." },
    sp500:    { value: "record",  change: "+1.00%", signal: "Fresh record close; breadth improving." },
    verdict: "DXY firm with 10Y at 4.23% and VIX sub-19 signal orderly risk-on, but gold holding $4,750 flags lingering geopolitical hedge. US tech leads while semis and crypto-proxies outperform. KLSE gets a ringgit tailwind; Bursa should open firmer today if oil doesn't spike further."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leading; alts still lagging dominance." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$77,900", marketCap: "$1.54T", change1h: "N/A", change24h: "-1.00%", change7d: "N/A", insight: "BTC stalled below $80k as Hormuz tensions cooled the post-ceasefire breakout attempt. Short-squeeze setup still intact if $78k reclaims with volume." },
      { name: "Ethereum", symbol: "ETH", price: "$2,294",  marketCap: "$277B",  change1h: "N/A", change24h: "+0.80%", change7d: "N/A", insight: "ETH firming but still lagging BTC as ETF flows concentrate on the majors. Needs $2,400 reclaim to unlock altseason." },
      { name: "Solana",   symbol: "SOL", price: "$143.81", marketCap: "$68B",   change1h: "N/A", change24h: "+4.73%", change7d: "N/A", insight: "SOL outperforming on renewed DeFi and memecoin activity in its ecosystem. Leading altcoin momentum into week-end." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.095",     change24h: "+2.35%", note: "Testing 50-day EMA resistance." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000037", change24h: "+3.00%", note: "Bouncing off 50-day EMA." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000060", change24h: "+1.20%", note: "Range-bound near 50-day EMA." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",        change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",        change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on leaning but cautious: BTC's $80k rejection shows buyers tiring without fresh catalysts. Key level is $78k — reclaim targets $82k, loss opens $74k. Altseason signal weak; SOL outperformance and memecoin bounce suggest selective risk, not broad rotation."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "record", change: "+1.00%" },
      { name: "Nasdaq",       value: "record", change: "+1.60%" },
      { name: "Dow",          value: "—",      change: "+0.70%" },
      { name: "VIX",          value: "18.92",  change: "-2.97%" },
      { name: "Russell 2000", value: "N/A",    change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$652.78", change: "+1.00%", insight: "Core S&P exposure printing fresh highs with record S&P close." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—",       change: "+1.60%", insight: "Tech-heavy benchmark leading on AI and mega-cap strength." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "+1.00%", insight: "Mirrors VOO; record territory as breadth improves." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "+1.00%", insight: "Broad market tracker benefiting from small-cap catch-up." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "N/A",    insight: "High-beta names benefiting from VIX compression below 19." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$431.77", change: "+2.63%", insight: "Semis leading; NVDA and AI capex theme firmly intact." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$43.28",  change: "-1.00%", insight: "Spot BTC ETF tracking BTC pullback from $80k resistance." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "+1.50%", insight: "Tech sector riding Nasdaq's record-setting session." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$443.93", change: "-0.30%", insight: "Mirrors spot gold; safe-haven bid fading on ceasefire." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "—",       change: "N/A",    notable: true,  insight: "Meta slashing workforce; focus shifts to AI efficiency story." },
      { ticker: "NVDA",  name: "Nvidia",        price: "—",       change: "+2.00%", notable: true,  insight: "AI capex demand intact; Oklo partnership buzz lifting sentiment." },
      { ticker: "TSLA",  name: "Tesla",         price: "$387.51", change: "+0.28%", notable: false, insight: "Post-earnings hold; market digesting delivery guidance." },
      { ticker: "AAPL",  name: "Apple",         price: "$273.17", change: "+2.63%", notable: true,  insight: "Apple rallying hard on services momentum and AI cycle optimism." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$416.45", change: "-3.81%", notable: true,  insight: "Sharp drop despite record indices; cloud margins under scrutiny." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$339.30", change: "-0.01%", notable: false, insight: "Flat consolidation as Search and cloud narrative rebalances." },
      { ticker: "AMZN",  name: "Amazon",        price: "$255.52", change: "+0.06%", notable: false, insight: "Flat into earnings; AWS deceleration still the key risk." },
      { ticker: "NFLX",  name: "Netflix",       price: "$92.89",  change: "-0.38%", notable: false, insight: "Soft day; ad-tier monetization pace the watch-item." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "N/A",    notable: false, insight: "AI accelerator competition with NVDA still the core thesis." },
      { ticker: "PLTR",  name: "Palantir",      price: "$150.39", change: "+1.50%", notable: true,  insight: "Defense AI names bid; government contract pipeline expanding." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "+3.15%", notable: true,  insight: "Cybersecurity rally resumes on enterprise spend resilience." },
      { ticker: "COIN",  name: "Coinbase",      price: "$205.37", change: "+1.00%", notable: false, insight: "Tracking BTC sideways; regulatory tailwinds still supportive." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "+8.25%", notable: true,  insight: "Monster move after adding 34,164 BTC for $2.54B." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "N/A",    notable: false, insight: "Ad-tech leader still the cleanest AI-monetization mid-cap." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$29.18",  change: "N/A",    notable: false, insight: "Well off highs; AI server demand offset by margin concerns." }
    ],
    trending: [
      { ticker: "MSTR", change: "+8.25%" },
      { ticker: "MSFT", change: "-3.81%" },
      { ticker: "CRWD", change: "+3.15%" },
      { ticker: "AAPL", change: "+2.63%" },
      { ticker: "SOXX", change: "+2.63%" }
    ],
    verdict: "AI trade still leads but rotation visible: MSFT's -3.81% tumble alongside AAPL +2.63% and semis bid shows mega-cap dispersion. Own semis (SOXX), defense AI (PLTR), cyber (CRWD) and Bitcoin proxies (MSTR, COIN). Avoid chasing MSFT dip until cloud-margin narrative resets."
  },

  malaysia: {
    klci:   { value: "—", change: "N/A", context: "Bursa opened lower earlier this week on Middle East uncertainty. Today's outlook: firmer ringgit and record US close should lift sentiment unless oil spikes further." },
    usdmyr: { value: "3.956", change: "-0.10%", signal: "Ringgit firm; supportive for import-heavy names." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM11.06", change: "-0.36%", insight: "Slipped 4 sen; stable OPR and regional franchise keep the yield story intact." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "RM7.46",  change: "-0.13%", insight: "Marginal pullback; ASEAN banking franchise still a core defensive hold." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",       change: "N/A",   insight: "Defensive bank play; mortgage book and CASA franchise supportive through cycle." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",       change: "N/A",   insight: "Attractive dividend yield and cleaner capital buffer stand out among mid-caps." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",       change: "N/A",   insight: "Data-centre electrification theme still the key re-rating driver." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—",       change: "N/A",   insight: "Leverages NVDA-linked semi cycle; SOXX +2.63% is a positive read-across." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",       change: "N/A",   insight: "Regional telco restructuring progress remains the catalyst to watch." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",       change: "N/A",   insight: "Defensive healthcare; medical-tourism volumes underpin steady ROIC." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",       change: "N/A",   insight: "Digital government services pipeline still the high-beta Bursa tech proxy." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",       change: "N/A",   insight: "5G monetization and enterprise fibre mix are the incremental levers." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No fresh IPO disclosures surfaced in today's Bursa newsflow." }
    ],
    verdict: "Ringgit at 3.956 is a clear positive for importers and consumer names. Inari remains the best asymmetric play given SOXX strength and NVDA-linked orderbook. Bursa should open firmer today on record US close, with banks the steady anchor if oil stays contained."
  },

  news: [
    { headline: "S&P 500 and Nasdaq close at fresh records as rally resumes",          source: "Yahoo Finance", time: "10h ago", sentiment: "BULLISH", meaning: "Risk-on breadth confirmed; momentum funds likely adding." },
    { headline: "Bitcoin stalls near $78k as Hormuz tensions offset ceasefire relief", source: "Investing.com", time: "6h ago",  sentiment: "WATCH",   meaning: "BTC needs $80k reclaim to break range decisively." },
    { headline: "Strategy (MSTR) buys 34,164 BTC for $2.54 billion",                    source: "CoinDesk",      time: "2d ago",  sentiment: "BULLISH", meaning: "Corporate BTC demand remains a structural bid." },
    { headline: "Oil jumps on Hormuz risk; Brent stabilizes near $92",                  source: "Whalesbook",    time: "8h ago",  sentiment: "BEARISH", meaning: "Higher oil stokes inflation and caps rate-cut bets." },
    { headline: "Meta slashing workforce amid AI efficiency pivot",                     source: "Motley Fool",   time: "5h ago",  sentiment: "NEUTRAL", meaning: "Cost discipline supports margins; morale risk rising." },
    { headline: "CrowdStrike up 3.15% as cyber spending resilience confirms",           source: "TradingKey",    time: "12h ago", sentiment: "BULLISH", meaning: "Enterprise security budgets intact despite macro chop." },
    { headline: "Bursa opened lower amid protracted Middle East uncertainties",         source: "FMT",           time: "3d ago",  sentiment: "BEARISH", meaning: "KLSE sentiment fragile until oil risk subsides." },
    { headline: "US 10-year yield holds near 4.23% as rate-cut bets fade",              source: "FRED",          time: "10h ago", sentiment: "WATCH",   meaning: "Sticky yields pressure duration and high-multiple names." }
  ],

  goldSummary: {
    "Price":    { value: "$4,750", change: "-0.30%", note: "Safe-haven bid easing on ceasefire." },
    "Open":     { value: "$4,735", change: "",       note: "" },
    "High":     { value: "$4,780", change: "",       note: "Day high" },
    "Low":      { value: "$4,715", change: "",       note: "Day low" },
    "52W High": { value: "N/A",    change: "",       note: "" },
    "52W Low":  { value: "N/A",    change: "",       note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,846.67" },
      { label: "R2",    value: "$4,813.33" },
      { label: "R1",    value: "$4,781.67" },
      { label: "Pivot", value: "$4,748.33" },
      { label: "S1",    value: "$4,716.67" },
      { label: "S2",    value: "$4,683.33" },
      { label: "S3",    value: "$4,651.67" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,813.33" },
      { label: "R2",    value: "$4,788.50" },
      { label: "R1",    value: "$4,773.16" },
      { label: "Pivot", value: "$4,748.33" },
      { label: "S1",    value: "$4,723.50" },
      { label: "S2",    value: "$4,708.16" },
      { label: "S3",    value: "$4,683.33" }
    ],
    camarilla: [
      { label: "R4", value: "$4,785.75" },
      { label: "R3", value: "$4,767.88" },
      { label: "R2", value: "$4,761.92" },
      { label: "R1", value: "$4,755.96" },
      { label: "S1", value: "$4,744.04" },
      { label: "S2", value: "$4,738.08" },
      { label: "S3", value: "$4,732.13" },
      { label: "S4", value: "$4,714.25" }
    ],
    note: "Gold holding above classic pivot $4,748 keeps near-term bias mildly bullish toward R1 $4,782."
  }
};
