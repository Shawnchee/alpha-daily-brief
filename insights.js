window.CRUCIX_INSIGHTS = {

  insights: {
    crypto: {
      todayAction: "Buy",
      today: "BTC at $78,463 is pressing $80K resistance — buy dips to $77,500 for a clean risk entry before the breakout. AI narrative is live today: Elfa AI launched a Real-Time Agent Execution Platform on Solana and stablecoins hit $321B market cap, signaling fresh capital deployment. MicroStrategy paused weekly buys ahead of May 5 Q1 earnings, creating short-term selling pressure — use any dip as the entry, not a reason to stay out. Buy SOL at $140–$144 targeting $152, cut if $136 breaks.",

      weekAction: "Buy",
      thisWeek: "BTC options expiry and MicroStrategy Q1 earnings both land Tuesday May 5 — expect volatility that day, use it to buy. BTC weekly key level: above $80,000 = bull path to $85K, below $76,500 = retest $75K support. Best sector this week is Solana ecosystem (SOL, WIF) driven by Western Union stablecoin launch on Solana next month. Wait for a BTC daily close above $80K before sizing up altcoin positions.",

      monthAction: "Accumulate",
      thisMonth: "Early bull phase confirmed — BTC up 17% in April with $1B+ weekly stablecoin inflows signaling fresh capital, and smart money wallets actively accumulating on dips. Accumulate on pullbacks; post-correction buying is still valid at these levels before the $80K breakout. Accumulate SOL in $130–$145 range for the Western Union stablecoin catalyst, and LINK for RWA narrative upside from Senate stablecoin legislation clearing a key roadblock. Avoid low-cap memecoins — single-coin pumps without broad sector confirmation are exit liquidity.",
    },

    usStocks: {
      todayAction: "Buy",
      today: "Monday opens gap-up — Apple earnings beat and Middle East peace hopes are confirmed drivers of positive open sentiment per Schwab morning note. AMD is the live catalyst stock: reports Tuesday May 5 at $9.84B revenue consensus, buy dips to $165–$168 today before the print. NVDA holding $209 support confirms AI capex boom intact — any dip to $200 is a buy. Best setup today: AMD entry $165–$168, target $185 by Wednesday, cut if $158 breaks.",

      weekAction: "Buy",
      thisWeek: "AMD reports Q1 on Tuesday May 5 with $9.84B revenue expected and +33% EPS YoY — a beat is highly likely given the AI chip demand surge. No Fed meeting this week, so the most-divided-since-1992 FOMC is background noise — focus entirely on earnings. Best rotation play this week: SOXX ETF at $285–$295 as semis had the best month in the index's history in April (+40%) and momentum carries into AMD earnings week. Top stock pick: AMD entry $165–$168, target $185 by Thursday, catalyst is Tuesday earnings beat.",

      monthAction: "Accumulate",
      thisMonth: "Nasdaq up 15.6% in April (best since 2002) and VIX declining — bull phase confirmed with expanding breadth across tech. AI semiconductors are the leading sector: SOXX, NVDA, AMD are all driven by hyperscaler AI capex that shows no signs of slowing through H1 2026. Monthly conviction stock: NVDA at $200–$209 support zone, data center AI revenue compounding, $250 target by June. Add US equity exposure this month — AI winners are clearly separating from laggards post-earnings, and retail FOMO flows are just beginning.",
    },

    etfs: {
      todayAction: "Buy",
      today: "IBIT saw $629.8M inflow on May 1 then $263M outflow Monday — watch for inflows resuming above $200M daily as the institutional signal for BTC $80K breakout. QQQ above $490 is a dip-buy — Apple earnings beat and peace hopes make $490 the decision line, any touch is an entry. Best ETF entry today: SOXX at $285–$295 riding April's historic semi momentum directly into AMD earnings week. ARKK vs QQQ spread is narrowing — risk appetite is genuinely recovering, lean long on both.",

      weekAction: "Buy",
      thisWeek: "Best ETF for the week is SOXX — AMD May 5 earnings and sustained AI capex are the direct catalysts for another leg. SOXX chip trade is fully alive: AMD and NVDA trend both confirm AI infrastructure spend is accelerating through H1 2026. Add SOXX at $285–$295 this week, avoid TLT as the most-divided Fed since 1992 keeps bonds choppy with no clear direction. IBIT daily inflows above $200M = institutional green light for BTC $80K break — that is the single number to watch.",

      monthAction: "Accumulate",
      thisMonth: "Monthly DCA pick is QQQ at $480–$495 — Nasdaq's 15.6% April gain has legs as AI earnings beats justify the multiple. SOXX massively outperformed QQQ in April (+40% vs +15.6%) — AI narrative is intact, not fading, and relative strength continues into May. Portfolio allocation this month: 40% ETFs (QQQ and SOXX), 35% individual stocks (NVDA and AMD), 25% crypto (BTC and SOL). Long-term conviction hold: SOXX at current levels — AI semiconductor supercycle is multi-year, pullbacks are entries not exits.",
    },

    malaysia: {
      todayAction: "Buy",
      today: "KLCI opens cautiously bullish Monday — global rally is a tailwind but ringgit at RM4.60 zone caps index upside, trade individual stocks not the index. Best Malaysia stock today: Inari Amertron at RM2.80–RM3.00 entry — SOXX rallied 40% in April and Inari tracks global semis with a 1-day lag, this gap has not closed yet. Ringgit near RM4.60 signals foreigners starting to re-enter MYR assets, positive for export tech names Inari and MyEG — both are direct plays on this trend. Watch Manforce Group Berhad ACE Market listing today — apply if IPO P/E is below 15x.",

      weekAction: "Buy",
      thisWeek: "KLCI weekly outlook cautiously bullish — hold above 1,600 is key, close above 1,620 opens path to 1,650. No BNM meeting this week, OPR stays at 2.75% — bank stocks are stable but the trade is tech, not banks. Top Malaysia pick: Inari Amertron entry RM2.80–RM3.00, target RM3.30, catalyst is the lagged semi rally feeding through from AMD earnings on May 5. Best sector this week is technology — buy Inari and MyEG on any day SOXX closes green in the US session.",

      monthAction: "Accumulate",
      thisMonth: "Bursa is in buy mode this month — RM20B of foreign outflows in 2025 are reversing as the ringgit strengthens toward RM4.10 average, buy before the flows show up in KLCI data. Ringgit trajectory to RM4.00 by end-2026 means foreign funds systematically returning to MYR assets, a structural tailwind for mid-caps. Best sectors this month: technology (Inari Amertron, RM2.80–RM3.00) for global semi exposure, and construction (IJM Corp) for domestic infrastructure spending. Monthly dividend play: CIMB Bank at current levels with approximately 5% dividend yield — confirm May ex-date and buy at least 5 trading days prior.",
    },
  },

  perps: [
    {
      asset: "Bitcoin",
      symbol: "BTC",
      direction: "LONG",
      currentPrice: "$78,463",
      entry: "$77,800 - $78,600",
      tp1: { price: "$80,600", pct: "+3.1%" },
      tp2: { price: "$83,000", pct: "+6.1%" },
      sl:  { price: "$76,200", pct: "-2.6%" },
      leverage: "10x",
      riskReward: "1:2.3",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "BTC is at $78,463 — above the $75K defensive line with smart money wallets actively accumulating and a 17% April rally confirming underlying demand. ETF inflows hit $629.8M on May 1 before Monday's $263M outflow — net institutional positioning is still long and the structural bid is intact. Funding rates are moderate with no overheated longs, so there is no squeeze risk on this long entry at current levels. Macro backdrop is supportive: stablecoin inflows at $1B+ weekly signal fresh capital entering the system and Senate stablecoin legislation cleared a key roadblock. Enter on dips to $77,800–$78,600, hard stop at $76,200 — if BTC closes a daily candle below $76,200 the $80K breakout thesis is invalid and exit immediately."
    },
    {
      asset: "Ethereum",
      symbol: "ETH",
      direction: "SHORT",
      currentPrice: "$2,053",
      entry: "$2,060 - $2,080",
      tp1: { price: "$1,990", pct: "-3.9%" },
      tp2: { price: "$1,920", pct: "-7.2%" },
      sl:  { price: "$2,130", pct: "+2.9%" },
      leverage: "8x",
      riskReward: "1:2.5",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "ETH/BTC ratio is declining — BTC dominance is rising above 55% and institutional capital is concentrating in BTC, not ETH, as the cycle matures. ETH spot ETFs flipped to net outflows while BTC ETFs maintained net inflows — the institutional preference is clearly documented and reinforced. ETH is capped below $2,100 resistance with no on-chain catalyst or major DeFi event to shift momentum this week. Enter short on any push into $2,060–$2,080 where sellers have consistently absorbed buying pressure on recent bounces. Invalidate the short immediately if ETH closes a daily candle firmly above $2,130 — that signals genuine ETH rotation and you exit no questions asked."
    },
    {
      asset: "Solana",
      symbol: "SOL",
      direction: "LONG",
      currentPrice: "$143.81",
      entry: "$140 - $144",
      tp1: { price: "$152", pct: "+7.0%" },
      tp2: { price: "$160", pct: "+12.7%" },
      sl:  { price: "$136", pct: "-4.2%" },
      leverage: "10x",
      riskReward: "1:3.0",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "Solana DeFi and developer activity is accelerating — Elfa AI launched a Real-Time Agent Execution Platform on Solana today and Western Union confirmed a Solana-based stablecoin launch next month, both are genuine ecosystem catalysts not speculation. Volume is holding firm at $140–$144 after recovering from BTC's midweek dip to $75.5K, showing SOL has relative strength and buyers are present at this level. Key technical support is $136 — last week's low — and a hold there confirms bullish structure targeting $152 then $160. SOL is leading BTC on recovery bounces rather than lagging, which is textbook early altseason behavior and means you want SOL not ETH for the alt bet. Enter $140–$144 on any intraday dip, hard stop $136 — if BTC breaks below $75,500 exit the position regardless of where SOL is trading."
    }
  ]

};
