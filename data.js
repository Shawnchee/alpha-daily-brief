window.CRUCIX_DATA = {
  generated: "Fri, 24 Apr 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on tone as BTC reclaims $77K and US indices print fresh records, but oil above $100 and rising yields cap upside.",

  macro: {
    dxy:      { value: "98.69",  change: "+0.09%", signal: "Dollar firm; supportive of yields, not gold." },
    gold:     { value: "$4,691.59", change: "-0.69%", signal: "Pullback after Iran-deal hopes ease haven bid." },
    oil:      { value: "$95.95", change: "+0.10%", signal: "Crude stays elevated on Trump Iran rhetoric." },
    silver:   { value: "$74.96", change: "-0.72%", signal: "Tracks gold lower; industrial demand intact." },
    yield10y: { value: "4.33%", change: "+5bps",  signal: "Yields creep higher; pressures duration assets." },
    vix:      { value: "18.92",  change: "-2.97%", signal: "Volatility easing; dip-buyers in control." },
    usdmyr:   { value: "3.9600", change: "+0.25%", signal: "Ringgit soft as DXY firms overnight." },
    sp500:    { value: "7,137.90",  change: "+1.05%", signal: "Record close led by Intel and Nvidia." },
    verdict: "DXY firm and yields rising at 4.33% creates a mild headwind for both gold and growth, yet VIX collapsing under 19 signals risk appetite remains intact. Crypto and US tech can extend higher near-term while gold consolidates the recent surge above $4,690. KLSE faces a softer ringgit and higher US yields — exporters benefit, banks neutral."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leadership intact above $77K reclaim." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$77,600", marketCap: "$1.54T",  change1h: "N/A", change24h: "+2.10%", change7d: "N/A", insight: "BTC up 30% from February lows after Strategy added $2.54B in a single week. $80K is the key resistance; reclaiming it opens a path to $100K." },
      { name: "Ethereum", symbol: "ETH", price: "$2,322", marketCap: "$279B",  change1h: "N/A", change24h: "+1.40%", change7d: "N/A", insight: "ETH lags BTC as ETF inflow streak breaks and EF offloads 10K ETH to BitMine. Needs to hold $2,300 to avoid retesting $2,000 support." },
      { name: "Solana",   symbol: "SOL", price: "$86.44", marketCap: "$41B",  change1h: "N/A", change24h: "+1.80%", change7d: "N/A", insight: "SOL well off its $295 ATH but stable as memecoin activity returns. Network revenue and staking yields underpin a base near $80." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.0951", change24h: "+1.20%", note: "Tracks BTC; Musk catalyst quiet." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000337", change24h: "+0.90%", note: "Dead-cat bounce after deep slide." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000615", change24h: "+1.50%", note: "Low-beta meme; volume thin." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",    change24h: "N/A",  note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",    change24h: "N/A",  note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on confirmed as BTC reclaims $77K with institutional accumulation. The key level is $80K — a daily close above opens $100K targets per Bernstein. Altseason signal weak: ETH/BTC ratio still soft, memecoins bouncing not breaking out."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,137.90", change: "+1.05%" },
      { name: "Nasdaq",       value: "24,657.57", change: "+1.64%" },
      { name: "Dow",          value: "49,490.03", change: "+0.69%" },
      { name: "VIX",          value: "18.92", change: "-2.97%" },
      { name: "Russell 2000", value: "N/A",  change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$651.26", change: "+1.05%", insight: "Tracks S&P at record highs; broad market core hold." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$663.88", change: "+1.64%", insight: "Mega-cap tech leadership extends; AI capex still funding the bid." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—", change: "—", insight: "Same exposure as VOO; preferred for options liquidity." },
      { ticker: "VTI",  name: "Total Market",      price: "—", change: "—", insight: "Total-market wrapper benefiting from small-cap participation." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—", change: "—", insight: "High-beta innovation basket re-rates with falling VIX and crypto rebound." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$460.94", change: "+1.80%", insight: "Chip ETF rides Nvidia $5T milestone and Intel breakout." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$43.11", change: "+2.10%", insight: "Spot BTC ETF tracks Bitcoin reclaim of $77K with strong inflows." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—", change: "—", insight: "Tech sector leadership reasserts as semis and software both rally." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$438.47", change: "-0.69%", insight: "Mild pullback as Iran-deal hopes ease safe-haven premium." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$659.15", change: "-2.31%", notable: false, insight: "Pullback ahead of next week's earnings; ad demand still firm." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$199.64", change: "-1.41%", notable: true,  insight: "Reclaimed $5T market cap milestone; AI capex cycle remains the dominant tape driver." },
      { ticker: "TSLA",  name: "Tesla",         price: "$373.72", change: "-3.56%", notable: false, insight: "Worst Mag-7 today on demand concerns and robotaxi delivery doubts." },
      { ticker: "AAPL",  name: "Apple",         price: "$273.43", change: "+0.10%", notable: false, insight: "Defensive bid as megacap rotation favors steady cash flow names." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$423.88", change: "-3.53%", notable: false, insight: "Sold off post-earnings on heavy AI capex guide; cloud growth steady." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$337.06", change: "+0.50%", notable: false, insight: "Search and YouTube monetization keep estimates rising." },
      { ticker: "AMZN",  name: "Amazon",        price: "$252.05", change: "+0.30%", notable: false, insight: "AWS reacceleration thesis intact; retail margins improving." },
      { ticker: "NFLX",  name: "Netflix",       price: "—", change: "—", notable: false, insight: "Announced $25B buyback to offset 13% post-earnings drop." },
      { ticker: "AMD",   name: "AMD",           price: "—", change: "—", notable: false, insight: "MI400 ramp keeps it as the credible #2 AI accelerator story." },
      { ticker: "PLTR",  name: "Palantir",      price: "$141.86", change: "+1.20%", notable: true,  insight: "Government and commercial AIP traction sustains premium multiple." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—", change: "—", notable: false, insight: "Cybersecurity remains a defensive growth pocket amid geopolitical risk." },
      { ticker: "COIN",  name: "Coinbase",      price: "—", change: "—", notable: false, insight: "Beta to BTC reclaim of $77K; trading volumes recovering." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—", change: "+9.40%", notable: true,  insight: "Holdings now 815,061 BTC; pure-play leveraged Bitcoin proxy." },
      { ticker: "APP",   name: "AppLovin",      price: "—", change: "—", notable: false, insight: "Adtech leader with AI-driven ad targeting expanding into e-commerce." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$29.08", change: "+5.80%", notable: false, insight: "AI server orders firm but margin pressure keeps the stock range-bound." }
    ],
    trending: [
      { ticker: "MSTR", change: "+9.40%" },
      { ticker: "SMCI", change: "+5.80%" },
      { ticker: "TSLA", change: "-3.56%" },
      { ticker: "MSFT", change: "-3.53%" },
      { ticker: "META", change: "-2.31%" }
    ],
    verdict: "AI trade is bifurcating: chips (NVDA, SOXX) lead while software mega-caps (MSFT, META) digest capex shock. Rotation favors semis, hyperscaler infrastructure, and Bitcoin proxies (MSTR, COIN). Avoid high-multiple software until capex absorption is priced in."
  },

  malaysia: {
    klci:   { value: "1,710.56", change: "+0.83%", context: "KLCI closed Thursday up 14 points led by banks and utilities. Friday outlook constructive if US records hold and ringgit stabilizes." },
    usdmyr: { value: "3.9600", change: "+0.25%", signal: "Ringgit soft on firm DXY; under 4.00 healthy." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM11.20",  change: "Thu close", insight: "Largest cap bank; OPR stable at 3.00% supports NIM and dividends." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "—",        change: "Thu close", insight: "Regional banking exposure to Indonesia and Thailand offers ASEAN growth optionality." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",       change: "Thu close", insight: "Defensive bank with retail-mortgage tilt; consistent ROE compounder." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",       change: "Thu close", insight: "Cheapest big-cap bank by P/B; capital return story intact." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",       change: "Thu close", insight: "Beneficiary of data-center power demand and renewables capex pipeline." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—",       change: "Thu close", insight: "Nvidia photonics ramp and Broadcom backend volumes drive earnings beat potential." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",       change: "Thu close", insight: "Telco consolidation thesis advancing; CelcomDigi synergies still flowing." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",       change: "Thu close", insight: "Regional hospital chain with USD/MYR-hedged earnings via Acibadem and Singapore." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",       change: "Thu close", insight: "Digital-services concession growth plus blockchain-services optionality." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",       change: "Thu close", insight: "5G monetization slow but dividend yield supports the floor." }
    ],
    ipos: [
      { name: "Bursa pipeline quiet", sector: "—", price: "—", listingDate: "—", status: "Watch", note: "No major Main Market IPOs priced this week. Pipeline still healthy with tech and healthcare candidates queued for H2 2026." }
    ],
    verdict: "Ringgit at 3.96 is a tailwind for exporter Inari and IHH while neutral for banks. Best risk-reward: Inari on the Nvidia photonics cycle. Friday Bursa outlook constructive if US records hold and oil cools below $95."
  },

  news: [
    { headline: "S&P 500 and Nasdaq close at record highs as Nvidia retakes $5T", source: "Yahoo Finance", time: "8h ago", sentiment: "BULLISH", meaning: "Index records confirm AI capex bid still dominant tape driver." },
    { headline: "Bitcoin breaks above $77,600 after Strategy buys $2.54B in BTC", source: "CoinPedia", time: "10h ago", sentiment: "BULLISH", meaning: "Corporate accumulation tightens float, reinforces BTC structural bid." },
    { headline: "Trump rhetoric on Iran sends crude oil back above $100", source: "CryptoSlate", time: "12h ago", sentiment: "WATCH", meaning: "Higher oil pressures inflation, complicates Fed cut timing." },
    { headline: "Netflix announces $25B buyback after 13% post-earnings drop", source: "Bloomberg", time: "1d ago", sentiment: "BULLISH", meaning: "Capital return offsets growth concerns; floor under shares." },
    { headline: "Microsoft falls 3.53% post-earnings on heavy AI capex guide", source: "CNBC", time: "1d ago", sentiment: "BEARISH", meaning: "Capex shock weighs on software multiples near-term." },
    { headline: "Malaysia unveils sandbox for ringgit-backed stablecoins", source: "Cointelegraph", time: "1d ago", sentiment: "BULLISH", meaning: "BNM digital-asset framework could boost fintech and exchanges." },
    { headline: "MicroStrategy holdings hit 815,061 BTC, stock up 9.4%", source: "Yahoo Finance", time: "2d ago", sentiment: "BULLISH", meaning: "Largest corporate holder; pure leveraged Bitcoin proxy bid." },
    { headline: "10Y Treasury yield rises to 4.33% as DXY firms", source: "FRED", time: "8h ago", sentiment: "WATCH", meaning: "Rising real yields cap gold and high-multiple growth." }
  ],

  goldSummary: {
    "Price":  { value: "$4,691.59", change: "-0.69%", note: "Pullback as Iran-deal hopes ease bid." },
    "Open":   { value: "$4,820.77", change: "", note: "" },
    "High":   { value: "$4,833.09", change: "", note: "Day high" },
    "Low":    { value: "$4,768.57", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,846.21" },
      { label: "R2",    value: "$4,839.65" },
      { label: "R1",    value: "$4,781.69" },
      { label: "Pivot", value: "$4,775.13" },
      { label: "S1",    value: "$4,717.17" },
      { label: "S2",    value: "$4,710.61" },
      { label: "S3",    value: "$4,652.65" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,839.65" },
      { label: "R2",    value: "$4,815.00" },
      { label: "R1",    value: "$4,799.78" },
      { label: "Pivot", value: "$4,775.13" },
      { label: "S1",    value: "$4,750.48" },
      { label: "S2",    value: "$4,735.26" },
      { label: "S3",    value: "$4,710.61" }
    ],
    camarilla: [
      { label: "R4", value: "$4,759.21" },
      { label: "R3", value: "$4,741.46" },
      { label: "R2", value: "$4,735.55" },
      { label: "R1", value: "$4,729.63" },
      { label: "S1", value: "$4,717.81" },
      { label: "S2", value: "$4,711.89" },
      { label: "S3", value: "$4,705.98" },
      { label: "S4", value: "$4,688.23" }
    ],
    note: "Gold trading below classic pivot $4,775 — bias bearish until reclaim; S1 $4,717 is the line in the sand."
  }
};
