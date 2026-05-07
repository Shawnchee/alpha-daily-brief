window.CRUCIX_INSIGHTS = {

  insights: {
    crypto: {
      todayAction: "Wait",
      today: "BTC at $79,840 is below the $80K caution line — do not chase longs; wait for a clean reclaim of $80,500 before entering anything. The 200-day MA at $82,228 is the rejection level that stopped the last rally cold. Iran rejecting the US Hormuz deal flushed BTC from $83K; geopolitical headline risk stays live today. If $80,500 reclaims on volume, buy SOL at $88 targeting $93 — cut everything if $78,500 breaks.",

      weekAction: "Hold",
      thisWeek: "BTC options expiry Friday is the dominant catalyst — $80K is max pain, expect pinning through the week. BTC weekly key levels: above $82,500 is bullish continuation, below $78,500 triggers a move toward $74K. Best crypto sector this week is AI tokens (FET, RENDER, TAO) — AMD's 57% data center beat validates the AI narrative and spills into crypto AI coins. Stay patient; funding rates went negative on the flush meaning the next move is a squeeze UP, but only after $80,500 reclaims.",

      monthAction: "Hold",
      thisMonth: "Mid-bull with distribution signals — BTC rejected 200-day MA and stablecoin reserves dropped $4B in one week, meaning cash is leaving not rotating into alts. Hold current positions, do not add aggressively until BTC closes a weekly candle above $82,500. Accumulate SOL at $85–$88 (VanEck/Franklin Templeton/Galaxy ETF filings are a binary catalyst) and RENDER on the AI narrative. Avoid memecoins this month — the institutional altseason is selective, favoring regulated-adjacent assets only."
    },

    usStocks: {
      todayAction: "Buy",
      today: "Gap up bias today — AMD crushed Q1 with EPS $1.37 vs $1.29 expected and data center revenue up 57% to $5.8B, pulling the entire semis complex higher. Buy AMD on any open dip under $165, targeting $178; cleanest AI infrastructure trade today. NVDA gaps up in sympathy — $135 is the intraday support to hold; above that the AI session trade is intact. Best setup: SOXX ETF long at open near $240 targeting $248, a clean catalyst play with tight risk.",

      weekAction: "Buy",
      thisWeek: "AMD reported Tuesday and demolished estimates — price target upgrades flow in through Thursday driving continuation. Fed speakers lean hawkish with zero rate cuts priced through year-end; growth stocks still run because $520B hyperscaler capex in 2026 is self-funding the AI rally. Best rotation play: SOXX ETF over QQQ this week — semis outperform broad tech after a major chip beat, enter SOXX at $240 targeting $255. Top stock pick: AMD entry at $163 on any pullback, target $178, stop $158.",

      monthAction: "Accumulate",
      thisMonth: "Bull phase confirmed — VIX subdued, AI capex driving 19.7% S&P 500 EPS growth in 2026, breadth improving. AI infrastructure leads this month — NVDA, AMD, AVGO all benefit from $520B hyperscaler capex growing 30% YoY, roughly 1.6% of US GDP. Monthly conviction: accumulate NVDA at $130–$135, thesis is direct — every dollar of hyperscaler capex eventually runs through NVDA silicon. Add US equity exposure this month, overweight tech vs defensives, LPL S&P 500 year-end target is 7,300–7,400."
    },

    etfs: {
      todayAction: "Buy",
      today: "IBIT posted 9 straight days of inflows totaling $2.7B — institutions are buying every BTC dip, structural floor signal even with BTC below $80K. QQQ is a dip-buy today; key level is $490 — hold above that and you buy, break below and you wait. Best ETF entry today: SOXX at $240 on the AMD catalyst, target $248, clean single-session trade. ARKK is outperforming QQQ today on the AMD beat — risk appetite is genuinely on.",

      weekAction: "Buy",
      thisWeek: "SOXX is the best ETF for the week — AMD 57% data center beat plus NVDA sympathy confirms the chip trade is alive, not fading. SOXX says semis are leading; NVDA and AMD both up means AI narrative intact — enter SOXX at $240–$242, avoid TLT as hawkish Fed kills duration. Add SOXX this week at $240 targeting $255; avoid XLE as Iran-Hormuz headlines create spike-then-reverse noise. IBIT weekly flow is positive — 9-day institutional inflow streak signals crypto is not in structural trouble despite the $80K rejection.",

      monthAction: "Accumulate",
      thisMonth: "Monthly DCA into SOXX at $238–$242 — AMD's beat proves chip demand is real, not priced-in fantasy, and AI capex of $520B validates the entire sector. SOXX outperforming QQQ confirms AI narrative intact and accelerating. Portfolio allocation this month: 40% US tech stocks/ETFs, 30% crypto (BTC/SOL/ETH), 20% SOXX, 10% cash for dip buying. Long-term conviction hold: QQQ at $488–$492 — 19.7% S&P 500 EPS growth in 2026 supports the 7,300 year-end target."
    },

    malaysia: {
      todayAction: "Watch",
      today: "KLCI is sideways-to-positive today as ringgit strengthening supports gradual foreign fund re-entry. Best Malaysia stock today: INARI — global semis are up on AMD beat, INARI tracks with a 1-day lag and should open higher. USD/MYR trending toward RM4.10 average for 2026 means foreigners are net buyers; this directly benefits PBBANK which sees foreign ownership inflows when ringgit strengthens. SKYECHIP IPO on Main Market is the event to watch today — AI/semiconductor theme, apply for allocation.",

      weekAction: "Buy",
      thisWeek: "KLCI weekly outlook cautiously bullish — key level to hold is 1,580; above that the 1,760 year-end target stays in play. No BNM OPR meeting this week — central bank holds steady all year, stable net interest margin means CIMB, PBBANK, MAYBANK have no earnings downside surprise. Top Malaysia pick this week: INARI at RM3.00–RM3.10 entry, target RM3.40 on AMD beat spillover, cut if RM2.90 breaks. Best sector: semiconductor/tech (INARI, MPI, UNISEM) riding the global AI chip wave with a 1-day lag.",

      monthAction: "Accumulate",
      thisMonth: "Bursa is in buy mode this month — RM20B+ of foreign outflows from 2025 are reversing as ringgit strengthens toward the RM4.00 year-end target. Foreign funds returning first to large-caps — MAYBANK, CIMB, PBBANK see foreign ownership tick up as USD/MYR narrows. Best sector this month: renewable energy and solar EPCC (Budget 2026-backed) — buy SOLARVEST and CYPARK on pullbacks as 2026 is their busiest pipeline year. Monthly dividend play: PBBANK yields ~5% with consistent payout, ex-dividend typically May–June, accumulate now before ex-date."
    }
  },

  perps: [
    {
      asset: "Bitcoin",
      symbol: "BTC",
      direction: "LONG",
      currentPrice: "$79,840",
      entry: "$79,000 - $80,200",
      tp1: { price: "$82,500", pct: "+3.3%" },
      tp2: { price: "$85,500", pct: "+7.1%" },
      sl:  { price: "$77,500", pct: "-2.9%" },
      leverage: "8x",
      riskReward: "1:2.5",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "BTC holding above $79K support with 9 consecutive days of IBIT ETF inflows totaling $2.7B — institutions are buying every dip, providing a structural floor. Iran rejecting the US Hormuz deal caused the $80K flush but this is headline-driven noise, not a structural breakdown — the trend remains up. Funding rates went negative on the drop, flushing weak longs and setting up a squeeze higher once $80,500 reclaims. Zero Fed rate cuts priced through year-end limits upside, but AI and ETF inflows keep BTC bid — this is a range trade targeting the 200-day MA at $82,228 and then $85,500. Enter long at $79,000–$80,200 with hard stop at $77,500; invalidate the entire thesis if $77,500 breaks on daily volume."
    },
    {
      asset: "Ethereum",
      symbol: "ETH",
      direction: "LONG",
      currentPrice: "$2,367",
      entry: "$2,320 - $2,370",
      tp1: { price: "$2,490", pct: "+5.2%" },
      tp2: { price: "$2,580", pct: "+9.0%" },
      sl:  { price: "$2,260", pct: "-4.5%" },
      leverage: "8x",
      riskReward: "1:2.0",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "ETH/BTC ratio attempting to hold with Ethereum ETF inflows remaining positive — early signal that institutional alt rotation has not ended. RWA tokenization and DeFi TVL on Ethereum are growing monthly, providing structural on-chain demand independent of price speculation. Key technical level: $2,300 is the must-hold support — a daily close below that signals a move to $2,100 and this trade is off. Enter ETH longs at $2,320–$2,370 only if BTC is stabilizing above $79K — this is a BTC-correlated trade, do not enter if BTC breaks $78,500. Hard invalidation at $2,260; that level breaks the recent higher-low structure and turns the trend bearish."
    },
    {
      asset: "Solana",
      symbol: "SOL",
      direction: "LONG",
      currentPrice: "$87.98",
      entry: "$85 - $88",
      tp1: { price: "$93", pct: "+5.7%" },
      tp2: { price: "$100", pct: "+13.6%" },
      sl:  { price: "$83", pct: "-5.7%" },
      leverage: "8x",
      riskReward: "1:2.4",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "SOL DePIN and on-chain activity remain elevated with $6.2M in weekly ETF inflows — ecosystem is alive and spot ETF catalysts from VanEck, Franklin Templeton, and Galaxy filings are a live binary upside event. Volume is healthy relative to price consolidation at $88 — accumulation behavior, not distribution. Key technical: $85 is critical support — hold there and SOL targets $93 then $100; break it and the next stop is $78. SOL is lagging BTC on this correction which is normal — higher-beta assets lead on BTC bounces, meaning SOL outperforms once BTC reclaims $80,500. Enter at $85–$88 with stop at $83; if BTC reclaims $81,000 cleanly, add to the SOL position."
    }
  ]

};
