window.CRUCIX_INSIGHTS = {

  insights: {
    crypto: {
      todayAction: "Buy",
      today: "BTC reclaimed $81,286 today for the first time since January — this is a confirmed breakout level, buy dips to $80,800. RWA is the hottest narrative: Solana crossed $931M in tokenized assets + Western Union USDPT stablecoin launched on SOL in May, buy SOL at $85.48. $630M in spot BTC ETF inflows confirm institutional accumulation, not retail — strong hands are loading. Trade: buy BTC at $80,800–$81,400, target $84,200 then $88,000, cut below $79,000.",

      weekAction: "Buy",
      thisWeek: "AMD reports after close today (May 5) — a beat on $9.89B revenue guide pushes AI narrative into crypto alts (FET, RENDER, TAO) by tomorrow. BTC weekly key level: above $81,000 = confirmed bull, below $79,000 = pullback to $76K. Best crypto plays this week are SOL and LINK — SOL on RWA momentum, LINK as the oracle backbone of institutional tokenization. Aggressive this week because institutional ETF inflows are accelerating, not decelerating.",

      monthAction: "Accumulate",
      thisMonth: "Early bull phase — BTC recovering from $69K lows with ETF inflows accelerating, Altcoin Season Index at 39/100 means rotation has not started yet, prime accumulation window. Accumulate BTC and SOL this month before altseason index crosses 50 and retail FOMO dilutes entries. Accumulate BTC (institutional ETF demand) and SOL (RWA + agentic payments with Western Union USDPT live). Avoid high-beta memecoins this month — altseason index confirms Bitcoin Season, premature rotation gets wrecked."
    },

    usStocks: {
      todayAction: "Buy",
      today: "Gap up bias for tech today — BTC $81K recovery + AMD earnings after close makes semis the session play. AMD reports tonight expecting EPS $1.29 and $9.89B revenue; buy AMD before close around $105, target $120+ on a beat, cut if post-earnings drop below $100. NVDA at $209 holds $200 support — buy any dip as AMD beat will lift NVDA by sympathy tomorrow. Best setup today: AMD $103–$107 entry, take half off pre-close, ride rest into post-earnings reaction.",

      weekAction: "Buy",
      thisWeek: "AMD (May 5 after close) needs $9.89B revenue + MI300X AI chip traction — consensus expects a beat and a QQQ lift on confirmation. NFP report Friday is the macro risk — strong jobs crushes rate-cut hopes and slams QQQ 3–5%, so size accordingly. Best rotation play: buy SOXX on any dip to $238–$242 — hyperscaler capex expected to hit $520B in 2026, chips are the direct beneficiary. Top stock pick: AMD, entry $103–$107, catalyst earnings tonight, target $120.",

      monthAction: "Accumulate",
      thisMonth: "Bull phase intact — S&P 500 EPS growth projected at 19.7% YoY in 2026 driven by AI infrastructure spend, VIX subdued confirms institutional confidence. Leading sector is AI semiconductors: NVDA at $209 and AMD both benefiting as hyperscaler capex rises from $400B to $520B this year. Monthly conviction stock: NVDA at $200–$210, thesis is $520B capex cycle flowing directly into NVDA GPU orders, hold into Q2 earnings. Add US equity exposure this month — earnings season is confirming AI spend is real, not hype."
    },

    etfs: {
      todayAction: "Buy",
      today: "IBIT saw $630M net inflow — institutional money re-entering BTC at $81K is a confirmed buy signal, not a sell. QQQ needs to hold $480 support today — AMD earnings risk tonight means hold back on adding QQQ until post-5pm print. Best ETF entry today: IBIT at current levels on BTC $81K breakout confirmation, target BTC $84,200+ by end of week. ARKK outperforming QQQ today signals risk appetite is genuinely returning — not a dead cat, add on the spread widening.",

      weekAction: "Buy",
      thisWeek: "Best ETF this week is SOXX — AMD earnings tonight and $520B hyperscaler capex guide make chips the cleanest single-week trade. SOXX chip trade is alive: AMD beat will confirm second leg up, NVDA holding $200 support validates the thesis. Add SOXX on any dip below $240 this week; avoid XLE as oil demand outlook softens with macro uncertainty. IBIT weekly flow direction is bullish — $630M inflow signals institutional crypto accumulation is accelerating through May.",

      monthAction: "Accumulate",
      thisMonth: "Monthly DCA pick: IBIT at current levels — BTC reclaimed $81K with institutional backing, accumulate on any sub-$79K dips as gifts. AI narrative intact — SOXX outperforming QQQ as chip cycle accelerates, $520B hyperscaler capex flows directly into NVDA and AMD. May portfolio split: 40% US tech/AI stocks, 30% crypto (BTC/SOL), 20% IBIT ETF, 10% cash reserved for NFP dip buy on Friday. Long-term conviction hold: IBIT — spot BTC ETF with institutional inflow trajectory intact for 2026 all-time high run."
    },

    malaysia: {
      todayAction: "Watch",
      today: "KLCI direction today is cautious — BNM MPC meeting later this week keeps banks range-bound as traders wait for rate decision. Best Malaysia stock today is CIMB — buy at RM7.80 on pre-MPC positioning, target RM8.20 if BNM holds at 2.75% as expected. USD/MYR at 4.29 means foreigners are still net sellers — avoid export-dependent stocks like TOPGLOVE today, ringgit headwind hurts. No hot IPO to chase today — Manforce Group and Inspace Creation are ACE Market listings, wait for first-day price before committing.",

      weekAction: "Watch",
      thisWeek: "KLCI weekly outlook cautious around 1,650–1,680 — hold above 1,650 is the line, break below triggers foreign selling acceleration. BNM MPC meeting this week expected to hold OPR at 2.75% — neutral for bank stocks CIMB, PBBANK, Maybank, no re-rating without a surprise cut. Top Malaysia pick this week: Inari Amertron — buy at RM2.80, AMD earnings tonight lift global semi sentiment and Inari follows with a 1-day lag. Best sector pre-MPC is banking; watch for any CIMB ex-dividend date within 2 weeks for the dividend run trade.",

      monthAction: "Accumulate",
      thisMonth: "Bursa buy mode this month — KLCI target 1,760 end-2026 with earnings growth at 7%, double 2025 pace, ringgit strengthening to RM4.00 makes Malaysia cheap for foreign re-entry. Foreign funds reversing the RM20B outflow from 2025 — ringgit appreciation is the trigger, watch USD/MYR breaking below 4.20. Best sectors: banks (CIMB, Maybank) on OPR stability and dividend yield; tech (Inari) on global semiconductor cycle uplift. Monthly dividend play: PBBANK at RM4.20 — consistent 4–5% yield, buy before May ex-dividend date."
    }
  },

  perps: [
    {
      asset: "Bitcoin",
      symbol: "BTC",
      direction: "LONG",
      currentPrice: "$81,286",
      entry: "$80,800 - $81,400",
      tp1: { price: "$84,200", pct: "+3.8%" },
      tp2: { price: "$88,000", pct: "+8.5%" },
      sl:  { price: "$79,000", pct: "-2.8%" },
      leverage: "15x",
      riskReward: "1:3.0",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "BTC reclaimed $81,286 today for the first time since January, confirming a breakout above $80K psychological level with expanding volume and momentum. Catalyst is $630M spot BTC ETF net inflow — institutional accumulation at scale signals strong hands loading, not retail chasing. Funding rates are positive but not extreme, giving room for continuation before squeeze risk builds. Macro tailwind: Fed holding rates with softening USD = BTC outperforms as macro hedge alternative. Enter on pullback to $80,800–$81,400; invalidate and close on daily close below $79,000."
    },
    {
      asset: "Ethereum",
      symbol: "ETH",
      direction: "LONG",
      currentPrice: "$2,053",
      entry: "$2,020 - $2,060",
      tp1: { price: "$2,130", pct: "+4.2%" },
      tp2: { price: "$2,260", pct: "+10.6%" },
      sl:  { price: "$1,980", pct: "-3.6%" },
      leverage: "10x",
      riskReward: "1:3.7",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "ETH/BTC ratio at 0.0253 is historically suppressed — ETH is cheap vs BTC and any altseason trigger re-rates ETH hard and first. DeFi TVL and RWA tokenization activity are expanding on ETH mainnet, providing a fundamental bid beneath spot. Key technical level: $2,000 is critical support, held multiple times, third test bounce is the entry. Entry trigger: BTC sustaining $81K + AMD beat tonight = risk-on flows rotate into ETH next session. Invalidate on daily close below $1,980, which breaks the $2,000 support structure entirely."
    },
    {
      asset: "Solana",
      symbol: "SOL",
      direction: "LONG",
      currentPrice: "$85.48",
      entry: "$84.00 - $86.00",
      tp1: { price: "$89.50", pct: "+5.3%" },
      tp2: { price: "$95.00", pct: "+11.8%" },
      sl:  { price: "$82.50", pct: "-2.9%" },
      leverage: "10x",
      riskReward: "1:4.0",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "SOL is running the RWA + agentic payments narrative — $931M in tokenized RWAs and Western Union USDPT live on Solana in May 2026 gives it real institutional use case driving organic demand. Volume is expanding alongside price, confirming buyers are in control and this is not distribution. Key technical level: $82.50 is the support floor — daily close below means momentum failed and narrative is not translating. SOL is leading BTC in percentage terms over last 5 days, generating its own bid independent of BTC moves. Enter $84–$86, trigger is holding above $84 with volume; invalidate on daily close below $82.50."
    }
  ]

};
