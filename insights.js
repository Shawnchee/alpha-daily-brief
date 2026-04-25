window.CRUCIX_INSIGHTS = {

  insights: {
    crypto: {
      todayAction: "Buy",
      today: "BTC at $78,100 pressing $80K resistance with 8 straight ETF inflow days ($223M on Apr 23) — institutional spot demand is real, not leveraged speculation. AI/RWA narrative running hot on Solana: Mastercard, Alibaba Cloud, and Worldpay building on Solana Developer Platform — SOL and LINK are the narrative plays today. ETH spot ETFs bled $75.9M outflow while BTC and SOL saw inflows — avoid ETH today, rotate into BTC and SOL. Buy BTC dips to $77,500, target $80,500, cut if $75,800 breaks on a daily close.",

      weekAction: "Buy",
      thisWeek: "Fed meeting April 29 (Wed) is the week's catalyst — dovish lean spikes BTC through $80K, hawkish surprise flushes to $75K. BTC above $80K opens path to $85K; below $76K risk increases materially. Best crypto sector: AI/RWA — SOL, LINK, ONDO — Goldman Sachs holding $108M SOL signals institutional conviction is stacking. Patient this week — hold BTC core, wait for Fed resolution before adding new size.",

      monthAction: "Accumulate",
      thisMonth: "Early bull continuation — BTC up 30% from February lows, ETF cumulative inflows at $58.55B, spot ETF AUM hit $105B. Accumulate BTC this month — 8-day inflow streak confirms institutional buyers establishing positions, not topping out. BTC on $75K-$78K dips and SOL on $80-$85 dips are the accumulation zones — BTC for ETF demand floor, SOL for enterprise adoption thesis with Goldman backing. Avoid ETH this month — consistent spot ETF outflows and BTC dominance above 60% make ETH the cycle laggard."
    },

    usStocks: {
      todayAction: "Buy",
      today: "Tech opening bullish — Intel's 22% data center growth beat confirms AI capex cycle intact and NVDA is riding coattails at +5% today. NVDA is the single stock catalyst today — enter above $125, target $134, driven by Intel's direct hyperscaler spending read-through. AMD up 12% ahead of May 5 earnings — AI chip challenger thesis intact, buy dips toward $160. Best setup today: NVDA long above $125 targeting $134; avoid rate-sensitive defensives (utilities, REITs).",

      weekAction: "Buy",
      thisWeek: "Fed meeting Wednesday April 29 — market pricing in dovish lean, positive for growth and tech; hawkish surprise hits QQQ hard. AMD reports Q1 earnings May 5 (expected +33% EPS YoY, $9.84B revenue) — pre-earnings run likely this week, buy AMD dips toward $158. Best sector rotation: SOXX is the play — Intel beat, AMD pre-earnings run, NVDA strength lifting the entire semiconductor basket. Top stock pick: NVDA long above $124, target $136, Fed meeting plus big-tech earnings week as twin catalysts.",

      monthAction: "Accumulate",
      thisMonth: "Bull phase: US tech sector up 11% in April, AI narrative intact, hyperscaler capex forecast at $520B+ for 2026. Leading sectors: semiconductors (SOXX) and AI software — NVDA, AMD, MRVL breaking out as AI buildout pushes chip industry past $1.1T revenue forecast. Monthly conviction stock: AMD at $155-162, target $185 — 33% EPS growth expected, underfollowed vs NVDA with room to close the gap. Add US tech exposure this month — Fed easing cycle plus AI capex supercycle makes the multi-year bull case intact."
    },

    etfs: {
      todayAction: "Buy",
      today: "IBIT recorded $223M inflows on April 23 (8th consecutive day) — institutional crypto bid is real, BTC directionally bullish today. QQQ dip buy above $490 — Intel chip beat confirms AI narrative intact and tech breadth widening across the board. Best ETF entry today: SOXX above $235, semiconductor earnings tailwinds driving the whole basket higher. ARKK vs QQQ read: chips outperforming broadly signals selective risk-on, not full speculative euphoria — trade SOXX over ARKK.",

      weekAction: "Buy",
      thisWeek: "Best ETF this week: SOXX — Intel beat, AMD pre-earnings run, and NVDA momentum mean the semiconductor cycle is accelerating. Chip trade alive and leading: NVDA +5%, AMD +12%, ARM and MRVL all green — SOXX breakout in progress, enter $236-238. Add SOXX at $237, avoid TLT this week — Fed meeting Wednesday creates near-term bond rate uncertainty. IBIT eighth straight inflow day signals institutional crypto accumulation; watch weekly flow for confirmation of BTC $80K break.",

      monthAction: "Accumulate",
      thisMonth: "Monthly DCA pick: QQQ at $485-492 — AI narrative intact, rate cuts incoming, tech up 11% in April alone. SOXX outperforming QQQ this month confirms AI/semi thesis is strong, not rolling over — stay overweight semis vs broad tech. Portfolio split this month: 40% ETFs (SOXX/QQQ 60-40), 40% individual AI stocks (NVDA/AMD), 20% crypto (BTC/SOL). Long-term conviction hold: QQQ at $490 — Fed easing plus AI capex supercycle is a multi-year bull case."
    },

    malaysia: {
      todayAction: "Buy",
      today: "KLCI at 1,712 on its 4th straight green session at a 3-week high — momentum is up, buy the trend today. Best Malaysia stock today: Mr DIY, entry RM1.88-1.92 — ringgit strengthening cuts import costs on 70% of product mix, direct margin upside. USD/MYR declining toward RM4.00 year-end forecast — foreign funds returning to Bursa, buy quality names before inflows accelerate. Capital A: accumulate RM1.48-1.52 — fuel cost tailwinds plus firmer ringgit make it the strongest aviation recovery play on Bursa.",

      weekAction: "Buy",
      thisWeek: "KLCI bullish this week — 1,720 is next resistance; hold above 1,700 keeps the path to 1,760 year-end target open. BNM holds OPR at 2.75% throughout 2026, no meeting this week — bank stocks (CIMB, PBBANK) stable with no surprise rate risk. Top pick: Mr DIY, entry RM1.88-1.92, target RM2.10 — improving consumer sentiment plus structural ringgit tailwind on 70% imported goods mix. Best sectors this week: consumer discretionary (Mr DIY) and aviation (Capital A); track banking names near ex-dividend dates for pre-date runs.",

      monthAction: "Accumulate",
      thisMonth: "Bursa in buy mode — KLCI up 4 straight sessions and RM20B+ net foreign outflows from 2025 are expected to reverse in 2026. Ringgit strengthening toward RM4.00 end-year means foreign funds are returning; April could mark the turning point after 18 months of foreign selling. Best picks: Mr DIY (RM1.90 entry, consumer recovery plus ringgit strength) and Capital A (RM1.50 entry, fuel cost tailwind plus aviation recovery). Monthly dividend play: PBBANK — consistent ~4% dividend yield, buy before ex-dividend date for income plus the pre-date price run."
    }
  },

  perps: [
    {
      asset: "Bitcoin",
      symbol: "BTC",
      direction: "LONG",
      currentPrice: "$78,100",
      entry: "$77,500 - $78,300",
      tp1: { price: "$80,500", pct: "+3.1%" },
      tp2: { price: "$84,000", pct: "+7.6%" },
      sl:  { price: "$75,800", pct: "-3.0%" },
      leverage: "10x",
      riskReward: "1:2.5",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "BTC at $78,100 with 8 consecutive ETF inflow days ($223M on Apr 23 alone) confirms institutional spot demand — this is real buying, not leveraged longs waiting to get squeezed. Intel's 22% data center growth beat drove NVDA +5% and pushed risk assets broadly higher, adding macro tailwind to BTC's next leg toward $80K. Funding context is healthy — spot ETF-led buying means demand is organic, reducing squeeze risk from the long side. Fed meeting April 29 is expected to lean dovish, which would push BTC through $80K resistance and open $84K-$85K as next target zone. Enter $77,500-$78,300 on any NY open dip; invalidate and exit full position on a daily close below $75,800."
    },
    {
      asset: "Ethereum",
      symbol: "ETH",
      direction: "SHORT",
      currentPrice: "$2,053",
      entry: "$2,060 - $2,090",
      tp1: { price: "$1,990", pct: "-3.0%" },
      tp2: { price: "$1,890", pct: "-7.9%" },
      sl:  { price: "$2,130", pct: "+3.4%" },
      leverage: "8x",
      riskReward: "1:2.3",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "ETH/BTC ratio declining — ETH spot ETFs bled $75.9M in outflows while BTC and SOL attracted inflows, institutional capital is actively rotating away from ETH. No DeFi or on-chain catalyst for ETH today; Solana is capturing the enterprise AI and RWA narrative while ETH sits idle with no momentum story. ETH has failed to reclaim $2,200 three times this month and BTC dominance above 60% is a structural cap on altcoin rallies including ETH. Short on any bounce to $2,060-$2,090; TP1 $1,990, TP2 $1,890 if $2,000 breaks cleanly on volume. Invalidate the short if ETH closes above $2,150 with above-average volume — that would signal genuine rotation back into ETH."
    },
    {
      asset: "Solana",
      symbol: "SOL",
      direction: "LONG",
      currentPrice: "$85.73",
      entry: "$84.00 - $86.50",
      tp1: { price: "$90.00", pct: "+5.0%" },
      tp2: { price: "$94.00", pct: "+9.6%" },
      sl:  { price: "$82.50", pct: "-3.8%" },
      leverage: "8x",
      riskReward: "1:2.5",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "Solana Developer Platform launched March 2026 and is attracting Mastercard, Worldpay, and Alibaba Cloud as enterprise partners — RWA and payments adoption is a multi-month structural tailwind building under SOL. SOL spot ETF AUM crossed $1B with $35.17M inflows over the past week and Goldman Sachs holds a $108M SOL position — smart money is accumulating, not distributing. $85-86 is proven support; SOL held this level after Alameda's $16M unstake failed to cause a bigger dump, confirming supply pressure is absorbed. SOL is lagging BTC in short-term beta as BTC dominance stays above 60%, but the Goldman institutional thesis plays out over weeks — this is accumulation positioning, not a quick flip. Enter $84-86.50, TP1 $90, TP2 $94, SL $82.50; invalidate if SOL breaks $82 on volume during BTC weakness."
    }
  ]

};
