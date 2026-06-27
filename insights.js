window.CRUCIX_INSIGHTS = {

  insights: {
    crypto: {
      todayAction: "Sell",
      today: "BTC at $60,128 is deep in defensive territory — 10 straight sessions of ETF outflows totaling $2.97B is institutional distribution, not a dip. Altcoin Season Index sits in the mid-30s — no altseason; only ONDO (+59% in 30 days) outperforms on RWA narrative. AI rotation is pulling capital from all crypto into global equities hitting fresh records. Short BTC on dead-cat bounce to $61,000-$61,500, target $58,500, cut if $63,500 breaks.",

      weekAction: "Wait",
      thisWeek: "Core PCE (May) drops Monday June 30 — single biggest macro catalyst this week; hot print above 0.3% MoM kills any crypto relief rally. BTC weekly key level is $60,000 — hold here and range-trade, break below opens $55,000 next. RWA is the only surviving narrative: ONDO and LINK are the two altcoins worth watching if BTC stabilises. Stay patient and short rallies — do not buy dips until ETF outflows reverse for 3 consecutive days.",

      monthAction: "Trim",
      thisMonth: "BTC opened June at $73,674 and sits at $60,128 — down 18% — this is distribution phase, not early bull. Trim all altcoin exposure to core BTC-only positions; wait for ETF flows to flip net positive before adding. ONDO is the one exception to accumulate on dips toward $0.80-$0.90 — RWA is the only narrative with real institutional traction right now. Avoid AI crypto (FET, RENDER, TAO) and memecoins — they bleed fastest as capital rotates from crypto to equities."
    },

    usStocks: {
      todayAction: "Hold",
      today: "Market bias today is flat to cautious — Core PCE drops Monday June 30 so Friday June 27 is a positioning/cash day with no new entries warranted. NVDA is down 17% despite $215.9B revenue (+65% YoY) — the gap between fundamentals and price means either deep value or multiple-compression trap; $105 is the line to watch. AMD at 84x forward PE after +130% YTD is extended — do not chase any bounce. Hold cash, no new entries until Core PCE prints Monday morning.",

      weekAction: "Wait",
      thisWeek: "Core PCE May data Monday June 30 is the only macro event that matters — soft print (<0.2% MoM) = buy NVDA $105-$108; hot print = short QQQ below $450. Fed is locked higher-for-longer at 4.2% CPI, compressing every growth multiple until inflation breaks. Best setup on soft PCE: SOXX ETF at $220-$225 — semis bottoming while AI demand (NVDA $215.9B revenue) stays intact. Top stock pick: NVDA at $108 on soft PCE, target $125 in 3-4 weeks, cut below $100.",

      monthAction: "Reduce",
      thisMonth: "VIX spiked on the $1.3T chip-sector wipe — correction phase, not bear market, but growth-to-cash rotation is real and ongoing. AI fundamentals are unbroken: NVDA 65% revenue growth proves demand; the selloff is valuation-driven, not earnings-driven. Monthly conviction trade: NVDA is highest-conviction entry once Core PCE clears — accumulate $105-$110 only after Monday data confirms. Reduce total US equity exposure by 20% this month and rebuild selectively on a soft PCE + any Fed pivot signal."
    },

    etfs: {
      todayAction: "Hold",
      today: "IBIT: 10 straight days of outflows, $445M out on June 26 alone — institutional money is exiting crypto, do not buy IBIT today. QQQ at $460-$470 is a hold not a buy — Core PCE Monday decides if this dip is buyable or $450 breaks. Best ETF entry today: none — hold 50% cash until PCE data. ARKK underperforming QQQ signals risk appetite has not recovered — avoid leveraged ETFs entirely.",

      weekAction: "Watch",
      thisWeek: "SOXX is the best ETF to watch this week — chip fundamentals intact (NVDA $215.9B, Micron robust), buy $220-$225 if PCE soft Monday. IBIT: first day of net inflows is your signal the crypto short squeeze begins — watch daily flow data as your trigger. Add SOXX at $220 on soft PCE; if PCE hot, stay all cash on ETFs for the week. IBIT weekly flow stays negative until PCE breaks the macro overhang — do not front-run the reversal.",

      monthAction: "Hold",
      thisMonth: "Monthly DCA pick: SOXX at $220-$230 — best entry level in 2 years as AI chip fundamentals remain intact but price corrected 20%+ on valuation reset. AI narrative check: SOXX vs QQQ relative strength is bottoming — NVDA stabilising above $100 keeps this ratio intact. Portfolio allocation this month: 30% SOXX/QQQ, 20% NVDA direct, 50% cash waiting on PCE + rate clarity. Long-term conviction hold: QQQ at $450-$460 — this is your core position when the Fed pivots."
    },

    malaysia: {
      todayAction: "Watch",
      today: "KLCI likely flat today — BNM hold stance and ringgit near RM4.00/USD keeps foreign buying neutral. Best Malaysia stock today: Inari Amertron at RM3.20-RM3.40 — tracks global semis with 1-day lag; SOXX bottoming = Inari next to move, target RM3.80. USD/MYR at ~4.00 is neutral; a break below 3.95 triggers foreign fund re-entry into Bursa. Skip both ACE Market IPOs today (Bus Cap Berhad, MM Computer Systems) — small-cap with no near-term catalyst.",

      weekAction: "Watch",
      thisWeek: "KLCI weekly: hold above 1,580 = cautiously bullish; break below = wait for 1,550 before adding. BNM no meeting this week — Maybank, CIMB, PBBANK all range-bound, no catalyst for bank stocks. Top Malaysia pick this week: Inari at RM3.20-RM3.40, target RM4.00 — cleanest local play on global semi cycle recovery with lower volatility than US names. Tourism stocks (GENM, Genting Malaysia) riding Visit Malaysia 2026 — check ex-dividend dates before buying either name.",

      monthAction: "Accumulate",
      thisMonth: "Bursa is in buy mode — foreign funds reversing after RM20B+ net outflow in 2025, foreign shareholding at near-historic low of 19% means mean reversion has significant room. Ringgit strengthening toward RM3.95 end-2026 adds FX tailwind for foreign buyers returning to local equities. Best sectors: Consumer (MR DIY, AEON) on Visit Malaysia 2026 tourist spend; Tech (Inari) on semi recovery; Banks (Maybank) on BNM rate stability. Dividend play this month: Maybank — ~6% yield, accumulate before Q3 ex-dividend announcement."
    }
  },

  perps: [
    {
      asset: "Bitcoin",
      symbol: "BTC",
      direction: "SHORT",
      currentPrice: "$60,128",
      entry: "$61,000 - $61,500",
      tp1: { price: "$58,500", pct: "+4.3%" },
      tp2: { price: "$55,000", pct: "+10.2%" },
      sl:  { price: "$63,500", pct: "-3.7%" },
      leverage: "8x",
      riskReward: "1:2.8",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "BTC is in confirmed downtrend: 10 consecutive sessions of ETF outflows totaling $2.97B is unprecedented institutional exit — this is distribution, not a dip to buy. AI rotation is pulling capital from BTC into global equities with AI stocks hitting fresh records while BTC tested $58,115 monthly low. Funding rates normalising negative as sentiment flips bearish — no squeeze risk for shorts at these levels. Core PCE June 30 hot print is a direct tailwind for this short as it kills any macro-driven crypto recovery narrative. Enter short on dead-cat bounce to $61,000-$61,500 resistance; full invalidation and immediate cut if price closes above $63,500 on the daily."
    },
    {
      asset: "Ethereum",
      symbol: "ETH",
      direction: "SHORT",
      currentPrice: "$1,565",
      entry: "$1,590 - $1,630",
      tp1: { price: "$1,490", pct: "+7.5%" },
      tp2: { price: "$1,350", pct: "+16.1%" },
      sl:  { price: "$1,700", pct: "-5.6%" },
      leverage: "5x",
      riskReward: "1:2.9",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "ETH/BTC ratio is falling — ETH underperforms BTC even in bounces, meaning it falls harder in downtrends; no DeFi rotation catalyst to break this. Whale cohorts holding ETH are in losses for the first time since 2019 — capitulation selling into any bounce creates persistent overhead supply. No on-chain DeFi catalyst in sight: ETH ETF outflows hit $12.8M on June 26, confirming institutional exit matches spot weakness. Key technical: $1,565 already broke the $1,578 June forecast floor; next clean support is $1,350 Fibonacci level. Enter short on relief bounce to $1,590-$1,630; invalidate and cut if ETH reclaims $1,700 on a daily close with expanding volume."
    },
    {
      asset: "Solana",
      symbol: "SOL",
      direction: "SHORT",
      currentPrice: "$72.70",
      entry: "$74 - $76",
      tp1: { price: "$68", pct: "+9.3%" },
      tp2: { price: "$58", pct: "+22.7%" },
      sl:  { price: "$80", pct: "-6.7%" },
      leverage: "5x",
      riskReward: "1:3.4",
      confidence: "Low",
      minUSD: "10",
      reasoning: "SOL memecoin activity and on-chain fee generation collapsed after meme season ended — price is following fundamentals down from $295 January peak to $72.70 with no reversal catalyst. Volume is declining on each bounce — classic distribution with no accumulation signal; the recent Solana ecosystem hack adds headline risk. Key technical: $68 is the June 28 price target floor per analyst models; break below opens $58 next Fibonacci support. SOL lags BTC by 1-2 days — BTC already broke its key level, SOL is next in the cascade. Enter short at $74-$76 on bounce; invalidation is a daily close above $80 with expanding volume signalling RWA/memecoin re-rating."
    }
  ]

};
