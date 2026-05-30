window.CRUCIX_DATA = {
  generated: "Sat, 30 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on US equities at fresh highs while crypto consolidates near $73K BTC; gold stays bid above $4,500.",

  macro: {
    dxy:      { value: "99.11",   change: "-0.15%", signal: "Dollar soft; supports risk and EM FX." },
    gold:     { value: "$4,539",  change: "+0.97%", signal: "Bid on dollar weakness and yield drift." },
    oil:      { value: "$90.57",  change: "-2.04%", signal: "WTI slips on demand softness, supply ease." },
    silver:   { value: "$74.95",  change: "-2.54%", signal: "Industrial pullback; lags gold strength here." },
    yield10y: { value: "4.45%",   change: "-3bps",  signal: "Yields near three-week lows; risk friendly." },
    vix:      { value: "15.32",   change: "-2.67%", signal: "Complacent tape; cheap hedges available now." },
    usdmyr:   { value: "3.9705",  change: "-0.20%", signal: "Ringgit firm sub-4.00 versus weak dollar." },
    sp500:    { value: "7,580.06", change: "+0.22%", signal: "Record close; tech and mega-cap lead." },
    verdict: "Soft DXY, falling yields and a sub-16 VIX keep the risk window open into June. Gold above $4,500 confirms structural debasement bid even as equities hit highs. KLSE benefits from ringgit strength; crypto needs a dollar break to reclaim $80K BTC."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC dominance elevated; alts lag broadly still." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$73,524",  marketCap: "$1.45T", change1h: "N/A", change24h: "+0.10%", change7d: "N/A", insight: "BTC consolidates 42% below October ATH of $126K as institutions de-risk into month-end. Holding $73K is the key bull line; lose it and $68K opens fast." },
      { name: "Ethereum", symbol: "ETH", price: "$2,060",   marketCap: "$248B",  change1h: "N/A", change24h: "-0.40%", change7d: "N/A", insight: "ETH grinds near $2,060 with weak relative strength versus BTC. A reclaim of $2,200 would shift altcoin sentiment back to neutral." },
      { name: "Solana",   symbol: "SOL", price: "$84.12",   marketCap: "$40B",   change1h: "N/A", change24h: "+0.07%", change7d: "+1.14%", insight: "SOL holds $84 support amid steady DePIN and memecoin throughput on chain. Range $80–$95 still defines the swing structure." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",      change24h: "-1.20%", note: "Neutral-bearish; awaits BTC reclaim." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000037",   change24h: "-0.80%", note: "Compressed between key EMAs." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000614",  change24h: "-0.90%", note: "Coiling between 50/100-day EMAs." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",          change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",          change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Crypto sits in a risk-off pocket while equities rally — a notable divergence. $73K BTC is the line; below it sentiment flips and alts unwind further. No altseason signal until ETH reclaims $2,200 with rising dominance rotation."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,580.06",  change: "+0.22%" },
      { name: "Nasdaq",       value: "26,972.62", change: "+0.20%" },
      { name: "Dow",          value: "51,032.46", change: "+0.72%" },
      { name: "VIX",          value: "15.32",     change: "-2.67%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—",        change: "Fri close",  insight: "Tracks SPX record close at 7,580; core long allocation." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$711.23",  change: "+0.20%",     insight: "QQQ at 52-week high after the tech-led rally." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",        change: "Fri close",  insight: "Liquid SPX proxy; new all-time-high territory now." },
      { ticker: "VTI",  name: "Total Market",      price: "—",        change: "Fri close",  insight: "Broad-market vehicle; small caps still the laggard here." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",        change: "Fri close",  insight: "High-beta growth basket; benefits from falling 10Y yields." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",        change: "Fri close",  insight: "NVDA-heavy; AI capex cycle still intact into 2H26." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$40.85",   change: "+0.10%",     insight: "Spot BTC ETF tracks $73K; flows decisive at this support." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",        change: "Fri close",  insight: "Mega-cap tech remains the index leadership engine." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$424.21",  change: "+0.97%",     insight: "GLD tracks spot gold push above $4,500 again today." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$607.38",  change: "+0.50%",  notable: false, insight: "Ad revenue resilience plus AI infra spend keeps sentiment constructive." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$212.49",  change: "-0.30%",  notable: false, insight: "Profit-taking after a strong week; AI demand thesis intact." },
      { ticker: "TSLA",  name: "Tesla",         price: "$417.85",  change: "+0.40%",  notable: false, insight: "Robotaxi narrative supports premium multiple into next print." },
      { ticker: "AAPL",  name: "Apple",         price: "$310.85",  change: "+0.30%",  notable: false, insight: "Services momentum and on-device AI cycle sustain the bid." },
      { ticker: "MSFT",  name: "Microsoft",     price: "—",        change: "+5.29%",  notable: true,  insight: "Azure AI uptake drives one of the strongest mega-cap sessions." },
      { ticker: "GOOGL", name: "Alphabet",      price: "—",        change: "+2.50%",  notable: true,  insight: "Search-AI integration easing antitrust overhang for now." },
      { ticker: "AMZN",  name: "Amazon",        price: "—",        change: "+1.22%",  notable: false, insight: "AWS reaccelerating; retail margin story still building." },
      { ticker: "NFLX",  name: "Netflix",       price: "—",        change: "+0.39%",  notable: false, insight: "Ad-tier scaling but stock weakened below key EMAs recently." },
      { ticker: "AMD",   name: "AMD",           price: "—",        change: "Fri close", notable: false, insight: "MI accelerator share gains drive the bull case here." },
      { ticker: "PLTR",  name: "Palantir",      price: "$156.38",  change: "+9.00%",  notable: true,  insight: "Best one-day gain in a year on enterprise AI traction." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "—",        change: "Fri close", notable: false, insight: "Cybersecurity demand sticky; Falcon platform still expanding." },
      { ticker: "COIN",  name: "Coinbase",      price: "—",        change: "Fri close", notable: false, insight: "Crypto consolidation caps near-term trading-fee upside." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "—",        change: "Fri close", notable: false, insight: "Recent BTC transfer to Coinbase Prime sparks sell speculation." },
      { ticker: "APP",   name: "AppLovin",      price: "—",        change: "Fri close", notable: false, insight: "AXON ad-tech growth still the leading mid-cap AI story." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$46.09",   change: "+11.60%", notable: true,  insight: "AI server demand rebound; sharp short-cover squeeze on Friday." }
    ],
    trending: [
      { ticker: "SMCI",  change: "+11.60%" },
      { ticker: "PLTR",  change: "+9.00%" },
      { ticker: "MSFT",  change: "+5.29%" },
      { ticker: "GOOGL", change: "+2.50%" },
      { ticker: "AMZN",  change: "+1.22%" }
    ],
    verdict: "AI trade remains the only game in town — SMCI, PLTR and MSFT lead a narrow but powerful tape. Rotation favors quality compute and software platforms; avoid unprofitable small-cap growth still trapped beneath 200DMA. Hedges are cheap with VIX under 16 — own them into June FOMC."
  },

  malaysia: {
    klci:   { value: "—",       change: "N/A (Fri close)", context: "KLCI closed Friday with banks weighing on the index after Maybank's sharp drop. Monday opens with ringgit tailwind from sub-4.00 USD/MYR offsetting domestic profit-taking." },
    usdmyr: { value: "3.9705",  change: "-0.20%",          signal: "Ringgit firm sub-4.00; importers benefit here." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "RM11.50", change: "Fri close",  insight: "Sharp 6.96% Friday drop on heavy turnover; OPR stable but NIM pressure rising." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "—",       change: "Fri close",  insight: "Regional banking exposure cushions any domestic loan growth slowdown." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",   price: "—",       change: "Fri close",  insight: "Defensive lender; mortgage book quality keeps it the safe bank pick." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",      price: "—",       change: "Fri close",  insight: "Dividend yield supports floor amid sector-wide NIM compression." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",        price: "—",       change: "Fri close",  insight: "Data-centre demand thesis still the long-term utility re-rating driver." },
      { ticker: "INARI",  name: "Inari (0138.KL)",         price: "RM2.35",  change: "Fri close",  insight: "Semi cycle improving with NVDA strength; RF testing volumes a key swing." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",        price: "—",       change: "Fri close",  insight: "Regional telco consolidation thesis intact; XL Smart merger benefits." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",      change: "Fri close",  insight: "Premium private healthcare demand defensive in a slowing macro." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",          price: "—",       change: "Fri close",  insight: "Digital ID and concession renewals key catalysts into 2H26." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",         price: "—",       change: "Fri close",  insight: "5G monetization gradual; dividend yield anchors the valuation case." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No major Bursa IPO confirmed for week ahead. Watch Edge Malaysia for upcoming launch announcements." }
    ],
    verdict: "Ringgit at 3.97 is the cleanest Malaysia trade — sub-4.00 favors importers and consumer names. Inari best AI-adjacent proxy as NVDA strength filters into semi packaging volumes. Monday Bursa likely opens flat to soft as banks digest Maybank's Friday selloff; stock-picking over index exposure."
  },

  news: [
    { headline: "S&P 500 and Nasdaq close at fresh records on tech rally",       source: "CNBC",          time: "12h ago", sentiment: "BULLISH",  meaning: "Confirms risk-on regime; AI leadership still index engine." },
    { headline: "Bitcoin holds $73K amid institutional de-risking pressure",     source: "Cryptoticker",  time: "8h ago",  sentiment: "WATCH",    meaning: "Key support; loss opens fast move to $68K test." },
    { headline: "Bank Negara launches Digital Asset Innovation Hub pilots",      source: "Fintech News",  time: "1d ago",  sentiment: "BULLISH",  meaning: "Ringgit stablecoin pilot signals regulated crypto progress in Malaysia." },
    { headline: "USD/MYR drops to 3.9705 as dollar weakens broadly",             source: "Trading Eco",   time: "10h ago", sentiment: "BULLISH",  meaning: "Strong ringgit eases import inflation; positive for KLSE consumer." },
    { headline: "Palantir surges 9% in best one-day gain in over a year",        source: "Robinhood",     time: "14h ago", sentiment: "BULLISH",  meaning: "Enterprise AI traction validating premium software multiples." },
    { headline: "Super Micro jumps 11.6% on AI server demand rebound",           source: "Yahoo Finance", time: "14h ago", sentiment: "BULLISH",  meaning: "AI infrastructure capex still accelerating into back half." },
    { headline: "10-year Treasury yield falls to 4.45%, three-week low",         source: "Trading Eco",   time: "16h ago", sentiment: "BULLISH",  meaning: "Lower yields support duration, growth equity, and gold simultaneously." },
    { headline: "Gold pushes back above $4,500 on soft dollar bid",              source: "Investing.com", time: "9h ago",  sentiment: "BULLISH",  meaning: "Structural debasement trade alive even at equity record highs." }
  ],

  goldSummary: {
    "Price":    { value: "$4,539.27", change: "+0.97%", note: "Bid above key $4,500 pivot level." },
    "Open":     { value: "$4,494.94", change: "",       note: "" },
    "High":     { value: "$4,595.31", change: "",       note: "Day high" },
    "Low":      { value: "$4,488.68", change: "",       note: "Day low" },
    "52W High": { value: "N/A",       change: "",       note: "" },
    "52W Low":  { value: "N/A",       change: "",       note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,671.17" },
      { label: "R2",    value: "$4,633.24" },
      { label: "R1",    value: "$4,564.54" },
      { label: "Pivot", value: "$4,526.61" },
      { label: "S1",    value: "$4,457.91" },
      { label: "S2",    value: "$4,419.98" },
      { label: "S3",    value: "$4,351.28" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,633.24" },
      { label: "R2",    value: "$4,592.51" },
      { label: "R1",    value: "$4,567.34" },
      { label: "Pivot", value: "$4,526.61" },
      { label: "S1",    value: "$4,485.88" },
      { label: "S2",    value: "$4,460.71" },
      { label: "S3",    value: "$4,419.98" }
    ],
    camarilla: [
      { label: "R4", value: "$4,554.48" },
      { label: "R3", value: "$4,525.15" },
      { label: "R2", value: "$4,515.38" },
      { label: "R1", value: "$4,505.60" },
      { label: "S1", value: "$4,486.06" },
      { label: "S2", value: "$4,476.28" },
      { label: "S3", value: "$4,466.51" },
      { label: "S4", value: "$4,437.18" }
    ],
    note: "Gold at $4,539 trades above classic pivot $4,526 — bullish bias holds while above S1 $4,457."
  }
};
