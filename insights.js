window.CRUCIX_INSIGHTS = {

  insights: {
    crypto: {
      todayAction: "Buy",
      today: "BTC reclaimed $76,500 after testing $74,200 lows — buy the bounce while it holds above $75K. Spot BTC ETF inflows hit $663M on April 17, institutional accumulation signal confirmed. Iran/Hormuz tensions are headline noise but $1.17B short squeeze stack sits above $77K ready to fire. Buy BTC at $76,500 now, target $79,000, cut if $72,800 breaks on daily close.",

      weekAction: "Buy",
      thisWeek: "BTC options expiry Friday April 25 ($7.9B notional) is the week's key event — expect volatility Wed–Fri and potential max-pain squeeze above $77K. BTC must hold $75,000 to stay bullish; daily close below confirms re-test of $72,800 danger zone. Best sector this week is AI-crypto: TAO and RENDER showing relative strength while BTC consolidates below $80K. Be aggressive — ETF inflows plus $77K short squeeze stack = asymmetric upside this week.",

      monthAction: "Accumulate",
      thisMonth: "Early bull cycle confirmed — BTC up 10%+ in April for first time in 10 months, institutional ETF buying is the structural bid. Accumulate on dips — ETF inflows and RWA narrative are sustained buying pressure, not retail FOMO. SOL (RWA value $1.85B, DePIN expanding) and TAO (AI-crypto leader in 2026) are best altcoin accumulation targets this month. Avoid leveraged bets outside top-10 until BTC clears $80K and dominance starts falling below 55%."
    },

    usStocks: {
      todayAction: "Buy",
      today: "Market opens bullish — TSMC +35% revenue beat and NVDA on a 10-day winning streak (+18%) signal follow-through, not fade. NVDA at $118 has momentum; any dip to $112–$114 is a buy with $125 target. AMD up 11% this week confirms AI trade is broad, not NVDA-only — rotate into AMD at $105, target $116, stop $100. Best setup today: AMD long at $105, the TSMC beat removes all AI capex doubt for semis sector-wide.",

      weekAction: "Buy",
      thisWeek: "ServiceNow (NOW) reports Q1 2026 earnings on April 22 — market expects AI integration upsell beat; buy before print at $1,050, target $1,150. No Fed speaker or CPI this week — macro quiet means AI earnings alone drive the tape, which is a clean bullish setup. Buy SOXX ETF at $240 as TSMC's revenue beat removes supply chain fear for the chip sector. Top week pick: NVDA — hold through $125, stop below $108.",

      monthAction: "Accumulate",
      thisMonth: "Bull phase intact — VIX elevated on Iran tensions but tech breadth recovering with semis leading the charge. AI semiconductor cycle is mid-bull: NVDA, AMD, TSMC all printed Q1 2026 earnings beats confirming the buildout accelerates. Monthly conviction: accumulate NVDA at $110–$115, thesis is GB300 ramp driving data center revenue through year-end. Add US tech equity exposure — Fed cutting 50bp in 2026 plus AI capex supercycle = growth tailwind through Q3."
    },

    etfs: {
      todayAction: "Buy",
      today: "IBIT pulling consistent inflows ($663M April 17) — institutional crypto buying is a positive read for broad risk appetite today. QQQ is in dip-buy mode — hold above $450 stays constructive, break below $445 flips to wait. Best ETF entry today: SOXX at $240 — TSMC blowout de-risks the entire chip trade in a single print. ARKK outperforming QQQ by 3%+ this week signals genuine risk appetite return, not a relief bounce.",

      weekAction: "Buy",
      thisWeek: "SOXX is best ETF this week — TSMC +35% revenue removes AI capex doubt and NVDA 10-day streak confirms chip momentum. Chip trade fully alive: SOXX holding $240+ with ServiceNow earnings April 22 adding software catalyst mid-week. Add SOXX at $240–$245 this week; avoid TLT as macro quiet means bonds underperform growth assets. IBIT weekly inflows trending positive — institutional crypto allocation growing, supports crypto and tech simultaneously.",

      monthAction: "Accumulate",
      thisMonth: "Monthly DCA pick: SOXX at $240 — semiconductor cycle is mid-bull with AI buildout accelerating per TSMC and ASML April guidance. AI narrative fully intact — SOXX outperforming QQQ month-to-date on earnings beats, no rotation signal yet. Portfolio split this month: 40% tech ETFs (SOXX/QQQ), 30% individual AI stocks (NVDA/AMD/NOW), 30% crypto. Long-term conviction hold: QQQ at $445–$450 — Fed rate cuts 2026 plus AI earnings growth is a durable bull setup."
    },

    malaysia: {
      todayAction: "Buy",
      today: "KLCI opens cautiously bullish — Iran oil tensions marginally support ringgit as an oil-linked currency, limiting foreign outflow risk today. Best Malaysia stock today: Inari Amertron (0166) at RM2.85–2.90 entry — NVDA and TSMC blowout earnings ripple into Malaysian semis with 1-day lag. USD/MYR holding ~4.42–4.45 — foreigners neutral to mild buyers, bank stocks (CIMB, PBBANK, MAY) hold flat. Avoid ACE Market IPO speculation today; AMS Advanced Material's planned float is high-risk in current volatile global tape.",

      weekAction: "Buy",
      thisWeek: "KLCI holds 1,520–1,530 as key support this week — above that stays constructive; break below triggers caution. No BNM rate decision this week — bank stocks trade on global risk sentiment, neutral to slight positive bias. Top Malaysia pick: Inari (0166) at RM2.85 entry, target RM3.10, catalyst is the NVDA AI earnings season semiconductor ripple. No major ex-dividend plays this week — concentrate on tech-linked names over defensives.",

      monthAction: "Accumulate",
      thisMonth: "Bursa in buy-the-dip mode this month — global AI earnings beats and stable ringgit are supporting foreign fund interest. Ringgit holding above 4.40 signals foreigners buying; Malaysia tech names are the primary beneficiary. Best sector this month: technology — Inari (0166, target RM3.20, NVDA supply chain leverage) and MyEG (0138, digital government services plus AI integration catalyst). Monthly dividend play: Maybank (1155) at ~6.2% yield, ex-dividend expected around end-April — buy before ex-date for income plus capital hold."
    }
  },

  perps: [
    {
      asset: "Bitcoin",
      symbol: "BTC",
      direction: "LONG",
      currentPrice: "$76,500",
      entry: "$75,500 - $76,500",
      tp1: { price: "$79,200", pct: "+3.9%" },
      tp2: { price: "$82,500", pct: "+7.8%" },
      sl:  { price: "$72,800", pct: "-4.7%" },
      leverage: "10x",
      riskReward: "1:2.0",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "BTC reclaimed $76,500 after forming a higher low at $74,200 — the $73K–$74.5K support band held and buyers are back in control. Spot ETF inflows of $663M on April 17 confirm institutional accumulation is the driver, not retail; structural bid is real. Funding rates are negative to neutral — no long squeeze risk, longs getting paid to hold through consolidation. Iran/oil tensions are transient macro noise; Fed cutting 50bp in 2026 is the structural tailwind for risk assets. Enter on dips to $75,500–$76,500; full invalidation if $72,800 breaks on a daily close."
    },
    {
      asset: "Ethereum",
      symbol: "ETH",
      direction: "LONG",
      currentPrice: "$2,280",
      entry: "$2,250 - $2,290",
      tp1: { price: "$2,390", pct: "+5.3%" },
      tp2: { price: "$2,520", pct: "+11.0%" },
      sl:  { price: "$2,175", pct: "-4.2%" },
      leverage: "8x",
      riskReward: "1:2.6",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "ETH/BTC ratio consolidating near lows — not yet outperforming BTC but ETH ETF inflows alongside BTC confirm parity institutional buying, not rotation away. On-chain: L2 adoption and DeFi TVL holding through this price dip, base demand intact and not capitulating. ETH testing $2,250–$2,300 support for the third time with declining sell volume — absorption pattern forming at a key level. Enter $2,250–$2,290 on BTC stabilisation above $75K; invalidate on daily close below $2,175."
    },
    {
      asset: "Solana",
      symbol: "SOL",
      direction: "LONG",
      currentPrice: "$84",
      entry: "$83 - $85",
      tp1: { price: "$89", pct: "+6.0%" },
      tp2: { price: "$95", pct: "+13.1%" },
      sl:  { price: "$79.50", pct: "-5.4%" },
      leverage: "8x",
      riskReward: "1:2.4",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "SOL memecoin and DeFi activity stabilising with RWA value on Solana at $1.85B — structural on-chain demand confirmed and growing. Volume at $84 support contracting with no major liquidation cascades — selling pressure exhausting at this level. Key technical: $83 is the prior breakdown point now acting as support; hold here keeps the setup valid. SOL is lagging BTC on this bounce — when BTC triggers the $77K short squeeze, SOL should outperform as risk appetite returns and alts catch a bid. Enter $83–$85; cut if $79.50 breaks, which signals broader altcoin flush below BTC's key $74K zone."
    }
  ]

};
