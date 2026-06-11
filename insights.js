window.CRUCIX_INSIGHTS = {

  insights: {
    crypto: {
      todayAction: "Sell",
      today: "BTC at $61,531 is below the $75K defensive threshold — short-only bias, no longs. May CPI printed 3.8% annualized + NVDA cratered 6% = sustained risk-off backdrop bleeding into crypto today. FOMC June 16-17 under new Fed Chair Warsh removes any rate-cut hopium that could lift BTC this week. Trade: short BTC on bounce to $62,000-$62,500, target $59,500 first, cut if $64,000 holds.",

      weekAction: "Wait",
      thisWeek: "FOMC June 16-17 is the single event that matters — Warsh's debut, 65% hold odds but 3.8% CPI makes a hawkish statement live risk. BTC weekly: hold above $63,500 = possible dead-cat relief, lose $59,000 = flush to $55K zone. RWA sector (ONDO, LINK) is the only crypto sub-sector showing relative strength vs BTC this week. Stay flat on alts; only run short BTC setups until post-FOMC clarity.",

      monthAction: "Reduce",
      thisMonth: "Late bull / early distribution — BTC below $75K with hot inflation and an untested Fed chair = cycle caution red flag. Reduce altcoin exposure to minimum sizing; hold BTC-only if you must be in crypto. ONDO (RWA leader, tokenized Treasury growth) and FET (AI agent narrative, working product) are the two names worth accumulating on further dips below June 10 lows. Avoid memecoins entirely this month — they get liquidated hardest in BTC weakness + macro hostility."
    },

    usStocks: {
      todayAction: "Sell",
      today: "Gap-down open bias today: NVDA -6% yesterday below $5T market cap, AMD and MU each -9%+ — hot May CPI at 3.8% blew out the rate-cut narrative. NVDA is the short-term tell — watch $195-200 zone; if it can't hold, semis drag QQQ lower into FOMC. AI chip trade is broken for today — do not buy the dip in NVDA or AMD until June 17 FOMC clears. Best setup: short QQQ weakness, avoid tech longs; rotate into XLE (crude above $100/barrel provides earnings floor).",

      weekAction: "Reduce",
      thisWeek: "FOMC June 16-17 is the week's entire story — Warsh debuts hawkish, 3.8% CPI gives him cover to hold and signal longer. No major earnings this week — tech is adrift between Broadcom's AI hardware miss and the upcoming Fed tone-set. Best rotation play: XLE (energy) at current levels for the Brent crude $100+ tailwind; XLU (utilities) as rate-hold beneficiary. Top stock pick: AMZN over NVDA this week — AWS cloud + AI inference demand is a software story that doesn't need rate cuts.",

      monthAction: "Reduce",
      thisMonth: "VIX elevated, breadth rolling over in XLK and SOXX — reduce US equity exposure by 20% this month and hold cash. Leading sectors are XLE (energy) and XLV (healthcare); XLK and SOXX are laggards as AI hardware trade digests a rate-hike risk repricing. Monthly conviction hold: AMZN at $195 entry — cloud and AI inference are durable regardless of Fed trajectory. Trim speculative tech, keep defensive quality; cash is a legitimate position into Warsh's first policy signal."
    },

    etfs: {
      todayAction: "Watch",
      today: "IBIT is likely bleeding today — BTC at $61,531 with macro headwinds means institutional flows are pausing or reversing. QQQ is a short today at open: hot CPI breaks the Fed-pivot thesis that held it up, key support at $445 is the level to watch for a bounce. Best ETF entry today: XLE on any pull to $90 — energy outperforms when rate cuts are off the table and crude holds $100. ARKK vs QQQ spread is widening to the downside — risk appetite is definitively off, no speculative buying today.",

      weekAction: "Reduce",
      thisWeek: "SOXX is the ETF to avoid this week — chip stocks broken on Broadcom miss and hot CPI, FOMC adds another risk layer. IBIT weekly flows will be net negative as BTC orbits $60K — institutional signal says wait, not buy. Add XLP (consumer staples) or XLV (healthcare) for defensive cover this week; avoid XLK and SOXX until post-June 17. IBIT needs BTC to reclaim $65K to see meaningful inflows return — that doesn't happen before FOMC.",

      monthAction: "Hold",
      thisMonth: "Monthly DCA pick: XLV at $155 — healthcare is rate-insensitive, earnings are stable, and it's defensive in a 3.8% inflation regime. SOXX vs QQQ relative strength is turning negative — AI hardware narrative is cooling, AI software (MSFT, AMZN) is the better expression. Portfolio split this month: 40% ETFs (XLV/XLE/QQQ), 35% individual stocks (AMZN/MSFT), 25% cash. Long-term conviction accumulate: QQQ at $440-445 — sell the FOMC spike if it comes, buy the post-Warsh clarity dip."
    },

    malaysia: {
      todayAction: "Watch",
      today: "KLCI opens soft today — Inari Amertron tracks global semis with 1-day lag and will feel NVDA's -6% drop at open. Best stock today: HSS Holdings (listed today, 10.56x IPO subscription) — momentum play on debut, watch entry on first-hour volatility pullback. USD/MYR holding above 4.70 on hot US CPI keeping dollar firm — ringgit pressure directly hurts Inari and Frontken on export margins. Avoid Inari today on the open; wait for a flush and re-entry only if global chip sentiment stabilizes.",

      weekAction: "Watch",
      thisWeek: "KLCI weekly: hold above 1,590 is the line — break below triggers foreign fund outflows from MAY, CIMB, and PBBANK which are 70% of index weight. No BNM meeting this week — bank stocks drift without a catalyst, stay selective and don't chase. Top pick this week: HSS Holdings post-debut volatility — infrastructure and engineering play with strong IPO demand signal. Ex-dividend watch: check Maybank (MAY) and Public Bank (PBBANK) for June ex-dates; buy 3 sessions before to capture the pre-ex run.",

      monthAction: "Accumulate",
      thisMonth: "Bursa is in selective accumulate mode if KLCI holds 1,590 — Q1 2026 earnings season confirmed solid corporate fundamentals. Foreign funds buying ringgit assets only if USD/MYR stays below 4.75 — watch for a reversal above 4.75 as the hard exit signal. Best sectors this month: tech infrastructure (Stratus Global Holdings on Main Market debut, Inari on dips below RM3.50) and financials (CIMB for rate-exposure upside). Monthly dividend play: Maybank (MAY) at RM8.50 entry — ~6% yield, ex-dividend typically falls June/July, steady anchor for the portfolio."
    }
  },

  perps: [
    {
      asset: "Bitcoin",
      symbol: "BTC",
      direction: "SHORT",
      currentPrice: "$61,531",
      entry: "$62,000 - $62,500",
      tp1: { price: "$59,500", pct: "-4.4%" },
      tp2: { price: "$57,000", pct: "-8.8%" },
      sl:  { price: "$64,000", pct: "+2.8%" },
      leverage: "10x",
      riskReward: "1:3.0",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "BTC at $61,531 is below the $75K defensive threshold with a clear lower-high lower-low structure — trend is down, not a dip-buy. May CPI 3.8% annualized + NVDA -6% + AMD -9% on June 10 confirms risk-off is structural, not a one-day event. Funding rates are likely neutral-to-negative meaning shorts aren't crowded and there's room to press. FOMC June 16-17 under new chair Warsh removes any rate-cut narrative that could bid BTC this week. Enter on a bounce to $62,000-$62,500 resistance; invalidate and exit above $64,000 which would signal a reversal structure."
    },
    {
      asset: "Ethereum",
      symbol: "ETH",
      direction: "SHORT",
      currentPrice: "$1,582",
      entry: "$1,600 - $1,620",
      tp1: { price: "$1,540", pct: "-4.3%" },
      tp2: { price: "$1,480", pct: "-7.8%" },
      sl:  { price: "$1,660", pct: "+3.1%" },
      leverage: "8x",
      riskReward: "1:2.6",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "ETH/BTC ratio at 0.0257 is historically suppressed — ETH is underperforming BTC, zero early altseason signal and no reason to be long. ETH ETF inflows have been modest to negative and DeFi volumes are subdued — no on-chain catalyst to absorb selling. $1,600-$1,620 is short-term resistance where any relief bounce from $1,582 current will stall. Enter short at $1,610 area on the bounce; above $1,660 invalidates the setup and signals BTC-led recovery pulling ETH along. Exact exit trigger: loss of $1,520 opens the $1,450 flush."
    },
    {
      asset: "Solana",
      symbol: "SOL",
      direction: "SHORT",
      currentPrice: "$79",
      entry: "$80 - $82",
      tp1: { price: "$76", pct: "-4.9%" },
      tp2: { price: "$70", pct: "-12.3%" },
      sl:  { price: "$85", pct: "+3.7%" },
      leverage: "8x",
      riskReward: "1:2.8",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "SOL at $79 and down 1.43% today — memecoin activity on Solana has cooled sharply as BTC weakens and retail exits risk. Volume is contracting as price consolidates near lows — classic bearish continuation, not accumulation. $85 was support-turned-resistance and any bounce to $80-$82 is a textbook short entry. SOL is lagging BTC, not leading — this is a passive follower in risk-off, not a narrative trade. Enter short on bounce to $80-$82; invalidation above $85; flush target $70 if $76 loses support."
    }
  ]

};
