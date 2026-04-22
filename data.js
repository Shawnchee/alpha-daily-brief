window.CRUCIX_DATA = {
  generated: "Wed, 22 Apr 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on tape as DXY eases, yields steady, gold reclaims $4,770 and BTC presses $79k.",

  macro: {
    dxy:      { value: "98.34",    change: "-0.05%", signal: "Dollar soft; supportive for commodities/EM." },
    gold:     { value: "$4,759",   change: "+0.42%", signal: "Bulls reclaim $4,770; uptrend intact." },
    oil:      { value: "$90.51",   change: "+0.94%", signal: "Hormuz risk premium lifting crude again." },
    silver:   { value: "—",         change: "—",      signal: "No confirmed print; watch with gold." },
    yield10y: { value: "4.29%",    change: "+5bps",  signal: "Yields firm; inflation premium in play." },
    vix:      { value: "18.92",    change: "-2.97%", signal: "Vol bleeding; equities breathing easier." },
    usdmyr:   { value: "4.02",     change: "-0.10%", signal: "Ringgit firms on softer dollar tone." },
    sp500:    { value: "7,137.90", change: "+1.05%", signal: "Breadth improving; tech leads index up." },
    verdict: "Soft DXY and cooling VIX unlock risk appetite while 4.29% yields cap euphoria. Crypto and AI megacaps get the green light; defensives lag. KLSE inherits constructive tone with ringgit support."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leadership tested by altcoin bids." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$78,500",   marketCap: "$1.55T", change1h: "N/A", change24h: "+2.10%", change7d: "N/A", insight: "BTC presses structural breakout zone above $79,240 with momentum building after Trump ceasefire extension. Break confirms path toward $85k; rejection sends tape back to $74k support." },
      { name: "Ethereum", symbol: "ETH", price: "$2,053.02", marketCap: "$248B",  change1h: "N/A", change24h: "+1.80%", change7d: "N/A", insight: "ETH lags BTC but holds the $2,000 handle as dominance reshuffles. Reclaim of $2,150 needed to signal true altseason rotation." },
      { name: "Solana",   symbol: "SOL", price: "$85.94",    marketCap: "$41B",   change1h: "N/A", change24h: "+0.70%", change7d: "N/A", insight: "SOL quietly up 3.4% on the week with healthy on-chain activity. Needs $95 reclaim to trigger the next impulse leg." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.094",       change24h: "+3.80%",  note: "Rebounds with BTC reclaim." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000365",  change24h: "-10.00%", note: "Sharp flush; speculative capitulation." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000615",  change24h: "+6.32%",  note: "Snapback on risk-on tape." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",      note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",      note: "Speculative SOL memecoin." }
    ],
    verdict: "Clear risk-on with BTC testing $79k breakout confirmation. Key level is $79,240 — close above opens $85k; failure drops tape to $74k. Altseason still waiting for ETH to clear $2,150 decisively."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,137.90",  change: "+1.05%" },
      { name: "Nasdaq",       value: "24,657.57", change: "+1.64%" },
      { name: "Dow",          value: "49,490.03", change: "+0.69%" },
      { name: "VIX",          value: "18.92",     change: "-2.97%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$652.95", change: "-0.66%", insight: "Tracks index; broad-market anchor for any portfolio." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$653.01", change: "+1.35%", insight: "Tech-heavy leader riding the AI megacap bid." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "—",       insight: "Liquid S&P proxy; mirrors VOO direction." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",       insight: "Broadest US exposure including small caps." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",       insight: "High-beta growth; amplifies risk-on tape." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$420.70", change: "+0.75%", insight: "Chip complex leads on AI capex cycle." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$43.61",  change: "+2.10%", insight: "Institutional BTC proxy; tracks spot tightly." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",       insight: "Sector cut of QQQ; megacap tech beta." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$444.78", change: "+0.42%", insight: "Tracks gold near record; DXY hedge intact." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$688.55", change: "+1.73%",  notable: false, insight: "AI ad engine still compounding into earnings week." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$201.14", change: "+1.20%",  notable: true,  insight: "Bid holds as hyperscaler capex guidance stays elevated." },
      { ticker: "TSLA",  name: "Tesla",         price: "$400.62", change: "+3.01%",  notable: true,  insight: "Leads tape; robotaxi and FSD narrative back in play." },
      { ticker: "AAPL",  name: "Apple",         price: "$270.23", change: "+2.59%",  notable: false, insight: "Reclaims 200DMA as services re-rating resumes." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$425.69", change: "+0.85%",  notable: false, insight: "Azure AI consumption growth expected to anchor print." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "—",        notable: false, insight: "Search durability and Gemini monetization are the swing factor." },
      { ticker: "AMZN",  name: "Amazon",        price: "$250.56", change: "+0.60%",  notable: false, insight: "AWS reacceleration and retail margin the dual catalyst." },
      { ticker: "NFLX",  name: "Netflix",       price: "$94.35",  change: "-3.04%",  notable: true,  insight: "Extends slide on soft guide and Hastings exit headline." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "—",        notable: false, insight: "MI accelerator traction still the key 2H narrative." },
      { ticker: "PLTR",  name: "Palantir",      price: "$146.96", change: "+2.40%",  notable: true,  insight: "Gov and commercial AI bookings keep premium intact." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "—",        notable: false, insight: "Security spend durability supports premium multiple." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "—",        notable: false, insight: "High-beta BTC proxy; moves with the crypto tape." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$430.00", change: "+11.80%", notable: true,  insight: "BTC treasury leveraged beta after 34,164 BTC buy at $2.54B." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "—",        notable: false, insight: "Ad-tech AI stack remains a secular growth standout." },
      { ticker: "SMCI",  name: "Super Micro",   price: "—",       change: "+0.59%",  notable: false, insight: "Rack-scale AI demand steady; margin recovery in focus." }
    ],
    trending: [
      { ticker: "MSTR", change: "+11.80%" },
      { ticker: "TSLA", change: "+3.01%" },
      { ticker: "AAPL", change: "+2.59%" },
      { ticker: "PLTR", change: "+2.40%" },
      { ticker: "NFLX", change: "-3.04%" }
    ],
    verdict: "AI trade is alive: NVDA, PLTR and MSFT bid into earnings week while Tesla leads megacaps. Own semis, hyperscalers and BTC-levered names; avoid Netflix until guide resets. Rotation favors tech and energy over staples."
  },

  malaysia: {
    klci:   { value: "1,612", change: "+0.30%", context: "KLCI firm into Wednesday session on softer DXY and regional risk-on tone. Banks and semis lead; focus shifts to OPR tone and US earnings spillover." },
    usdmyr: { value: "4.02",  change: "-0.10%", signal: "Ringgit firming on broad dollar weakness." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM11.24", change: "-1.06%",    insight: "Pulls back within range; OPR steady keeps NIM thesis intact." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "—",       change: "—",          insight: "Regional ASEAN banking franchise benefits from ringgit stability." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",       change: "—",          insight: "Defensive retail banking core with resilient asset quality." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",       change: "—",          insight: "Higher-yielding bank play leveraged to domestic credit." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",       change: "—",          insight: "Data-center power demand underpins structural growth story." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "RM1.65",  change: "+22.22% MTD", insight: "Rallies with NVDA/SOXX strength; packaging cycle turning." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",       change: "—",          insight: "Regional telco restructure narrative still the key driver." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",       change: "—",          insight: "Defensive healthcare earner; FX tailwind vs peers." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",       change: "—",          insight: "Digital services concessionaire levered to government volumes." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",       change: "—",          insight: "5G wholesale model steady; dividend yield defensive." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No confirmed new Bursa IPO prints in today's feed." }
    ],
    verdict: "Ringgit firming at 4.02 adds tailwind to import-sensitive names. Inari the standout — semis beta plus NVDA spillover. Bursa Wednesday sets up constructive with banks in range and tech-proxy leadership."
  },

  news: [
    { headline: "Gold reclaims $4,770 after dip to $4,700 lows",          source: "Brave New Coin",    time: "4h ago", sentiment: "BULLISH", meaning: "Gold trend intact; dips bought into DXY weakness." },
    { headline: "Strategy buys 34,164 BTC for $2.54 billion",             source: "CoinDesk",          time: "2d ago", sentiment: "BULLISH", meaning: "MSTR treasury buying absorbs float; BTC structurally bid." },
    { headline: "Trump ceasefire extension keeps BTC range-bound",        source: "AMBCrypto",         time: "6h ago", sentiment: "NEUTRAL", meaning: "Macro risk lid lifts; BTC tests structural breakout." },
    { headline: "Netflix slides on soft outlook and Hastings exit",       source: "Benzinga",          time: "1d ago", sentiment: "BEARISH", meaning: "Growth premium compressing; defensives rotate away." },
    { headline: "Crude oil firm as Hormuz risk premium returns",          source: "Trading Economics", time: "5h ago", sentiment: "WATCH",   meaning: "Energy bid; inflation read re-enters the Fed path." },
    { headline: "10Y yield rises to 4.29% on firmer inflation tone",      source: "Yahoo Finance",     time: "1d ago", sentiment: "BEARISH", meaning: "Duration risk back; caps equity multiple expansion." },
    { headline: "VIX collapses to 18.92 as equity vol cools",             source: "Cboe",              time: "8h ago", sentiment: "BULLISH", meaning: "Fear bleed signals comfort reasserting across risk assets." },
    { headline: "Big Tech earnings week: MSFT, META, AAPL, AMZN on deck", source: "CNBC",              time: "1d ago", sentiment: "WATCH",   meaning: "Megacap results set tone for index direction." }
  ],

  goldSummary: {
    "Price":    { value: "$4,759", change: "+0.42%", note: "Bulls defend; uptrend channel intact." },
    "Open":     { value: "$4,720", change: "", note: "" },
    "High":     { value: "$4,770", change: "", note: "Day high" },
    "Low":      { value: "$4,695", change: "", note: "Day low" },
    "52W High": { value: "N/A",    change: "", note: "" },
    "52W Low":  { value: "N/A",    change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,850" },
      { label: "R2",    value: "$4,810" },
      { label: "R1",    value: "$4,775" },
      { label: "Pivot", value: "$4,735" },
      { label: "S1",    value: "$4,700" },
      { label: "S2",    value: "$4,660" },
      { label: "S3",    value: "$4,625" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,810" },
      { label: "R2",    value: "$4,781" },
      { label: "R1",    value: "$4,764" },
      { label: "Pivot", value: "$4,735" },
      { label: "S1",    value: "$4,706" },
      { label: "S2",    value: "$4,689" },
      { label: "S3",    value: "$4,660" }
    ],
    camarilla: [
      { label: "R4", value: "$4,781" },
      { label: "R3", value: "$4,761" },
      { label: "R2", value: "$4,754" },
      { label: "R1", value: "$4,747" },
      { label: "S1", value: "$4,733" },
      { label: "S2", value: "$4,726" },
      { label: "S3", value: "$4,719" },
      { label: "S4", value: "$4,699" }
    ],
    note: "Price $4,759 holds above classic pivot $4,735 — bullish bias with resistance at R1 $4,775."
  }
};
