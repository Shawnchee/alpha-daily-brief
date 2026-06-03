window.CRUCIX_INSIGHTS = {

  insights: {
    crypto: {
      todayAction: "Sell",
      today: "BTC crashed to $65,200 with record 10-session $2.97B ETF outflows — avoid all BTC longs today. The only winning crypto trade is AI tokens: HYPE is up while everything else bleeds, FET and TAO are outperforming the broad market. Saylor sale FUD plus relentless ETF redemptions are dragging BTC toward February's $60K low. Short BTC at $65,500–66,000 targeting $62,500, cut if it closes above $67,800.",

      weekAction: "Reduce",
      thisWeek: "BTC options expiry Friday with heavy put concentration near $62,500 is the key event — it confirms downside pressure stays on all week. BTC weekly: above $67,500 = dead-cat bounce possible, below $63,000 = February $60K lows are confirmed in play. Best crypto sector this week is AI agents — HYPE, TAO, RENDER are the only ones with positive flows as capital exits BTC/ETH. Stay patient, reduce BTC/ETH exposure, only buy AI tokens on 5%+ dips with tight stops.",

      monthAction: "Trim",
      thisMonth: "We're in late-distribution/early bear: record ETF outflows, institutional selling, BTC down 13% in a week — this is not a buyable dip. Trim BTC and ETH this month; let BTC fall to $60K and ETH to $1,800 before re-entering. Two coins worth holding: TAO (AI layer-1, institutional narrative intact) and SOL (staking ETF inflows at $251.8M YTD, Alpenglow/Firedancer upgrades are real catalysts). Avoid ETH this month — ETH/BTC ratio is falling with no upcoming catalyst."
    },

    usStocks: {
      todayAction: "Buy",
      today: "Broad market opens soft but semiconductor sector is holding firm — buy chip dips, not broad indices. NVDA is the single stock with the clearest catalyst today: hyperscaler AI capex approaching $1T by 2028 with analysts upgrading targets. AI trade intact — if NVDA holds above $1,150 the tech session is fine; a break below $1,100 signals broad tech risk-off. Best setup: buy NVDA near $1,120–1,150, target $1,250, cut below $1,090.",

      weekAction: "Hold",
      thisWeek: "No major semi earnings this week but Fed speakers are live — any hawkish tone knocks growth stocks 2–3%, watch for that entry. Philly Semi index up 5% this week and 8 of last 9 — momentum stays firmly with chips. Best rotation play: SOXX ETF dip to $285–290 is a buy targeting $310 by Friday. Top stock pick: AMD near $185 — lagging NVDA but riding the same AI GPU demand tailwind, target $205 on any NVDA-led strength.",

      monthAction: "Accumulate",
      thisMonth: "VIX is contained and S&P rose 16% in April–May combined — breadth confirms the equity bull phase is intact. AI/semis is the undisputed leading sector: NVDA, AVGO, AMD all have fundamental backing from hyperscaler capex now projected at $1T annually by 2028. Monthly conviction buy: AVGO at $245–255 — diversified AI infrastructure play (networking + custom chips), target $290 by month-end. Add US equity exposure specifically in AI/semis this month; reduce consumer discretionary and regional banks."
    },

    etfs: {
      todayAction: "Watch",
      today: "IBIT has bled 10 straight sessions of outflows — institutional crypto selling is real, stay out of IBIT today. QQQ is holding the $500 level and that is your line: dip-buy above $500, reduce if it cracks $495 at open. Best ETF entry today: SOXX at $287–290, chips are the only sector with genuine momentum in this mixed tape, target $305 this week. ARKK is lagging QQQ — risk appetite is selective not broad, confirming this is a chips-only bull market.",

      weekAction: "Buy",
      thisWeek: "Best ETF this week: SOXX — Philadelphia Semi index up 5% with AI capex narrative fully intact, buy any dip to $285. SOXX chip trade is very much alive: NVDA and AMD both holding key levels and guiding higher on datacenter demand. Add SOXX on any 2–3% dip this week; avoid IBIT until BTC ETF flows turn positive for 3 consecutive days. IBIT weekly flow is deeply negative — rotate out of IBIT into SOXX as the institutional signal.",

      monthAction: "Hold",
      thisMonth: "Monthly DCA pick: QQQ at $498–505 — AI-driven tech bull with S&P up 16% in two months, add on any 3% dip. SOXX is outperforming QQQ by 5%+ this month, confirming AI chip demand is the engine of this entire rally — stay overweight SOXX. Portfolio split this month: 40% SOXX/QQQ, 35% individual AI stocks (NVDA/AVGO/AMD), 25% cash as crypto is too risky. Long-term conviction hold: SOXX — secular AI chip demand makes every dip a buy through 2028."
    },

    malaysia: {
      todayAction: "Buy",
      today: "KLCI is underpinned by CIMB and Public Bank as ringgit strengthens toward RM4.00, supporting foreign re-entry into Bursa. Best Malaysia stock today: Inari Amertron — global chips are red-hot (Philly Semi +5%), Inari tracks with a 1-day lag and should gap up at open. Ringgit at ~RM4.10 vs USD is well inside foreign-buying territory, directly benefiting semiconductor exporters like Inari and Globetronics. Skip today's ACE market IPOs (MM Computer Systems, Bus Cap Berhad) — no institutional backing and speculative listings in a risk-off crypto environment.",

      weekAction: "Buy",
      thisWeek: "KLCI weekly outlook is bullish — ringgit below RM4.20 means the foreign fund return trade is live, target 1,700+ retest this week. No BNM meeting this week but Fed speakers could move USD/MYR by 0.5–1%; watch RM4.05 as key support for the foreign-buying thesis. Top Malaysia pick this week: Gamuda at RM4.80–4.90 — AI datacenter construction contracts in JB and KL corridor are a direct play on Malaysia's datacenter boom, target RM5.40. Best sectors this week: technology and infrastructure — own CIMB and Gamuda, nothing else.",

      monthAction: "Accumulate",
      thisMonth: "Bursa is in accumulate mode — RM20B+ in foreign outflows from 2025 are reversing as the ringgit firms and US rate clarity improves. Foreign funds are net buying at RM4.10 (well below RM4.70 sell threshold), with ASEAN institutional money rotating back in. Best two stocks this month: Gamuda (datacenter construction, RM4.80 entry, target RM5.40) and Tenaga Nasional (power demand from datacenters, entry RM13.80, target RM15.50). Monthly dividend play: Public Bank at RM4.20 with ~4.5% yield — reliable dividend, foreign fund buying lifting price, ex-date expected Q3."
    }
  },

  perps: [
    {
      asset: "Bitcoin",
      symbol: "BTC",
      direction: "SHORT",
      currentPrice: "$65,200",
      entry: "$65,000 - $66,500",
      tp1: { price: "$62,500", pct: "-3.8%" },
      tp2: { price: "$60,500", pct: "-6.8%" },
      sl:  { price: "$67,800", pct: "+3.2%" },
      leverage: "10x",
      riskReward: "1:2.6",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "BTC is in a confirmed downtrend below $75K with record 10-session ETF outflows totalling $2.97B — institutional selling is relentless and accelerating. Saylor/MicroStrategy sale news spooked leveraged longs and triggered cascading liquidations across major exchanges. Funding rates are flipping from positive to negative as shorts take control of the derivatives market. Macro backdrop is hostile: AI rotation is pulling institutional capital into tech equities and away from crypto entirely. Enter short on any bounce to $65,500–66,500; invalidate and cover if BTC closes above $67,800 on strong volume."
    },
    {
      asset: "Ethereum",
      symbol: "ETH",
      direction: "SHORT",
      currentPrice: "$2,060",
      entry: "$2,050 - $2,110",
      tp1: { price: "$1,975", pct: "-4.0%" },
      tp2: { price: "$1,900", pct: "-7.7%" },
      sl:  { price: "$2,165", pct: "+3.6%" },
      leverage: "10x",
      riskReward: "1:2.0",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "ETH/BTC ratio is falling sharply — ETH is underperforming BTC in a down market, meaning ETH drops harder on continued weakness. No DeFi or on-chain catalyst to support ETH: TVL is flat, ETF outflows are hitting ETH funds alongside BTC funds. Key technical: $2,050 is thin support and a break below triggers a fast move to $1,900. Enter short on any bounce to $2,080–2,110, take first profit at $1,975. Invalidation: ETH reclaims $2,165 with volume, which would signal BTC stabilisation and a broader crypto bounce."
    },
    {
      asset: "Solana",
      symbol: "SOL",
      direction: "SHORT",
      currentPrice: "$75",
      entry: "$75 - $77",
      tp1: { price: "$71.50", pct: "-4.3%" },
      tp2: { price: "$67.50", pct: "-9.8%" },
      sl:  { price: "$80.00", pct: "+5.3%" },
      leverage: "8x",
      riskReward: "1:2.0",
      confidence: "Medium",
      minUSD: "10",
      reasoning: "SOL memecoin and DeFi activity has cooled since the $90 high — declining volumes confirm the speculative fervor is fading fast. SOL rallied from the low $60s to $90 on Alpenglow/Firedancer hype but is now correlated to BTC on the way down as retail exits. Key level: $72–73 is prior consolidation support; a break below targets $67–68 which is the major demand zone from the post-ETF launch rally. SOL is still pricing in too much optimism relative to BTC's sell-off — the $251.8M staking ETF inflows are a longer-term catalyst, not a today catalyst. Enter short at $75–77; invalidate and exit if SOL holds above $80 while BTC bounces, as staking ETF demand could trigger a divergence upward."
    }
  ]

};
