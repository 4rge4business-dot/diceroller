import Head from 'next/head'
import { useState, useEffect } from 'react'
import GameSelector from '../components/GameSelector'
import DiceRoller from '../components/DiceRoller'
import Leaderboard from '../components/Leaderboard'
import { GAME_DESCRIPTIONS, DEFAULT_DICE_SETS } from '../data/gameDescriptions'

export default function Home(){
  const [active, setActive] = useState(DEFAULT_DICE_SETS[0].id)
  const activeSet = DEFAULT_DICE_SETS.find(s=>s.id===active)
  useEffect(()=>{ const t = localStorage.getItem('dicearcade.theme') || 'arcade'; document.body.setAttribute('data-theme', t) },[])
  return (
    <div>
      <Head>
        <title>Dice Arcade — Roll to Play</title>
        <meta name="description" content="Dice Arcade — story dice, emoji dice, workout dice, and more. Roll to get prompts and play instantly." />
      </Head>
      <header className="hero"><div className="container"><h1>🎲 Dice Arcade</h1><p className="tag">Roll the dice. Create stories. Play games.</p></div></header>
      <main className="container">
        <GameSelector sets={DEFAULT_DICE_SETS} active={active} onChange={setActive} />
        <section className="roller-section">
          <div className="ad-slot ad-inline">Ad placeholder</div>
          <DiceRoller set={activeSet} />
          <Leaderboard />
        </section>
        <section className="game-descriptions"><h2>How to Play</h2>{GAME_DESCRIPTIONS.map(d=>(<article key={d.id}><h3>{d.title}</h3><p>{d.blurb}</p></article>))}</section>
      </main>
      <footer className="container footer"><a href='/policies/privacy-policy'>Privacy</a> · <a href='/policies/terms-of-service'>TOS</a></footer>
      <style jsx>{` .container{max-width:980px;margin:0 auto;padding:24px} .hero{padding:36px;text-align:center} .ad-slot{border:2px dashed rgba(255,255,255,0.06);padding:12px;margin:12px 0}`}</style>
    </div>
  )
}
