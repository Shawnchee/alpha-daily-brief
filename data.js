window.CRUCIX_DATA = {
  generated: "Sat, 24 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk tone steady into the weekend as gold cools from highs, Bitcoin holds $96K, and elevated oil revives inflation worries.",

  macro: {
    dxy:      { value: "99.19",     change: "-0.03%", signal: "Dollar soft, supportive backdrop for risk assets" },
    gold:     { value: "$4,509.63", change: "-0.42%", signal: "Second weekly decline; consolidating below highs" },
    oil:      { value: "$96.60",    change: "+0.26%", signal: "Elevated crude keeps inflation risk alive" },
    silver:   { value: "$76.20",    change: "-0.69%", signal: "Tracks gold lower; ratio near 60" },
    yield10y: { value: "4.572%",    change: "-1bp",   signal: "Steady yields, no fresh rate pressure" },
    vix:      { value: "16.70",     change: "-0.36%", signal: "Calm volatility; complacency, not fear" },
    usdmyr:   { value: "3.9680",    change: "+0.14%", signal: "Ringgit firm, holds below 4.00 handle" },
    sp500:    { value: "7,473.47",  change: "+0.37%", signal: "Index near records, breadth constructive" },
    verdict: "A soft dollar at 99, calm 10Y yields near 4.57%, and a low VIX of 16.7 keep the backdrop supportive for risk. Gold easing from highs signals fading safe-haven demand even as $96 oil reintroduces inflation tail risk. Net: friendly for crypto and US equities; ringgit stability is a mild positive for KLSE."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC leadership intact, alts mixed" },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$96,262", marketCap: "$1.91T", change1h: "N/A", change24h: "-1.04%", change7d: "N/A", insight: "BTC holds the $96K shelf despite ETF outflows, with $1.9T market cap intact. CoinDesk flags it as set to outperform stocks and bonds after a weak stretch." },
      { name: "Ethereum", symbol: "ETH", price: "$2,060",  marketCap: "$248B", change1h: "N/A", change24h: "N/A",     change7d: "N/A", insight: "ETH grinds near $2,060, lagging BTC on a relative basis. Holding this zone keeps the broader uptrend structurally intact." },
      { name: "Solana",   symbol: "SOL", price: "$86.03",  marketCap: "$50B",  change1h: "N/A", change24h: "+1.30%",  change7d: "-0.60%", insight: "SOL up 1.3% on the day but flat over the week. Ecosystem activity remains the key swing factor for altcoin beta." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",     change24h: "N/A", note: "Holds 11 cents, neutral-bearish tone" },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000038",  change24h: "N/A", note: "Consolidating near support, soft momentum" },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000063",  change24h: "N/A", note: "Range-bound between key EMAs" },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A", note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A", note: "Speculative SOL memecoin." }
    ],
    verdict: "Risk-on bias holds but momentum is muted, with BTC defending $96K as the key line. A reclaim of prior highs reopens upside; losing $90K would flip the tone defensive. No altseason signal yet — ETH and memecoins lack relative strength."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,473.47",  change: "+0.37%" },
      { name: "Nasdaq",       value: "26,343.97", change: "+0.19%" },
      { name: "Dow",          value: "50,579.70", change: "+0.58%" },
      { name: "VIX",          value: "16.70",     change: "-0.36%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "—",       change: "—",      insight: "Tracks the S&P 500, which closed near records Friday." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "—",       change: "—",      insight: "Megacap tech proxy; Nasdaq edged higher into the weekend." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "—",       change: "—",      insight: "Most-traded S&P ETF; mirrors broad-market strength." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "—",      insight: "Broadest US exposure; benefits from steady breadth." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "—",      insight: "High-beta growth; sensitive to the calm-VIX regime." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "—",       change: "—",      insight: "Chip basket pressured by NVDA's 1.8% Friday slip." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$53.48",  change: "-1.04%", insight: "Tracks BTC near $96K; pressured by recent ETF outflows." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "—",      insight: "Tech sector ETF; mixed as AI leaders diverge." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$421.46", change: "-0.42%", insight: "Mirrors gold easing toward $4,500 for a second weekly loss." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$607.38", change: "+0.38%",    notable: false, insight: "Steady gains keep Meta near highs on resilient ad strength." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$219.51", change: "-1.77%",    notable: true,  insight: "Pulls back 1.8%, weighing on the broader semiconductor complex." },
      { ticker: "TSLA",  name: "Tesla",         price: "$417.85", change: "+0.14%",    notable: false, insight: "Flat session as the market awaits fresh delivery catalysts." },
      { ticker: "AAPL",  name: "Apple",         price: "$304.99", change: "Fri close", notable: false, insight: "Holds above $300, a defensive anchor among megacaps." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$418.26", change: "-0.66%",    notable: false, insight: "Eases slightly; cloud and AI demand remain the core driver." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$382.26", change: "Fri close", notable: false, insight: "Steady near its recent range as search and cloud hold up." },
      { ticker: "AMZN",  name: "Amazon",        price: "$266.32", change: "-0.80%",    notable: false, insight: "Dips modestly; AWS growth still anchors the bull case." },
      { ticker: "NFLX",  name: "Netflix",       price: "$88.39",  change: "Fri close", notable: false, insight: "Post-split shares trade quietly in the upper half of range." },
      { ticker: "AMD",   name: "AMD",           price: "$467.51", change: "+3.99%",    notable: true,  insight: "Jumps ~4% as AI accelerator demand stays robust." },
      { ticker: "PLTR",  name: "Palantir",      price: "$135.90", change: "Fri close", notable: false, insight: "Holds gains on strong government and commercial AI bookings." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "$594.08", change: "+2.44%",    notable: true,  insight: "Climbs toward record highs on durable cybersecurity demand." },
      { ticker: "COIN",  name: "Coinbase",      price: "$184.95", change: "-4.45%",    notable: true,  insight: "Slides 4.5% with crypto softness and ETF outflows." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$158.75", change: "Fri close", notable: false, insight: "Tracks Bitcoin; leverage amplifies BTC's holding pattern." },
      { ticker: "APP",   name: "AppLovin",      price: "$478.80", change: "Fri close", notable: false, insight: "Stays elevated on ad-tech monetization momentum." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$35.22",  change: "Fri close", notable: false, insight: "Low-priced AI server play still rebuilding investor trust." }
    ],
    trending: [
      { ticker: "COIN", change: "-4.45%" },
      { ticker: "AMD",  change: "+3.99%" },
      { ticker: "CRWD", change: "+2.44%" },
      { ticker: "NVDA", change: "-1.77%" },
      { ticker: "AMZN", change: "-0.80%" }
    ],
    verdict: "The AI trade is splitting — software (CRWD, PLTR) and AMD lead while NVDA cools, signaling rotation within the theme rather than a top. Cybersecurity and ad-tech show the cleanest momentum; own strength there. Avoid chasing crypto-levered names (COIN, MSTR) until BTC reclaims its highs."
  },

  malaysia: {
    klci:   { value: "1,712.67", change: "+0.25%", context: "KLCI rose 4.31 points Friday to 1,712.67 but still fell for a second straight week. Monday's open hinges on regional flows and a firm ringgit." },
    usdmyr: { value: "3.9680", change: "+0.14%", signal: "Ringgit firm below 4.00, supports sentiment" },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM11.06", change: "N/A (Fri close)", insight: "Largest bank anchors the KLCI; a stable OPR underpins margins." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "RM7.80",  change: "N/A (Fri close)", insight: "Regional banking exposure offers ASEAN growth leverage." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",     price: "—",       change: "N/A (Fri close)", insight: "Defensive lender prized for asset quality and consistency." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",        price: "—",       change: "N/A (Fri close)", insight: "Attractive dividend yield among the mid-cap banks." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",          price: "—",       change: "N/A (Fri close)", insight: "Utility bellwether levered to rising data-center power demand." },
      { ticker: "INARI",  name: "Inari (0138.KL)",           price: "RM1.87",  change: "N/A (Fri close)", insight: "Semiconductor packager tracking the chip cycle and NVDA sentiment." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",          price: "—",       change: "N/A (Fri close)", insight: "Telco restructuring story with regional asset reshuffling." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)",  price: "—",       change: "N/A (Fri close)", insight: "Defensive healthcare with steady regional patient volumes." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",            price: "—",       change: "N/A (Fri close)", insight: "Digital government-services play with recurring revenue." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",           price: "—",       change: "N/A (Fri close)", insight: "5G monetization is the key earnings catalyst ahead." }
    ],
    ipos: [
      { name: "N/A", sector: "—", price: "—", listingDate: "—", status: "—", note: "No new Bursa IPO surfaced in this run's searches. Check Bursa's listing calendar for upcoming names." }
    ],
    verdict: "A firm ringgit near 3.97 is the standout positive for Malaysian assets. Maybank remains the steadiest core holding, while Inari offers the highest beta to a chip-cycle rebound. Monday's Bursa likely opens cautious after a second weekly KLCI decline, but JP Morgan's 1,800 year-end target frames the upside."
  },

  news: [
    { headline: "FBM KLCI rebounds Friday but falls for second straight week", source: "The Star", time: "2h ago", sentiment: "BEARISH", meaning: "Local sentiment fragile despite late rebound; flows still cautious." },
    { headline: "Bitcoin set to outperform stocks and bonds after weak stretch", source: "CoinDesk", time: "1d ago", sentiment: "BULLISH", meaning: "Analysts see crypto leadership returning versus traditional assets." },
    { headline: "Gold hovers near $4,500, heads for second weekly decline", source: "Yahoo Finance", time: "2d ago", sentiment: "NEUTRAL", meaning: "Safe-haven demand fading as risk appetite quietly stabilizes." },
    { headline: "Bitcoin spot ETF outflows hit $2.26 billion", source: "OpenPR", time: "1d ago", sentiment: "BEARISH", meaning: "Institutional selling pressures BTC near its key support." },
    { headline: "CrowdStrike nears record high on durable cybersecurity demand", source: "CNBC", time: "1d ago", sentiment: "BULLISH", meaning: "Security spending resilient; software leads the AI trade." },
    { headline: "JP Morgan forecasts FBM KLCI to reach 1,800 by year-end", source: "Research", time: "3d ago", sentiment: "BULLISH", meaning: "Bank sees meaningful upside for Malaysian equities ahead." },
    { headline: "AMD jumps ~4% as AI accelerator demand stays strong", source: "Yahoo Finance", time: "1d ago", sentiment: "BULLISH", meaning: "Chip demand broadening beyond Nvidia across the sector." },
    { headline: "Elevated oil near $96 stokes inflation and rate-hike worries", source: "Yahoo Finance", time: "1d ago", sentiment: "BEARISH", meaning: "Higher crude could delay rate cuts later into 2026." }
  ],

  goldSummary: {
    "Price":  { value: "$4,509.63", change: "-0.42%", note: "Second weekly decline, below the highs" },
    "Open":   { value: "$4,544.20", change: "", note: "Jun futures open" },
    "High":   { value: "$4,532.83", change: "", note: "Day high" },
    "Low":    { value: "$4,502.47", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$4,557.84" },
      { label: "R2",    value: "$4,545.34" },
      { label: "R1",    value: "$4,527.48" },
      { label: "Pivot", value: "$4,514.98" },
      { label: "S1",    value: "$4,497.12" },
      { label: "S2",    value: "$4,484.62" },
      { label: "S3",    value: "$4,466.76" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,545.34" },
      { label: "R2",    value: "$4,533.74" },
      { label: "R1",    value: "$4,526.57" },
      { label: "Pivot", value: "$4,514.98" },
      { label: "S1",    value: "$4,503.38" },
      { label: "S2",    value: "$4,496.22" },
      { label: "S3",    value: "$4,484.62" }
    ],
    camarilla: [
      { label: "R4", value: "$4,526.33" },
      { label: "R3", value: "$4,517.98" },
      { label: "R2", value: "$4,515.20" },
      { label: "R1", value: "$4,512.41" },
      { label: "S1", value: "$4,506.85" },
      { label: "S2", value: "$4,504.06" },
      { label: "S3", value: "$4,501.28" },
      { label: "S4", value: "$4,492.93" }
    ],
    note: "Gold's $4,509 close sits just below the $4,515 classic pivot — a mild bearish lean until bulls reclaim it."
  }
};
