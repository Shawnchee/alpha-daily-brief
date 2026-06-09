window.CRUCIX_INSIGHTS = {

  insights: {
    crypto: {
      todayAction: "Wait",
      today: "BTC at $62,000 bouncing after 13-day ETF outflow streak just ended — first real buy signal in weeks but still below $75K so stay defensive. RWA is the hottest narrative today: ONDO is the play, institutional tokenization at $27.6B (+300% YoY) is pulling capital even in a down market. CPI Thursday is the 12h catalyst — soft number sends BTC to $65K fast, hot number retests $60K. Trade: buy ONDO at $1.20, target $1.50, cut if $1.05 breaks — RWA narrative intact regardless of BTC direction.",

      weekAction: "Hold",
      thisWeek: "CPI Thursday is the only event that matters this week — soft print = BTC rallies to $65-66K, hot print = retest of $60K support. BTC weekly key level: above $63,500 = short-term bullish, below $60,000 = next leg down toward $55K. Best crypto sector this week is RWA (ONDO, LINK) — tokenized private credit hitting $17B and still growing, institutional flows holding up. Be patient until Thursday; no aggressive longs before CPI clears.",

      monthAction: "Accumulate",
      thisMonth: "Bear recovery phase — BTC down 51% from Oct 2025 ATH of $126,210, ETF outflow streak just reversed; distribution is ending and accumulation zone forming at $60-62K. Accumulate this month — Saylor whale signal plus oversold technicals say bottom formation is near. Best accumulation targets: ONDO (RWA thesis, 300% YoY tokenization growth) and TAO (AI crypto with real revenue, dominant 2026 narrative). Avoid broad memecoins — no speculative liquidity in current risk-off environment."
    },

    usStocks: {
      todayAction: "Hold",
      today: "Market opened Monday with a chip-led bounce after Friday's inflation selloff — gap up but watch for fade if CPI fear returns intraday. NVDA up 2.3% pre-market on SK Hynix HBM partnership — entry at $108-110 intraday only if it holds above $107 support. AI trade looks like a dead-cat bounce: NVDA down 6.89% this week means sellers still dominate above $115, don't chase. Best scalp: NVDA long at $108 targeting $114, cut below $105; avoid AMD until $75 holds on a daily close.",

      weekAction: "Hold",
      thisWeek: "No major semi earnings this week (NVDA Aug 26, AMD Aug 4) but CPI Thursday is the market-moving catalyst — hot number kills the chip bounce, soft number sends SOXX ripping. Fed stays hawkish-leaning — every hot CPI print adds rate-hike fear and hits growth stocks hardest, position accordingly. Best rotation play: if CPI soft Thursday, buy SOXX at $177-180 for a bounce targeting $192. Top stock pick: NVDA at $108 entry post-CPI if print is 3.2% or below, target $120, stop at $103.",

      monthAction: "Hold",
      thisMonth: "VIX elevated from macro shocks, tech breadth narrow — only AI infrastructure names holding up, not a broad bull phase yet. Leading sector this month is AI infrastructure (data centers, HBM memory) — TSM posted 35% revenue and 58% profit growth YoY, AI capex intact even in the downturn. Monthly conviction stock: TSM at $180 entry, thesis = HBM demand from NVDA/AMD orders is the real AI trade, target $210. Hold current US equity exposure flat this month — don't add until CPI trend reverses or Fed signals a clear pause."
    },

    etfs: {
      todayAction: "Watch",
      today: "IBIT flows turned positive after 13-day outflow streak — institutions buying BTC ETF at $62K is a bullish signal for next 24h crypto direction. QQQ at key $450 support — close above $455 = dip buy confirmed; break below $448 = real weakness, stay out. Best ETF entry today: IBIT at current levels for a 3-5% bounce trade if BTC reclaims $63,500. ARKK underperforming QQQ today = risk appetite only partially back, keep position size small.",

      weekAction: "Hold",
      thisWeek: "SOXX is the best ETF for the week — soft CPI Thursday triggers the fastest chip bounce and SOXX is the cleanest vehicle, entry $177-180, target $192. SOXX chip trade is on hold until CPI clears — NVDA and AMD both in weekly downtrend, don't front-run. Add IBIT at $40-42 if BTC holds $61,500 through midweek; avoid XLK until CPI print confirmed soft. IBIT weekly flows turning positive signals institutions accumulating BTC ETF at these levels.",

      monthAction: "Accumulate",
      thisMonth: "Monthly DCA pick: IBIT at $40-42 — accumulating spot BTC ETF at 51% below ATH is the clearest value play in the current cycle. SOXX vs QQQ: SOXX underperforming near-term on inflation fears but TSM earnings confirm AI capex intact — relative strength trade reasserts post-CPI. Portfolio allocation this month: 40% ETFs (IBIT/SOXX split), 35% crypto (BTC/ONDO/TAO), 25% cash for CPI clarity. Long-term conviction hold: IBIT — 13-day outflow reversal at $62K is the institutional accumulation signal."
    },

    malaysia: {
      todayAction: "Watch",
      today: "KLCI cautious today — global tech risk-off from Friday's chip selloff drags on bank and semiconductor-linked names at open. Best Malaysia stock today: Inari Amertron at RM2.00-2.10 entry — tracks global semis with a 1-day lag and NVDA bounced 2.3% pre-market. Ringgit at RM4.00 signals foreigners beginning to return — direct beneficiary is Maybank (MAY) which sees NIM support from stable OPR and stronger currency. No IPO catalyst today — avoid speculative small caps until broader risk appetite recovers.",

      weekAction: "Watch",
      thisWeek: "KLCI weekly support at 1,570 — hold above = cautiously bullish, break below = foreign selling resumes and banks drag the index. No BNM meeting this week — OPR stays steady, CIMB and PBBANK drift sideways with no catalyst to chase. Top Malaysia pick this week: Inari Amertron at RM2.00 entry, target RM2.40, catalyst = global AI hardware cycle recovery flowing through local EMS supply chain. Best sector: semiconductor supply chain — also check PBBANK ex-dividend calendar as it typically runs 2 weeks before ex-date.",

      monthAction: "Accumulate",
      thisMonth: "Bursa is in accumulation mode — foreign shareholding near historic low of 19% after RM20B+ outflows in 2025, maximum pain for sellers means limited further downside. Foreign funds returning as ringgit strengthens toward RM4.00 average target — banking sector is the direct beneficiary with improving foreign ownership trend. Best sector this month: renewable energy and solar EPCC — buy Solarvest at RM0.85 (Budget 2026 commitment + busy project pipeline) and Sunway at RM3.60 (data center + green building dual narrative). Monthly dividend play: PBBANK at RM4.20 entry, dividend yield ~5%, institutional anchor stock with Q3 2026 ex-dividend expected."
    }
  },

  perps: [
    {
      asset: "Bitcoin",
      symbol: "BTC",
      direction: "LONG",
      currentPrice: "$62,000",
      entry: "$61,500 - $62,200",
      tp1: { price: "$64,500", pct: "+4.0%" },
      tp2: { price: "$67,800", pct: "+9.4%" },
      sl:  { price: "$60,140", pct: "-3.0%" },
      leverage: "8x",
      riskReward: "1:2.1",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "BTC bouncing at $62,000 after 13-day ETF outflow streak reversed — structure shifting from bearish to cautiously bullish for the first time in weeks. Saylor posted accumulation signal June 7, triggering a 4% rally; MicroStrategy buying at these levels is a strong institutional floor signal. Funding rates neutral after a prolonged negative stretch — short squeeze fuel is building and funding won't punish longs here. CPI Thursday is the macro trigger — position ahead of it; soft print sends BTC directly to $65-66K. Enter $61,500-62,200 on minor dip; invalidate and cut immediately on a daily close below $60,000."
    },
    {
      asset: "Ethereum",
      symbol: "ETH",
      direction: "LONG",
      currentPrice: "$1,582",
      entry: "$1,560 - $1,585",
      tp1: { price: "$1,645", pct: "+4.0%" },
      tp2: { price: "$1,740", pct: "+10.0%" },
      sl:  { price: "$1,534", pct: "-3.0%" },
      leverage: "8x",
      riskReward: "1:2.3",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "ETH/BTC ratio declining — SOL-ETH dropped 8.69% in 24h showing ETH underperforming alts but holding against BTC better than expected, not a full altseason signal yet. RWA protocols like Ondo Finance on Ethereum are absorbing institutional DeFi capital, providing on-chain demand floor at current levels. Key technical support at $1,530 — this level must hold or the trade is off and next target is $1,400. Enter on dip to $1,560-1,585; BTC reclaiming $63,500 is the trigger before ETH longs pay off. Invalidate below $1,530 on a daily close — structural support breaks and short becomes the trade."
    },
    {
      asset: "Solana",
      symbol: "SOL",
      direction: "LONG",
      currentPrice: "$79",
      entry: "$78.00 - $79.50",
      tp1: { price: "$83.00", pct: "+5.1%" },
      tp2: { price: "$88.00", pct: "+11.4%" },
      sl:  { price: "$76.20", pct: "-3.5%" },
      leverage: "5x",
      riskReward: "1:2.0",
      confidence: "Low",
      minUSD: "10",
      reasoning: "SOL memecoin and DeFi activity subdued in current risk-off environment — no speculative volume catalyst today to drive a standalone SOL pump. SOL is down more than ETH on a BTC-pair basis indicating weak hands still exiting — price action is lagging not leading. Key technical support at $76 — previous consolidation zone; hold = recovery to $88, breach = drop to $65. SOL is lagging BTC on this bounce — don't enter SOL longs until BTC confirms above $63K with a daily close. Enter $78-79.50 only with small size; invalidate and exit immediately if $76 breaks on a daily candle close."
    }
  ]

};
