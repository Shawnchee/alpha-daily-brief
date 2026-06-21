window.CRUCIX_DATA = {
  generated: "Sat, 21 Jun 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Semis ripped Friday on AI orders; gold cracked as DXY firmed and yields ticked up.",

  macro: {
    dxy:      { value: "100.52", change: "-0.10%", signal: "Soft dollar tape; risk-on tone continues." },
    gold:     { value: "$4,172.90", change: "-1.72%", signal: "Profit-taking after ATH; ceasefire optimism hits bid." },
    oil:      { value: "$76.51", change: "-0.12%", signal: "WTI soft as Iran tensions cool slightly." },
    silver:   { value: "$64.91", change: "-2.12%", signal: "Industrial metals follow gold lower today." },
    yield10y: { value: "4.46%", change: "+2bps", signal: "Yields drift up but well-contained range." },
    vix:      { value: "16.78", change: "+2.32%", signal: "Vol still subdued despite small uptick." },
    usdmyr:   { value: "4.1370", change: "+0.07%", signal: "Ringgit stable but soft vs dollar bias." },
    sp500:    { value: "7,500.58", change: "+1.08%", signal: "Index hits fresh highs into the weekend." },
    verdict: "DXY at 100 with gold pulling back and VIX subdued spells a clean risk-on tape into next week. Crypto stays bid on softer dollar; US equities ride AI momentum into earnings season. KLSE benefits from regional risk appetite but Ringgit weakness caps export exuberance."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leadership intact; alts await trigger." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$64,200", marketCap: "$1.27T",  change1h: "N/A", change24h: "+0.92%", change7d: "N/A", insight: "BTC firmed back near $64K after Friday's geopolitical wobble around the Hormuz threat. Key level remains $65K reclaim; below $62K opens deeper flush." },
      { name: "Ethereum", symbol: "ETH", price: "$1,724", marketCap: "$208B",   change1h: "N/A", change24h: "-0.05%", change7d: "N/A", insight: "ETH consolidating in mid-$1,700s; staking flows steady but ETF inflows underwhelming. Watch $1,800 reclaim for any altseason ignition." },
      { name: "Solana",   symbol: "SOL", price: "$78.97",  marketCap: "$38B",    change1h: "N/A", change24h: "-1.43%", change7d: "N/A", insight: "SOL still leading L1 mindshare via memecoin volume and DePIN narratives. Sub-$75 invalidates the recent bullish range." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",     change24h: "-0.8%", note: "Neutral-bearish; needs BTC strength." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000029",  change24h: "+1.2%", note: "Six-day rebound off oversold." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000050",  change24h: "-0.5%", note: "Rejected at daily resistance band." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",   note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",   note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on but cautious — BTC defending $64K with crypto firming over the weekend after Friday's Hormuz-driven flush. Key level: BTC needs to reclaim $65K to flip momentum bullish. No altseason yet — ETH:BTC ratio still grinding lower."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,500.58",  change: "+1.08%" },
      { name: "Nasdaq",       value: "26,517.93", change: "+1.91%" },
      { name: "Dow",          value: "51,564.70", change: "+0.14%" },
      { name: "VIX",          value: "16.78",     change: "+2.32%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—",        change: "Fri close", insight: "Tracks SPY; benefits from same broad index melt-up." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$740.62",  change: "+2.51%",    insight: "Tech-heavy QQQ led major ETFs Friday on Nasdaq breakout." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$746.74",  change: "+1.04%",    insight: "New highs; broad market participation remains constructive." },
      { ticker: "VTI",  name: "Total Market",      price: "—",        change: "Fri close", insight: "Total-market exposure mirrors SPY tape; small caps lag." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",        change: "Fri close", insight: "High-beta innovation basket likely benefited from semis lift." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$639.45",  change: "+6.62%",    insight: "Semis ETF ripped on SMCI $39B AI order news and chip demand." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$35.67",   change: "+0.92%",    insight: "Spot Bitcoin ETF tracking BTC near $64K through the weekend." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",        change: "Fri close", insight: "Tech sector ETF lifted by AI-server and semiconductor strength." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$390.00",  change: "-1.72%",    insight: "Gold ETF pulled back hard as dollar firmed and yields rose." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "—",       change: "Fri close", notable: false, insight: "AI capex narrative still the dominant driver into Q3 setup." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$210.33", change: "Fri close", notable: true,  insight: "Mega-cap AI bellwether at $5.17T cap — semis leadership intact." },
      { ticker: "TSLA",  name: "Tesla",         price: "—",       change: "Fri close", notable: false, insight: "Robotaxi narrative drives sentiment; FSD adoption the key metric." },
      { ticker: "AAPL",  name: "Apple",         price: "$299.24", change: "Fri close", notable: false, insight: "Apple steady near $300; services growth offsets hardware plateau." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$379.40", change: "Fri close", notable: false, insight: "Azure + Copilot run rate keeps mega-cap multiple defensible." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",       change: "Fri close", notable: false, insight: "Search resilient; Gemini and cloud the key 2026 catalysts." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",       change: "Fri close", notable: false, insight: "AWS reacceleration plus retail margins driving operating leverage." },
      { ticker: "NFLX",  name: "Netflix",       price: "$77.38",  change: "Fri close", notable: true,  insight: "Post-split NFLX down 15% YTD; ad-tier monetization in focus." },
      { ticker: "AMD",   name: "AMD",           price: "—",       change: "Fri close", notable: false, insight: "MI300 ramp and data-center share gains support the AI re-rate." },
      { ticker: "PLTR",  name: "Palantir",      price: "—",       change: "Fri close", notable: false, insight: "Government AI deals plus commercial AIP keep the growth flywheel turning." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",       change: "Fri close", notable: false, insight: "Cybersecurity leader; ARR growth holds up despite enterprise scrutiny." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",       change: "Fri close", notable: false, insight: "Trades as high-beta BTC proxy; revenue mix improving with custody." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$112.00", change: "Fri close", notable: true,  insight: "STRC unwind pressures mNAV; Saylor still signaling more BTC buys." },
      { ticker: "APP",   name: "AppLovin",      price: "—",       change: "Fri close", notable: false, insight: "Ad-tech AI engine driving outsized ARPDAU growth this cycle." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$30.00",  change: "+10.0%",    notable: true,  insight: "SMCI +10% on $39B AI server order optimism — sentiment turning." }
    ],
    trending: [
      { ticker: "SMCI", change: "+10.0%" },
      { ticker: "SOXX", change: "+6.62%" },
      { ticker: "QQQ",  change: "+2.51%" },
      { ticker: "NDX",  change: "+1.91%" },
      { ticker: "SPY",  change: "+1.04%" }
    ],
    verdict: "AI trade is firmly back — SMCI's $39B order print lit semis on fire and dragged QQQ to fresh highs. Rotation favors semis, AI servers, and mega-cap tech; defensives and small caps lag. Own SOXX/QQQ/NVDA into the next earnings cycle; avoid chasing speculative names without earnings."
  },

  malaysia: {
    klci:   { value: "1,712.03", change: "+0.12%", context: "KLCI closed Friday up 2 points at 1,712 on light volume. Monday opens with tailwind from Wall Street's Friday rally but Ringgit softness caps gains." },
    usdmyr: { value: "4.1370", change: "+0.07%", signal: "Ringgit soft but stable; exporters benefit modestly." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "—", change: "Fri close", insight: "Analyst RM12.01 target implies 7.6% upside; OPR stability supports NIM." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "—", change: "Fri close", insight: "Regional banking franchise leveraged to ASEAN growth recovery." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—", change: "Fri close", insight: "Defensive bank with sticky deposit base and clean asset quality." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—", change: "Fri close", insight: "Capital-rich mid-tier bank; dividend yield remains the draw." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—", change: "Fri close", insight: "Data-center power demand thesis still the dominant catalyst." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—", change: "Fri close", insight: "Direct beneficiary of NVDA strength and global semi cycle reacceleration." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—", change: "Fri close", insight: "Telco consolidation story; XL-Smartfren merger remains the swing factor." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—", change: "Fri close", insight: "Pan-Asian hospital operator; medical tourism tailwind intact." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—", change: "Fri close", insight: "Digital government services platform with monopoly-like moat." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—", change: "Fri close", insight: "5G dual-network rollout supports postpaid ARPU growth in 2026." }
    ],
    ipos: [
      { name: "N/A this week", sector: "—", price: "—", listingDate: "—", status: "—", note: "No confirmed new Bursa IPO from this morning's scan. Check Bursa announcements page for the updated listing calendar." }
    ],
    verdict: "Ringgit drifting near 4.14 caps KLCI upside but Friday's flat tape suggests resilience. Best risk-reward: Inari on global semi tailwind plus NVDA momentum. Monday Bursa opens cautiously higher on Wall Street's Friday rally, but watch oil and gold reaction to Iran headlines."
  },

  news: [
    { headline: "Super Micro surges 10% on $39B AI server order optimism",   source: "Benzinga",     time: "2d ago", sentiment: "BULLISH", meaning: "Confirms AI infra capex cycle still accelerating into 2H26." },
    { headline: "Bitcoin holds near $64K as Hormuz threat clouds Iran ceasefire", source: "CoinDesk", time: "1d ago", sentiment: "WATCH",   meaning: "Geopolitics driving short-term crypto vol; structural bid intact." },
    { headline: "STRC preferred stock collapses below $83 in five weeks",    source: "CoinDesk",     time: "1d ago", sentiment: "BEARISH", meaning: "MicroStrategy capital structure stress could pressure MSTR mNAV." },
    { headline: "Gold falls 1.7% as dollar firms on Iran ceasefire hopes",   source: "Investing",    time: "1d ago", sentiment: "NEUTRAL", meaning: "Safe-haven unwind; watch 4,100 as next major support." },
    { headline: "Nasdaq closes at record high led by semiconductor rally",   source: "CNBC",         time: "2d ago", sentiment: "BULLISH", meaning: "Broad AI-trade reacceleration into earnings season setup." },
    { headline: "Netflix down 31% since 10-for-1 split completion",          source: "Motley Fool",  time: "1d ago", sentiment: "BEARISH", meaning: "Ad-tier monetization questions weighing on streaming leader." },
    { headline: "Bitcoin miners under pressure as costs exceed market price", source: "EGW News",    time: "2d ago", sentiment: "BEARISH", meaning: "Hashprice stress could force capitulation selling near support." },
    { headline: "KLCI closes Friday up 2 points at 1,712 on light volume",   source: "Yahoo Finance", time: "2d ago", sentiment: "NEUTRAL", meaning: "Bursa quiet ahead of Monday; awaits regional cues." }
  ],

  goldSummary: {
    "Price":  { value: "$4,172.90", change: "-1.72%", note: "Sharp pullback from this week's highs." },
    "Open":   { value: "$4,209.15", change: "", note: "" },
    "High":   { value: "$4,213.66", change: "", note: "Day high" },
    "Low":    { value: "$4,120.89", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,301.76" },
      { label: "R2",    value: "$4,257.71" },
      { label: "R1",    value: "$4,208.99" },
      { label: "Pivot", value: "$4,164.94" },
      { label: "S1",    value: "$4,116.22" },
      { label: "S2",    value: "$4,072.17" },
      { label: "S3",    value: "$4,023.45" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,257.71" },
      { label: "R2",    value: "$4,222.27" },
      { label: "R1",    value: "$4,200.38" },
      { label: "Pivot", value: "$4,164.94" },
      { label: "S1",    value: "$4,129.50" },
      { label: "S2",    value: "$4,107.61" },
      { label: "S3",    value: "$4,072.17" }
    ],
    camarilla: [
      { label: "R4", value: "$4,211.28" },
      { label: "R3", value: "$4,185.77" },
      { label: "R2", value: "$4,177.27" },
      { label: "R1", value: "$4,168.76" },
      { label: "S1", value: "$4,151.76" },
      { label: "S2", value: "$4,143.25" },
      { label: "S3", value: "$4,134.75" },
      { label: "S4", value: "$4,109.24" }
    ],
    note: "Gold at $4,172 sits just above the $4,164 classic pivot — modestly bullish bias but a break below opens $4,116 S1 quickly."
  }
};
