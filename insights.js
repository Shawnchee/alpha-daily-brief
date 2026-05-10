window.CRUCIX_INSIGHTS = {

  insights: {
    crypto: {
      todayAction: "Hold",
      today: "BTC is pinned at $80,299 — $80K is the battleground and bulls are barely winning; hold spot, don't chase. SOL is the only high-conviction buy today, breaking a descending trendline at $93 targeting $100 on AI narrative and ETF inflows. ETH is bleeding $75.9M in outflows while BTC and SOL absorb institutional capital — avoid or short ETH today. If BTC dips to $79,500 that's your buy entry; if it breaks $78,000, go defensive immediately.",

      weekAction: "Buy",
      thisWeek: "Biggest catalyst this week is NVDA earnings on May 20 — a beat above $1.76 EPS triggers risk-on across crypto within 24h. BTC weekly key level: above $82,000 confirms continuation toward $87K, below $78,000 opens a $74K retest. Best crypto sector this week is AI/DePIN with SOL and FET — Solana Foundation's 'agentic payments' positioning is driving fresh institutional attention. Stay patient — Altcoin Season Index at 39/100 means BTC and SOL only, skip random alts.",

      monthAction: "Accumulate",
      thisMonth: "Early bull — BTC ETF inflows at $3.29B cumulative with price holding $80K is textbook institutional accumulation, not distribution. Accumulate BTC and SOL this month; ETF flows confirm smart money is buying the dip, not leaving. BTC for the macro allocation at $79K–$80K, SOL for AI narrative and ETF inflow tailwind at $91–$95. Avoid ETH this month — it's losing market share to SOL as the preferred institutional alt with net outflows."
    },

    usStocks: {
      todayAction: "Hold",
      today: "Sunday — no US session, but AMD's 20% surge after the May 5 earnings beat sets a bullish Monday tone for tech. Don't chase AMD; look for a Monday pullback to $175 as the entry if the AI narrative holds into the open. NVDA is lagging AMD and Intel this week — 'changing of the guard in AI' means reduce NVDA, add AMD on weakness. Best Monday setup is buying SOXX dip if early weakness appears, with QQQ $470 as the key level to hold.",

      weekAction: "Buy",
      thisWeek: "NVDA reports May 20 with EPS expected at $1.76 and $78.5B revenue — consensus is elevated, so position into the report Mon–Wed then take profit before the print. Fed held at 3.50–3.75% April 29 with inflation at 3.3% in March capping rate-cut hopes — neutral for growth stocks, not bearish. Best rotation: SOXX at $225 or lower — AMD, Intel, Micron all surging double digits confirms the chip trade is broadening, not topping. Top stock pick: AMD at $175 pullback, target $195, catalyst is Q2 guidance raised on AI accelerator demand.",

      monthAction: "Accumulate",
      thisMonth: "Bull phase intact — AMD and Apple earnings beats confirm breadth is real, not concentrated in NVDA alone. AI leads this month: cloud CapEx at $670B in 2026, AMD and Micron are the picks as NVDA is priced for perfection. Monthly conviction buy: AMD at $170–$175 on any dip, thesis is AI training hardware shifting toward MI300X at lower price-per-FLOP. Add US equity exposure this month — AI supercycle earnings growth backs 40% of S&P 500 EPS, that's your floor."
    },

    etfs: {
      todayAction: "Watch",
      today: "IBIT cumulative inflows at $3.29B signal institutional conviction — watch Monday's IBIT open direction as the definitive crypto sentiment read. QQQ key level is $470 — above is dip-buy, below $460 is real weakness that changes the trade. Best ETF entry this week is IBIT on any BTC dip to $79K or SOXX on any chip sector flush. ARKK vs QQQ: if ARKK outperforms by 2%+ on Monday open, risk appetite is genuinely back and go long tech.",

      weekAction: "Buy",
      thisWeek: "Best ETF for the week is SOXX — AMD +20% and Intel/Micron surging confirms the chip trade is rotating into a broader rally. SOXX entry at $225, NVDA earnings May 20 is the squeeze catalyst; a revenue beat sends SOXX to $240. Add IBIT this week on any BTC dip to $79K — institutional inflow trend is intact and the level is clear support. Avoid XLK (overweight NVDA) this week; SOXX gives cleaner AI semiconductor exposure without single-stock earnings risk.",

      monthAction: "Accumulate",
      thisMonth: "Monthly DCA pick: IBIT at any BTC dip below $80,000 — cleanest way to play institutional crypto accumulation without custody risk. AI narrative intact — SOXX outperforming QQQ as AMD/Micron close the gap on NVDA signals the trade is broadening, not topping. Portfolio split this month: 40% ETFs (IBIT + SOXX), 40% individual stocks (AMD, Capital A, Telekom MY), 20% crypto perps (BTC long, SOL long). Long-term conviction hold: SOXX at $220–$230 — $670B in AI infrastructure CapEx guarantees chip demand for 18+ months."
    },

    malaysia: {
      todayAction: "Watch",
      today: "Sunday — Bursa closed; prep for Monday open with KLCI needing to hold above 1,600 to target 1,760 by year-end. Best Malaysia stock for Monday is Telekom Malaysia (4863) at RM6.00–RM6.20 — dividend yield ~5% with VMY2026 broadband upsides. Ringgit at RM4.00/USD is well below the RM4.60 danger zone, meaning foreigners are in net-buying mode — positive for all export and blue-chip names. Capital A (5099) below RM0.90 on Monday open is a buy for VMY2026 passenger traffic recovery.",

      weekAction: "Buy",
      thisWeek: "KLCI bullish this week if it holds above 1,600 — any close above 1,620 signals a move toward 1,680 resistance zone. No BNM meeting this week — OPR stays at 3.00%, bank stocks range-bound and not the trade. Top Malaysia pick: Capital A (5099) at RM0.90–RM0.95, target RM1.15, catalyst is VMY2026 inbound tourist data expected mid-May showing record arrivals. Best sector is solar/RE — Solarvest (0215) at RM1.10 entry, riding Budget 2026 RE contract pipeline before any ex-dividend announcement.",

      monthAction: "Accumulate",
      thisMonth: "Bursa in buy mode — GDP 4.3–4.7%, earnings expanding 7% in 2026, and foreign fund reversal expected after RM20B in 2025 outflows. Ringgit strengthening toward RM3.95 by year-end signals foreigners returning — watch for two consecutive weeks of net foreign buying as confirmation. Best sectors: RE (Solarvest for 13MP green contracts, Samaiden for solar EPCC growth) and Tourism (Capital A for VMY2026, Genting for integrated resort recovery). Monthly dividend play: Telekom Malaysia (4863) at RM6.00 or below — ~5% yield, buy before Q2 ex-date announcement for yield plus capital upside."
    }
  },

  perps: [
    {
      asset: "Bitcoin",
      symbol: "BTC",
      direction: "LONG",
      currentPrice: "$80,299",
      entry: "$79,500 - $80,500",
      tp1: { price: "$83,100", pct: "+3.5%" },
      tp2: { price: "$86,700", pct: "+8.0%" },
      sl:  { price: "$77,800", pct: "-3.1%" },
      leverage: "10x",
      riskReward: "1:2.3",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "BTC holding $80,299 above the critical $80K weekly support with $3.29B in spot ETF inflows confirming institutional intent to defend this level. Weekly close above $80K triggers bullish continuation bias with traders eyeing $81K retest early this week. Funding rates are neutral — no excessive longs stacked, reducing squeeze risk on the setup. Fed holding at 3.50–3.75% removes near-term macro shock risk for crypto despite inflation ticking to 3.3%. Enter on any dip to $79,500, invalidate and cut hard below $77,800 which breaks the weekly demand zone entirely."
    },
    {
      asset: "Ethereum",
      symbol: "ETH",
      direction: "SHORT",
      currentPrice: "$2,327",
      entry: "$2,320 - $2,360",
      tp1: { price: "$2,210", pct: "-5.0%" },
      tp2: { price: "$2,100", pct: "-9.7%" },
      sl:  { price: "$2,435", pct: "+4.1%" },
      leverage: "8x",
      riskReward: "1:2.0",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "ETH/BTC ratio declining as ETH absorbs $75.9M in weekly outflows while BTC and SOL ETFs pull in net inflows — capital rotating away from ETH specifically, not crypto broadly. No DeFi catalyst or major Ethereum on-chain event this week to reverse the selling pressure. $2,320 is weak horizontal support; a clean break opens the path to $2,200 then the $2,100 psychological level. Enter short on any bounce to $2,340–$2,360 which is prior support now acting as resistance. Invalidate and exit immediately if ETH reclaims $2,435 on a daily close — that signals the ETH catch-up trade has started."
    },
    {
      asset: "Solana",
      symbol: "SOL",
      direction: "LONG",
      currentPrice: "$93.28",
      entry: "$91.00 - $95.00",
      tp1: { price: "$98.00", pct: "+5.1%" },
      tp2: { price: "$108.00", pct: "+15.8%" },
      sl:  { price: "$89.50", pct: "-4.1%" },
      leverage: "15x",
      riskReward: "1:2.6",
      confidence: "High",
      minUSD: "10",
      reasoning: "SOL ETF products recording $33M weekly inflows and Solana Foundation's 'agentic payments' AI positioning is the strongest narrative catalyst in crypto right now — institutional and retail aligned simultaneously. SOL broke above a descending resistance trendline with accelerating volume; $100 is the next psychological magnet with whale wallets actively accumulating. $91 is the clean breakout retest entry zone; $88 breaks the entire breakout structure and invalidates the setup. SOL is leading BTC on the weekly chart, confirming local outperformance not just correlated upside. Enter any dip to $91–$95, cut below $89.50 — if $95 holds on a retest, $100 falls within 48 hours."
    }
  ]

};
