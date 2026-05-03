window.CRUCIX_DATA = {
  generated: "Sun, 03 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on tone returning as BTC reclaims $78K with VIX subdued and DXY softening below 99.",

  macro: {
    dxy:      { value: "98.21",   change: "+0.06%", signal: "Dollar firm but capped under 99 resistance." },
    gold:     { value: "$4,613.84", change: "-0.18%", signal: "Mild profit-taking; trend bias still bullish." },
    oil:      { value: "$101.94", change: "-2.98%", signal: "Crude slips on demand worries, OPEC supply." },
    silver:   { value: "—",       change: "—",       signal: "Tracks gold; industrial demand keeps bid firm." },
    yield10y: { value: "4.38%",   change: "-3bps",  signal: "Yields ease; rate-cut hopes building again." },
    vix:      { value: "16.99",   change: "+0.59%", signal: "Volatility low; complacency risk creeping in." },
    usdmyr:   { value: "3.9680",  change: "+0.03%", signal: "Ringgit holds sub-4.00 as DXY contained." },
    sp500:    { value: "7,230.12", change: "+0.29%", signal: "Index near record highs into earnings tail." },
    verdict: "Soft DXY, easing 10Y yields and a sleepy VIX form a textbook risk-on backdrop, lifting both equities and crypto. Gold consolidates near $4,600 as a hedge against any Fed surprise but momentum favors growth assets. KLSE benefits via stable ringgit and firmer regional risk appetite into Monday's open."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leads; alts lagging on relative basis." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$78,255", marketCap: "$1.55T", change1h: "N/A", change24h: "+1.16%", change7d: "N/A", insight: "BTC is grinding back toward the $80K psychological level after defending $77K. Institutional ETF inflows and shrinking exchange supply remain the dominant tailwinds." },
      { name: "Ethereum", symbol: "ETH", price: "$2,053", marketCap: "$247B",  change1h: "N/A", change24h: "+0.80%", change7d: "N/A", insight: "ETH continues to lag BTC with the ETH/BTC ratio near multi-year lows. A reclaim of $2,200 is needed before any altseason narrative can take hold." },
      { name: "Solana",   symbol: "SOL", price: "$143.81", marketCap: "$72B",   change1h: "N/A", change24h: "+1.20%", change7d: "N/A", insight: "SOL holds above $140 with healthy on-chain activity and stable memecoin volumes. Resistance sits at $160 with strong support at $130." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.106",     change24h: "+2.10%", note: "Leading meme gains; momentum bid." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000037", change24h: "+0.50%", note: "Stuck between EMAs; awaits breakout." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000063", change24h: "+0.80%", note: "Coiling near consolidation upper band." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",        change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",        change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Crypto is firmly risk-on with BTC reclaiming $78K and majors green across the board. The key level is $80K — a clean break invites momentum funds back and could ignite alt rotation. Until ETH/BTC turns, treat any altseason talk as premature."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,230.12",  change: "+0.29%" },
      { name: "Nasdaq",       value: "25,114.44", change: "+0.89%" },
      { name: "Dow",          value: "49,499.27", change: "-0.31%" },
      { name: "VIX",          value: "16.99",     change: "+0.59%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A"     }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$655.75", change: "Fri close", insight: "Tracks S&P at record territory; core long-term holding remains intact." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$674.15", change: "Fri close", insight: "Tech leadership intact via AAPL strength and AI capex bid lifting megacaps." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",        change: "Fri close", insight: "Mirrors VOO; Friday session closed near records on Apple strength." },
      { ticker: "VTI",  name: "Total Market",      price: "—",        change: "Fri close", insight: "Broad-market exposure benefiting from large-cap tech rally." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "$76.92",  change: "Fri close", insight: "High-beta growth bouncing with risk-on mood and lower yields." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$460.94", change: "Fri close", insight: "Chip basket steady; AI capex narrative still supportive despite NVDA flat." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$43.89",  change: "Fri close", insight: "Spot BTC ETF tracking BTC near $78K; institutional flows remain net positive." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",        change: "Fri close", insight: "Tech sector benefits from AAPL +3.3% and broad megacap firmness." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$431.20", change: "Fri close", insight: "Gold proxy steady near $4,600 as inflation hedge bid persists." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$608.57", change: "Fri close", notable: false, insight: "Slipped 0.5% Friday; ad-revenue and AI spend remain core drivers." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$198.61", change: "Fri close", notable: false, insight: "Flat session at $198; eyes on next earnings for AI demand confirmation." },
      { ticker: "TSLA",  name: "Tesla",         price: "$390.97", change: "Fri close", notable: true,  insight: "Up 2.4% on robotaxi optimism; volatility remains tied to delivery numbers." },
      { ticker: "AAPL",  name: "Apple",         price: "$280.19", change: "Fri close", notable: true,  insight: "Surged 3.3% post-earnings on record iPhone sales and $100B buyback." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",        change: "Fri close", notable: false, insight: "Azure AI growth keeps it as a megacap defensive growth holding." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",        change: "Fri close", notable: false, insight: "Search and Cloud momentum balance regulatory overhang risk." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",        change: "Fri close", notable: false, insight: "AWS reacceleration is the key narrative for the next leg higher." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",        change: "Fri close", notable: false, insight: "Eased 1.7% Friday; ad-tier subs and content slate remain catalysts." },
      { ticker: "AMD",   name: "AMD",           price: "—",        change: "Fri close", notable: false, insight: "Tracks AI-chip narrative; needs MI400 traction to close gap on NVDA." },
      { ticker: "PLTR",  name: "Palantir",      price: "$144.45", change: "Fri close", notable: true,  insight: "Up 3.9% on AI commercial deal flow; valuation remains the chief debate." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",        change: "Fri close", notable: false, insight: "Cybersecurity demand resilient; ARR growth keeps multiple supported." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",        change: "Fri close", notable: false, insight: "Tracks BTC strength; fee compression offset by stablecoin revenue stream." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$180.00", change: "Fri close", notable: true,  insight: "Jumped ~9% Friday as BTC recovered to $78K; remains a leveraged BTC proxy." },
      { ticker: "APP",   name: "AppLovin",      price: "—",        change: "Fri close", notable: false, insight: "Adtech leader; AXON engine drives sustained margin expansion." },
      { ticker: "SMCI",  name: "Super Micro",   price: "—",        change: "Fri close", notable: false, insight: "AI-server demand strong; analysts forecast 33% EPS, 21% revenue growth." }
    ],
    trending: [
      { ticker: "MSTR", change: "+9.00%" },
      { ticker: "PLTR", change: "+3.89%" },
      { ticker: "AAPL", change: "+3.30%" },
      { ticker: "TSLA", change: "+2.40%" },
      { ticker: "META", change: "-0.50%" }
    ],
    verdict: "AI trade is intact but rotating — AAPL and MSTR led Friday while NVDA paused, suggesting breadth is broadening. Own megacap quality (AAPL, MSFT) plus selective high-beta (PLTR, MSTR) for BTC exposure. Avoid chasing extended names; let the next pullback offer entries."
  },

  malaysia: {
    klci:   { value: "1,753.43",  change: "-0.26%", context: "KLCI eased modestly Friday with banks and plantations soft. Monday open should be neutral-to-firm given regional risk-on tone." },
    usdmyr: { value: "3.9680",    change: "+0.03%", signal: "Ringgit steady sub-4.00; DXY softness helps." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "—", change: "Fri close", insight: "Largest local bank; stable OPR keeps NIM intact and dividend yield attractive." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "—", change: "Fri close", insight: "Regional ASEAN exposure provides growth beyond domestic Malaysian banking cycle." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—", change: "Fri close", insight: "Defensive retail banking play with low NPL ratios and consistent earnings." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—", change: "Fri close", insight: "Mid-cap bank with attractive valuation and improving cost-to-income ratio." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—", change: "Fri close", insight: "Utility anchor benefiting from data-center demand and energy transition capex." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—", change: "Fri close", insight: "Semi proxy linked to NVDA/Broadcom cycle; AI capex remains supportive." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—", change: "Fri close", insight: "Regional telco consolidation story; CelcomDigi merger synergies still flowing." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—", change: "Fri close", insight: "Defensive healthcare with rising ASEAN demand and Turkish unit recovery." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—", change: "Fri close", insight: "Digital government services moat; concession renewals key to long-term thesis." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—", change: "Fri close", insight: "5G monetization and stable dividend make it a defensive telco core holding." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No major IPO confirmed in this morning's search window. Watch Bursa announcements early Monday for any new prospectus." }
    ],
    verdict: "Ringgit at 3.97 is the calmest it has been in months and supports the foreign-flow case for KLSE. Inari is the standout if NVDA earnings reaffirm AI capex. Monday open should track regional risk-on with banks and semis as likely leaders."
  },

  news: [
    { headline: "Bitcoin reclaims $78K as ETF inflows accelerate",          source: "CoinDesk",       time: "6h ago", sentiment: "BULLISH", meaning: "Institutional bid strengthens; $80K next psychological hurdle." },
    { headline: "Apple posts record Q2, announces $100B buyback",            source: "CNBC",            time: "1d ago", sentiment: "BULLISH", meaning: "Megacap quality rally extends; iPhone cycle reaccelerating into 2026." },
    { headline: "Strategy (MSTR) jumps ~9% as BTC recovers",                 source: "Bitcoin Mag",     time: "1d ago", sentiment: "BULLISH", meaning: "Leveraged BTC proxy outperforms; treasury allocation thesis validated." },
    { headline: "ARK Invest sees BTC market cap hitting $16T by 2030",       source: "CoinDesk",        time: "2d ago", sentiment: "BULLISH", meaning: "Long-term institutional thesis reinforced for digital asset allocation." },
    { headline: "10Y yield slips below 4.45% on softer data",                source: "Reuters",         time: "1d ago", sentiment: "BULLISH", meaning: "Lower yields support both equities and rate-sensitive growth names." },
    { headline: "Crude oil drops nearly 3% on demand worries",               source: "Bloomberg",       time: "1d ago", sentiment: "WATCH",   meaning: "Energy weakness eases inflation concern but signals demand softness." },
    { headline: "Canada provincial fund buys $219M MSTR stake",              source: "Yahoo Finance",   time: "2d ago", sentiment: "BULLISH", meaning: "Sovereign-style buyer validates Bitcoin treasury allocation thesis." },
    { headline: "USD/MYR steady near 3.97 as DXY softens",                   source: "CNBC",            time: "1d ago", sentiment: "BULLISH", meaning: "Ringgit stability supports KLSE foreign-flow case into Monday." }
  ],

  goldSummary: {
    "Price":  { value: "$4,613.84", change: "-0.18%", note: "Consolidating after a multi-week rally." },
    "Open":   { value: "$4,622.00", change: "", note: "" },
    "High":   { value: "$4,635.00", change: "", note: "Day high" },
    "Low":    { value: "$4,605.00", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,661.00" },
      { label: "R2",    value: "$4,648.00" },
      { label: "R1",    value: "$4,631.00" },
      { label: "Pivot", value: "$4,618.00" },
      { label: "S1",    value: "$4,601.00" },
      { label: "S2",    value: "$4,588.00" },
      { label: "S3",    value: "$4,571.00" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,648.00" },
      { label: "R2",    value: "$4,636.54" },
      { label: "R1",    value: "$4,629.46" },
      { label: "Pivot", value: "$4,618.00" },
      { label: "S1",    value: "$4,606.54" },
      { label: "S2",    value: "$4,599.46" },
      { label: "S3",    value: "$4,588.00" }
    ],
    camarilla: [
      { label: "R4", value: "$4,630.50" },
      { label: "R3", value: "$4,622.25" },
      { label: "R2", value: "$4,619.50" },
      { label: "R1", value: "$4,616.75" },
      { label: "S1", value: "$4,611.25" },
      { label: "S2", value: "$4,608.50" },
      { label: "S3", value: "$4,605.75" },
      { label: "S4", value: "$4,597.50" }
    ],
    note: "Spot $4,614 sits just below classic pivot $4,618 — neutral-bearish bias unless reclaimed."
  }
};
