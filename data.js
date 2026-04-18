window.CRUCIX_DATA = {
  generated: "Saturday, 18 Apr 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Dollar weakness and surging gold signal macro uncertainty while BTC consolidates below $76K and equities inch toward S&P 7,000.",

  macro: {
    dxy:      { value: "98.05",   change: "-0.07%", signal: "Dollar at multi-year lows; EM currencies gaining ground." },
    gold:     { value: "$4,827",  change: "-0.47%", signal: "Near all-time highs; safe haven demand remains intact." },
    oil:      { value: "$91.66",  change: "+0.42%", signal: "Crude ticking up; energy costs mild margin pressure." },
    silver:   { value: "$52.45",  change: "+0.38%", signal: "Silver tracking gold with slight relative outperformance." },
    yield10y: { value: "4.31%",   change: "+2bps",  signal: "Yields steady; bond market not signalling panic yet." },
    vix:      { value: "18.29",   change: "-0.38%", signal: "Fear easing; below 20 is calm market territory." },
    usdmyr:   { value: "3.9465",  change: "-0.06%", signal: "Ringgit firming on weak dollar; watch 3.92 support." },
    sp500:    { value: "6,983",   change: "+0.23%", signal: "Equities grinding higher; 7,000 psychological level near." },
    verdict: "DXY below 98 with stable yields signals a non-inflationary growth environment as the Fed stays on hold. Low VIX confirms equities are grinding, not surging — risk-on but not euphoric, accumulate dips. KLSE benefits directly from ringgit strength; crypto stays neutral until BTC finds a breakout catalyst."
  },

  crypto: {
    dominance: { value: "57.4", change: "+0.30%", signal: "BTC dominance rising; altseason not yet confirmed here." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$75,828", marketCap: "$1.53T", change1h: "+0.12", change24h: "+0.88", change7d: "-3.25", insight: "BTC consolidating below $76,500 key resistance; a clean break opens $80K target. Seven-day pullback from highs suggests absorption before next leg up." },
      { name: "Ethereum", symbol: "ETH", price: "$2,362",  marketCap: "$284B",  change1h: "+0.08", change24h: "+0.40", change7d: "-5.20", insight: "ETH/BTC ratio at 0.031, multi-month low flagging capital rotation into BTC. Key support at $2,200; loss of that level accelerates broader altcoin weakness." },
      { name: "Solana",   symbol: "SOL", price: "$88.16",  marketCap: "$53B",   change1h: "-0.22", change24h: "-1.33", change7d: "-8.40", insight: "SOL ecosystem activity elevated but price lagging BTC; $85 is key support. Reclaim of $92 needed to reverse the bearish short-term structure." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1852",    change24h: "-2.35", note: "Needs BTC breakout; consolidating at range lows." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.0000098", change24h: "-3.12", note: "Back to baseline after January spike faded." },
      { name: "Bonk",      symbol: "BONK", price: "$0.0000218", change24h: "-4.55", note: "SOL weakness dragging BONK lower still." },
      { name: "WIF",       symbol: "WIF",  price: "$1.42",      change24h: "-3.88", note: "Risk-off pressure erasing recent gains now." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.0000132", change24h: "-2.75", note: "Thin volume; sideways grind continues here." }
    ],
    verdict: "Market is risk-cautious with BTC dominance rising and alts underperforming — not altseason territory yet. BTC needs a clean break above $76,500 to re-ignite momentum toward $80K; watch weekend volume. Until breakout, capital coils in BTC and alts remain vulnerable to further drawdown."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "6,983",  change: "+0.23%" },
      { name: "Nasdaq",       value: "22,148", change: "+0.31%" },
      { name: "Dow",          value: "39,872", change: "+0.15%" },
      { name: "VIX",          value: "18.29",  change: "-0.38%" },
      { name: "Russell 2000", value: "2,241",  change: "+0.42%" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$652.78", change: "+0.23%", insight: "Tracking S&P 500 grind; accumulate dips toward $640 support." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$487.35", change: "+0.31%", insight: "Tech sector recovering; watch $490 as near-term breakout level." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$697.85", change: "+0.23%", insight: "High-liquidity proxy; S&P 7,000 the near-term psychological magnet." },
      { ticker: "VTI",  name: "Total Market",      price: "$265.42", change: "+0.27%", insight: "Broad market participation confirms no narrow leadership concern." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "$58.65",  change: "+0.85%", insight: "Speculative growth catching a bid as VIX drops below 19." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$218.40", change: "+0.62%", insight: "Semis leading tech higher; NVDA holding the sector bid intact." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$38.45",  change: "+0.90%", insight: "BTC ETF flows steady; price action in spot BTC is the driver." },
      { ticker: "XLK",  name: "Tech Sector",       price: "$228.70", change: "+0.45%", insight: "Tech holding Friday gains; AI infrastructure trade primary driver." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$482.70", change: "-0.47%", insight: "Gold ETF near ATH; central bank buying and safe-haven demand firm." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$552.30", change: "+0.62%", notable: false, insight: "Ad revenue cycle strong; AI integration measurably boosting margins." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$198.56", change: "+0.78%", notable: false, insight: "AI chip demand unrelenting; data center backlog extending into 2027." },
      { ticker: "TSLA",  name: "Tesla",         price: "$388.73", change: "+1.25%", notable: false, insight: "Recovery from 2025 lows continues on energy storage demand growth." },
      { ticker: "AAPL",  name: "Apple",         price: "$263.38", change: "+0.35%", notable: false, insight: "Services revenue steady; hardware refresh cycle quietly building." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$422.34", change: "+0.40%", notable: false, insight: "Azure AI growth driving steady upward rerating of earnings multiple." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$337.53", change: "+0.28%", notable: false, insight: "Ad market recovery plus Gemini integration lifting broader sentiment." },
      { ticker: "AMZN",  name: "Amazon",        price: "$248.27", change: "+0.55%", notable: false, insight: "AWS reacceleration and retail margin expansion driving upside case." },
      { ticker: "NFLX",  name: "Netflix",       price: "$108.17", change: "-0.42%", notable: false, insight: "Post-split price level; subscriber and ad-tier growth still key metric." },
      { ticker: "AMD",   name: "AMD",           price: "$118.45", change: "+0.58%", notable: false, insight: "GPU share gains in AI inference offsetting continued PC weakness." },
      { ticker: "PLTR",  name: "Palantir",      price: "$142.57", change: "+1.35%", notable: false, insight: "Government and commercial AI contracts building durable revenue base." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "$382.50", change: "+0.72%", notable: false, insight: "Cybersecurity spend defensive; post-outage recovery now fully priced." },
      { ticker: "COIN",  name: "Coinbase",      price: "$195.80", change: "+1.05%", notable: false, insight: "Exchange volumes recovering alongside BTC price stability above $75K." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$472.30", change: "+1.12%", notable: false, insight: "BTC proxy trade; premium to NAV still elevated at current levels." },
      { ticker: "APP",   name: "AppLovin",      price: "$345.60", change: "+1.82%", notable: false, insight: "Mobile adtech model firing on AI-driven CPM expansion and scale." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$38.20",  change: "+2.15%", notable: false, insight: "AI server demand strong; accounting overhang fading from narrative." }
    ],
    trending: [
      { ticker: "SMCI", change: "+2.15%" },
      { ticker: "APP",  change: "+1.82%" },
      { ticker: "PLTR", change: "+1.35%" },
      { ticker: "TSLA", change: "+1.25%" },
      { ticker: "MSTR", change: "+1.12%" }
    ],
    verdict: "AI infrastructure trade is the dominant theme with PLTR, APP and SMCI leading Friday's gainers. No major sector rotation visible; growth outperforming value on weak DXY and stable yields. Own AI infrastructure (NVDA, MSFT, META, PLTR) over rate-sensitive plays; avoid leveraged positions into a quiet weekend."
  },

  malaysia: {
    klci: { value: "1,693.02", change: "+0.20%", context: "KLCI edging higher, outperforming some regional peers on ringgit stability and local institutional support. Banking sector anchoring the index with dividend yield appeal intact at current valuations." },
    usdmyr: { value: "3.9465", change: "-0.06%", signal: "Firmer ringgit on weak DXY supports foreign fund inflows to Bursa." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",       price: "11.04", change: "+0.18%", insight: "Dividend yield above 6% anchoring institutional demand at this level." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",          price: "7.85",  change: "+0.25%", insight: "Regional expansion and digital banking ROE improving quarter on quarter." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "4.35",  change: "+0.23%", insight: "Best-in-class asset quality; lowest NPL ratio on Bursa remains standout." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "8.13",  change: "+0.37%", insight: "Trading near 52-week high on improving net interest margin trajectory." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "14.14", change: "-0.25%", insight: "Regulated utility under mild pressure; data centre power is emerging catalyst." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "3.82",  change: "+0.53%", insight: "Semiconductor packaging recovering; US-listed semis strength a positive read-through." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "2.28",  change: "+0.00%", insight: "Consolidation phase; regional telco merger speculation still background noise." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "7.20",  change: "+0.28%", insight: "Healthcare demand secular; Malaysia and India hospital operations scaling well." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "1.05",  change: "+0.48%", insight: "Digital government services moat intact; new contract pipeline remains positive." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "3.88",  change: "+0.26%", insight: "5G monetisation picking up; steady dividend makes it a reliable income hold." }
    ],
    ipos: [
      { name: "SkyeChip Bhd", sector: "Semiconductor", price: "TBD", listingDate: "TBD 2026", status: "Upcoming", note: "Homegrown chip-design firm signed underwriting deal April 13 for Bursa Main Market listing. Semiconductor IPOs command premium valuations on regional supply chain diversification — high-conviction watchlist." }
    ],
    verdict: "Ringgit firmness and rising KLCI suggest foreign fund positioning into Malaysian equities is quietly building. Banks and Inari are the near-term plays on DXY weakness and global tech recovery themes. Watch SkyeChip as the highest-conviction IPO of 2026 on a semiconductor supply-chain-reshoring narrative."
  },

  news: [
    { headline: "Gold approaches $4,889 all-time high as central bank and safe haven demand surges", source: "Reuters", time: "3h ago", sentiment: "BULLISH", meaning: "Own GLD and gold miners; reduce growth overweight on geopolitical uncertainty." },
    { headline: "DXY falls below 98, weakest dollar level in multi-year period", source: "Bloomberg", time: "4h ago", sentiment: "BULLISH", meaning: "Buy EM equities and commodities; KLSE and ringgit are direct beneficiaries." },
    { headline: "Bitcoin consolidates at $75,800 as weekly momentum stalls below resistance", source: "CoinDesk", time: "2h ago", sentiment: "WATCH", meaning: "Wait for clean $76,500 breakout before adding; weekend risk is to downside." },
    { headline: "S&P 500 within 0.25% of 7,000 as equities grind higher on AI optimism", source: "CNBC", time: "5h ago", sentiment: "BULLISH", meaning: "Momentum favours bulls; trim into 7,000 touch, re-enter on any pullback." },
    { headline: "Bursa Malaysia targets RM28 bln IPO market cap in 2026, eyes semiconductor listings", source: "Bernama", time: "8h ago", sentiment: "BULLISH", meaning: "KLSE pipeline strengthening; IPO-heavy year supports broker and exchange names." },
    { headline: "SkyeChip Bhd signs underwriting deal for Bursa Malaysia Main Market IPO", source: "The Star", time: "5d ago", sentiment: "BULLISH", meaning: "First major chip-design IPO on Bursa; watchlist now for listing day premium trade." },
    { headline: "US 10-year yield holds 4.31% as Fed signals no rush to cut rates in 2026", source: "Financial Times", time: "6h ago", sentiment: "NEUTRAL", meaning: "Rates higher longer; avoid rate-sensitive REITs and long-duration bond positions." },
    { headline: "VIX drops to 18.29 as options market prices out near-term crash scenarios", source: "MarketWatch", time: "4h ago", sentiment: "BULLISH", meaning: "Sell vol; low fear signals risk assets can continue gradual grind upward." }
  ],

  goldSummary: {
    "Price":    { value: "$4,832", change: "-0.47%", note: "Pulling back from intraday high; still in all-time-high territory" },
    "Open":     { value: "$4,848", change: "",        note: "" },
    "High":     { value: "$4,889", change: "",        note: "Day high" },
    "Low":      { value: "$4,768", change: "",        note: "Day low" },
    "52W High": { value: "$4,889", change: "",        note: "" },
    "52W Low":  { value: "$3,054", change: "",        note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$5,012.96" },
      { label: "R2",    value: "$4,951.09" },
      { label: "R1",    value: "$4,891.54" },
      { label: "Pivot", value: "$4,829.67" },
      { label: "S1",    value: "$4,770.12" },
      { label: "S2",    value: "$4,708.25" },
      { label: "S3",    value: "$4,648.70" }
    ],
    fibonacci: [
      { label: "R3",    value: "$4,951.09" },
      { label: "R2",    value: "$4,904.71" },
      { label: "R1",    value: "$4,876.05" },
      { label: "Pivot", value: "$4,829.67" },
      { label: "S1",    value: "$4,783.29" },
      { label: "S2",    value: "$4,754.63" },
      { label: "S3",    value: "$4,708.25" }
    ],
    camarilla: [
      { label: "R4", value: "$4,898.76" },
      { label: "R3", value: "$4,865.37" },
      { label: "R2", value: "$4,854.24" },
      { label: "R1", value: "$4,843.11" },
      { label: "S1", value: "$4,820.85" },
      { label: "S2", value: "$4,809.72" },
      { label: "S3", value: "$4,798.59" },
      { label: "S4", value: "$4,765.20" }
    ],
    note: "Price above classic pivot ($4,829.67) signals bullish intraday bias; first resistance at Camarilla R1 $4,843."
  }
};
