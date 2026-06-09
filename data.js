window.CRUCIX_DATA = {
  generated: "Tue, 09 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-off: BTC under $63k, VIX spiking, AI semis crack while gold holds bid.",

  macro: {
    dxy:      { value: "—",       change: "N/A",      signal: "DXY snapshot unavailable; yields tell story." },
    gold:     { value: "$4329.98", change: "+0.02%", signal: "Gold steady near record; haven bid intact." },
    oil:      { value: "—",       change: "N/A",      signal: "Crude soft as Iran-Israel halt eases premium." },
    silver:   { value: "—",       change: "N/A",      signal: "Silver tracks gold; industrial demand mixed." },
    yield10y: { value: "4.57%",   change: "+3bps",    signal: "Near 2-week high on jobs data strength." },
    vix:      { value: "19.87",   change: "+5.02%",   signal: "Fear creeping back as tech sells off." },
    usdmyr:   { value: "4.0617",  change: "-0.20%",   signal: "Ringgit firm as DXY softens vs Asia." },
    sp500:    { value: "7386.65", change: "-0.26%",   signal: "Index dips as semis drag heavyweights." },
    verdict: "Stronger jobs lifted 10Y to 4.57% with 70% odds of Dec hike, yet VIX +5% and Nasdaq -1% show risk fatigue. Gold above $4,300 confirms hedging while BTC under $63k signals leverage flush. KLSE faces imported volatility but firmer ringgit cushions exporters."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance rising as alts bleed harder." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$62,500",  marketCap: "$1.23T", change1h: "N/A", change24h: "-4.00%", change7d: "N/A", insight: "BTC narrowed losses back to $62k after dipping under $60k earlier this week as Saylor added $101M. Fear gauge at historic lows mirrors past $3k and $18k capitulation prints." },
      { name: "Ethereum", symbol: "ETH", price: "$1,581.66", marketCap: "$190B",  change1h: "N/A", change24h: "-3.00%", change7d: "N/A", insight: "ETH grinds toward crucial support as analysts warn of another leg lower below $1,500. Ratio versus BTC sits at multi-year lows, killing rotation hopes." },
      { name: "Solana",   symbol: "SOL", price: "$78.97",   marketCap: "$38B",   change1h: "N/A", change24h: "-1.43%", change7d: "N/A", insight: "SOL outperforms majors but cannot escape broader memecoin and L1 drawdown. ETH/SOL ratio fading suggests SOL bid persists despite tape weakness." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.079",     change24h: "-2.50%", note: "Rejected at $0.088 resistance hard." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000027", change24h: "-3.00%", note: "Lost $0.0000033 support; bears control." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000046", change24h: "-2.00%", note: "Down 14% week; consolidation broken." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",     note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",     note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-off dominates: BTC at $62.5k is the line; lose $60k and capitulation extends to $55k. Memecoins are leading down, classic late-cycle behaviour with no altseason signal on the tape. Watch ETH $1,500 and BTC dominance — both must reverse before any bounce."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7386.65",  change: "-0.26%" },
      { name: "Nasdaq",       value: "25678.82", change: "-0.97%" },
      { name: "Dow",          value: "50872.11", change: "+0.17%" },
      { name: "VIX",          value: "19.87",    change: "+5.02%" },
      { name: "Russell 2000", value: "N/A",      change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—",       change: "N/A",     insight: "Tracks S&P 500 weakness; broad tape under pressure." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$716.07", change: "+1.56%", insight: "Holds up despite Nasdaq drag thanks to mega-cap resilience." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$739.22", change: "+0.23%", insight: "Marginal green masks rotation out of semis into defensives." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "N/A",     insight: "Broad market follows S&P; small-cap drag a concern." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "N/A",     insight: "High-beta names hit hardest in risk-off tape." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$571.45", change: "+5.87%", insight: "Sharp bounce after $1T chip slide; dead-cat or floor?" },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$34.72",  change: "-4.00%", insight: "Estimated from BTC; spot ETF flows turning outflows." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "N/A",     insight: "Tech sector mixed as NVDA-Apple deal supports sentiment." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$404.67", change: "+0.02%", insight: "Estimated from XAU; haven demand keeps GLD bid firm." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$593.00", change: "-0.50%", notable: false, insight: "Holds key support as ad-spend resilience offsets broader tech weakness." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$205.10", change: "+0.70%", notable: true,  insight: "Rallied after securing Apple as major AI client; lifts whole chip complex." },
      { ticker: "TSLA",  name: "Tesla",         price: "$391.00", change: "+4.96%", notable: true,  insight: "Surged on Austin robotaxi launch and strong China retail sales." },
      { ticker: "AAPL",  name: "Apple",         price: "$290.91", change: "+0.30%", notable: false, insight: "Steady on NVDA partnership signaling Apple's AI ambitions are real." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",       change: "N/A",     notable: false, insight: "AI cloud capex story intact; remains mega-cap anchor." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "N/A",     notable: false, insight: "Search and Gemini momentum keep multiple compression at bay." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "N/A",     notable: false, insight: "AWS growth and retail margin remain twin bull pillars." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",       change: "N/A",     notable: false, insight: "Underperforming and needs new narrative beyond AI hype cycle." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "N/A",     notable: false, insight: "Rides SOXX bounce; data-center share gains still the thesis." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "N/A",     notable: false, insight: "AI-defense narrative intact but valuation a constant risk." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "N/A",     notable: false, insight: "Cybersecurity defensive but watch NRR if IT budgets soften." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "N/A",     notable: false, insight: "Crypto proxy weak as BTC tests $60k and volumes thin." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",       change: "N/A",     notable: false, insight: "Added 1,550 BTC for $101M; pure leveraged BTC beta." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "N/A",     notable: false, insight: "Ad-tech AI story remains intact but high beta in selloffs." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$43.72",  change: "+2.30%", notable: false, insight: "Bouncing with SOXX off lows; AI server demand still robust." }
    ],
    trending: [
      { ticker: "SOXX", change: "+5.87%" },
      { ticker: "VIX",  change: "+5.02%" },
      { ticker: "TSLA", change: "+4.96%" },
      { ticker: "QQQ",  change: "+1.56%" },
      { ticker: "BTC",  change: "-4.00%" }
    ],
    verdict: "AI trade splintering: NVDA-Apple deal supports chips while VIX spike says hedges are back on. Rotation into mega-cap defensives (AAPL, MSFT) and away from high-beta crypto plays (COIN, MSTR). Own quality megacaps and gold; avoid memecoins, ARKK basket, leveraged BTC proxies until VIX cools."
  },

  malaysia: {
    klci:   { value: "1679.52", change: "+0.00%", context: "KLCI held near 1,680 with banks steady. Tuesday open faces imported risk-off from US semis weakness and BTC slump." },
    usdmyr: { value: "4.0617",  change: "-0.20%", signal: "Ringgit firms; exporters watch 4.05 next." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "—",     change: "Fri close", insight: "BNM holds OPR at 3.00%; NIM resilience supports core earnings." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "—",     change: "Fri close", insight: "ASEAN franchise drives regional banking re-rating story." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",     change: "Fri close", insight: "Defensive bank with mortgage book stability and low NPLs." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",     change: "Fri close", insight: "Dividend yield support intact; CET1 buffer comfortable." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",     change: "Fri close", insight: "Data-center power demand remains structural tailwind for grid." },
      { ticker: "INARI",  name: "Inari (0166.KL)",          price: "2.36",  change: "Fri close", insight: "Semi cycle and NVDA-Apple deal lift Inari OSAT positioning." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",     change: "Fri close", insight: "Telco consolidation thesis intact across regional footprint." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",     change: "Fri close", insight: "Healthcare defensive; medical tourism and Turkey unit normalising." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",     change: "Fri close", insight: "Digital services concession pipeline keeps growth optionality." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",     change: "Fri close", insight: "5G access model and steady FCF support dividend payout." }
    ],
    ipos: [
      { name: "No new listings tracked", sector: "N/A", price: "—", listingDate: "N/A", status: "N/A", note: "No fresh Bursa IPO confirmed in today's news cycle. Watch ACE Market pipeline for upcoming filings into mid-June." }
    ],
    verdict: "Ringgit at 4.06 is the cleanest Asia story: soft DXY plus stable OPR. Inari remains the best risk-reward on semi rebound and NVDA-Apple read-through. Tuesday open likely soft on imported weakness; banks should provide the floor."
  },

  news: [
    { headline: "Bitcoin drifts back to $62.5k as Strategy adds $101M BTC", source: "CoinDesk", time: "2h ago", sentiment: "WATCH",   meaning: "Saylor accumulation cushions downside but inflows insufficient to reverse trend." },
    { headline: "Nasdaq falls 4% as semiconductor slide wipes $1T from markets", source: "TheStreet", time: "6h ago", sentiment: "BEARISH", meaning: "Chip exposure now a portfolio risk; rotation into defensives accelerating." },
    { headline: "Tesla jumps 4.96% on Austin robotaxi launch and China retail strength", source: "Yahoo Finance", time: "4h ago", sentiment: "BULLISH", meaning: "Autonomy narrative back in play; lifts AV ecosystem and TSLA bulls." },
    { headline: "NVIDIA secures Apple as major AI client; stock ticks higher", source: "Yahoo Finance", time: "5h ago", sentiment: "BULLISH", meaning: "Apple-NVDA AI partnership validates chip demand into 2026 capex cycle." },
    { headline: "10-year Treasury yield holds near 4.57% on hot jobs data", source: "Investing.com", time: "3h ago", sentiment: "BEARISH", meaning: "Higher-for-longer rates pressure growth multiples and EM currencies." },
    { headline: "Iran and Israel agree to halt attacks; oil eases on de-escalation", source: "Reuters", time: "8h ago", sentiment: "BULLISH", meaning: "Geopolitical premium drains from crude; inflation hedge softens." },
    { headline: "Bitcoin Fear gauge hits levels last seen at $3k and $18k bottoms", source: "BeInCrypto", time: "5h ago", sentiment: "WATCH",   meaning: "Extreme fear historically marks capitulation lows but not always the floor." },
    { headline: "MicroStrategy approves semi-monthly STRC dividend plan", source: "Investing.com", time: "9h ago", sentiment: "NEUTRAL", meaning: "Yield wrapper on BTC treasury appeals to income-focused crypto bulls." }
  ],

  goldSummary: {
    "Price":    { value: "$4329.98", change: "+0.02%", note: "Haven bid keeps gold near all-time highs." },
    "Open":     { value: "$4329.33", change: "",        note: "" },
    "High":     { value: "$4353.52", change: "",        note: "Day high" },
    "Low":      { value: "$4268.74", change: "",        note: "Day low" },
    "52W High": { value: "N/A",      change: "",        note: "" },
    "52W Low":  { value: "N/A",      change: "",        note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4450.86" },
      { label: "R2",    value: "$4402.19" },
      { label: "R1",    value: "$4366.08" },
      { label: "Pivot", value: "$4317.41" },
      { label: "S1",    value: "$4281.30" },
      { label: "S2",    value: "$4232.63" },
      { label: "S3",    value: "$4196.52" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4402.19" },
      { label: "R2",    value: "$4369.80" },
      { label: "R1",    value: "$4349.79" },
      { label: "Pivot", value: "$4317.41" },
      { label: "S1",    value: "$4285.03" },
      { label: "S2",    value: "$4265.02" },
      { label: "S3",    value: "$4232.63" }
    ],
    camarilla: [
      { label: "R4", value: "$4376.61" },
      { label: "R3", value: "$4353.29" },
      { label: "R2", value: "$4345.52" },
      { label: "R1", value: "$4337.75" },
      { label: "S1", value: "$4322.21" },
      { label: "S2", value: "$4314.44" },
      { label: "S3", value: "$4306.67" },
      { label: "S4", value: "$4283.35" }
    ],
    note: "Gold at $4,330 sits above classic pivot $4,317 — bullish bias intact while above."
  }
};
