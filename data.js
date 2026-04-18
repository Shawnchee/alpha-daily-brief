window.CRUCIX_DATA = {
  generated: "Saturday, 18 Apr 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Dollar slide and gold at record highs signal macro stress while tech-led equity rally and VIX cooling hint at fragile risk-on — stay selective.",

  macro: {
    dxy:      { value: "97.70",     change: "-0.52%", signal: "Dollar slide supports gold, crypto, EM currencies." },
    gold:     { value: "$4,879.60", change: "+1.48%", signal: "Record high; safe-haven bid intensifying globally." },
    oil:      { value: "$84.36",    change: "-1.20%", signal: "Demand fears resurface; lowest print since March." },
    silver:   { value: "$64.40",    change: "+0.85%", signal: "Tracking gold higher; industrial demand tepid." },
    yield10y: { value: "4.31%",     change: "-3bps",  signal: "Yield easing; bonds quietly reclaiming a bid." },
    vix:      { value: "17.48",     change: "-2.56%", signal: "Fear fading fast; risk-on window reopening." },
    usdmyr:   { value: "4.3800",    change: "-0.40%", signal: "Ringgit firms; mild FX tailwind for Bursa flows." },
    sp500:    { value: "7,126.06",  change: "+1.20%", signal: "Tech-led bounce; breadth improving across sectors." },
    verdict: "DXY sliding to 97.70 alongside VIX cooling to 17.48 sets a constructive risk-on backdrop heading into next week. Elevated 10Y yield at 4.31% caps bond enthusiasm but equities shrug it off on tech momentum. Crypto and KLSE both benefit from dollar weakness; watch DXY 96 as the next key support."
  },

  crypto: {
    dominance: { value: "59.21", change: "+0.37%", signal: "BTC dominance rising; altseason gate remains closed." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$75,828", marketCap: "$1.54T", change1h: "+0.12", change24h: "+0.88", change7d: "-3.20", insight: "Holding $75K support after pullback from $80K; $78K is the key reclaim level for momentum resumption. BTC dominance at 59.21% signals capital still rotating into BTC over alts." },
      { name: "Ethereum", symbol: "ETH", price: "$2,362",  marketCap: "$284B",  change1h: "-0.08", change24h: "+0.40", change7d: "-5.40", insight: "ETH/BTC ratio at 0.0311 — near multi-year lows, signalling deep underperformance vs Bitcoin. Key support at $2,200; needs a $2,500 close to reverse the narrative." },
      { name: "Solana",   symbol: "SOL", price: "$88.16",  marketCap: "$37B",   change1h: "-0.45", change24h: "-1.33", change7d: "-8.10", insight: "SOL ecosystem activity holding but price sliding; $85 is critical support. Break below risks a flush to $75; recovery needs a $95+ close to reassert bulls." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1003",     change24h: "+4.50", note: "Elon narrative still driving DOGE bids." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000388", change24h: "+1.80", note: "Consolidating; no breakout signal yet." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000060",  change24h: "+1.20", note: "Quiet accumulation phase, no catalyst." },
      { name: "Bonk",      symbol: "BONK", price: "$0.0000062",  change24h: "+3.20", note: "SOL ecosystem dip did not kill BONK." },
      { name: "dogwifhat", symbol: "WIF",  price: "$0.42",       change24h: "-1.80", note: "Still bleeding; needs SOL to recover." }
    ],
    verdict: "Crypto is risk-cautious with BTC defending $75K but failing to push higher; total market cap at $2.6T with $175B daily volume indicates healthy participation without euphoria. BTC dominance at 59.21% keeps altseason firmly off the table. Maintain BTC core, reduce SOL and ETH exposure until $78K is reclaimed."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,126.06", change: "+1.20%" },
      { name: "Nasdaq",       value: "22,840",   change: "+1.85%" },
      { name: "Dow",          value: "40,210",   change: "+0.75%" },
      { name: "VIX",          value: "17.48",    change: "-2.56%" },
      { name: "Russell 2000", value: "2,148",    change: "+0.90%" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$652.35", change: "+1.18%", insight: "Broad market recovered; holding key trend support cleanly." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$648.29", change: "+1.82%", insight: "Tech ETF leads; mega-caps rally on DXY weakness." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$712.60", change: "+1.20%", insight: "Vol compression with VIX drop signals continued equity bid." },
      { ticker: "VTI",  name: "Total Market",      price: "$248.10", change: "+1.10%", insight: "Broad participation confirmed; small-caps joining the rally." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "$62.40",  change: "+2.80%", insight: "Risk appetite returning to disruptive growth names." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$413.77", change: "+1.65%", insight: "Chip stocks recovering; AI capex narrative intact." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$43.73",  change: "+0.90%", insight: "BTC ETF flows steady; spot BTC holding the $75K floor." },
      { ticker: "XLK",  name: "Tech Sector",       price: "$222.40", change: "+1.72%", insight: "Tech sector leads; NVDA and AAPL both closing green." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$488.00", change: "+1.45%", insight: "Gold ETF surging on dollar weakness and safe-haven demand." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$618.40",   change: "+2.10%", notable: false, insight: "AI ad monetisation driving multiple expansion above peers." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$201.68",   change: "+1.68%", notable: false, insight: "Blackwell demand unbroken; $200 reclaim confirmed as floor." },
      { ticker: "TSLA",  name: "Tesla",         price: "$400.62",   change: "+3.01%", notable: true,  insight: "Robotaxi narrative re-ignites after Cybercab autonomous update." },
      { ticker: "AAPL",  name: "Apple",         price: "$270.23",   change: "+2.59%", notable: false, insight: "Services revenue momentum more than offsets hardware softness." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$422.79",   change: "+0.60%", notable: false, insight: "Azure AI growth steady; full valuation limits near-term upside." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$339.40",   change: "+1.99%", notable: false, insight: "Search plus cloud holding share against OpenAI pressure." },
      { ticker: "AMZN",  name: "Amazon",        price: "$250.56",   change: "+0.34%", notable: false, insight: "AWS acceleration narrative intact; Q2 beat thesis building." },
      { ticker: "NFLX",  name: "Netflix",       price: "$1,085.00", change: "+0.88%", notable: false, insight: "Ad-tier subscriber growth underpins the Q1 revenue beat thesis." },
      { ticker: "AMD",   name: "AMD",           price: "$118.50",   change: "+1.40%", notable: false, insight: "MI300X gaining data centre share; NVDA alternative trade." },
      { ticker: "PLTR",  name: "Palantir",      price: "$146.54",   change: "+2.20%", notable: false, insight: "Government AI contracts fuelling a sustained premium valuation." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "$388.20",   change: "+1.05%", notable: false, insight: "Cybersecurity demand secular; July 2024 incident overhang fully cleared." },
      { ticker: "COIN",  name: "Coinbase",      price: "$228.40",   change: "+1.15%", notable: false, insight: "BTC ETF volume drives Coinbase revenue beat probability higher." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$428.00",   change: "+0.95%", notable: false, insight: "BTC treasury proxy trading at NAV premium; leverage is the risk." },
      { ticker: "APP",   name: "AppLovin",      price: "$285.60",   change: "+1.88%", notable: false, insight: "AI-driven ad engine compounding at a market-unpriced rate." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$44.80",    change: "+2.30%", notable: false, insight: "AI server demand robust; accounting audit overhang now fading." }
    ],
    trending: [
      { ticker: "TSLA",  change: "+3.01%" },
      { ticker: "AAPL",  change: "+2.59%" },
      { ticker: "GOOGL", change: "+1.99%" },
      { ticker: "APP",   change: "+1.88%" },
      { ticker: "NVDA",  change: "+1.68%" }
    ],
    verdict: "AI infrastructure trade remains the primary alpha source as NVDA holds $200 and TSLA surges on robotics catalyst while dollar weakness supports growth equities broadly. Sector rotation is mild with tech absorbing most buying; energy underperforms on oil weakness. Own QQQ and SOXX; reduce oil-linked and rate-sensitive names."
  },

  malaysia: {
    klci: { value: "1,676.86", change: "-0.28%", context: "KLCI pared early gains to close lower on cautious sentiment as regional peers were mixed with Hang Seng down and STI flat. Local driver is bank sector NIM pressure and investor risk aversion heading into the weekend." },
    usdmyr: { value: "4.3800", change: "-0.40%", signal: "Ringgit firming; tailwind for Bursa foreign inflows Monday." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "11.04", change: "+0.18%", insight: "Dividend yield of 5.8% makes it the safest income anchor on Bursa." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "7.50",  change: "-0.53%", insight: "Regional banking exposure drags as Asian markets softened mid-week." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "4.60",  change: "-0.43%", insight: "Retail loan growth slowing; defensive but generating no excitement." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "6.22",  change: "-0.48%", insight: "Lagging peers; SME loan book quality under scrutiny this quarter." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "14.14", change: "-0.56%", insight: "Regulated returns stable; data centre power demand is a new catalyst." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "1.77",  change: "+0.57%", insight: "RF chip cycle recovery gaining traction on Apple supply chain wins." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "3.08",  change: "+0.65%", insight: "Telco consolidation play; edotco tower monetisation catalyst ahead." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "7.82",  change: "+0.38%", insight: "Healthcare tourism recovery driving a Q1 earnings beat." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "1.18",  change: "-1.67%", insight: "e-Government contracts steady but near-term newsflow is quiet." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "4.23",  change: "+0.24%", insight: "5G rollout progress underpins stable dividend; upside is limited." }
    ],
    ipos: [
      { name: "Sinar Medic Bhd", sector: "Healthcare", price: "0.55", listingDate: "28 Apr 2026", status: "Upcoming", note: "Medical device distributor at 15x PE with dividend commitment; valuation fair vs peers. Apply for listing gain; hold only if healthcare sector rotates into favour." }
    ],
    verdict: "Ringgit firming to 4.38 is the best near-term Bursa catalyst as returning foreign flows can lift index heavyweights on Monday open. Maybank at RM11.04 remains the top defensive pick with 5.8% yield and strong capital ratios. Watch Inari for the tech recovery play as Apple supply chain restocking cycle begins."
  },

  news: [
    { headline: "Bitcoin holds $75K as DXY slides to 97.70 on Fed rate uncertainty", source: "CoinDesk", time: "3h ago", sentiment: "BULLISH", meaning: "Dollar weakness historically lifts BTC; watch $78K resistance for trend confirmation." },
    { headline: "Gold surges to $4,879 — fresh all-time high on safe-haven demand", source: "Bloomberg", time: "4h ago", sentiment: "WATCH", meaning: "Gold ATH signals macro stress; risk-on equity rally may be fragile." },
    { headline: "Crude oil hits lowest since March 2026 on global demand destruction fears", source: "Reuters", time: "5h ago", sentiment: "BEARISH", meaning: "Oil weakness signals slowing economy; underweight energy sector immediately." },
    { headline: "S&P 500 gains 1.2% led by Tesla and Apple amid broad tech optimism", source: "CNBC", time: "6h ago", sentiment: "BULLISH", meaning: "Buy the dip in mega-cap tech; QQQ and XLK remain core holdings." },
    { headline: "Tesla surges 3% on Cybercab robotaxi autonomous driving milestone update", source: "Reuters", time: "7h ago", sentiment: "BULLISH", meaning: "Robotaxi catalyst real; TSLA breakout above $400 is a momentum signal." },
    { headline: "PM Anwar launches Digital Asset Innovation Hub; BNM regulatory sandbox expands", source: "Fintech News Malaysia", time: "8h ago", sentiment: "BULLISH", meaning: "Regulatory clarity boosts Malaysia crypto; watch licensed exchange volumes closely." },
    { headline: "Bursa Malaysia pares gains, turns lower at midday on cautious sentiment", source: "The Star", time: "12h ago", sentiment: "NEUTRAL", meaning: "KLCI weakness selective; banks drag while Inari and IHH hold ground." },
    { headline: "VIX drops to 17.48 as volatility sellers return to US equity market", source: "MarketWatch", time: "14h ago", sentiment: "BULLISH", meaning: "Fear fading fast; risk-on trade has room to extend into next week." }
  ]
};
