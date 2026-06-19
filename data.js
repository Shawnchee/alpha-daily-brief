window.CRUCIX_DATA = {
  generated: "Fri, 19 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on tape with semis leading, but gold/silver flush flags positioning churn into options expiry.",

  macro: {
    dxy:      { value: "100.52",  change: "-0.10%", signal: "Soft dollar; supportive for EM and gold dips." },
    gold:     { value: "$4,172.90", change: "-1.72%", signal: "Profit-taking flush after parabolic run." },
    oil:      { value: "$76.51", change: "-0.12%", signal: "Iran pause cooling geopolitical risk premium." },
    silver:   { value: "$64.91", change: "-2.12%", signal: "Tracking gold lower; industrial bid intact." },
    yield10y: { value: "4.488%", change: "+2.5bps",  signal: "Yields creeping; watch 4.55% resistance level." },
    vix:      { value: "—",  change: "—", signal: "Vol contained; complacency risk into OPEX." },
    usdmyr:   { value: "4.0625", change: "-0.36%", signal: "Ringgit firm; BNM neutral stance supportive." },
    sp500:    { value: "7,467",  change: "+0.23%", signal: "Grinding higher led by mega-cap tech." },
    verdict: "DXY soft and VIX subdued keeps risk assets bid, even as 10Y yields edge up. Gold's -1.72% flush is a positioning reset, not regime change — dip-buyers should reload near $4,130 pivot. Crypto and US tech remain the cleanest longs; KLSE benefits from dollar weakness."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance steady; alts lagging on weak tape." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$63,090.90", marketCap: "$1.26T",  change1h: "N/A", change24h: "+0.72%", change7d: "N/A", insight: "BTC holding the $62-65K range as ETF flows stabilize. Reclaim of $65K opens path to $70K retest." },
      { name: "Ethereum", symbol: "ETH", price: "$1,700.84", marketCap: "$205B",  change1h: "N/A", change24h: "-1.20%", change7d: "N/A", insight: "ETH lagging BTC again as Layer-2 narrative cools. Key support at $1,650; below opens $1,500 trap door." },
      { name: "Solana",   symbol: "SOL", price: "$69.44", marketCap: "$32B",  change1h: "N/A", change24h: "-4.30%", change7d: "N/A", insight: "SOL down 4.3% on weak memecoin volumes and DEX outflows. $65 is critical bull-defend zone." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065", change24h: "-2.10%", note: "Bearish below 100-EMA pivot." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000278", change24h: "-3.40%", note: "Liquidity drying; speculative bid fading." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000063", change24h: "-1.80%", note: "Range-bound between EMAs." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",    change24h: "N/A",  note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",    change24h: "N/A",  note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on cools at the edge as alts and memes bleed against a flat BTC. $65K is the BTC line; reclaim resumes risk-on, lose it and we flush to $60K. No altseason signal until ETH reclaims $1,800 and dominance rolls over."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,467", change: "+0.23%" },
      { name: "Nasdaq",       value: "24,892", change: "+0.74%" },
      { name: "Dow",          value: "47,100", change: "+0.26%" },
      { name: "VIX",          value: "—", change: "—" },
      { name: "Russell 2000", value: "N/A",  change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—", change: "—", insight: "Tracks S&P; mega-cap tech doing the heavy lifting." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$740.62", change: "+2.51%", insight: "Semi-led rip; QQQ printing new highs on AI capex." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$746.74", change: "+1.04%", insight: "Breadth still narrow; mega-caps carrying the index." },
      { ticker: "VTI",  name: "Total Market",      price: "—", change: "—", insight: "Broad tape lagging cap-weighted; small-caps soft." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—", change: "—", insight: "High-beta growth bid returning with AI/crypto momentum." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$639.45", change: "+6.62%", insight: "Massive rip on NVDA/AVGO leadership — flow-driven." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$35.05", change: "+0.72%", insight: "ETF flows steady; tracks BTC at ~1,800x ratio." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—", change: "—", insight: "Tech leadership intact; software lagging hardware." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$390.18", change: "-1.72%", insight: "Profit-taking unwind; $385 is dip-buy zone." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "—", change: "-0.64%", notable: false, insight: "Ad spend resilient; AI capex narrative supports premium multiple." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$210.69", change: "+2.95%", notable: true, insight: "Semi cycle leadership intact; SOXX +6.62% confirms momentum." },
      { ticker: "TSLA",  name: "Tesla",         price: "—", change: "-2.10%", notable: false, insight: "Robotaxi narrative wobbles; delivery downgrades pressure margins." },
      { ticker: "AAPL",  name: "Apple",         price: "$299.24", change: "+0.40%", notable: false, insight: "Services growth + buybacks anchor the mega-cap floor." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$412.67", change: "-0.81%", notable: false, insight: "Azure AI monetization remains the bull thesis; consolidating." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—", change: "—", notable: false, insight: "Search moat under scrutiny; Gemini adoption is the swing factor." },
      { ticker: "AMZN",  name: "Amazon",        price: "$244.39", change: "+2.90%", notable: false, insight: "AWS reaccelerating on AI infra demand; retail margin lift." },
      { ticker: "NFLX",  name: "Netflix",       price: "—", change: "—", notable: false, insight: "Ad-tier and password crackdown driving structural ARPU growth." },
      { ticker: "AMD",   name: "AMD",           price: "—", change: "—", notable: false, insight: "MI300 ramp into hyperscaler refresh — secondary AI beta play." },
      { ticker: "PLTR",  name: "Palantir",      price: "—", change: "—", notable: false, insight: "AIP commercial flywheel intact; valuation extreme but momentum strong." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—", change: "—", notable: false, insight: "Cybersecurity spend prioritized; Falcon platform consolidation continues." },
      { ticker: "COIN",  name: "Coinbase",      price: "—", change: "—", notable: false, insight: "Levered to BTC volume and stablecoin yields; needs $65K reclaim." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$112.25", change: "+1.20%", notable: false, insight: "BTC proxy with leverage; NAV premium sensitivity is the risk." },
      { ticker: "APP",   name: "AppLovin",      price: "—", change: "—", notable: false, insight: "Ad-tech engine still outperforming; mobile gaming spend resilient." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$30.72", change: "+8.60%", notable: true, insight: "Liquid-cooling demand from AI build-outs driving recovery bid." }
    ],
    trending: [
      { ticker: "SMCI", change: "+8.60%" },
      { ticker: "SOXX", change: "+6.62%" },
      { ticker: "NVDA", change: "+2.95%" },
      { ticker: "AMZN", change: "+2.90%" },
      { ticker: "TSLA", change: "-2.10%" }
    ],
    verdict: "AI trade is back to leadership — SOXX +6.62% and NVDA/SMCI confirm capex cycle is intact. Rotate INTO semis/hardware and OUT of low-multiple cyclicals. Avoid TSLA until delivery clarity; Mag7 ex-Tesla remains the cleanest long."
  },

  malaysia: {
    klci:   { value: "1,707.68", change: "-0.17%", context: "KLCI drifted lower on bank weakness. Monday outlook hinges on Wall Street follow-through and any BNM signal." },
    usdmyr: { value: "4.0625", change: "-0.36%", signal: "Ringgit firm vs soft DXY backdrop." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM11.16",  change: "0.00%", insight: "OPR steady at 3.00%; NIMs stable, dividend yield ~6% anchors the base." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "RM7.63",  change: "-1.90%", insight: "Regional ASEAN exposure pressured; Indonesia margin softness the drag." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",          change: "—", insight: "Defensive retail-bank tilt; mortgage book stable through cycle." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",          change: "—", insight: "Capital-rich with strong CET1; dividend story remains the draw." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",          change: "—", insight: "Data-center demand a structural tailwind for capacity build-out." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "RM2.25",  change: "+1.40%", insight: "Semi cycle leverage — NVDA/SOXX strength bullish for Inari volumes." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",          change: "—", insight: "Tower monetization and Indonesia consolidation are the catalysts." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",          change: "—", insight: "Medical tourism rebound and Turkey pricing power supportive." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",          change: "—", insight: "Digital govt-services moat; immigration volumes accelerating." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",          change: "—", insight: "5G DNB transition risk balanced by enterprise data growth." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No major IPO in the headlines this morning. Bursa pipeline remains quiet pending mid-year refresh." }
    ],
    verdict: "Ringgit firmness at 4.06 vs soft DXY is the cleanest macro signal. Inari is the best risk-reward — semi tape leadership translates directly. Bursa likely opens flat-to-up on Wall Street tailwind; banks remain the laggard."
  },

  news: [
    { headline: "Stocks log record closes as Dow clears 47K", source: "Finviz", time: "8h ago", sentiment: "BULLISH", meaning: "Breadth narrow but record highs reinforce trend." },
    { headline: "Bitcoin and Ethereum prices sliding despite Iran peace deal", source: "Yahoo Finance", time: "12h ago", sentiment: "BEARISH", meaning: "Geopolitical relief fails to lift crypto risk appetite." },
    { headline: "Gold falls 1.72% as profit-taking hits parabolic rally", source: "Investing.com", time: "6h ago", sentiment: "WATCH", meaning: "Positioning unwind; trend intact above $4,100 support." },
    { headline: "SOXX surges 6.62% on AI capex revival", source: "ETF.com", time: "10h ago", sentiment: "BULLISH", meaning: "Semis leadership confirms 2026 AI capex cycle." },
    { headline: "USD/MYR slides to 4.06 as DXY softens", source: "Investing.com", time: "5h ago", sentiment: "BULLISH", meaning: "Ringgit firmness supportive for Malaysian risk assets." },
    { headline: "Bursa KLCI closes lower 0.17% led by banks", source: "Investing.com", time: "16h ago", sentiment: "BEARISH", meaning: "Banks drag offset semis lift on KLCI." },
    { headline: "10Y Treasury yields edge up to 4.49%", source: "TradingView", time: "7h ago", sentiment: "WATCH", meaning: "Yield creep risk for high-multiple tech if sustained." },
    { headline: "Tesla slides 2.1% on robotaxi delivery overhang", source: "Yahoo Finance", time: "9h ago", sentiment: "BEARISH", meaning: "Margin pressure persists; Mag7 ex-TSLA outperforming." }
  ],

  goldSummary: {
    "Price":  { value: "$4,172.90", change: "-1.72%", note: "Profit-taking flush after parabolic run." },
    "Open":   { value: "$4,245.90", change: "", note: "Prior session open" },
    "High":   { value: "$4,233.20", change: "", note: "Day high" },
    "Low":    { value: "$4,139.20", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,318.34" },
      { label: "R2",    value: "$4,275.77" },
      { label: "R1",    value: "$4,224.34" },
      { label: "Pivot", value: "$4,181.77" },
      { label: "S1",    value: "$4,130.34" },
      { label: "S2",    value: "$4,087.77" },
      { label: "S3",    value: "$4,036.34" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,275.77" },
      { label: "R2",    value: "$4,239.86" },
      { label: "R1",    value: "$4,217.68" },
      { label: "Pivot", value: "$4,181.77" },
      { label: "S1",    value: "$4,145.86" },
      { label: "S2",    value: "$4,123.68" },
      { label: "S3",    value: "$4,087.77" }
    ],
    camarilla: [
      { label: "R4", value: "$4,224.60" },
      { label: "R3", value: "$4,198.75" },
      { label: "R2", value: "$4,190.13" },
      { label: "R1", value: "$4,181.52" },
      { label: "S1", value: "$4,164.28" },
      { label: "S2", value: "$4,155.67" },
      { label: "S3", value: "$4,147.05" },
      { label: "S4", value: "$4,121.20" }
    ],
    note: "Gold trades below classic pivot $4,181.77 — short-term bearish bias until reclaim; S1 $4,130 is the dip-buy line."
  }
};
