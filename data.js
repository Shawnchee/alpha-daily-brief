window.CRUCIX_DATA = {
  generated: "Mon, 22 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on shaky; BTC reclaims $65K on Iran deal as yields creep up and gold corrects.",

  macro: {
    dxy:      { value: "100.80",   change: "+0.18%", signal: "Dollar firm; pressuring EM and gold." },
    gold:     { value: "$4,155",   change: "-1.27%", signal: "Profit-take after record run; pivot test." },
    oil:      { value: "$73.69",   change: "-2.85%", signal: "Iran deal slashes geopolitical premium." },
    silver:   { value: "$65.50",   change: "+0.91%", signal: "Industrial demand keeps silver bid." },
    yield10y: { value: "4.50%",    change: "+5bps",  signal: "Yields squeeze risk; Fed cut bets fade." },
    vix:      { value: "17.28",    change: "+2.98%", signal: "Calm but creeping; hedges getting cheaper." },
    usdmyr:   { value: "4.10",     change: "+0.12%", signal: "Ringgit soft on stronger dollar." },
    sp500:    { value: "7,472.79", change: "-0.37%", signal: "Mild risk-off into weekend; tech led down." },
    verdict: "DXY firm with 10Y at 4.50% is a clear headwind for both crypto and high-multiple growth. Gold's pullback is healthy after the parabolic run, not a trend break. KLSE benefits from oil decline but ringgit weakness caps foreign inflows."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leadership intact on Iran headlines." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$65,500", marketCap: "$1.29T", change1h: "N/A", change24h: "+1.20%", change7d: "N/A", insight: "BTC reclaimed $65K after Bessent reopened Iran oil channels, easing macro tail-risk. ETF outflows slowing but $66K resistance still caps the bounce." },
      { name: "Ethereum", symbol: "ETH", price: "$1,814",  marketCap: "$218B",  change1h: "N/A", change24h: "+0.80%", change7d: "N/A", insight: "ETH lagging BTC as ETF flows stay tepid and L2 fee compression weighs on burn. Needs $2K reclaim to flip momentum bullish." },
      { name: "Solana",   symbol: "SOL", price: "$73.92",  marketCap: "$35B",   change1h: "N/A", change24h: "-1.43%", change7d: "N/A", insight: "SOL underperforming as memecoin frenzy cools and BONK-led narratives fade. Strong ecosystem revenue but price action choppy." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",    change24h: "-0.5%", note: "Neutral-bearish; needs BTC breakout." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000038", change24h: "-1.2%", note: "Compressed range; awaits risk-on." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000063", change24h: "-0.8%", note: "Stuck between 50/100 EMAs." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",        change24h: "N/A",   note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",        change24h: "N/A",   note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on lean but fragile: Iran deal removes one tail, but 4.50% yields cap upside. BTC must hold $64K to keep structure bullish; $66K reclaim opens $70K. Altseason still on ice — alts only break out after BTC dominance rolls over."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,472.79",  change: "-0.37% (Fri close)" },
      { name: "Nasdaq",       value: "26,166.60", change: "-1.32% (Fri close)" },
      { name: "Dow",          value: "51,712.71", change: "+0.29% (Fri close)" },
      { name: "VIX",          value: "17.28",     change: "+2.98% (Fri close)" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—",       change: "Fri close", insight: "Tracks S&P; broad index pulled back 0.37% Friday on tech weakness." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$740.62", change: "Fri close", insight: "Tech-heavy QQQ leads downside as megacap AI names cool off." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$746.74", change: "Fri close", insight: "SPY mirrors index; defensives offsetting tech drag." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "Fri close", insight: "Total market exposure; small-caps lagging large-caps in 2026." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "$80.19",  change: "Fri close", insight: "Innovation basket rebounds with rate-cut speculation easing." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$639.45", change: "Fri close", insight: "Chips remain the cycle leader; NVDA + AVGO carrying the tape." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$36.39",  change: "Fri close", insight: "Tracks BTC closely; outflows slowing as price reclaims $65K." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "Fri close", insight: "Tech sector pressured by 10Y yield rising to 4.50%." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$388.36", change: "Fri close", insight: "Gold ETF correcting 1.3% as DXY firms; record run digesting." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "—",       change: "Fri close", notable: false, insight: "Ad-tech leader; AI spend scrutiny remains the key debate." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$205.19", change: "Fri close", notable: true,  insight: "Still the AI cycle anchor; Blackwell demand intact into Q3." },
      { ticker: "TSLA",  name: "Tesla",         price: "—",       change: "Fri close", notable: false, insight: "Robotaxi and FSD narratives dominate the multiple story." },
      { ticker: "AAPL",  name: "Apple",         price: "$298.01", change: "Fri close", notable: false, insight: "iPhone 18 cycle hopes underpin shares despite China softness." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$379.10", change: "Fri close", notable: false, insight: "Azure AI growth re-acceleration is the only number that matters." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "Fri close", notable: false, insight: "Search disruption risk balanced by Gemini and Cloud strength." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "Fri close", notable: false, insight: "AWS margins and retail efficiency carry the bull case." },
      { ticker: "NFLX",  name: "Netflix",       price: "$77.38",  change: "Fri close", notable: true,  insight: "Down 31% post 10-for-1 split; ad tier growth the recovery catalyst." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "Fri close", notable: false, insight: "MI400 ramp is the second-half story versus NVDA dominance." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "Fri close", notable: false, insight: "AIP commercial traction priced in; needs gov upside surprise." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "Fri close", notable: false, insight: "Cybersecurity spend resilient; ARR growth must defend multiple." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "Fri close", notable: false, insight: "Beta to BTC; needs sustained volume to justify valuation." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$116.56", change: "Fri close", notable: true,  insight: "STRC halt + dilution pressure; flywheel under stress at $65K BTC." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "Fri close", notable: false, insight: "Ad-tech compounder; AXON 3.0 driving CTV monetization." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$35.69",  change: "Fri close", notable: true,  insight: "Volatile range $31-37; AI server demand vs margin compression battle." }
    ],
    trending: [
      { ticker: "SOXX", change: "+6.62%" },
      { ticker: "QQQ",  change: "+2.51%" },
      { ticker: "ARKK", change: "+2.17%" },
      { ticker: "SPY",  change: "+1.04%" },
      { ticker: "MSTR", change: "-2.50%" }
    ],
    verdict: "AI infrastructure trade still works — own SOXX, NVDA, AVGO. Rotate out of long-duration software until 10Y stabilizes below 4.40%. Avoid BTC-proxy equities (MSTR, COIN) until BTC reclaims $66K with conviction."
  },

  malaysia: {
    klci:   { value: "1,712.03", change: "+0.12% (Fri close)", context: "KLCI closed mildly positive Friday on bank strength. Monday open should track regional cues; expect cautious tone as ringgit softens." },
    usdmyr: { value: "4.10",     change: "+0.12%",             signal: "Ringgit pressured by firmer DXY." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "—", change: "Fri close", insight: "Asean's largest bank; OPR steady supports NIM and dividend yield thesis." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "—", change: "Fri close", insight: "Regional banking exposure benefits from Indonesia loan growth." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—", change: "Fri close", insight: "Defensive bank with conservative book; low beta KLCI anchor." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—", change: "Fri close", insight: "Cheapest big-cap bank by P/B; capital return story intact." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—", change: "Fri close", insight: "Data centre power demand is the structural re-rating catalyst." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—", change: "Fri close", insight: "Semi cycle proxy; rides NVDA + Broadcom RF content gains." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—", change: "Fri close", insight: "Asean telco consolidation play; XL-Smart merger upside still in price." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—", change: "Fri close", insight: "Defensive healthcare; SG and Turkey ops drive earnings mix." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—", change: "Fri close", insight: "Concession renewal overhang easing; digital ID rollout is the catalyst." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—", change: "Fri close", insight: "5G dual-network economics still the main earnings swing factor." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No notable Bursa IPOs surfaced in this scan window. Monitor SC Malaysia approvals for upcoming mid-cap listings." }
    ],
    verdict: "Ringgit at 4.10 is the headwind; foreign flows stay sidelined until DXY rolls over. Inari is the best risk/reward into the AI semi cycle. KLCI grinds sideways near 1,710 — accumulate banks on any pullback below 1,700."
  },

  news: [
    { headline: "Bitcoin reclaims $65K after Bessent opens Iran oil channels",         source: "CryptoNews",  time: "6h ago",  sentiment: "BULLISH", meaning: "Geopolitical de-escalation lifts crypto risk appetite." },
    { headline: "Crude tumbles 2.85% as US-Iran peace progress reduces premium",       source: "Investing",   time: "8h ago",  sentiment: "BEARISH", meaning: "Lower oil eases inflation, supports emerging markets." },
    { headline: "10-year Treasury yield rises to 4.50%, two-week high",                source: "TradingEcon", time: "10h ago", sentiment: "BEARISH", meaning: "Higher yields pressure tech and rate-sensitive equities." },
    { headline: "Strategy halts STRC share sales as MSTR Bitcoin flywheel stalls",     source: "Unchained",   time: "12h ago", sentiment: "BEARISH", meaning: "Funding mechanism strained; MSTR premium compresses further." },
    { headline: "Netflix down 31% since 10-for-1 stock split completion",              source: "Motley Fool", time: "14h ago", sentiment: "BEARISH", meaning: "Post-split sell-off continues amid subscriber concerns." },
    { headline: "JPMorgan: Bitcoin miners near breakeven as network sensitivity rises", source: "CoinDesk",   time: "16h ago", sentiment: "WATCH",   meaning: "Miner stress could amplify any further BTC pullback." },
    { headline: "Gold corrects 1.3% as dollar firms post-Iran deal headlines",         source: "Investing",   time: "18h ago", sentiment: "NEUTRAL", meaning: "Healthy profit-take after record run; trend intact." },
    { headline: "KLCI edges up 0.12% Friday; banks lead, USD/MYR firms",               source: "TheStar",     time: "2d ago",  sentiment: "NEUTRAL", meaning: "Mild positive close; Monday tone depends on regional cues." }
  ],

  goldSummary: {
    "Price":    { value: "$4,155.40", change: "-1.27%", note: "Profit-take after record; DXY firms." },
    "Open":     { value: "$4,209.00", change: "", note: "Friday prior close" },
    "High":     { value: "$4,230.00", change: "", note: "Day high" },
    "Low":      { value: "$4,180.00", change: "", note: "Day low" },
    "52W High": { value: "N/A",       change: "", note: "" },
    "52W Low":  { value: "N/A",       change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,282.67" },
      { label: "R2",    value: "$4,256.33" },
      { label: "R1",    value: "$4,232.67" },
      { label: "Pivot", value: "$4,206.33" },
      { label: "S1",    value: "$4,182.67" },
      { label: "S2",    value: "$4,156.33" },
      { label: "S3",    value: "$4,132.67" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,256.33" },
      { label: "R2",    value: "$4,237.23" },
      { label: "R1",    value: "$4,225.43" },
      { label: "Pivot", value: "$4,206.33" },
      { label: "S1",    value: "$4,187.23" },
      { label: "S2",    value: "$4,175.43" },
      { label: "S3",    value: "$4,156.33" }
    ],
    camarilla: [
      { label: "R4", value: "$4,236.50" },
      { label: "R3", value: "$4,222.75" },
      { label: "R2", value: "$4,218.17" },
      { label: "R1", value: "$4,213.58" },
      { label: "S1", value: "$4,204.42" },
      { label: "S2", value: "$4,199.83" },
      { label: "S3", value: "$4,195.25" },
      { label: "S4", value: "$4,181.50" }
    ],
    note: "Gold at $4,155 sits below classic pivot $4,206 — short-term bearish; bulls need to reclaim $4,206 to flip momentum."
  }
};
