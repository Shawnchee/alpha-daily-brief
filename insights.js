window.CRUCIX_INSIGHTS = {

  insights: {
    crypto: {
      todayAction: "Wait",
      today: "BTC at $62,000 is bouncing from Friday's $59,073 low but record ETF outflows — $2.97B over 10 straight sessions — confirm this is dead-cat territory, not a reversal. AI narrative ripping in equities while BTC slides = risk-off divergence; avoid all crypto longs today. Middle East escalation plus strong US jobs data locked in no Fed cuts in 2026, stripping the macro tailwind from risk assets. Trade: short BTC only if it bounces into $63,000–$64,500 resistance, target $58,500, cut immediately if $65,500 breaks on a 4H close.",

      weekAction: "Wait",
      thisWeek: "No major crypto catalyst this week — next CPI July 14, next FOMC late July; watch for Fed speakers mid-week for any hawkish re-pricing. BTC weekly: holds above $65,000 = short-term relief bounce; breaks below $58,000 = next leg down toward $52,000. Best crypto sector this week: none — altcoin season index 47 = BTC season, stay cash or BTC only, zero altcoins. Patient this week because ETF outflows show no reversal signal and shorts are not yet crowded enough to risk a squeeze.",

      monthAction: "Hold",
      thisMonth: "Late distribution phase: BTC below $75K threshold, record ETF outflows, altcoin index firmly BTC season — not an accumulation environment. Trim or hold existing positions only; do not add fresh longs at $62K with 4.2% CPI and active geopolitical risk overhead. Long-term accumulate SOL only below $70 (Alpenglow upgrade Q3, $2B+ RWA sector, confirmed $4.7M institutional buy) and BTC only below $55,000. Avoid memecoins and leveraged altcoins entirely this month — low liquidity plus risk-off equals rug conditions."
    },

    usStocks: {
      todayAction: "Wait",
      today: "Cautious open today after ugly Friday: NVDA -6%, SOXX -9%, Broadcom earnings rattled the entire AI trade — watch for gap-down or weak relief bounce. NVDA at $200 is the line: holds $195 = buy the dip; breaks $195 = accelerating downside toward $180, don't add. AI trade fragile today — NVDA and AMD direction in the first 30 minutes sets the entire session bias. Best setup: wait for NVDA to hold $195 before entering any position; avoid all semiconductor names at the open.",

      weekAction: "Hold",
      thisWeek: "No major earnings this week post-Broadcom; FOMC minutes confirmed cuts pushed to Q3–Q4 2026 = growth stocks need patience. No CPI until July 14 = macro-light week, so Fed speakers Tuesday–Thursday drive the daily narrative — lean hawkish. Best sector rotation: XLE at $98 if Middle East tensions stay elevated — oil risk premium not fully priced, 3%+ yield cushion. Top stock: NVDA at $195–200 support, enter if holds Monday close, target $215, stop hard at $190.",

      monthAction: "Hold",
      thisMonth: "Bull phase but technically fragile: NVDA -6% Friday, semiconductor breadth broken short-term; hold not add until semis stabilise. Leading sector: AI power infrastructure — CEG and VST outperforming pure semis as data centre power demand is a secular theme independent of chip earnings. Monthly conviction: AMD at $440–450 (up 117% YTD, AI capex cycle intact) — add on dip, target $500 by July earnings. Trim semiconductor overweight this month after Broadcom shock; hold QQQ core, reduce SOXX exposure by 20%."
    },

    etfs: {
      todayAction: "Watch",
      today: "IBIT in record 10-session outflow streak at $2.97B = institutional crypto de-risking; avoid IBIT today, signal is bearish. QQQ at $480 is critical support after Friday chip rout — holds here = dip buy; breaks = real distribution, not a dip. Best ETF entry today: SOXX at $250 if it holds morning lows, tactical oversold bounce; tight stop $245. ARKK underperforming QQQ after Broadcom shock = risk appetite genuinely dented, not a buy today.",

      weekAction: "Hold",
      thisWeek: "Best ETF this week: XLE at $98 — Middle East risk premium not fully priced, oil supply concerns growing into the weekend. SOXX chip trade tested but AI supercycle intact; watch NVDA/AMD Monday close before adding SOXX. Add XLE at $98 as geopolitical hedge this week; avoid IBIT until 3 consecutive inflow days signal institutional return. IBIT stays in outflow mode = institutional crypto signal bearish all week.",

      monthAction: "Hold",
      thisMonth: "Monthly DCA pick: QQQ at $480–490 — AI infrastructure is a decade-long thesis regardless of near-term chip volatility. SOXX underperforming QQQ post-Broadcom = AI hardware narrative rattled not broken; wait for SOXX/QQQ ratio stabilisation before adding. Portfolio split this month: 50% broad equities QQQ/SPY, 30% cash or short-duration bonds, 20% crypto BTC only. Long-term conviction hold: QQQ at $480 — AI capex build-out is multi-year and irreversible."
    },

    malaysia: {
      todayAction: "Hold",
      today: "KLCI flat to slight red today driven by MAY/CIMB/PBBANK tracking global risk-off — no domestic catalyst to buck the trend. Best Malaysia stock today: Gamuda (5398) at RM4.80 — data centre and MRT3 orders insulate it from global chip selloff. Ringgit at RM4.20–4.25 vs USD, on track toward RM4.00 year-end forecast = foreigners gradually returning, mildly positive for index heavyweights. No major IPO today; avoid Inari and tech-adjacent names given global semiconductor rout.",

      weekAction: "Hold",
      thisWeek: "KLCI weekly: hold above 1,550 = neutral; break below = short-term defensive, rotate to cash. No BNM meeting this week; bank stocks stay flat unless Fed speakers shift global rate expectations sharply. Top pick: Gamuda (5398) at RM4.75–4.80 entry — MRT3 award catalyst, data centre land deals, VMY2026 infrastructure spending. Best sector: construction and infrastructure; watch for ex-dividend utilities names going ex this week.",

      monthAction: "Accumulate",
      thisMonth: "Bursa is accumulate mode: foreign shareholding near 19% historical low = significant inflow room when global risk-off fades in H2 2026. Ringgit strengthening trend to RM4.00 year-end = foreigners returning to buy Malaysian equities, positive for KLCI rerate. Best sectors: renewable energy EPCC solar contractors under 13MP, and construction — Gamuda at RM4.75 and IJM at RM2.30 both carry MRT3 and data centre catalysts. Dividend play: Maybank (1155) at RM9.40–9.50, ~6% forward yield, accumulate before Q3 ex-dividend date."
    }
  },

  perps: [
    {
      asset: "Bitcoin",
      symbol: "BTC",
      direction: "SHORT",
      currentPrice: "$62,000",
      entry: "$63,000 - $64,500",
      tp1: { price: "$58,500", pct: "+8.2%" },
      tp2: { price: "$55,000", pct: "+13.7%" },
      sl:  { price: "$65,500", pct: "-2.7%" },
      leverage: "10x",
      riskReward: "1:3.0",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "BTC bouncing from $59,073 Friday low into $63K–$64.5K overhead resistance — this is a dead-cat bounce, not a reversal. Record 10-session ETF outflows of $2.97B confirm institutional selling is ongoing with no floor in sight. Funding rates near neutral so no squeeze risk, giving shorts room to breathe without getting wiped by a violent unwind. Macro firmly hostile: CPI at 4.2% YoY, Fed cuts pushed to Q3–Q4 2026, Middle East escalation driving global risk-off selling. Enter short on a failed re-test of $63,500; cut immediately if BTC closes above $65,500 on a 4H candle."
    },
    {
      asset: "Ethereum",
      symbol: "ETH",
      direction: "SHORT",
      currentPrice: "$1,582",
      entry: "$1,620 - $1,660",
      tp1: { price: "$1,480", pct: "+9.8%" },
      tp2: { price: "$1,350", pct: "+17.7%" },
      sl:  { price: "$1,700", pct: "-3.7%" },
      leverage: "8x",
      riskReward: "1:2.6",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "ETH/BTC ratio declining = BTC dominance rising = ETH underperforming with no independent catalyst to reverse it. No major DeFi protocol event or ETH ETF inflow signal this week; ETH spot ETFs remain in outflow mode alongside BTC. Key technical: $1,650 is the 20-day moving average ceiling — rejection there confirms the short setup. Enter on any bounce to $1,620–$1,660; hold stop above $1,700, which is prior support now acting as resistance. Invalidate immediately if ETH/BTC ratio breaks above 0.027 with volume, signalling a surprise ETH rotation."
    },
    {
      asset: "Solana",
      symbol: "SOL",
      direction: "SHORT",
      currentPrice: "$79",
      entry: "$81 - $84",
      tp1: { price: "$74", pct: "+10.3%" },
      tp2: { price: "$68", pct: "+17.6%" },
      sl:  { price: "$85", pct: "-3.0%" },
      leverage: "8x",
      riskReward: "1:3.4",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "SOL memecoin and DeFi volumes declining in risk-off; Solana ETF inflows slowing to $1.12B cumulative with no new catalyst to accelerate them. SOL down 1.43% on a day BTC bounced = underperforming its lead asset, a clear distribution signal. Key technical: $84–$85 is hard resistance; below $75 there is a volume vacuum straight to $68. SOL historically leads BTC to the downside in risk-off environments — the lag on today's bounce confirms selling pressure overhead. Enter short at $83 on a BTC failed bounce; invalidate if SOL holds above $85 on volume, signalling institutional accumulation."
    }
  ]

};
