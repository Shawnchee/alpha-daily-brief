window.CRUCIX_DATA = {
  generated: "Sat, 09 May 2026 · 07:00 KL",
  session: "Morning",
  nextRun: "tomorrow 7:00 AM KL",
  mood: "Risk-on Friday close: equities at records, BTC stalling near $80K, weekend pause before Monday open.",

  macro: {
    dxy:      { value: "97.84",  change: "-0.06%", signal: "Dollar soft; supportive for risk assets." },
    gold:     { value: "$3,310", change: "+0.42%", signal: "Bid as real yields ease lower." },
    oil:      { value: "$95.42", change: "+0.64%", signal: "Crude firm on Mideast risk premium." },
    silver:   { value: "$41.20", change: "+0.55%", signal: "Tracks gold; industrial bid intact." },
    yield10y: { value: "4.37%",  change: "-3bps",  signal: "Yields easing; duration getting bid." },
    vix:      { value: "17.19",  change: "+0.64%", signal: "Calm; complacency creeping into options." },
    usdmyr:   { value: "4.05",   change: "-0.10%", signal: "Ringgit firm on weaker dollar tone." },
    sp500:    { value: "7,398.93", change: "+0.84%", signal: "Index at record; breadth improving." },
    verdict: "Soft DXY plus easing 10Y yields and a tame VIX is textbook risk-on, and gold's bid alongside it confirms broad liquidity expansion. Crypto and growth equities benefit, while KLSE gets a tailwind from a stronger ringgit. Watch for any yield reversal — that would unwind this Goldilocks setup quickly."
  },

  crypto: {
    dominance: { value: "N/A", change: "N/A", signal: "BTC stalling; alts not yet leading." },
    main: [
      { name: "Bitcoin",  symbol: "BTC", price: "$80,306", marketCap: "$1.59T", change1h: "N/A", change24h: "+0.33%", change7d: "N/A", insight: "BTC consolidating below the $82K breakout zone after rallying from $72K. Miner profit-taking (3,400 BTC sold since April) is capping upside near term." },
      { name: "Ethereum", symbol: "ETH", price: "$2,283", marketCap: "$275B",   change1h: "N/A", change24h: "+0.50%", change7d: "N/A", insight: "ETH lagging BTC and stuck below $2,400. Needs ETH/BTC reversal to spark altseason rotation." },
      { name: "Solana",   symbol: "SOL", price: "$93.92",  marketCap: "$45B",    change1h: "N/A", change24h: "+0.35%", change7d: "N/A", insight: "SOL holding $90 floor as ecosystem activity stays elevated. Memecoin volume on Solana remains a key sentiment gauge." }
    ],
    memecoins: [
      { name: "Dogecoin",  symbol: "DOGE", price: "$0.1065",     change24h: "-1.20%", note: "Bearish flip; momentum fading." },
      { name: "Pepe",      symbol: "PEPE", price: "$0.00000820", change24h: "+0.40%", note: "Above EMAs; mild bullish." },
      { name: "Shiba Inu", symbol: "SHIB", price: "$0.00000625", change24h: "-0.50%", note: "Range-bound between EMAs." },
      { name: "Bonk",      symbol: "BONK", price: "N/A",         change24h: "N/A",    note: "SOL-linked; tracks ecosystem." },
      { name: "dogwifhat", symbol: "WIF",  price: "N/A",         change24h: "N/A",    note: "Speculative SOL memecoin." }
    ],
    verdict: "Crypto is risk-on but lethargic — BTC needs a clean break above $82K to unlock the next leg. Memecoins are mixed, signaling no broad altseason yet. Hold core BTC/ETH; wait for dominance to roll over before rotating to alts."
  },

  usMarkets: {
    indices: [
      { name: "S&P 500",      value: "7,398.93",  change: "+0.84%" },
      { name: "Nasdaq",       value: "26,247.08", change: "+1.71%" },
      { name: "Dow",          value: "49,609.16", change: "+0.02%" },
      { name: "VIX",          value: "17.19",     change: "+0.64%" },
      { name: "Russell 2000", value: "N/A",       change: "N/A" }
    ],
    etfs: [
      { ticker: "VOO",  name: "Vanguard S&P 500",  price: "$678.26", change: "Fri close", insight: "Tracks S&P at record; core long-term hold." },
      { ticker: "QQQ",  name: "Nasdaq 100",        price: "$711.23", change: "Fri close", insight: "Tech-heavy; benefiting from AI capex tailwind." },
      { ticker: "SPY",  name: "S&P 500 SPDR",      price: "$737.76", change: "Fri close", insight: "Liquid S&P proxy; institutional flow magnet." },
      { ticker: "VTI",  name: "Total Market",      price: "—",       change: "Fri close", insight: "Broadest US exposure; mirrors S&P 500 returns closely." },
      { ticker: "ARKK", name: "ARK Innovation",    price: "—",       change: "Fri close", insight: "High-beta growth basket; leveraged to risk-on regime." },
      { ticker: "SOXX", name: "Semiconductor ETF", price: "$517.03", change: "Fri close", insight: "Direct AI capex play, volatile but trending higher." },
      { ticker: "IBIT", name: "Bitcoin ETF",       price: "$44.61",  change: "+0.33%",    insight: "BTC spot ETF; tracks bitcoin minus modest premium decay." },
      { ticker: "XLK",  name: "Tech Sector",       price: "—",       change: "Fri close", insight: "Sector tilt to mega-cap tech; correlated to QQQ." },
      { ticker: "GLD",  name: "Gold ETF",          price: "$309.30", change: "+0.42%",    insight: "Gold proxy; hedge as real yields drift lower." }
    ],
    stocks: [
      { ticker: "META",  name: "Meta",          price: "$616.81", change: "+0.64%", notable: false, insight: "Ad revenue strength plus AI capex monetization keeps multiple supported." },
      { ticker: "NVDA",  name: "Nvidia",        price: "$211.50", change: "+1.77%", notable: true,  insight: "AI compute backbone; data-center demand still the dominant earnings driver." },
      { ticker: "TSLA",  name: "Tesla",         price: "$411.79", change: "+3.28%", notable: true,  insight: "Strongest mega-cap mover Friday; robotaxi narrative re-igniting bid." },
      { ticker: "AAPL",  name: "Apple",         price: "$235.40", change: "+0.40%", notable: false, insight: "Defensive mega-cap; services growth offsetting hardware cycle softness." },
      { ticker: "MSFT",  name: "Microsoft",     price: "$478.20", change: "+0.55%", notable: false, insight: "Azure AI revenue inflecting; capital return story intact." },
      { ticker: "GOOGL", name: "Alphabet",      price: "$198.40", change: "+0.70%", notable: false, insight: "Search resilient; Gemini distribution narrowing the AI gap." },
      { ticker: "AMZN",  name: "Amazon",        price: "$232.10", change: "+0.85%", notable: false, insight: "AWS reaccelerating; retail margin expansion underrated." },
      { ticker: "NFLX",  name: "Netflix",       price: "$92.37",  change: "-0.30%", notable: false, insight: "Recently downgraded to Hold; ad-tier monetization is the swing factor." },
      { ticker: "AMD",   name: "AMD",           price: "$155.20", change: "+1.10%", notable: false, insight: "MI accelerator ramp the key — share gains vs NVDA still incremental." },
      { ticker: "PLTR",  name: "Palantir",      price: "$137.00", change: "+1.20%", notable: true,  insight: "Government and commercial AIP wins keep the multiple stretched but intact." },
      { ticker: "CRWD",  name: "CrowdStrike",   price: "$420.00", change: "+0.50%", notable: false, insight: "Cyber consolidation tailwind; Falcon platform expansion drives ARR." },
      { ticker: "COIN",  name: "Coinbase",      price: "$252.00", change: "+0.30%", notable: false, insight: "BTC-correlated; stablecoin and custody fees diversify the revenue mix." },
      { ticker: "MSTR",  name: "MicroStrategy", price: "$181.63", change: "+1.00%", notable: true,  insight: "Saylor's 'Bitcoin per share' framing keeps NAV premium volatile but elevated." },
      { ticker: "APP",   name: "AppLovin",      price: "$385.00", change: "+1.50%", notable: false, insight: "AXON ad engine still the structural story; mobile gaming spend resilient." },
      { ticker: "SMCI",  name: "Super Micro",   price: "$35.37",  change: "+5.21%", notable: true,  insight: "Sharp bounce on AI server demand; governance overhang lingers." }
    ],
    trending: [
      { ticker: "SMCI", change: "+5.21%" },
      { ticker: "TSLA", change: "+3.28%" },
      { ticker: "NVDA", change: "+1.77%" },
      { ticker: "APP",  change: "+1.50%" },
      { ticker: "PLTR", change: "+1.20%" }
    ],
    verdict: "AI trade is alive and well — semis (SMCI, NVDA) and platform names (PLTR, APP) led Friday. Rotation into Tesla suggests risk appetite broadening beyond pure AI. Own AI infrastructure and large-cap quality; avoid stretched defensives that lag in this regime."
  },

  malaysia: {
    klci:   { value: "1,747.43", change: "+0.44%", context: "KLCI closed Friday up 0.44% on broad gains. Monday outlook constructive given softer DXY and firmer ringgit." },
    usdmyr: { value: "4.05",     change: "-0.10%", signal: "Ringgit firm; supports importers and sentiment." },
    stocks: [
      { ticker: "MAY",    name: "Maybank (1155.KL)",        price: "RM11.18", change: "Fri close", insight: "Largest Malaysian bank; OPR steady at 3.00% supports stable NIM." },
      { ticker: "CIMB",   name: "CIMB (1023.KL)",           price: "RM7.69",  change: "Fri close", insight: "Regional ASEAN exposure; Indonesia subsidiary remains key earnings driver." },
      { ticker: "PBBANK", name: "Public Bank (1295.KL)",    price: "—",       change: "Fri close", insight: "Defensive retail bank; high asset quality and consistent ROE." },
      { ticker: "RHB",    name: "RHB Bank (1066.KL)",       price: "—",       change: "Fri close", insight: "Mid-tier bank; dividend yield among the most attractive on Bursa." },
      { ticker: "TENAGA", name: "Tenaga (5347.KL)",         price: "—",       change: "Fri close", insight: "Utility benefiting from data-center demand and NETR capex pipeline." },
      { ticker: "INARI",  name: "Inari (0138.KL)",          price: "—",       change: "Fri close", insight: "Semi proxy levered to NVDA cycle and RF packaging demand." },
      { ticker: "AXIATA", name: "Axiata (4863.KL)",         price: "—",       change: "Fri close", insight: "Telco group; CelcomDigi merger synergies still being unlocked." },
      { ticker: "IHH",    name: "IHH Healthcare (5168.KL)", price: "—",       change: "Fri close", insight: "Regional hospital group; defensive earnings with FX upside." },
      { ticker: "MYEG",   name: "MyEG (0166.KL)",           price: "—",       change: "Fri close", insight: "Digital concession plays; immigration and Zetrix blockchain optionality." },
      { ticker: "MAXIS",  name: "Maxis (6888.KL)",          price: "—",       change: "Fri close", insight: "5G monetization slow but dividend yield supports defensive allocation." }
    ],
    ipos: [
      { name: "—", sector: "—", price: "—", listingDate: "—", status: "—", note: "No major Bursa IPO catalysts flagged in Friday's tape." }
    ],
    verdict: "Ringgit firmness around 4.05 is the cleanest tailwind for Bursa heading into Monday. Inari is the highest-conviction beta to Friday's NVDA/SMCI strength. Banks (Maybank, CIMB) remain the core defensive carry while semis offer the growth kicker."
  },

  news: [
    { headline: "S&P 500 and Nasdaq close at records as Intel and AI names lead", source: "CNBC", time: "12h ago", sentiment: "BULLISH", meaning: "Records confirm risk-on regime; AI capex thesis still the lead horse." },
    { headline: "Bitcoin stalls below $82K as miners sell 3,400 BTC since April", source: "KuCoin", time: "8h ago", sentiment: "WATCH", meaning: "Miner profit-taking caps rally; needs absorption before next leg up." },
    { headline: "10-year Treasury yield eases to 4.37%, supporting duration", source: "Trading Economics", time: "10h ago", sentiment: "BULLISH", meaning: "Lower yields fuel multiple expansion in growth and crypto." },
    { headline: "CME to launch Bitcoin volatility futures product", source: "CoinDesk", time: "6h ago", sentiment: "BULLISH", meaning: "Deepens institutional crypto market structure and hedging tools." },
    { headline: "Tesla surges 3.28% on robotaxi narrative momentum", source: "Yahoo Finance", time: "14h ago", sentiment: "BULLISH", meaning: "Risk appetite broadening beyond AI mega-caps to autos." },
    { headline: "Super Micro jumps 5.21% on AI server demand reacceleration", source: "Yahoo Finance", time: "12h ago", sentiment: "BULLISH", meaning: "AI infrastructure spend cycle still has further upside ahead." },
    { headline: "KLCI rises 0.44% to 1,747 led by banks and utilities", source: "Bursa Malaysia", time: "16h ago", sentiment: "BULLISH", meaning: "Domestic flows constructive; ringgit strength reinforcing the bid." },
    { headline: "DXY softens to 97.84 as Fed cut expectations re-emerge", source: "Investing.com", time: "10h ago", sentiment: "BULLISH", meaning: "Dollar weakness lifts EM, gold, and Asian currency complex." }
  ],

  goldSummary: {
    "Price":  { value: "$3,310", change: "+0.42%", note: "Bid on softer dollar and yields." },
    "Open":   { value: "$3,295", change: "", note: "" },
    "High":   { value: "$3,322", change: "", note: "Day high" },
    "Low":    { value: "$3,288", change: "", note: "Day low" },
    "52W High": { value: "N/A", change: "", note: "" },
    "52W Low":  { value: "N/A", change: "", note: "" }
  },

  goldPivots: {
    classic: [
      { label: "R3",    value: "$3,362" },
      { label: "R2",    value: "$3,341" },
      { label: "R1",    value: "$3,326" },
      { label: "Pivot", value: "$3,307" },
      { label: "S1",    value: "$3,292" },
      { label: "S2",    value: "$3,273" },
      { label: "S3",    value: "$3,258" }
    ],
    fibonacci: [
      { label: "R3",    value: "$3,341" },
      { label: "R2",    value: "$3,328" },
      { label: "R1",    value: "$3,320" },
      { label: "Pivot", value: "$3,307" },
      { label: "S1",    value: "$3,294" },
      { label: "S2",    value: "$3,286" },
      { label: "S3",    value: "$3,273" }
    ],
    camarilla: [
      { label: "R4", value: "$3,329" },
      { label: "R3", value: "$3,319" },
      { label: "R2", value: "$3,316" },
      { label: "R1", value: "$3,313" },
      { label: "S1", value: "$3,307" },
      { label: "S2", value: "$3,304" },
      { label: "S3", value: "$3,301" },
      { label: "S4", value: "$3,291" }
    ],
    note: "Gold trading above the classic pivot of $3,307 keeps the bias bullish into Monday."
  }
};
